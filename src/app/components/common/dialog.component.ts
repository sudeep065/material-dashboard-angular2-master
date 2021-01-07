import { MatDialogRef, MAT_DIALOG_DATA} from '@angular/material/dialog';
import { Component, Inject } from '@angular/core';

@Component({
    selector: 'app-dialog',
    templateUrl: './dialog.component.html'
    
  })
  export class DialogOverviewExampleDialog {
  
    constructor(
      public dialogRef: MatDialogRef<DialogOverviewExampleDialog>,
      @Inject(MAT_DIALOG_DATA) public data: {message: string }) {}
  
    onNoClick(): void {
      this.dialogRef.close();
    }
  }  