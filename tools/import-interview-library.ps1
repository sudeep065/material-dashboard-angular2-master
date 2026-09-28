[CmdletBinding()]
param(
  [string]$Source = 'C:\Users\sudee\Downloads\Interview-Questions-Ans\CHATGPT-complete_interview_questions_and_detailed_answers.docx',
  [string]$Output = ''
)

$ErrorActionPreference = 'Stop'
Add-Type -AssemblyName System.IO.Compression.FileSystem
Add-Type -AssemblyName System.IO.Compression

$categoryIds = @{
  'C# and .NET' = 'csharp'
  'Asynchronous Programming and Performance' = 'async-performance'
  'ASP.NET Core and Web API' = 'aspnet-core-web-api'
  'SQL Server and Entity Framework Core' = 'sql-ef-core'
  'Caching and Redis' = 'caching-redis'
  'React' = 'react'
  'Architecture and Distributed Systems' = 'architecture-distributed-systems'
  'Azure Integration and Delivery' = 'azure-integration-delivery'
  'Security and Identity' = 'security-identity'
  'Generative AI and RAG' = 'generative-ai-rag'
  'Production Troubleshooting and Leadership' = 'production-troubleshooting-leadership'
  'Testing' = 'testing'
  'Coding Exercises' = 'coding-exercises'
}
$expectedCounts = @{
  'C# and .NET' = 31
  'Asynchronous Programming and Performance' = 13
  'ASP.NET Core and Web API' = 30
  'SQL Server and Entity Framework Core' = 32
  'Caching and Redis' = 5
  'React' = 7
  'Architecture and Distributed Systems' = 20
  'Azure Integration and Delivery' = 19
  'Security and Identity' = 13
  'Generative AI and RAG' = 7
  'Production Troubleshooting and Leadership' = 16
  'Testing' = 7
  'Coding Exercises' = 2
}

function Get-ParagraphStyle([System.Xml.XmlNode]$Paragraph, [System.Xml.XmlNamespaceManager]$Ns) {
  $style = $Paragraph.SelectSingleNode('./w:pPr/w:pStyle', $Ns)
  if ($null -eq $style) { return '' }
  return $style.GetAttribute('val', 'http://schemas.openxmlformats.org/wordprocessingml/2006/main')
}

function Get-ParagraphText([System.Xml.XmlNode]$Paragraph, [System.Xml.XmlNamespaceManager]$Ns) {
  $builder = [System.Text.StringBuilder]::new()
  foreach ($node in $Paragraph.SelectNodes('.//w:t|.//w:tab|.//w:br|.//w:cr', $Ns)) {
    switch ($node.LocalName) {
      't' { [void]$builder.Append($node.InnerText) }
      'tab' { [void]$builder.Append("`t") }
      default { [void]$builder.Append("`n") }
    }
  }
  return $builder.ToString()
}

function Get-CodeLanguage([string]$Text) {
  if ($Text -match '(?im)^\s*(WITH\s+\w+\s+AS\s*\(|SELECT\s+|FROM\s+dbo\.|INSERT\s+INTO\s+|UPDATE\s+\w+\s+SET|DELETE\s+FROM|CREATE\s+TABLE|ALTER\s+TABLE|ROW_NUMBER\s*\(|DENSE_RANK\s*\()') { return 'sql' }
  if ($Text -match '(?im)^\s*(static\s+|public\s+|private\s+|using\s+[\w.]+;|namespace\s+|var\s+\w+\s*=\s*await|ArgumentNullException\.|//\s*(Point|On conflict)|foreach\s*\(|return\s+await\s+\w+\.)') { return 'csharp' }
  if ($Text -match '(?im)^\s*(\{\s*"|\[\s*\{)') { return 'json' }
  if ($Text -match '(?im)^\s*(SELECT|INSERT|UPDATE|DELETE|CREATE TABLE|WITH\s+\w+\s+AS)\b') { return 'sql' }
  if ($Text -match '(?im)^\s*(using\s+[\w.]+;|namespace\s+|public\s+(class|static|async)|var\s+\w+\s*=\s*await)') { return 'csharp' }
  if ($Text -match '(?im)^\s*(import\s+React|const\s+\w+\s*=\s*\(|export\s+default|interface\s+\w+)') { return 'typescript' }
  if ($Text -match '(?im)^\s*[{\[]') { return 'json' }
  if ($Text -match '(?im)^\s*(curl\s|dotnet\s|npm\s|az\s|kubectl\s|docker\s)') { return 'bash' }
  return $null
}

if (-not (Test-Path -LiteralPath $Source)) { throw "Source DOCX not found: $Source" }

$fileStream = [IO.FileStream]::new((Resolve-Path -LiteralPath $Source).Path, [IO.FileMode]::Open, [IO.FileAccess]::Read, [IO.FileShare]::ReadWrite)
$archive = [IO.Compression.ZipArchive]::new($fileStream, [IO.Compression.ZipArchiveMode]::Read, $false)
try {
  $entry = $archive.GetEntry('word/document.xml')
  if ($null -eq $entry) { throw 'The DOCX does not contain word/document.xml.' }
  $stream = $entry.Open()
  try {
    $reader = [IO.StreamReader]::new($stream)
    try { [xml]$document = $reader.ReadToEnd() } finally { $reader.Dispose() }
  } finally { $stream.Dispose() }
} finally { $archive.Dispose() }

$ns = [System.Xml.XmlNamespaceManager]::new($document.NameTable)
$ns.AddNamespace('w', 'http://schemas.openxmlformats.org/wordprocessingml/2006/main')
$paragraphs = @($document.SelectNodes('//w:body/w:p', $ns))
$categories = [System.Collections.Generic.List[object]]::new()
$questions = [System.Collections.Generic.List[object]]::new()
$notes = [System.Collections.Generic.List[string]]::new()
$notes.Add('The document describes an original wording as bold, but all Question paragraphs use the same bold paragraph style; no primary wording is inferred. Each wording stays grouped with its source labels and shared answer.')
$currentCategory = $null
$currentQuestion = $null
$answerStarted = $false
$activeVariant = $null

foreach ($paragraph in $paragraphs) {
  $style = Get-ParagraphStyle $paragraph $ns
  $text = Get-ParagraphText $paragraph $ns
  $headingText = [regex]::Replace($text, '[\r\n\t\s]+', ' ').Trim()

  if ($style -eq 'Heading1') {
    if ($null -ne $currentQuestion) { $questions.Add($currentQuestion) }
    $currentQuestion = $null
    $activeVariant = $null
    $answerStarted = $false
    if ($categoryIds.ContainsKey($headingText)) {
      $currentCategory = [pscustomobject]@{ id = $categoryIds[$headingText]; name = $headingText }
      $categories.Add($currentCategory)
    } else {
      $currentCategory = $null
    }
    continue
  }

  if ($style -eq 'Heading2' -and $headingText -match '^(Q\d+)\s+(.+?)\s*$') {
    if ($null -ne $currentQuestion) { $questions.Add($currentQuestion) }
    if ($null -eq $currentCategory) {
      $currentQuestion = $null
      continue
    }
    $currentQuestion = [pscustomobject]@{
      id = $Matches[1]
      title = $Matches[2].Trim()
      categoryId = $currentCategory.id
      tags = @()
      variants = [System.Collections.Generic.List[object]]::new()
      sections = [System.Collections.Generic.List[object]]::new()
      references = [System.Collections.Generic.List[string]]::new()
    }
    $activeVariant = $null
    $answerStarted = $false
    continue
  }

  if ($null -eq $currentQuestion) { continue }

  if ($style -eq 'Question') {
    if ([string]::IsNullOrWhiteSpace($text)) { continue }
    $variant = [pscustomobject]@{
      wording = $text
      sources = [System.Collections.Generic.List[string]]::new()
    }
    $currentQuestion.variants.Add($variant)
    $activeVariant = $variant
    continue
  }

  if ($style -eq 'Source' -and $text -match '^\s*Source\s*:') {
    if ($null -ne $activeVariant -and -not $answerStarted) {
      $activeVariant.sources.Add($text)
    } else {
      $notes.Add("Unpaired source label in $($currentQuestion.id): $text")
      $currentQuestion.references.Add($text)
    }
    continue
  }

  if ($text.Trim() -eq 'Explanation') {
    $answerStarted = $true
    $activeVariant = $null
    continue
  }

  if (-not $answerStarted -or ([string]::IsNullOrWhiteSpace($text) -and $style -ne 'Code')) { continue }

  if ($style -eq 'Source' -and $text -match '^\s*Further reading\s*:') {
    $currentQuestion.references.Add($text)
    continue
  }

  if ($style -eq 'Code') {
    $previousSection = if ($currentQuestion.sections.Count) { $currentQuestion.sections[$currentQuestion.sections.Count - 1] } else { $null }
    if ($null -ne $previousSection -and $previousSection.type -eq 'code') {
      $previousSection.content += "`n" + $text
      if (-not $previousSection.language) {
        $language = Get-CodeLanguage $previousSection.content
        if ($language) { $previousSection | Add-Member -NotePropertyName language -NotePropertyValue $language }
      }
    } else {
      $section = [pscustomobject]@{ type = 'code'; content = $text }
      $language = Get-CodeLanguage $text
      if ($language) { $section | Add-Member -NotePropertyName language -NotePropertyValue $language }
      $currentQuestion.sections.Add($section)
    }
    continue
  }
  $section = [pscustomobject]@{ type = 'paragraph'; content = $text }
  $currentQuestion.sections.Add($section)
}
if ($null -ne $currentQuestion) { $questions.Add($currentQuestion) }

$actualCounts = @{}
foreach ($category in $categories) { $actualCounts[$category.name] = @($questions | Where-Object categoryId -eq $category.id).Count }
$duplicateIds = @($questions | Group-Object id | Where-Object Count -gt 1)
if ($categories.Count -ne 13) { throw "Expected 13 content categories; extracted $($categories.Count)." }
if ($questions.Count -ne 202) { throw "Expected 202 answer blocks; extracted $($questions.Count)." }
if ($duplicateIds.Count -gt 0) { throw "Duplicate question IDs: $(($duplicateIds.Name) -join ', ')" }
foreach ($name in $expectedCounts.Keys) {
  if ($actualCounts[$name] -ne $expectedCounts[$name]) { throw "Category '$name': expected $($expectedCounts[$name]), found $($actualCounts[$name])." }
}
foreach ($question in $questions) {
  if ($question.variants.Count -eq 0) { throw "Question $($question.id) has no retained wording." }
  if ($question.sections.Count -eq 0) { throw "Question $($question.id) has no retained answer content." }
  foreach ($variant in $question.variants) {
    if ($variant.sources.Count -eq 0) { throw "Question wording in $($question.id) has no source mapping." }
  }
  foreach ($section in $question.sections) {
    if ($section.type -eq 'code' -and -not $section.language) {
      $notes.Add("Code language needs review in $($question.id); source formatting retained without a guessed language label.")
    }
  }
}
for ($number = 1; $number -le 202; $number++) {
  $expectedId = 'Q{0:D3}' -f $number
  if (-not ($questions | Where-Object id -eq $expectedId)) { throw "Missing stable question ID $expectedId." }
}

$payload = [ordered]@{
  schemaVersion = 1
  sourceFileName = [IO.Path]::GetFileName($Source)
  categories = @($categories)
  questions = @($questions)
  conversionNotes = @($notes | Select-Object -Unique)
}
if ([string]::IsNullOrWhiteSpace($Output)) {
  $Output = '..\src\assets\data\interview-questions.json'
}
$outputPath = [IO.Path]::GetFullPath((Join-Path $PSScriptRoot $Output))
[IO.Directory]::CreateDirectory([IO.Path]::GetDirectoryName($outputPath)) | Out-Null
$json = ConvertTo-Json -InputObject $payload -Depth 20
[IO.File]::WriteAllText($outputPath, $json, [Text.UTF8Encoding]::new($false))

$categoryReport = [ordered]@{}
foreach ($category in $categories) { $categoryReport[$category.name] = $actualCounts[$category.name] }
$report = [ordered]@{
  sourceFile = [IO.Path]::GetFileName($Source)
  categories = $categories.Count
  answerBlocks = $questions.Count
  alternateWordings = ($questions | ForEach-Object { $_.variants.Count } | Measure-Object -Sum).Sum
  sourceMappings = ($questions | ForEach-Object { $_.variants | ForEach-Object { $_.sources.Count } } | Measure-Object -Sum).Sum
  answerSections = ($questions | ForEach-Object { $_.sections.Count } | Measure-Object -Sum).Sum
  codeSections = ($questions | ForEach-Object { @($_.sections | Where-Object type -eq 'code').Count } | Measure-Object -Sum).Sum
  categoryTotals = $categoryReport
  conversionNotes = @($payload.conversionNotes)
  output = $outputPath
}
$report | ConvertTo-Json -Depth 5
