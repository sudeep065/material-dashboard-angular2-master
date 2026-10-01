(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["layouts-admin-layout-admin-layout-module"],{

/***/ "/de2":
/*!********************************************************!*\
  !*** ./src/app/user-profile/user-profile.component.ts ***!
  \********************************************************/
/*! exports provided: UserProfileComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UserProfileComponent", function() { return UserProfileComponent; });
/* harmony import */ var _raw_loader_user_profile_component_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! raw-loader!./user-profile.component.html */ "RU0v");
/* harmony import */ var _user_profile_component_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./user-profile.component.css */ "9WCt");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "fXoL");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var UserProfileComponent = /** @class */ (function () {
    function UserProfileComponent() {
    }
    UserProfileComponent.prototype.ngOnInit = function () {
    };
    UserProfileComponent.ctorParameters = function () { return []; };
    UserProfileComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Component"])({
            selector: 'app-user-profile',
            template: _raw_loader_user_profile_component_html__WEBPACK_IMPORTED_MODULE_0__["default"],
            styles: [_user_profile_component_css__WEBPACK_IMPORTED_MODULE_1__["default"]]
        }),
        __metadata("design:paramtypes", [])
    ], UserProfileComponent);
    return UserProfileComponent;
}());



/***/ }),

/***/ "1wXo":
/*!*******************************************************************!*\
  !*** ./src/app/interview-library/interview-library.component.css ***!
  \*******************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (":host { display: block; min-width: 0; color: #24354a; }\n.interview-page { min-height: calc(100vh - 80px); padding: 54px clamp(16px, 2.7vw, 38px) 45px; background: #f5f7f8; }\n.page-heading, .toolbar, .library-shell { width: 100%; max-width: 1500px; margin-right: auto; margin-left: auto; }\n.page-heading { display: flex; align-items: flex-end; justify-content: space-between; gap: 24px; margin-bottom: 24px; }\n.page-kicker { margin: 0 0 8px; color: #47817b; font-size: 10px; font-weight: 750; letter-spacing: .14em; }\n.page-heading h1 { margin: 0; color: #1e2f43; font-size: clamp(29px, 3vw, 39px); font-weight: 690; letter-spacing: -.045em; line-height: 1.15; }\n.page-intro { margin: 9px 0 0; color: #657487; font-size: 14px; line-height: 1.5; }\n.continue-button { display: inline-flex; align-items: center; gap: 12px; min-height: 53px; padding: 8px 15px; border: 1px solid #dbe4e7; border-radius: 9px; background: #fff; color: #2b6e69; text-align: left; cursor: pointer; }\n.continue-button > span:first-child { font-size: 20px; }\n.continue-button strong, .continue-button small { display: block; }\n.continue-button strong { color: #2b454c; font-size: 12px; }\n.continue-button small { margin-top: 3px; color: #778597; font-size: 10px; }\n.continue-button:hover { border-color: #8bb2ae; background: #f8fbfa; }\n.toolbar { display: flex; flex-wrap: wrap; align-items: center; gap: 9px; margin-bottom: 17px; padding: 12px; border: 1px solid #e2e8eb; border-radius: 11px; background: #fff; box-shadow: 0 2px 7px rgba(40, 58, 70, .025); }\n.search-field { position: relative; display: flex; flex: 1 1 290px; align-items: center; min-width: 190px; }\n.search-icon { position: absolute; left: 13px; color: #6d7d8d; font-size: 22px; line-height: 1; transform: rotate(-20deg); pointer-events: none; }\n.search-field input, .filter-control select { width: 100%; height: 41px; border: 1px solid #e0e6ea; border-radius: 7px; outline: 0; background: #fff; color: #33465a; font: inherit; font-size: 12px; }\n.search-field input { padding: 0 48px 0 40px; }\n.search-field input::-moz-placeholder { color: #8591a0; }\n.search-field input::placeholder { color: #8591a0; }\n.search-field input:focus, .filter-control select:focus { border-color: #57928d; box-shadow: 0 0 0 3px rgba(76, 141, 135, .14); }\n.keyboard-hint { position: absolute; right: 11px; padding: 3px 6px; border: 1px solid #e3e8eb; border-radius: 4px; color: #8793a0; font-size: 10px; }\n.filter-control { flex: 0 1 177px; }\n.filter-control select { padding: 0 28px 0 11px; }\n.bookmark-filter, .start-button { display: inline-flex; align-items: center; justify-content: center; gap: 7px; min-height: 41px; padding: 0 13px; border: 1px solid #dce4e8; border-radius: 7px; background: #fff; color: #475a6e; font: inherit; font-size: 12px; font-weight: 650; cursor: pointer; white-space: nowrap; }\n.bookmark-filter:hover { border-color: #9cb9b5; background: #f7faf9; }\n.bookmark-filter.is-active { border-color: #8db5b0; background: #edf6f4; color: #286d69; }\n.bookmark-filter > span { font-size: 16px; }\n.start-button { border-color: #286d69; background: #286d69; color: #fff; }\n.start-button:hover { border-color: #205b57; background: #205b57; }\n.filter-notice { max-width: 1500px; margin: -5px auto 14px; padding: 11px 14px; border: 1px solid #ead6b6; border-radius: 7px; background: #fffaf1; color: #795519; font-size: 12px; }\n.library-shell { display: grid; grid-template-columns: minmax(275px, 330px) minmax(0, 1fr); min-height: min(690px, calc(100vh - 290px)); overflow: hidden; border: 1px solid #e0e6e9; border-radius: 12px; background: #fff; box-shadow: 0 4px 18px rgba(35, 54, 69, .04); }\n.question-panel { display: flex; min-height: 0; flex-direction: column; border-right: 1px solid #e5eaed; background: #fff; }\n.results-heading { display: flex; align-items: flex-start; justify-content: space-between; gap: 8px; padding: 19px 17px 14px; border-bottom: 1px solid #edf0f2; }\n.results-heading h2 { margin: 0; color: #283a4f; font-size: 15px; font-weight: 700; }\n.results-heading p { margin: 5px 0 0; color: #7a8796; font-size: 11px; }\n.clear-button, .clear-empty-button { padding: 4px 0; border: 0; background: transparent; color: #2c706b; font: inherit; font-size: 11px; font-weight: 700; cursor: pointer; white-space: nowrap; }\n.clear-button:hover, .clear-empty-button:hover { text-decoration: underline; }\n.question-list { flex: 1; min-height: 0; overflow-y: auto; overscroll-behavior: contain; }\n.question-item { display: block; padding: 14px 17px 13px; border-bottom: 1px solid #edf0f2; color: inherit; text-decoration: none; transition: background-color .12s ease; }\n.question-item:hover { background: #f7faf9; text-decoration: none; }\n.question-item:focus-visible, .continue-button:focus-visible, .toolbar button:focus-visible, .clear-button:focus-visible, .clear-empty-button:focus-visible { position: relative; z-index: 1; outline: 3px solid #5aa49e; outline-offset: -2px; }\n.question-item.is-selected { border-left: 3px solid #2e7973; padding-left: 14px; background: #eff6f5; }\n.question-item-top { display: flex; align-items: center; justify-content: space-between; gap: 8px; }\n.item-category { overflow: hidden; color: #41807a; font-size: 9px; font-weight: 750; letter-spacing: .08em; text-overflow: ellipsis; text-transform: uppercase; white-space: nowrap; }\n.item-id { color: #91a0ac; font-size: 9px; font-weight: 650; }\n.item-title { display: -webkit-box; overflow: hidden; margin-top: 7px; color: #2a3c50; font-size: 12px; font-weight: 650; line-height: 1.48; -webkit-box-orient: vertical; -webkit-line-clamp: 2; }\n.item-meta { display: flex; align-items: center; gap: 6px; margin-top: 9px; color: #7d8996; font-size: 10px; }\n.study-dot { width: 7px; height: 7px; border-radius: 50%; background: #aab4be; }\n.dot-needs-review { background: #d79637; }\n.dot-confident { background: #348369; }\n.device-note { margin: 0; padding: 10px 17px; border-top: 1px solid #edf0f2; color: #8793a0; font-size: 9px; }\n.panel-message { display: grid; flex: 1; align-content: center; justify-items: center; padding: 28px 18px; color: #6b7a8c; text-align: center; font-size: 12px; }\n.panel-message strong { margin-top: 11px; color: #33465a; font-size: 13px; }\n.panel-message p { max-width: 26ch; margin: 7px 0 5px; line-height: 1.6; }\n.empty-glyph { color: #3e817b; font-size: 24px; }\n.panel-message .clear-empty-button { margin-top: 10px; font-size: 12px; }\n.error-message { color: #8a4b3e; line-height: 1.6; }\n.reader-panel { min-width: 0; min-height: 0; overflow-y: auto; background: #fff; }\n.reader-placeholder { display: grid; min-height: 540px; align-content: center; justify-items: center; padding: 30px; text-align: center; }\n.placeholder-mark { display: grid; width: 52px; height: 52px; place-items: center; border: 1px solid #e3ebea; border-radius: 13px; background: #f5f9f8; color: #40817b; font-size: 18px; font-weight: 700; }\n.reader-placeholder h2 { margin: 17px 0 6px; color: #2a3c50; font-size: 18px; }\n.reader-placeholder p { max-width: 38ch; margin: 0; color: #748194; font-size: 13px; line-height: 1.65; }\n.placeholder-tip { margin-top: 23px; color: #8793a0; font-size: 10px; }\n.visually-hidden { position: absolute; width: 1px; height: 1px; padding: 0; overflow: hidden; clip: rect(0, 0, 0, 0); white-space: nowrap; border: 0; }\n@media (max-width: 1000px) {\n  .toolbar { gap: 8px; }\n  .filter-control { flex: 1 1 140px; }\n  .search-field { flex-basis: 100%; }\n  .library-shell { grid-template-columns: minmax(255px, 300px) minmax(0, 1fr); }\n}\n@media (max-width: 760px) {\n  .interview-page { min-height: calc(100vh - 60px); padding: 48px 13px 30px; }\n  .page-heading { align-items: flex-start; flex-direction: column; gap: 15px; margin-bottom: 17px; }\n  .page-intro { max-width: 45ch; font-size: 13px; }\n  .continue-button { min-height: 45px; }\n  .toolbar { gap: 8px; padding: 10px; }\n  .search-field { flex: 1 1 100%; }\n  .filter-control { flex: 1 1 calc(50% - 5px); }\n  .bookmark-filter, .start-button { flex: 1 1 calc(50% - 5px); }\n  .library-shell { display: block; min-height: calc(100vh - 305px); overflow: visible; border-radius: 10px; }\n  .question-panel { min-height: 340px; border-right: 0; }\n  .question-list { max-height: calc(100vh - 470px); min-height: 190px; }\n  .reader-panel { display: none; min-height: calc(100vh - 200px); overflow: visible; border-radius: 10px; }\n  .library-shell.answer-open .question-panel { display: none; }\n  .library-shell.answer-open .reader-panel { display: block; }\n  .reader-placeholder { min-height: 340px; }\n}\n@media (max-width: 390px) {\n  .filter-control { flex-basis: 100%; }\n  .bookmark-filter, .start-button { flex-basis: 100%; }\n  .question-navigation button { padding-right: 9px; padding-left: 9px; }\n}\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImludGVydmlldy1saWJyYXJ5LmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsUUFBUSxjQUFjLEVBQUUsWUFBWSxFQUFFLGNBQWMsRUFBRTtBQUN0RCxrQkFBa0IsOEJBQThCLEVBQUUsMkNBQTJDLEVBQUUsbUJBQW1CLEVBQUU7QUFDcEgsMENBQTBDLFdBQVcsRUFBRSxpQkFBaUIsRUFBRSxrQkFBa0IsRUFBRSxpQkFBaUIsRUFBRTtBQUNqSCxnQkFBZ0IsYUFBYSxFQUFFLHFCQUFxQixFQUFFLDhCQUE4QixFQUFFLFNBQVMsRUFBRSxtQkFBbUIsRUFBRTtBQUN0SCxlQUFlLGVBQWUsRUFBRSxjQUFjLEVBQUUsZUFBZSxFQUFFLGdCQUFnQixFQUFFLHFCQUFxQixFQUFFO0FBQzFHLG1CQUFtQixTQUFTLEVBQUUsY0FBYyxFQUFFLGlDQUFpQyxFQUFFLGdCQUFnQixFQUFFLHVCQUF1QixFQUFFLGlCQUFpQixFQUFFO0FBQy9JLGNBQWMsZUFBZSxFQUFFLGNBQWMsRUFBRSxlQUFlLEVBQUUsZ0JBQWdCLEVBQUU7QUFDbEYsbUJBQW1CLG9CQUFvQixFQUFFLG1CQUFtQixFQUFFLFNBQVMsRUFBRSxnQkFBZ0IsRUFBRSxpQkFBaUIsRUFBRSx5QkFBeUIsRUFBRSxrQkFBa0IsRUFBRSxnQkFBZ0IsRUFBRSxjQUFjLEVBQUUsZ0JBQWdCLEVBQUUsZUFBZSxFQUFFO0FBQ2xPLHNDQUFzQyxlQUFlLEVBQUU7QUFDdkQsa0RBQWtELGNBQWMsRUFBRTtBQUNsRSwwQkFBMEIsY0FBYyxFQUFFLGVBQWUsRUFBRTtBQUMzRCx5QkFBeUIsZUFBZSxFQUFFLGNBQWMsRUFBRSxlQUFlLEVBQUU7QUFDM0UseUJBQXlCLHFCQUFxQixFQUFFLG1CQUFtQixFQUFFO0FBQ3JFLFdBQVcsYUFBYSxFQUFFLGVBQWUsRUFBRSxtQkFBbUIsRUFBRSxRQUFRLEVBQUUsbUJBQW1CLEVBQUUsYUFBYSxFQUFFLHlCQUF5QixFQUFFLG1CQUFtQixFQUFFLGdCQUFnQixFQUFFLDRDQUE0QyxFQUFFO0FBQzlOLGdCQUFnQixrQkFBa0IsRUFBRSxhQUFhLEVBQUUsZUFBZSxFQUFFLG1CQUFtQixFQUFFLGdCQUFnQixFQUFFO0FBQzNHLGVBQWUsa0JBQWtCLEVBQUUsVUFBVSxFQUFFLGNBQWMsRUFBRSxlQUFlLEVBQUUsY0FBYyxFQUFFLHlCQUF5QixFQUFFLG9CQUFvQixFQUFFO0FBQ2pKLDhDQUE4QyxXQUFXLEVBQUUsWUFBWSxFQUFFLHlCQUF5QixFQUFFLGtCQUFrQixFQUFFLFVBQVUsRUFBRSxnQkFBZ0IsRUFBRSxjQUFjLEVBQUUsYUFBYSxFQUFFLGVBQWUsRUFBRTtBQUN0TSxzQkFBc0Isc0JBQXNCLEVBQUU7QUFDOUMsd0NBQW1DLGNBQWMsRUFBRTtBQUFuRCxtQ0FBbUMsY0FBYyxFQUFFO0FBQ25ELDBEQUEwRCxxQkFBcUIsRUFBRSw2Q0FBNkMsRUFBRTtBQUNoSSxpQkFBaUIsa0JBQWtCLEVBQUUsV0FBVyxFQUFFLGdCQUFnQixFQUFFLHlCQUF5QixFQUFFLGtCQUFrQixFQUFFLGNBQWMsRUFBRSxlQUFlLEVBQUU7QUFDcEosa0JBQWtCLGVBQWUsRUFBRTtBQUNuQyx5QkFBeUIsc0JBQXNCLEVBQUU7QUFDakQsa0NBQWtDLG9CQUFvQixFQUFFLG1CQUFtQixFQUFFLHVCQUF1QixFQUFFLFFBQVEsRUFBRSxnQkFBZ0IsRUFBRSxlQUFlLEVBQUUseUJBQXlCLEVBQUUsa0JBQWtCLEVBQUUsZ0JBQWdCLEVBQUUsY0FBYyxFQUFFLGFBQWEsRUFBRSxlQUFlLEVBQUUsZ0JBQWdCLEVBQUUsZUFBZSxFQUFFLG1CQUFtQixFQUFFO0FBQzVULHlCQUF5QixxQkFBcUIsRUFBRSxtQkFBbUIsRUFBRTtBQUNyRSw2QkFBNkIscUJBQXFCLEVBQUUsbUJBQW1CLEVBQUUsY0FBYyxFQUFFO0FBQ3pGLDBCQUEwQixlQUFlLEVBQUU7QUFDM0MsZ0JBQWdCLHFCQUFxQixFQUFFLG1CQUFtQixFQUFFLFdBQVcsRUFBRTtBQUN6RSxzQkFBc0IscUJBQXFCLEVBQUUsbUJBQW1CLEVBQUU7QUFDbEUsaUJBQWlCLGlCQUFpQixFQUFFLHNCQUFzQixFQUFFLGtCQUFrQixFQUFFLHlCQUF5QixFQUFFLGtCQUFrQixFQUFFLG1CQUFtQixFQUFFLGNBQWMsRUFBRSxlQUFlLEVBQUU7QUFDckwsaUJBQWlCLGFBQWEsRUFBRSwwREFBMEQsRUFBRSwyQ0FBMkMsRUFBRSxnQkFBZ0IsRUFBRSx5QkFBeUIsRUFBRSxtQkFBbUIsRUFBRSxnQkFBZ0IsRUFBRSw0Q0FBNEMsRUFBRTtBQUMzUSxrQkFBa0IsYUFBYSxFQUFFLGFBQWEsRUFBRSxzQkFBc0IsRUFBRSwrQkFBK0IsRUFBRSxnQkFBZ0IsRUFBRTtBQUMzSCxtQkFBbUIsYUFBYSxFQUFFLHVCQUF1QixFQUFFLDhCQUE4QixFQUFFLFFBQVEsRUFBRSx1QkFBdUIsRUFBRSxnQ0FBZ0MsRUFBRTtBQUNoSyxzQkFBc0IsU0FBUyxFQUFFLGNBQWMsRUFBRSxlQUFlLEVBQUUsZ0JBQWdCLEVBQUU7QUFDcEYscUJBQXFCLGVBQWUsRUFBRSxjQUFjLEVBQUUsZUFBZSxFQUFFO0FBQ3ZFLHFDQUFxQyxjQUFjLEVBQUUsU0FBUyxFQUFFLHVCQUF1QixFQUFFLGNBQWMsRUFBRSxhQUFhLEVBQUUsZUFBZSxFQUFFLGdCQUFnQixFQUFFLGVBQWUsRUFBRSxtQkFBbUIsRUFBRTtBQUNqTSxpREFBaUQsMEJBQTBCLEVBQUU7QUFDN0UsaUJBQWlCLE9BQU8sRUFBRSxhQUFhLEVBQUUsZ0JBQWdCLEVBQUUsNEJBQTRCLEVBQUU7QUFDekYsaUJBQWlCLGNBQWMsRUFBRSx1QkFBdUIsRUFBRSxnQ0FBZ0MsRUFBRSxjQUFjLEVBQUUscUJBQXFCLEVBQUUsc0NBQXNDLEVBQUU7QUFDM0ssdUJBQXVCLG1CQUFtQixFQUFFLHFCQUFxQixFQUFFO0FBQ25FLDhKQUE4SixrQkFBa0IsRUFBRSxVQUFVLEVBQUUsMEJBQTBCLEVBQUUsb0JBQW9CLEVBQUU7QUFDaFAsNkJBQTZCLDhCQUE4QixFQUFFLGtCQUFrQixFQUFFLG1CQUFtQixFQUFFO0FBQ3RHLHFCQUFxQixhQUFhLEVBQUUsbUJBQW1CLEVBQUUsOEJBQThCLEVBQUUsUUFBUSxFQUFFO0FBQ25HLGlCQUFpQixnQkFBZ0IsRUFBRSxjQUFjLEVBQUUsY0FBYyxFQUFFLGdCQUFnQixFQUFFLHFCQUFxQixFQUFFLHVCQUF1QixFQUFFLHlCQUF5QixFQUFFLG1CQUFtQixFQUFFO0FBQ3JMLFdBQVcsY0FBYyxFQUFFLGNBQWMsRUFBRSxnQkFBZ0IsRUFBRTtBQUM3RCxjQUFjLG9CQUFvQixFQUFFLGdCQUFnQixFQUFFLGVBQWUsRUFBRSxjQUFjLEVBQUUsZUFBZSxFQUFFLGdCQUFnQixFQUFFLGlCQUFpQixFQUFFLDRCQUE0QixFQUFFLHFCQUFxQixFQUFFO0FBQ2xNLGFBQWEsYUFBYSxFQUFFLG1CQUFtQixFQUFFLFFBQVEsRUFBRSxlQUFlLEVBQUUsY0FBYyxFQUFFLGVBQWUsRUFBRTtBQUM3RyxhQUFhLFVBQVUsRUFBRSxXQUFXLEVBQUUsa0JBQWtCLEVBQUUsbUJBQW1CLEVBQUU7QUFDL0Usb0JBQW9CLG1CQUFtQixFQUFFO0FBQ3pDLGlCQUFpQixtQkFBbUIsRUFBRTtBQUN0QyxlQUFlLFNBQVMsRUFBRSxrQkFBa0IsRUFBRSw2QkFBNkIsRUFBRSxjQUFjLEVBQUUsY0FBYyxFQUFFO0FBQzdHLGlCQUFpQixhQUFhLEVBQUUsT0FBTyxFQUFFLHFCQUFxQixFQUFFLHFCQUFxQixFQUFFLGtCQUFrQixFQUFFLGNBQWMsRUFBRSxrQkFBa0IsRUFBRSxlQUFlLEVBQUU7QUFDaEssd0JBQXdCLGdCQUFnQixFQUFFLGNBQWMsRUFBRSxlQUFlLEVBQUU7QUFDM0UsbUJBQW1CLGVBQWUsRUFBRSxpQkFBaUIsRUFBRSxnQkFBZ0IsRUFBRTtBQUN6RSxlQUFlLGNBQWMsRUFBRSxlQUFlLEVBQUU7QUFDaEQscUNBQXFDLGdCQUFnQixFQUFFLGVBQWUsRUFBRTtBQUN4RSxpQkFBaUIsY0FBYyxFQUFFLGdCQUFnQixFQUFFO0FBQ25ELGdCQUFnQixZQUFZLEVBQUUsYUFBYSxFQUFFLGdCQUFnQixFQUFFLGdCQUFnQixFQUFFO0FBQ2pGLHNCQUFzQixhQUFhLEVBQUUsaUJBQWlCLEVBQUUscUJBQXFCLEVBQUUscUJBQXFCLEVBQUUsYUFBYSxFQUFFLGtCQUFrQixFQUFFO0FBQ3pJLG9CQUFvQixhQUFhLEVBQUUsV0FBVyxFQUFFLFlBQVksRUFBRSxtQkFBbUIsRUFBRSx5QkFBeUIsRUFBRSxtQkFBbUIsRUFBRSxtQkFBbUIsRUFBRSxjQUFjLEVBQUUsZUFBZSxFQUFFLGdCQUFnQixFQUFFO0FBQzNNLHlCQUF5QixrQkFBa0IsRUFBRSxjQUFjLEVBQUUsZUFBZSxFQUFFO0FBQzlFLHdCQUF3QixlQUFlLEVBQUUsU0FBUyxFQUFFLGNBQWMsRUFBRSxlQUFlLEVBQUUsaUJBQWlCLEVBQUU7QUFDeEcsbUJBQW1CLGdCQUFnQixFQUFFLGNBQWMsRUFBRSxlQUFlLEVBQUU7QUFDdEUsbUJBQW1CLGtCQUFrQixFQUFFLFVBQVUsRUFBRSxXQUFXLEVBQUUsVUFBVSxFQUFFLGdCQUFnQixFQUFFLHNCQUFzQixFQUFFLG1CQUFtQixFQUFFLFNBQVMsRUFBRTtBQUV0SjtFQUNFLFdBQVcsUUFBUSxFQUFFO0VBQ3JCLGtCQUFrQixlQUFlLEVBQUU7RUFDbkMsZ0JBQWdCLGdCQUFnQixFQUFFO0VBQ2xDLGlCQUFpQiwwREFBMEQsRUFBRTtBQUMvRTtBQUNBO0VBQ0Usa0JBQWtCLDhCQUE4QixFQUFFLHVCQUF1QixFQUFFO0VBQzNFLGdCQUFnQix1QkFBdUIsRUFBRSxzQkFBc0IsRUFBRSxTQUFTLEVBQUUsbUJBQW1CLEVBQUU7RUFDakcsY0FBYyxlQUFlLEVBQUUsZUFBZSxFQUFFO0VBQ2hELG1CQUFtQixnQkFBZ0IsRUFBRTtFQUNyQyxXQUFXLFFBQVEsRUFBRSxhQUFhLEVBQUU7RUFDcEMsZ0JBQWdCLGNBQWMsRUFBRTtFQUNoQyxrQkFBa0IseUJBQXlCLEVBQUU7RUFDN0Msa0NBQWtDLHlCQUF5QixFQUFFO0VBQzdELGlCQUFpQixjQUFjLEVBQUUsK0JBQStCLEVBQUUsaUJBQWlCLEVBQUUsbUJBQW1CLEVBQUU7RUFDMUcsa0JBQWtCLGlCQUFpQixFQUFFLGVBQWUsRUFBRTtFQUN0RCxpQkFBaUIsK0JBQStCLEVBQUUsaUJBQWlCLEVBQUU7RUFDckUsZ0JBQWdCLGFBQWEsRUFBRSwrQkFBK0IsRUFBRSxpQkFBaUIsRUFBRSxtQkFBbUIsRUFBRTtFQUN4Ryw2Q0FBNkMsYUFBYSxFQUFFO0VBQzVELDJDQUEyQyxjQUFjLEVBQUU7RUFDM0Qsc0JBQXNCLGlCQUFpQixFQUFFO0FBQzNDO0FBQ0E7RUFDRSxrQkFBa0IsZ0JBQWdCLEVBQUU7RUFDcEMsa0NBQWtDLGdCQUFnQixFQUFFO0VBQ3BELDhCQUE4QixrQkFBa0IsRUFBRSxpQkFBaUIsRUFBRTtBQUN2RSIsImZpbGUiOiJpbnRlcnZpZXctbGlicmFyeS5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiOmhvc3QgeyBkaXNwbGF5OiBibG9jazsgbWluLXdpZHRoOiAwOyBjb2xvcjogIzI0MzU0YTsgfVxuLmludGVydmlldy1wYWdlIHsgbWluLWhlaWdodDogY2FsYygxMDB2aCAtIDgwcHgpOyBwYWRkaW5nOiA1NHB4IGNsYW1wKDE2cHgsIDIuN3Z3LCAzOHB4KSA0NXB4OyBiYWNrZ3JvdW5kOiAjZjVmN2Y4OyB9XG4ucGFnZS1oZWFkaW5nLCAudG9vbGJhciwgLmxpYnJhcnktc2hlbGwgeyB3aWR0aDogMTAwJTsgbWF4LXdpZHRoOiAxNTAwcHg7IG1hcmdpbi1yaWdodDogYXV0bzsgbWFyZ2luLWxlZnQ6IGF1dG87IH1cbi5wYWdlLWhlYWRpbmcgeyBkaXNwbGF5OiBmbGV4OyBhbGlnbi1pdGVtczogZmxleC1lbmQ7IGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjsgZ2FwOiAyNHB4OyBtYXJnaW4tYm90dG9tOiAyNHB4OyB9XG4ucGFnZS1raWNrZXIgeyBtYXJnaW46IDAgMCA4cHg7IGNvbG9yOiAjNDc4MTdiOyBmb250LXNpemU6IDEwcHg7IGZvbnQtd2VpZ2h0OiA3NTA7IGxldHRlci1zcGFjaW5nOiAuMTRlbTsgfVxuLnBhZ2UtaGVhZGluZyBoMSB7IG1hcmdpbjogMDsgY29sb3I6ICMxZTJmNDM7IGZvbnQtc2l6ZTogY2xhbXAoMjlweCwgM3Z3LCAzOXB4KTsgZm9udC13ZWlnaHQ6IDY5MDsgbGV0dGVyLXNwYWNpbmc6IC0uMDQ1ZW07IGxpbmUtaGVpZ2h0OiAxLjE1OyB9XG4ucGFnZS1pbnRybyB7IG1hcmdpbjogOXB4IDAgMDsgY29sb3I6ICM2NTc0ODc7IGZvbnQtc2l6ZTogMTRweDsgbGluZS1oZWlnaHQ6IDEuNTsgfVxuLmNvbnRpbnVlLWJ1dHRvbiB7IGRpc3BsYXk6IGlubGluZS1mbGV4OyBhbGlnbi1pdGVtczogY2VudGVyOyBnYXA6IDEycHg7IG1pbi1oZWlnaHQ6IDUzcHg7IHBhZGRpbmc6IDhweCAxNXB4OyBib3JkZXI6IDFweCBzb2xpZCAjZGJlNGU3OyBib3JkZXItcmFkaXVzOiA5cHg7IGJhY2tncm91bmQ6ICNmZmY7IGNvbG9yOiAjMmI2ZTY5OyB0ZXh0LWFsaWduOiBsZWZ0OyBjdXJzb3I6IHBvaW50ZXI7IH1cbi5jb250aW51ZS1idXR0b24gPiBzcGFuOmZpcnN0LWNoaWxkIHsgZm9udC1zaXplOiAyMHB4OyB9XG4uY29udGludWUtYnV0dG9uIHN0cm9uZywgLmNvbnRpbnVlLWJ1dHRvbiBzbWFsbCB7IGRpc3BsYXk6IGJsb2NrOyB9XG4uY29udGludWUtYnV0dG9uIHN0cm9uZyB7IGNvbG9yOiAjMmI0NTRjOyBmb250LXNpemU6IDEycHg7IH1cbi5jb250aW51ZS1idXR0b24gc21hbGwgeyBtYXJnaW4tdG9wOiAzcHg7IGNvbG9yOiAjNzc4NTk3OyBmb250LXNpemU6IDEwcHg7IH1cbi5jb250aW51ZS1idXR0b246aG92ZXIgeyBib3JkZXItY29sb3I6ICM4YmIyYWU7IGJhY2tncm91bmQ6ICNmOGZiZmE7IH1cbi50b29sYmFyIHsgZGlzcGxheTogZmxleDsgZmxleC13cmFwOiB3cmFwOyBhbGlnbi1pdGVtczogY2VudGVyOyBnYXA6IDlweDsgbWFyZ2luLWJvdHRvbTogMTdweDsgcGFkZGluZzogMTJweDsgYm9yZGVyOiAxcHggc29saWQgI2UyZThlYjsgYm9yZGVyLXJhZGl1czogMTFweDsgYmFja2dyb3VuZDogI2ZmZjsgYm94LXNoYWRvdzogMCAycHggN3B4IHJnYmEoNDAsIDU4LCA3MCwgLjAyNSk7IH1cbi5zZWFyY2gtZmllbGQgeyBwb3NpdGlvbjogcmVsYXRpdmU7IGRpc3BsYXk6IGZsZXg7IGZsZXg6IDEgMSAyOTBweDsgYWxpZ24taXRlbXM6IGNlbnRlcjsgbWluLXdpZHRoOiAxOTBweDsgfVxuLnNlYXJjaC1pY29uIHsgcG9zaXRpb246IGFic29sdXRlOyBsZWZ0OiAxM3B4OyBjb2xvcjogIzZkN2Q4ZDsgZm9udC1zaXplOiAyMnB4OyBsaW5lLWhlaWdodDogMTsgdHJhbnNmb3JtOiByb3RhdGUoLTIwZGVnKTsgcG9pbnRlci1ldmVudHM6IG5vbmU7IH1cbi5zZWFyY2gtZmllbGQgaW5wdXQsIC5maWx0ZXItY29udHJvbCBzZWxlY3QgeyB3aWR0aDogMTAwJTsgaGVpZ2h0OiA0MXB4OyBib3JkZXI6IDFweCBzb2xpZCAjZTBlNmVhOyBib3JkZXItcmFkaXVzOiA3cHg7IG91dGxpbmU6IDA7IGJhY2tncm91bmQ6ICNmZmY7IGNvbG9yOiAjMzM0NjVhOyBmb250OiBpbmhlcml0OyBmb250LXNpemU6IDEycHg7IH1cbi5zZWFyY2gtZmllbGQgaW5wdXQgeyBwYWRkaW5nOiAwIDQ4cHggMCA0MHB4OyB9XG4uc2VhcmNoLWZpZWxkIGlucHV0OjpwbGFjZWhvbGRlciB7IGNvbG9yOiAjODU5MWEwOyB9XG4uc2VhcmNoLWZpZWxkIGlucHV0OmZvY3VzLCAuZmlsdGVyLWNvbnRyb2wgc2VsZWN0OmZvY3VzIHsgYm9yZGVyLWNvbG9yOiAjNTc5MjhkOyBib3gtc2hhZG93OiAwIDAgMCAzcHggcmdiYSg3NiwgMTQxLCAxMzUsIC4xNCk7IH1cbi5rZXlib2FyZC1oaW50IHsgcG9zaXRpb246IGFic29sdXRlOyByaWdodDogMTFweDsgcGFkZGluZzogM3B4IDZweDsgYm9yZGVyOiAxcHggc29saWQgI2UzZThlYjsgYm9yZGVyLXJhZGl1czogNHB4OyBjb2xvcjogIzg3OTNhMDsgZm9udC1zaXplOiAxMHB4OyB9XG4uZmlsdGVyLWNvbnRyb2wgeyBmbGV4OiAwIDEgMTc3cHg7IH1cbi5maWx0ZXItY29udHJvbCBzZWxlY3QgeyBwYWRkaW5nOiAwIDI4cHggMCAxMXB4OyB9XG4uYm9va21hcmstZmlsdGVyLCAuc3RhcnQtYnV0dG9uIHsgZGlzcGxheTogaW5saW5lLWZsZXg7IGFsaWduLWl0ZW1zOiBjZW50ZXI7IGp1c3RpZnktY29udGVudDogY2VudGVyOyBnYXA6IDdweDsgbWluLWhlaWdodDogNDFweDsgcGFkZGluZzogMCAxM3B4OyBib3JkZXI6IDFweCBzb2xpZCAjZGNlNGU4OyBib3JkZXItcmFkaXVzOiA3cHg7IGJhY2tncm91bmQ6ICNmZmY7IGNvbG9yOiAjNDc1YTZlOyBmb250OiBpbmhlcml0OyBmb250LXNpemU6IDEycHg7IGZvbnQtd2VpZ2h0OiA2NTA7IGN1cnNvcjogcG9pbnRlcjsgd2hpdGUtc3BhY2U6IG5vd3JhcDsgfVxuLmJvb2ttYXJrLWZpbHRlcjpob3ZlciB7IGJvcmRlci1jb2xvcjogIzljYjliNTsgYmFja2dyb3VuZDogI2Y3ZmFmOTsgfVxuLmJvb2ttYXJrLWZpbHRlci5pcy1hY3RpdmUgeyBib3JkZXItY29sb3I6ICM4ZGI1YjA7IGJhY2tncm91bmQ6ICNlZGY2ZjQ7IGNvbG9yOiAjMjg2ZDY5OyB9XG4uYm9va21hcmstZmlsdGVyID4gc3BhbiB7IGZvbnQtc2l6ZTogMTZweDsgfVxuLnN0YXJ0LWJ1dHRvbiB7IGJvcmRlci1jb2xvcjogIzI4NmQ2OTsgYmFja2dyb3VuZDogIzI4NmQ2OTsgY29sb3I6ICNmZmY7IH1cbi5zdGFydC1idXR0b246aG92ZXIgeyBib3JkZXItY29sb3I6ICMyMDViNTc7IGJhY2tncm91bmQ6ICMyMDViNTc7IH1cbi5maWx0ZXItbm90aWNlIHsgbWF4LXdpZHRoOiAxNTAwcHg7IG1hcmdpbjogLTVweCBhdXRvIDE0cHg7IHBhZGRpbmc6IDExcHggMTRweDsgYm9yZGVyOiAxcHggc29saWQgI2VhZDZiNjsgYm9yZGVyLXJhZGl1czogN3B4OyBiYWNrZ3JvdW5kOiAjZmZmYWYxOyBjb2xvcjogIzc5NTUxOTsgZm9udC1zaXplOiAxMnB4OyB9XG4ubGlicmFyeS1zaGVsbCB7IGRpc3BsYXk6IGdyaWQ7IGdyaWQtdGVtcGxhdGUtY29sdW1uczogbWlubWF4KDI3NXB4LCAzMzBweCkgbWlubWF4KDAsIDFmcik7IG1pbi1oZWlnaHQ6IG1pbig2OTBweCwgY2FsYygxMDB2aCAtIDI5MHB4KSk7IG92ZXJmbG93OiBoaWRkZW47IGJvcmRlcjogMXB4IHNvbGlkICNlMGU2ZTk7IGJvcmRlci1yYWRpdXM6IDEycHg7IGJhY2tncm91bmQ6ICNmZmY7IGJveC1zaGFkb3c6IDAgNHB4IDE4cHggcmdiYSgzNSwgNTQsIDY5LCAuMDQpOyB9XG4ucXVlc3Rpb24tcGFuZWwgeyBkaXNwbGF5OiBmbGV4OyBtaW4taGVpZ2h0OiAwOyBmbGV4LWRpcmVjdGlvbjogY29sdW1uOyBib3JkZXItcmlnaHQ6IDFweCBzb2xpZCAjZTVlYWVkOyBiYWNrZ3JvdW5kOiAjZmZmOyB9XG4ucmVzdWx0cy1oZWFkaW5nIHsgZGlzcGxheTogZmxleDsgYWxpZ24taXRlbXM6IGZsZXgtc3RhcnQ7IGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjsgZ2FwOiA4cHg7IHBhZGRpbmc6IDE5cHggMTdweCAxNHB4OyBib3JkZXItYm90dG9tOiAxcHggc29saWQgI2VkZjBmMjsgfVxuLnJlc3VsdHMtaGVhZGluZyBoMiB7IG1hcmdpbjogMDsgY29sb3I6ICMyODNhNGY7IGZvbnQtc2l6ZTogMTVweDsgZm9udC13ZWlnaHQ6IDcwMDsgfVxuLnJlc3VsdHMtaGVhZGluZyBwIHsgbWFyZ2luOiA1cHggMCAwOyBjb2xvcjogIzdhODc5NjsgZm9udC1zaXplOiAxMXB4OyB9XG4uY2xlYXItYnV0dG9uLCAuY2xlYXItZW1wdHktYnV0dG9uIHsgcGFkZGluZzogNHB4IDA7IGJvcmRlcjogMDsgYmFja2dyb3VuZDogdHJhbnNwYXJlbnQ7IGNvbG9yOiAjMmM3MDZiOyBmb250OiBpbmhlcml0OyBmb250LXNpemU6IDExcHg7IGZvbnQtd2VpZ2h0OiA3MDA7IGN1cnNvcjogcG9pbnRlcjsgd2hpdGUtc3BhY2U6IG5vd3JhcDsgfVxuLmNsZWFyLWJ1dHRvbjpob3ZlciwgLmNsZWFyLWVtcHR5LWJ1dHRvbjpob3ZlciB7IHRleHQtZGVjb3JhdGlvbjogdW5kZXJsaW5lOyB9XG4ucXVlc3Rpb24tbGlzdCB7IGZsZXg6IDE7IG1pbi1oZWlnaHQ6IDA7IG92ZXJmbG93LXk6IGF1dG87IG92ZXJzY3JvbGwtYmVoYXZpb3I6IGNvbnRhaW47IH1cbi5xdWVzdGlvbi1pdGVtIHsgZGlzcGxheTogYmxvY2s7IHBhZGRpbmc6IDE0cHggMTdweCAxM3B4OyBib3JkZXItYm90dG9tOiAxcHggc29saWQgI2VkZjBmMjsgY29sb3I6IGluaGVyaXQ7IHRleHQtZGVjb3JhdGlvbjogbm9uZTsgdHJhbnNpdGlvbjogYmFja2dyb3VuZC1jb2xvciAuMTJzIGVhc2U7IH1cbi5xdWVzdGlvbi1pdGVtOmhvdmVyIHsgYmFja2dyb3VuZDogI2Y3ZmFmOTsgdGV4dC1kZWNvcmF0aW9uOiBub25lOyB9XG4ucXVlc3Rpb24taXRlbTpmb2N1cy12aXNpYmxlLCAuY29udGludWUtYnV0dG9uOmZvY3VzLXZpc2libGUsIC50b29sYmFyIGJ1dHRvbjpmb2N1cy12aXNpYmxlLCAuY2xlYXItYnV0dG9uOmZvY3VzLXZpc2libGUsIC5jbGVhci1lbXB0eS1idXR0b246Zm9jdXMtdmlzaWJsZSB7IHBvc2l0aW9uOiByZWxhdGl2ZTsgei1pbmRleDogMTsgb3V0bGluZTogM3B4IHNvbGlkICM1YWE0OWU7IG91dGxpbmUtb2Zmc2V0OiAtMnB4OyB9XG4ucXVlc3Rpb24taXRlbS5pcy1zZWxlY3RlZCB7IGJvcmRlci1sZWZ0OiAzcHggc29saWQgIzJlNzk3MzsgcGFkZGluZy1sZWZ0OiAxNHB4OyBiYWNrZ3JvdW5kOiAjZWZmNmY1OyB9XG4ucXVlc3Rpb24taXRlbS10b3AgeyBkaXNwbGF5OiBmbGV4OyBhbGlnbi1pdGVtczogY2VudGVyOyBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47IGdhcDogOHB4OyB9XG4uaXRlbS1jYXRlZ29yeSB7IG92ZXJmbG93OiBoaWRkZW47IGNvbG9yOiAjNDE4MDdhOyBmb250LXNpemU6IDlweDsgZm9udC13ZWlnaHQ6IDc1MDsgbGV0dGVyLXNwYWNpbmc6IC4wOGVtOyB0ZXh0LW92ZXJmbG93OiBlbGxpcHNpczsgdGV4dC10cmFuc2Zvcm06IHVwcGVyY2FzZTsgd2hpdGUtc3BhY2U6IG5vd3JhcDsgfVxuLml0ZW0taWQgeyBjb2xvcjogIzkxYTBhYzsgZm9udC1zaXplOiA5cHg7IGZvbnQtd2VpZ2h0OiA2NTA7IH1cbi5pdGVtLXRpdGxlIHsgZGlzcGxheTogLXdlYmtpdC1ib3g7IG92ZXJmbG93OiBoaWRkZW47IG1hcmdpbi10b3A6IDdweDsgY29sb3I6ICMyYTNjNTA7IGZvbnQtc2l6ZTogMTJweDsgZm9udC13ZWlnaHQ6IDY1MDsgbGluZS1oZWlnaHQ6IDEuNDg7IC13ZWJraXQtYm94LW9yaWVudDogdmVydGljYWw7IC13ZWJraXQtbGluZS1jbGFtcDogMjsgfVxuLml0ZW0tbWV0YSB7IGRpc3BsYXk6IGZsZXg7IGFsaWduLWl0ZW1zOiBjZW50ZXI7IGdhcDogNnB4OyBtYXJnaW4tdG9wOiA5cHg7IGNvbG9yOiAjN2Q4OTk2OyBmb250LXNpemU6IDEwcHg7IH1cbi5zdHVkeS1kb3QgeyB3aWR0aDogN3B4OyBoZWlnaHQ6IDdweDsgYm9yZGVyLXJhZGl1czogNTAlOyBiYWNrZ3JvdW5kOiAjYWFiNGJlOyB9XG4uZG90LW5lZWRzLXJldmlldyB7IGJhY2tncm91bmQ6ICNkNzk2Mzc7IH1cbi5kb3QtY29uZmlkZW50IHsgYmFja2dyb3VuZDogIzM0ODM2OTsgfVxuLmRldmljZS1ub3RlIHsgbWFyZ2luOiAwOyBwYWRkaW5nOiAxMHB4IDE3cHg7IGJvcmRlci10b3A6IDFweCBzb2xpZCAjZWRmMGYyOyBjb2xvcjogIzg3OTNhMDsgZm9udC1zaXplOiA5cHg7IH1cbi5wYW5lbC1tZXNzYWdlIHsgZGlzcGxheTogZ3JpZDsgZmxleDogMTsgYWxpZ24tY29udGVudDogY2VudGVyOyBqdXN0aWZ5LWl0ZW1zOiBjZW50ZXI7IHBhZGRpbmc6IDI4cHggMThweDsgY29sb3I6ICM2YjdhOGM7IHRleHQtYWxpZ246IGNlbnRlcjsgZm9udC1zaXplOiAxMnB4OyB9XG4ucGFuZWwtbWVzc2FnZSBzdHJvbmcgeyBtYXJnaW4tdG9wOiAxMXB4OyBjb2xvcjogIzMzNDY1YTsgZm9udC1zaXplOiAxM3B4OyB9XG4ucGFuZWwtbWVzc2FnZSBwIHsgbWF4LXdpZHRoOiAyNmNoOyBtYXJnaW46IDdweCAwIDVweDsgbGluZS1oZWlnaHQ6IDEuNjsgfVxuLmVtcHR5LWdseXBoIHsgY29sb3I6ICMzZTgxN2I7IGZvbnQtc2l6ZTogMjRweDsgfVxuLnBhbmVsLW1lc3NhZ2UgLmNsZWFyLWVtcHR5LWJ1dHRvbiB7IG1hcmdpbi10b3A6IDEwcHg7IGZvbnQtc2l6ZTogMTJweDsgfVxuLmVycm9yLW1lc3NhZ2UgeyBjb2xvcjogIzhhNGIzZTsgbGluZS1oZWlnaHQ6IDEuNjsgfVxuLnJlYWRlci1wYW5lbCB7IG1pbi13aWR0aDogMDsgbWluLWhlaWdodDogMDsgb3ZlcmZsb3cteTogYXV0bzsgYmFja2dyb3VuZDogI2ZmZjsgfVxuLnJlYWRlci1wbGFjZWhvbGRlciB7IGRpc3BsYXk6IGdyaWQ7IG1pbi1oZWlnaHQ6IDU0MHB4OyBhbGlnbi1jb250ZW50OiBjZW50ZXI7IGp1c3RpZnktaXRlbXM6IGNlbnRlcjsgcGFkZGluZzogMzBweDsgdGV4dC1hbGlnbjogY2VudGVyOyB9XG4ucGxhY2Vob2xkZXItbWFyayB7IGRpc3BsYXk6IGdyaWQ7IHdpZHRoOiA1MnB4OyBoZWlnaHQ6IDUycHg7IHBsYWNlLWl0ZW1zOiBjZW50ZXI7IGJvcmRlcjogMXB4IHNvbGlkICNlM2ViZWE7IGJvcmRlci1yYWRpdXM6IDEzcHg7IGJhY2tncm91bmQ6ICNmNWY5Zjg7IGNvbG9yOiAjNDA4MTdiOyBmb250LXNpemU6IDE4cHg7IGZvbnQtd2VpZ2h0OiA3MDA7IH1cbi5yZWFkZXItcGxhY2Vob2xkZXIgaDIgeyBtYXJnaW46IDE3cHggMCA2cHg7IGNvbG9yOiAjMmEzYzUwOyBmb250LXNpemU6IDE4cHg7IH1cbi5yZWFkZXItcGxhY2Vob2xkZXIgcCB7IG1heC13aWR0aDogMzhjaDsgbWFyZ2luOiAwOyBjb2xvcjogIzc0ODE5NDsgZm9udC1zaXplOiAxM3B4OyBsaW5lLWhlaWdodDogMS42NTsgfVxuLnBsYWNlaG9sZGVyLXRpcCB7IG1hcmdpbi10b3A6IDIzcHg7IGNvbG9yOiAjODc5M2EwOyBmb250LXNpemU6IDEwcHg7IH1cbi52aXN1YWxseS1oaWRkZW4geyBwb3NpdGlvbjogYWJzb2x1dGU7IHdpZHRoOiAxcHg7IGhlaWdodDogMXB4OyBwYWRkaW5nOiAwOyBvdmVyZmxvdzogaGlkZGVuOyBjbGlwOiByZWN0KDAsIDAsIDAsIDApOyB3aGl0ZS1zcGFjZTogbm93cmFwOyBib3JkZXI6IDA7IH1cblxuQG1lZGlhIChtYXgtd2lkdGg6IDEwMDBweCkge1xuICAudG9vbGJhciB7IGdhcDogOHB4OyB9XG4gIC5maWx0ZXItY29udHJvbCB7IGZsZXg6IDEgMSAxNDBweDsgfVxuICAuc2VhcmNoLWZpZWxkIHsgZmxleC1iYXNpczogMTAwJTsgfVxuICAubGlicmFyeS1zaGVsbCB7IGdyaWQtdGVtcGxhdGUtY29sdW1uczogbWlubWF4KDI1NXB4LCAzMDBweCkgbWlubWF4KDAsIDFmcik7IH1cbn1cbkBtZWRpYSAobWF4LXdpZHRoOiA3NjBweCkge1xuICAuaW50ZXJ2aWV3LXBhZ2UgeyBtaW4taGVpZ2h0OiBjYWxjKDEwMHZoIC0gNjBweCk7IHBhZGRpbmc6IDQ4cHggMTNweCAzMHB4OyB9XG4gIC5wYWdlLWhlYWRpbmcgeyBhbGlnbi1pdGVtczogZmxleC1zdGFydDsgZmxleC1kaXJlY3Rpb246IGNvbHVtbjsgZ2FwOiAxNXB4OyBtYXJnaW4tYm90dG9tOiAxN3B4OyB9XG4gIC5wYWdlLWludHJvIHsgbWF4LXdpZHRoOiA0NWNoOyBmb250LXNpemU6IDEzcHg7IH1cbiAgLmNvbnRpbnVlLWJ1dHRvbiB7IG1pbi1oZWlnaHQ6IDQ1cHg7IH1cbiAgLnRvb2xiYXIgeyBnYXA6IDhweDsgcGFkZGluZzogMTBweDsgfVxuICAuc2VhcmNoLWZpZWxkIHsgZmxleDogMSAxIDEwMCU7IH1cbiAgLmZpbHRlci1jb250cm9sIHsgZmxleDogMSAxIGNhbGMoNTAlIC0gNXB4KTsgfVxuICAuYm9va21hcmstZmlsdGVyLCAuc3RhcnQtYnV0dG9uIHsgZmxleDogMSAxIGNhbGMoNTAlIC0gNXB4KTsgfVxuICAubGlicmFyeS1zaGVsbCB7IGRpc3BsYXk6IGJsb2NrOyBtaW4taGVpZ2h0OiBjYWxjKDEwMHZoIC0gMzA1cHgpOyBvdmVyZmxvdzogdmlzaWJsZTsgYm9yZGVyLXJhZGl1czogMTBweDsgfVxuICAucXVlc3Rpb24tcGFuZWwgeyBtaW4taGVpZ2h0OiAzNDBweDsgYm9yZGVyLXJpZ2h0OiAwOyB9XG4gIC5xdWVzdGlvbi1saXN0IHsgbWF4LWhlaWdodDogY2FsYygxMDB2aCAtIDQ3MHB4KTsgbWluLWhlaWdodDogMTkwcHg7IH1cbiAgLnJlYWRlci1wYW5lbCB7IGRpc3BsYXk6IG5vbmU7IG1pbi1oZWlnaHQ6IGNhbGMoMTAwdmggLSAyMDBweCk7IG92ZXJmbG93OiB2aXNpYmxlOyBib3JkZXItcmFkaXVzOiAxMHB4OyB9XG4gIC5saWJyYXJ5LXNoZWxsLmFuc3dlci1vcGVuIC5xdWVzdGlvbi1wYW5lbCB7IGRpc3BsYXk6IG5vbmU7IH1cbiAgLmxpYnJhcnktc2hlbGwuYW5zd2VyLW9wZW4gLnJlYWRlci1wYW5lbCB7IGRpc3BsYXk6IGJsb2NrOyB9XG4gIC5yZWFkZXItcGxhY2Vob2xkZXIgeyBtaW4taGVpZ2h0OiAzNDBweDsgfVxufVxuQG1lZGlhIChtYXgtd2lkdGg6IDM5MHB4KSB7XG4gIC5maWx0ZXItY29udHJvbCB7IGZsZXgtYmFzaXM6IDEwMCU7IH1cbiAgLmJvb2ttYXJrLWZpbHRlciwgLnN0YXJ0LWJ1dHRvbiB7IGZsZXgtYmFzaXM6IDEwMCU7IH1cbiAgLnF1ZXN0aW9uLW5hdmlnYXRpb24gYnV0dG9uIHsgcGFkZGluZy1yaWdodDogOXB4OyBwYWRkaW5nLWxlZnQ6IDlweDsgfVxufVxuIl19 */");

/***/ }),

/***/ "3Puv":
/*!********************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/maps/maps.component.html ***!
  \********************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"main-content\">\n    <div class=\"container-fluid\">\n        <div class=\"row\">\n            <div class=\"col-md-8\">\n                <div class=\"card\">\n                    <div class=\"card-header card-header-danger\">\n                        <h4 class=\"card-title\">About</h4>\n                        <p class=\"card-category\">Little about my Tech Stack...</p>\n                    </div>\n                    <div class=\"card-body\">\n                        <div class=\"col-md-12\">\n                            <div class=\"card card-profile\">\n                                <div class=\"card-avatar\">\n                                    <a href=\"\">\n                                        <img class=\"img\" src=\"./assets/img/learn_angular_logo_1.png\" />\n                                    </a>\n                                </div>\n                                <div class=\"card-body\">\n                                    <h6 class=\"card-category text-gray\">Sudeep Shanubhog</h6>\n                                    <h4 class=\"card-title\">Technical Lead/Senior AI and Full Stack Developer</h4>\n                                    <p class=\"card-description\">\n                                        Currently working as Techincal Lead with a Big 4 consulting firm on a digital transformation initiative, Tampa, FL. With passion to learn(always)/teach/share my knowledge and \n                                        experience.                                        \n                                    </p>\n                                    <hr>\n                                    <p class=\"card-description\">\n                                        My Experience,\n                                        <br>\n                                        • Technical Lead and Senior AI & Full-Stack Developer with 20+ years of experience building scalable, cloud-native enterprise applications using .NET Core, Angular, Microsoft Azure, and SQL Server. Skilled in Artificial Intelligence (AI) and Large Language Models (LLMs), including Prompt Engineering, Retrieval-Augmented Generation (RAG), and AI-powered automation. Proven leader who delivers secure, high-performance solutions through Agile, DevOps, and modern software architecture.\n                                        • Experience in developing/architect WEB applications using Angular 19/20/21, React, Angular-JS 1.6, C#.NET, .Net Core, ASP.NET, Chat-bot, Machine Learning, LEAFLET JS, NODE JS, JQuery, WEB API, MVC 5/4/3, REST API, HTML5, CSS3, Bootstrap 4,  XML, JavaScript, WCF, Google MAPs API, ORM Framework like Entity and Web Services.\n                                    </p>\n                                    <hr>\n                                    <a href=\"https://www.linkedin.com/in/sudeep-shanubhog/\" target=\"_blank\" rel=\"noopener noreferrer\" class=\"btn btn-danger btn-round\">Follow \n                                        <img class=\"img\" src=\"./assets/img/linkedin_icon.png\" />\n                                    </a>\n                                </div>\n                            </div>\n                        </div>\n                    </div>\n                </div>\n            </div>\n        </div>\n    </div>\n</div>\n");

/***/ }),

/***/ "3lmm":
/*!*************************************************************!*\
  !*** ./src/app/interview-library/study-progress.service.ts ***!
  \*************************************************************/
/*! exports provided: StudyProgressService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "StudyProgressService", function() { return StudyProgressService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs */ "qCKp");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var STORAGE_KEY = 'interview-library-progress:v1';
function emptyProgress() {
    return { version: 1, bookmarks: [], statuses: {}, lastQuestionId: null };
}
var StudyProgressService = /** @class */ (function () {
    function StudyProgressService() {
        this.changes = new rxjs__WEBPACK_IMPORTED_MODULE_1__["Subject"]();
        this.changes$ = this.changes.asObservable();
        this.progress = this.restore();
    }
    StudyProgressService.prototype.isBookmarked = function (questionId) {
        return this.progress.bookmarks.indexOf(questionId) !== -1;
    };
    StudyProgressService.prototype.statusFor = function (questionId) {
        return this.progress.statuses[questionId] || 'new';
    };
    StudyProgressService.prototype.getLastQuestionId = function () {
        return this.progress.lastQuestionId;
    };
    StudyProgressService.prototype.snapshot = function () {
        return {
            version: 1,
            bookmarks: this.progress.bookmarks.slice(),
            statuses: Object.assign({}, this.progress.statuses),
            lastQuestionId: this.progress.lastQuestionId
        };
    };
    StudyProgressService.prototype.toggleBookmark = function (questionId) {
        var index = this.progress.bookmarks.indexOf(questionId);
        if (index === -1) {
            this.progress.bookmarks = this.progress.bookmarks.concat(questionId);
        }
        else {
            this.progress.bookmarks = this.progress.bookmarks.filter(function (id) { return id !== questionId; });
        }
        this.persist();
    };
    StudyProgressService.prototype.setStatus = function (questionId, status) {
        this.progress.statuses[questionId] = status;
        this.persist();
    };
    StudyProgressService.prototype.setLastQuestion = function (questionId) {
        this.progress.lastQuestionId = questionId;
        this.persist();
    };
    StudyProgressService.prototype.retainKnownQuestions = function (questions) {
        var _this = this;
        var known = new Set(questions.map(function (question) { return question.id; }));
        this.progress.bookmarks = this.progress.bookmarks.filter(function (id) { return known.has(id); });
        Object.keys(this.progress.statuses).forEach(function (id) {
            if (!known.has(id)) {
                delete _this.progress.statuses[id];
            }
        });
        if (this.progress.lastQuestionId && !known.has(this.progress.lastQuestionId)) {
            this.progress.lastQuestionId = null;
        }
        this.persist();
    };
    StudyProgressService.prototype.restore = function () {
        try {
            var serialized = localStorage.getItem(STORAGE_KEY);
            if (!serialized) {
                return emptyProgress();
            }
            var parsed_1 = JSON.parse(serialized);
            if (!parsed_1 || parsed_1.version !== 1 || !Array.isArray(parsed_1.bookmarks) ||
                !parsed_1.statuses || typeof parsed_1.statuses !== 'object') {
                return emptyProgress();
            }
            var statuses_1 = {};
            Object.keys(parsed_1.statuses).forEach(function (id) {
                var status = parsed_1.statuses[id];
                if (status === 'needs-review' || status === 'confident' || status === 'new') {
                    statuses_1[id] = status;
                }
            });
            return {
                version: 1,
                bookmarks: parsed_1.bookmarks.filter(function (id) { return typeof id === 'string'; }),
                statuses: statuses_1,
                lastQuestionId: typeof parsed_1.lastQuestionId === 'string' ? parsed_1.lastQuestionId : null
            };
        }
        catch (_) {
            return emptyProgress();
        }
    };
    StudyProgressService.prototype.persist = function () {
        try {
            localStorage.setItem(STORAGE_KEY, JSON.stringify(this.progress));
        }
        catch (_) {
            // The feature remains usable for this session when browser storage is unavailable.
        }
        this.changes.next();
    };
    StudyProgressService.ctorParameters = function () { return []; };
    StudyProgressService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])({ providedIn: 'root' }),
        __metadata("design:paramtypes", [])
    ], StudyProgressService);
    return StudyProgressService;
}());



/***/ }),

/***/ "4G6T":
/*!**********************************************************!*\
  !*** ./src/app/notifications/notifications.component.ts ***!
  \**********************************************************/
/*! exports provided: NotificationsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NotificationsComponent", function() { return NotificationsComponent; });
/* harmony import */ var _raw_loader_notifications_component_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! raw-loader!./notifications.component.html */ "FTXL");
/* harmony import */ var _notifications_component_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./notifications.component.css */ "C+6a");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "fXoL");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var NotificationsComponent = /** @class */ (function () {
    function NotificationsComponent() {
    }
    NotificationsComponent.prototype.showNotification = function (from, align) {
        var type = ['', 'info', 'success', 'warning', 'danger'];
        var color = Math.floor((Math.random() * 4) + 1);
        $.notify({
            icon: "notifications",
            message: "Welcome to <b>Material Dashboard</b> - a beautiful sample notifications for every web developer."
        }, {
            type: type[color],
            timer: 4000,
            placement: {
                from: from,
                align: align
            },
            template: '<div data-notify="container" class="col-xl-4 col-lg-4 col-11 col-sm-4 col-md-4 alert alert-{0} alert-with-icon" role="alert">' +
                '<button mat-button  type="button" aria-hidden="true" class="close mat-button" data-notify="dismiss">  <i class="material-icons">close</i></button>' +
                '<i class="material-icons" data-notify="icon">notifications</i> ' +
                '<span data-notify="title">{1}</span> ' +
                '<span data-notify="message">{2}</span>' +
                '<div class="progress" data-notify="progressbar">' +
                '<div class="progress-bar progress-bar-{0}" role="progressbar" aria-valuenow="0" aria-valuemin="0" aria-valuemax="100" style="width: 0%;"></div>' +
                '</div>' +
                '<a href="{3}" target="{4}" data-notify="url"></a>' +
                '</div>'
        });
    };
    NotificationsComponent.prototype.ngOnInit = function () {
    };
    NotificationsComponent.ctorParameters = function () { return []; };
    NotificationsComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Component"])({
            selector: 'app-notifications',
            template: _raw_loader_notifications_component_html__WEBPACK_IMPORTED_MODULE_0__["default"],
            styles: [_notifications_component_css__WEBPACK_IMPORTED_MODULE_1__["default"]]
        }),
        __metadata("design:paramtypes", [])
    ], NotificationsComponent);
    return NotificationsComponent;
}());



/***/ }),

/***/ "8+yc":
/*!******************************************!*\
  !*** ./src/app/icons/icons.component.ts ***!
  \******************************************/
/*! exports provided: IconsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "IconsComponent", function() { return IconsComponent; });
/* harmony import */ var _raw_loader_icons_component_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! raw-loader!./icons.component.html */ "sqUA");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var IconsComponent = /** @class */ (function () {
    function IconsComponent() {
    }
    IconsComponent.prototype.ngOnInit = function () {
    };
    IconsComponent.ctorParameters = function () { return []; };
    IconsComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-icons',
            template: _raw_loader_icons_component_html__WEBPACK_IMPORTED_MODULE_0__["default"]
        }),
        __metadata("design:paramtypes", [])
    ], IconsComponent);
    return IconsComponent;
}());



/***/ }),

/***/ "9SGg":
/*!******************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/interview-library/answer-reader.component.html ***!
  \******************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<article class=\"answer-reader\" *ngIf=\"question; else readerMessage\" aria-labelledby=\"answer-title\">\n  <button class=\"back-link\" type=\"button\" (click)=\"backToResults()\">\n    <span aria-hidden=\"true\">←</span> Back to results\n  </button>\n\n  <header class=\"reader-header\">\n    <div class=\"reader-eyebrow\">\n      <span>{{ categoryName }}</span>\n      <span class=\"question-id\">{{ question.id }}</span>\n    </div>\n    <h1 id=\"answer-title\">{{ question.title }}</h1>\n    <div class=\"reader-actions\">\n      <button type=\"button\" class=\"quiet-button\" (click)=\"toggleBookmark()\" [attr.aria-pressed]=\"bookmarked\">\n        <span aria-hidden=\"true\">{{ bookmarked ? '★' : '☆' }}</span>\n        {{ bookmarked ? 'Bookmarked' : 'Bookmark' }}\n      </button>\n      <span class=\"status-label\" [ngClass]=\"'status-' + status\">{{ status === 'new' ? 'Not reviewed' : status === 'needs-review' ? 'Needs review' : 'Confident' }}</span>\n    </div>\n  </header>\n\n  <div class=\"answer-body\">\n    <ng-container *ngFor=\"let section of question.sections; let index = index\">\n      <p *ngIf=\"section.type === 'paragraph'\" class=\"answer-paragraph\">{{ section.content }}</p>\n      <section *ngIf=\"section.type === 'code'\" class=\"code-card\" [attr.aria-label]=\"section.language ? section.language + ' code example' : 'Code example'\">\n        <div class=\"code-toolbar\">\n          <span>{{ section.language || 'Code example' }}</span>\n          <button type=\"button\" class=\"copy-button\" (click)=\"copyCode(section.content, index)\" [attr.aria-label]=\"'Copy code example ' + (index + 1)\">\n            {{ copiedSection === index ? 'Copied' : 'Copy code' }}\n          </button>\n        </div>\n        <pre><code>{{ section.content }}</code></pre>\n      </section>\n    </ng-container>\n  </div>\n\n  <details class=\"source-disclosure\" *ngIf=\"question.variants.length || question.references.length\">\n    <summary>Question wordings and sources</summary>\n    <div class=\"disclosure-content\">\n      <section *ngFor=\"let variant of question.variants\" class=\"variant-entry\">\n        <p>{{ variant.wording }}</p>\n        <ul *ngIf=\"variant.sources.length\">\n          <li *ngFor=\"let source of variant.sources\">{{ source }}</li>\n        </ul>\n      </section>\n      <section *ngIf=\"question.references.length\" class=\"reference-list\">\n        <h2>References and further reading</h2>\n        <ul><li *ngFor=\"let reference of question.references\">{{ reference }}</li></ul>\n      </section>\n    </div>\n  </details>\n\n  <footer class=\"reader-footer\">\n    <div class=\"assessment-actions\" aria-label=\"Study assessment\">\n      <button type=\"button\" class=\"assessment-button\" [class.is-active]=\"status === 'needs-review'\" (click)=\"setStatus('needs-review')\">Needs review</button>\n      <button type=\"button\" class=\"assessment-button\" [class.is-active]=\"status === 'confident'\" (click)=\"setStatus('confident')\">Confident</button>\n    </div>\n    <nav class=\"question-navigation\" aria-label=\"Question navigation\">\n      <button type=\"button\" class=\"quiet-button\" [disabled]=\"!previousId\" (click)=\"navigateQuestion(previousId)\">← Previous</button>\n      <button type=\"button\" class=\"primary-button\" [disabled]=\"!nextId\" (click)=\"navigateQuestion(nextId)\">Next question →</button>\n    </nav>\n  </footer>\n  <p class=\"save-note\">Your study progress is saved on this browser and device.</p>\n</article>\n\n<ng-template #readerMessage>\n  <section class=\"reader-empty\" role=\"status\" aria-live=\"polite\">\n    <div class=\"empty-icon\" aria-hidden=\"true\">?</div>\n    <h2>{{ errorMessage ? 'Question unavailable' : 'Choose a question to begin' }}</h2>\n    <p>{{ errorMessage || 'Select a question from the results to read its full answer.' }}</p>\n    <button *ngIf=\"errorMessage\" type=\"button\" class=\"primary-button\" (click)=\"backToResults()\">Back to results</button>\n  </section>\n</ng-template>\n");

/***/ }),

/***/ "9WCt":
/*!*********************************************************!*\
  !*** ./src/app/user-profile/user-profile.component.css ***!
  \*********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJ1c2VyLXByb2ZpbGUuY29tcG9uZW50LmNzcyJ9 */");

/***/ }),

/***/ "BoL1":
/*!*******************************************************!*\
  !*** ./src/app/interview-library/question.service.ts ***!
  \*******************************************************/
/*! exports provided: QuestionService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "QuestionService", function() { return QuestionService; });
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/common/http */ "tk/3");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs/operators */ "kU1M");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var QuestionService = /** @class */ (function () {
    function QuestionService(http) {
        this.http = http;
        this.library$ = http.get('assets/data/interview-questions.json').pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["shareReplay"])(1));
    }
    QuestionService.prototype.getLibrary = function () {
        return this.library$;
    };
    QuestionService.prototype.search = function (questions, filters, progress) {
        var query = filters.query.trim().toLocaleLowerCase();
        var bookmarked = new Set(progress.bookmarks);
        return questions
            .map(function (question, index) {
            var titleMatch = question.title.toLocaleLowerCase().includes(query);
            var wordingMatch = question.variants.some(function (variant) { return variant.wording.toLocaleLowerCase().includes(query); });
            var tagMatch = question.tags.some(function (tag) { return tag.toLocaleLowerCase().includes(query); });
            var bodyMatch = question.sections.some(function (section) { return section.content.toLocaleLowerCase().includes(query); });
            var matchesText = !query || titleMatch || wordingMatch || tagMatch || bodyMatch;
            var matchesCategory = !filters.categoryId || question.categoryId === filters.categoryId;
            var matchesBookmark = !filters.bookmarkedOnly || bookmarked.has(question.id);
            var status = progress.statuses[question.id] || 'new';
            var matchesStatus = !filters.status || status === filters.status;
            var rank = 3;
            if (titleMatch) {
                rank = 0;
            }
            if (wordingMatch || tagMatch) {
                rank = Math.min(rank, 1);
            }
            if (bodyMatch) {
                rank = Math.min(rank, 2);
            }
            return { question: question, index: index, rank: rank, matchesText: matchesText, matchesCategory: matchesCategory, matchesBookmark: matchesBookmark, matchesStatus: matchesStatus };
        })
            .filter(function (item) { return item.matchesText && item.matchesCategory && item.matchesBookmark && item.matchesStatus; })
            .sort(function (left, right) { return left.rank - right.rank || left.index - right.index; })
            .map(function (item) { return item.question; });
    };
    QuestionService.ctorParameters = function () { return [
        { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_0__["HttpClient"] }
    ]; };
    QuestionService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({ providedIn: 'root' }),
        __metadata("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_0__["HttpClient"]])
    ], QuestionService);
    return QuestionService;
}());



/***/ }),

/***/ "C+6a":
/*!***********************************************************!*\
  !*** ./src/app/notifications/notifications.component.css ***!
  \***********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJub3RpZmljYXRpb25zLmNvbXBvbmVudC5jc3MifQ== */");

/***/ }),

/***/ "DiQn":
/*!**************************************************************!*\
  !*** ./src/app/interview-library/answer-reader.component.ts ***!
  \**************************************************************/
/*! exports provided: AnswerReaderComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AnswerReaderComponent", function() { return AnswerReaderComponent; });
/* harmony import */ var _raw_loader_answer_reader_component_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! raw-loader!./answer-reader.component.html */ "9SGg");
/* harmony import */ var _answer_reader_component_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./answer-reader.component.css */ "S84P");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _question_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./question.service */ "BoL1");
/* harmony import */ var _study_progress_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./study-progress.service */ "3lmm");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






var AnswerReaderComponent = /** @class */ (function () {
    function AnswerReaderComponent(route, router, questionService, progress) {
        this.route = route;
        this.router = router;
        this.questionService = questionService;
        this.progress = progress;
        this.categoryName = '';
        this.bookmarked = false;
        this.status = 'new';
        this.errorMessage = '';
        this.previousId = null;
        this.nextId = null;
        this.copiedSection = -1;
    }
    AnswerReaderComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.questionService.getLibrary().subscribe(function (library) {
            _this.library = library;
            _this.route.paramMap.subscribe(function (params) { return _this.selectQuestion(params.get('questionId')); });
            _this.route.parent.queryParamMap.subscribe(function () { return _this.updateNeighbors(); });
        }, function () { return _this.errorMessage = 'The interview library content could not be loaded. Please refresh and try again.'; });
    };
    AnswerReaderComponent.prototype.selectQuestion = function (id) {
        var _this = this;
        this.question = this.library.questions.find(function (item) { return item.id === id; });
        if (!this.question) {
            this.errorMessage = 'That question could not be found. It may have been removed from this library.';
            this.categoryName = '';
            this.updateNeighbors();
            return;
        }
        this.errorMessage = '';
        this.categoryName = (this.library.categories.find(function (category) { return category.id === _this.question.categoryId; }) || { name: 'Interview' }).name;
        this.progress.setLastQuestion(this.question.id);
        this.refreshProgress();
        this.updateNeighbors();
    };
    AnswerReaderComponent.prototype.refreshProgress = function () {
        if (!this.question) {
            return;
        }
        this.bookmarked = this.progress.isBookmarked(this.question.id);
        this.status = this.progress.statusFor(this.question.id);
    };
    AnswerReaderComponent.prototype.toggleBookmark = function () {
        if (!this.question) {
            return;
        }
        this.progress.toggleBookmark(this.question.id);
        this.refreshProgress();
    };
    AnswerReaderComponent.prototype.setStatus = function (status) {
        if (!this.question) {
            return;
        }
        this.progress.setStatus(this.question.id, status);
        this.refreshProgress();
    };
    AnswerReaderComponent.prototype.navigateQuestion = function (id) {
        this.router.navigate(['../', id], {
            relativeTo: this.route,
            queryParams: this.route.parent.snapshot.queryParams
        });
    };
    AnswerReaderComponent.prototype.backToResults = function () {
        this.router.navigate(['../'], {
            relativeTo: this.route,
            queryParams: this.route.parent.snapshot.queryParams
        });
    };
    AnswerReaderComponent.prototype.copyCode = function (content, index) {
        var _this = this;
        var clipboard = navigator.clipboard;
        if (clipboard && clipboard.writeText) {
            clipboard.writeText(content).then(function () { return _this.copiedSection = index; }, function () { return _this.copyFallback(content, index); });
            return;
        }
        this.copyFallback(content, index);
    };
    AnswerReaderComponent.prototype.copyFallback = function (content, index) {
        var field = document.createElement('textarea');
        field.value = content;
        field.setAttribute('aria-hidden', 'true');
        field.style.position = 'fixed';
        field.style.opacity = '0';
        document.body.appendChild(field);
        field.select();
        try {
            if (document.execCommand('copy')) {
                this.copiedSection = index;
            }
        }
        finally {
            document.body.removeChild(field);
        }
    };
    AnswerReaderComponent.prototype.updateNeighbors = function () {
        var _this = this;
        if (!this.library || !this.question) {
            this.previousId = null;
            this.nextId = null;
            return;
        }
        var query = this.route.parent.snapshot.queryParamMap;
        var results = this.questionService.search(this.library.questions, {
            query: query.get('q') || '',
            categoryId: query.get('category') || '',
            bookmarkedOnly: query.get('bookmarked') === '1',
            status: query.get('status') || ''
        }, this.progress.snapshot());
        var index = results.findIndex(function (item) { return item.id === _this.question.id; });
        this.previousId = index > 0 ? results[index - 1].id : null;
        this.nextId = index >= 0 && index < results.length - 1 ? results[index + 1].id : null;
    };
    AnswerReaderComponent.ctorParameters = function () { return [
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"] },
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"] },
        { type: _question_service__WEBPACK_IMPORTED_MODULE_4__["QuestionService"] },
        { type: _study_progress_service__WEBPACK_IMPORTED_MODULE_5__["StudyProgressService"] }
    ]; };
    AnswerReaderComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Component"])({
            selector: 'app-answer-reader',
            template: _raw_loader_answer_reader_component_html__WEBPACK_IMPORTED_MODULE_0__["default"],
            styles: [_answer_reader_component_css__WEBPACK_IMPORTED_MODULE_1__["default"]]
        }),
        __metadata("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"],
            _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"],
            _question_service__WEBPACK_IMPORTED_MODULE_4__["QuestionService"],
            _study_progress_service__WEBPACK_IMPORTED_MODULE_5__["StudyProgressService"]])
    ], AnswerReaderComponent);
    return AnswerReaderComponent;
}());



/***/ }),

/***/ "FTXL":
/*!**************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/notifications/notifications.component.html ***!
  \**************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"main-content\">\n  <div class=\"container-fluid\">\n      <div class=\"card\">\n          <div class=\"card-header card-header-danger\">\n              <h3 class=\"card-title\">Notifications</h3>\n              <p class=\"card-category\">Handcrafted by <a target=\"_blank\" href=\"https://github.com/mouse0270\">Robert McIntosh</a>. Please checkout the\n                  <a href=\"http://bootstrap-notify.remabledesigns.com/\" target=\"_blank\">full documentation.</a>\n              </p>\n          </div>\n          <div class=\"card-body\">\n              <div class=\"row\">\n                  <div class=\"col-md-6\">\n                      <h4 class=\"card-title\">Notifications Style</h4>\n                      <div class=\"alert alert-info\">\n                          <span>This is a plain notification</span>\n                      </div>\n                      <div class=\"alert alert-info\">\n                          <button mat-button type=\"button\" class=\"close\" data-dismiss=\"alert\" aria-label=\"Close\">\n                              <i class=\"material-icons\">close</i>\n                          </button>\n                          <span>This is a notification with close button.</span>\n                      </div>\n                      <div class=\"alert alert-info alert-with-icon\" data-notify=\"container\">\n                          <i class=\"material-icons\" data-notify=\"icon\">add_alert</i>\n                          <button mat-button type=\"button\" class=\"close\" data-dismiss=\"alert\" aria-label=\"Close\">\n                              <i class=\"material-icons\">close</i>\n                          </button>\n                          <span data-notify=\"message\">This is a notification with close button and icon.</span>\n                      </div>\n                      <div class=\"alert alert-info alert-with-icon\" data-notify=\"container\">\n                          <i class=\"material-icons\" data-notify=\"icon\">add_alert</i>\n                          <button mat-button type=\"button\" class=\"close\" data-dismiss=\"alert\" aria-label=\"Close\">\n                              <i class=\"material-icons\">close</i>\n                          </button>\n                          <span data-notify=\"message\">This is a notification with close button and icon and have many lines. You can see that the icon and the close button are always vertically aligned. This is a beautiful notification. So you don't have to worry about the style.</span>\n                      </div>\n                  </div>\n                  <div class=\"col-md-6\">\n                      <h4 class=\"card-title\">Notification states</h4>\n                      <div class=\"alert alert-info\">\n                          <button mat-button type=\"button\" class=\"close\" data-dismiss=\"alert\" aria-label=\"Close\">\n                              <i class=\"material-icons\">close</i>\n                          </button>\n                          <span>\n                              <b> Info - </b> This is a regular notification made with \".alert-info\"</span>\n                      </div>\n                      <div class=\"alert alert-success\">\n                          <button mat-button type=\"button\" class=\"close\" data-dismiss=\"alert\" aria-label=\"Close\">\n                              <i class=\"material-icons\">close</i>\n                          </button>\n                          <span>\n                              <b> Success - </b> This is a regular notification made with \".alert-success\"</span>\n                      </div>\n                      <div class=\"alert alert-warning\">\n                          <button mat-button type=\"button\" class=\"close\" data-dismiss=\"alert\" aria-label=\"Close\">\n                              <i class=\"material-icons\">close</i>\n                          </button>\n                          <span>\n                              <b> Warning - </b> This is a regular notification made with \".alert-warning\"</span>\n                      </div>\n                      <div class=\"alert alert-danger\">\n                          <button mat-button type=\"button\" class=\"close\" data-dismiss=\"alert\" aria-label=\"Close\">\n                              <i class=\"material-icons\">close</i>\n                          </button>\n                          <span>\n                              <b> Danger - </b> This is a regular notification made with \".alert-danger\"</span>\n                      </div>\n                      <div class=\"alert alert-primary\">\n                          <button mat-button type=\"button\" class=\"close\" data-dismiss=\"alert\" aria-label=\"Close\">\n                              <i class=\"material-icons\">close</i>\n                          </button>\n                          <span>\n                              <b> Primary - </b> This is a regular notification made with \".alert-primary\"</span>\n                      </div>\n                  </div>\n              </div>\n          </div>\n          <div class=\"col-md-12\">\n              <div class=\"places-buttons\">\n                  <div class=\"row\">\n                      <div class=\"col-md-6 ml-auto mr-auto text-center\">\n                          <h4 class=\"card-title\">\n                              Notifications Places\n                              <p class=\"category\">Click to view notifications</p>\n                          </h4>\n                      </div>\n                  </div>\n                  <div class=\"row\">\n                      <div class=\"col-lg-8 col-md-10 ml-auto mr-auto\">\n                          <div class=\"row\">\n                              <div class=\"col-md-4\">\n                                  <button mat-raised-button class=\"btn btn-danger btn-block\" (click)=\"showNotification('top','left')\">Top Left</button>\n                              </div>\n                              <div class=\"col-md-4\">\n                                  <button mat-raised-button class=\"btn btn-danger btn-block\" (click)=\"showNotification('top','center')\">Top Center</button>\n                              </div>\n                              <div class=\"col-md-4\">\n                                  <button mat-raised-button class=\"btn btn-danger btn-block\" (click)=\"showNotification('top','right')\">Top Right</button>\n                              </div>\n                          </div>\n                      </div>\n                  </div>\n                  <div class=\"row\">\n                      <div class=\"col-lg-8 col-md-10 ml-auto mr-auto\">\n                          <div class=\"row\">\n                              <div class=\"col-md-4\">\n                                  <button mat-raised-button class=\"btn btn-danger btn-block\" (click)=\"showNotification('bottom','left')\">Bottom Left</button>\n                              </div>\n                              <div class=\"col-md-4\">\n                                  <button mat-raised-button class=\"btn btn-danger btn-block\" (click)=\"showNotification('bottom','center')\">Bottom Center</button>\n                              </div>\n                              <div class=\"col-md-4\">\n                                  <button mat-raised-button class=\"btn btn-danger btn-block\" (click)=\"showNotification('bottom','right')\">Bottom Right</button>\n                              </div>\n                          </div>\n                      </div>\n                  </div>\n              </div>\n          </div>\n      </div>\n  </div>\n</div>\n");

/***/ }),

/***/ "GCT5":
/*!***************************************************************!*\
  !*** ./src/app/interview-library/practice-session.service.ts ***!
  \***************************************************************/
/*! exports provided: PracticeSessionService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PracticeSessionService", function() { return PracticeSessionService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _study_progress_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./study-progress.service */ "3lmm");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var PracticeSessionService = /** @class */ (function () {
    function PracticeSessionService(progress) {
        this.progress = progress;
        this.questionIds = [];
        this.position = 0;
        this.revealed = false;
        this.completed = false;
        this.needsReview = 0;
        this.confident = 0;
    }
    PracticeSessionService.prototype.start = function (questionIds) {
        this.questionIds = questionIds.slice();
        this.position = 0;
        this.revealed = false;
        this.completed = false;
        this.needsReview = 0;
        this.confident = 0;
    };
    PracticeSessionService.prototype.current = function (questions) {
        if (this.completed || !this.questionIds.length) {
            return null;
        }
        var id = this.questionIds[this.position];
        return questions.find(function (question) { return question.id === id; }) || null;
    };
    PracticeSessionService.prototype.getPosition = function () { return this.position; };
    PracticeSessionService.prototype.getTotal = function () { return this.questionIds.length; };
    PracticeSessionService.prototype.isRevealed = function () { return this.revealed; };
    PracticeSessionService.prototype.isCompleted = function () { return this.completed; };
    PracticeSessionService.prototype.hasSession = function () { return this.questionIds.length > 0; };
    PracticeSessionService.prototype.reveal = function () {
        if (this.hasSession() && !this.completed) {
            this.revealed = true;
        }
    };
    PracticeSessionService.prototype.assess = function (status) {
        if (!this.revealed || !this.hasSession() || this.completed) {
            return;
        }
        var id = this.questionIds[this.position];
        this.progress.setStatus(id, status);
        if (status === 'needs-review') {
            this.needsReview++;
        }
        if (status === 'confident') {
            this.confident++;
        }
        this.position++;
        this.revealed = false;
        if (this.position >= this.questionIds.length) {
            this.completed = true;
        }
    };
    PracticeSessionService.prototype.summary = function () {
        return { total: this.questionIds.length, needsReview: this.needsReview, confident: this.confident };
    };
    PracticeSessionService.ctorParameters = function () { return [
        { type: _study_progress_service__WEBPACK_IMPORTED_MODULE_1__["StudyProgressService"] }
    ]; };
    PracticeSessionService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])({ providedIn: 'root' }),
        __metadata("design:paramtypes", [_study_progress_service__WEBPACK_IMPORTED_MODULE_1__["StudyProgressService"]])
    ], PracticeSessionService);
    return PracticeSessionService;
}());



/***/ }),

/***/ "H/d9":
/*!******************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/dashboard/dashboard.component.html ***!
  \******************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"main-content\">\n  <div class=\"container-fluid\">\n      <div class=\"row text-warning\">\n          This (responsive)website is designed to show all the Sample usage of Angular Material theme, controls & icons. \n          Website desinged using Boostrap-4 and {{ nameNgVersion }}\n      </div>\n      <div class=\"row\">\n          <div class=\"col-lg-3 col-md-6 col-sm-6\">\n              <div class=\"card card-stats\">\n                  <div class=\"card-header card-header-warning card-header-icon\">\n                      <div class=\"card-icon\">\n                          <i class=\"material-icons\">content_copy</i>\n                      </div>\n                      <p class=\"card-category\">Used Space</p>\n                      <h3 class=\"card-title\">256/500\n                          <small>GB</small>\n                      </h3>\n                  </div>\n                  <div class=\"card-footer\">\n                      <div class=\"stats\">\n                          <i class=\"material-icons text-danger\">warning</i>\n                          <a href=\"javascript:void(0)\">Get More Space...</a>\n                      </div>\n                  </div>\n              </div>\n          </div>\n          <div class=\"col-lg-3 col-md-6 col-sm-6\">\n              <div class=\"card card-stats\">\n                  <div class=\"card-header card-header-success card-header-icon\">\n                      <div class=\"card-icon\">\n                          <i class=\"material-icons\">store</i>\n                      </div>\n                      <p class=\"card-category\">Revenue</p>\n                      <h3 class=\"card-title\">$12,000</h3>\n                  </div>\n                  <div class=\"card-footer\">\n                      <div class=\"stats\">\n                          <i class=\"material-icons\">date_range</i> Last 24 Hours\n                      </div>\n                  </div>\n              </div>\n          </div>\n          <div class=\"col-lg-3 col-md-6 col-sm-6\">\n              <div class=\"card card-stats\">\n                  <div class=\"card-header card-header-danger card-header-icon\">\n                      <div class=\"card-icon\">\n                          <i class=\"material-icons\">info_outline</i>\n                      </div>\n                      <p class=\"card-category\">Fixed Issues</p>\n                      <h3 class=\"card-title\">897</h3>\n                  </div>\n                  <div class=\"card-footer\">\n                      <div class=\"stats\">\n                          <i class=\"material-icons\">local_offer</i> Tracked from Github\n                      </div>\n                  </div>\n              </div>\n          </div>\n          <div class=\"col-lg-3 col-md-6 col-sm-6\">\n              <div class=\"card card-stats\">\n                  <div class=\"card-header card-header-info card-header-icon\">\n                      <div class=\"card-icon\">\n                          <i class=\"fa fa-twitter\"></i>\n                      </div>\n                      <p class=\"card-category\">Followers</p>\n                      <h3 class=\"card-title\">+5863</h3>\n                  </div>\n                  <div class=\"card-footer\">\n                      <div class=\"stats\">\n                          <i class=\"material-icons\">update</i> Just Updated\n                      </div>\n                  </div>\n              </div>\n          </div>\n      </div>\n      <div class=\"row\">\n          <div class=\"col-md-4\">\n              <div class=\"card card-chart\">\n                  <div class=\"card-header card-header-success\">\n                      <div class=\"ct-chart\" id=\"dailySalesChart\"></div>\n                  </div>\n                  <div class=\"card-body\">\n                      <h4 class=\"card-title\">Daily Sales</h4>\n                      <p class=\"card-category\">\n                          <span class=\"text-success\"><i class=\"fa fa-long-arrow-up\"></i> 39.22% </span> increase in today sales.</p>\n                  </div>\n                  <div class=\"card-footer\">\n                      <div class=\"stats\">\n                          <i class=\"material-icons\">access_time</i> updated 4 minutes ago\n                      </div>\n                  </div>\n              </div>\n          </div>\n          <div class=\"col-md-4\">\n              <div class=\"card card-chart\">\n                  <div class=\"card-header card-header-warning\">\n                      <div class=\"ct-chart\" id=\"websiteViewsChart\"></div>\n                  </div>\n                  <div class=\"card-body\">\n                      <h4 class=\"card-title\">Email Subscriptions</h4>\n                      <p class=\"card-category\">Last Campaign Performance</p>\n                  </div>\n                  <div class=\"card-footer\">\n                      <div class=\"stats\">\n                          <i class=\"material-icons\">access_time</i> campaign sent 2 days ago\n                      </div>\n                  </div>\n              </div>\n          </div>\n          <div class=\"col-md-4\">\n              <div class=\"card card-chart\">\n                  <div class=\"card-header card-header-danger\">\n                      <div class=\"ct-chart\" id=\"completedTasksChart\"></div>\n                  </div>\n                  <div class=\"card-body\">\n                      <h4 class=\"card-title\">Completed Tasks</h4>\n                      <p class=\"card-category\">Last Campaign Performance</p>\n                  </div>\n                  <div class=\"card-footer\">\n                      <div class=\"stats\">\n                          <i class=\"material-icons\">access_time</i> campaign sent 2 days ago\n                      </div>\n                  </div>\n              </div>\n          </div>\n      </div>\n      <div class=\"row\">\n          <div class=\"col-lg-6 col-md-12\">\n              <div class=\"card\">\n                  <div class=\"card-header card-header-tabs card-header-primary\">\n                      <div class=\"nav-tabs-navigation\">\n                          <div class=\"nav-tabs-wrapper\">\n                              <span class=\"nav-tabs-title\">Tasks:</span>\n                              <ul class=\"nav nav-tabs\" data-tabs=\"tabs\">\n                                  <li class=\"nav-item\">\n                                      <a mat-button class=\"nav-link active\" href=\"#profile\" data-toggle=\"tab\">\n                                          <i class=\"material-icons\">bug_report</i> Bugs\n                                          <div class=\"ripple-container\"></div>\n                                      </a>\n                                  </li>\n                                  <li class=\"nav-item\">\n                                      <a mat-button class=\"nav-link\" href=\"#messages\" data-toggle=\"tab\">\n                                          <i class=\"material-icons\">code</i> Website\n                                          <div class=\"ripple-container\"></div>\n                                      </a>\n                                  </li>\n                                  <li class=\"nav-item\">\n                                      <a mat-button class=\"nav-link\" href=\"#settings\" data-toggle=\"tab\">\n                                          <i class=\"material-icons\">cloud</i> Server\n                                          <div class=\"ripple-container\"></div>\n                                      </a>\n                                  </li>\n                              </ul>\n                          </div>\n                      </div>\n                  </div>\n                  <div class=\"card-body\">\n                      <div class=\"tab-content\">\n                          <div class=\"tab-pane active\" id=\"profile\">\n                              <table class=\"table\">\n                                  <tbody>\n                                      <tr>\n                                          <td>\n                                              <div class=\"form-check\">\n                                                  <label class=\"form-check-label\">\n                                                      <input class=\"form-check-input\" type=\"checkbox\" value=\"\" checked>\n                                                      <span class=\"form-check-sign\">\n                                                          <span class=\"check\"></span>\n                                                      </span>\n                                                  </label>\n                                              </div>\n                                          </td>\n                                          <td>Sign contract for \"What are conference organizers afraid of?\"</td>\n                                          <td class=\"td-actions text-right\">\n                                              <button mat-raised-button type=\"button\" matTooltip=\"Edit Task\" [matTooltipPosition]=\"'above'\" class=\"btn btn-primary btn-link btn-sm btn-just-icon\">\n                                                  <i class=\"material-icons\">edit</i>\n                                              </button>\n                                              <button mat-raised-button type=\"button\" matTooltip=\"Remove\" [matTooltipPosition]=\"'above'\" class=\"btn btn-danger btn-link btn-sm btn-just-icon\">\n                                                  <i class=\"material-icons\">close</i>\n                                              </button>\n                                          </td>\n                                      </tr>\n                                      <tr>\n                                          <td>\n                                              <div class=\"form-check\">\n                                                  <label class=\"form-check-label\">\n                                                      <input class=\"form-check-input\" type=\"checkbox\" value=\"\">\n                                                      <span class=\"form-check-sign\">\n                                                          <span class=\"check\"></span>\n                                                      </span>\n                                                  </label>\n                                              </div>\n                                          </td>\n                                          <td>Lines From Great Russian Literature? Or E-mails From My Boss?</td>\n                                          <td class=\"td-actions text-right\">\n                                              <button mat-raised-button type=\"button\" matTooltip=\"Edit Task\" [matTooltipPosition]=\"'above'\" class=\"btn btn-primary btn-link btn-sm btn-just-icon\">\n                                                  <i class=\"material-icons\">edit</i>\n                                              </button>\n                                              <button mat-raised-button type=\"button\" matTooltip=\"Remove\" [matTooltipPosition]=\"'above'\" class=\"btn btn-danger btn-link btn-sm btn-just-icon\">\n                                                  <i class=\"material-icons\">close</i>\n                                              </button>\n                                          </td>\n                                      </tr>\n                                      <tr>\n                                          <td>\n                                              <div class=\"form-check\">\n                                                  <label class=\"form-check-label\">\n                                                      <input class=\"form-check-input\" type=\"checkbox\" value=\"\">\n                                                      <span class=\"form-check-sign\">\n                                                          <span class=\"check\"></span>\n                                                      </span>\n                                                  </label>\n                                              </div>\n                                          </td>\n                                          <td>Flooded: One year later, assessing what was lost and what was found when a ravaging rain swept through metro Detroit\n                                          </td>\n                                          <td class=\"td-actions text-right\">\n                                              <button mat-raised-button type=\"button\" matTooltip=\"Edit Task\" [matTooltipPosition]=\"'above'\" class=\"btn btn-primary btn-link btn-sm btn-just-icon\">\n                                                  <i class=\"material-icons\">edit</i>\n                                              </button>\n                                              <button mat-raised-button type=\"button\" matTooltip=\"Remove\" [matTooltipPosition]=\"'above'\" class=\"btn btn-danger btn-link btn-sm btn-just-icon\">\n                                                  <i class=\"material-icons\">close</i>\n                                              </button>\n                                          </td>\n                                      </tr>\n                                      <tr>\n                                          <td>\n                                              <div class=\"form-check\">\n                                                  <label class=\"form-check-label\">\n                                                      <input class=\"form-check-input\" type=\"checkbox\" value=\"\" checked>\n                                                      <span class=\"form-check-sign\">\n                                                          <span class=\"check\"></span>\n                                                      </span>\n                                                  </label>\n                                              </div>\n                                          </td>\n                                          <td>Create 4 Invisible User Experiences you Never Knew About</td>\n                                          <td class=\"td-actions text-right\">\n                                              <button mat-raised-button type=\"button\" matTooltip=\"Edit Task\" [matTooltipPosition]=\"'above'\" class=\"btn btn-primary btn-link btn-sm btn-just-icon\">\n                                                  <i class=\"material-icons\">edit</i>\n                                              </button>\n                                              <button mat-raised-button type=\"button\" matTooltip=\"Remove\" [matTooltipPosition]=\"'above'\" class=\"btn btn-danger btn-link btn-sm btn-just-icon\">\n                                                  <i class=\"material-icons\">close</i>\n                                              </button>\n                                          </td>\n                                      </tr>\n                                  </tbody>\n                              </table>\n                          </div>\n                          <div class=\"tab-pane\" id=\"messages\">\n                              <table class=\"table\">\n                                  <tbody>\n                                      <tr>\n                                          <td>\n                                              <div class=\"form-check\">\n                                                  <label class=\"form-check-label\">\n                                                      <input class=\"form-check-input\" type=\"checkbox\" value=\"\" checked>\n                                                      <span class=\"form-check-sign\">\n                                                          <span class=\"check\"></span>\n                                                      </span>\n                                                  </label>\n                                              </div>\n                                          </td>\n                                          <td>Flooded: One year later, assessing what was lost and what was found when a ravaging rain swept through metro Detroit\n                                          </td>\n                                          <td class=\"td-actions text-right\">\n                                              <button mat-raised-button type=\"button\" matTooltip=\"Edit Task\" [matTooltipPosition]=\"'above'\" class=\"btn btn-primary btn-link btn-sm btn-just-icon\">\n                                                  <i class=\"material-icons\">edit</i>\n                                              </button>\n                                              <button mat-raised-button type=\"button\" matTooltip=\"Remove\" [matTooltipPosition]=\"'above'\" class=\"btn btn-danger btn-link btn-sm btn-just-icon\">\n                                                  <i class=\"material-icons\">close</i>\n                                              </button>\n                                          </td>\n                                      </tr>\n                                      <tr>\n                                          <td>\n                                              <div class=\"form-check\">\n                                                  <label class=\"form-check-label\">\n                                                      <input class=\"form-check-input\" type=\"checkbox\" value=\"\">\n                                                      <span class=\"form-check-sign\">\n                                                          <span class=\"check\"></span>\n                                                      </span>\n                                                  </label>\n                                              </div>\n                                          </td>\n                                          <td>Sign contract for \"What are conference organizers afraid of?\"</td>\n                                          <td class=\"td-actions text-right\">\n                                              <button mat-raised-button type=\"button\" matTooltip=\"Edit Task\" [matTooltipPosition]=\"'above'\" class=\"btn btn-primary btn-link btn-sm btn-just-icon\">\n                                                  <i class=\"material-icons\">edit</i>\n                                              </button>\n                                              <button mat-raised-button type=\"button\" matTooltip=\"Remove\" [matTooltipPosition]=\"'above'\" class=\"btn btn-danger btn-link btn-sm btn-just-icon\">\n                                                  <i class=\"material-icons\">close</i>\n                                              </button>\n                                          </td>\n                                      </tr>\n                                  </tbody>\n                              </table>\n                          </div>\n                          <div class=\"tab-pane\" id=\"settings\">\n                              <table class=\"table\">\n                                  <tbody>\n                                      <tr>\n                                          <td>\n                                              <div class=\"form-check\">\n                                                  <label class=\"form-check-label\">\n                                                      <input class=\"form-check-input\" type=\"checkbox\" value=\"\">\n                                                      <span class=\"form-check-sign\">\n                                                          <span class=\"check\"></span>\n                                                      </span>\n                                                  </label>\n                                              </div>\n                                          </td>\n                                          <td>Lines From Great Russian Literature? Or E-mails From My Boss?</td>\n                                          <td class=\"td-actions text-right\">\n                                              <button mat-raised-button type=\"button\" matTooltip=\"Edit Task\" [matTooltipPosition]=\"'above'\" class=\"btn btn-primary btn-link btn-sm btn-just-icon\">\n                                                  <i class=\"material-icons\">edit</i>\n                                              </button>\n                                              <button mat-raised-button type=\"button\" matTooltip=\"Remove\" [matTooltipPosition]=\"'above'\" class=\"btn btn-danger btn-link btn-sm btn-just-icon\">\n                                                  <i class=\"material-icons\">close</i>\n                                              </button>\n                                          </td>\n                                      </tr>\n                                      <tr>\n                                          <td>\n                                              <div class=\"form-check\">\n                                                  <label class=\"form-check-label\">\n                                                      <input class=\"form-check-input\" type=\"checkbox\" value=\"\" checked>\n                                                      <span class=\"form-check-sign\">\n                                                          <span class=\"check\"></span>\n                                                      </span>\n                                                  </label>\n                                              </div>\n                                          </td>\n                                          <td>Flooded: One year later, assessing what was lost and what was found when a ravaging rain swept through metro Detroit\n                                          </td>\n                                          <td class=\"td-actions text-right\">\n                                              <button mat-raised-button type=\"button\" matTooltip=\"Edit Task\" [matTooltipPosition]=\"'above'\" class=\"btn btn-primary btn-link btn-sm btn-just-icon\">\n                                                  <i class=\"material-icons\">edit</i>\n                                              </button>\n                                              <button mat-raised-button type=\"button\" matTooltip=\"Remove\" [matTooltipPosition]=\"'above'\" class=\"btn btn-danger btn-link btn-sm btn-just-icon\">\n                                                  <i class=\"material-icons\">close</i>\n                                              </button>\n                                          </td>\n                                      </tr>\n                                      <tr>\n                                          <td>\n                                              <div class=\"form-check\">\n                                                  <label class=\"form-check-label\">\n                                                      <input class=\"form-check-input\" type=\"checkbox\" value=\"\" checked>\n                                                      <span class=\"form-check-sign\">\n                                                          <span class=\"check\"></span>\n                                                      </span>\n                                                  </label>\n                                              </div>\n                                          </td>\n                                          <td>Sign contract for \"What are conference organizers afraid of?\"</td>\n                                          <td class=\"td-actions text-right\">\n                                              <button mat-raised-button type=\"button\" matTooltip=\"Edit Task\" [matTooltipPosition]=\"'above'\" class=\"btn btn-primary btn-link btn-sm btn-just-icon\">\n                                                  <i class=\"material-icons\">edit</i>\n                                              </button>\n                                              <button mat-raised-button type=\"button\" matTooltip=\"Remove\" [matTooltipPosition]=\"'above'\" class=\"btn btn-danger btn-link btn-sm btn-just-icon\">\n                                                  <i class=\"material-icons\">close</i>\n                                              </button>\n                                          </td>\n                                      </tr>\n                                  </tbody>\n                              </table>\n                          </div>\n                      </div>\n                  </div>\n              </div>\n          </div>\n          <div class=\"col-lg-6 col-md-12\">\n              <div class=\"card\">\n                  <div class=\"card-header card-header-warning\">\n                      <h4 class=\"card-title\">Employees Stats</h4>\n                      <p class=\"card-category\">New employees on 15th September, 2016</p>\n                  </div>\n                  <div class=\"card-body table-responsive\">\n                      <table class=\"table table-hover\">\n                          <thead class=\"text-warning\">\n                              <th>ID</th>\n                              <th>Name</th>\n                              <th>Salary</th>\n                              <th>Country</th>\n                          </thead>\n                          <tbody>\n                              <tr>\n                                  <td>1</td>\n                                  <td>Dakota Rice</td>\n                                  <td>$36,738</td>\n                                  <td>Niger</td>\n                              </tr>\n                              <tr>\n                                  <td>2</td>\n                                  <td>Minerva Hooper</td>\n                                  <td>$23,789</td>\n                                  <td>Curaçao</td>\n                              </tr>\n                              <tr>\n                                  <td>3</td>\n                                  <td>Sage Rodriguez</td>\n                                  <td>$56,142</td>\n                                  <td>Netherlands</td>\n                              </tr>\n                              <tr>\n                                  <td>4</td>\n                                  <td>Philip Chaney</td>\n                                  <td>$38,735</td>\n                                  <td>Korea, South</td>\n                              </tr>\n                          </tbody>\n                      </table>\n                  </div>\n              </div>\n          </div>\n      </div>\n  </div>\n</div>\n");

/***/ }),

/***/ "IqXj":
/*!*************************************************************!*\
  !*** ./src/app/layouts/admin-layout/admin-layout.module.ts ***!
  \*************************************************************/
/*! exports provided: AdminLayoutModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AdminLayoutModule", function() { return AdminLayoutModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var _admin_layout_routing__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./admin-layout.routing */ "qZ7x");
/* harmony import */ var _dashboard_dashboard_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../dashboard/dashboard.component */ "QX6l");
/* harmony import */ var _user_profile_user_profile_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../user-profile/user-profile.component */ "/de2");
/* harmony import */ var _table_list_table_list_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../table-list/table-list.component */ "smLI");
/* harmony import */ var _typography_typography_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../typography/typography.component */ "un8i");
/* harmony import */ var _icons_icons_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../icons/icons.component */ "8+yc");
/* harmony import */ var _maps_maps_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../../maps/maps.component */ "urC5");
/* harmony import */ var _notifications_notifications_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../../notifications/notifications.component */ "4G6T");
/* harmony import */ var _interview_library_interview_library_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../../interview-library/interview-library.component */ "kEEF");
/* harmony import */ var _interview_library_answer_reader_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ../../interview-library/answer-reader.component */ "DiQn");
/* harmony import */ var _interview_library_practice_component__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ../../interview-library/practice.component */ "a6ah");
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! @angular/material/button */ "bTqV");
/* harmony import */ var _angular_material_input__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! @angular/material/input */ "qFsG");
/* harmony import */ var _angular_material_core__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! @angular/material/core */ "FKr1");
/* harmony import */ var _angular_material_form_field__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! @angular/material/form-field */ "kmnG");
/* harmony import */ var _angular_material_tooltip__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! @angular/material/tooltip */ "Qu3c");
/* harmony import */ var _angular_material_select__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! @angular/material/select */ "d3UM");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};





















var AdminLayoutModule = /** @class */ (function () {
    function AdminLayoutModule() {
    }
    AdminLayoutModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forChild(_admin_layout_routing__WEBPACK_IMPORTED_MODULE_4__["AdminLayoutRoutes"]),
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["ReactiveFormsModule"],
                _angular_material_button__WEBPACK_IMPORTED_MODULE_15__["MatButtonModule"],
                _angular_material_core__WEBPACK_IMPORTED_MODULE_17__["MatRippleModule"],
                _angular_material_form_field__WEBPACK_IMPORTED_MODULE_18__["MatFormFieldModule"],
                _angular_material_input__WEBPACK_IMPORTED_MODULE_16__["MatInputModule"],
                _angular_material_select__WEBPACK_IMPORTED_MODULE_20__["MatSelectModule"],
                _angular_material_tooltip__WEBPACK_IMPORTED_MODULE_19__["MatTooltipModule"],
            ],
            declarations: [
                _dashboard_dashboard_component__WEBPACK_IMPORTED_MODULE_5__["DashboardComponent"],
                _user_profile_user_profile_component__WEBPACK_IMPORTED_MODULE_6__["UserProfileComponent"],
                _table_list_table_list_component__WEBPACK_IMPORTED_MODULE_7__["TableListComponent"],
                _typography_typography_component__WEBPACK_IMPORTED_MODULE_8__["TypographyComponent"],
                _icons_icons_component__WEBPACK_IMPORTED_MODULE_9__["IconsComponent"],
                _maps_maps_component__WEBPACK_IMPORTED_MODULE_10__["MapsComponent"],
                _notifications_notifications_component__WEBPACK_IMPORTED_MODULE_11__["NotificationsComponent"],
                _interview_library_interview_library_component__WEBPACK_IMPORTED_MODULE_12__["InterviewLibraryComponent"],
                _interview_library_answer_reader_component__WEBPACK_IMPORTED_MODULE_13__["AnswerReaderComponent"],
                _interview_library_practice_component__WEBPACK_IMPORTED_MODULE_14__["PracticeComponent"],
            ]
        })
    ], AdminLayoutModule);
    return AdminLayoutModule;
}());



/***/ }),

/***/ "Nvwq":
/*!*************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/interview-library/practice.component.html ***!
  \*************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<section class=\"practice-page\" aria-labelledby=\"practice-title\">\n  <button class=\"back-link\" type=\"button\" (click)=\"backToResults()\">← Back to results</button>\n\n  <ng-container *ngIf=\"!missingSession && !completed && question\">\n    <header class=\"practice-topline\">\n      <div>\n        <p class=\"eyebrow\">PRACTICE SESSION</p>\n        <h1 id=\"practice-title\">Think it through, then reveal</h1>\n      </div>\n      <span class=\"session-position\">Question {{ position + 1 }} <span aria-hidden=\"true\">/</span> {{ total }}</span>\n    </header>\n    <div class=\"progress-track\" role=\"progressbar\" [attr.aria-valuenow]=\"position\" [attr.aria-valuemin]=\"0\" [attr.aria-valuemax]=\"total\" [attr.aria-label]=\"'Practice progress: question ' + (position + 1) + ' of ' + total\">\n      <span [style.width.%]=\"total ? (position / total) * 100 : 0\"></span>\n    </div>\n    <article class=\"practice-card\">\n      <div class=\"practice-category\">{{ categoryName(question.categoryId) }} <span>· {{ question.id }}</span></div>\n      <h2>{{ question.title }}</h2>\n      <p class=\"think-prompt\" *ngIf=\"!answerRevealed\">Take a moment to organize your answer. The full explanation stays hidden until you are ready.</p>\n\n      <button *ngIf=\"!answerRevealed\" type=\"button\" class=\"primary-button reveal-button\" (click)=\"revealAnswer()\">Reveal answer</button>\n      <div *ngIf=\"answerRevealed\" class=\"revealed-answer\" aria-live=\"polite\">\n        <h3>Answer</h3>\n        <ng-container *ngFor=\"let section of question.sections\">\n          <p *ngIf=\"section.type === 'paragraph'\">{{ section.content }}</p>\n          <section *ngIf=\"section.type === 'code'\" class=\"practice-code\">\n            <div>{{ section.language || 'Code example' }}</div>\n            <pre><code>{{ section.content }}</code></pre>\n          </section>\n        </ng-container>\n        <div class=\"self-assessment\" aria-label=\"Assess this answer\">\n          <p>How did that feel?</p>\n          <button type=\"button\" class=\"assessment-button\" (click)=\"assess('needs-review')\">Needs review</button>\n          <button type=\"button\" class=\"primary-button\" (click)=\"assess('confident')\">Confident</button>\n        </div>\n      </div>\n    </article>\n    <p class=\"save-note\">Your assessment is saved on this browser and device.</p>\n  </ng-container>\n\n  <section *ngIf=\"completed\" class=\"completion-card\" aria-live=\"polite\">\n    <div class=\"completion-check\" aria-hidden=\"true\">✓</div>\n    <p class=\"eyebrow\">SESSION COMPLETE</p>\n    <h1 id=\"practice-title\">Nice work. You made progress.</h1>\n    <p>You reviewed {{ summary.total }} {{ summary.total === 1 ? 'question' : 'questions' }} in this session.</p>\n    <div class=\"summary-stats\">\n      <div><strong>{{ summary.confident }}</strong><span>Confident</span></div>\n      <div><strong>{{ summary.needsReview }}</strong><span>Needs review</span></div>\n    </div>\n    <button type=\"button\" class=\"primary-button\" (click)=\"backToResults()\">Back to results</button>\n  </section>\n\n  <section *ngIf=\"missingSession\" class=\"completion-card empty-session\" role=\"status\">\n    <div class=\"completion-check\" aria-hidden=\"true\">↗</div>\n    <p class=\"eyebrow\">PRACTICE SESSION</p>\n    <h1 id=\"practice-title\">No practice questions yet</h1>\n    <p>Start a session from a non-empty set of filtered questions. Your current filters will be used to build it.</p>\n    <button type=\"button\" class=\"primary-button\" (click)=\"backToResults()\">Choose questions</button>\n  </section>\n</section>\n");

/***/ }),

/***/ "O5tJ":
/*!********************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/typography/typography.component.html ***!
  \********************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"main-content\">\n  <div class=\"container-fluid\">\n    <div class=\"card\">\n        <div class=\"card-header card-header-danger\">\n            <h4 class=\"card-title\">Material Dashboard Heading</h4>\n            <p class=\"card-category\">Created using Roboto Font Family</p>\n        </div>\n        <div class=\"card-body\">\n            <div id=\"typography\">\n                <div class=\"card-title\">\n                    <h2>Typography</h2>\n                </div>\n                <div class=\"row\">\n                    <div class=\"mat-type\">\n                        <h1>\n                            <span class=\"tim-note\">Header 1</span>The Life of Material Dashboard </h1>\n                    </div>\n                    <div class=\"mat-type\">\n                        <h2>\n                            <span class=\"tim-note\">Header 2</span>The Life of Material Dashboard</h2>\n                    </div>\n                    <div class=\"mat-type\">\n                        <h3>\n                            <span class=\"tim-note\">Header 3</span>The Life of Material Dashboard</h3>\n                    </div>\n                    <div class=\"mat-type\">\n                        <h4>\n                            <span class=\"tim-note\">Header 4</span>The Life of Material Dashboard</h4>\n                    </div>\n                    <div class=\"mat-type\">\n                        <h5>\n                            <span class=\"tim-note\">Header 5</span>The Life of Material Dashboard</h5>\n                    </div>\n                    <div class=\"mat-type\">\n                        <h6>\n                            <span class=\"tim-note\">Header 6</span>The Life of Material Dashboard</h6>\n                    </div>\n                    <div class=\"mat-type\">\n                        <p>\n                            <span class=\"tim-note\">Paragraph</span>\n                            I will be the leader of a company that ends up being worth billions of dollars, because I got the answers. I understand culture. I am the nucleus. I think that’s a responsibility that I have, to push possibilities, to show people, this is the level that things could be at.</p>\n                    </div>\n                    <div class=\"mat-type\">\n                        <span class=\"tim-note\">Quote</span>\n                        <blockquote class=\"blockquote\">\n                            <p>\n                                I will be the leader of a company that ends up being worth billions of dollars, because I got the answers. I understand culture. I am the nucleus. I think that’s a responsibility that I have, to push possibilities, to show people, this is the level that things could be at.\n                            </p>\n                            <small>\n                                Kanye West, Musician\n                            </small>\n                        </blockquote>\n                    </div>\n                    <div class=\"mat-type\">\n                        <span class=\"tim-note\">Muted Text</span>\n                        <p class=\"text-muted\">\n                            I will be the leader of a company that ends up being worth billions of dollars, because I got the answers...\n                        </p>\n                    </div>\n                    <div class=\"mat-type\">\n                        <span class=\"tim-note\">Primary Text</span>\n                        <p class=\"text-primary\">\n                            I will be the leader of a company that ends up being worth billions of dollars, because I got the answers... </p>\n                    </div>\n                    <div class=\"mat-type\">\n                        <span class=\"tim-note\">Info Text</span>\n                        <p class=\"text-info\">\n                            I will be the leader of a company that ends up being worth billions of dollars, because I got the answers... </p>\n                    </div>\n                    <div class=\"mat-type\">\n                        <span class=\"tim-note\">Success Text</span>\n                        <p class=\"text-success\">\n                            I will be the leader of a company that ends up being worth billions of dollars, because I got the answers... </p>\n                    </div>\n                    <div class=\"mat-type\">\n                        <span class=\"tim-note\">Warning Text</span>\n                        <p class=\"text-warning\">\n                            I will be the leader of a company that ends up being worth billions of dollars, because I got the answers...\n                        </p>\n                    </div>\n                    <div class=\"mat-type\">\n                        <span class=\"tim-note\">Danger Text</span>\n                        <p class=\"text-danger\">\n                            I will be the leader of a company that ends up being worth billions of dollars, because I got the answers... </p>\n                    </div>\n                    <div class=\"mat-type\">\n                        <h2>\n                            <span class=\"tim-note\">Small Tag</span>\n                            Header with small subtitle\n                            <br>\n                            <small>Use \"small\" tag for the headers</small>\n                        </h2>\n                    </div>\n                </div>\n            </div>\n        </div>\n    </div>\n</div>\n");

/***/ }),

/***/ "QX6l":
/*!**************************************************!*\
  !*** ./src/app/dashboard/dashboard.component.ts ***!
  \**************************************************/
/*! exports provided: DashboardComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DashboardComponent", function() { return DashboardComponent; });
/* harmony import */ var _raw_loader_dashboard_component_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! raw-loader!./dashboard.component.html */ "H/d9");
/* harmony import */ var _dashboard_component_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./dashboard.component.css */ "VKVo");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var chartist__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! chartist */ "uki+");
/* harmony import */ var chartist__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(chartist__WEBPACK_IMPORTED_MODULE_3__);
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var DashboardComponent = /** @class */ (function () {
    function DashboardComponent() {
        this.nameNgVersion = 'Angular ' + _angular_core__WEBPACK_IMPORTED_MODULE_2__["VERSION"].major;
    }
    DashboardComponent.prototype.startAnimationForLineChart = function (chart) {
        var seq, delays, durations;
        seq = 0;
        delays = 80;
        durations = 500;
        chart.on('draw', function (data) {
            if (data.type === 'line' || data.type === 'area') {
                data.element.animate({
                    d: {
                        begin: 600,
                        dur: 700,
                        from: data.path.clone().scale(1, 0).translate(0, data.chartRect.height()).stringify(),
                        to: data.path.clone().stringify(),
                        easing: chartist__WEBPACK_IMPORTED_MODULE_3__["Svg"].Easing.easeOutQuint
                    }
                });
            }
            else if (data.type === 'point') {
                seq++;
                data.element.animate({
                    opacity: {
                        begin: seq * delays,
                        dur: durations,
                        from: 0,
                        to: 1,
                        easing: 'ease'
                    }
                });
            }
        });
        seq = 0;
    };
    ;
    DashboardComponent.prototype.startAnimationForBarChart = function (chart) {
        var seq2, delays2, durations2;
        seq2 = 0;
        delays2 = 80;
        durations2 = 500;
        chart.on('draw', function (data) {
            if (data.type === 'bar') {
                seq2++;
                data.element.animate({
                    opacity: {
                        begin: seq2 * delays2,
                        dur: durations2,
                        from: 0,
                        to: 1,
                        easing: 'ease'
                    }
                });
            }
        });
        seq2 = 0;
    };
    ;
    DashboardComponent.prototype.ngOnInit = function () {
        /* ----------==========     Daily Sales Chart initialization For Documentation    ==========---------- */
        var dataDailySalesChart = {
            labels: ['M', 'T', 'W', 'T', 'F', 'S', 'S'],
            series: [
                [12, 17, 7, 17, 23, 18, 38]
            ]
        };
        var optionsDailySalesChart = {
            lineSmooth: chartist__WEBPACK_IMPORTED_MODULE_3__["Interpolation"].cardinal({
                tension: 0
            }),
            low: 0,
            high: 50,
            chartPadding: { top: 0, right: 0, bottom: 0, left: 0 },
        };
        var dailySalesChart = new chartist__WEBPACK_IMPORTED_MODULE_3__["Line"]('#dailySalesChart', dataDailySalesChart, optionsDailySalesChart);
        this.startAnimationForLineChart(dailySalesChart);
        /* ----------==========     Completed Tasks Chart initialization    ==========---------- */
        var dataCompletedTasksChart = {
            labels: ['12p', '3p', '6p', '9p', '12p', '3a', '6a', '9a'],
            series: [
                [230, 750, 450, 300, 280, 240, 200, 190]
            ]
        };
        var optionsCompletedTasksChart = {
            lineSmooth: chartist__WEBPACK_IMPORTED_MODULE_3__["Interpolation"].cardinal({
                tension: 0
            }),
            low: 0,
            high: 1000,
            chartPadding: { top: 0, right: 0, bottom: 0, left: 0 }
        };
        var completedTasksChart = new chartist__WEBPACK_IMPORTED_MODULE_3__["Line"]('#completedTasksChart', dataCompletedTasksChart, optionsCompletedTasksChart);
        // start animation for the Completed Tasks Chart - Line Chart
        this.startAnimationForLineChart(completedTasksChart);
        /* ----------==========     Emails Subscription Chart initialization    ==========---------- */
        var datawebsiteViewsChart = {
            labels: ['J', 'F', 'M', 'A', 'M', 'J', 'J', 'A', 'S', 'O', 'N', 'D'],
            series: [
                [542, 443, 320, 780, 553, 453, 326, 434, 568, 610, 756, 895]
            ]
        };
        var optionswebsiteViewsChart = {
            axisX: {
                showGrid: false
            },
            low: 0,
            high: 1000,
            chartPadding: { top: 0, right: 5, bottom: 0, left: 0 }
        };
        var responsiveOptions = [
            ['screen and (max-width: 640px)', {
                    seriesBarDistance: 5,
                    axisX: {
                        labelInterpolationFnc: function (value) {
                            return value[0];
                        }
                    }
                }]
        ];
        var websiteViewsChart = new chartist__WEBPACK_IMPORTED_MODULE_3__["Bar"]('#websiteViewsChart', datawebsiteViewsChart, optionswebsiteViewsChart, responsiveOptions);
        //start animation for the Emails Subscription Chart
        this.startAnimationForBarChart(websiteViewsChart);
    };
    DashboardComponent.ctorParameters = function () { return []; };
    DashboardComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Component"])({
            selector: 'app-dashboard',
            template: _raw_loader_dashboard_component_html__WEBPACK_IMPORTED_MODULE_0__["default"],
            styles: [_dashboard_component_css__WEBPACK_IMPORTED_MODULE_1__["default"]]
        }),
        __metadata("design:paramtypes", [])
    ], DashboardComponent);
    return DashboardComponent;
}());



/***/ }),

/***/ "Qd8X":
/*!********************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/table-list/table-list.component.html ***!
  \********************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"main-content\">\n    <div class=\"container-fluid\">\n        <div class=\"row\">\n            <div class=\"col-md-12\">\n                <div class=\"card\">\n                    <div class=\"card-header card-header-danger\">\n                        <h4 class=\"card-title \">Simple Table</h4>\n                        <p class=\"card-category\"> Here is a subtitle for this table</p>\n                    </div>\n                    <div class=\"card-body\">\n                        <div class=\"table-responsive\">\n                            <table class=\"table\">\n                                <thead class=\" text-primary\">\n                                    <th>\n                                        ID\n                                    </th>\n                                    <th>\n                                        Name\n                                    </th>\n                                    <th>\n                                        Country\n                                    </th>\n                                    <th>\n                                        City\n                                    </th>\n                                    <th>\n                                        Salary\n                                    </th>\n                                </thead>\n                                <tbody>\n                                    <tr>\n                                        <td>\n                                            1\n                                        </td>\n                                        <td>\n                                            Dakota Rice\n                                        </td>\n                                        <td>\n                                            Niger\n                                        </td>\n                                        <td>\n                                            Oud-Turnhout\n                                        </td>\n                                        <td class=\"text-primary\">\n                                            $36,738\n                                        </td>\n                                    </tr>\n                                    <tr>\n                                        <td>\n                                            2\n                                        </td>\n                                        <td>\n                                            Minerva Hooper\n                                        </td>\n                                        <td>\n                                            Curaçao\n                                        </td>\n                                        <td>\n                                            Sinaai-Waas\n                                        </td>\n                                        <td class=\"text-primary\">\n                                            $23,789\n                                        </td>\n                                    </tr>\n                                    <tr>\n                                        <td>\n                                            3\n                                        </td>\n                                        <td>\n                                            Sage Rodriguez\n                                        </td>\n                                        <td>\n                                            Netherlands\n                                        </td>\n                                        <td>\n                                            Baileux\n                                        </td>\n                                        <td class=\"text-primary\">\n                                            $56,142\n                                        </td>\n                                    </tr>\n                                    <tr>\n                                        <td>\n                                            4\n                                        </td>\n                                        <td>\n                                            Philip Chaney\n                                        </td>\n                                        <td>\n                                            Korea, South\n                                        </td>\n                                        <td>\n                                            Overland Park\n                                        </td>\n                                        <td class=\"text-primary\">\n                                            $38,735\n                                        </td>\n                                    </tr>\n                                    <tr>\n                                        <td>\n                                            5\n                                        </td>\n                                        <td>\n                                            Doris Greene\n                                        </td>\n                                        <td>\n                                            Malawi\n                                        </td>\n                                        <td>\n                                            Feldkirchen in Kärnten\n                                        </td>\n                                        <td class=\"text-primary\">\n                                            $63,542\n                                        </td>\n                                    </tr>\n                                    <tr>\n                                        <td>\n                                            6\n                                        </td>\n                                        <td>\n                                            Mason Porter\n                                        </td>\n                                        <td>\n                                            Chile\n                                        </td>\n                                        <td>\n                                            Gloucester\n                                        </td>\n                                        <td class=\"text-primary\">\n                                            $78,615\n                                        </td>\n                                    </tr>\n                                </tbody>\n                            </table>\n                        </div>\n                    </div>\n                </div>\n            </div>\n            <div class=\"col-md-12\">\n                <div class=\"card card-plain\">\n                    <div class=\"card-header card-header-danger\">\n                        <h4 class=\"card-title mt-0\"> Table on Plain Background</h4>\n                        <p class=\"card-category\"> Here is a subtitle for this table</p>\n                    </div>\n                    <div class=\"card-body\">\n                        <div class=\"table-responsive\">\n                            <table class=\"table table-hover\">\n                                <thead class=\"\">\n                                    <th>\n                                        ID\n                                    </th>\n                                    <th>\n                                        Name\n                                    </th>\n                                    <th>\n                                        Country\n                                    </th>\n                                    <th>\n                                        City\n                                    </th>\n                                    <th>\n                                        Salary\n                                    </th>\n                                </thead>\n                                <tbody>\n                                    <tr>\n                                        <td>\n                                            1\n                                        </td>\n                                        <td>\n                                            Dakota Rice\n                                        </td>\n                                        <td>\n                                            Niger\n                                        </td>\n                                        <td>\n                                            Oud-Turnhout\n                                        </td>\n                                        <td>\n                                            $36,738\n                                        </td>\n                                    </tr>\n                                    <tr>\n                                        <td>\n                                            2\n                                        </td>\n                                        <td>\n                                            Minerva Hooper\n                                        </td>\n                                        <td>\n                                            Curaçao\n                                        </td>\n                                        <td>\n                                            Sinaai-Waas\n                                        </td>\n                                        <td>\n                                            $23,789\n                                        </td>\n                                    </tr>\n                                    <tr>\n                                        <td>\n                                            3\n                                        </td>\n                                        <td>\n                                            Sage Rodriguez\n                                        </td>\n                                        <td>\n                                            Netherlands\n                                        </td>\n                                        <td>\n                                            Baileux\n                                        </td>\n                                        <td>\n                                            $56,142\n                                        </td>\n                                    </tr>\n                                    <tr>\n                                        <td>\n                                            4\n                                        </td>\n                                        <td>\n                                            Philip Chaney\n                                        </td>\n                                        <td>\n                                            Korea, South\n                                        </td>\n                                        <td>\n                                            Overland Park\n                                        </td>\n                                        <td>\n                                            $38,735\n                                        </td>\n                                    </tr>\n                                    <tr>\n                                        <td>\n                                            5\n                                        </td>\n                                        <td>\n                                            Doris Greene\n                                        </td>\n                                        <td>\n                                            Malawi\n                                        </td>\n                                        <td>\n                                            Feldkirchen in Kärnten\n                                        </td>\n                                        <td>\n                                            $63,542\n                                        </td>\n                                    </tr>\n                                    <tr>\n                                        <td>\n                                            6\n                                        </td>\n                                        <td>\n                                            Mason Porter\n                                        </td>\n                                        <td>\n                                            Chile\n                                        </td>\n                                        <td>\n                                            Gloucester\n                                        </td>\n                                        <td>\n                                            $78,615\n                                        </td>\n                                    </tr>\n                                </tbody>\n                            </table>\n                        </div>\n                    </div>\n                </div>\n            </div>\n        </div>\n    </div>\n</div>");

/***/ }),

/***/ "Qu3c":
/*!*************************************************************************!*\
  !*** ./node_modules/@angular/material/__ivy_ngcc__/fesm2015/tooltip.js ***!
  \*************************************************************************/
/*! exports provided: MAT_TOOLTIP_DEFAULT_OPTIONS, MAT_TOOLTIP_DEFAULT_OPTIONS_FACTORY, MAT_TOOLTIP_SCROLL_STRATEGY, MAT_TOOLTIP_SCROLL_STRATEGY_FACTORY, MAT_TOOLTIP_SCROLL_STRATEGY_FACTORY_PROVIDER, MatTooltip, MatTooltipModule, SCROLL_THROTTLE_MS, TOOLTIP_PANEL_CLASS, TooltipComponent, getMatTooltipInvalidPositionError, matTooltipAnimations */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MAT_TOOLTIP_DEFAULT_OPTIONS", function() { return MAT_TOOLTIP_DEFAULT_OPTIONS; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MAT_TOOLTIP_DEFAULT_OPTIONS_FACTORY", function() { return MAT_TOOLTIP_DEFAULT_OPTIONS_FACTORY; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MAT_TOOLTIP_SCROLL_STRATEGY", function() { return MAT_TOOLTIP_SCROLL_STRATEGY; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MAT_TOOLTIP_SCROLL_STRATEGY_FACTORY", function() { return MAT_TOOLTIP_SCROLL_STRATEGY_FACTORY; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MAT_TOOLTIP_SCROLL_STRATEGY_FACTORY_PROVIDER", function() { return MAT_TOOLTIP_SCROLL_STRATEGY_FACTORY_PROVIDER; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MatTooltip", function() { return MatTooltip; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MatTooltipModule", function() { return MatTooltipModule; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SCROLL_THROTTLE_MS", function() { return SCROLL_THROTTLE_MS; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TOOLTIP_PANEL_CLASS", function() { return TOOLTIP_PANEL_CLASS; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TooltipComponent", function() { return TooltipComponent; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getMatTooltipInvalidPositionError", function() { return getMatTooltipInvalidPositionError; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "matTooltipAnimations", function() { return matTooltipAnimations; });
/* harmony import */ var _home_runner_work_learn_angular_learn_angular_node_modules_babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/slicedToArray */ "ODXe");
/* harmony import */ var _home_runner_work_learn_angular_learn_angular_node_modules_babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/classCallCheck */ "1OyB");
/* harmony import */ var _home_runner_work_learn_angular_learn_angular_node_modules_babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/createClass */ "vuIU");
/* harmony import */ var _angular_cdk_overlay__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/cdk/overlay */ "rDax");
/* harmony import */ var _angular_cdk_a11y__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/cdk/a11y */ "u47x");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_material_core__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/material/core */ "FKr1");
/* harmony import */ var _angular_cdk_scrolling__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/cdk/scrolling */ "vxfF");
/* harmony import */ var _angular_cdk_bidi__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/cdk/bidi */ "cH1L");
/* harmony import */ var _angular_cdk_coercion__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/cdk/coercion */ "8LU1");
/* harmony import */ var _angular_cdk_keycodes__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/cdk/keycodes */ "FtGj");
/* harmony import */ var _angular_cdk_layout__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @angular/cdk/layout */ "0MNC");
/* harmony import */ var _angular_cdk_platform__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @angular/cdk/platform */ "nLfN");
/* harmony import */ var _angular_cdk_portal__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @angular/cdk/portal */ "+rOU");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! rxjs */ "qCKp");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! rxjs/operators */ "kU1M");
/* harmony import */ var _angular_animations__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! @angular/animations */ "R0Ic");


















/**
 * @license
 * Copyright Google LLC All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */

/**
 * Animations used by MatTooltip.
 * @docs-private
 */









var matTooltipAnimations = {
  /** Animation that transitions a tooltip in and out. */
  tooltipState: Object(_angular_animations__WEBPACK_IMPORTED_MODULE_17__["trigger"])('state', [Object(_angular_animations__WEBPACK_IMPORTED_MODULE_17__["state"])('initial, void, hidden', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_17__["style"])({
    opacity: 0,
    transform: 'scale(0)'
  })), Object(_angular_animations__WEBPACK_IMPORTED_MODULE_17__["state"])('visible', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_17__["style"])({
    transform: 'scale(1)'
  })), Object(_angular_animations__WEBPACK_IMPORTED_MODULE_17__["transition"])('* => visible', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_17__["animate"])('200ms cubic-bezier(0, 0, 0.2, 1)', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_17__["keyframes"])([Object(_angular_animations__WEBPACK_IMPORTED_MODULE_17__["style"])({
    opacity: 0,
    transform: 'scale(0)',
    offset: 0
  }), Object(_angular_animations__WEBPACK_IMPORTED_MODULE_17__["style"])({
    opacity: 0.5,
    transform: 'scale(0.99)',
    offset: 0.5
  }), Object(_angular_animations__WEBPACK_IMPORTED_MODULE_17__["style"])({
    opacity: 1,
    transform: 'scale(1)',
    offset: 1
  })]))), Object(_angular_animations__WEBPACK_IMPORTED_MODULE_17__["transition"])('* => hidden', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_17__["animate"])('100ms cubic-bezier(0, 0, 0.2, 1)', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_17__["style"])({
    opacity: 0
  })))])
};
/** Time in ms to throttle repositioning after scroll events. */

var SCROLL_THROTTLE_MS = 20;
/** CSS class that will be attached to the overlay panel. */

var TOOLTIP_PANEL_CLASS = 'mat-tooltip-panel';
/** Options used to bind passive event listeners. */

var passiveListenerOptions = Object(_angular_cdk_platform__WEBPACK_IMPORTED_MODULE_13__["normalizePassiveListenerOptions"])({
  passive: true
});
/**
 * Time between the user putting the pointer on a tooltip
 * trigger and the long press event being fired.
 */

var LONGPRESS_DELAY = 500;
/**
 * Creates an error to be thrown if the user supplied an invalid tooltip position.
 * @docs-private
 */

function getMatTooltipInvalidPositionError(position) {
  return Error("Tooltip position \"".concat(position, "\" is invalid."));
}
/** Injection token that determines the scroll handling while a tooltip is visible. */


var MAT_TOOLTIP_SCROLL_STRATEGY = new _angular_core__WEBPACK_IMPORTED_MODULE_6__["InjectionToken"]('mat-tooltip-scroll-strategy');
/** @docs-private */

function MAT_TOOLTIP_SCROLL_STRATEGY_FACTORY(overlay) {
  return function () {
    return overlay.scrollStrategies.reposition({
      scrollThrottle: SCROLL_THROTTLE_MS
    });
  };
}
/** @docs-private */


var MAT_TOOLTIP_SCROLL_STRATEGY_FACTORY_PROVIDER = {
  provide: MAT_TOOLTIP_SCROLL_STRATEGY,
  deps: [_angular_cdk_overlay__WEBPACK_IMPORTED_MODULE_3__["Overlay"]],
  useFactory: MAT_TOOLTIP_SCROLL_STRATEGY_FACTORY
};
/** Injection token to be used to override the default options for `matTooltip`. */

var MAT_TOOLTIP_DEFAULT_OPTIONS = new _angular_core__WEBPACK_IMPORTED_MODULE_6__["InjectionToken"]('mat-tooltip-default-options', {
  providedIn: 'root',
  factory: MAT_TOOLTIP_DEFAULT_OPTIONS_FACTORY
});
/** @docs-private */

function MAT_TOOLTIP_DEFAULT_OPTIONS_FACTORY() {
  return {
    showDelay: 0,
    hideDelay: 0,
    touchendHideDelay: 1500
  };
}
/**
 * Directive that attaches a material design tooltip to the host element. Animates the showing and
 * hiding of a tooltip provided position (defaults to below the element).
 *
 * https://material.io/design/components/tooltips.html
 */


var MatTooltip = /*#__PURE__*/function () {
  function MatTooltip(_overlay, _elementRef, _scrollDispatcher, _viewContainerRef, _ngZone, _platform, _ariaDescriber, _focusMonitor, scrollStrategy, _dir, _defaultOptions,
  /** @breaking-change 11.0.0 _document argument to become required. */
  _document) {
    var _this = this;

    Object(_home_runner_work_learn_angular_learn_angular_node_modules_babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_1__["default"])(this, MatTooltip);

    this._overlay = _overlay;
    this._elementRef = _elementRef;
    this._scrollDispatcher = _scrollDispatcher;
    this._viewContainerRef = _viewContainerRef;
    this._ngZone = _ngZone;
    this._platform = _platform;
    this._ariaDescriber = _ariaDescriber;
    this._focusMonitor = _focusMonitor;
    this._dir = _dir;
    this._defaultOptions = _defaultOptions;
    this._position = 'below';
    this._disabled = false;
    this._viewInitialized = false;
    this._pointerExitEventsInitialized = false;
    /** The default delay in ms before showing the tooltip after show is called */

    this.showDelay = this._defaultOptions.showDelay;
    /** The default delay in ms before hiding the tooltip after hide is called */

    this.hideDelay = this._defaultOptions.hideDelay;
    /**
     * How touch gestures should be handled by the tooltip. On touch devices the tooltip directive
     * uses a long press gesture to show and hide, however it can conflict with the native browser
     * gestures. To work around the conflict, Angular Material disables native gestures on the
     * trigger, but that might not be desirable on particular elements (e.g. inputs and draggable
     * elements). The different values for this option configure the touch event handling as follows:
     * - `auto` - Enables touch gestures for all elements, but tries to avoid conflicts with native
     *   browser gestures on particular elements. In particular, it allows text selection on inputs
     *   and textareas, and preserves the native browser dragging on elements marked as `draggable`.
     * - `on` - Enables touch gestures for all elements and disables native
     *   browser gestures with no exceptions.
     * - `off` - Disables touch gestures. Note that this will prevent the tooltip from
     *   showing on touch devices.
     */

    this.touchGestures = 'auto';
    this._message = '';
    /** Manually-bound passive event listeners. */

    this._passiveListeners = [];
    /** Emits when the component is destroyed. */

    this._destroyed = new rxjs__WEBPACK_IMPORTED_MODULE_15__["Subject"]();
    /**
     * Handles the keydown events on the host element.
     * Needs to be an arrow function so that we can use it in addEventListener.
     */

    this._handleKeydown = function (event) {
      if (_this._isTooltipVisible() && event.keyCode === _angular_cdk_keycodes__WEBPACK_IMPORTED_MODULE_11__["ESCAPE"] && !Object(_angular_cdk_keycodes__WEBPACK_IMPORTED_MODULE_11__["hasModifierKey"])(event)) {
        event.preventDefault();
        event.stopPropagation();

        _this._ngZone.run(function () {
          return _this.hide(0);
        });
      }
    };

    this._scrollStrategy = scrollStrategy;

    if (_defaultOptions) {
      if (_defaultOptions.position) {
        this.position = _defaultOptions.position;
      }

      if (_defaultOptions.touchGestures) {
        this.touchGestures = _defaultOptions.touchGestures;
      }
    }

    _ngZone.runOutsideAngular(function () {
      _elementRef.nativeElement.addEventListener('keydown', _this._handleKeydown);
    });
  }
  /** Allows the user to define the position of the tooltip relative to the parent element */


  return Object(_home_runner_work_learn_angular_learn_angular_node_modules_babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_2__["default"])(MatTooltip, [{
    key: "position",
    get: function get() {
      return this._position;
    },
    set: function set(value) {
      if (value !== this._position) {
        this._position = value;

        if (this._overlayRef) {
          this._updatePosition();

          if (this._tooltipInstance) {
            this._tooltipInstance.show(0);
          }

          this._overlayRef.updatePosition();
        }
      }
    }
    /** Disables the display of the tooltip. */

  }, {
    key: "disabled",
    get: function get() {
      return this._disabled;
    },
    set: function set(value) {
      this._disabled = Object(_angular_cdk_coercion__WEBPACK_IMPORTED_MODULE_10__["coerceBooleanProperty"])(value); // If tooltip is disabled, hide immediately.

      if (this._disabled) {
        this.hide(0);
      } else {
        this._setupPointerEnterEventsIfNeeded();
      }
    }
    /** The message to be displayed in the tooltip */

  }, {
    key: "message",
    get: function get() {
      return this._message;
    },
    set: function set(value) {
      var _this2 = this;

      this._ariaDescriber.removeDescription(this._elementRef.nativeElement, this._message, 'tooltip'); // If the message is not a string (e.g. number), convert it to a string and trim it.
      // Must convert with `String(value)`, not `${value}`, otherwise Closure Compiler optimises
      // away the string-conversion: https://github.com/angular/components/issues/20684


      this._message = value != null ? String(value).trim() : '';

      if (!this._message && this._isTooltipVisible()) {
        this.hide(0);
      } else {
        this._setupPointerEnterEventsIfNeeded();

        this._updateTooltipMessage();

        this._ngZone.runOutsideAngular(function () {
          // The `AriaDescriber` has some functionality that avoids adding a description if it's the
          // same as the `aria-label` of an element, however we can't know whether the tooltip trigger
          // has a data-bound `aria-label` or when it'll be set for the first time. We can avoid the
          // issue by deferring the description by a tick so Angular has time to set the `aria-label`.
          Promise.resolve().then(function () {
            _this2._ariaDescriber.describe(_this2._elementRef.nativeElement, _this2.message, 'tooltip');
          });
        });
      }
    }
    /** Classes to be passed to the tooltip. Supports the same syntax as `ngClass`. */

  }, {
    key: "tooltipClass",
    get: function get() {
      return this._tooltipClass;
    },
    set: function set(value) {
      this._tooltipClass = value;

      if (this._tooltipInstance) {
        this._setTooltipClass(this._tooltipClass);
      }
    }
  }, {
    key: "ngAfterViewInit",
    value: function ngAfterViewInit() {
      var _this3 = this;

      // This needs to happen after view init so the initial values for all inputs have been set.
      this._viewInitialized = true;

      this._setupPointerEnterEventsIfNeeded();

      this._focusMonitor.monitor(this._elementRef).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_16__["takeUntil"])(this._destroyed)).subscribe(function (origin) {
        // Note that the focus monitor runs outside the Angular zone.
        if (!origin) {
          _this3._ngZone.run(function () {
            return _this3.hide(0);
          });
        } else if (origin === 'keyboard') {
          _this3._ngZone.run(function () {
            return _this3.show();
          });
        }
      });
    }
    /**
     * Dispose the tooltip when destroyed.
     */

  }, {
    key: "ngOnDestroy",
    value: function ngOnDestroy() {
      var nativeElement = this._elementRef.nativeElement;
      clearTimeout(this._touchstartTimeout);

      if (this._overlayRef) {
        this._overlayRef.dispose();

        this._tooltipInstance = null;
      } // Clean up the event listeners set in the constructor


      nativeElement.removeEventListener('keydown', this._handleKeydown);

      this._passiveListeners.forEach(function (_ref) {
        var _ref2 = Object(_home_runner_work_learn_angular_learn_angular_node_modules_babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_0__["default"])(_ref, 2),
            event = _ref2[0],
            listener = _ref2[1];

        nativeElement.removeEventListener(event, listener, passiveListenerOptions);
      });

      this._passiveListeners.length = 0;

      this._destroyed.next();

      this._destroyed.complete();

      this._ariaDescriber.removeDescription(nativeElement, this.message, 'tooltip');

      this._focusMonitor.stopMonitoring(nativeElement);
    }
    /** Shows the tooltip after the delay in ms, defaults to tooltip-delay-show or 0ms if no input */

  }, {
    key: "show",
    value: function show() {
      var _this4 = this;

      var delay = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : this.showDelay;

      if (this.disabled || !this.message || this._isTooltipVisible() && !this._tooltipInstance._showTimeoutId && !this._tooltipInstance._hideTimeoutId) {
        return;
      }

      var overlayRef = this._createOverlay();

      this._detach();

      this._portal = this._portal || new _angular_cdk_portal__WEBPACK_IMPORTED_MODULE_14__["ComponentPortal"](TooltipComponent, this._viewContainerRef);
      this._tooltipInstance = overlayRef.attach(this._portal).instance;

      this._tooltipInstance.afterHidden().pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_16__["takeUntil"])(this._destroyed)).subscribe(function () {
        return _this4._detach();
      });

      this._setTooltipClass(this._tooltipClass);

      this._updateTooltipMessage();

      this._tooltipInstance.show(delay);
    }
    /** Hides the tooltip after the delay in ms, defaults to tooltip-delay-hide or 0ms if no input */

  }, {
    key: "hide",
    value: function hide() {
      var delay = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : this.hideDelay;

      if (this._tooltipInstance) {
        this._tooltipInstance.hide(delay);
      }
    }
    /** Shows/hides the tooltip */

  }, {
    key: "toggle",
    value: function toggle() {
      this._isTooltipVisible() ? this.hide() : this.show();
    }
    /** Returns true if the tooltip is currently visible to the user */

  }, {
    key: "_isTooltipVisible",
    value: function _isTooltipVisible() {
      return !!this._tooltipInstance && this._tooltipInstance.isVisible();
    }
    /** Create the overlay config and position strategy */

  }, {
    key: "_createOverlay",
    value: function _createOverlay() {
      var _this5 = this;

      if (this._overlayRef) {
        return this._overlayRef;
      }

      var scrollableAncestors = this._scrollDispatcher.getAncestorScrollContainers(this._elementRef); // Create connected position strategy that listens for scroll events to reposition.


      var strategy = this._overlay.position().flexibleConnectedTo(this._elementRef).withTransformOriginOn('.mat-tooltip').withFlexibleDimensions(false).withViewportMargin(8).withScrollableContainers(scrollableAncestors);

      strategy.positionChanges.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_16__["takeUntil"])(this._destroyed)).subscribe(function (change) {
        if (_this5._tooltipInstance) {
          if (change.scrollableViewProperties.isOverlayClipped && _this5._tooltipInstance.isVisible()) {
            // After position changes occur and the overlay is clipped by
            // a parent scrollable then close the tooltip.
            _this5._ngZone.run(function () {
              return _this5.hide(0);
            });
          }
        }
      });
      this._overlayRef = this._overlay.create({
        direction: this._dir,
        positionStrategy: strategy,
        panelClass: TOOLTIP_PANEL_CLASS,
        scrollStrategy: this._scrollStrategy()
      });

      this._updatePosition();

      this._overlayRef.detachments().pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_16__["takeUntil"])(this._destroyed)).subscribe(function () {
        return _this5._detach();
      });

      return this._overlayRef;
    }
    /** Detaches the currently-attached tooltip. */

  }, {
    key: "_detach",
    value: function _detach() {
      if (this._overlayRef && this._overlayRef.hasAttached()) {
        this._overlayRef.detach();
      }

      this._tooltipInstance = null;
    }
    /** Updates the position of the current tooltip. */

  }, {
    key: "_updatePosition",
    value: function _updatePosition() {
      var position = this._overlayRef.getConfig().positionStrategy;

      var origin = this._getOrigin();

      var overlay = this._getOverlayPosition();

      position.withPositions([Object.assign(Object.assign({}, origin.main), overlay.main), Object.assign(Object.assign({}, origin.fallback), overlay.fallback)]);
    }
    /**
     * Returns the origin position and a fallback position based on the user's position preference.
     * The fallback position is the inverse of the origin (e.g. `'below' -> 'above'`).
     */

  }, {
    key: "_getOrigin",
    value: function _getOrigin() {
      var isLtr = !this._dir || this._dir.value == 'ltr';
      var position = this.position;
      var originPosition;

      if (position == 'above' || position == 'below') {
        originPosition = {
          originX: 'center',
          originY: position == 'above' ? 'top' : 'bottom'
        };
      } else if (position == 'before' || position == 'left' && isLtr || position == 'right' && !isLtr) {
        originPosition = {
          originX: 'start',
          originY: 'center'
        };
      } else if (position == 'after' || position == 'right' && isLtr || position == 'left' && !isLtr) {
        originPosition = {
          originX: 'end',
          originY: 'center'
        };
      } else if (typeof ngDevMode === 'undefined' || ngDevMode) {
        throw getMatTooltipInvalidPositionError(position);
      }

      var _this$_invertPosition = this._invertPosition(originPosition.originX, originPosition.originY),
          x = _this$_invertPosition.x,
          y = _this$_invertPosition.y;

      return {
        main: originPosition,
        fallback: {
          originX: x,
          originY: y
        }
      };
    }
    /** Returns the overlay position and a fallback position based on the user's preference */

  }, {
    key: "_getOverlayPosition",
    value: function _getOverlayPosition() {
      var isLtr = !this._dir || this._dir.value == 'ltr';
      var position = this.position;
      var overlayPosition;

      if (position == 'above') {
        overlayPosition = {
          overlayX: 'center',
          overlayY: 'bottom'
        };
      } else if (position == 'below') {
        overlayPosition = {
          overlayX: 'center',
          overlayY: 'top'
        };
      } else if (position == 'before' || position == 'left' && isLtr || position == 'right' && !isLtr) {
        overlayPosition = {
          overlayX: 'end',
          overlayY: 'center'
        };
      } else if (position == 'after' || position == 'right' && isLtr || position == 'left' && !isLtr) {
        overlayPosition = {
          overlayX: 'start',
          overlayY: 'center'
        };
      } else if (typeof ngDevMode === 'undefined' || ngDevMode) {
        throw getMatTooltipInvalidPositionError(position);
      }

      var _this$_invertPosition2 = this._invertPosition(overlayPosition.overlayX, overlayPosition.overlayY),
          x = _this$_invertPosition2.x,
          y = _this$_invertPosition2.y;

      return {
        main: overlayPosition,
        fallback: {
          overlayX: x,
          overlayY: y
        }
      };
    }
    /** Updates the tooltip message and repositions the overlay according to the new message length */

  }, {
    key: "_updateTooltipMessage",
    value: function _updateTooltipMessage() {
      var _this6 = this;

      // Must wait for the message to be painted to the tooltip so that the overlay can properly
      // calculate the correct positioning based on the size of the text.
      if (this._tooltipInstance) {
        this._tooltipInstance.message = this.message;

        this._tooltipInstance._markForCheck();

        this._ngZone.onMicrotaskEmpty.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_16__["take"])(1), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_16__["takeUntil"])(this._destroyed)).subscribe(function () {
          if (_this6._tooltipInstance) {
            _this6._overlayRef.updatePosition();
          }
        });
      }
    }
    /** Updates the tooltip class */

  }, {
    key: "_setTooltipClass",
    value: function _setTooltipClass(tooltipClass) {
      if (this._tooltipInstance) {
        this._tooltipInstance.tooltipClass = tooltipClass;

        this._tooltipInstance._markForCheck();
      }
    }
    /** Inverts an overlay position. */

  }, {
    key: "_invertPosition",
    value: function _invertPosition(x, y) {
      if (this.position === 'above' || this.position === 'below') {
        if (y === 'top') {
          y = 'bottom';
        } else if (y === 'bottom') {
          y = 'top';
        }
      } else {
        if (x === 'end') {
          x = 'start';
        } else if (x === 'start') {
          x = 'end';
        }
      }

      return {
        x: x,
        y: y
      };
    }
    /** Binds the pointer events to the tooltip trigger. */

  }, {
    key: "_setupPointerEnterEventsIfNeeded",
    value: function _setupPointerEnterEventsIfNeeded() {
      var _this7 = this;

      // Optimization: Defer hooking up events if there's no message or the tooltip is disabled.
      if (this._disabled || !this.message || !this._viewInitialized || this._passiveListeners.length) {
        return;
      } // The mouse events shouldn't be bound on mobile devices, because they can prevent the
      // first tap from firing its click event or can cause the tooltip to open for clicks.


      if (this._platformSupportsMouseEvents()) {
        this._passiveListeners.push(['mouseenter', function () {
          _this7._setupPointerExitEventsIfNeeded();

          _this7.show();
        }]);
      } else if (this.touchGestures !== 'off') {
        this._disableNativeGesturesIfNecessary();

        this._passiveListeners.push(['touchstart', function () {
          // Note that it's important that we don't `preventDefault` here,
          // because it can prevent click events from firing on the element.
          _this7._setupPointerExitEventsIfNeeded();

          clearTimeout(_this7._touchstartTimeout);
          _this7._touchstartTimeout = setTimeout(function () {
            return _this7.show();
          }, LONGPRESS_DELAY);
        }]);
      }

      this._addListeners(this._passiveListeners);
    }
  }, {
    key: "_setupPointerExitEventsIfNeeded",
    value: function _setupPointerExitEventsIfNeeded() {
      var _this8 = this,
          _this$_passiveListene;

      if (this._pointerExitEventsInitialized) {
        return;
      }

      this._pointerExitEventsInitialized = true;
      var exitListeners = [];

      if (this._platformSupportsMouseEvents()) {
        exitListeners.push(['mouseleave', function () {
          return _this8.hide();
        }], ['wheel', function (event) {
          return _this8._wheelListener(event);
        }]);
      } else if (this.touchGestures !== 'off') {
        this._disableNativeGesturesIfNecessary();

        var touchendListener = function touchendListener() {
          clearTimeout(_this8._touchstartTimeout);

          _this8.hide(_this8._defaultOptions.touchendHideDelay);
        };

        exitListeners.push(['touchend', touchendListener], ['touchcancel', touchendListener]);
      }

      this._addListeners(exitListeners);

      (_this$_passiveListene = this._passiveListeners).push.apply(_this$_passiveListene, exitListeners);
    }
  }, {
    key: "_addListeners",
    value: function _addListeners(listeners) {
      var _this9 = this;

      listeners.forEach(function (_ref3) {
        var _ref4 = Object(_home_runner_work_learn_angular_learn_angular_node_modules_babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_0__["default"])(_ref3, 2),
            event = _ref4[0],
            listener = _ref4[1];

        _this9._elementRef.nativeElement.addEventListener(event, listener, passiveListenerOptions);
      });
    }
  }, {
    key: "_platformSupportsMouseEvents",
    value: function _platformSupportsMouseEvents() {
      return !this._platform.IOS && !this._platform.ANDROID;
    }
    /** Listener for the `wheel` event on the element. */

  }, {
    key: "_wheelListener",
    value: function _wheelListener(event) {
      if (this._isTooltipVisible()) {
        // @breaking-change 11.0.0 Remove `|| document` once the document is a required param.
        var doc = this._document || document;
        var elementUnderPointer = doc.elementFromPoint(event.clientX, event.clientY);
        var element = this._elementRef.nativeElement; // On non-touch devices we depend on the `mouseleave` event to close the tooltip, but it
        // won't fire if the user scrolls away using the wheel without moving their cursor. We
        // work around it by finding the element under the user's cursor and closing the tooltip
        // if it's not the trigger.

        if (elementUnderPointer !== element && !element.contains(elementUnderPointer)) {
          this.hide();
        }
      }
    }
    /** Disables the native browser gestures, based on how the tooltip has been configured. */

  }, {
    key: "_disableNativeGesturesIfNecessary",
    value: function _disableNativeGesturesIfNecessary() {
      var gestures = this.touchGestures;

      if (gestures !== 'off') {
        var element = this._elementRef.nativeElement;
        var _style = element.style; // If gestures are set to `auto`, we don't disable text selection on inputs and
        // textareas, because it prevents the user from typing into them on iOS Safari.

        if (gestures === 'on' || element.nodeName !== 'INPUT' && element.nodeName !== 'TEXTAREA') {
          _style.userSelect = _style.msUserSelect = _style.webkitUserSelect = _style.MozUserSelect = 'none';
        } // If we have `auto` gestures and the element uses native HTML dragging,
        // we don't set `-webkit-user-drag` because it prevents the native behavior.


        if (gestures === 'on' || !element.draggable) {
          _style.webkitUserDrag = 'none';
        }

        _style.touchAction = 'none';
        _style.webkitTapHighlightColor = 'transparent';
      }
    }
  }]);
}();

MatTooltip.ɵfac = function MatTooltip_Factory(t) {
  return new (t || MatTooltip)(_angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵdirectiveInject"](_angular_cdk_overlay__WEBPACK_IMPORTED_MODULE_3__["Overlay"]), _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_6__["ElementRef"]), _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵdirectiveInject"](_angular_cdk_scrolling__WEBPACK_IMPORTED_MODULE_8__["ScrollDispatcher"]), _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_6__["ViewContainerRef"]), _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_6__["NgZone"]), _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵdirectiveInject"](_angular_cdk_platform__WEBPACK_IMPORTED_MODULE_13__["Platform"]), _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵdirectiveInject"](_angular_cdk_a11y__WEBPACK_IMPORTED_MODULE_4__["AriaDescriber"]), _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵdirectiveInject"](_angular_cdk_a11y__WEBPACK_IMPORTED_MODULE_4__["FocusMonitor"]), _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵdirectiveInject"](MAT_TOOLTIP_SCROLL_STRATEGY), _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵdirectiveInject"](_angular_cdk_bidi__WEBPACK_IMPORTED_MODULE_9__["Directionality"], 8), _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵdirectiveInject"](MAT_TOOLTIP_DEFAULT_OPTIONS, 8), _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵdirectiveInject"](_angular_common__WEBPACK_IMPORTED_MODULE_5__["DOCUMENT"]));
};

MatTooltip.ɵdir = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵdefineDirective"]({
  type: MatTooltip,
  selectors: [["", "matTooltip", ""]],
  hostAttrs: [1, "mat-tooltip-trigger"],
  inputs: {
    showDelay: ["matTooltipShowDelay", "showDelay"],
    hideDelay: ["matTooltipHideDelay", "hideDelay"],
    touchGestures: ["matTooltipTouchGestures", "touchGestures"],
    position: ["matTooltipPosition", "position"],
    disabled: ["matTooltipDisabled", "disabled"],
    message: ["matTooltip", "message"],
    tooltipClass: ["matTooltipClass", "tooltipClass"]
  },
  exportAs: ["matTooltip"]
});

MatTooltip.ctorParameters = function () {
  return [{
    type: _angular_cdk_overlay__WEBPACK_IMPORTED_MODULE_3__["Overlay"]
  }, {
    type: _angular_core__WEBPACK_IMPORTED_MODULE_6__["ElementRef"]
  }, {
    type: _angular_cdk_scrolling__WEBPACK_IMPORTED_MODULE_8__["ScrollDispatcher"]
  }, {
    type: _angular_core__WEBPACK_IMPORTED_MODULE_6__["ViewContainerRef"]
  }, {
    type: _angular_core__WEBPACK_IMPORTED_MODULE_6__["NgZone"]
  }, {
    type: _angular_cdk_platform__WEBPACK_IMPORTED_MODULE_13__["Platform"]
  }, {
    type: _angular_cdk_a11y__WEBPACK_IMPORTED_MODULE_4__["AriaDescriber"]
  }, {
    type: _angular_cdk_a11y__WEBPACK_IMPORTED_MODULE_4__["FocusMonitor"]
  }, {
    type: undefined,
    decorators: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_6__["Inject"],
      args: [MAT_TOOLTIP_SCROLL_STRATEGY]
    }]
  }, {
    type: _angular_cdk_bidi__WEBPACK_IMPORTED_MODULE_9__["Directionality"],
    decorators: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_6__["Optional"]
    }]
  }, {
    type: undefined,
    decorators: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_6__["Optional"]
    }, {
      type: _angular_core__WEBPACK_IMPORTED_MODULE_6__["Inject"],
      args: [MAT_TOOLTIP_DEFAULT_OPTIONS]
    }]
  }, {
    type: undefined,
    decorators: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_6__["Inject"],
      args: [_angular_common__WEBPACK_IMPORTED_MODULE_5__["DOCUMENT"]]
    }]
  }];
};

MatTooltip.propDecorators = {
  position: [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_6__["Input"],
    args: ['matTooltipPosition']
  }],
  disabled: [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_6__["Input"],
    args: ['matTooltipDisabled']
  }],
  showDelay: [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_6__["Input"],
    args: ['matTooltipShowDelay']
  }],
  hideDelay: [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_6__["Input"],
    args: ['matTooltipHideDelay']
  }],
  touchGestures: [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_6__["Input"],
    args: ['matTooltipTouchGestures']
  }],
  message: [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_6__["Input"],
    args: ['matTooltip']
  }],
  tooltipClass: [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_6__["Input"],
    args: ['matTooltipClass']
  }]
};

(function () {
  (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵsetClassMetadata"](MatTooltip, [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_6__["Directive"],
    args: [{
      selector: '[matTooltip]',
      exportAs: 'matTooltip',
      host: {
        'class': 'mat-tooltip-trigger'
      }
    }]
  }], function () {
    return [{
      type: _angular_cdk_overlay__WEBPACK_IMPORTED_MODULE_3__["Overlay"]
    }, {
      type: _angular_core__WEBPACK_IMPORTED_MODULE_6__["ElementRef"]
    }, {
      type: _angular_cdk_scrolling__WEBPACK_IMPORTED_MODULE_8__["ScrollDispatcher"]
    }, {
      type: _angular_core__WEBPACK_IMPORTED_MODULE_6__["ViewContainerRef"]
    }, {
      type: _angular_core__WEBPACK_IMPORTED_MODULE_6__["NgZone"]
    }, {
      type: _angular_cdk_platform__WEBPACK_IMPORTED_MODULE_13__["Platform"]
    }, {
      type: _angular_cdk_a11y__WEBPACK_IMPORTED_MODULE_4__["AriaDescriber"]
    }, {
      type: _angular_cdk_a11y__WEBPACK_IMPORTED_MODULE_4__["FocusMonitor"]
    }, {
      type: undefined,
      decorators: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_6__["Inject"],
        args: [MAT_TOOLTIP_SCROLL_STRATEGY]
      }]
    }, {
      type: _angular_cdk_bidi__WEBPACK_IMPORTED_MODULE_9__["Directionality"],
      decorators: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_6__["Optional"]
      }]
    }, {
      type: undefined,
      decorators: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_6__["Optional"]
      }, {
        type: _angular_core__WEBPACK_IMPORTED_MODULE_6__["Inject"],
        args: [MAT_TOOLTIP_DEFAULT_OPTIONS]
      }]
    }, {
      type: undefined,
      decorators: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_6__["Inject"],
        args: [_angular_common__WEBPACK_IMPORTED_MODULE_5__["DOCUMENT"]]
      }]
    }];
  }, {
    showDelay: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_6__["Input"],
      args: ['matTooltipShowDelay']
    }],
    hideDelay: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_6__["Input"],
      args: ['matTooltipHideDelay']
    }],
    touchGestures: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_6__["Input"],
      args: ['matTooltipTouchGestures']
    }],
    position: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_6__["Input"],
      args: ['matTooltipPosition']
    }],
    disabled: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_6__["Input"],
      args: ['matTooltipDisabled']
    }],
    message: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_6__["Input"],
      args: ['matTooltip']
    }],
    tooltipClass: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_6__["Input"],
      args: ['matTooltipClass']
    }]
  });
})();
/**
 * Internal component that wraps the tooltip's content.
 * @docs-private
 */


var TooltipComponent = /*#__PURE__*/function () {
  function TooltipComponent(_changeDetectorRef, _breakpointObserver) {
    Object(_home_runner_work_learn_angular_learn_angular_node_modules_babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_1__["default"])(this, TooltipComponent);

    this._changeDetectorRef = _changeDetectorRef;
    this._breakpointObserver = _breakpointObserver;
    /** Property watched by the animation framework to show or hide the tooltip */

    this._visibility = 'initial';
    /** Whether interactions on the page should close the tooltip */

    this._closeOnInteraction = false;
    /** Subject for notifying that the tooltip has been hidden from the view */

    this._onHide = new rxjs__WEBPACK_IMPORTED_MODULE_15__["Subject"]();
    /** Stream that emits whether the user has a handset-sized display.  */

    this._isHandset = this._breakpointObserver.observe(_angular_cdk_layout__WEBPACK_IMPORTED_MODULE_12__["Breakpoints"].Handset);
  }
  /**
   * Shows the tooltip with an animation originating from the provided origin
   * @param delay Amount of milliseconds to the delay showing the tooltip.
   */


  return Object(_home_runner_work_learn_angular_learn_angular_node_modules_babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_2__["default"])(TooltipComponent, [{
    key: "show",
    value: function show(delay) {
      var _this0 = this;

      // Cancel the delayed hide if it is scheduled
      if (this._hideTimeoutId) {
        clearTimeout(this._hideTimeoutId);
        this._hideTimeoutId = null;
      } // Body interactions should cancel the tooltip if there is a delay in showing.


      this._closeOnInteraction = true;
      this._showTimeoutId = setTimeout(function () {
        _this0._visibility = 'visible';
        _this0._showTimeoutId = null; // Mark for check so if any parent component has set the
        // ChangeDetectionStrategy to OnPush it will be checked anyways

        _this0._markForCheck();
      }, delay);
    }
    /**
     * Begins the animation to hide the tooltip after the provided delay in ms.
     * @param delay Amount of milliseconds to delay showing the tooltip.
     */

  }, {
    key: "hide",
    value: function hide(delay) {
      var _this1 = this;

      // Cancel the delayed show if it is scheduled
      if (this._showTimeoutId) {
        clearTimeout(this._showTimeoutId);
        this._showTimeoutId = null;
      }

      this._hideTimeoutId = setTimeout(function () {
        _this1._visibility = 'hidden';
        _this1._hideTimeoutId = null; // Mark for check so if any parent component has set the
        // ChangeDetectionStrategy to OnPush it will be checked anyways

        _this1._markForCheck();
      }, delay);
    }
    /** Returns an observable that notifies when the tooltip has been hidden from view. */

  }, {
    key: "afterHidden",
    value: function afterHidden() {
      return this._onHide;
    }
    /** Whether the tooltip is being displayed. */

  }, {
    key: "isVisible",
    value: function isVisible() {
      return this._visibility === 'visible';
    }
  }, {
    key: "ngOnDestroy",
    value: function ngOnDestroy() {
      this._onHide.complete();
    }
  }, {
    key: "_animationStart",
    value: function _animationStart() {
      this._closeOnInteraction = false;
    }
  }, {
    key: "_animationDone",
    value: function _animationDone(event) {
      var toState = event.toState;

      if (toState === 'hidden' && !this.isVisible()) {
        this._onHide.next();
      }

      if (toState === 'visible' || toState === 'hidden') {
        this._closeOnInteraction = true;
      }
    }
    /**
     * Interactions on the HTML body should close the tooltip immediately as defined in the
     * material design spec.
     * https://material.io/design/components/tooltips.html#behavior
     */

  }, {
    key: "_handleBodyInteraction",
    value: function _handleBodyInteraction() {
      if (this._closeOnInteraction) {
        this.hide(0);
      }
    }
    /**
     * Marks that the tooltip needs to be checked in the next change detection run.
     * Mainly used for rendering the initial text before positioning a tooltip, which
     * can be problematic in components with OnPush change detection.
     */

  }, {
    key: "_markForCheck",
    value: function _markForCheck() {
      this._changeDetectorRef.markForCheck();
    }
  }]);
}();

TooltipComponent.ɵfac = function TooltipComponent_Factory(t) {
  return new (t || TooltipComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_6__["ChangeDetectorRef"]), _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵdirectiveInject"](_angular_cdk_layout__WEBPACK_IMPORTED_MODULE_12__["BreakpointObserver"]));
};

TooltipComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵdefineComponent"]({
  type: TooltipComponent,
  selectors: [["mat-tooltip-component"]],
  hostAttrs: ["aria-hidden", "true"],
  hostVars: 2,
  hostBindings: function TooltipComponent_HostBindings(rf, ctx) {
    if (rf & 1) {
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵlistener"]("click", function TooltipComponent_click_HostBindingHandler() {
        return ctx._handleBodyInteraction();
      }, false, _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵresolveBody"])("auxclick", function TooltipComponent_auxclick_HostBindingHandler() {
        return ctx._handleBodyInteraction();
      }, false, _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵresolveBody"]);
    }

    if (rf & 2) {
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵstyleProp"]("zoom", ctx._visibility === "visible" ? 1 : null);
    }
  },
  decls: 3,
  vars: 7,
  consts: [[1, "mat-tooltip", 3, "ngClass"]],
  template: function TooltipComponent_Template(rf, ctx) {
    if (rf & 1) {
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "div", 0);
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵlistener"]("@state.start", function TooltipComponent_Template_div_animation_state_start_0_listener() {
        return ctx._animationStart();
      })("@state.done", function TooltipComponent_Template_div_animation_state_done_0_listener($event) {
        return ctx._animationDone($event);
      });
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵpipe"](1, "async");
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](2);
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    }

    if (rf & 2) {
      var tmp_0_0 = null;
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵclassProp"]("mat-tooltip-handset", (tmp_0_0 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵpipeBind1"](1, 5, ctx._isHandset)) == null ? null : tmp_0_0.matches);
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngClass", ctx.tooltipClass)("@state", ctx._visibility);
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](2);
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtextInterpolate"](ctx.message);
    }
  },
  directives: [_angular_common__WEBPACK_IMPORTED_MODULE_5__["NgClass"]],
  pipes: [_angular_common__WEBPACK_IMPORTED_MODULE_5__["AsyncPipe"]],
  styles: [".mat-tooltip-panel{pointer-events:none !important}.mat-tooltip{color:#fff;border-radius:4px;margin:14px;max-width:250px;padding-left:8px;padding-right:8px;overflow:hidden;text-overflow:ellipsis}.cdk-high-contrast-active .mat-tooltip{outline:solid 1px}.mat-tooltip-handset{margin:24px;padding-left:16px;padding-right:16px}\n"],
  encapsulation: 2,
  data: {
    animation: [matTooltipAnimations.tooltipState]
  },
  changeDetection: 0
});

TooltipComponent.ctorParameters = function () {
  return [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_6__["ChangeDetectorRef"]
  }, {
    type: _angular_cdk_layout__WEBPACK_IMPORTED_MODULE_12__["BreakpointObserver"]
  }];
};

(function () {
  (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵsetClassMetadata"](TooltipComponent, [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_6__["Component"],
    args: [{
      selector: 'mat-tooltip-component',
      template: "<div class=\"mat-tooltip\"\n     [ngClass]=\"tooltipClass\"\n     [class.mat-tooltip-handset]=\"(_isHandset | async)?.matches\"\n     [@state]=\"_visibility\"\n     (@state.start)=\"_animationStart()\"\n     (@state.done)=\"_animationDone($event)\">{{message}}</div>\n",
      encapsulation: _angular_core__WEBPACK_IMPORTED_MODULE_6__["ViewEncapsulation"].None,
      changeDetection: _angular_core__WEBPACK_IMPORTED_MODULE_6__["ChangeDetectionStrategy"].OnPush,
      animations: [matTooltipAnimations.tooltipState],
      host: {
        // Forces the element to have a layout in IE and Edge. This fixes issues where the element
        // won't be rendered if the animations are disabled or there is no web animations polyfill.
        '[style.zoom]': '_visibility === "visible" ? 1 : null',
        '(body:click)': 'this._handleBodyInteraction()',
        '(body:auxclick)': 'this._handleBodyInteraction()',
        'aria-hidden': 'true'
      },
      styles: [".mat-tooltip-panel{pointer-events:none !important}.mat-tooltip{color:#fff;border-radius:4px;margin:14px;max-width:250px;padding-left:8px;padding-right:8px;overflow:hidden;text-overflow:ellipsis}.cdk-high-contrast-active .mat-tooltip{outline:solid 1px}.mat-tooltip-handset{margin:24px;padding-left:16px;padding-right:16px}\n"]
    }]
  }], function () {
    return [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_6__["ChangeDetectorRef"]
    }, {
      type: _angular_cdk_layout__WEBPACK_IMPORTED_MODULE_12__["BreakpointObserver"]
    }];
  }, null);
})();
/**
 * @license
 * Copyright Google LLC All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */


var MatTooltipModule = /*#__PURE__*/Object(_home_runner_work_learn_angular_learn_angular_node_modules_babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_2__["default"])(function MatTooltipModule() {
  Object(_home_runner_work_learn_angular_learn_angular_node_modules_babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_1__["default"])(this, MatTooltipModule);
});

MatTooltipModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵdefineNgModule"]({
  type: MatTooltipModule
});
MatTooltipModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵdefineInjector"]({
  factory: function MatTooltipModule_Factory(t) {
    return new (t || MatTooltipModule)();
  },
  providers: [MAT_TOOLTIP_SCROLL_STRATEGY_FACTORY_PROVIDER],
  imports: [[_angular_cdk_a11y__WEBPACK_IMPORTED_MODULE_4__["A11yModule"], _angular_common__WEBPACK_IMPORTED_MODULE_5__["CommonModule"], _angular_cdk_overlay__WEBPACK_IMPORTED_MODULE_3__["OverlayModule"], _angular_material_core__WEBPACK_IMPORTED_MODULE_7__["MatCommonModule"]], _angular_material_core__WEBPACK_IMPORTED_MODULE_7__["MatCommonModule"], _angular_cdk_scrolling__WEBPACK_IMPORTED_MODULE_8__["CdkScrollableModule"]]
});

(function () {
  (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵsetNgModuleScope"](MatTooltipModule, {
    declarations: function declarations() {
      return [MatTooltip, TooltipComponent];
    },
    imports: function imports() {
      return [_angular_cdk_a11y__WEBPACK_IMPORTED_MODULE_4__["A11yModule"], _angular_common__WEBPACK_IMPORTED_MODULE_5__["CommonModule"], _angular_cdk_overlay__WEBPACK_IMPORTED_MODULE_3__["OverlayModule"], _angular_material_core__WEBPACK_IMPORTED_MODULE_7__["MatCommonModule"]];
    },
    exports: function exports() {
      return [MatTooltip, TooltipComponent, _angular_material_core__WEBPACK_IMPORTED_MODULE_7__["MatCommonModule"], _angular_cdk_scrolling__WEBPACK_IMPORTED_MODULE_8__["CdkScrollableModule"]];
    }
  });
})();

(function () {
  (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵsetClassMetadata"](MatTooltipModule, [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_6__["NgModule"],
    args: [{
      imports: [_angular_cdk_a11y__WEBPACK_IMPORTED_MODULE_4__["A11yModule"], _angular_common__WEBPACK_IMPORTED_MODULE_5__["CommonModule"], _angular_cdk_overlay__WEBPACK_IMPORTED_MODULE_3__["OverlayModule"], _angular_material_core__WEBPACK_IMPORTED_MODULE_7__["MatCommonModule"]],
      exports: [MatTooltip, TooltipComponent, _angular_material_core__WEBPACK_IMPORTED_MODULE_7__["MatCommonModule"], _angular_cdk_scrolling__WEBPACK_IMPORTED_MODULE_8__["CdkScrollableModule"]],
      declarations: [MatTooltip, TooltipComponent],
      entryComponents: [TooltipComponent],
      providers: [MAT_TOOLTIP_SCROLL_STRATEGY_FACTORY_PROVIDER]
    }]
  }], null, null);
})();
/**
 * @license
 * Copyright Google LLC All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */

/**
 * Generated bundle index. Do not edit.
 */




/***/ }),

/***/ "RJjd":
/*!**********************************************************!*\
  !*** ./src/app/interview-library/practice.component.css ***!
  \**********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (":host { display: block; min-width: 0; }\n.practice-page { max-width: 900px; min-height: 540px; margin: 0 auto; padding: 42px clamp(22px, 4vw, 58px); color: #26354a; }\n.back-link { display: none; padding: 0; border: 0; background: transparent; color: #276c68; font: inherit; font-weight: 650; cursor: pointer; }\n.practice-topline { display: flex; align-items: flex-end; justify-content: space-between; gap: 22px; }\n.eyebrow { margin: 0 0 9px; color: #477b76; font-size: 11px; font-weight: 750; letter-spacing: .1em; }\nh1 { margin: 0; color: #1d2b3d; font-size: clamp(25px, 2.7vw, 34px); letter-spacing: -.035em; }\n.session-position { padding: 9px 12px; border: 1px solid #e0e7eb; border-radius: 7px; color: #617084; font-size: 13px; font-weight: 650; white-space: nowrap; }\n.progress-track { height: 5px; margin: 23px 0 25px; overflow: hidden; border-radius: 5px; background: #e8eeef; }\n.progress-track span { display: block; height: 100%; border-radius: inherit; background: #2d7771; transition: width .2s ease; }\n.practice-card { padding: clamp(23px, 4vw, 42px); border: 1px solid #e1e7eb; border-radius: 13px; background: #fff; box-shadow: 0 8px 30px rgba(32, 51, 67, .045); }\n.practice-category { margin-bottom: 15px; color: #407771; font-size: 12px; font-weight: 700; }\n.practice-category span { color: #8190a0; font-weight: 550; }\n.practice-card h2 { max-width: 30ch; margin: 0; color: #24354a; font-size: clamp(22px, 2.2vw, 29px); line-height: 1.3; }\n.think-prompt { max-width: 55ch; margin: 18px 0 25px; color: #627185; font-size: 14px; line-height: 1.7; }\n.primary-button, .assessment-button { min-height: 42px; padding: 10px 16px; border: 1px solid #286d69; border-radius: 7px; background: #286d69; color: #fff; font: inherit; font-size: 13px; font-weight: 700; cursor: pointer; }\n.primary-button:hover { background: #205b57; }\n.assessment-button { border-color: #dce4e8; background: #fff; color: #364b60; }\n.assessment-button:hover { background: #f5f9f8; }\n.primary-button:focus-visible, .assessment-button:focus-visible, .back-link:focus-visible { outline: 3px solid #5aa49e; outline-offset: 3px; }\n.revealed-answer { max-width: 74ch; margin-top: 27px; padding-top: 22px; border-top: 1px solid #e4e9ee; }\n.revealed-answer h3 { margin: 0 0 14px; color: #27384c; font-size: 16px; }\n.revealed-answer > p { margin: 0 0 16px; color: #34455a; font-size: 14px; line-height: 1.8; white-space: pre-line; overflow-wrap: anywhere; }\n.practice-code { margin: 19px 0; overflow: hidden; border: 1px solid #dfe6eb; border-radius: 8px; background: #f7f9fb; }\n.practice-code > div { padding: 9px 13px; border-bottom: 1px solid #e1e7ec; color: #637286; font-size: 11px; font-weight: 700; text-transform: uppercase; }\npre { margin: 0; padding: 16px; overflow-x: auto; color: #23354a; font: 12.5px/1.7 Consolas, 'SFMono-Regular', Menlo, monospace; -moz-tab-size: 4; -o-tab-size: 4; tab-size: 4; }\ncode { font: inherit; white-space: pre; }\n.self-assessment { display: flex; flex-wrap: wrap; align-items: center; gap: 9px; margin-top: 25px; padding-top: 18px; border-top: 1px solid #edf0f2; }\n.self-assessment p { flex: 1 0 100%; margin: 0 0 3px; color: #536579; font-size: 13px; font-weight: 650; }\n.save-note { margin: 15px 0 0; color: #7a8796; font-size: 11px; }\n.completion-card { display: grid; min-height: 500px; align-content: center; justify-items: center; padding: 40px 24px; text-align: center; }\n.completion-check { display: grid; width: 52px; height: 52px; place-items: center; border-radius: 50%; background: #e6f4ef; color: #24674f; font-size: 23px; font-weight: 700; }\n.completion-card .eyebrow { margin-top: 22px; }\n.completion-card h1 { max-width: 24ch; }\n.completion-card > p:not(.eyebrow) { max-width: 48ch; margin: 12px 0 20px; color: #667589; font-size: 14px; line-height: 1.65; }\n.summary-stats { display: flex; gap: 14px; margin-bottom: 23px; }\n.summary-stats div { display: grid; min-width: 125px; gap: 4px; padding: 15px; border: 1px solid #e1e7eb; border-radius: 9px; }\n.summary-stats strong { color: #286d69; font-size: 24px; }\n.summary-stats span { color: #667589; font-size: 12px; }\n.empty-session .completion-check { background: #edf4f3; color: #286d69; }\n@media (max-width: 760px) { .practice-page { min-height: 0; padding: 18px; } .back-link { display: block; margin-bottom: 23px; } .practice-topline { align-items: flex-start; flex-direction: column; gap: 14px; } .completion-card { min-height: 360px; } }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInByYWN0aWNlLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsUUFBUSxjQUFjLEVBQUUsWUFBWSxFQUFFO0FBQ3RDLGlCQUFpQixnQkFBZ0IsRUFBRSxpQkFBaUIsRUFBRSxjQUFjLEVBQUUsb0NBQW9DLEVBQUUsY0FBYyxFQUFFO0FBQzVILGFBQWEsYUFBYSxFQUFFLFVBQVUsRUFBRSxTQUFTLEVBQUUsdUJBQXVCLEVBQUUsY0FBYyxFQUFFLGFBQWEsRUFBRSxnQkFBZ0IsRUFBRSxlQUFlLEVBQUU7QUFDOUksb0JBQW9CLGFBQWEsRUFBRSxxQkFBcUIsRUFBRSw4QkFBOEIsRUFBRSxTQUFTLEVBQUU7QUFDckcsV0FBVyxlQUFlLEVBQUUsY0FBYyxFQUFFLGVBQWUsRUFBRSxnQkFBZ0IsRUFBRSxvQkFBb0IsRUFBRTtBQUNyRyxLQUFLLFNBQVMsRUFBRSxjQUFjLEVBQUUsbUNBQW1DLEVBQUUsdUJBQXVCLEVBQUU7QUFDOUYsb0JBQW9CLGlCQUFpQixFQUFFLHlCQUF5QixFQUFFLGtCQUFrQixFQUFFLGNBQWMsRUFBRSxlQUFlLEVBQUUsZ0JBQWdCLEVBQUUsbUJBQW1CLEVBQUU7QUFDOUosa0JBQWtCLFdBQVcsRUFBRSxtQkFBbUIsRUFBRSxnQkFBZ0IsRUFBRSxrQkFBa0IsRUFBRSxtQkFBbUIsRUFBRTtBQUMvRyx1QkFBdUIsY0FBYyxFQUFFLFlBQVksRUFBRSxzQkFBc0IsRUFBRSxtQkFBbUIsRUFBRSwwQkFBMEIsRUFBRTtBQUM5SCxpQkFBaUIsK0JBQStCLEVBQUUseUJBQXlCLEVBQUUsbUJBQW1CLEVBQUUsZ0JBQWdCLEVBQUUsNkNBQTZDLEVBQUU7QUFDbksscUJBQXFCLG1CQUFtQixFQUFFLGNBQWMsRUFBRSxlQUFlLEVBQUUsZ0JBQWdCLEVBQUU7QUFDN0YsMEJBQTBCLGNBQWMsRUFBRSxnQkFBZ0IsRUFBRTtBQUM1RCxvQkFBb0IsZUFBZSxFQUFFLFNBQVMsRUFBRSxjQUFjLEVBQUUsbUNBQW1DLEVBQUUsZ0JBQWdCLEVBQUU7QUFDdkgsZ0JBQWdCLGVBQWUsRUFBRSxtQkFBbUIsRUFBRSxjQUFjLEVBQUUsZUFBZSxFQUFFLGdCQUFnQixFQUFFO0FBQ3pHLHNDQUFzQyxnQkFBZ0IsRUFBRSxrQkFBa0IsRUFBRSx5QkFBeUIsRUFBRSxrQkFBa0IsRUFBRSxtQkFBbUIsRUFBRSxXQUFXLEVBQUUsYUFBYSxFQUFFLGVBQWUsRUFBRSxnQkFBZ0IsRUFBRSxlQUFlLEVBQUU7QUFDaE8sd0JBQXdCLG1CQUFtQixFQUFFO0FBQzdDLHFCQUFxQixxQkFBcUIsRUFBRSxnQkFBZ0IsRUFBRSxjQUFjLEVBQUU7QUFDOUUsMkJBQTJCLG1CQUFtQixFQUFFO0FBQ2hELDRGQUE0RiwwQkFBMEIsRUFBRSxtQkFBbUIsRUFBRTtBQUM3SSxtQkFBbUIsZUFBZSxFQUFFLGdCQUFnQixFQUFFLGlCQUFpQixFQUFFLDZCQUE2QixFQUFFO0FBQ3hHLHNCQUFzQixnQkFBZ0IsRUFBRSxjQUFjLEVBQUUsZUFBZSxFQUFFO0FBQ3pFLHVCQUF1QixnQkFBZ0IsRUFBRSxjQUFjLEVBQUUsZUFBZSxFQUFFLGdCQUFnQixFQUFFLHFCQUFxQixFQUFFLHVCQUF1QixFQUFFO0FBQzVJLGlCQUFpQixjQUFjLEVBQUUsZ0JBQWdCLEVBQUUseUJBQXlCLEVBQUUsa0JBQWtCLEVBQUUsbUJBQW1CLEVBQUU7QUFDdkgsdUJBQXVCLGlCQUFpQixFQUFFLGdDQUFnQyxFQUFFLGNBQWMsRUFBRSxlQUFlLEVBQUUsZ0JBQWdCLEVBQUUseUJBQXlCLEVBQUU7QUFDMUosTUFBTSxTQUFTLEVBQUUsYUFBYSxFQUFFLGdCQUFnQixFQUFFLGNBQWMsRUFBRSw2REFBNkQsRUFBRSxnQkFBVyxFQUFYLGNBQVcsRUFBWCxXQUFXLEVBQUU7QUFDOUksT0FBTyxhQUFhLEVBQUUsZ0JBQWdCLEVBQUU7QUFDeEMsbUJBQW1CLGFBQWEsRUFBRSxlQUFlLEVBQUUsbUJBQW1CLEVBQUUsUUFBUSxFQUFFLGdCQUFnQixFQUFFLGlCQUFpQixFQUFFLDZCQUE2QixFQUFFO0FBQ3RKLHFCQUFxQixjQUFjLEVBQUUsZUFBZSxFQUFFLGNBQWMsRUFBRSxlQUFlLEVBQUUsZ0JBQWdCLEVBQUU7QUFDekcsYUFBYSxnQkFBZ0IsRUFBRSxjQUFjLEVBQUUsZUFBZSxFQUFFO0FBQ2hFLG1CQUFtQixhQUFhLEVBQUUsaUJBQWlCLEVBQUUscUJBQXFCLEVBQUUscUJBQXFCLEVBQUUsa0JBQWtCLEVBQUUsa0JBQWtCLEVBQUU7QUFDM0ksb0JBQW9CLGFBQWEsRUFBRSxXQUFXLEVBQUUsWUFBWSxFQUFFLG1CQUFtQixFQUFFLGtCQUFrQixFQUFFLG1CQUFtQixFQUFFLGNBQWMsRUFBRSxlQUFlLEVBQUUsZ0JBQWdCLEVBQUU7QUFDL0ssNEJBQTRCLGdCQUFnQixFQUFFO0FBQzlDLHNCQUFzQixlQUFlLEVBQUU7QUFDdkMscUNBQXFDLGVBQWUsRUFBRSxtQkFBbUIsRUFBRSxjQUFjLEVBQUUsZUFBZSxFQUFFLGlCQUFpQixFQUFFO0FBQy9ILGlCQUFpQixhQUFhLEVBQUUsU0FBUyxFQUFFLG1CQUFtQixFQUFFO0FBQ2hFLHFCQUFxQixhQUFhLEVBQUUsZ0JBQWdCLEVBQUUsUUFBUSxFQUFFLGFBQWEsRUFBRSx5QkFBeUIsRUFBRSxrQkFBa0IsRUFBRTtBQUM5SCx3QkFBd0IsY0FBYyxFQUFFLGVBQWUsRUFBRTtBQUN6RCxzQkFBc0IsY0FBYyxFQUFFLGVBQWUsRUFBRTtBQUN2RCxtQ0FBbUMsbUJBQW1CLEVBQUUsY0FBYyxFQUFFO0FBQ3hFLDRCQUE0QixpQkFBaUIsYUFBYSxFQUFFLGFBQWEsRUFBRSxFQUFFLGFBQWEsY0FBYyxFQUFFLG1CQUFtQixFQUFFLEVBQUUsb0JBQW9CLHVCQUF1QixFQUFFLHNCQUFzQixFQUFFLFNBQVMsRUFBRSxFQUFFLG1CQUFtQixpQkFBaUIsRUFBRSxFQUFFIiwiZmlsZSI6InByYWN0aWNlLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyI6aG9zdCB7IGRpc3BsYXk6IGJsb2NrOyBtaW4td2lkdGg6IDA7IH1cbi5wcmFjdGljZS1wYWdlIHsgbWF4LXdpZHRoOiA5MDBweDsgbWluLWhlaWdodDogNTQwcHg7IG1hcmdpbjogMCBhdXRvOyBwYWRkaW5nOiA0MnB4IGNsYW1wKDIycHgsIDR2dywgNThweCk7IGNvbG9yOiAjMjYzNTRhOyB9XG4uYmFjay1saW5rIHsgZGlzcGxheTogbm9uZTsgcGFkZGluZzogMDsgYm9yZGVyOiAwOyBiYWNrZ3JvdW5kOiB0cmFuc3BhcmVudDsgY29sb3I6ICMyNzZjNjg7IGZvbnQ6IGluaGVyaXQ7IGZvbnQtd2VpZ2h0OiA2NTA7IGN1cnNvcjogcG9pbnRlcjsgfVxuLnByYWN0aWNlLXRvcGxpbmUgeyBkaXNwbGF5OiBmbGV4OyBhbGlnbi1pdGVtczogZmxleC1lbmQ7IGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjsgZ2FwOiAyMnB4OyB9XG4uZXllYnJvdyB7IG1hcmdpbjogMCAwIDlweDsgY29sb3I6ICM0NzdiNzY7IGZvbnQtc2l6ZTogMTFweDsgZm9udC13ZWlnaHQ6IDc1MDsgbGV0dGVyLXNwYWNpbmc6IC4xZW07IH1cbmgxIHsgbWFyZ2luOiAwOyBjb2xvcjogIzFkMmIzZDsgZm9udC1zaXplOiBjbGFtcCgyNXB4LCAyLjd2dywgMzRweCk7IGxldHRlci1zcGFjaW5nOiAtLjAzNWVtOyB9XG4uc2Vzc2lvbi1wb3NpdGlvbiB7IHBhZGRpbmc6IDlweCAxMnB4OyBib3JkZXI6IDFweCBzb2xpZCAjZTBlN2ViOyBib3JkZXItcmFkaXVzOiA3cHg7IGNvbG9yOiAjNjE3MDg0OyBmb250LXNpemU6IDEzcHg7IGZvbnQtd2VpZ2h0OiA2NTA7IHdoaXRlLXNwYWNlOiBub3dyYXA7IH1cbi5wcm9ncmVzcy10cmFjayB7IGhlaWdodDogNXB4OyBtYXJnaW46IDIzcHggMCAyNXB4OyBvdmVyZmxvdzogaGlkZGVuOyBib3JkZXItcmFkaXVzOiA1cHg7IGJhY2tncm91bmQ6ICNlOGVlZWY7IH1cbi5wcm9ncmVzcy10cmFjayBzcGFuIHsgZGlzcGxheTogYmxvY2s7IGhlaWdodDogMTAwJTsgYm9yZGVyLXJhZGl1czogaW5oZXJpdDsgYmFja2dyb3VuZDogIzJkNzc3MTsgdHJhbnNpdGlvbjogd2lkdGggLjJzIGVhc2U7IH1cbi5wcmFjdGljZS1jYXJkIHsgcGFkZGluZzogY2xhbXAoMjNweCwgNHZ3LCA0MnB4KTsgYm9yZGVyOiAxcHggc29saWQgI2UxZTdlYjsgYm9yZGVyLXJhZGl1czogMTNweDsgYmFja2dyb3VuZDogI2ZmZjsgYm94LXNoYWRvdzogMCA4cHggMzBweCByZ2JhKDMyLCA1MSwgNjcsIC4wNDUpOyB9XG4ucHJhY3RpY2UtY2F0ZWdvcnkgeyBtYXJnaW4tYm90dG9tOiAxNXB4OyBjb2xvcjogIzQwNzc3MTsgZm9udC1zaXplOiAxMnB4OyBmb250LXdlaWdodDogNzAwOyB9XG4ucHJhY3RpY2UtY2F0ZWdvcnkgc3BhbiB7IGNvbG9yOiAjODE5MGEwOyBmb250LXdlaWdodDogNTUwOyB9XG4ucHJhY3RpY2UtY2FyZCBoMiB7IG1heC13aWR0aDogMzBjaDsgbWFyZ2luOiAwOyBjb2xvcjogIzI0MzU0YTsgZm9udC1zaXplOiBjbGFtcCgyMnB4LCAyLjJ2dywgMjlweCk7IGxpbmUtaGVpZ2h0OiAxLjM7IH1cbi50aGluay1wcm9tcHQgeyBtYXgtd2lkdGg6IDU1Y2g7IG1hcmdpbjogMThweCAwIDI1cHg7IGNvbG9yOiAjNjI3MTg1OyBmb250LXNpemU6IDE0cHg7IGxpbmUtaGVpZ2h0OiAxLjc7IH1cbi5wcmltYXJ5LWJ1dHRvbiwgLmFzc2Vzc21lbnQtYnV0dG9uIHsgbWluLWhlaWdodDogNDJweDsgcGFkZGluZzogMTBweCAxNnB4OyBib3JkZXI6IDFweCBzb2xpZCAjMjg2ZDY5OyBib3JkZXItcmFkaXVzOiA3cHg7IGJhY2tncm91bmQ6ICMyODZkNjk7IGNvbG9yOiAjZmZmOyBmb250OiBpbmhlcml0OyBmb250LXNpemU6IDEzcHg7IGZvbnQtd2VpZ2h0OiA3MDA7IGN1cnNvcjogcG9pbnRlcjsgfVxuLnByaW1hcnktYnV0dG9uOmhvdmVyIHsgYmFja2dyb3VuZDogIzIwNWI1NzsgfVxuLmFzc2Vzc21lbnQtYnV0dG9uIHsgYm9yZGVyLWNvbG9yOiAjZGNlNGU4OyBiYWNrZ3JvdW5kOiAjZmZmOyBjb2xvcjogIzM2NGI2MDsgfVxuLmFzc2Vzc21lbnQtYnV0dG9uOmhvdmVyIHsgYmFja2dyb3VuZDogI2Y1ZjlmODsgfVxuLnByaW1hcnktYnV0dG9uOmZvY3VzLXZpc2libGUsIC5hc3Nlc3NtZW50LWJ1dHRvbjpmb2N1cy12aXNpYmxlLCAuYmFjay1saW5rOmZvY3VzLXZpc2libGUgeyBvdXRsaW5lOiAzcHggc29saWQgIzVhYTQ5ZTsgb3V0bGluZS1vZmZzZXQ6IDNweDsgfVxuLnJldmVhbGVkLWFuc3dlciB7IG1heC13aWR0aDogNzRjaDsgbWFyZ2luLXRvcDogMjdweDsgcGFkZGluZy10b3A6IDIycHg7IGJvcmRlci10b3A6IDFweCBzb2xpZCAjZTRlOWVlOyB9XG4ucmV2ZWFsZWQtYW5zd2VyIGgzIHsgbWFyZ2luOiAwIDAgMTRweDsgY29sb3I6ICMyNzM4NGM7IGZvbnQtc2l6ZTogMTZweDsgfVxuLnJldmVhbGVkLWFuc3dlciA+IHAgeyBtYXJnaW46IDAgMCAxNnB4OyBjb2xvcjogIzM0NDU1YTsgZm9udC1zaXplOiAxNHB4OyBsaW5lLWhlaWdodDogMS44OyB3aGl0ZS1zcGFjZTogcHJlLWxpbmU7IG92ZXJmbG93LXdyYXA6IGFueXdoZXJlOyB9XG4ucHJhY3RpY2UtY29kZSB7IG1hcmdpbjogMTlweCAwOyBvdmVyZmxvdzogaGlkZGVuOyBib3JkZXI6IDFweCBzb2xpZCAjZGZlNmViOyBib3JkZXItcmFkaXVzOiA4cHg7IGJhY2tncm91bmQ6ICNmN2Y5ZmI7IH1cbi5wcmFjdGljZS1jb2RlID4gZGl2IHsgcGFkZGluZzogOXB4IDEzcHg7IGJvcmRlci1ib3R0b206IDFweCBzb2xpZCAjZTFlN2VjOyBjb2xvcjogIzYzNzI4NjsgZm9udC1zaXplOiAxMXB4OyBmb250LXdlaWdodDogNzAwOyB0ZXh0LXRyYW5zZm9ybTogdXBwZXJjYXNlOyB9XG5wcmUgeyBtYXJnaW46IDA7IHBhZGRpbmc6IDE2cHg7IG92ZXJmbG93LXg6IGF1dG87IGNvbG9yOiAjMjMzNTRhOyBmb250OiAxMi41cHgvMS43IENvbnNvbGFzLCAnU0ZNb25vLVJlZ3VsYXInLCBNZW5sbywgbW9ub3NwYWNlOyB0YWItc2l6ZTogNDsgfVxuY29kZSB7IGZvbnQ6IGluaGVyaXQ7IHdoaXRlLXNwYWNlOiBwcmU7IH1cbi5zZWxmLWFzc2Vzc21lbnQgeyBkaXNwbGF5OiBmbGV4OyBmbGV4LXdyYXA6IHdyYXA7IGFsaWduLWl0ZW1zOiBjZW50ZXI7IGdhcDogOXB4OyBtYXJnaW4tdG9wOiAyNXB4OyBwYWRkaW5nLXRvcDogMThweDsgYm9yZGVyLXRvcDogMXB4IHNvbGlkICNlZGYwZjI7IH1cbi5zZWxmLWFzc2Vzc21lbnQgcCB7IGZsZXg6IDEgMCAxMDAlOyBtYXJnaW46IDAgMCAzcHg7IGNvbG9yOiAjNTM2NTc5OyBmb250LXNpemU6IDEzcHg7IGZvbnQtd2VpZ2h0OiA2NTA7IH1cbi5zYXZlLW5vdGUgeyBtYXJnaW46IDE1cHggMCAwOyBjb2xvcjogIzdhODc5NjsgZm9udC1zaXplOiAxMXB4OyB9XG4uY29tcGxldGlvbi1jYXJkIHsgZGlzcGxheTogZ3JpZDsgbWluLWhlaWdodDogNTAwcHg7IGFsaWduLWNvbnRlbnQ6IGNlbnRlcjsganVzdGlmeS1pdGVtczogY2VudGVyOyBwYWRkaW5nOiA0MHB4IDI0cHg7IHRleHQtYWxpZ246IGNlbnRlcjsgfVxuLmNvbXBsZXRpb24tY2hlY2sgeyBkaXNwbGF5OiBncmlkOyB3aWR0aDogNTJweDsgaGVpZ2h0OiA1MnB4OyBwbGFjZS1pdGVtczogY2VudGVyOyBib3JkZXItcmFkaXVzOiA1MCU7IGJhY2tncm91bmQ6ICNlNmY0ZWY7IGNvbG9yOiAjMjQ2NzRmOyBmb250LXNpemU6IDIzcHg7IGZvbnQtd2VpZ2h0OiA3MDA7IH1cbi5jb21wbGV0aW9uLWNhcmQgLmV5ZWJyb3cgeyBtYXJnaW4tdG9wOiAyMnB4OyB9XG4uY29tcGxldGlvbi1jYXJkIGgxIHsgbWF4LXdpZHRoOiAyNGNoOyB9XG4uY29tcGxldGlvbi1jYXJkID4gcDpub3QoLmV5ZWJyb3cpIHsgbWF4LXdpZHRoOiA0OGNoOyBtYXJnaW46IDEycHggMCAyMHB4OyBjb2xvcjogIzY2NzU4OTsgZm9udC1zaXplOiAxNHB4OyBsaW5lLWhlaWdodDogMS42NTsgfVxuLnN1bW1hcnktc3RhdHMgeyBkaXNwbGF5OiBmbGV4OyBnYXA6IDE0cHg7IG1hcmdpbi1ib3R0b206IDIzcHg7IH1cbi5zdW1tYXJ5LXN0YXRzIGRpdiB7IGRpc3BsYXk6IGdyaWQ7IG1pbi13aWR0aDogMTI1cHg7IGdhcDogNHB4OyBwYWRkaW5nOiAxNXB4OyBib3JkZXI6IDFweCBzb2xpZCAjZTFlN2ViOyBib3JkZXItcmFkaXVzOiA5cHg7IH1cbi5zdW1tYXJ5LXN0YXRzIHN0cm9uZyB7IGNvbG9yOiAjMjg2ZDY5OyBmb250LXNpemU6IDI0cHg7IH1cbi5zdW1tYXJ5LXN0YXRzIHNwYW4geyBjb2xvcjogIzY2NzU4OTsgZm9udC1zaXplOiAxMnB4OyB9XG4uZW1wdHktc2Vzc2lvbiAuY29tcGxldGlvbi1jaGVjayB7IGJhY2tncm91bmQ6ICNlZGY0ZjM7IGNvbG9yOiAjMjg2ZDY5OyB9XG5AbWVkaWEgKG1heC13aWR0aDogNzYwcHgpIHsgLnByYWN0aWNlLXBhZ2UgeyBtaW4taGVpZ2h0OiAwOyBwYWRkaW5nOiAxOHB4OyB9IC5iYWNrLWxpbmsgeyBkaXNwbGF5OiBibG9jazsgbWFyZ2luLWJvdHRvbTogMjNweDsgfSAucHJhY3RpY2UtdG9wbGluZSB7IGFsaWduLWl0ZW1zOiBmbGV4LXN0YXJ0OyBmbGV4LWRpcmVjdGlvbjogY29sdW1uOyBnYXA6IDE0cHg7IH0gLmNvbXBsZXRpb24tY2FyZCB7IG1pbi1oZWlnaHQ6IDM2MHB4OyB9IH1cbiJdfQ== */");

/***/ }),

/***/ "RU0v":
/*!************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/user-profile/user-profile.component.html ***!
  \************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"main-content\">\n  <div class=\"container-fluid\">\n      <div class=\"row\">\n          <div class=\"col-md-8\">\n              <div class=\"card\">\n                  <div class=\"card-header card-header-danger\">\n                      <h4 class=\"card-title\">Sample Data Collection Form.</h4>\n                      <p class=\"card-category\">Complete your profile</p>\n                  </div>\n                  <div class=\"card-body\">\n                      <form>\n                          <div class=\"row\">\n                              <div class=\"col-md-5\">\n                                <mat-form-field class=\"example-full-width\">\n                                    <input matInput placeholder=\"Company (disabled)\" disabled>\n                                  </mat-form-field>\n                              </div>\n                              <div class=\"col-md-3\">\n                                  <mat-form-field class=\"example-full-width\">\n                                    <input matInput placeholder=\"Username\">\n                                  </mat-form-field>\n                              </div>\n                              <div class=\"col-md-4\">\n                                  <mat-form-field class=\"example-full-width\">\n                                    <input matInput placeholder=\"Email address\" type=\"email\">\n                                  </mat-form-field>\n                              </div>\n                          </div>\n                          <div class=\"row\">\n                              <div class=\"col-md-6\">\n                                <mat-form-field class=\"example-full-width\">\n                                  <input matInput placeholder=\"Fist Name\" type=\"text\">\n                                </mat-form-field>\n                              </div>\n                              <div class=\"col-md-6\">\n                                <mat-form-field class=\"example-full-width\">\n                                  <input matInput placeholder=\"Last Name\" type=\"text\">\n                                </mat-form-field>\n                              </div>\n                          </div>\n                          <div class=\"row\">\n                              <div class=\"col-md-12\">\n                                <mat-form-field class=\"example-full-width\">\n                                  <input matInput placeholder=\"Adress\" type=\"text\">\n                                </mat-form-field>\n                              </div>\n                          </div>\n                          <div class=\"row\">\n                              <div class=\"col-md-4\">\n                                <mat-form-field class=\"example-full-width\">\n                                  <input matInput placeholder=\"City\" type=\"text\">\n                                </mat-form-field>\n                              </div>\n                              <div class=\"col-md-4\">\n                                <mat-form-field class=\"example-full-width\">\n                                  <input matInput placeholder=\"Country\" type=\"text\">\n                                </mat-form-field>\n                              </div>\n                              <div class=\"col-md-4\">\n                                <mat-form-field class=\"example-full-width\">\n                                  <input matInput placeholder=\"Postal Code\" type=\"text\">\n                                </mat-form-field>\n                              </div>\n                          </div>\n                          <div class=\"row\">\n                              <div class=\"col-md-12\">\n                                <label>About Me</label>\n                                <mat-form-field class=\"example-full-width\">\n                                   <textarea matInput placeholder=\"Text area, free form text area.\"></textarea>\n                                 </mat-form-field>                                 \n                              </div>\n                          </div>\n                          <button mat-raised-button type=\"submit\" class=\"btn btn-danger pull-right\">Update Profile</button>\n                          <div class=\"clearfix\"></div>\n                      </form>\n                  </div>\n              </div>\n          </div>\n          <div class=\"col-md-4\">\n              <div class=\"card card-profile\">\n                  <div class=\"card-avatar\">\n                      <a href=\"\">\n                          <img class=\"img\" src=\"./assets/img/angular2-logo-red.png\" />\n                      </a>\n                  </div>\n                  <div class=\"card-body\">\n                      <h6 class=\"card-category text-gray\">Designed by Sudeep Shanubhog</h6>\n                      <h4 class=\"card-title\">Angular</h4>\n                      <p class=\"card-description\">\n                          Learn Angular latest version followed by angular material theme controls and icons.\n                      </p>\n                      <a href=\"\" class=\"btn btn-danger btn-round\">Follow</a>\n                  </div>\n              </div>\n          </div>\n      </div>\n  </div>\n</div>\n");

/***/ }),

/***/ "RiU3":
/*!**********************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/interview-library/interview-library.component.html ***!
  \**********************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<main class=\"interview-page\" aria-labelledby=\"library-title\">\n  <header class=\"page-heading\">\n    <div>\n      <p class=\"page-kicker\">STUDY SPACE</p>\n      <h1 id=\"library-title\">Interview Library</h1>\n      <p class=\"page-intro\">A focused place to explore questions, review detailed answers, and track your progress.</p>\n    </div>    \n  </header>\n\n  <section class=\"toolbar\" aria-label=\"Search and filter questions\">\n    <label class=\"search-field\">\n      <span class=\"search-icon\" aria-hidden=\"true\">⌕</span>\n      <span class=\"visually-hidden\">Search questions and answers</span>\n      <input #searchInput type=\"search\" name=\"question-search\" [(ngModel)]=\"filters.query\" (ngModelChange)=\"filterChanged()\" placeholder=\"Search questions, topics, and answers\" autocomplete=\"off\">\n      <span class=\"keyboard-hint\" aria-hidden=\"true\">⌘ K</span>\n    </label>\n    <label class=\"filter-control\">\n      <span class=\"visually-hidden\">Filter by category</span>\n      <select name=\"category-filter\" [(ngModel)]=\"filters.categoryId\" (ngModelChange)=\"filterChanged()\">\n        <option value=\"\">All categories</option>\n        <option *ngFor=\"let category of categories\" [value]=\"category.id\">{{ category.name }}</option>\n      </select>\n    </label>\n    <label class=\"filter-control status-control\">\n      <span class=\"visually-hidden\">Filter by study status</span>\n      <select name=\"status-filter\" [(ngModel)]=\"filters.status\" (ngModelChange)=\"filterChanged()\">\n        <option value=\"\">All progress</option>\n        <option value=\"new\">Not reviewed</option>\n        <option value=\"needs-review\">Needs review</option>\n        <option value=\"confident\">Confident</option>\n      </select>\n    </label>\n    <button type=\"button\" class=\"bookmark-filter\" [class.is-active]=\"filters.bookmarkedOnly\" [attr.aria-pressed]=\"filters.bookmarkedOnly\" (click)=\"filters.bookmarkedOnly = !filters.bookmarkedOnly; filterChanged()\">\n      <span aria-hidden=\"true\">☆</span> Bookmarks\n    </button>\n    <button type=\"button\" class=\"start-button\" (click)=\"startPractice()\"><span aria-hidden=\"true\">▶</span> Start practice</button>\n  </section>\n\n  <p class=\"filter-notice\" *ngIf=\"showPracticeEmpty\" role=\"alert\">There are no questions in this filtered set. Adjust your filters before starting a practice session.</p>\n\n  <section class=\"library-shell\" [class.answer-open]=\"activeQuestionId || routeChildIsPractice\" aria-label=\"Interview question library\">\n    <aside class=\"question-panel\" aria-label=\"Question results\">\n      <div class=\"results-heading\">\n        <div>\n          <h2>Questions</h2>\n          <p>{{ results.length }} {{ results.length === 1 ? 'result' : 'results' }}<span *ngIf=\"questions.length\"> · {{ questions.length }} total</span></p>\n        </div>\n        <button type=\"button\" class=\"clear-button\" *ngIf=\"filters.query || filters.categoryId || filters.bookmarkedOnly || filters.status\" (click)=\"clearFilters()\">Clear filters</button>\n      </div>\n\n      <div class=\"panel-message\" *ngIf=\"loading\" role=\"status\">Loading the interview library…</div>\n      <div class=\"panel-message error-message\" *ngIf=\"!loading && loadError\" role=\"alert\">{{ loadError }}</div>\n      <div class=\"panel-message\" *ngIf=\"!loading && !loadError && !results.length\">\n        <span class=\"empty-glyph\" aria-hidden=\"true\">⌕</span>\n        <strong>No questions found</strong>\n        <p>Try another search or clear one or more filters.</p>\n        <button type=\"button\" class=\"clear-empty-button\" (click)=\"clearFilters()\">Clear filters</button>\n      </div>\n\n      <nav class=\"question-list\" *ngIf=\"results.length\" aria-label=\"Question results list\">\n        <a class=\"question-item\" *ngFor=\"let question of results\" [routerLink]=\"[question.id]\" [queryParamsHandling]=\"'merge'\" [class.is-selected]=\"activeQuestionId === question.id\" [attr.aria-current]=\"activeQuestionId === question.id ? 'page' : null\">\n          <span class=\"question-item-top\"><span class=\"item-category\">{{ categoryName(question.categoryId) }}</span><span class=\"item-id\">{{ question.id }}</span></span>\n          <span class=\"item-title\">{{ question.title }}</span>\n          <span class=\"item-meta\">\n            <span class=\"study-dot\" [ngClass]=\"'dot-' + statusFor(question.id)\" aria-hidden=\"true\"></span>\n            <span>{{ statusFor(question.id) === 'new' ? 'Not reviewed' : statusFor(question.id) === 'needs-review' ? 'Needs review' : 'Confident' }}</span>\n          </span>\n        </a>\n      </nav>\n      <p class=\"device-note\">Progress is stored on this browser and device.</p>\n    </aside>\n\n    <section class=\"reader-panel\" aria-label=\"Selected answer\">\n      <router-outlet></router-outlet>\n      <div class=\"reader-placeholder\" *ngIf=\"!activeQuestionId && !routeChildIsPractice && !loading && !loadError\">\n        <div class=\"placeholder-mark\" aria-hidden=\"true\">Aa</div>\n        <h2>Your reading space</h2>\n        <p>Select a question to see its complete answer, examples, and references.</p>\n        <span class=\"placeholder-tip\">Tip: search by question wording or a phrase from an explanation.</span>\n      </div>\n    </section>\n  </section>\n</main>\n");

/***/ }),

/***/ "S84P":
/*!***************************************************************!*\
  !*** ./src/app/interview-library/answer-reader.component.css ***!
  \***************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (":host { display: block; min-width: 0; }\n.answer-reader { min-height: 540px; padding: 38px clamp(22px, 4vw, 58px) 28px; color: #26354a; }\n.back-link { display: none; padding: 0; border: 0; background: transparent; color: #276c68; font: inherit; font-weight: 650; cursor: pointer; }\n.reader-header { padding-bottom: 25px; border-bottom: 1px solid #e4e9ee; }\n.reader-eyebrow { display: flex; align-items: center; gap: 12px; color: #607084; font-size: 12px; font-weight: 700; letter-spacing: .07em; text-transform: uppercase; }\n.question-id { padding: 4px 8px; border-radius: 5px; background: #f0f4f5; color: #536579; font-size: 11px; letter-spacing: .03em; }\nh1 { max-width: 22ch; margin: 14px 0 19px; color: #1d2b3d; font-size: clamp(27px, 2.5vw, 35px); font-weight: 690; letter-spacing: -.035em; line-height: 1.2; }\n.reader-actions, .assessment-actions, .question-navigation { display: flex; align-items: center; gap: 10px; }\n.quiet-button, .copy-button, .assessment-button, .primary-button { min-height: 40px; padding: 9px 13px; border: 1px solid #dce4e8; border-radius: 7px; background: #fff; color: #364b60; font: inherit; font-size: 13px; font-weight: 650; cursor: pointer; transition: background-color .15s ease, border-color .15s ease; }\n.quiet-button:hover, .copy-button:hover, .assessment-button:hover { border-color: #8baaa7; background: #f5f9f8; }\n.quiet-button[aria-pressed=\"true\"] { color: #276c68; }\n.status-label { padding: 6px 9px; border-radius: 99px; background: #f1f4f6; color: #657487; font-size: 12px; font-weight: 650; }\n.status-needs-review { background: #fff4e4; color: #8a5817; }\n.status-confident { background: #e6f4ef; color: #22624c; }\n.answer-body { max-width: 74ch; padding: 24px 0 8px; }\n.answer-paragraph { margin: 0 0 17px; color: #34455a; font-size: 15px; line-height: 1.8; white-space: pre-line; overflow-wrap: anywhere; }\n.code-card { margin: 21px 0 25px; overflow: hidden; border: 1px solid #dfe6eb; border-radius: 9px; background: #f7f9fb; }\n.code-toolbar { display: flex; align-items: center; justify-content: space-between; padding: 9px 13px; border-bottom: 1px solid #e1e7ec; color: #637286; font-size: 11px; font-weight: 700; letter-spacing: .06em; text-transform: uppercase; }\n.copy-button { min-height: 31px; padding: 5px 9px; font-size: 11px; letter-spacing: normal; text-transform: none; }\npre { margin: 0; padding: 17px 19px; overflow-x: auto; color: #23354a; font: 12.5px/1.7 Consolas, 'SFMono-Regular', Menlo, monospace; -moz-tab-size: 4; -o-tab-size: 4; tab-size: 4; }\ncode { font: inherit; white-space: pre; }\n.source-disclosure { max-width: 74ch; margin: 20px 0 28px; border-top: 1px solid #e4e9ee; border-bottom: 1px solid #e4e9ee; color: #34455a; }\n.source-disclosure summary { padding: 15px 0; color: #365f5d; font-size: 13px; font-weight: 700; cursor: pointer; }\n.source-disclosure summary:focus-visible, button:focus-visible { outline: 3px solid #5aa49e; outline-offset: 3px; }\n.disclosure-content { padding: 0 0 14px; font-size: 13px; line-height: 1.65; }\n.variant-entry { padding: 8px 0; border-top: 1px solid #edf0f2; }\n.variant-entry p { margin: 0 0 6px; }\n.variant-entry ul, .reference-list ul { margin: 0; padding-left: 22px; color: #647386; }\n.reference-list h2 { margin: 12px 0 6px; color: #34455a; font-size: 13px; }\n.reader-footer { max-width: 74ch; display: flex; flex-wrap: wrap; align-items: center; justify-content: space-between; gap: 14px; padding-top: 20px; border-top: 1px solid #e4e9ee; }\n.assessment-button.is-active { border-color: #8cb2ae; background: #edf6f4; color: #245e5a; }\n.primary-button { border-color: #286d69; background: #286d69; color: #fff; }\n.primary-button:hover { border-color: #205b57; background: #205b57; }\n.quiet-button:disabled, .primary-button:disabled { opacity: .48; cursor: not-allowed; }\n.save-note { max-width: 74ch; margin: 17px 0 0; color: #7a8796; font-size: 11px; }\n.reader-empty { display: grid; min-height: 440px; align-content: center; justify-items: center; padding: 32px; text-align: center; }\n.empty-icon { display: grid; width: 42px; height: 42px; place-items: center; border-radius: 50%; background: #edf4f3; color: #286d69; font-size: 19px; font-weight: 700; }\n.reader-empty h2 { margin: 16px 0 5px; color: #24354a; font-size: 20px; }\n.reader-empty p { max-width: 40ch; margin: 0 0 18px; color: #657487; font-size: 14px; line-height: 1.6; }\n@media (max-width: 760px) {\n  .answer-reader { min-height: 0; padding: 18px 18px 28px; }\n  .back-link { display: inline-flex; align-items: center; gap: 8px; margin-bottom: 22px; }\n  .reader-header { padding-bottom: 20px; }\n  h1 { font-size: 27px; }\n  .reader-footer { align-items: stretch; }\n  .assessment-actions, .question-navigation { flex-wrap: wrap; }\n  .question-navigation { width: 100%; justify-content: space-between; }\n  .reader-empty { min-height: 340px; }\n}\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFuc3dlci1yZWFkZXIuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxRQUFRLGNBQWMsRUFBRSxZQUFZLEVBQUU7QUFDdEMsaUJBQWlCLGlCQUFpQixFQUFFLHlDQUF5QyxFQUFFLGNBQWMsRUFBRTtBQUMvRixhQUFhLGFBQWEsRUFBRSxVQUFVLEVBQUUsU0FBUyxFQUFFLHVCQUF1QixFQUFFLGNBQWMsRUFBRSxhQUFhLEVBQUUsZ0JBQWdCLEVBQUUsZUFBZSxFQUFFO0FBQzlJLGlCQUFpQixvQkFBb0IsRUFBRSxnQ0FBZ0MsRUFBRTtBQUN6RSxrQkFBa0IsYUFBYSxFQUFFLG1CQUFtQixFQUFFLFNBQVMsRUFBRSxjQUFjLEVBQUUsZUFBZSxFQUFFLGdCQUFnQixFQUFFLHFCQUFxQixFQUFFLHlCQUF5QixFQUFFO0FBQ3RLLGVBQWUsZ0JBQWdCLEVBQUUsa0JBQWtCLEVBQUUsbUJBQW1CLEVBQUUsY0FBYyxFQUFFLGVBQWUsRUFBRSxxQkFBcUIsRUFBRTtBQUNsSSxLQUFLLGVBQWUsRUFBRSxtQkFBbUIsRUFBRSxjQUFjLEVBQUUsbUNBQW1DLEVBQUUsZ0JBQWdCLEVBQUUsdUJBQXVCLEVBQUUsZ0JBQWdCLEVBQUU7QUFDN0osNkRBQTZELGFBQWEsRUFBRSxtQkFBbUIsRUFBRSxTQUFTLEVBQUU7QUFDNUcsbUVBQW1FLGdCQUFnQixFQUFFLGlCQUFpQixFQUFFLHlCQUF5QixFQUFFLGtCQUFrQixFQUFFLGdCQUFnQixFQUFFLGNBQWMsRUFBRSxhQUFhLEVBQUUsZUFBZSxFQUFFLGdCQUFnQixFQUFFLGVBQWUsRUFBRSw4REFBOEQsRUFBRTtBQUM1VCxvRUFBb0UscUJBQXFCLEVBQUUsbUJBQW1CLEVBQUU7QUFDaEgscUNBQXFDLGNBQWMsRUFBRTtBQUNyRCxnQkFBZ0IsZ0JBQWdCLEVBQUUsbUJBQW1CLEVBQUUsbUJBQW1CLEVBQUUsY0FBYyxFQUFFLGVBQWUsRUFBRSxnQkFBZ0IsRUFBRTtBQUMvSCx1QkFBdUIsbUJBQW1CLEVBQUUsY0FBYyxFQUFFO0FBQzVELG9CQUFvQixtQkFBbUIsRUFBRSxjQUFjLEVBQUU7QUFDekQsZUFBZSxlQUFlLEVBQUUsbUJBQW1CLEVBQUU7QUFDckQsb0JBQW9CLGdCQUFnQixFQUFFLGNBQWMsRUFBRSxlQUFlLEVBQUUsZ0JBQWdCLEVBQUUscUJBQXFCLEVBQUUsdUJBQXVCLEVBQUU7QUFDekksYUFBYSxtQkFBbUIsRUFBRSxnQkFBZ0IsRUFBRSx5QkFBeUIsRUFBRSxrQkFBa0IsRUFBRSxtQkFBbUIsRUFBRTtBQUN4SCxnQkFBZ0IsYUFBYSxFQUFFLG1CQUFtQixFQUFFLDhCQUE4QixFQUFFLGlCQUFpQixFQUFFLGdDQUFnQyxFQUFFLGNBQWMsRUFBRSxlQUFlLEVBQUUsZ0JBQWdCLEVBQUUscUJBQXFCLEVBQUUseUJBQXlCLEVBQUU7QUFDOU8sZUFBZSxnQkFBZ0IsRUFBRSxnQkFBZ0IsRUFBRSxlQUFlLEVBQUUsc0JBQXNCLEVBQUUsb0JBQW9CLEVBQUU7QUFDbEgsTUFBTSxTQUFTLEVBQUUsa0JBQWtCLEVBQUUsZ0JBQWdCLEVBQUUsY0FBYyxFQUFFLDZEQUE2RCxFQUFFLGdCQUFXLEVBQVgsY0FBVyxFQUFYLFdBQVcsRUFBRTtBQUNuSixPQUFPLGFBQWEsRUFBRSxnQkFBZ0IsRUFBRTtBQUN4QyxxQkFBcUIsZUFBZSxFQUFFLG1CQUFtQixFQUFFLDZCQUE2QixFQUFFLGdDQUFnQyxFQUFFLGNBQWMsRUFBRTtBQUM1SSw2QkFBNkIsZUFBZSxFQUFFLGNBQWMsRUFBRSxlQUFlLEVBQUUsZ0JBQWdCLEVBQUUsZUFBZSxFQUFFO0FBQ2xILGlFQUFpRSwwQkFBMEIsRUFBRSxtQkFBbUIsRUFBRTtBQUNsSCxzQkFBc0IsaUJBQWlCLEVBQUUsZUFBZSxFQUFFLGlCQUFpQixFQUFFO0FBQzdFLGlCQUFpQixjQUFjLEVBQUUsNkJBQTZCLEVBQUU7QUFDaEUsbUJBQW1CLGVBQWUsRUFBRTtBQUNwQyx3Q0FBd0MsU0FBUyxFQUFFLGtCQUFrQixFQUFFLGNBQWMsRUFBRTtBQUN2RixxQkFBcUIsa0JBQWtCLEVBQUUsY0FBYyxFQUFFLGVBQWUsRUFBRTtBQUMxRSxpQkFBaUIsZUFBZSxFQUFFLGFBQWEsRUFBRSxlQUFlLEVBQUUsbUJBQW1CLEVBQUUsOEJBQThCLEVBQUUsU0FBUyxFQUFFLGlCQUFpQixFQUFFLDZCQUE2QixFQUFFO0FBQ3BMLCtCQUErQixxQkFBcUIsRUFBRSxtQkFBbUIsRUFBRSxjQUFjLEVBQUU7QUFDM0Ysa0JBQWtCLHFCQUFxQixFQUFFLG1CQUFtQixFQUFFLFdBQVcsRUFBRTtBQUMzRSx3QkFBd0IscUJBQXFCLEVBQUUsbUJBQW1CLEVBQUU7QUFDcEUsbURBQW1ELFlBQVksRUFBRSxtQkFBbUIsRUFBRTtBQUN0RixhQUFhLGVBQWUsRUFBRSxnQkFBZ0IsRUFBRSxjQUFjLEVBQUUsZUFBZSxFQUFFO0FBQ2pGLGdCQUFnQixhQUFhLEVBQUUsaUJBQWlCLEVBQUUscUJBQXFCLEVBQUUscUJBQXFCLEVBQUUsYUFBYSxFQUFFLGtCQUFrQixFQUFFO0FBQ25JLGNBQWMsYUFBYSxFQUFFLFdBQVcsRUFBRSxZQUFZLEVBQUUsbUJBQW1CLEVBQUUsa0JBQWtCLEVBQUUsbUJBQW1CLEVBQUUsY0FBYyxFQUFFLGVBQWUsRUFBRSxnQkFBZ0IsRUFBRTtBQUN6SyxtQkFBbUIsa0JBQWtCLEVBQUUsY0FBYyxFQUFFLGVBQWUsRUFBRTtBQUN4RSxrQkFBa0IsZUFBZSxFQUFFLGdCQUFnQixFQUFFLGNBQWMsRUFBRSxlQUFlLEVBQUUsZ0JBQWdCLEVBQUU7QUFFeEc7RUFDRSxpQkFBaUIsYUFBYSxFQUFFLHVCQUF1QixFQUFFO0VBQ3pELGFBQWEsb0JBQW9CLEVBQUUsbUJBQW1CLEVBQUUsUUFBUSxFQUFFLG1CQUFtQixFQUFFO0VBQ3ZGLGlCQUFpQixvQkFBb0IsRUFBRTtFQUN2QyxLQUFLLGVBQWUsRUFBRTtFQUN0QixpQkFBaUIsb0JBQW9CLEVBQUU7RUFDdkMsNENBQTRDLGVBQWUsRUFBRTtFQUM3RCx1QkFBdUIsV0FBVyxFQUFFLDhCQUE4QixFQUFFO0VBQ3BFLGdCQUFnQixpQkFBaUIsRUFBRTtBQUNyQyIsImZpbGUiOiJhbnN3ZXItcmVhZGVyLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyI6aG9zdCB7IGRpc3BsYXk6IGJsb2NrOyBtaW4td2lkdGg6IDA7IH1cbi5hbnN3ZXItcmVhZGVyIHsgbWluLWhlaWdodDogNTQwcHg7IHBhZGRpbmc6IDM4cHggY2xhbXAoMjJweCwgNHZ3LCA1OHB4KSAyOHB4OyBjb2xvcjogIzI2MzU0YTsgfVxuLmJhY2stbGluayB7IGRpc3BsYXk6IG5vbmU7IHBhZGRpbmc6IDA7IGJvcmRlcjogMDsgYmFja2dyb3VuZDogdHJhbnNwYXJlbnQ7IGNvbG9yOiAjMjc2YzY4OyBmb250OiBpbmhlcml0OyBmb250LXdlaWdodDogNjUwOyBjdXJzb3I6IHBvaW50ZXI7IH1cbi5yZWFkZXItaGVhZGVyIHsgcGFkZGluZy1ib3R0b206IDI1cHg7IGJvcmRlci1ib3R0b206IDFweCBzb2xpZCAjZTRlOWVlOyB9XG4ucmVhZGVyLWV5ZWJyb3cgeyBkaXNwbGF5OiBmbGV4OyBhbGlnbi1pdGVtczogY2VudGVyOyBnYXA6IDEycHg7IGNvbG9yOiAjNjA3MDg0OyBmb250LXNpemU6IDEycHg7IGZvbnQtd2VpZ2h0OiA3MDA7IGxldHRlci1zcGFjaW5nOiAuMDdlbTsgdGV4dC10cmFuc2Zvcm06IHVwcGVyY2FzZTsgfVxuLnF1ZXN0aW9uLWlkIHsgcGFkZGluZzogNHB4IDhweDsgYm9yZGVyLXJhZGl1czogNXB4OyBiYWNrZ3JvdW5kOiAjZjBmNGY1OyBjb2xvcjogIzUzNjU3OTsgZm9udC1zaXplOiAxMXB4OyBsZXR0ZXItc3BhY2luZzogLjAzZW07IH1cbmgxIHsgbWF4LXdpZHRoOiAyMmNoOyBtYXJnaW46IDE0cHggMCAxOXB4OyBjb2xvcjogIzFkMmIzZDsgZm9udC1zaXplOiBjbGFtcCgyN3B4LCAyLjV2dywgMzVweCk7IGZvbnQtd2VpZ2h0OiA2OTA7IGxldHRlci1zcGFjaW5nOiAtLjAzNWVtOyBsaW5lLWhlaWdodDogMS4yOyB9XG4ucmVhZGVyLWFjdGlvbnMsIC5hc3Nlc3NtZW50LWFjdGlvbnMsIC5xdWVzdGlvbi1uYXZpZ2F0aW9uIHsgZGlzcGxheTogZmxleDsgYWxpZ24taXRlbXM6IGNlbnRlcjsgZ2FwOiAxMHB4OyB9XG4ucXVpZXQtYnV0dG9uLCAuY29weS1idXR0b24sIC5hc3Nlc3NtZW50LWJ1dHRvbiwgLnByaW1hcnktYnV0dG9uIHsgbWluLWhlaWdodDogNDBweDsgcGFkZGluZzogOXB4IDEzcHg7IGJvcmRlcjogMXB4IHNvbGlkICNkY2U0ZTg7IGJvcmRlci1yYWRpdXM6IDdweDsgYmFja2dyb3VuZDogI2ZmZjsgY29sb3I6ICMzNjRiNjA7IGZvbnQ6IGluaGVyaXQ7IGZvbnQtc2l6ZTogMTNweDsgZm9udC13ZWlnaHQ6IDY1MDsgY3Vyc29yOiBwb2ludGVyOyB0cmFuc2l0aW9uOiBiYWNrZ3JvdW5kLWNvbG9yIC4xNXMgZWFzZSwgYm9yZGVyLWNvbG9yIC4xNXMgZWFzZTsgfVxuLnF1aWV0LWJ1dHRvbjpob3ZlciwgLmNvcHktYnV0dG9uOmhvdmVyLCAuYXNzZXNzbWVudC1idXR0b246aG92ZXIgeyBib3JkZXItY29sb3I6ICM4YmFhYTc7IGJhY2tncm91bmQ6ICNmNWY5Zjg7IH1cbi5xdWlldC1idXR0b25bYXJpYS1wcmVzc2VkPVwidHJ1ZVwiXSB7IGNvbG9yOiAjMjc2YzY4OyB9XG4uc3RhdHVzLWxhYmVsIHsgcGFkZGluZzogNnB4IDlweDsgYm9yZGVyLXJhZGl1czogOTlweDsgYmFja2dyb3VuZDogI2YxZjRmNjsgY29sb3I6ICM2NTc0ODc7IGZvbnQtc2l6ZTogMTJweDsgZm9udC13ZWlnaHQ6IDY1MDsgfVxuLnN0YXR1cy1uZWVkcy1yZXZpZXcgeyBiYWNrZ3JvdW5kOiAjZmZmNGU0OyBjb2xvcjogIzhhNTgxNzsgfVxuLnN0YXR1cy1jb25maWRlbnQgeyBiYWNrZ3JvdW5kOiAjZTZmNGVmOyBjb2xvcjogIzIyNjI0YzsgfVxuLmFuc3dlci1ib2R5IHsgbWF4LXdpZHRoOiA3NGNoOyBwYWRkaW5nOiAyNHB4IDAgOHB4OyB9XG4uYW5zd2VyLXBhcmFncmFwaCB7IG1hcmdpbjogMCAwIDE3cHg7IGNvbG9yOiAjMzQ0NTVhOyBmb250LXNpemU6IDE1cHg7IGxpbmUtaGVpZ2h0OiAxLjg7IHdoaXRlLXNwYWNlOiBwcmUtbGluZTsgb3ZlcmZsb3ctd3JhcDogYW55d2hlcmU7IH1cbi5jb2RlLWNhcmQgeyBtYXJnaW46IDIxcHggMCAyNXB4OyBvdmVyZmxvdzogaGlkZGVuOyBib3JkZXI6IDFweCBzb2xpZCAjZGZlNmViOyBib3JkZXItcmFkaXVzOiA5cHg7IGJhY2tncm91bmQ6ICNmN2Y5ZmI7IH1cbi5jb2RlLXRvb2xiYXIgeyBkaXNwbGF5OiBmbGV4OyBhbGlnbi1pdGVtczogY2VudGVyOyBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47IHBhZGRpbmc6IDlweCAxM3B4OyBib3JkZXItYm90dG9tOiAxcHggc29saWQgI2UxZTdlYzsgY29sb3I6ICM2MzcyODY7IGZvbnQtc2l6ZTogMTFweDsgZm9udC13ZWlnaHQ6IDcwMDsgbGV0dGVyLXNwYWNpbmc6IC4wNmVtOyB0ZXh0LXRyYW5zZm9ybTogdXBwZXJjYXNlOyB9XG4uY29weS1idXR0b24geyBtaW4taGVpZ2h0OiAzMXB4OyBwYWRkaW5nOiA1cHggOXB4OyBmb250LXNpemU6IDExcHg7IGxldHRlci1zcGFjaW5nOiBub3JtYWw7IHRleHQtdHJhbnNmb3JtOiBub25lOyB9XG5wcmUgeyBtYXJnaW46IDA7IHBhZGRpbmc6IDE3cHggMTlweDsgb3ZlcmZsb3cteDogYXV0bzsgY29sb3I6ICMyMzM1NGE7IGZvbnQ6IDEyLjVweC8xLjcgQ29uc29sYXMsICdTRk1vbm8tUmVndWxhcicsIE1lbmxvLCBtb25vc3BhY2U7IHRhYi1zaXplOiA0OyB9XG5jb2RlIHsgZm9udDogaW5oZXJpdDsgd2hpdGUtc3BhY2U6IHByZTsgfVxuLnNvdXJjZS1kaXNjbG9zdXJlIHsgbWF4LXdpZHRoOiA3NGNoOyBtYXJnaW46IDIwcHggMCAyOHB4OyBib3JkZXItdG9wOiAxcHggc29saWQgI2U0ZTllZTsgYm9yZGVyLWJvdHRvbTogMXB4IHNvbGlkICNlNGU5ZWU7IGNvbG9yOiAjMzQ0NTVhOyB9XG4uc291cmNlLWRpc2Nsb3N1cmUgc3VtbWFyeSB7IHBhZGRpbmc6IDE1cHggMDsgY29sb3I6ICMzNjVmNWQ7IGZvbnQtc2l6ZTogMTNweDsgZm9udC13ZWlnaHQ6IDcwMDsgY3Vyc29yOiBwb2ludGVyOyB9XG4uc291cmNlLWRpc2Nsb3N1cmUgc3VtbWFyeTpmb2N1cy12aXNpYmxlLCBidXR0b246Zm9jdXMtdmlzaWJsZSB7IG91dGxpbmU6IDNweCBzb2xpZCAjNWFhNDllOyBvdXRsaW5lLW9mZnNldDogM3B4OyB9XG4uZGlzY2xvc3VyZS1jb250ZW50IHsgcGFkZGluZzogMCAwIDE0cHg7IGZvbnQtc2l6ZTogMTNweDsgbGluZS1oZWlnaHQ6IDEuNjU7IH1cbi52YXJpYW50LWVudHJ5IHsgcGFkZGluZzogOHB4IDA7IGJvcmRlci10b3A6IDFweCBzb2xpZCAjZWRmMGYyOyB9XG4udmFyaWFudC1lbnRyeSBwIHsgbWFyZ2luOiAwIDAgNnB4OyB9XG4udmFyaWFudC1lbnRyeSB1bCwgLnJlZmVyZW5jZS1saXN0IHVsIHsgbWFyZ2luOiAwOyBwYWRkaW5nLWxlZnQ6IDIycHg7IGNvbG9yOiAjNjQ3Mzg2OyB9XG4ucmVmZXJlbmNlLWxpc3QgaDIgeyBtYXJnaW46IDEycHggMCA2cHg7IGNvbG9yOiAjMzQ0NTVhOyBmb250LXNpemU6IDEzcHg7IH1cbi5yZWFkZXItZm9vdGVyIHsgbWF4LXdpZHRoOiA3NGNoOyBkaXNwbGF5OiBmbGV4OyBmbGV4LXdyYXA6IHdyYXA7IGFsaWduLWl0ZW1zOiBjZW50ZXI7IGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjsgZ2FwOiAxNHB4OyBwYWRkaW5nLXRvcDogMjBweDsgYm9yZGVyLXRvcDogMXB4IHNvbGlkICNlNGU5ZWU7IH1cbi5hc3Nlc3NtZW50LWJ1dHRvbi5pcy1hY3RpdmUgeyBib3JkZXItY29sb3I6ICM4Y2IyYWU7IGJhY2tncm91bmQ6ICNlZGY2ZjQ7IGNvbG9yOiAjMjQ1ZTVhOyB9XG4ucHJpbWFyeS1idXR0b24geyBib3JkZXItY29sb3I6ICMyODZkNjk7IGJhY2tncm91bmQ6ICMyODZkNjk7IGNvbG9yOiAjZmZmOyB9XG4ucHJpbWFyeS1idXR0b246aG92ZXIgeyBib3JkZXItY29sb3I6ICMyMDViNTc7IGJhY2tncm91bmQ6ICMyMDViNTc7IH1cbi5xdWlldC1idXR0b246ZGlzYWJsZWQsIC5wcmltYXJ5LWJ1dHRvbjpkaXNhYmxlZCB7IG9wYWNpdHk6IC40ODsgY3Vyc29yOiBub3QtYWxsb3dlZDsgfVxuLnNhdmUtbm90ZSB7IG1heC13aWR0aDogNzRjaDsgbWFyZ2luOiAxN3B4IDAgMDsgY29sb3I6ICM3YTg3OTY7IGZvbnQtc2l6ZTogMTFweDsgfVxuLnJlYWRlci1lbXB0eSB7IGRpc3BsYXk6IGdyaWQ7IG1pbi1oZWlnaHQ6IDQ0MHB4OyBhbGlnbi1jb250ZW50OiBjZW50ZXI7IGp1c3RpZnktaXRlbXM6IGNlbnRlcjsgcGFkZGluZzogMzJweDsgdGV4dC1hbGlnbjogY2VudGVyOyB9XG4uZW1wdHktaWNvbiB7IGRpc3BsYXk6IGdyaWQ7IHdpZHRoOiA0MnB4OyBoZWlnaHQ6IDQycHg7IHBsYWNlLWl0ZW1zOiBjZW50ZXI7IGJvcmRlci1yYWRpdXM6IDUwJTsgYmFja2dyb3VuZDogI2VkZjRmMzsgY29sb3I6ICMyODZkNjk7IGZvbnQtc2l6ZTogMTlweDsgZm9udC13ZWlnaHQ6IDcwMDsgfVxuLnJlYWRlci1lbXB0eSBoMiB7IG1hcmdpbjogMTZweCAwIDVweDsgY29sb3I6ICMyNDM1NGE7IGZvbnQtc2l6ZTogMjBweDsgfVxuLnJlYWRlci1lbXB0eSBwIHsgbWF4LXdpZHRoOiA0MGNoOyBtYXJnaW46IDAgMCAxOHB4OyBjb2xvcjogIzY1NzQ4NzsgZm9udC1zaXplOiAxNHB4OyBsaW5lLWhlaWdodDogMS42OyB9XG5cbkBtZWRpYSAobWF4LXdpZHRoOiA3NjBweCkge1xuICAuYW5zd2VyLXJlYWRlciB7IG1pbi1oZWlnaHQ6IDA7IHBhZGRpbmc6IDE4cHggMThweCAyOHB4OyB9XG4gIC5iYWNrLWxpbmsgeyBkaXNwbGF5OiBpbmxpbmUtZmxleDsgYWxpZ24taXRlbXM6IGNlbnRlcjsgZ2FwOiA4cHg7IG1hcmdpbi1ib3R0b206IDIycHg7IH1cbiAgLnJlYWRlci1oZWFkZXIgeyBwYWRkaW5nLWJvdHRvbTogMjBweDsgfVxuICBoMSB7IGZvbnQtc2l6ZTogMjdweDsgfVxuICAucmVhZGVyLWZvb3RlciB7IGFsaWduLWl0ZW1zOiBzdHJldGNoOyB9XG4gIC5hc3Nlc3NtZW50LWFjdGlvbnMsIC5xdWVzdGlvbi1uYXZpZ2F0aW9uIHsgZmxleC13cmFwOiB3cmFwOyB9XG4gIC5xdWVzdGlvbi1uYXZpZ2F0aW9uIHsgd2lkdGg6IDEwMCU7IGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjsgfVxuICAucmVhZGVyLWVtcHR5IHsgbWluLWhlaWdodDogMzQwcHg7IH1cbn1cbiJdfQ== */");

/***/ }),

/***/ "VKVo":
/*!***************************************************!*\
  !*** ./src/app/dashboard/dashboard.component.css ***!
  \***************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJkYXNoYm9hcmQuY29tcG9uZW50LmNzcyJ9 */");

/***/ }),

/***/ "Wwls":
/*!*****************************************************!*\
  !*** ./src/app/typography/typography.component.css ***!
  \*****************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJ0eXBvZ3JhcGh5LmNvbXBvbmVudC5jc3MifQ== */");

/***/ }),

/***/ "YpYv":
/*!*****************************************!*\
  !*** ./src/app/maps/maps.component.css ***!
  \*****************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJtYXBzLmNvbXBvbmVudC5jc3MifQ== */");

/***/ }),

/***/ "a6ah":
/*!*********************************************************!*\
  !*** ./src/app/interview-library/practice.component.ts ***!
  \*********************************************************/
/*! exports provided: PracticeComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PracticeComponent", function() { return PracticeComponent; });
/* harmony import */ var _raw_loader_practice_component_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! raw-loader!./practice.component.html */ "Nvwq");
/* harmony import */ var _practice_component_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./practice.component.css */ "RJjd");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _practice_session_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./practice-session.service */ "GCT5");
/* harmony import */ var _question_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./question.service */ "BoL1");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






var PracticeComponent = /** @class */ (function () {
    function PracticeComponent(questionService, session, route, router) {
        this.questionService = questionService;
        this.session = session;
        this.route = route;
        this.router = router;
        this.categories = [];
        this.answerRevealed = false;
        this.total = 0;
        this.position = 0;
        this.completed = false;
        this.missingSession = false;
        this.summary = { total: 0, needsReview: 0, confident: 0 };
        this.questions = [];
    }
    PracticeComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.questionService.getLibrary().subscribe(function (library) {
            _this.questions = library.questions;
            _this.categories = library.categories;
            _this.refresh();
        }, function () { return _this.missingSession = true; });
    };
    PracticeComponent.prototype.revealAnswer = function () {
        this.session.reveal();
        this.refresh();
    };
    PracticeComponent.prototype.assess = function (status) {
        this.session.assess(status);
        this.refresh();
    };
    PracticeComponent.prototype.backToResults = function () {
        this.router.navigate(['../'], {
            relativeTo: this.route,
            queryParams: this.route.parent.snapshot.queryParams
        });
    };
    PracticeComponent.prototype.categoryName = function (id) {
        var category = this.categories.find(function (item) { return item.id === id; });
        return category ? category.name : 'Interview';
    };
    PracticeComponent.prototype.refresh = function () {
        this.question = this.session.current(this.questions);
        this.position = this.session.getPosition();
        this.total = this.session.getTotal();
        this.answerRevealed = this.session.isRevealed();
        this.completed = this.session.isCompleted();
        this.missingSession = !this.session.hasSession();
        if (this.completed) {
            this.summary = this.session.summary();
        }
    };
    PracticeComponent.ctorParameters = function () { return [
        { type: _question_service__WEBPACK_IMPORTED_MODULE_5__["QuestionService"] },
        { type: _practice_session_service__WEBPACK_IMPORTED_MODULE_4__["PracticeSessionService"] },
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"] },
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"] }
    ]; };
    PracticeComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Component"])({
            selector: 'app-interview-practice',
            template: _raw_loader_practice_component_html__WEBPACK_IMPORTED_MODULE_0__["default"],
            styles: [_practice_component_css__WEBPACK_IMPORTED_MODULE_1__["default"]]
        }),
        __metadata("design:paramtypes", [_question_service__WEBPACK_IMPORTED_MODULE_5__["QuestionService"],
            _practice_session_service__WEBPACK_IMPORTED_MODULE_4__["PracticeSessionService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"],
            _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"]])
    ], PracticeComponent);
    return PracticeComponent;
}());



/***/ }),

/***/ "d3UM":
/*!************************************************************************!*\
  !*** ./node_modules/@angular/material/__ivy_ngcc__/fesm2015/select.js ***!
  \************************************************************************/
/*! exports provided: MAT_SELECT_CONFIG, MAT_SELECT_SCROLL_STRATEGY, MAT_SELECT_SCROLL_STRATEGY_PROVIDER, MAT_SELECT_SCROLL_STRATEGY_PROVIDER_FACTORY, MAT_SELECT_TRIGGER, MatSelect, MatSelectChange, MatSelectModule, MatSelectTrigger, SELECT_ITEM_HEIGHT_EM, SELECT_MULTIPLE_PANEL_PADDING_X, SELECT_PANEL_INDENT_PADDING_X, SELECT_PANEL_MAX_HEIGHT, SELECT_PANEL_PADDING_X, SELECT_PANEL_VIEWPORT_PADDING, _MatSelectBase, matSelectAnimations */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MAT_SELECT_CONFIG", function() { return MAT_SELECT_CONFIG; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MAT_SELECT_SCROLL_STRATEGY", function() { return MAT_SELECT_SCROLL_STRATEGY; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MAT_SELECT_SCROLL_STRATEGY_PROVIDER", function() { return MAT_SELECT_SCROLL_STRATEGY_PROVIDER; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MAT_SELECT_SCROLL_STRATEGY_PROVIDER_FACTORY", function() { return MAT_SELECT_SCROLL_STRATEGY_PROVIDER_FACTORY; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MAT_SELECT_TRIGGER", function() { return MAT_SELECT_TRIGGER; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MatSelect", function() { return MatSelect; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MatSelectChange", function() { return MatSelectChange; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MatSelectModule", function() { return MatSelectModule; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MatSelectTrigger", function() { return MatSelectTrigger; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SELECT_ITEM_HEIGHT_EM", function() { return SELECT_ITEM_HEIGHT_EM; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SELECT_MULTIPLE_PANEL_PADDING_X", function() { return SELECT_MULTIPLE_PANEL_PADDING_X; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SELECT_PANEL_INDENT_PADDING_X", function() { return SELECT_PANEL_INDENT_PADDING_X; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SELECT_PANEL_MAX_HEIGHT", function() { return SELECT_PANEL_MAX_HEIGHT; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SELECT_PANEL_PADDING_X", function() { return SELECT_PANEL_PADDING_X; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SELECT_PANEL_VIEWPORT_PADDING", function() { return SELECT_PANEL_VIEWPORT_PADDING; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "_MatSelectBase", function() { return _MatSelectBase; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "matSelectAnimations", function() { return matSelectAnimations; });
/* harmony import */ var _home_runner_work_learn_angular_learn_angular_node_modules_babel_runtime_helpers_esm_get__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/get */ "ReuC");
/* harmony import */ var _home_runner_work_learn_angular_learn_angular_node_modules_babel_runtime_helpers_esm_toConsumableArray__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/toConsumableArray */ "KQm4");
/* harmony import */ var _home_runner_work_learn_angular_learn_angular_node_modules_babel_runtime_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/possibleConstructorReturn */ "md7G");
/* harmony import */ var _home_runner_work_learn_angular_learn_angular_node_modules_babel_runtime_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/getPrototypeOf */ "foSv");
/* harmony import */ var _home_runner_work_learn_angular_learn_angular_node_modules_babel_runtime_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/inherits */ "Ji7U");
/* harmony import */ var _home_runner_work_learn_angular_learn_angular_node_modules_babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/createClass */ "vuIU");
/* harmony import */ var _home_runner_work_learn_angular_learn_angular_node_modules_babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/classCallCheck */ "1OyB");
/* harmony import */ var _angular_cdk_overlay__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/cdk/overlay */ "rDax");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_material_core__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/material/core */ "FKr1");
/* harmony import */ var _angular_material_form_field__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/material/form-field */ "kmnG");
/* harmony import */ var _angular_cdk_scrolling__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @angular/cdk/scrolling */ "vxfF");
/* harmony import */ var _angular_cdk_a11y__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @angular/cdk/a11y */ "u47x");
/* harmony import */ var _angular_cdk_bidi__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @angular/cdk/bidi */ "cH1L");
/* harmony import */ var _angular_cdk_coercion__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! @angular/cdk/coercion */ "8LU1");
/* harmony import */ var _angular_cdk_collections__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! @angular/cdk/collections */ "0EQZ");
/* harmony import */ var _angular_cdk_keycodes__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! @angular/cdk/keycodes */ "FtGj");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! rxjs */ "qCKp");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! rxjs/operators */ "kU1M");
/* harmony import */ var _angular_animations__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! @angular/animations */ "R0Ic");








function _callSuper(_this, derived, args) {
  function isNativeReflectConstruct() {
    if (typeof Reflect === "undefined" || !Reflect.construct) return false;
    if (Reflect.construct.sham) return false;
    if (typeof Proxy === "function") return true;

    try {
      return !Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {}));
    } catch (e) {
      return false;
    }
  }

  derived = Object(_home_runner_work_learn_angular_learn_angular_node_modules_babel_runtime_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_3__["default"])(derived);
  return Object(_home_runner_work_learn_angular_learn_angular_node_modules_babel_runtime_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_2__["default"])(_this, isNativeReflectConstruct() ? Reflect.construct(derived, args || [], Object(_home_runner_work_learn_angular_learn_angular_node_modules_babel_runtime_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_3__["default"])(_this).constructor) : derived.apply(_this, args));
}
















/**
 * @license
 * Copyright Google LLC All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */

/**
 * The following are all the animations for the mat-select component, with each
 * const containing the metadata for one animation.
 *
 * The values below match the implementation of the AngularJS Material mat-select animation.
 * @docs-private
 */










var _c0 = ["trigger"];
var _c1 = ["panel"];

function MatSelect_span_4_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](0, "span", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
  }

  if (rf & 2) {
    var ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtextInterpolate"](ctx_r2.placeholder || "\xA0");
  }
}

function MatSelect_span_5_span_1_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](0, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
  }

  if (rf & 2) {
    var ctx_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtextInterpolate"](ctx_r5.triggerValue || "\xA0");
  }
}

function MatSelect_span_5_ng_content_2_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵprojection"](0, 0, ["*ngSwitchCase", "true"]);
  }
}

function MatSelect_span_5_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](0, "span", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtemplate"](1, MatSelect_span_5_span_1_Template, 2, 1, "span", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtemplate"](2, MatSelect_span_5_ng_content_2_Template, 1, 0, "ng-content", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
  }

  if (rf & 2) {
    var ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵproperty"]("ngSwitch", !!ctx_r3.customTrigger);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵproperty"]("ngSwitchCase", true);
  }
}

function MatSelect_ng_template_8_Template(rf, ctx) {
  if (rf & 1) {
    var _r9 = _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵgetCurrentView"]();

    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](0, "div", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](1, "div", 13, 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵlistener"]("@transformPanel.done", function MatSelect_ng_template_8_Template_div_animation_transformPanel_done_1_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵrestoreView"](_r9);
      var ctx_r8 = _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵnextContext"]();
      return ctx_r8._panelDoneAnimatingStream.next($event.toState);
    })("keydown", function MatSelect_ng_template_8_Template_div_keydown_1_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵrestoreView"](_r9);
      var ctx_r10 = _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵnextContext"]();
      return ctx_r10._handleKeydown($event);
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵprojection"](3, 1);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
  }

  if (rf & 2) {
    var ctx_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵproperty"]("@transformPanelWrap", undefined);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵclassMapInterpolate1"]("mat-select-panel ", ctx_r4._getPanelTheme(), "");
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵstyleProp"]("transform-origin", ctx_r4._transformOrigin)("font-size", ctx_r4._triggerFontSize, "px");
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵproperty"]("ngClass", ctx_r4.panelClass)("@transformPanel", ctx_r4.multiple ? "showing-multiple" : "showing");
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵattribute"]("id", ctx_r4.id + "-panel")("aria-multiselectable", ctx_r4.multiple)("aria-label", ctx_r4.ariaLabel || null)("aria-labelledby", ctx_r4._getPanelAriaLabelledby());
  }
}

var _c2 = [[["mat-select-trigger"]], "*"];
var _c3 = ["mat-select-trigger", "*"];
var matSelectAnimations = {
  /**
   * This animation ensures the select's overlay panel animation (transformPanel) is called when
   * closing the select.
   * This is needed due to https://github.com/angular/angular/issues/23302
   */
  transformPanelWrap: Object(_angular_animations__WEBPACK_IMPORTED_MODULE_21__["trigger"])('transformPanelWrap', [Object(_angular_animations__WEBPACK_IMPORTED_MODULE_21__["transition"])('* => void', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_21__["query"])('@transformPanel', [Object(_angular_animations__WEBPACK_IMPORTED_MODULE_21__["animateChild"])()], {
    optional: true
  }))]),

  /**
   * This animation transforms the select's overlay panel on and off the page.
   *
   * When the panel is attached to the DOM, it expands its width by the amount of padding, scales it
   * up to 100% on the Y axis, fades in its border, and translates slightly up and to the
   * side to ensure the option text correctly overlaps the trigger text.
   *
   * When the panel is removed from the DOM, it simply fades out linearly.
   */
  transformPanel: Object(_angular_animations__WEBPACK_IMPORTED_MODULE_21__["trigger"])('transformPanel', [Object(_angular_animations__WEBPACK_IMPORTED_MODULE_21__["state"])('void', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_21__["style"])({
    transform: 'scaleY(0.8)',
    minWidth: '100%',
    opacity: 0
  })), Object(_angular_animations__WEBPACK_IMPORTED_MODULE_21__["state"])('showing', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_21__["style"])({
    opacity: 1,
    minWidth: 'calc(100% + 32px)',
    transform: 'scaleY(1)'
  })), Object(_angular_animations__WEBPACK_IMPORTED_MODULE_21__["state"])('showing-multiple', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_21__["style"])({
    opacity: 1,
    minWidth: 'calc(100% + 64px)',
    transform: 'scaleY(1)'
  })), Object(_angular_animations__WEBPACK_IMPORTED_MODULE_21__["transition"])('void => *', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_21__["animate"])('120ms cubic-bezier(0, 0, 0.2, 1)')), Object(_angular_animations__WEBPACK_IMPORTED_MODULE_21__["transition"])('* => void', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_21__["animate"])('100ms 25ms linear', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_21__["style"])({
    opacity: 0
  })))])
};
/**
 * @license
 * Copyright Google LLC All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */

/**
 * Returns an exception to be thrown when attempting to change a select's `multiple` option
 * after initialization.
 * @docs-private
 */

function getMatSelectDynamicMultipleError() {
  return Error('Cannot change `multiple` mode of select after initialization.');
}
/**
 * Returns an exception to be thrown when attempting to assign a non-array value to a select
 * in `multiple` mode. Note that `undefined` and `null` are still valid values to allow for
 * resetting the value.
 * @docs-private
 */


function getMatSelectNonArrayValueError() {
  return Error('Value must be an array in multiple-selection mode.');
}
/**
 * Returns an exception to be thrown when assigning a non-function value to the comparator
 * used to determine if a value corresponds to an option. Note that whether the function
 * actually takes two values and returns a boolean is not checked.
 */


function getMatSelectNonFunctionValueError() {
  return Error('`compareWith` must be a function.');
}
/**
 * @license
 * Copyright Google LLC All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */


var nextUniqueId = 0;
/**
 * The following style constants are necessary to save here in order
 * to properly calculate the alignment of the selected option over
 * the trigger element.
 */

/**
 * The max height of the select's overlay panel.
 * @deprecated To be turned into a private variable.
 * @breaking-change 12.0.0
 */

var SELECT_PANEL_MAX_HEIGHT = 256;
/**
 * The panel's padding on the x-axis.
 * @deprecated To be turned into a private variable.
 * @breaking-change 12.0.0
 */

var SELECT_PANEL_PADDING_X = 16;
/**
 * The panel's x axis padding if it is indented (e.g. there is an option group).
 * @deprecated To be turned into a private variable.
 * @breaking-change 12.0.0
 */

var SELECT_PANEL_INDENT_PADDING_X = SELECT_PANEL_PADDING_X * 2;
/**
 * The height of the select items in `em` units.
 * @deprecated To be turned into a private variable.
 * @breaking-change 12.0.0
 */

var SELECT_ITEM_HEIGHT_EM = 3; // TODO(josephperrott): Revert to a constant after 2018 spec updates are fully merged.

/**
 * Distance between the panel edge and the option text in
 * multi-selection mode.
 *
 * Calculated as:
 * (SELECT_PANEL_PADDING_X * 1.5) + 16 = 40
 * The padding is multiplied by 1.5 because the checkbox's margin is half the padding.
 * The checkbox width is 16px.
 *
 * @deprecated To be turned into a private variable.
 * @breaking-change 12.0.0
 */

var SELECT_MULTIPLE_PANEL_PADDING_X = SELECT_PANEL_PADDING_X * 1.5 + 16;
/**
 * The select panel will only "fit" inside the viewport if it is positioned at
 * this value or more away from the viewport boundary.
 *
 * @deprecated To be turned into a private variable.
 * @breaking-change 12.0.0
 */

var SELECT_PANEL_VIEWPORT_PADDING = 8;
/** Injection token that determines the scroll handling while a select is open. */

var MAT_SELECT_SCROLL_STRATEGY = new _angular_core__WEBPACK_IMPORTED_MODULE_9__["InjectionToken"]('mat-select-scroll-strategy');
/** @docs-private */

function MAT_SELECT_SCROLL_STRATEGY_PROVIDER_FACTORY(overlay) {
  return function () {
    return overlay.scrollStrategies.reposition();
  };
}
/** Injection token that can be used to provide the default options the select module. */


var MAT_SELECT_CONFIG = new _angular_core__WEBPACK_IMPORTED_MODULE_9__["InjectionToken"]('MAT_SELECT_CONFIG');
/** @docs-private */

var MAT_SELECT_SCROLL_STRATEGY_PROVIDER = {
  provide: MAT_SELECT_SCROLL_STRATEGY,
  deps: [_angular_cdk_overlay__WEBPACK_IMPORTED_MODULE_7__["Overlay"]],
  useFactory: MAT_SELECT_SCROLL_STRATEGY_PROVIDER_FACTORY
};
/** Change event object that is emitted when the select value has changed. */

var MatSelectChange = /*#__PURE__*/Object(_home_runner_work_learn_angular_learn_angular_node_modules_babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_5__["default"])(function MatSelectChange(
/** Reference to the select that emitted the change event. */
source,
/** Current value of the select that emitted the event. */
value) {
  Object(_home_runner_work_learn_angular_learn_angular_node_modules_babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_6__["default"])(this, MatSelectChange);

  this.source = source;
  this.value = value;
}); // Boilerplate for applying mixins to MatSelect.

/** @docs-private */


var MatSelectBase = /*#__PURE__*/Object(_home_runner_work_learn_angular_learn_angular_node_modules_babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_5__["default"])(function MatSelectBase(_elementRef, _defaultErrorStateMatcher, _parentForm, _parentFormGroup, ngControl) {
  Object(_home_runner_work_learn_angular_learn_angular_node_modules_babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_6__["default"])(this, MatSelectBase);

  this._elementRef = _elementRef;
  this._defaultErrorStateMatcher = _defaultErrorStateMatcher;
  this._parentForm = _parentForm;
  this._parentFormGroup = _parentFormGroup;
  this.ngControl = ngControl;
});

var _MatSelectMixinBase = Object(_angular_material_core__WEBPACK_IMPORTED_MODULE_10__["mixinDisableRipple"])(Object(_angular_material_core__WEBPACK_IMPORTED_MODULE_10__["mixinTabIndex"])(Object(_angular_material_core__WEBPACK_IMPORTED_MODULE_10__["mixinDisabled"])(Object(_angular_material_core__WEBPACK_IMPORTED_MODULE_10__["mixinErrorState"])(MatSelectBase))));
/**
 * Injection token that can be used to reference instances of `MatSelectTrigger`. It serves as
 * alternative token to the actual `MatSelectTrigger` class which could cause unnecessary
 * retention of the class and its directive metadata.
 */


var MAT_SELECT_TRIGGER = new _angular_core__WEBPACK_IMPORTED_MODULE_9__["InjectionToken"]('MatSelectTrigger');
/**
 * Allows the user to customize the trigger that is displayed when the select has a value.
 */

var MatSelectTrigger = /*#__PURE__*/Object(_home_runner_work_learn_angular_learn_angular_node_modules_babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_5__["default"])(function MatSelectTrigger() {
  Object(_home_runner_work_learn_angular_learn_angular_node_modules_babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_6__["default"])(this, MatSelectTrigger);
});

MatSelectTrigger.ɵfac = function MatSelectTrigger_Factory(t) {
  return new (t || MatSelectTrigger)();
};

MatSelectTrigger.ɵdir = _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵdefineDirective"]({
  type: MatSelectTrigger,
  selectors: [["mat-select-trigger"]],
  features: [_angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵProvidersFeature"]([{
    provide: MAT_SELECT_TRIGGER,
    useExisting: MatSelectTrigger
  }])]
});

(function () {
  (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵsetClassMetadata"](MatSelectTrigger, [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_9__["Directive"],
    args: [{
      selector: 'mat-select-trigger',
      providers: [{
        provide: MAT_SELECT_TRIGGER,
        useExisting: MatSelectTrigger
      }]
    }]
  }], null, null);
})();
/** Base class with all of the `MatSelect` functionality. */


var _MatSelectBase = /*#__PURE__*/function (_MatSelectMixinBase2) {
  function _MatSelectBase(_viewportRuler, _changeDetectorRef, _ngZone, _defaultErrorStateMatcher, elementRef, _dir, _parentForm, _parentFormGroup, _parentFormField, ngControl, tabIndex, scrollStrategyFactory, _liveAnnouncer, _defaultOptions) {
    var _this2;

    Object(_home_runner_work_learn_angular_learn_angular_node_modules_babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_6__["default"])(this, _MatSelectBase);

    var _a, _b, _c;

    _this2 = _callSuper(this, _MatSelectBase, [elementRef, _defaultErrorStateMatcher, _parentForm, _parentFormGroup, ngControl]);
    _this2._viewportRuler = _viewportRuler;
    _this2._changeDetectorRef = _changeDetectorRef;
    _this2._ngZone = _ngZone;
    _this2._dir = _dir;
    _this2._parentFormField = _parentFormField;
    _this2.ngControl = ngControl;
    _this2._liveAnnouncer = _liveAnnouncer;
    _this2._defaultOptions = _defaultOptions;
    /** Whether or not the overlay panel is open. */

    _this2._panelOpen = false;
    /** Comparison function to specify which option is displayed. Defaults to object equality. */

    _this2._compareWith = function (o1, o2) {
      return o1 === o2;
    };
    /** Unique id for this input. */


    _this2._uid = "mat-select-".concat(nextUniqueId++);
    /** Current `ariar-labelledby` value for the select trigger. */

    _this2._triggerAriaLabelledBy = null;
    /** Emits whenever the component is destroyed. */

    _this2._destroy = new rxjs__WEBPACK_IMPORTED_MODULE_19__["Subject"]();
    /** `View -> model callback called when value changes` */

    _this2._onChange = function () {};
    /** `View -> model callback called when select has been touched` */


    _this2._onTouched = function () {};
    /** ID for the DOM node containing the select's value. */


    _this2._valueId = "mat-select-value-".concat(nextUniqueId++);
    /** Emits when the panel element is finished transforming in. */

    _this2._panelDoneAnimatingStream = new rxjs__WEBPACK_IMPORTED_MODULE_19__["Subject"]();
    _this2._overlayPanelClass = ((_a = _this2._defaultOptions) === null || _a === void 0 ? void 0 : _a.overlayPanelClass) || '';
    _this2._focused = false;
    /** A name for this control that can be used by `mat-form-field`. */

    _this2.controlType = 'mat-select';
    _this2._required = false;
    _this2._multiple = false;
    _this2._disableOptionCentering = (_c = (_b = _this2._defaultOptions) === null || _b === void 0 ? void 0 : _b.disableOptionCentering) !== null && _c !== void 0 ? _c : false;
    /** Aria label of the select. If not specified, the placeholder will be used as label. */

    _this2.ariaLabel = '';
    /** Combined stream of all of the child options' change events. */

    _this2.optionSelectionChanges = Object(rxjs__WEBPACK_IMPORTED_MODULE_19__["defer"])(function () {
      var options = _this2.options;

      if (options) {
        return options.changes.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_20__["startWith"])(options), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_20__["switchMap"])(function () {
          return rxjs__WEBPACK_IMPORTED_MODULE_19__["merge"].apply(void 0, Object(_home_runner_work_learn_angular_learn_angular_node_modules_babel_runtime_helpers_esm_toConsumableArray__WEBPACK_IMPORTED_MODULE_1__["default"])(options.map(function (option) {
            return option.onSelectionChange;
          })));
        }));
      }

      return _this2._ngZone.onStable.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_20__["take"])(1), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_20__["switchMap"])(function () {
        return _this2.optionSelectionChanges;
      }));
    });
    /** Event emitted when the select panel has been toggled. */

    _this2.openedChange = new _angular_core__WEBPACK_IMPORTED_MODULE_9__["EventEmitter"]();
    /** Event emitted when the select has been opened. */

    _this2._openedStream = _this2.openedChange.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_20__["filter"])(function (o) {
      return o;
    }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_20__["map"])(function () {}));
    /** Event emitted when the select has been closed. */

    _this2._closedStream = _this2.openedChange.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_20__["filter"])(function (o) {
      return !o;
    }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_20__["map"])(function () {}));
    /** Event emitted when the selected value has been changed by the user. */

    _this2.selectionChange = new _angular_core__WEBPACK_IMPORTED_MODULE_9__["EventEmitter"]();
    /**
     * Event that emits whenever the raw value of the select changes. This is here primarily
     * to facilitate the two-way binding for the `value` input.
     * @docs-private
     */

    _this2.valueChange = new _angular_core__WEBPACK_IMPORTED_MODULE_9__["EventEmitter"]();

    if (_this2.ngControl) {
      // Note: we provide the value accessor through here, instead of
      // the `providers` to avoid running into a circular import.
      _this2.ngControl.valueAccessor = _this2;
    } // Note that we only want to set this when the defaults pass it in, otherwise it should
    // stay as `undefined` so that it falls back to the default in the key manager.


    if ((_defaultOptions === null || _defaultOptions === void 0 ? void 0 : _defaultOptions.typeaheadDebounceInterval) != null) {
      _this2._typeaheadDebounceInterval = _defaultOptions.typeaheadDebounceInterval;
    }

    _this2._scrollStrategyFactory = scrollStrategyFactory;
    _this2._scrollStrategy = _this2._scrollStrategyFactory();
    _this2.tabIndex = parseInt(tabIndex) || 0; // Force setter to be called in case id was not specified.

    _this2.id = _this2.id;
    return _this2;
  }
  /** Whether the select is focused. */


  Object(_home_runner_work_learn_angular_learn_angular_node_modules_babel_runtime_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_4__["default"])(_MatSelectBase, _MatSelectMixinBase2);

  return Object(_home_runner_work_learn_angular_learn_angular_node_modules_babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_5__["default"])(_MatSelectBase, [{
    key: "focused",
    get: function get() {
      return this._focused || this._panelOpen;
    }
    /** Placeholder to be shown if no value has been selected. */

  }, {
    key: "placeholder",
    get: function get() {
      return this._placeholder;
    },
    set: function set(value) {
      this._placeholder = value;
      this.stateChanges.next();
    }
    /** Whether the component is required. */

  }, {
    key: "required",
    get: function get() {
      return this._required;
    },
    set: function set(value) {
      this._required = Object(_angular_cdk_coercion__WEBPACK_IMPORTED_MODULE_15__["coerceBooleanProperty"])(value);
      this.stateChanges.next();
    }
    /** Whether the user should be allowed to select multiple options. */

  }, {
    key: "multiple",
    get: function get() {
      return this._multiple;
    },
    set: function set(value) {
      if (this._selectionModel && (typeof ngDevMode === 'undefined' || ngDevMode)) {
        throw getMatSelectDynamicMultipleError();
      }

      this._multiple = Object(_angular_cdk_coercion__WEBPACK_IMPORTED_MODULE_15__["coerceBooleanProperty"])(value);
    }
    /** Whether to center the active option over the trigger. */

  }, {
    key: "disableOptionCentering",
    get: function get() {
      return this._disableOptionCentering;
    },
    set: function set(value) {
      this._disableOptionCentering = Object(_angular_cdk_coercion__WEBPACK_IMPORTED_MODULE_15__["coerceBooleanProperty"])(value);
    }
    /**
     * Function to compare the option values with the selected values. The first argument
     * is a value from an option. The second is a value from the selection. A boolean
     * should be returned.
     */

  }, {
    key: "compareWith",
    get: function get() {
      return this._compareWith;
    },
    set: function set(fn) {
      if (typeof fn !== 'function' && (typeof ngDevMode === 'undefined' || ngDevMode)) {
        throw getMatSelectNonFunctionValueError();
      }

      this._compareWith = fn;

      if (this._selectionModel) {
        // A different comparator means the selection could change.
        this._initializeSelection();
      }
    }
    /** Value of the select control. */

  }, {
    key: "value",
    get: function get() {
      return this._value;
    },
    set: function set(newValue) {
      if (newValue !== this._value) {
        if (this.options) {
          this._setSelectionByValue(newValue);
        }

        this._value = newValue;
      }
    }
    /** Time to wait in milliseconds after the last keystroke before moving focus to an item. */

  }, {
    key: "typeaheadDebounceInterval",
    get: function get() {
      return this._typeaheadDebounceInterval;
    },
    set: function set(value) {
      this._typeaheadDebounceInterval = Object(_angular_cdk_coercion__WEBPACK_IMPORTED_MODULE_15__["coerceNumberProperty"])(value);
    }
    /** Unique id of the element. */

  }, {
    key: "id",
    get: function get() {
      return this._id;
    },
    set: function set(value) {
      this._id = value || this._uid;
      this.stateChanges.next();
    }
  }, {
    key: "ngOnInit",
    value: function ngOnInit() {
      var _this3 = this;

      this._selectionModel = new _angular_cdk_collections__WEBPACK_IMPORTED_MODULE_16__["SelectionModel"](this.multiple);
      this.stateChanges.next(); // We need `distinctUntilChanged` here, because some browsers will
      // fire the animation end event twice for the same animation. See:
      // https://github.com/angular/angular/issues/24084

      this._panelDoneAnimatingStream.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_20__["distinctUntilChanged"])(), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_20__["takeUntil"])(this._destroy)).subscribe(function () {
        return _this3._panelDoneAnimating(_this3.panelOpen);
      });
    }
  }, {
    key: "ngAfterContentInit",
    value: function ngAfterContentInit() {
      var _this4 = this;

      this._initKeyManager();

      this._selectionModel.changed.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_20__["takeUntil"])(this._destroy)).subscribe(function (event) {
        event.added.forEach(function (option) {
          return option.select();
        });
        event.removed.forEach(function (option) {
          return option.deselect();
        });
      });

      this.options.changes.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_20__["startWith"])(null), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_20__["takeUntil"])(this._destroy)).subscribe(function () {
        _this4._resetOptions();

        _this4._initializeSelection();
      });
    }
  }, {
    key: "ngDoCheck",
    value: function ngDoCheck() {
      var newAriaLabelledby = this._getTriggerAriaLabelledby(); // We have to manage setting the `aria-labelledby` ourselves, because part of its value
      // is computed as a result of a content query which can cause this binding to trigger a
      // "changed after checked" error.


      if (newAriaLabelledby !== this._triggerAriaLabelledBy) {
        var element = this._elementRef.nativeElement;
        this._triggerAriaLabelledBy = newAriaLabelledby;

        if (newAriaLabelledby) {
          element.setAttribute('aria-labelledby', newAriaLabelledby);
        } else {
          element.removeAttribute('aria-labelledby');
        }
      }

      if (this.ngControl) {
        this.updateErrorState();
      }
    }
  }, {
    key: "ngOnChanges",
    value: function ngOnChanges(changes) {
      // Updating the disabled state is handled by `mixinDisabled`, but we need to additionally let
      // the parent form field know to run change detection when the disabled state changes.
      if (changes['disabled']) {
        this.stateChanges.next();
      }

      if (changes['typeaheadDebounceInterval'] && this._keyManager) {
        this._keyManager.withTypeAhead(this._typeaheadDebounceInterval);
      }
    }
  }, {
    key: "ngOnDestroy",
    value: function ngOnDestroy() {
      this._destroy.next();

      this._destroy.complete();

      this.stateChanges.complete();
    }
    /** Toggles the overlay panel open or closed. */

  }, {
    key: "toggle",
    value: function toggle() {
      this.panelOpen ? this.close() : this.open();
    }
    /** Opens the overlay panel. */

  }, {
    key: "open",
    value: function open() {
      if (this._canOpen()) {
        this._panelOpen = true;

        this._keyManager.withHorizontalOrientation(null);

        this._highlightCorrectOption();

        this._changeDetectorRef.markForCheck();
      }
    }
    /** Closes the overlay panel and focuses the host element. */

  }, {
    key: "close",
    value: function close() {
      if (this._panelOpen) {
        this._panelOpen = false;

        this._keyManager.withHorizontalOrientation(this._isRtl() ? 'rtl' : 'ltr');

        this._changeDetectorRef.markForCheck();

        this._onTouched();
      }
    }
    /**
     * Sets the select's value. Part of the ControlValueAccessor interface
     * required to integrate with Angular's core forms API.
     *
     * @param value New value to be written to the model.
     */

  }, {
    key: "writeValue",
    value: function writeValue(value) {
      this.value = value;
    }
    /**
     * Saves a callback function to be invoked when the select's value
     * changes from user input. Part of the ControlValueAccessor interface
     * required to integrate with Angular's core forms API.
     *
     * @param fn Callback to be triggered when the value changes.
     */

  }, {
    key: "registerOnChange",
    value: function registerOnChange(fn) {
      this._onChange = fn;
    }
    /**
     * Saves a callback function to be invoked when the select is blurred
     * by the user. Part of the ControlValueAccessor interface required
     * to integrate with Angular's core forms API.
     *
     * @param fn Callback to be triggered when the component has been touched.
     */

  }, {
    key: "registerOnTouched",
    value: function registerOnTouched(fn) {
      this._onTouched = fn;
    }
    /**
     * Disables the select. Part of the ControlValueAccessor interface required
     * to integrate with Angular's core forms API.
     *
     * @param isDisabled Sets whether the component is disabled.
     */

  }, {
    key: "setDisabledState",
    value: function setDisabledState(isDisabled) {
      this.disabled = isDisabled;

      this._changeDetectorRef.markForCheck();

      this.stateChanges.next();
    }
    /** Whether or not the overlay panel is open. */

  }, {
    key: "panelOpen",
    get: function get() {
      return this._panelOpen;
    }
    /** The currently selected option. */

  }, {
    key: "selected",
    get: function get() {
      return this.multiple ? this._selectionModel.selected : this._selectionModel.selected[0];
    }
    /** The value displayed in the trigger. */

  }, {
    key: "triggerValue",
    get: function get() {
      if (this.empty) {
        return '';
      }

      if (this._multiple) {
        var selectedOptions = this._selectionModel.selected.map(function (option) {
          return option.viewValue;
        });

        if (this._isRtl()) {
          selectedOptions.reverse();
        } // TODO(crisbeto): delimiter should be configurable for proper localization.


        return selectedOptions.join(', ');
      }

      return this._selectionModel.selected[0].viewValue;
    }
    /** Whether the element is in RTL mode. */

  }, {
    key: "_isRtl",
    value: function _isRtl() {
      return this._dir ? this._dir.value === 'rtl' : false;
    }
    /** Handles all keydown events on the select. */

  }, {
    key: "_handleKeydown",
    value: function _handleKeydown(event) {
      if (!this.disabled) {
        this.panelOpen ? this._handleOpenKeydown(event) : this._handleClosedKeydown(event);
      }
    }
    /** Handles keyboard events while the select is closed. */

  }, {
    key: "_handleClosedKeydown",
    value: function _handleClosedKeydown(event) {
      var keyCode = event.keyCode;
      var isArrowKey = keyCode === _angular_cdk_keycodes__WEBPACK_IMPORTED_MODULE_17__["DOWN_ARROW"] || keyCode === _angular_cdk_keycodes__WEBPACK_IMPORTED_MODULE_17__["UP_ARROW"] || keyCode === _angular_cdk_keycodes__WEBPACK_IMPORTED_MODULE_17__["LEFT_ARROW"] || keyCode === _angular_cdk_keycodes__WEBPACK_IMPORTED_MODULE_17__["RIGHT_ARROW"];
      var isOpenKey = keyCode === _angular_cdk_keycodes__WEBPACK_IMPORTED_MODULE_17__["ENTER"] || keyCode === _angular_cdk_keycodes__WEBPACK_IMPORTED_MODULE_17__["SPACE"];
      var manager = this._keyManager; // Open the select on ALT + arrow key to match the native <select>

      if (!manager.isTyping() && isOpenKey && !Object(_angular_cdk_keycodes__WEBPACK_IMPORTED_MODULE_17__["hasModifierKey"])(event) || (this.multiple || event.altKey) && isArrowKey) {
        event.preventDefault(); // prevents the page from scrolling down when pressing space

        this.open();
      } else if (!this.multiple) {
        var previouslySelectedOption = this.selected;
        manager.onKeydown(event);
        var selectedOption = this.selected; // Since the value has changed, we need to announce it ourselves.

        if (selectedOption && previouslySelectedOption !== selectedOption) {
          // We set a duration on the live announcement, because we want the live element to be
          // cleared after a while so that users can't navigate to it using the arrow keys.
          this._liveAnnouncer.announce(selectedOption.viewValue, 10000);
        }
      }
    }
    /** Handles keyboard events when the selected is open. */

  }, {
    key: "_handleOpenKeydown",
    value: function _handleOpenKeydown(event) {
      var manager = this._keyManager;
      var keyCode = event.keyCode;
      var isArrowKey = keyCode === _angular_cdk_keycodes__WEBPACK_IMPORTED_MODULE_17__["DOWN_ARROW"] || keyCode === _angular_cdk_keycodes__WEBPACK_IMPORTED_MODULE_17__["UP_ARROW"];
      var isTyping = manager.isTyping();

      if (isArrowKey && event.altKey) {
        // Close the select on ALT + arrow key to match the native <select>
        event.preventDefault();
        this.close(); // Don't do anything in this case if the user is typing,
        // because the typing sequence can include the space key.
      } else if (!isTyping && (keyCode === _angular_cdk_keycodes__WEBPACK_IMPORTED_MODULE_17__["ENTER"] || keyCode === _angular_cdk_keycodes__WEBPACK_IMPORTED_MODULE_17__["SPACE"]) && manager.activeItem && !Object(_angular_cdk_keycodes__WEBPACK_IMPORTED_MODULE_17__["hasModifierKey"])(event)) {
        event.preventDefault();

        manager.activeItem._selectViaInteraction();
      } else if (!isTyping && this._multiple && keyCode === _angular_cdk_keycodes__WEBPACK_IMPORTED_MODULE_17__["A"] && event.ctrlKey) {
        event.preventDefault();
        var hasDeselectedOptions = this.options.some(function (opt) {
          return !opt.disabled && !opt.selected;
        });
        this.options.forEach(function (option) {
          if (!option.disabled) {
            hasDeselectedOptions ? option.select() : option.deselect();
          }
        });
      } else {
        var previouslyFocusedIndex = manager.activeItemIndex;
        manager.onKeydown(event);

        if (this._multiple && isArrowKey && event.shiftKey && manager.activeItem && manager.activeItemIndex !== previouslyFocusedIndex) {
          manager.activeItem._selectViaInteraction();
        }
      }
    }
  }, {
    key: "_onFocus",
    value: function _onFocus() {
      if (!this.disabled) {
        this._focused = true;
        this.stateChanges.next();
      }
    }
    /**
     * Calls the touched callback only if the panel is closed. Otherwise, the trigger will
     * "blur" to the panel when it opens, causing a false positive.
     */

  }, {
    key: "_onBlur",
    value: function _onBlur() {
      this._focused = false;

      if (!this.disabled && !this.panelOpen) {
        this._onTouched();

        this._changeDetectorRef.markForCheck();

        this.stateChanges.next();
      }
    }
    /**
     * Callback that is invoked when the overlay panel has been attached.
     */

  }, {
    key: "_onAttached",
    value: function _onAttached() {
      var _this5 = this;

      this.overlayDir.positionChange.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_20__["take"])(1)).subscribe(function () {
        _this5._changeDetectorRef.detectChanges();

        _this5._positioningSettled();
      });
    }
    /** Returns the theme to be used on the panel. */

  }, {
    key: "_getPanelTheme",
    value: function _getPanelTheme() {
      return this._parentFormField ? "mat-".concat(this._parentFormField.color) : '';
    }
    /** Whether the select has a value. */

  }, {
    key: "empty",
    get: function get() {
      return !this._selectionModel || this._selectionModel.isEmpty();
    }
  }, {
    key: "_initializeSelection",
    value: function _initializeSelection() {
      var _this6 = this;

      // Defer setting the value in order to avoid the "Expression
      // has changed after it was checked" errors from Angular.
      Promise.resolve().then(function () {
        _this6._setSelectionByValue(_this6.ngControl ? _this6.ngControl.value : _this6._value);

        _this6.stateChanges.next();
      });
    }
    /**
     * Sets the selected option based on a value. If no option can be
     * found with the designated value, the select trigger is cleared.
     */

  }, {
    key: "_setSelectionByValue",
    value: function _setSelectionByValue(value) {
      var _this7 = this;

      this._selectionModel.selected.forEach(function (option) {
        return option.setInactiveStyles();
      });

      this._selectionModel.clear();

      if (this.multiple && value) {
        if (!Array.isArray(value) && (typeof ngDevMode === 'undefined' || ngDevMode)) {
          throw getMatSelectNonArrayValueError();
        }

        value.forEach(function (currentValue) {
          return _this7._selectValue(currentValue);
        });

        this._sortValues();
      } else {
        var correspondingOption = this._selectValue(value); // Shift focus to the active item. Note that we shouldn't do this in multiple
        // mode, because we don't know what option the user interacted with last.


        if (correspondingOption) {
          this._keyManager.updateActiveItem(correspondingOption);
        } else if (!this.panelOpen) {
          // Otherwise reset the highlighted option. Note that we only want to do this while
          // closed, because doing it while open can shift the user's focus unnecessarily.
          this._keyManager.updateActiveItem(-1);
        }
      }

      this._changeDetectorRef.markForCheck();
    }
    /**
     * Finds and selects and option based on its value.
     * @returns Option that has the corresponding value.
     */

  }, {
    key: "_selectValue",
    value: function _selectValue(value) {
      var _this8 = this;

      var correspondingOption = this.options.find(function (option) {
        try {
          // Treat null as a special reset value.
          return option.value != null && _this8._compareWith(option.value, value);
        } catch (error) {
          if (typeof ngDevMode === 'undefined' || ngDevMode) {
            // Notify developers of errors in their comparator.
            console.warn(error);
          }

          return false;
        }
      });

      if (correspondingOption) {
        this._selectionModel.select(correspondingOption);
      }

      return correspondingOption;
    }
    /** Sets up a key manager to listen to keyboard events on the overlay panel. */

  }, {
    key: "_initKeyManager",
    value: function _initKeyManager() {
      var _this9 = this;

      this._keyManager = new _angular_cdk_a11y__WEBPACK_IMPORTED_MODULE_13__["ActiveDescendantKeyManager"](this.options).withTypeAhead(this._typeaheadDebounceInterval).withVerticalOrientation().withHorizontalOrientation(this._isRtl() ? 'rtl' : 'ltr').withHomeAndEnd().withAllowedModifierKeys(['shiftKey']);

      this._keyManager.tabOut.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_20__["takeUntil"])(this._destroy)).subscribe(function () {
        if (_this9.panelOpen) {
          // Select the active item when tabbing away. This is consistent with how the native
          // select behaves. Note that we only want to do this in single selection mode.
          if (!_this9.multiple && _this9._keyManager.activeItem) {
            _this9._keyManager.activeItem._selectViaInteraction();
          } // Restore focus to the trigger before closing. Ensures that the focus
          // position won't be lost if the user got focus into the overlay.


          _this9.focus();

          _this9.close();
        }
      });

      this._keyManager.change.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_20__["takeUntil"])(this._destroy)).subscribe(function () {
        if (_this9._panelOpen && _this9.panel) {
          _this9._scrollOptionIntoView(_this9._keyManager.activeItemIndex || 0);
        } else if (!_this9._panelOpen && !_this9.multiple && _this9._keyManager.activeItem) {
          _this9._keyManager.activeItem._selectViaInteraction();
        }
      });
    }
    /** Drops current option subscriptions and IDs and resets from scratch. */

  }, {
    key: "_resetOptions",
    value: function _resetOptions() {
      var _this0 = this;

      var changedOrDestroyed = Object(rxjs__WEBPACK_IMPORTED_MODULE_19__["merge"])(this.options.changes, this._destroy);
      this.optionSelectionChanges.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_20__["takeUntil"])(changedOrDestroyed)).subscribe(function (event) {
        _this0._onSelect(event.source, event.isUserInput);

        if (event.isUserInput && !_this0.multiple && _this0._panelOpen) {
          _this0.close();

          _this0.focus();
        }
      }); // Listen to changes in the internal state of the options and react accordingly.
      // Handles cases like the labels of the selected options changing.

      rxjs__WEBPACK_IMPORTED_MODULE_19__["merge"].apply(void 0, Object(_home_runner_work_learn_angular_learn_angular_node_modules_babel_runtime_helpers_esm_toConsumableArray__WEBPACK_IMPORTED_MODULE_1__["default"])(this.options.map(function (option) {
        return option._stateChanges;
      }))).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_20__["takeUntil"])(changedOrDestroyed)).subscribe(function () {
        _this0._changeDetectorRef.markForCheck();

        _this0.stateChanges.next();
      });
    }
    /** Invoked when an option is clicked. */

  }, {
    key: "_onSelect",
    value: function _onSelect(option, isUserInput) {
      var wasSelected = this._selectionModel.isSelected(option);

      if (option.value == null && !this._multiple) {
        option.deselect();

        this._selectionModel.clear();

        if (this.value != null) {
          this._propagateChanges(option.value);
        }
      } else {
        if (wasSelected !== option.selected) {
          option.selected ? this._selectionModel.select(option) : this._selectionModel.deselect(option);
        }

        if (isUserInput) {
          this._keyManager.setActiveItem(option);
        }

        if (this.multiple) {
          this._sortValues();

          if (isUserInput) {
            // In case the user selected the option with their mouse, we
            // want to restore focus back to the trigger, in order to
            // prevent the select keyboard controls from clashing with
            // the ones from `mat-option`.
            this.focus();
          }
        }
      }

      if (wasSelected !== this._selectionModel.isSelected(option)) {
        this._propagateChanges();
      }

      this.stateChanges.next();
    }
    /** Sorts the selected values in the selected based on their order in the panel. */

  }, {
    key: "_sortValues",
    value: function _sortValues() {
      var _this1 = this;

      if (this.multiple) {
        var options = this.options.toArray();

        this._selectionModel.sort(function (a, b) {
          return _this1.sortComparator ? _this1.sortComparator(a, b, options) : options.indexOf(a) - options.indexOf(b);
        });

        this.stateChanges.next();
      }
    }
    /** Emits change event to set the model value. */

  }, {
    key: "_propagateChanges",
    value: function _propagateChanges(fallbackValue) {
      var valueToEmit = null;

      if (this.multiple) {
        valueToEmit = this.selected.map(function (option) {
          return option.value;
        });
      } else {
        valueToEmit = this.selected ? this.selected.value : fallbackValue;
      }

      this._value = valueToEmit;
      this.valueChange.emit(valueToEmit);

      this._onChange(valueToEmit);

      this.selectionChange.emit(this._getChangeEvent(valueToEmit));

      this._changeDetectorRef.markForCheck();
    }
    /**
     * Highlights the selected item. If no option is selected, it will highlight
     * the first item instead.
     */

  }, {
    key: "_highlightCorrectOption",
    value: function _highlightCorrectOption() {
      if (this._keyManager) {
        if (this.empty) {
          this._keyManager.setFirstItemActive();
        } else {
          this._keyManager.setActiveItem(this._selectionModel.selected[0]);
        }
      }
    }
    /** Whether the panel is allowed to open. */

  }, {
    key: "_canOpen",
    value: function _canOpen() {
      var _a;

      return !this._panelOpen && !this.disabled && ((_a = this.options) === null || _a === void 0 ? void 0 : _a.length) > 0;
    }
    /** Focuses the select element. */

  }, {
    key: "focus",
    value: function focus(options) {
      this._elementRef.nativeElement.focus(options);
    }
    /** Gets the aria-labelledby for the select panel. */

  }, {
    key: "_getPanelAriaLabelledby",
    value: function _getPanelAriaLabelledby() {
      if (this.ariaLabel) {
        return null;
      }

      var labelId = this._getLabelId();

      return this.ariaLabelledby ? labelId + ' ' + this.ariaLabelledby : labelId;
    }
    /** Determines the `aria-activedescendant` to be set on the host. */

  }, {
    key: "_getAriaActiveDescendant",
    value: function _getAriaActiveDescendant() {
      if (this.panelOpen && this._keyManager && this._keyManager.activeItem) {
        return this._keyManager.activeItem.id;
      }

      return null;
    }
    /** Gets the ID of the element that is labelling the select. */

  }, {
    key: "_getLabelId",
    value: function _getLabelId() {
      var _a;

      return ((_a = this._parentFormField) === null || _a === void 0 ? void 0 : _a.getLabelId()) || '';
    }
    /** Gets the aria-labelledby of the select component trigger. */

  }, {
    key: "_getTriggerAriaLabelledby",
    value: function _getTriggerAriaLabelledby() {
      if (this.ariaLabel) {
        return null;
      }

      var value = this._getLabelId() + ' ' + this._valueId;

      if (this.ariaLabelledby) {
        value += ' ' + this.ariaLabelledby;
      }

      return value;
    }
    /** Called when the overlay panel is done animating. */

  }, {
    key: "_panelDoneAnimating",
    value: function _panelDoneAnimating(isOpen) {
      this.openedChange.emit(isOpen);
    }
    /**
     * Implemented as part of MatFormFieldControl.
     * @docs-private
     */

  }, {
    key: "setDescribedByIds",
    value: function setDescribedByIds(ids) {
      this._ariaDescribedby = ids.join(' ');
    }
    /**
     * Implemented as part of MatFormFieldControl.
     * @docs-private
     */

  }, {
    key: "onContainerClick",
    value: function onContainerClick() {
      this.focus();
      this.open();
    }
    /**
     * Implemented as part of MatFormFieldControl.
     * @docs-private
     */

  }, {
    key: "shouldLabelFloat",
    get: function get() {
      return this._panelOpen || !this.empty;
    }
  }]);
}(_MatSelectMixinBase);

_MatSelectBase.ɵfac = function _MatSelectBase_Factory(t) {
  return new (t || _MatSelectBase)(_angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵdirectiveInject"](_angular_cdk_scrolling__WEBPACK_IMPORTED_MODULE_12__["ViewportRuler"]), _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_9__["ChangeDetectorRef"]), _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_9__["NgZone"]), _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵdirectiveInject"](_angular_material_core__WEBPACK_IMPORTED_MODULE_10__["ErrorStateMatcher"]), _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_9__["ElementRef"]), _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵdirectiveInject"](_angular_cdk_bidi__WEBPACK_IMPORTED_MODULE_14__["Directionality"], 8), _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵdirectiveInject"](_angular_forms__WEBPACK_IMPORTED_MODULE_18__["NgForm"], 8), _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵdirectiveInject"](_angular_forms__WEBPACK_IMPORTED_MODULE_18__["FormGroupDirective"], 8), _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵdirectiveInject"](_angular_material_form_field__WEBPACK_IMPORTED_MODULE_11__["MAT_FORM_FIELD"], 8), _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵdirectiveInject"](_angular_forms__WEBPACK_IMPORTED_MODULE_18__["NgControl"], 10), _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵinjectAttribute"]('tabindex'), _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵdirectiveInject"](MAT_SELECT_SCROLL_STRATEGY), _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵdirectiveInject"](_angular_cdk_a11y__WEBPACK_IMPORTED_MODULE_13__["LiveAnnouncer"]), _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵdirectiveInject"](MAT_SELECT_CONFIG, 8));
};

_MatSelectBase.ɵdir = _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵdefineDirective"]({
  type: _MatSelectBase,
  viewQuery: function _MatSelectBase_Query(rf, ctx) {
    if (rf & 1) {
      _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵviewQuery"](_c0, 1);
      _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵviewQuery"](_c1, 1);
      _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵviewQuery"](_angular_cdk_overlay__WEBPACK_IMPORTED_MODULE_7__["CdkConnectedOverlay"], 1);
    }

    if (rf & 2) {
      var _t;

      _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵloadQuery"]()) && (ctx.trigger = _t.first);
      _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵloadQuery"]()) && (ctx.panel = _t.first);
      _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵloadQuery"]()) && (ctx.overlayDir = _t.first);
    }
  },
  inputs: {
    ariaLabel: ["aria-label", "ariaLabel"],
    id: "id",
    placeholder: "placeholder",
    required: "required",
    multiple: "multiple",
    disableOptionCentering: "disableOptionCentering",
    compareWith: "compareWith",
    value: "value",
    typeaheadDebounceInterval: "typeaheadDebounceInterval",
    panelClass: "panelClass",
    ariaLabelledby: ["aria-labelledby", "ariaLabelledby"],
    errorStateMatcher: "errorStateMatcher",
    sortComparator: "sortComparator"
  },
  outputs: {
    openedChange: "openedChange",
    _openedStream: "opened",
    _closedStream: "closed",
    selectionChange: "selectionChange",
    valueChange: "valueChange"
  },
  features: [_angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵInheritDefinitionFeature"], _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵNgOnChangesFeature"]]
});

_MatSelectBase.ctorParameters = function () {
  return [{
    type: _angular_cdk_scrolling__WEBPACK_IMPORTED_MODULE_12__["ViewportRuler"]
  }, {
    type: _angular_core__WEBPACK_IMPORTED_MODULE_9__["ChangeDetectorRef"]
  }, {
    type: _angular_core__WEBPACK_IMPORTED_MODULE_9__["NgZone"]
  }, {
    type: _angular_material_core__WEBPACK_IMPORTED_MODULE_10__["ErrorStateMatcher"]
  }, {
    type: _angular_core__WEBPACK_IMPORTED_MODULE_9__["ElementRef"]
  }, {
    type: _angular_cdk_bidi__WEBPACK_IMPORTED_MODULE_14__["Directionality"],
    decorators: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_9__["Optional"]
    }]
  }, {
    type: _angular_forms__WEBPACK_IMPORTED_MODULE_18__["NgForm"],
    decorators: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_9__["Optional"]
    }]
  }, {
    type: _angular_forms__WEBPACK_IMPORTED_MODULE_18__["FormGroupDirective"],
    decorators: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_9__["Optional"]
    }]
  }, {
    type: _angular_material_form_field__WEBPACK_IMPORTED_MODULE_11__["MatFormField"],
    decorators: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_9__["Optional"]
    }, {
      type: _angular_core__WEBPACK_IMPORTED_MODULE_9__["Inject"],
      args: [_angular_material_form_field__WEBPACK_IMPORTED_MODULE_11__["MAT_FORM_FIELD"]]
    }]
  }, {
    type: _angular_forms__WEBPACK_IMPORTED_MODULE_18__["NgControl"],
    decorators: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_9__["Self"]
    }, {
      type: _angular_core__WEBPACK_IMPORTED_MODULE_9__["Optional"]
    }]
  }, {
    type: String,
    decorators: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_9__["Attribute"],
      args: ['tabindex']
    }]
  }, {
    type: undefined,
    decorators: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_9__["Inject"],
      args: [MAT_SELECT_SCROLL_STRATEGY]
    }]
  }, {
    type: _angular_cdk_a11y__WEBPACK_IMPORTED_MODULE_13__["LiveAnnouncer"]
  }, {
    type: undefined,
    decorators: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_9__["Optional"]
    }, {
      type: _angular_core__WEBPACK_IMPORTED_MODULE_9__["Inject"],
      args: [MAT_SELECT_CONFIG]
    }]
  }];
};

_MatSelectBase.propDecorators = {
  trigger: [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_9__["ViewChild"],
    args: ['trigger']
  }],
  panel: [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_9__["ViewChild"],
    args: ['panel']
  }],
  overlayDir: [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_9__["ViewChild"],
    args: [_angular_cdk_overlay__WEBPACK_IMPORTED_MODULE_7__["CdkConnectedOverlay"]]
  }],
  panelClass: [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_9__["Input"]
  }],
  placeholder: [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_9__["Input"]
  }],
  required: [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_9__["Input"]
  }],
  multiple: [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_9__["Input"]
  }],
  disableOptionCentering: [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_9__["Input"]
  }],
  compareWith: [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_9__["Input"]
  }],
  value: [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_9__["Input"]
  }],
  ariaLabel: [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_9__["Input"],
    args: ['aria-label']
  }],
  ariaLabelledby: [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_9__["Input"],
    args: ['aria-labelledby']
  }],
  errorStateMatcher: [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_9__["Input"]
  }],
  typeaheadDebounceInterval: [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_9__["Input"]
  }],
  sortComparator: [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_9__["Input"]
  }],
  id: [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_9__["Input"]
  }],
  openedChange: [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_9__["Output"]
  }],
  _openedStream: [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_9__["Output"],
    args: ['opened']
  }],
  _closedStream: [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_9__["Output"],
    args: ['closed']
  }],
  selectionChange: [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_9__["Output"]
  }],
  valueChange: [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_9__["Output"]
  }]
};

(function () {
  (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵsetClassMetadata"](_MatSelectBase, [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_9__["Directive"]
  }], function () {
    return [{
      type: _angular_cdk_scrolling__WEBPACK_IMPORTED_MODULE_12__["ViewportRuler"]
    }, {
      type: _angular_core__WEBPACK_IMPORTED_MODULE_9__["ChangeDetectorRef"]
    }, {
      type: _angular_core__WEBPACK_IMPORTED_MODULE_9__["NgZone"]
    }, {
      type: _angular_material_core__WEBPACK_IMPORTED_MODULE_10__["ErrorStateMatcher"]
    }, {
      type: _angular_core__WEBPACK_IMPORTED_MODULE_9__["ElementRef"]
    }, {
      type: _angular_cdk_bidi__WEBPACK_IMPORTED_MODULE_14__["Directionality"],
      decorators: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_9__["Optional"]
      }]
    }, {
      type: _angular_forms__WEBPACK_IMPORTED_MODULE_18__["NgForm"],
      decorators: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_9__["Optional"]
      }]
    }, {
      type: _angular_forms__WEBPACK_IMPORTED_MODULE_18__["FormGroupDirective"],
      decorators: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_9__["Optional"]
      }]
    }, {
      type: _angular_material_form_field__WEBPACK_IMPORTED_MODULE_11__["MatFormField"],
      decorators: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_9__["Optional"]
      }, {
        type: _angular_core__WEBPACK_IMPORTED_MODULE_9__["Inject"],
        args: [_angular_material_form_field__WEBPACK_IMPORTED_MODULE_11__["MAT_FORM_FIELD"]]
      }]
    }, {
      type: _angular_forms__WEBPACK_IMPORTED_MODULE_18__["NgControl"],
      decorators: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_9__["Self"]
      }, {
        type: _angular_core__WEBPACK_IMPORTED_MODULE_9__["Optional"]
      }]
    }, {
      type: String,
      decorators: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_9__["Attribute"],
        args: ['tabindex']
      }]
    }, {
      type: undefined,
      decorators: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_9__["Inject"],
        args: [MAT_SELECT_SCROLL_STRATEGY]
      }]
    }, {
      type: _angular_cdk_a11y__WEBPACK_IMPORTED_MODULE_13__["LiveAnnouncer"]
    }, {
      type: undefined,
      decorators: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_9__["Optional"]
      }, {
        type: _angular_core__WEBPACK_IMPORTED_MODULE_9__["Inject"],
        args: [MAT_SELECT_CONFIG]
      }]
    }];
  }, {
    ariaLabel: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_9__["Input"],
      args: ['aria-label']
    }],
    openedChange: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_9__["Output"]
    }],
    _openedStream: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_9__["Output"],
      args: ['opened']
    }],
    _closedStream: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_9__["Output"],
      args: ['closed']
    }],
    selectionChange: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_9__["Output"]
    }],
    valueChange: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_9__["Output"]
    }],
    id: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_9__["Input"]
    }],
    placeholder: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_9__["Input"]
    }],
    required: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_9__["Input"]
    }],
    multiple: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_9__["Input"]
    }],
    disableOptionCentering: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_9__["Input"]
    }],
    compareWith: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_9__["Input"]
    }],
    value: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_9__["Input"]
    }],
    typeaheadDebounceInterval: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_9__["Input"]
    }],
    trigger: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_9__["ViewChild"],
      args: ['trigger']
    }],
    panel: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_9__["ViewChild"],
      args: ['panel']
    }],
    overlayDir: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_9__["ViewChild"],
      args: [_angular_cdk_overlay__WEBPACK_IMPORTED_MODULE_7__["CdkConnectedOverlay"]]
    }],
    panelClass: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_9__["Input"]
    }],
    ariaLabelledby: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_9__["Input"],
      args: ['aria-labelledby']
    }],
    errorStateMatcher: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_9__["Input"]
    }],
    sortComparator: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_9__["Input"]
    }]
  });
})();

var MatSelect = /*#__PURE__*/function (_MatSelectBase2) {
  function MatSelect() {
    var _this10;

    Object(_home_runner_work_learn_angular_learn_angular_node_modules_babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_6__["default"])(this, MatSelect);

    _this10 = _callSuper(this, MatSelect, arguments);
    /** The scroll position of the overlay panel, calculated to center the selected option. */

    _this10._scrollTop = 0;
    /** The cached font-size of the trigger element. */

    _this10._triggerFontSize = 0;
    /** The value of the select panel's transform-origin property. */

    _this10._transformOrigin = 'top';
    /**
     * The y-offset of the overlay panel in relation to the trigger's top start corner.
     * This must be adjusted to align the selected option text over the trigger text.
     * when the panel opens. Will change based on the y-position of the selected option.
     */

    _this10._offsetY = 0;
    _this10._positions = [{
      originX: 'start',
      originY: 'top',
      overlayX: 'start',
      overlayY: 'top'
    }, {
      originX: 'start',
      originY: 'bottom',
      overlayX: 'start',
      overlayY: 'bottom'
    }];
    return _this10;
  }
  /**
   * Calculates the scroll position of the select's overlay panel.
   *
   * Attempts to center the selected option in the panel. If the option is
   * too high or too low in the panel to be scrolled to the center, it clamps the
   * scroll position to the min or max scroll positions respectively.
   */


  Object(_home_runner_work_learn_angular_learn_angular_node_modules_babel_runtime_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_4__["default"])(MatSelect, _MatSelectBase2);

  return Object(_home_runner_work_learn_angular_learn_angular_node_modules_babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_5__["default"])(MatSelect, [{
    key: "_calculateOverlayScroll",
    value: function _calculateOverlayScroll(selectedIndex, scrollBuffer, maxScroll) {
      var itemHeight = this._getItemHeight();

      var optionOffsetFromScrollTop = itemHeight * selectedIndex;
      var halfOptionHeight = itemHeight / 2; // Starts at the optionOffsetFromScrollTop, which scrolls the option to the top of the
      // scroll container, then subtracts the scroll buffer to scroll the option down to
      // the center of the overlay panel. Half the option height must be re-added to the
      // scrollTop so the option is centered based on its middle, not its top edge.

      var optimalScrollPosition = optionOffsetFromScrollTop - scrollBuffer + halfOptionHeight;
      return Math.min(Math.max(0, optimalScrollPosition), maxScroll);
    }
  }, {
    key: "ngOnInit",
    value: function ngOnInit() {
      var _this11 = this;

      Object(_home_runner_work_learn_angular_learn_angular_node_modules_babel_runtime_helpers_esm_get__WEBPACK_IMPORTED_MODULE_0__["default"])(Object(_home_runner_work_learn_angular_learn_angular_node_modules_babel_runtime_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_3__["default"])(MatSelect.prototype), "ngOnInit", this).call(this);

      this._viewportRuler.change().pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_20__["takeUntil"])(this._destroy)).subscribe(function () {
        if (_this11.panelOpen) {
          _this11._triggerRect = _this11.trigger.nativeElement.getBoundingClientRect();

          _this11._changeDetectorRef.markForCheck();
        }
      });
    }
  }, {
    key: "open",
    value: function open() {
      var _this12 = this;

      if (Object(_home_runner_work_learn_angular_learn_angular_node_modules_babel_runtime_helpers_esm_get__WEBPACK_IMPORTED_MODULE_0__["default"])(Object(_home_runner_work_learn_angular_learn_angular_node_modules_babel_runtime_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_3__["default"])(MatSelect.prototype), "_canOpen", this).call(this)) {
        Object(_home_runner_work_learn_angular_learn_angular_node_modules_babel_runtime_helpers_esm_get__WEBPACK_IMPORTED_MODULE_0__["default"])(Object(_home_runner_work_learn_angular_learn_angular_node_modules_babel_runtime_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_3__["default"])(MatSelect.prototype), "open", this).call(this);

        this._triggerRect = this.trigger.nativeElement.getBoundingClientRect(); // Note: The computed font-size will be a string pixel value (e.g. "16px").
        // `parseInt` ignores the trailing 'px' and converts this to a number.

        this._triggerFontSize = parseInt(getComputedStyle(this.trigger.nativeElement).fontSize || '0');

        this._calculateOverlayPosition(); // Set the font size on the panel element once it exists.


        this._ngZone.onStable.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_20__["take"])(1)).subscribe(function () {
          if (_this12._triggerFontSize && _this12.overlayDir.overlayRef && _this12.overlayDir.overlayRef.overlayElement) {
            _this12.overlayDir.overlayRef.overlayElement.style.fontSize = "".concat(_this12._triggerFontSize, "px");
          }
        });
      }
    }
    /** Scrolls the active option into view. */

  }, {
    key: "_scrollOptionIntoView",
    value: function _scrollOptionIntoView(index) {
      var labelCount = Object(_angular_material_core__WEBPACK_IMPORTED_MODULE_10__["_countGroupLabelsBeforeOption"])(index, this.options, this.optionGroups);

      var itemHeight = this._getItemHeight();

      this.panel.nativeElement.scrollTop = Object(_angular_material_core__WEBPACK_IMPORTED_MODULE_10__["_getOptionScrollPosition"])((index + labelCount) * itemHeight, itemHeight, this.panel.nativeElement.scrollTop, SELECT_PANEL_MAX_HEIGHT);
    }
  }, {
    key: "_positioningSettled",
    value: function _positioningSettled() {
      this._calculateOverlayOffsetX();

      this.panel.nativeElement.scrollTop = this._scrollTop;
    }
  }, {
    key: "_panelDoneAnimating",
    value: function _panelDoneAnimating(isOpen) {
      if (this.panelOpen) {
        this._scrollTop = 0;
      } else {
        this.overlayDir.offsetX = 0;

        this._changeDetectorRef.markForCheck();
      }

      Object(_home_runner_work_learn_angular_learn_angular_node_modules_babel_runtime_helpers_esm_get__WEBPACK_IMPORTED_MODULE_0__["default"])(Object(_home_runner_work_learn_angular_learn_angular_node_modules_babel_runtime_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_3__["default"])(MatSelect.prototype), "_panelDoneAnimating", this).call(this, isOpen);
    }
  }, {
    key: "_getChangeEvent",
    value: function _getChangeEvent(value) {
      return new MatSelectChange(this, value);
    }
    /**
     * Sets the x-offset of the overlay panel in relation to the trigger's top start corner.
     * This must be adjusted to align the selected option text over the trigger text when
     * the panel opens. Will change based on LTR or RTL text direction. Note that the offset
     * can't be calculated until the panel has been attached, because we need to know the
     * content width in order to constrain the panel within the viewport.
     */

  }, {
    key: "_calculateOverlayOffsetX",
    value: function _calculateOverlayOffsetX() {
      var overlayRect = this.overlayDir.overlayRef.overlayElement.getBoundingClientRect();

      var viewportSize = this._viewportRuler.getViewportSize();

      var isRtl = this._isRtl();

      var paddingWidth = this.multiple ? SELECT_MULTIPLE_PANEL_PADDING_X + SELECT_PANEL_PADDING_X : SELECT_PANEL_PADDING_X * 2;
      var offsetX; // Adjust the offset, depending on the option padding.

      if (this.multiple) {
        offsetX = SELECT_MULTIPLE_PANEL_PADDING_X;
      } else {
        var selected = this._selectionModel.selected[0] || this.options.first;
        offsetX = selected && selected.group ? SELECT_PANEL_INDENT_PADDING_X : SELECT_PANEL_PADDING_X;
      } // Invert the offset in LTR.


      if (!isRtl) {
        offsetX *= -1;
      } // Determine how much the select overflows on each side.


      var leftOverflow = 0 - (overlayRect.left + offsetX - (isRtl ? paddingWidth : 0));
      var rightOverflow = overlayRect.right + offsetX - viewportSize.width + (isRtl ? 0 : paddingWidth); // If the element overflows on either side, reduce the offset to allow it to fit.

      if (leftOverflow > 0) {
        offsetX += leftOverflow + SELECT_PANEL_VIEWPORT_PADDING;
      } else if (rightOverflow > 0) {
        offsetX -= rightOverflow + SELECT_PANEL_VIEWPORT_PADDING;
      } // Set the offset directly in order to avoid having to go through change detection and
      // potentially triggering "changed after it was checked" errors. Round the value to avoid
      // blurry content in some browsers.


      this.overlayDir.offsetX = Math.round(offsetX);
      this.overlayDir.overlayRef.updatePosition();
    }
    /**
     * Calculates the y-offset of the select's overlay panel in relation to the
     * top start corner of the trigger. It has to be adjusted in order for the
     * selected option to be aligned over the trigger when the panel opens.
     */

  }, {
    key: "_calculateOverlayOffsetY",
    value: function _calculateOverlayOffsetY(selectedIndex, scrollBuffer, maxScroll) {
      var itemHeight = this._getItemHeight();

      var optionHeightAdjustment = (itemHeight - this._triggerRect.height) / 2;
      var maxOptionsDisplayed = Math.floor(SELECT_PANEL_MAX_HEIGHT / itemHeight);
      var optionOffsetFromPanelTop; // Disable offset if requested by user by returning 0 as value to offset

      if (this.disableOptionCentering) {
        return 0;
      }

      if (this._scrollTop === 0) {
        optionOffsetFromPanelTop = selectedIndex * itemHeight;
      } else if (this._scrollTop === maxScroll) {
        var firstDisplayedIndex = this._getItemCount() - maxOptionsDisplayed;
        var selectedDisplayIndex = selectedIndex - firstDisplayedIndex; // The first item is partially out of the viewport. Therefore we need to calculate what
        // portion of it is shown in the viewport and account for it in our offset.

        var partialItemHeight = itemHeight - (this._getItemCount() * itemHeight - SELECT_PANEL_MAX_HEIGHT) % itemHeight; // Because the panel height is longer than the height of the options alone,
        // there is always extra padding at the top or bottom of the panel. When
        // scrolled to the very bottom, this padding is at the top of the panel and
        // must be added to the offset.

        optionOffsetFromPanelTop = selectedDisplayIndex * itemHeight + partialItemHeight;
      } else {
        // If the option was scrolled to the middle of the panel using a scroll buffer,
        // its offset will be the scroll buffer minus the half height that was added to
        // center it.
        optionOffsetFromPanelTop = scrollBuffer - itemHeight / 2;
      } // The final offset is the option's offset from the top, adjusted for the height difference,
      // multiplied by -1 to ensure that the overlay moves in the correct direction up the page.
      // The value is rounded to prevent some browsers from blurring the content.


      return Math.round(optionOffsetFromPanelTop * -1 - optionHeightAdjustment);
    }
    /**
     * Checks that the attempted overlay position will fit within the viewport.
     * If it will not fit, tries to adjust the scroll position and the associated
     * y-offset so the panel can open fully on-screen. If it still won't fit,
     * sets the offset back to 0 to allow the fallback position to take over.
     */

  }, {
    key: "_checkOverlayWithinViewport",
    value: function _checkOverlayWithinViewport(maxScroll) {
      var itemHeight = this._getItemHeight();

      var viewportSize = this._viewportRuler.getViewportSize();

      var topSpaceAvailable = this._triggerRect.top - SELECT_PANEL_VIEWPORT_PADDING;
      var bottomSpaceAvailable = viewportSize.height - this._triggerRect.bottom - SELECT_PANEL_VIEWPORT_PADDING;
      var panelHeightTop = Math.abs(this._offsetY);
      var totalPanelHeight = Math.min(this._getItemCount() * itemHeight, SELECT_PANEL_MAX_HEIGHT);
      var panelHeightBottom = totalPanelHeight - panelHeightTop - this._triggerRect.height;

      if (panelHeightBottom > bottomSpaceAvailable) {
        this._adjustPanelUp(panelHeightBottom, bottomSpaceAvailable);
      } else if (panelHeightTop > topSpaceAvailable) {
        this._adjustPanelDown(panelHeightTop, topSpaceAvailable, maxScroll);
      } else {
        this._transformOrigin = this._getOriginBasedOnOption();
      }
    }
    /** Adjusts the overlay panel up to fit in the viewport. */

  }, {
    key: "_adjustPanelUp",
    value: function _adjustPanelUp(panelHeightBottom, bottomSpaceAvailable) {
      // Browsers ignore fractional scroll offsets, so we need to round.
      var distanceBelowViewport = Math.round(panelHeightBottom - bottomSpaceAvailable); // Scrolls the panel up by the distance it was extending past the boundary, then
      // adjusts the offset by that amount to move the panel up into the viewport.

      this._scrollTop -= distanceBelowViewport;
      this._offsetY -= distanceBelowViewport;
      this._transformOrigin = this._getOriginBasedOnOption(); // If the panel is scrolled to the very top, it won't be able to fit the panel
      // by scrolling, so set the offset to 0 to allow the fallback position to take
      // effect.

      if (this._scrollTop <= 0) {
        this._scrollTop = 0;
        this._offsetY = 0;
        this._transformOrigin = "50% bottom 0px";
      }
    }
    /** Adjusts the overlay panel down to fit in the viewport. */

  }, {
    key: "_adjustPanelDown",
    value: function _adjustPanelDown(panelHeightTop, topSpaceAvailable, maxScroll) {
      // Browsers ignore fractional scroll offsets, so we need to round.
      var distanceAboveViewport = Math.round(panelHeightTop - topSpaceAvailable); // Scrolls the panel down by the distance it was extending past the boundary, then
      // adjusts the offset by that amount to move the panel down into the viewport.

      this._scrollTop += distanceAboveViewport;
      this._offsetY += distanceAboveViewport;
      this._transformOrigin = this._getOriginBasedOnOption(); // If the panel is scrolled to the very bottom, it won't be able to fit the
      // panel by scrolling, so set the offset to 0 to allow the fallback position
      // to take effect.

      if (this._scrollTop >= maxScroll) {
        this._scrollTop = maxScroll;
        this._offsetY = 0;
        this._transformOrigin = "50% top 0px";
        return;
      }
    }
    /** Calculates the scroll position and x- and y-offsets of the overlay panel. */

  }, {
    key: "_calculateOverlayPosition",
    value: function _calculateOverlayPosition() {
      var itemHeight = this._getItemHeight();

      var items = this._getItemCount();

      var panelHeight = Math.min(items * itemHeight, SELECT_PANEL_MAX_HEIGHT);
      var scrollContainerHeight = items * itemHeight; // The farthest the panel can be scrolled before it hits the bottom

      var maxScroll = scrollContainerHeight - panelHeight; // If no value is selected we open the popup to the first item.

      var selectedOptionOffset;

      if (this.empty) {
        selectedOptionOffset = 0;
      } else {
        selectedOptionOffset = Math.max(this.options.toArray().indexOf(this._selectionModel.selected[0]), 0);
      }

      selectedOptionOffset += Object(_angular_material_core__WEBPACK_IMPORTED_MODULE_10__["_countGroupLabelsBeforeOption"])(selectedOptionOffset, this.options, this.optionGroups); // We must maintain a scroll buffer so the selected option will be scrolled to the
      // center of the overlay panel rather than the top.

      var scrollBuffer = panelHeight / 2;
      this._scrollTop = this._calculateOverlayScroll(selectedOptionOffset, scrollBuffer, maxScroll);
      this._offsetY = this._calculateOverlayOffsetY(selectedOptionOffset, scrollBuffer, maxScroll);

      this._checkOverlayWithinViewport(maxScroll);
    }
    /** Sets the transform origin point based on the selected option. */

  }, {
    key: "_getOriginBasedOnOption",
    value: function _getOriginBasedOnOption() {
      var itemHeight = this._getItemHeight();

      var optionHeightAdjustment = (itemHeight - this._triggerRect.height) / 2;
      var originY = Math.abs(this._offsetY) - optionHeightAdjustment + itemHeight / 2;
      return "50% ".concat(originY, "px 0px");
    }
    /** Calculates the height of the select's options. */

  }, {
    key: "_getItemHeight",
    value: function _getItemHeight() {
      return this._triggerFontSize * SELECT_ITEM_HEIGHT_EM;
    }
    /** Calculates the amount of items in the select. This includes options and group labels. */

  }, {
    key: "_getItemCount",
    value: function _getItemCount() {
      return this.options.length + this.optionGroups.length;
    }
  }]);
}(_MatSelectBase);

MatSelect.ɵfac = function MatSelect_Factory(t) {
  return ɵMatSelect_BaseFactory(t || MatSelect);
};

MatSelect.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵdefineComponent"]({
  type: MatSelect,
  selectors: [["mat-select"]],
  contentQueries: function MatSelect_ContentQueries(rf, ctx, dirIndex) {
    if (rf & 1) {
      _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵcontentQuery"](dirIndex, MAT_SELECT_TRIGGER, 1);
      _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵcontentQuery"](dirIndex, _angular_material_core__WEBPACK_IMPORTED_MODULE_10__["MatOption"], 1);
      _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵcontentQuery"](dirIndex, _angular_material_core__WEBPACK_IMPORTED_MODULE_10__["MAT_OPTGROUP"], 1);
    }

    if (rf & 2) {
      var _t;

      _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵloadQuery"]()) && (ctx.customTrigger = _t.first);
      _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵloadQuery"]()) && (ctx.options = _t);
      _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵloadQuery"]()) && (ctx.optionGroups = _t);
    }
  },
  hostAttrs: ["role", "combobox", "aria-autocomplete", "none", "aria-haspopup", "true", 1, "mat-select"],
  hostVars: 20,
  hostBindings: function MatSelect_HostBindings(rf, ctx) {
    if (rf & 1) {
      _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵlistener"]("keydown", function MatSelect_keydown_HostBindingHandler($event) {
        return ctx._handleKeydown($event);
      })("focus", function MatSelect_focus_HostBindingHandler() {
        return ctx._onFocus();
      })("blur", function MatSelect_blur_HostBindingHandler() {
        return ctx._onBlur();
      });
    }

    if (rf & 2) {
      _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵattribute"]("id", ctx.id)("tabindex", ctx.tabIndex)("aria-controls", ctx.panelOpen ? ctx.id + "-panel" : null)("aria-expanded", ctx.panelOpen)("aria-label", ctx.ariaLabel || null)("aria-required", ctx.required.toString())("aria-disabled", ctx.disabled.toString())("aria-invalid", ctx.errorState)("aria-describedby", ctx._ariaDescribedby || null)("aria-activedescendant", ctx._getAriaActiveDescendant());
      _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵclassProp"]("mat-select-disabled", ctx.disabled)("mat-select-invalid", ctx.errorState)("mat-select-required", ctx.required)("mat-select-empty", ctx.empty)("mat-select-multiple", ctx.multiple);
    }
  },
  inputs: {
    disabled: "disabled",
    disableRipple: "disableRipple",
    tabIndex: "tabIndex"
  },
  exportAs: ["matSelect"],
  features: [_angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵProvidersFeature"]([{
    provide: _angular_material_form_field__WEBPACK_IMPORTED_MODULE_11__["MatFormFieldControl"],
    useExisting: MatSelect
  }, {
    provide: _angular_material_core__WEBPACK_IMPORTED_MODULE_10__["MAT_OPTION_PARENT_COMPONENT"],
    useExisting: MatSelect
  }]), _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵInheritDefinitionFeature"]],
  ngContentSelectors: _c3,
  decls: 9,
  vars: 12,
  consts: [["cdk-overlay-origin", "", 1, "mat-select-trigger", 3, "click"], ["origin", "cdkOverlayOrigin", "trigger", ""], [1, "mat-select-value", 3, "ngSwitch"], ["class", "mat-select-placeholder", 4, "ngSwitchCase"], ["class", "mat-select-value-text", 3, "ngSwitch", 4, "ngSwitchCase"], [1, "mat-select-arrow-wrapper"], [1, "mat-select-arrow"], ["cdk-connected-overlay", "", "cdkConnectedOverlayLockPosition", "", "cdkConnectedOverlayHasBackdrop", "", "cdkConnectedOverlayBackdropClass", "cdk-overlay-transparent-backdrop", 3, "cdkConnectedOverlayPanelClass", "cdkConnectedOverlayScrollStrategy", "cdkConnectedOverlayOrigin", "cdkConnectedOverlayOpen", "cdkConnectedOverlayPositions", "cdkConnectedOverlayMinWidth", "cdkConnectedOverlayOffsetY", "backdropClick", "attach", "detach"], [1, "mat-select-placeholder"], [1, "mat-select-value-text", 3, "ngSwitch"], [4, "ngSwitchDefault"], [4, "ngSwitchCase"], [1, "mat-select-panel-wrap"], ["role", "listbox", "tabindex", "-1", 3, "ngClass", "keydown"], ["panel", ""]],
  template: function MatSelect_Template(rf, ctx) {
    if (rf & 1) {
      _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵprojectionDef"](_c2);
      _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](0, "div", 0, 1);
      _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵlistener"]("click", function MatSelect_Template_div_click_0_listener() {
        return ctx.toggle();
      });
      _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](3, "div", 2);
      _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtemplate"](4, MatSelect_span_4_Template, 2, 1, "span", 3);
      _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtemplate"](5, MatSelect_span_5_Template, 3, 2, "span", 4);
      _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](6, "div", 5);
      _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelement"](7, "div", 6);
      _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtemplate"](8, MatSelect_ng_template_8_Template, 4, 14, "ng-template", 7);
      _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵlistener"]("backdropClick", function MatSelect_Template_ng_template_backdropClick_8_listener() {
        return ctx.close();
      })("attach", function MatSelect_Template_ng_template_attach_8_listener() {
        return ctx._onAttached();
      })("detach", function MatSelect_Template_ng_template_detach_8_listener() {
        return ctx.close();
      });
    }

    if (rf & 2) {
      var _r0 = _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵreference"](1);

      _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵattribute"]("aria-owns", ctx.panelOpen ? ctx.id + "-panel" : null);
      _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](3);
      _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵproperty"]("ngSwitch", ctx.empty);
      _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵattribute"]("id", ctx._valueId);
      _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](1);
      _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵproperty"]("ngSwitchCase", true);
      _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](1);
      _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵproperty"]("ngSwitchCase", false);
      _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](3);
      _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵproperty"]("cdkConnectedOverlayPanelClass", ctx._overlayPanelClass)("cdkConnectedOverlayScrollStrategy", ctx._scrollStrategy)("cdkConnectedOverlayOrigin", _r0)("cdkConnectedOverlayOpen", ctx.panelOpen)("cdkConnectedOverlayPositions", ctx._positions)("cdkConnectedOverlayMinWidth", ctx._triggerRect == null ? null : ctx._triggerRect.width)("cdkConnectedOverlayOffsetY", ctx._offsetY);
    }
  },
  directives: [_angular_cdk_overlay__WEBPACK_IMPORTED_MODULE_7__["CdkOverlayOrigin"], _angular_common__WEBPACK_IMPORTED_MODULE_8__["NgSwitch"], _angular_common__WEBPACK_IMPORTED_MODULE_8__["NgSwitchCase"], _angular_cdk_overlay__WEBPACK_IMPORTED_MODULE_7__["CdkConnectedOverlay"], _angular_common__WEBPACK_IMPORTED_MODULE_8__["NgSwitchDefault"], _angular_common__WEBPACK_IMPORTED_MODULE_8__["NgClass"]],
  styles: [".mat-select{display:inline-block;width:100%;outline:none}.mat-select-trigger{display:inline-table;cursor:pointer;position:relative;box-sizing:border-box}.mat-select-disabled .mat-select-trigger{-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none;cursor:default}.mat-select-value{display:table-cell;max-width:0;width:100%;overflow:hidden;text-overflow:ellipsis;white-space:nowrap}.mat-select-value-text{white-space:nowrap;overflow:hidden;text-overflow:ellipsis}.mat-select-arrow-wrapper{display:table-cell;vertical-align:middle}.mat-form-field-appearance-fill .mat-select-arrow-wrapper{transform:translateY(-50%)}.mat-form-field-appearance-outline .mat-select-arrow-wrapper{transform:translateY(-25%)}.mat-form-field-appearance-standard.mat-form-field-has-label .mat-select:not(.mat-select-empty) .mat-select-arrow-wrapper{transform:translateY(-50%)}.mat-form-field-appearance-standard .mat-select.mat-select-empty .mat-select-arrow-wrapper{transition:transform 400ms cubic-bezier(0.25, 0.8, 0.25, 1)}._mat-animation-noopable.mat-form-field-appearance-standard .mat-select.mat-select-empty .mat-select-arrow-wrapper{transition:none}.mat-select-arrow{width:0;height:0;border-left:5px solid transparent;border-right:5px solid transparent;border-top:5px solid;margin:0 4px}.mat-select-panel-wrap{flex-basis:100%}.mat-select-panel{min-width:112px;max-width:280px;overflow:auto;-webkit-overflow-scrolling:touch;padding-top:0;padding-bottom:0;max-height:256px;min-width:100%;border-radius:4px;outline:0}.cdk-high-contrast-active .mat-select-panel{outline:solid 1px}.mat-select-panel .mat-optgroup-label,.mat-select-panel .mat-option{font-size:inherit;line-height:3em;height:3em}.mat-form-field-type-mat-select:not(.mat-form-field-disabled) .mat-form-field-flex{cursor:pointer}.mat-form-field-type-mat-select .mat-form-field-label{width:calc(100% - 18px)}.mat-select-placeholder{transition:color 400ms 133.3333333333ms cubic-bezier(0.25, 0.8, 0.25, 1)}._mat-animation-noopable .mat-select-placeholder{transition:none}.mat-form-field-hide-placeholder .mat-select-placeholder{color:transparent;-webkit-text-fill-color:transparent;transition:none;display:block}\n"],
  encapsulation: 2,
  data: {
    animation: [matSelectAnimations.transformPanelWrap, matSelectAnimations.transformPanel]
  },
  changeDetection: 0
});
MatSelect.propDecorators = {
  options: [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_9__["ContentChildren"],
    args: [_angular_material_core__WEBPACK_IMPORTED_MODULE_10__["MatOption"], {
      descendants: true
    }]
  }],
  optionGroups: [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_9__["ContentChildren"],
    args: [_angular_material_core__WEBPACK_IMPORTED_MODULE_10__["MAT_OPTGROUP"], {
      descendants: true
    }]
  }],
  customTrigger: [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_9__["ContentChild"],
    args: [MAT_SELECT_TRIGGER]
  }]
};
var ɵMatSelect_BaseFactory = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵgetInheritedFactory"](MatSelect);

(function () {
  (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵsetClassMetadata"](MatSelect, [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_9__["Component"],
    args: [{
      selector: 'mat-select',
      exportAs: 'matSelect',
      template: "<!--\n Note that the select trigger element specifies `aria-owns` pointing to the listbox overlay.\n While aria-owns is not required for the ARIA 1.2 `role=\"combobox\"` interaction pattern,\n it fixes an issue with VoiceOver when the select appears inside of an `aria-model=\"true\"`\n element (e.g. a dialog). Without this `aria-owns`, the `aria-modal` on a dialog prevents\n VoiceOver from \"seeing\" the select's listbox overlay for aria-activedescendant.\n Using `aria-owns` re-parents the select overlay so that it works again.\n See https://github.com/angular/components/issues/20694\n-->\n<div cdk-overlay-origin\n     [attr.aria-owns]=\"panelOpen ? id + '-panel' : null\"\n     class=\"mat-select-trigger\"\n     (click)=\"toggle()\"\n     #origin=\"cdkOverlayOrigin\"\n     #trigger>\n  <div class=\"mat-select-value\" [ngSwitch]=\"empty\" [attr.id]=\"_valueId\">\n    <span class=\"mat-select-placeholder\" *ngSwitchCase=\"true\">{{placeholder || '\\u00A0'}}</span>\n    <span class=\"mat-select-value-text\" *ngSwitchCase=\"false\" [ngSwitch]=\"!!customTrigger\">\n      <span *ngSwitchDefault>{{triggerValue || '\\u00A0'}}</span>\n      <ng-content select=\"mat-select-trigger\" *ngSwitchCase=\"true\"></ng-content>\n    </span>\n  </div>\n\n  <div class=\"mat-select-arrow-wrapper\"><div class=\"mat-select-arrow\"></div></div>\n</div>\n\n<ng-template\n  cdk-connected-overlay\n  cdkConnectedOverlayLockPosition\n  cdkConnectedOverlayHasBackdrop\n  cdkConnectedOverlayBackdropClass=\"cdk-overlay-transparent-backdrop\"\n  [cdkConnectedOverlayPanelClass]=\"_overlayPanelClass\"\n  [cdkConnectedOverlayScrollStrategy]=\"_scrollStrategy\"\n  [cdkConnectedOverlayOrigin]=\"origin\"\n  [cdkConnectedOverlayOpen]=\"panelOpen\"\n  [cdkConnectedOverlayPositions]=\"_positions\"\n  [cdkConnectedOverlayMinWidth]=\"_triggerRect?.width!\"\n  [cdkConnectedOverlayOffsetY]=\"_offsetY\"\n  (backdropClick)=\"close()\"\n  (attach)=\"_onAttached()\"\n  (detach)=\"close()\">\n  <div class=\"mat-select-panel-wrap\" [@transformPanelWrap]>\n    <div\n      #panel\n      role=\"listbox\"\n      tabindex=\"-1\"\n      class=\"mat-select-panel {{ _getPanelTheme() }}\"\n      [attr.id]=\"id + '-panel'\"\n      [attr.aria-multiselectable]=\"multiple\"\n      [attr.aria-label]=\"ariaLabel || null\"\n      [attr.aria-labelledby]=\"_getPanelAriaLabelledby()\"\n      [ngClass]=\"panelClass\"\n      [@transformPanel]=\"multiple ? 'showing-multiple' : 'showing'\"\n      (@transformPanel.done)=\"_panelDoneAnimatingStream.next($event.toState)\"\n      [style.transformOrigin]=\"_transformOrigin\"\n      [style.font-size.px]=\"_triggerFontSize\"\n      (keydown)=\"_handleKeydown($event)\">\n      <ng-content></ng-content>\n    </div>\n  </div>\n</ng-template>\n",
      inputs: ['disabled', 'disableRipple', 'tabIndex'],
      encapsulation: _angular_core__WEBPACK_IMPORTED_MODULE_9__["ViewEncapsulation"].None,
      changeDetection: _angular_core__WEBPACK_IMPORTED_MODULE_9__["ChangeDetectionStrategy"].OnPush,
      host: {
        'role': 'combobox',
        'aria-autocomplete': 'none',
        // TODO(crisbeto): the value for aria-haspopup should be `listbox`, but currently it's difficult
        // to sync into Google, because of an outdated automated a11y check which flags it as an invalid
        // value. At some point we should try to switch it back to being `listbox`.
        'aria-haspopup': 'true',
        'class': 'mat-select',
        '[attr.id]': 'id',
        '[attr.tabindex]': 'tabIndex',
        '[attr.aria-controls]': 'panelOpen ? id + "-panel" : null',
        '[attr.aria-expanded]': 'panelOpen',
        '[attr.aria-label]': 'ariaLabel || null',
        '[attr.aria-required]': 'required.toString()',
        '[attr.aria-disabled]': 'disabled.toString()',
        '[attr.aria-invalid]': 'errorState',
        '[attr.aria-describedby]': '_ariaDescribedby || null',
        '[attr.aria-activedescendant]': '_getAriaActiveDescendant()',
        '[class.mat-select-disabled]': 'disabled',
        '[class.mat-select-invalid]': 'errorState',
        '[class.mat-select-required]': 'required',
        '[class.mat-select-empty]': 'empty',
        '[class.mat-select-multiple]': 'multiple',
        '(keydown)': '_handleKeydown($event)',
        '(focus)': '_onFocus()',
        '(blur)': '_onBlur()'
      },
      animations: [matSelectAnimations.transformPanelWrap, matSelectAnimations.transformPanel],
      providers: [{
        provide: _angular_material_form_field__WEBPACK_IMPORTED_MODULE_11__["MatFormFieldControl"],
        useExisting: MatSelect
      }, {
        provide: _angular_material_core__WEBPACK_IMPORTED_MODULE_10__["MAT_OPTION_PARENT_COMPONENT"],
        useExisting: MatSelect
      }],
      styles: [".mat-select{display:inline-block;width:100%;outline:none}.mat-select-trigger{display:inline-table;cursor:pointer;position:relative;box-sizing:border-box}.mat-select-disabled .mat-select-trigger{-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none;cursor:default}.mat-select-value{display:table-cell;max-width:0;width:100%;overflow:hidden;text-overflow:ellipsis;white-space:nowrap}.mat-select-value-text{white-space:nowrap;overflow:hidden;text-overflow:ellipsis}.mat-select-arrow-wrapper{display:table-cell;vertical-align:middle}.mat-form-field-appearance-fill .mat-select-arrow-wrapper{transform:translateY(-50%)}.mat-form-field-appearance-outline .mat-select-arrow-wrapper{transform:translateY(-25%)}.mat-form-field-appearance-standard.mat-form-field-has-label .mat-select:not(.mat-select-empty) .mat-select-arrow-wrapper{transform:translateY(-50%)}.mat-form-field-appearance-standard .mat-select.mat-select-empty .mat-select-arrow-wrapper{transition:transform 400ms cubic-bezier(0.25, 0.8, 0.25, 1)}._mat-animation-noopable.mat-form-field-appearance-standard .mat-select.mat-select-empty .mat-select-arrow-wrapper{transition:none}.mat-select-arrow{width:0;height:0;border-left:5px solid transparent;border-right:5px solid transparent;border-top:5px solid;margin:0 4px}.mat-select-panel-wrap{flex-basis:100%}.mat-select-panel{min-width:112px;max-width:280px;overflow:auto;-webkit-overflow-scrolling:touch;padding-top:0;padding-bottom:0;max-height:256px;min-width:100%;border-radius:4px;outline:0}.cdk-high-contrast-active .mat-select-panel{outline:solid 1px}.mat-select-panel .mat-optgroup-label,.mat-select-panel .mat-option{font-size:inherit;line-height:3em;height:3em}.mat-form-field-type-mat-select:not(.mat-form-field-disabled) .mat-form-field-flex{cursor:pointer}.mat-form-field-type-mat-select .mat-form-field-label{width:calc(100% - 18px)}.mat-select-placeholder{transition:color 400ms 133.3333333333ms cubic-bezier(0.25, 0.8, 0.25, 1)}._mat-animation-noopable .mat-select-placeholder{transition:none}.mat-form-field-hide-placeholder .mat-select-placeholder{color:transparent;-webkit-text-fill-color:transparent;transition:none;display:block}\n"]
    }]
  }], null, {
    options: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_9__["ContentChildren"],
      args: [_angular_material_core__WEBPACK_IMPORTED_MODULE_10__["MatOption"], {
        descendants: true
      }]
    }],
    optionGroups: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_9__["ContentChildren"],
      args: [_angular_material_core__WEBPACK_IMPORTED_MODULE_10__["MAT_OPTGROUP"], {
        descendants: true
      }]
    }],
    customTrigger: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_9__["ContentChild"],
      args: [MAT_SELECT_TRIGGER]
    }]
  });
})();
/**
 * @license
 * Copyright Google LLC All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */


var MatSelectModule = /*#__PURE__*/Object(_home_runner_work_learn_angular_learn_angular_node_modules_babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_5__["default"])(function MatSelectModule() {
  Object(_home_runner_work_learn_angular_learn_angular_node_modules_babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_6__["default"])(this, MatSelectModule);
});

MatSelectModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵdefineNgModule"]({
  type: MatSelectModule
});
MatSelectModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵdefineInjector"]({
  factory: function MatSelectModule_Factory(t) {
    return new (t || MatSelectModule)();
  },
  providers: [MAT_SELECT_SCROLL_STRATEGY_PROVIDER],
  imports: [[_angular_common__WEBPACK_IMPORTED_MODULE_8__["CommonModule"], _angular_cdk_overlay__WEBPACK_IMPORTED_MODULE_7__["OverlayModule"], _angular_material_core__WEBPACK_IMPORTED_MODULE_10__["MatOptionModule"], _angular_material_core__WEBPACK_IMPORTED_MODULE_10__["MatCommonModule"]], _angular_cdk_scrolling__WEBPACK_IMPORTED_MODULE_12__["CdkScrollableModule"], _angular_material_form_field__WEBPACK_IMPORTED_MODULE_11__["MatFormFieldModule"], _angular_material_core__WEBPACK_IMPORTED_MODULE_10__["MatOptionModule"], _angular_material_core__WEBPACK_IMPORTED_MODULE_10__["MatCommonModule"]]
});

(function () {
  (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵsetNgModuleScope"](MatSelectModule, {
    declarations: function declarations() {
      return [MatSelect, MatSelectTrigger];
    },
    imports: function imports() {
      return [_angular_common__WEBPACK_IMPORTED_MODULE_8__["CommonModule"], _angular_cdk_overlay__WEBPACK_IMPORTED_MODULE_7__["OverlayModule"], _angular_material_core__WEBPACK_IMPORTED_MODULE_10__["MatOptionModule"], _angular_material_core__WEBPACK_IMPORTED_MODULE_10__["MatCommonModule"]];
    },
    exports: function exports() {
      return [_angular_cdk_scrolling__WEBPACK_IMPORTED_MODULE_12__["CdkScrollableModule"], _angular_material_form_field__WEBPACK_IMPORTED_MODULE_11__["MatFormFieldModule"], MatSelect, MatSelectTrigger, _angular_material_core__WEBPACK_IMPORTED_MODULE_10__["MatOptionModule"], _angular_material_core__WEBPACK_IMPORTED_MODULE_10__["MatCommonModule"]];
    }
  });
})();

(function () {
  (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵsetClassMetadata"](MatSelectModule, [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_9__["NgModule"],
    args: [{
      imports: [_angular_common__WEBPACK_IMPORTED_MODULE_8__["CommonModule"], _angular_cdk_overlay__WEBPACK_IMPORTED_MODULE_7__["OverlayModule"], _angular_material_core__WEBPACK_IMPORTED_MODULE_10__["MatOptionModule"], _angular_material_core__WEBPACK_IMPORTED_MODULE_10__["MatCommonModule"]],
      exports: [_angular_cdk_scrolling__WEBPACK_IMPORTED_MODULE_12__["CdkScrollableModule"], _angular_material_form_field__WEBPACK_IMPORTED_MODULE_11__["MatFormFieldModule"], MatSelect, MatSelectTrigger, _angular_material_core__WEBPACK_IMPORTED_MODULE_10__["MatOptionModule"], _angular_material_core__WEBPACK_IMPORTED_MODULE_10__["MatCommonModule"]],
      declarations: [MatSelect, MatSelectTrigger],
      providers: [MAT_SELECT_SCROLL_STRATEGY_PROVIDER]
    }]
  }], null, null);
})();
/**
 * @license
 * Copyright Google LLC All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */

/**
 * Generated bundle index. Do not edit.
 */




/***/ }),

/***/ "ihCf":
/*!***********************************************************************!*\
  !*** ./node_modules/@angular/cdk/__ivy_ngcc__/fesm2015/text-field.js ***!
  \***********************************************************************/
/*! exports provided: AutofillMonitor, CdkAutofill, CdkTextareaAutosize, TextFieldModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AutofillMonitor", function() { return AutofillMonitor; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CdkAutofill", function() { return CdkAutofill; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CdkTextareaAutosize", function() { return CdkTextareaAutosize; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TextFieldModule", function() { return TextFieldModule; });
/* harmony import */ var _home_runner_work_learn_angular_learn_angular_node_modules_babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/classCallCheck */ "1OyB");
/* harmony import */ var _home_runner_work_learn_angular_learn_angular_node_modules_babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/createClass */ "vuIU");
/* harmony import */ var _angular_cdk_platform__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/cdk/platform */ "nLfN");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_cdk_coercion__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/cdk/coercion */ "8LU1");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! rxjs */ "qCKp");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! rxjs/operators */ "kU1M");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/common */ "ofXK");








/**
 * @license
 * Copyright Google LLC All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */

/** Options to pass to the animationstart listener. */



var listenerOptions = Object(_angular_cdk_platform__WEBPACK_IMPORTED_MODULE_2__["normalizePassiveListenerOptions"])({
  passive: true
});
/**
 * An injectable service that can be used to monitor the autofill state of an input.
 * Based on the following blog post:
 * https://medium.com/@brunn/detecting-autofilled-fields-in-javascript-aed598d25da7
 */

var AutofillMonitor = /*#__PURE__*/function () {
  function AutofillMonitor(_platform, _ngZone) {
    Object(_home_runner_work_learn_angular_learn_angular_node_modules_babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_0__["default"])(this, AutofillMonitor);

    this._platform = _platform;
    this._ngZone = _ngZone;
    this._monitoredElements = new Map();
  }

  return Object(_home_runner_work_learn_angular_learn_angular_node_modules_babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_1__["default"])(AutofillMonitor, [{
    key: "monitor",
    value: function monitor(elementOrRef) {
      var _this = this;

      if (!this._platform.isBrowser) {
        return rxjs__WEBPACK_IMPORTED_MODULE_5__["EMPTY"];
      }

      var element = Object(_angular_cdk_coercion__WEBPACK_IMPORTED_MODULE_4__["coerceElement"])(elementOrRef);

      var info = this._monitoredElements.get(element);

      if (info) {
        return info.subject;
      }

      var result = new rxjs__WEBPACK_IMPORTED_MODULE_5__["Subject"]();
      var cssClass = 'cdk-text-field-autofilled';

      var listener = function listener(event) {
        // Animation events fire on initial element render, we check for the presence of the autofill
        // CSS class to make sure this is a real change in state, not just the initial render before
        // we fire off events.
        if (event.animationName === 'cdk-text-field-autofill-start' && !element.classList.contains(cssClass)) {
          element.classList.add(cssClass);

          _this._ngZone.run(function () {
            return result.next({
              target: event.target,
              isAutofilled: true
            });
          });
        } else if (event.animationName === 'cdk-text-field-autofill-end' && element.classList.contains(cssClass)) {
          element.classList.remove(cssClass);

          _this._ngZone.run(function () {
            return result.next({
              target: event.target,
              isAutofilled: false
            });
          });
        }
      };

      this._ngZone.runOutsideAngular(function () {
        element.addEventListener('animationstart', listener, listenerOptions);
        element.classList.add('cdk-text-field-autofill-monitored');
      });

      this._monitoredElements.set(element, {
        subject: result,
        unlisten: function unlisten() {
          element.removeEventListener('animationstart', listener, listenerOptions);
        }
      });

      return result;
    }
  }, {
    key: "stopMonitoring",
    value: function stopMonitoring(elementOrRef) {
      var element = Object(_angular_cdk_coercion__WEBPACK_IMPORTED_MODULE_4__["coerceElement"])(elementOrRef);

      var info = this._monitoredElements.get(element);

      if (info) {
        info.unlisten();
        info.subject.complete();
        element.classList.remove('cdk-text-field-autofill-monitored');
        element.classList.remove('cdk-text-field-autofilled');

        this._monitoredElements.delete(element);
      }
    }
  }, {
    key: "ngOnDestroy",
    value: function ngOnDestroy() {
      var _this2 = this;

      this._monitoredElements.forEach(function (_info, element) {
        return _this2.stopMonitoring(element);
      });
    }
  }]);
}();

AutofillMonitor.ɵfac = function AutofillMonitor_Factory(t) {
  return new (t || AutofillMonitor)(_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵinject"](_angular_cdk_platform__WEBPACK_IMPORTED_MODULE_2__["Platform"]), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵinject"](_angular_core__WEBPACK_IMPORTED_MODULE_3__["NgZone"]));
};

AutofillMonitor.ɵprov = Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineInjectable"])({
  factory: function AutofillMonitor_Factory() {
    return new AutofillMonitor(Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵinject"])(_angular_cdk_platform__WEBPACK_IMPORTED_MODULE_2__["Platform"]), Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵinject"])(_angular_core__WEBPACK_IMPORTED_MODULE_3__["NgZone"]));
  },
  token: AutofillMonitor,
  providedIn: "root"
});

AutofillMonitor.ctorParameters = function () {
  return [{
    type: _angular_cdk_platform__WEBPACK_IMPORTED_MODULE_2__["Platform"]
  }, {
    type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["NgZone"]
  }];
};

(function () {
  (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵsetClassMetadata"](AutofillMonitor, [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Injectable"],
    args: [{
      providedIn: 'root'
    }]
  }], function () {
    return [{
      type: _angular_cdk_platform__WEBPACK_IMPORTED_MODULE_2__["Platform"]
    }, {
      type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["NgZone"]
    }];
  }, null);
})();
/** A directive that can be used to monitor the autofill state of an input. */


var CdkAutofill = /*#__PURE__*/function () {
  function CdkAutofill(_elementRef, _autofillMonitor) {
    Object(_home_runner_work_learn_angular_learn_angular_node_modules_babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_0__["default"])(this, CdkAutofill);

    this._elementRef = _elementRef;
    this._autofillMonitor = _autofillMonitor;
    /** Emits when the autofill state of the element changes. */

    this.cdkAutofill = new _angular_core__WEBPACK_IMPORTED_MODULE_3__["EventEmitter"]();
  }

  return Object(_home_runner_work_learn_angular_learn_angular_node_modules_babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_1__["default"])(CdkAutofill, [{
    key: "ngOnInit",
    value: function ngOnInit() {
      var _this3 = this;

      this._autofillMonitor.monitor(this._elementRef).subscribe(function (event) {
        return _this3.cdkAutofill.emit(event);
      });
    }
  }, {
    key: "ngOnDestroy",
    value: function ngOnDestroy() {
      this._autofillMonitor.stopMonitoring(this._elementRef);
    }
  }]);
}();

CdkAutofill.ɵfac = function CdkAutofill_Factory(t) {
  return new (t || CdkAutofill)(_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_3__["ElementRef"]), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](AutofillMonitor));
};

CdkAutofill.ɵdir = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineDirective"]({
  type: CdkAutofill,
  selectors: [["", "cdkAutofill", ""]],
  outputs: {
    cdkAutofill: "cdkAutofill"
  }
});

CdkAutofill.ctorParameters = function () {
  return [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["ElementRef"]
  }, {
    type: AutofillMonitor
  }];
};

CdkAutofill.propDecorators = {
  cdkAutofill: [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Output"]
  }]
};

(function () {
  (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵsetClassMetadata"](CdkAutofill, [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Directive"],
    args: [{
      selector: '[cdkAutofill]'
    }]
  }], function () {
    return [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["ElementRef"]
    }, {
      type: AutofillMonitor
    }];
  }, {
    cdkAutofill: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Output"]
    }]
  });
})();
/**
 * @license
 * Copyright Google LLC All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */

/** Directive to automatically resize a textarea to fit its content. */


var CdkTextareaAutosize = /*#__PURE__*/function () {
  function CdkTextareaAutosize(_elementRef, _platform, _ngZone,
  /** @breaking-change 11.0.0 make document required */
  document) {
    Object(_home_runner_work_learn_angular_learn_angular_node_modules_babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_0__["default"])(this, CdkTextareaAutosize);

    this._elementRef = _elementRef;
    this._platform = _platform;
    this._ngZone = _ngZone;
    this._destroyed = new rxjs__WEBPACK_IMPORTED_MODULE_5__["Subject"]();
    this._enabled = true;
    /**
     * Value of minRows as of last resize. If the minRows has decreased, the
     * height of the textarea needs to be recomputed to reflect the new minimum. The maxHeight
     * does not have the same problem because it does not affect the textarea's scrollHeight.
     */

    this._previousMinRows = -1;
    this._document = document;
    this._textareaElement = this._elementRef.nativeElement;
    this._measuringClass = _platform.FIREFOX ? 'cdk-textarea-autosize-measuring-firefox' : 'cdk-textarea-autosize-measuring';
  }
  /** Minimum amount of rows in the textarea. */


  return Object(_home_runner_work_learn_angular_learn_angular_node_modules_babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_1__["default"])(CdkTextareaAutosize, [{
    key: "minRows",
    get: function get() {
      return this._minRows;
    },
    set: function set(value) {
      this._minRows = Object(_angular_cdk_coercion__WEBPACK_IMPORTED_MODULE_4__["coerceNumberProperty"])(value);

      this._setMinHeight();
    }
    /** Maximum amount of rows in the textarea. */

  }, {
    key: "maxRows",
    get: function get() {
      return this._maxRows;
    },
    set: function set(value) {
      this._maxRows = Object(_angular_cdk_coercion__WEBPACK_IMPORTED_MODULE_4__["coerceNumberProperty"])(value);

      this._setMaxHeight();
    }
    /** Whether autosizing is enabled or not */

  }, {
    key: "enabled",
    get: function get() {
      return this._enabled;
    },
    set: function set(value) {
      value = Object(_angular_cdk_coercion__WEBPACK_IMPORTED_MODULE_4__["coerceBooleanProperty"])(value); // Only act if the actual value changed. This specifically helps to not run
      // resizeToFitContent too early (i.e. before ngAfterViewInit)

      if (this._enabled !== value) {
        (this._enabled = value) ? this.resizeToFitContent(true) : this.reset();
      }
    }
    /** Sets the minimum height of the textarea as determined by minRows. */

  }, {
    key: "_setMinHeight",
    value: function _setMinHeight() {
      var minHeight = this.minRows && this._cachedLineHeight ? "".concat(this.minRows * this._cachedLineHeight, "px") : null;

      if (minHeight) {
        this._textareaElement.style.minHeight = minHeight;
      }
    }
    /** Sets the maximum height of the textarea as determined by maxRows. */

  }, {
    key: "_setMaxHeight",
    value: function _setMaxHeight() {
      var maxHeight = this.maxRows && this._cachedLineHeight ? "".concat(this.maxRows * this._cachedLineHeight, "px") : null;

      if (maxHeight) {
        this._textareaElement.style.maxHeight = maxHeight;
      }
    }
  }, {
    key: "ngAfterViewInit",
    value: function ngAfterViewInit() {
      var _this4 = this;

      if (this._platform.isBrowser) {
        // Remember the height which we started with in case autosizing is disabled
        this._initialHeight = this._textareaElement.style.height;
        this.resizeToFitContent();

        this._ngZone.runOutsideAngular(function () {
          var window = _this4._getWindow();

          Object(rxjs__WEBPACK_IMPORTED_MODULE_5__["fromEvent"])(window, 'resize').pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_6__["auditTime"])(16), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_6__["takeUntil"])(_this4._destroyed)).subscribe(function () {
            return _this4.resizeToFitContent(true);
          });
        });
      }
    }
  }, {
    key: "ngOnDestroy",
    value: function ngOnDestroy() {
      this._destroyed.next();

      this._destroyed.complete();
    }
    /**
     * Cache the height of a single-row textarea if it has not already been cached.
     *
     * We need to know how large a single "row" of a textarea is in order to apply minRows and
     * maxRows. For the initial version, we will assume that the height of a single line in the
     * textarea does not ever change.
     */

  }, {
    key: "_cacheTextareaLineHeight",
    value: function _cacheTextareaLineHeight() {
      if (this._cachedLineHeight) {
        return;
      } // Use a clone element because we have to override some styles.


      var textareaClone = this._textareaElement.cloneNode(false);

      textareaClone.rows = 1; // Use `position: absolute` so that this doesn't cause a browser layout and use
      // `visibility: hidden` so that nothing is rendered. Clear any other styles that
      // would affect the height.

      textareaClone.style.position = 'absolute';
      textareaClone.style.visibility = 'hidden';
      textareaClone.style.border = 'none';
      textareaClone.style.padding = '0';
      textareaClone.style.height = '';
      textareaClone.style.minHeight = '';
      textareaClone.style.maxHeight = ''; // In Firefox it happens that textarea elements are always bigger than the specified amount
      // of rows. This is because Firefox tries to add extra space for the horizontal scrollbar.
      // As a workaround that removes the extra space for the scrollbar, we can just set overflow
      // to hidden. This ensures that there is no invalid calculation of the line height.
      // See Firefox bug report: https://bugzilla.mozilla.org/show_bug.cgi?id=33654

      textareaClone.style.overflow = 'hidden';

      this._textareaElement.parentNode.appendChild(textareaClone);

      this._cachedLineHeight = textareaClone.clientHeight;

      this._textareaElement.parentNode.removeChild(textareaClone); // Min and max heights have to be re-calculated if the cached line height changes


      this._setMinHeight();

      this._setMaxHeight();
    }
  }, {
    key: "ngDoCheck",
    value: function ngDoCheck() {
      if (this._platform.isBrowser) {
        this.resizeToFitContent();
      }
    }
    /**
     * Resize the textarea to fit its content.
     * @param force Whether to force a height recalculation. By default the height will be
     *    recalculated only if the value changed since the last call.
     */

  }, {
    key: "resizeToFitContent",
    value: function resizeToFitContent() {
      var _this5 = this;

      var force = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : false;

      // If autosizing is disabled, just skip everything else
      if (!this._enabled) {
        return;
      }

      this._cacheTextareaLineHeight(); // If we haven't determined the line-height yet, we know we're still hidden and there's no point
      // in checking the height of the textarea.


      if (!this._cachedLineHeight) {
        return;
      }

      var textarea = this._elementRef.nativeElement;
      var value = textarea.value; // Only resize if the value or minRows have changed since these calculations can be expensive.

      if (!force && this._minRows === this._previousMinRows && value === this._previousValue) {
        return;
      }

      var placeholderText = textarea.placeholder; // Reset the textarea height to auto in order to shrink back to its default size.
      // Also temporarily force overflow:hidden, so scroll bars do not interfere with calculations.
      // Long placeholders that are wider than the textarea width may lead to a bigger scrollHeight
      // value. To ensure that the scrollHeight is not bigger than the content, the placeholders
      // need to be removed temporarily.

      textarea.classList.add(this._measuringClass);
      textarea.placeholder = ''; // The measuring class includes a 2px padding to workaround an issue with Chrome,
      // so we account for that extra space here by subtracting 4 (2px top + 2px bottom).

      var height = textarea.scrollHeight - 4; // Use the scrollHeight to know how large the textarea *would* be if fit its entire value.

      textarea.style.height = "".concat(height, "px");
      textarea.classList.remove(this._measuringClass);
      textarea.placeholder = placeholderText;

      this._ngZone.runOutsideAngular(function () {
        if (typeof requestAnimationFrame !== 'undefined') {
          requestAnimationFrame(function () {
            return _this5._scrollToCaretPosition(textarea);
          });
        } else {
          setTimeout(function () {
            return _this5._scrollToCaretPosition(textarea);
          });
        }
      });

      this._previousValue = value;
      this._previousMinRows = this._minRows;
    }
    /**
     * Resets the textarea to its original size
     */

  }, {
    key: "reset",
    value: function reset() {
      // Do not try to change the textarea, if the initialHeight has not been determined yet
      // This might potentially remove styles when reset() is called before ngAfterViewInit
      if (this._initialHeight !== undefined) {
        this._textareaElement.style.height = this._initialHeight;
      }
    } // In Ivy the `host` metadata will be merged, whereas in ViewEngine it is overridden. In order
    // to avoid double event listeners, we need to use `HostListener`. Once Ivy is the default, we
    // can move this back into `host`.
    // tslint:disable:no-host-decorator-in-concrete

  }, {
    key: "_noopInputHandler",
    value: function _noopInputHandler() {// no-op handler that ensures we're running change detection on input events.
    }
    /** Access injected document if available or fallback to global document reference */

  }, {
    key: "_getDocument",
    value: function _getDocument() {
      return this._document || document;
    }
    /** Use defaultView of injected document if available or fallback to global window reference */

  }, {
    key: "_getWindow",
    value: function _getWindow() {
      var doc = this._getDocument();

      return doc.defaultView || window;
    }
    /**
     * Scrolls a textarea to the caret position. On Firefox resizing the textarea will
     * prevent it from scrolling to the caret position. We need to re-set the selection
     * in order for it to scroll to the proper position.
     */

  }, {
    key: "_scrollToCaretPosition",
    value: function _scrollToCaretPosition(textarea) {
      var selectionStart = textarea.selectionStart,
          selectionEnd = textarea.selectionEnd;

      var document = this._getDocument(); // IE will throw an "Unspecified error" if we try to set the selection range after the
      // element has been removed from the DOM. Assert that the directive hasn't been destroyed
      // between the time we requested the animation frame and when it was executed.
      // Also note that we have to assert that the textarea is focused before we set the
      // selection range. Setting the selection range on a non-focused textarea will cause
      // it to receive focus on IE and Edge.


      if (!this._destroyed.isStopped && document.activeElement === textarea) {
        textarea.setSelectionRange(selectionStart, selectionEnd);
      }
    }
  }]);
}();

CdkTextareaAutosize.ɵfac = function CdkTextareaAutosize_Factory(t) {
  return new (t || CdkTextareaAutosize)(_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_3__["ElementRef"]), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](_angular_cdk_platform__WEBPACK_IMPORTED_MODULE_2__["Platform"]), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_3__["NgZone"]), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](_angular_common__WEBPACK_IMPORTED_MODULE_7__["DOCUMENT"], 8));
};

CdkTextareaAutosize.ɵdir = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineDirective"]({
  type: CdkTextareaAutosize,
  selectors: [["textarea", "cdkTextareaAutosize", ""]],
  hostAttrs: ["rows", "1", 1, "cdk-textarea-autosize"],
  hostBindings: function CdkTextareaAutosize_HostBindings(rf, ctx) {
    if (rf & 1) {
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("input", function CdkTextareaAutosize_input_HostBindingHandler() {
        return ctx._noopInputHandler();
      });
    }
  },
  inputs: {
    minRows: ["cdkAutosizeMinRows", "minRows"],
    maxRows: ["cdkAutosizeMaxRows", "maxRows"],
    enabled: ["cdkTextareaAutosize", "enabled"]
  },
  exportAs: ["cdkTextareaAutosize"]
});

CdkTextareaAutosize.ctorParameters = function () {
  return [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["ElementRef"]
  }, {
    type: _angular_cdk_platform__WEBPACK_IMPORTED_MODULE_2__["Platform"]
  }, {
    type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["NgZone"]
  }, {
    type: undefined,
    decorators: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Optional"]
    }, {
      type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Inject"],
      args: [_angular_common__WEBPACK_IMPORTED_MODULE_7__["DOCUMENT"]]
    }]
  }];
};

CdkTextareaAutosize.propDecorators = {
  minRows: [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Input"],
    args: ['cdkAutosizeMinRows']
  }],
  maxRows: [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Input"],
    args: ['cdkAutosizeMaxRows']
  }],
  enabled: [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Input"],
    args: ['cdkTextareaAutosize']
  }],
  _noopInputHandler: [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["HostListener"],
    args: ['input']
  }]
};

(function () {
  (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵsetClassMetadata"](CdkTextareaAutosize, [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Directive"],
    args: [{
      selector: 'textarea[cdkTextareaAutosize]',
      exportAs: 'cdkTextareaAutosize',
      host: {
        'class': 'cdk-textarea-autosize',
        // Textarea elements that have the directive applied should have a single row by default.
        // Browsers normally show two rows by default and therefore this limits the minRows binding.
        'rows': '1'
      }
    }]
  }], function () {
    return [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["ElementRef"]
    }, {
      type: _angular_cdk_platform__WEBPACK_IMPORTED_MODULE_2__["Platform"]
    }, {
      type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["NgZone"]
    }, {
      type: undefined,
      decorators: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Optional"]
      }, {
        type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Inject"],
        args: [_angular_common__WEBPACK_IMPORTED_MODULE_7__["DOCUMENT"]]
      }]
    }];
  }, {
    minRows: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Input"],
      args: ['cdkAutosizeMinRows']
    }],
    maxRows: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Input"],
      args: ['cdkAutosizeMaxRows']
    }],
    enabled: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Input"],
      args: ['cdkTextareaAutosize']
    }],
    // In Ivy the `host` metadata will be merged, whereas in ViewEngine it is overridden. In order
    // to avoid double event listeners, we need to use `HostListener`. Once Ivy is the default, we
    // can move this back into `host`.
    // tslint:disable:no-host-decorator-in-concrete
    _noopInputHandler: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["HostListener"],
      args: ['input']
    }]
  });
})();
/**
 * @license
 * Copyright Google LLC All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */


var TextFieldModule = /*#__PURE__*/Object(_home_runner_work_learn_angular_learn_angular_node_modules_babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_1__["default"])(function TextFieldModule() {
  Object(_home_runner_work_learn_angular_learn_angular_node_modules_babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_0__["default"])(this, TextFieldModule);
});

TextFieldModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineNgModule"]({
  type: TextFieldModule
});
TextFieldModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineInjector"]({
  factory: function TextFieldModule_Factory(t) {
    return new (t || TextFieldModule)();
  },
  imports: [[_angular_cdk_platform__WEBPACK_IMPORTED_MODULE_2__["PlatformModule"]]]
});

(function () {
  (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵsetNgModuleScope"](TextFieldModule, {
    declarations: function declarations() {
      return [CdkAutofill, CdkTextareaAutosize];
    },
    imports: function imports() {
      return [_angular_cdk_platform__WEBPACK_IMPORTED_MODULE_2__["PlatformModule"]];
    },
    exports: function exports() {
      return [CdkAutofill, CdkTextareaAutosize];
    }
  });
})();

(function () {
  (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵsetClassMetadata"](TextFieldModule, [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["NgModule"],
    args: [{
      declarations: [CdkAutofill, CdkTextareaAutosize],
      imports: [_angular_cdk_platform__WEBPACK_IMPORTED_MODULE_2__["PlatformModule"]],
      exports: [CdkAutofill, CdkTextareaAutosize]
    }]
  }], null, null);
})();
/**
 * @license
 * Copyright Google LLC All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */

/**
 * Generated bundle index. Do not edit.
 */




/***/ }),

/***/ "jxfC":
/*!*****************************************************!*\
  !*** ./src/app/table-list/table-list.component.css ***!
  \*****************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJ0YWJsZS1saXN0LmNvbXBvbmVudC5jc3MifQ== */");

/***/ }),

/***/ "kEEF":
/*!******************************************************************!*\
  !*** ./src/app/interview-library/interview-library.component.ts ***!
  \******************************************************************/
/*! exports provided: InterviewLibraryComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "InterviewLibraryComponent", function() { return InterviewLibraryComponent; });
/* harmony import */ var _raw_loader_interview_library_component_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! raw-loader!./interview-library.component.html */ "RiU3");
/* harmony import */ var _interview_library_component_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./interview-library.component.css */ "1wXo");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var rxjs_add_operator_filter__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rxjs/add/operator/filter */ "fjAU");
/* harmony import */ var rxjs_add_operator_filter__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(rxjs_add_operator_filter__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _practice_session_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./practice-session.service */ "GCT5");
/* harmony import */ var _question_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./question.service */ "BoL1");
/* harmony import */ var _study_progress_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./study-progress.service */ "3lmm");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};








var InterviewLibraryComponent = /** @class */ (function () {
    function InterviewLibraryComponent(route, router, questionService, progress, practiceSession, changeDetector) {
        this.route = route;
        this.router = router;
        this.questionService = questionService;
        this.progress = progress;
        this.practiceSession = practiceSession;
        this.changeDetector = changeDetector;
        this.categories = [];
        this.questions = [];
        this.results = [];
        this.filters = { query: '', categoryId: '', bookmarkedOnly: false, status: '' };
        this.activeQuestionId = '';
        this.loading = true;
        this.loadError = '';
        this.showPracticeEmpty = false;
        this.lastQuestionId = null;
    }
    Object.defineProperty(InterviewLibraryComponent.prototype, "routeChildIsPractice", {
        get: function () {
            return !!(this.route.firstChild && this.route.firstChild.routeConfig &&
                this.route.firstChild.routeConfig.path === 'practice');
        },
        enumerable: false,
        configurable: true
    });
    InterviewLibraryComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.questionService.getLibrary().subscribe(function (library) {
            _this.categories = library.categories;
            _this.questions = library.questions;
            _this.progress.retainKnownQuestions(_this.questions);
            _this.loading = false;
            _this.applyFilters();
            _this.lastQuestionId = _this.progress.getLastQuestionId();
            _this.syncFromUrl();
        }, function () {
            _this.loading = false;
            _this.loadError = 'The question library could not be loaded. Please refresh the page or run the content import script.';
        });
        this.route.queryParamMap.subscribe(function () { return _this.syncFromUrl(); });
        this.progress.changes$.subscribe(function () {
            _this.lastQuestionId = _this.progress.getLastQuestionId();
            _this.applyFilters();
        });
        this.router.events.filter(function (event) { return event instanceof _angular_router__WEBPACK_IMPORTED_MODULE_3__["NavigationEnd"]; }).subscribe(function () {
            _this.refreshActiveSelection();
            _this.changeDetector.detectChanges();
        });
        this.refreshActiveSelection();
    };
    InterviewLibraryComponent.prototype.focusSearchShortcut = function (event) {
        if ((event.ctrlKey || event.metaKey) && event.key.toLowerCase() === 'k') {
            event.preventDefault();
            if (this.searchInput) {
                this.searchInput.nativeElement.focus();
            }
        }
    };
    InterviewLibraryComponent.prototype.filterChanged = function () {
        this.showPracticeEmpty = false;
        this.applyFilters();
        this.updateUrl();
    };
    InterviewLibraryComponent.prototype.clearFilters = function () {
        this.filters = { query: '', categoryId: '', bookmarkedOnly: false, status: '' };
        this.showPracticeEmpty = false;
        this.applyFilters();
        this.updateUrl();
    };
    InterviewLibraryComponent.prototype.startPractice = function () {
        if (!this.results.length) {
            this.showPracticeEmpty = true;
            return;
        }
        this.showPracticeEmpty = false;
        this.practiceSession.start(this.results.map(function (question) { return question.id; }));
        this.router.navigate(['practice'], { relativeTo: this.route, queryParams: this.route.snapshot.queryParams });
    };
    InterviewLibraryComponent.prototype.continueStudying = function () {
        var _this = this;
        if (!this.lastQuestionId || !this.questions.some(function (question) { return question.id === _this.lastQuestionId; })) {
            return;
        }
        this.router.navigate([this.lastQuestionId], {
            relativeTo: this.route,
            queryParams: this.route.snapshot.queryParams
        });
    };
    InterviewLibraryComponent.prototype.categoryName = function (categoryId) {
        var category = this.categories.find(function (item) { return item.id === categoryId; });
        return category ? category.name : 'Interview';
    };
    InterviewLibraryComponent.prototype.statusFor = function (questionId) {
        return this.progress.statusFor(questionId);
    };
    InterviewLibraryComponent.prototype.syncFromUrl = function () {
        if (!this.route.snapshot) {
            return;
        }
        var params = this.route.snapshot.queryParamMap;
        this.filters = {
            query: params.get('q') || '',
            categoryId: params.get('category') || '',
            bookmarkedOnly: params.get('bookmarked') === '1',
            status: params.get('status') || ''
        };
        this.applyFilters();
    };
    InterviewLibraryComponent.prototype.applyFilters = function () {
        if (!this.questions.length) {
            this.results = [];
            return;
        }
        this.results = this.questionService.search(this.questions, this.filters, this.progress.snapshot());
    };
    InterviewLibraryComponent.prototype.updateUrl = function () {
        this.router.navigate([], {
            relativeTo: this.route,
            queryParams: {
                q: this.filters.query || null,
                category: this.filters.categoryId || null,
                bookmarked: this.filters.bookmarkedOnly ? '1' : null,
                status: this.filters.status || null
            },
            queryParamsHandling: 'merge',
            replaceUrl: true
        });
    };
    InterviewLibraryComponent.prototype.refreshActiveSelection = function () {
        var child = this.route.firstChild;
        this.activeQuestionId = child && child.routeConfig && child.routeConfig.path !== 'practice'
            ? child.snapshot.paramMap.get('questionId') || ''
            : '';
    };
    InterviewLibraryComponent.ctorParameters = function () { return [
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"] },
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"] },
        { type: _question_service__WEBPACK_IMPORTED_MODULE_6__["QuestionService"] },
        { type: _study_progress_service__WEBPACK_IMPORTED_MODULE_7__["StudyProgressService"] },
        { type: _practice_session_service__WEBPACK_IMPORTED_MODULE_5__["PracticeSessionService"] },
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["ChangeDetectorRef"] }
    ]; };
    InterviewLibraryComponent.propDecorators = {
        searchInput: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["ViewChild"], args: ['searchInput',] }],
        focusSearchShortcut: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["HostListener"], args: ['document:keydown', ['$event'],] }]
    };
    InterviewLibraryComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Component"])({
            selector: 'app-interview-library',
            template: _raw_loader_interview_library_component_html__WEBPACK_IMPORTED_MODULE_0__["default"],
            styles: [_interview_library_component_css__WEBPACK_IMPORTED_MODULE_1__["default"]]
        }),
        __metadata("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"],
            _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"],
            _question_service__WEBPACK_IMPORTED_MODULE_6__["QuestionService"],
            _study_progress_service__WEBPACK_IMPORTED_MODULE_7__["StudyProgressService"],
            _practice_session_service__WEBPACK_IMPORTED_MODULE_5__["PracticeSessionService"],
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ChangeDetectorRef"]])
    ], InterviewLibraryComponent);
    return InterviewLibraryComponent;
}());



/***/ }),

/***/ "qFsG":
/*!***********************************************************************!*\
  !*** ./node_modules/@angular/material/__ivy_ngcc__/fesm2015/input.js ***!
  \***********************************************************************/
/*! exports provided: MAT_INPUT_VALUE_ACCESSOR, MatInput, MatInputModule, MatTextareaAutosize, getMatInputUnsupportedTypeError */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MAT_INPUT_VALUE_ACCESSOR", function() { return MAT_INPUT_VALUE_ACCESSOR; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MatInput", function() { return MatInput; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MatInputModule", function() { return MatInputModule; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MatTextareaAutosize", function() { return MatTextareaAutosize; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getMatInputUnsupportedTypeError", function() { return getMatInputUnsupportedTypeError; });
/* harmony import */ var _home_runner_work_learn_angular_learn_angular_node_modules_babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/classCallCheck */ "1OyB");
/* harmony import */ var _home_runner_work_learn_angular_learn_angular_node_modules_babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/createClass */ "vuIU");
/* harmony import */ var _home_runner_work_learn_angular_learn_angular_node_modules_babel_runtime_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/possibleConstructorReturn */ "md7G");
/* harmony import */ var _home_runner_work_learn_angular_learn_angular_node_modules_babel_runtime_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/getPrototypeOf */ "foSv");
/* harmony import */ var _home_runner_work_learn_angular_learn_angular_node_modules_babel_runtime_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/inherits */ "Ji7U");
/* harmony import */ var _angular_cdk_text_field__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/cdk/text-field */ "ihCf");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_cdk_coercion__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/cdk/coercion */ "8LU1");
/* harmony import */ var _angular_cdk_platform__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/cdk/platform */ "nLfN");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var _angular_material_core__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/material/core */ "FKr1");
/* harmony import */ var _angular_material_form_field__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/material/form-field */ "kmnG");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! rxjs */ "qCKp");






function _callSuper(_this, derived, args) {
  function isNativeReflectConstruct() {
    if (typeof Reflect === "undefined" || !Reflect.construct) return false;
    if (Reflect.construct.sham) return false;
    if (typeof Proxy === "function") return true;

    try {
      return !Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {}));
    } catch (e) {
      return false;
    }
  }

  derived = Object(_home_runner_work_learn_angular_learn_angular_node_modules_babel_runtime_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_3__["default"])(derived);
  return Object(_home_runner_work_learn_angular_learn_angular_node_modules_babel_runtime_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_2__["default"])(_this, isNativeReflectConstruct() ? Reflect.construct(derived, args || [], Object(_home_runner_work_learn_angular_learn_angular_node_modules_babel_runtime_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_3__["default"])(_this).constructor) : derived.apply(_this, args));
}









/**
 * @license
 * Copyright Google LLC All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */

/**
 * Directive to automatically resize a textarea to fit its content.
 * @deprecated Use `cdkTextareaAutosize` from `@angular/cdk/text-field` instead.
 * @breaking-change 8.0.0
 */








var MatTextareaAutosize = /*#__PURE__*/function (_CdkTextareaAutosize) {
  function MatTextareaAutosize() {
    Object(_home_runner_work_learn_angular_learn_angular_node_modules_babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_0__["default"])(this, MatTextareaAutosize);

    return _callSuper(this, MatTextareaAutosize, arguments);
  }

  Object(_home_runner_work_learn_angular_learn_angular_node_modules_babel_runtime_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_4__["default"])(MatTextareaAutosize, _CdkTextareaAutosize);

  return Object(_home_runner_work_learn_angular_learn_angular_node_modules_babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_1__["default"])(MatTextareaAutosize, [{
    key: "matAutosizeMinRows",
    get: function get() {
      return this.minRows;
    },
    set: function set(value) {
      this.minRows = value;
    }
  }, {
    key: "matAutosizeMaxRows",
    get: function get() {
      return this.maxRows;
    },
    set: function set(value) {
      this.maxRows = value;
    }
  }, {
    key: "matAutosize",
    get: function get() {
      return this.enabled;
    },
    set: function set(value) {
      this.enabled = value;
    }
  }, {
    key: "matTextareaAutosize",
    get: function get() {
      return this.enabled;
    },
    set: function set(value) {
      this.enabled = value;
    }
  }]);
}(_angular_cdk_text_field__WEBPACK_IMPORTED_MODULE_5__["CdkTextareaAutosize"]);

MatTextareaAutosize.ɵfac = function MatTextareaAutosize_Factory(t) {
  return ɵMatTextareaAutosize_BaseFactory(t || MatTextareaAutosize);
};

MatTextareaAutosize.ɵdir = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵdefineDirective"]({
  type: MatTextareaAutosize,
  selectors: [["textarea", "mat-autosize", ""], ["textarea", "matTextareaAutosize", ""]],
  hostAttrs: ["rows", "1", 1, "cdk-textarea-autosize", "mat-autosize"],
  inputs: {
    cdkAutosizeMinRows: "cdkAutosizeMinRows",
    cdkAutosizeMaxRows: "cdkAutosizeMaxRows",
    matAutosizeMinRows: "matAutosizeMinRows",
    matAutosizeMaxRows: "matAutosizeMaxRows",
    matAutosize: ["mat-autosize", "matAutosize"],
    matTextareaAutosize: "matTextareaAutosize"
  },
  exportAs: ["matTextareaAutosize"],
  features: [_angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵInheritDefinitionFeature"]]
});
MatTextareaAutosize.propDecorators = {
  matAutosizeMinRows: [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_6__["Input"]
  }],
  matAutosizeMaxRows: [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_6__["Input"]
  }],
  matAutosize: [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_6__["Input"],
    args: ['mat-autosize']
  }],
  matTextareaAutosize: [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_6__["Input"]
  }]
};
var ɵMatTextareaAutosize_BaseFactory = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵgetInheritedFactory"](MatTextareaAutosize);

(function () {
  (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵsetClassMetadata"](MatTextareaAutosize, [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_6__["Directive"],
    args: [{
      selector: 'textarea[mat-autosize], textarea[matTextareaAutosize]',
      exportAs: 'matTextareaAutosize',
      inputs: ['cdkAutosizeMinRows', 'cdkAutosizeMaxRows'],
      host: {
        'class': 'cdk-textarea-autosize mat-autosize',
        // Textarea elements that have the directive applied should have a single row by default.
        // Browsers normally show two rows by default and therefore this limits the minRows binding.
        'rows': '1'
      }
    }]
  }], null, {
    matAutosizeMinRows: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_6__["Input"]
    }],
    matAutosizeMaxRows: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_6__["Input"]
    }],
    matAutosize: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_6__["Input"],
      args: ['mat-autosize']
    }],
    matTextareaAutosize: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_6__["Input"]
    }]
  });
})();
/**
 * @license
 * Copyright Google LLC All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */

/** @docs-private */


function getMatInputUnsupportedTypeError(type) {
  return Error("Input type \"".concat(type, "\" isn't supported by matInput."));
}
/**
 * @license
 * Copyright Google LLC All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */

/**
 * This token is used to inject the object whose value should be set into `MatInput`. If none is
 * provided, the native `HTMLInputElement` is used. Directives like `MatDatepickerInput` can provide
 * themselves for this token, in order to make `MatInput` delegate the getting and setting of the
 * value to them.
 */


var MAT_INPUT_VALUE_ACCESSOR = new _angular_core__WEBPACK_IMPORTED_MODULE_6__["InjectionToken"]('MAT_INPUT_VALUE_ACCESSOR');
/**
 * @license
 * Copyright Google LLC All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */
// Invalid input type. Using one of these will throw an MatInputUnsupportedTypeError.

var MAT_INPUT_INVALID_TYPES = ['button', 'checkbox', 'file', 'hidden', 'image', 'radio', 'range', 'reset', 'submit'];
var nextUniqueId = 0; // Boilerplate for applying mixins to MatInput.

/** @docs-private */

var MatInputBase = /*#__PURE__*/Object(_home_runner_work_learn_angular_learn_angular_node_modules_babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_1__["default"])(function MatInputBase(_defaultErrorStateMatcher, _parentForm, _parentFormGroup,
/** @docs-private */
ngControl) {
  Object(_home_runner_work_learn_angular_learn_angular_node_modules_babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_0__["default"])(this, MatInputBase);

  this._defaultErrorStateMatcher = _defaultErrorStateMatcher;
  this._parentForm = _parentForm;
  this._parentFormGroup = _parentFormGroup;
  this.ngControl = ngControl;
});

var _MatInputMixinBase = Object(_angular_material_core__WEBPACK_IMPORTED_MODULE_10__["mixinErrorState"])(MatInputBase);
/** Directive that allows a native input to work inside a `MatFormField`. */


var MatInput = /*#__PURE__*/function (_MatInputMixinBase2) {
  function MatInput(_elementRef, _platform,
  /** @docs-private */
  ngControl, _parentForm, _parentFormGroup, _defaultErrorStateMatcher, inputValueAccessor, _autofillMonitor, ngZone, // TODO: Remove this once the legacy appearance has been removed. We only need
  // to inject the form-field for determining whether the placeholder has been promoted.
  _formField) {
    var _this2;

    Object(_home_runner_work_learn_angular_learn_angular_node_modules_babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_0__["default"])(this, MatInput);

    _this2 = _callSuper(this, MatInput, [_defaultErrorStateMatcher, _parentForm, _parentFormGroup, ngControl]);
    _this2._elementRef = _elementRef;
    _this2._platform = _platform;
    _this2.ngControl = ngControl;
    _this2._autofillMonitor = _autofillMonitor;
    _this2._formField = _formField;
    _this2._uid = "mat-input-".concat(nextUniqueId++);
    /**
     * Implemented as part of MatFormFieldControl.
     * @docs-private
     */

    _this2.focused = false;
    /**
     * Implemented as part of MatFormFieldControl.
     * @docs-private
     */

    _this2.stateChanges = new rxjs__WEBPACK_IMPORTED_MODULE_12__["Subject"]();
    /**
     * Implemented as part of MatFormFieldControl.
     * @docs-private
     */

    _this2.controlType = 'mat-input';
    /**
     * Implemented as part of MatFormFieldControl.
     * @docs-private
     */

    _this2.autofilled = false;
    _this2._disabled = false;
    _this2._required = false;
    _this2._type = 'text';
    _this2._readonly = false;
    _this2._neverEmptyInputTypes = ['date', 'datetime', 'datetime-local', 'month', 'time', 'week'].filter(function (t) {
      return Object(_angular_cdk_platform__WEBPACK_IMPORTED_MODULE_8__["getSupportedInputTypes"])().has(t);
    });
    var element = _this2._elementRef.nativeElement;
    var nodeName = element.nodeName.toLowerCase(); // If no input value accessor was explicitly specified, use the element as the input value
    // accessor.

    _this2._inputValueAccessor = inputValueAccessor || element;
    _this2._previousNativeValue = _this2.value; // Force setter to be called in case id was not specified.

    _this2.id = _this2.id; // On some versions of iOS the caret gets stuck in the wrong place when holding down the delete
    // key. In order to get around this we need to "jiggle" the caret loose. Since this bug only
    // exists on iOS, we only bother to install the listener on iOS.

    if (_platform.IOS) {
      ngZone.runOutsideAngular(function () {
        _elementRef.nativeElement.addEventListener('keyup', function (event) {
          var el = event.target;

          if (!el.value && !el.selectionStart && !el.selectionEnd) {
            // Note: Just setting `0, 0` doesn't fix the issue. Setting
            // `1, 1` fixes it for the first time that you type text and
            // then hold delete. Toggling to `1, 1` and then back to
            // `0, 0` seems to completely fix it.
            el.setSelectionRange(1, 1);
            el.setSelectionRange(0, 0);
          }
        });
      });
    }

    _this2._isServer = !_this2._platform.isBrowser;
    _this2._isNativeSelect = nodeName === 'select';
    _this2._isTextarea = nodeName === 'textarea';

    if (_this2._isNativeSelect) {
      _this2.controlType = element.multiple ? 'mat-native-select-multiple' : 'mat-native-select';
    }

    return _this2;
  }
  /**
   * Implemented as part of MatFormFieldControl.
   * @docs-private
   */


  Object(_home_runner_work_learn_angular_learn_angular_node_modules_babel_runtime_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_4__["default"])(MatInput, _MatInputMixinBase2);

  return Object(_home_runner_work_learn_angular_learn_angular_node_modules_babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_1__["default"])(MatInput, [{
    key: "disabled",
    get: function get() {
      if (this.ngControl && this.ngControl.disabled !== null) {
        return this.ngControl.disabled;
      }

      return this._disabled;
    },
    set: function set(value) {
      this._disabled = Object(_angular_cdk_coercion__WEBPACK_IMPORTED_MODULE_7__["coerceBooleanProperty"])(value); // Browsers may not fire the blur event if the input is disabled too quickly.
      // Reset from here to ensure that the element doesn't become stuck.

      if (this.focused) {
        this.focused = false;
        this.stateChanges.next();
      }
    }
    /**
     * Implemented as part of MatFormFieldControl.
     * @docs-private
     */

  }, {
    key: "id",
    get: function get() {
      return this._id;
    },
    set: function set(value) {
      this._id = value || this._uid;
    }
    /**
     * Implemented as part of MatFormFieldControl.
     * @docs-private
     */

  }, {
    key: "required",
    get: function get() {
      return this._required;
    },
    set: function set(value) {
      this._required = Object(_angular_cdk_coercion__WEBPACK_IMPORTED_MODULE_7__["coerceBooleanProperty"])(value);
    }
    /** Input type of the element. */

  }, {
    key: "type",
    get: function get() {
      return this._type;
    },
    set: function set(value) {
      this._type = value || 'text';

      this._validateType(); // When using Angular inputs, developers are no longer able to set the properties on the native
      // input element. To ensure that bindings for `type` work, we need to sync the setter
      // with the native property. Textarea elements don't support the type property or attribute.


      if (!this._isTextarea && Object(_angular_cdk_platform__WEBPACK_IMPORTED_MODULE_8__["getSupportedInputTypes"])().has(this._type)) {
        this._elementRef.nativeElement.type = this._type;
      }
    }
    /**
     * Implemented as part of MatFormFieldControl.
     * @docs-private
     */

  }, {
    key: "value",
    get: function get() {
      return this._inputValueAccessor.value;
    },
    set: function set(value) {
      if (value !== this.value) {
        this._inputValueAccessor.value = value;
        this.stateChanges.next();
      }
    }
    /** Whether the element is readonly. */

  }, {
    key: "readonly",
    get: function get() {
      return this._readonly;
    },
    set: function set(value) {
      this._readonly = Object(_angular_cdk_coercion__WEBPACK_IMPORTED_MODULE_7__["coerceBooleanProperty"])(value);
    }
  }, {
    key: "ngAfterViewInit",
    value: function ngAfterViewInit() {
      var _this3 = this;

      if (this._platform.isBrowser) {
        this._autofillMonitor.monitor(this._elementRef.nativeElement).subscribe(function (event) {
          _this3.autofilled = event.isAutofilled;

          _this3.stateChanges.next();
        });
      }
    }
  }, {
    key: "ngOnChanges",
    value: function ngOnChanges() {
      this.stateChanges.next();
    }
  }, {
    key: "ngOnDestroy",
    value: function ngOnDestroy() {
      this.stateChanges.complete();

      if (this._platform.isBrowser) {
        this._autofillMonitor.stopMonitoring(this._elementRef.nativeElement);
      }
    }
  }, {
    key: "ngDoCheck",
    value: function ngDoCheck() {
      if (this.ngControl) {
        // We need to re-evaluate this on every change detection cycle, because there are some
        // error triggers that we can't subscribe to (e.g. parent form submissions). This means
        // that whatever logic is in here has to be super lean or we risk destroying the performance.
        this.updateErrorState();
      } // We need to dirty-check the native element's value, because there are some cases where
      // we won't be notified when it changes (e.g. the consumer isn't using forms or they're
      // updating the value using `emitEvent: false`).


      this._dirtyCheckNativeValue(); // We need to dirty-check and set the placeholder attribute ourselves, because whether it's
      // present or not depends on a query which is prone to "changed after checked" errors.


      this._dirtyCheckPlaceholder();
    }
    /** Focuses the input. */

  }, {
    key: "focus",
    value: function focus(options) {
      this._elementRef.nativeElement.focus(options);
    } // We have to use a `HostListener` here in order to support both Ivy and ViewEngine.
    // In Ivy the `host` bindings will be merged when this class is extended, whereas in
    // ViewEngine they're overwritten.
    // TODO(crisbeto): we move this back into `host` once Ivy is turned on by default.

    /** Callback for the cases where the focused state of the input changes. */
    // tslint:disable:no-host-decorator-in-concrete
    // tslint:enable:no-host-decorator-in-concrete

  }, {
    key: "_focusChanged",
    value: function _focusChanged(isFocused) {
      if (isFocused !== this.focused && (!this.readonly || !isFocused)) {
        this.focused = isFocused;
        this.stateChanges.next();
      }
    } // We have to use a `HostListener` here in order to support both Ivy and ViewEngine.
    // In Ivy the `host` bindings will be merged when this class is extended, whereas in
    // ViewEngine they're overwritten.
    // TODO(crisbeto): we move this back into `host` once Ivy is turned on by default.
    // tslint:disable-next-line:no-host-decorator-in-concrete

  }, {
    key: "_onInput",
    value: function _onInput() {// This is a noop function and is used to let Angular know whenever the value changes.
      // Angular will run a new change detection each time the `input` event has been dispatched.
      // It's necessary that Angular recognizes the value change, because when floatingLabel
      // is set to false and Angular forms aren't used, the placeholder won't recognize the
      // value changes and will not disappear.
      // Listening to the input event wouldn't be necessary when the input is using the
      // FormsModule or ReactiveFormsModule, because Angular forms also listens to input events.
    }
    /** Does some manual dirty checking on the native input `placeholder` attribute. */

  }, {
    key: "_dirtyCheckPlaceholder",
    value: function _dirtyCheckPlaceholder() {
      var _a, _b; // If we're hiding the native placeholder, it should also be cleared from the DOM, otherwise
      // screen readers will read it out twice: once from the label and once from the attribute.
      // TODO: can be removed once we get rid of the `legacy` style for the form field, because it's
      // the only one that supports promoting the placeholder to a label.


      var placeholder = ((_b = (_a = this._formField) === null || _a === void 0 ? void 0 : _a._hideControlPlaceholder) === null || _b === void 0 ? void 0 : _b.call(_a)) ? null : this.placeholder;

      if (placeholder !== this._previousPlaceholder) {
        var element = this._elementRef.nativeElement;
        this._previousPlaceholder = placeholder;
        placeholder ? element.setAttribute('placeholder', placeholder) : element.removeAttribute('placeholder');
      }
    }
    /** Does some manual dirty checking on the native input `value` property. */

  }, {
    key: "_dirtyCheckNativeValue",
    value: function _dirtyCheckNativeValue() {
      var newValue = this._elementRef.nativeElement.value;

      if (this._previousNativeValue !== newValue) {
        this._previousNativeValue = newValue;
        this.stateChanges.next();
      }
    }
    /** Make sure the input is a supported type. */

  }, {
    key: "_validateType",
    value: function _validateType() {
      if (MAT_INPUT_INVALID_TYPES.indexOf(this._type) > -1 && (typeof ngDevMode === 'undefined' || ngDevMode)) {
        throw getMatInputUnsupportedTypeError(this._type);
      }
    }
    /** Checks whether the input type is one of the types that are never empty. */

  }, {
    key: "_isNeverEmpty",
    value: function _isNeverEmpty() {
      return this._neverEmptyInputTypes.indexOf(this._type) > -1;
    }
    /** Checks whether the input is invalid based on the native validation. */

  }, {
    key: "_isBadInput",
    value: function _isBadInput() {
      // The `validity` property won't be present on platform-server.
      var validity = this._elementRef.nativeElement.validity;
      return validity && validity.badInput;
    }
    /**
     * Implemented as part of MatFormFieldControl.
     * @docs-private
     */

  }, {
    key: "empty",
    get: function get() {
      return !this._isNeverEmpty() && !this._elementRef.nativeElement.value && !this._isBadInput() && !this.autofilled;
    }
    /**
     * Implemented as part of MatFormFieldControl.
     * @docs-private
     */

  }, {
    key: "shouldLabelFloat",
    get: function get() {
      if (this._isNativeSelect) {
        // For a single-selection `<select>`, the label should float when the selected option has
        // a non-empty display value. For a `<select multiple>`, the label *always* floats to avoid
        // overlapping the label with the options.
        var selectElement = this._elementRef.nativeElement;
        var firstOption = selectElement.options[0]; // On most browsers the `selectedIndex` will always be 0, however on IE and Edge it'll be
        // -1 if the `value` is set to something, that isn't in the list of options, at a later point.

        return this.focused || selectElement.multiple || !this.empty || !!(selectElement.selectedIndex > -1 && firstOption && firstOption.label);
      } else {
        return this.focused || !this.empty;
      }
    }
    /**
     * Implemented as part of MatFormFieldControl.
     * @docs-private
     */

  }, {
    key: "setDescribedByIds",
    value: function setDescribedByIds(ids) {
      if (ids.length) {
        this._elementRef.nativeElement.setAttribute('aria-describedby', ids.join(' '));
      } else {
        this._elementRef.nativeElement.removeAttribute('aria-describedby');
      }
    }
    /**
     * Implemented as part of MatFormFieldControl.
     * @docs-private
     */

  }, {
    key: "onContainerClick",
    value: function onContainerClick() {
      // Do not re-focus the input element if the element is already focused. Otherwise it can happen
      // that someone clicks on a time input and the cursor resets to the "hours" field while the
      // "minutes" field was actually clicked. See: https://github.com/angular/components/issues/12849
      if (!this.focused) {
        this.focus();
      }
    }
  }]);
}(_MatInputMixinBase);

MatInput.ɵfac = function MatInput_Factory(t) {
  return new (t || MatInput)(_angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_6__["ElementRef"]), _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵdirectiveInject"](_angular_cdk_platform__WEBPACK_IMPORTED_MODULE_8__["Platform"]), _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵdirectiveInject"](_angular_forms__WEBPACK_IMPORTED_MODULE_9__["NgControl"], 10), _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵdirectiveInject"](_angular_forms__WEBPACK_IMPORTED_MODULE_9__["NgForm"], 8), _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵdirectiveInject"](_angular_forms__WEBPACK_IMPORTED_MODULE_9__["FormGroupDirective"], 8), _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵdirectiveInject"](_angular_material_core__WEBPACK_IMPORTED_MODULE_10__["ErrorStateMatcher"]), _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵdirectiveInject"](MAT_INPUT_VALUE_ACCESSOR, 10), _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵdirectiveInject"](_angular_cdk_text_field__WEBPACK_IMPORTED_MODULE_5__["AutofillMonitor"]), _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_6__["NgZone"]), _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵdirectiveInject"](_angular_material_form_field__WEBPACK_IMPORTED_MODULE_11__["MAT_FORM_FIELD"], 8));
};

MatInput.ɵdir = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵdefineDirective"]({
  type: MatInput,
  selectors: [["input", "matInput", ""], ["textarea", "matInput", ""], ["select", "matNativeControl", ""], ["input", "matNativeControl", ""], ["textarea", "matNativeControl", ""]],
  hostAttrs: [1, "mat-input-element", "mat-form-field-autofill-control"],
  hostVars: 9,
  hostBindings: function MatInput_HostBindings(rf, ctx) {
    if (rf & 1) {
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵlistener"]("focus", function MatInput_focus_HostBindingHandler() {
        return ctx._focusChanged(true);
      })("blur", function MatInput_blur_HostBindingHandler() {
        return ctx._focusChanged(false);
      })("input", function MatInput_input_HostBindingHandler() {
        return ctx._onInput();
      });
    }

    if (rf & 2) {
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵhostProperty"]("disabled", ctx.disabled)("required", ctx.required);
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵattribute"]("id", ctx.id)("data-placeholder", ctx.placeholder)("readonly", ctx.readonly && !ctx._isNativeSelect || null)("aria-invalid", ctx.errorState)("aria-required", ctx.required.toString());
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵclassProp"]("mat-input-server", ctx._isServer);
    }
  },
  inputs: {
    id: "id",
    disabled: "disabled",
    required: "required",
    type: "type",
    value: "value",
    readonly: "readonly",
    placeholder: "placeholder",
    errorStateMatcher: "errorStateMatcher",
    userAriaDescribedBy: ["aria-describedby", "userAriaDescribedBy"]
  },
  exportAs: ["matInput"],
  features: [_angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵProvidersFeature"]([{
    provide: _angular_material_form_field__WEBPACK_IMPORTED_MODULE_11__["MatFormFieldControl"],
    useExisting: MatInput
  }]), _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵInheritDefinitionFeature"], _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵNgOnChangesFeature"]]
});

MatInput.ctorParameters = function () {
  return [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_6__["ElementRef"]
  }, {
    type: _angular_cdk_platform__WEBPACK_IMPORTED_MODULE_8__["Platform"]
  }, {
    type: _angular_forms__WEBPACK_IMPORTED_MODULE_9__["NgControl"],
    decorators: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_6__["Optional"]
    }, {
      type: _angular_core__WEBPACK_IMPORTED_MODULE_6__["Self"]
    }]
  }, {
    type: _angular_forms__WEBPACK_IMPORTED_MODULE_9__["NgForm"],
    decorators: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_6__["Optional"]
    }]
  }, {
    type: _angular_forms__WEBPACK_IMPORTED_MODULE_9__["FormGroupDirective"],
    decorators: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_6__["Optional"]
    }]
  }, {
    type: _angular_material_core__WEBPACK_IMPORTED_MODULE_10__["ErrorStateMatcher"]
  }, {
    type: undefined,
    decorators: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_6__["Optional"]
    }, {
      type: _angular_core__WEBPACK_IMPORTED_MODULE_6__["Self"]
    }, {
      type: _angular_core__WEBPACK_IMPORTED_MODULE_6__["Inject"],
      args: [MAT_INPUT_VALUE_ACCESSOR]
    }]
  }, {
    type: _angular_cdk_text_field__WEBPACK_IMPORTED_MODULE_5__["AutofillMonitor"]
  }, {
    type: _angular_core__WEBPACK_IMPORTED_MODULE_6__["NgZone"]
  }, {
    type: _angular_material_form_field__WEBPACK_IMPORTED_MODULE_11__["MatFormField"],
    decorators: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_6__["Optional"]
    }, {
      type: _angular_core__WEBPACK_IMPORTED_MODULE_6__["Inject"],
      args: [_angular_material_form_field__WEBPACK_IMPORTED_MODULE_11__["MAT_FORM_FIELD"]]
    }]
  }];
};

MatInput.propDecorators = {
  disabled: [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_6__["Input"]
  }],
  id: [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_6__["Input"]
  }],
  placeholder: [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_6__["Input"]
  }],
  required: [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_6__["Input"]
  }],
  type: [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_6__["Input"]
  }],
  errorStateMatcher: [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_6__["Input"]
  }],
  userAriaDescribedBy: [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_6__["Input"],
    args: ['aria-describedby']
  }],
  value: [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_6__["Input"]
  }],
  readonly: [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_6__["Input"]
  }],
  _focusChanged: [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_6__["HostListener"],
    args: ['focus', ['true']]
  }, {
    type: _angular_core__WEBPACK_IMPORTED_MODULE_6__["HostListener"],
    args: ['blur', ['false']]
  }],
  _onInput: [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_6__["HostListener"],
    args: ['input']
  }]
};

(function () {
  (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵsetClassMetadata"](MatInput, [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_6__["Directive"],
    args: [{
      selector: "input[matInput], textarea[matInput], select[matNativeControl],\n      input[matNativeControl], textarea[matNativeControl]",
      exportAs: 'matInput',
      host: {
        /**
         * @breaking-change 8.0.0 remove .mat-form-field-autofill-control in favor of AutofillMonitor.
         */
        'class': 'mat-input-element mat-form-field-autofill-control',
        '[class.mat-input-server]': '_isServer',
        // Native input properties that are overwritten by Angular inputs need to be synced with
        // the native input element. Otherwise property bindings for those don't work.
        '[attr.id]': 'id',
        // At the time of writing, we have a lot of customer tests that look up the input based on its
        // placeholder. Since we sometimes omit the placeholder attribute from the DOM to prevent screen
        // readers from reading it twice, we have to keep it somewhere in the DOM for the lookup.
        '[attr.data-placeholder]': 'placeholder',
        '[disabled]': 'disabled',
        '[required]': 'required',
        '[attr.readonly]': 'readonly && !_isNativeSelect || null',
        '[attr.aria-invalid]': 'errorState',
        '[attr.aria-required]': 'required.toString()'
      },
      providers: [{
        provide: _angular_material_form_field__WEBPACK_IMPORTED_MODULE_11__["MatFormFieldControl"],
        useExisting: MatInput
      }]
    }]
  }], function () {
    return [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_6__["ElementRef"]
    }, {
      type: _angular_cdk_platform__WEBPACK_IMPORTED_MODULE_8__["Platform"]
    }, {
      type: _angular_forms__WEBPACK_IMPORTED_MODULE_9__["NgControl"],
      decorators: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_6__["Optional"]
      }, {
        type: _angular_core__WEBPACK_IMPORTED_MODULE_6__["Self"]
      }]
    }, {
      type: _angular_forms__WEBPACK_IMPORTED_MODULE_9__["NgForm"],
      decorators: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_6__["Optional"]
      }]
    }, {
      type: _angular_forms__WEBPACK_IMPORTED_MODULE_9__["FormGroupDirective"],
      decorators: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_6__["Optional"]
      }]
    }, {
      type: _angular_material_core__WEBPACK_IMPORTED_MODULE_10__["ErrorStateMatcher"]
    }, {
      type: undefined,
      decorators: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_6__["Optional"]
      }, {
        type: _angular_core__WEBPACK_IMPORTED_MODULE_6__["Self"]
      }, {
        type: _angular_core__WEBPACK_IMPORTED_MODULE_6__["Inject"],
        args: [MAT_INPUT_VALUE_ACCESSOR]
      }]
    }, {
      type: _angular_cdk_text_field__WEBPACK_IMPORTED_MODULE_5__["AutofillMonitor"]
    }, {
      type: _angular_core__WEBPACK_IMPORTED_MODULE_6__["NgZone"]
    }, {
      type: _angular_material_form_field__WEBPACK_IMPORTED_MODULE_11__["MatFormField"],
      decorators: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_6__["Optional"]
      }, {
        type: _angular_core__WEBPACK_IMPORTED_MODULE_6__["Inject"],
        args: [_angular_material_form_field__WEBPACK_IMPORTED_MODULE_11__["MAT_FORM_FIELD"]]
      }]
    }];
  }, {
    id: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_6__["Input"]
    }],
    disabled: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_6__["Input"]
    }],
    required: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_6__["Input"]
    }],
    type: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_6__["Input"]
    }],
    value: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_6__["Input"]
    }],
    readonly: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_6__["Input"]
    }],
    // We have to use a `HostListener` here in order to support both Ivy and ViewEngine.
    // In Ivy the `host` bindings will be merged when this class is extended, whereas in
    // ViewEngine they're overwritten.
    // TODO(crisbeto): we move this back into `host` once Ivy is turned on by default.

    /** Callback for the cases where the focused state of the input changes. */
    // tslint:disable:no-host-decorator-in-concrete
    // tslint:enable:no-host-decorator-in-concrete
    _focusChanged: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_6__["HostListener"],
      args: ['focus', ['true']]
    }, {
      type: _angular_core__WEBPACK_IMPORTED_MODULE_6__["HostListener"],
      args: ['blur', ['false']]
    }],
    // We have to use a `HostListener` here in order to support both Ivy and ViewEngine.
    // In Ivy the `host` bindings will be merged when this class is extended, whereas in
    // ViewEngine they're overwritten.
    // TODO(crisbeto): we move this back into `host` once Ivy is turned on by default.
    // tslint:disable-next-line:no-host-decorator-in-concrete
    _onInput: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_6__["HostListener"],
      args: ['input']
    }],
    placeholder: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_6__["Input"]
    }],
    errorStateMatcher: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_6__["Input"]
    }],
    userAriaDescribedBy: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_6__["Input"],
      args: ['aria-describedby']
    }]
  });
})();
/**
 * @license
 * Copyright Google LLC All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */


var MatInputModule = /*#__PURE__*/Object(_home_runner_work_learn_angular_learn_angular_node_modules_babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_1__["default"])(function MatInputModule() {
  Object(_home_runner_work_learn_angular_learn_angular_node_modules_babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_0__["default"])(this, MatInputModule);
});

MatInputModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵdefineNgModule"]({
  type: MatInputModule
});
MatInputModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵdefineInjector"]({
  factory: function MatInputModule_Factory(t) {
    return new (t || MatInputModule)();
  },
  providers: [_angular_material_core__WEBPACK_IMPORTED_MODULE_10__["ErrorStateMatcher"]],
  imports: [[_angular_cdk_text_field__WEBPACK_IMPORTED_MODULE_5__["TextFieldModule"], _angular_material_form_field__WEBPACK_IMPORTED_MODULE_11__["MatFormFieldModule"], _angular_material_core__WEBPACK_IMPORTED_MODULE_10__["MatCommonModule"]], _angular_cdk_text_field__WEBPACK_IMPORTED_MODULE_5__["TextFieldModule"], // We re-export the `MatFormFieldModule` since `MatInput` will almost always
  // be used together with `MatFormField`.
  _angular_material_form_field__WEBPACK_IMPORTED_MODULE_11__["MatFormFieldModule"]]
});

(function () {
  (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵsetNgModuleScope"](MatInputModule, {
    declarations: function declarations() {
      return [MatInput, MatTextareaAutosize];
    },
    imports: function imports() {
      return [_angular_cdk_text_field__WEBPACK_IMPORTED_MODULE_5__["TextFieldModule"], _angular_material_form_field__WEBPACK_IMPORTED_MODULE_11__["MatFormFieldModule"], _angular_material_core__WEBPACK_IMPORTED_MODULE_10__["MatCommonModule"]];
    },
    exports: function exports() {
      return [_angular_cdk_text_field__WEBPACK_IMPORTED_MODULE_5__["TextFieldModule"], // We re-export the `MatFormFieldModule` since `MatInput` will almost always
      // be used together with `MatFormField`.
      _angular_material_form_field__WEBPACK_IMPORTED_MODULE_11__["MatFormFieldModule"], MatInput, MatTextareaAutosize];
    }
  });
})();

(function () {
  (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵsetClassMetadata"](MatInputModule, [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_6__["NgModule"],
    args: [{
      declarations: [MatInput, MatTextareaAutosize],
      imports: [_angular_cdk_text_field__WEBPACK_IMPORTED_MODULE_5__["TextFieldModule"], _angular_material_form_field__WEBPACK_IMPORTED_MODULE_11__["MatFormFieldModule"], _angular_material_core__WEBPACK_IMPORTED_MODULE_10__["MatCommonModule"]],
      exports: [_angular_cdk_text_field__WEBPACK_IMPORTED_MODULE_5__["TextFieldModule"], // We re-export the `MatFormFieldModule` since `MatInput` will almost always
      // be used together with `MatFormField`.
      _angular_material_form_field__WEBPACK_IMPORTED_MODULE_11__["MatFormFieldModule"], MatInput, MatTextareaAutosize],
      providers: [_angular_material_core__WEBPACK_IMPORTED_MODULE_10__["ErrorStateMatcher"]]
    }]
  }], null, null);
})();
/**
 * @license
 * Copyright Google LLC All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */

/**
 * Generated bundle index. Do not edit.
 */




/***/ }),

/***/ "qZ7x":
/*!**************************************************************!*\
  !*** ./src/app/layouts/admin-layout/admin-layout.routing.ts ***!
  \**************************************************************/
/*! exports provided: AdminLayoutRoutes */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AdminLayoutRoutes", function() { return AdminLayoutRoutes; });
/* harmony import */ var _dashboard_dashboard_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../dashboard/dashboard.component */ "QX6l");
/* harmony import */ var _user_profile_user_profile_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../user-profile/user-profile.component */ "/de2");
/* harmony import */ var _table_list_table_list_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../table-list/table-list.component */ "smLI");
/* harmony import */ var _typography_typography_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../typography/typography.component */ "un8i");
/* harmony import */ var _icons_icons_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../icons/icons.component */ "8+yc");
/* harmony import */ var _maps_maps_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../maps/maps.component */ "urC5");
/* harmony import */ var _notifications_notifications_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../notifications/notifications.component */ "4G6T");
/* harmony import */ var _ng_animate_components_animate_buttons_animate_buttons_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../ng-animate/components/animate-buttons/animate-buttons.component */ "2RNu");
/* harmony import */ var _interview_library_interview_library_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../interview-library/interview-library.component */ "kEEF");
/* harmony import */ var _interview_library_answer_reader_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../interview-library/answer-reader.component */ "DiQn");
/* harmony import */ var _interview_library_practice_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../../interview-library/practice.component */ "a6ah");











var AdminLayoutRoutes = [
    // {
    //   path: '',
    //   children: [ {
    //     path: 'dashboard',
    //     component: DashboardComponent
    // }]}, {
    // path: '',
    // children: [ {
    //   path: 'userprofile',
    //   component: UserProfileComponent
    // }]
    // }, {
    //   path: '',
    //   children: [ {
    //     path: 'icons',
    //     component: IconsComponent
    //     }]
    // }, {
    //     path: '',
    //     children: [ {
    //         path: 'notifications',
    //         component: NotificationsComponent
    //     }]
    // }, {
    //     path: '',
    //     children: [ {
    //         path: 'maps',
    //         component: MapsComponent
    //     }]
    // }, {
    //     path: '',
    //     children: [ {
    //         path: 'typography',
    //         component: TypographyComponent
    //     }]
    // }, {
    //     path: '',
    //     children: [ {
    //         path: 'upgrade',
    //         component: UpgradeComponent
    //     }]
    // }
    { path: 'dashboard', component: _dashboard_dashboard_component__WEBPACK_IMPORTED_MODULE_0__["DashboardComponent"] },
    { path: 'user-profile', component: _user_profile_user_profile_component__WEBPACK_IMPORTED_MODULE_1__["UserProfileComponent"] },
    { path: 'table-list', component: _table_list_table_list_component__WEBPACK_IMPORTED_MODULE_2__["TableListComponent"] },
    { path: 'typography', component: _typography_typography_component__WEBPACK_IMPORTED_MODULE_3__["TypographyComponent"] },
    { path: 'icons', component: _icons_icons_component__WEBPACK_IMPORTED_MODULE_4__["IconsComponent"] },
    { path: 'about', component: _maps_maps_component__WEBPACK_IMPORTED_MODULE_5__["MapsComponent"] },
    { path: 'notifications', component: _notifications_notifications_component__WEBPACK_IMPORTED_MODULE_6__["NotificationsComponent"] },
    { path: 'animation', component: _ng_animate_components_animate_buttons_animate_buttons_component__WEBPACK_IMPORTED_MODULE_7__["AnimateButtonsComponent"] },
    { path: 'topics', component: _ng_animate_components_animate_buttons_animate_buttons_component__WEBPACK_IMPORTED_MODULE_7__["AnimateButtonsComponent"] },
    {
        path: 'interview',
        component: _interview_library_interview_library_component__WEBPACK_IMPORTED_MODULE_8__["InterviewLibraryComponent"],
        children: [
            { path: 'practice', component: _interview_library_practice_component__WEBPACK_IMPORTED_MODULE_10__["PracticeComponent"] },
            { path: ':questionId', component: _interview_library_answer_reader_component__WEBPACK_IMPORTED_MODULE_9__["AnswerReaderComponent"] }
        ]
    },
];


/***/ }),

/***/ "smLI":
/*!****************************************************!*\
  !*** ./src/app/table-list/table-list.component.ts ***!
  \****************************************************/
/*! exports provided: TableListComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TableListComponent", function() { return TableListComponent; });
/* harmony import */ var _raw_loader_table_list_component_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! raw-loader!./table-list.component.html */ "Qd8X");
/* harmony import */ var _table_list_component_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./table-list.component.css */ "jxfC");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "fXoL");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var TableListComponent = /** @class */ (function () {
    function TableListComponent() {
    }
    TableListComponent.prototype.ngOnInit = function () {
    };
    TableListComponent.ctorParameters = function () { return []; };
    TableListComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Component"])({
            selector: 'app-table-list',
            template: _raw_loader_table_list_component_html__WEBPACK_IMPORTED_MODULE_0__["default"],
            styles: [_table_list_component_css__WEBPACK_IMPORTED_MODULE_1__["default"]]
        }),
        __metadata("design:paramtypes", [])
    ], TableListComponent);
    return TableListComponent;
}());



/***/ }),

/***/ "sqUA":
/*!**********************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/icons/icons.component.html ***!
  \**********************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n<div class=\"main-content\">\n  <div class=\"container-fluid\">\n      <div class=\"card card-plain\">\n          <div class=\"card-header card-header-danger\">\n              <h4 class=\"card-title\">Material Design Icons</h4>\n              <p class=\"card-category\">Handcrafted by <a target=\"_blank\" href=\"https://design.google.com/icons/\">Google Team</a>\n              </p>\n          </div>\n          <div class=\"row\">\n              <div class=\"col-md-12\">\n                  <div class=\"card-body\">\n                      <div class=\"iframe-container d-none d-lg-block text-center\">\n                          <p>Material Icons are available on Google's site:</p>\n                          <a href=\"https://design.google.com/icons/\" target=\"_blank\" rel=\"noopener noreferrer\" class=\"btn btn-primary\">Open Material Icons</a>\n                      </div>\n                      <div class=\"col-md-12 d-none d-sm-block d-md-block d-lg-none d-block d-sm-none text-center ml-auto mr-auto\">\n                          <h5>The icons are visible on Desktop mode inside an iframe. Since the iframe is not working on Mobile and Tablets please visit the icons on their original page on Google. Check the\n                              <a href=\"https://design.google.com/icons/\" target=\"_blank\">Material Icons</a>\n                          </h5>\n                      </div>\n                  </div>\n              </div>\n          </div>\n      </div>\n  </div>\n</div>\n");

/***/ }),

/***/ "uki+":
/*!************************************************!*\
  !*** ./node_modules/chartist/dist/chartist.js ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;(function (root, factory) {
  if (true) {
    // AMD. Register as an anonymous module unless amdModuleId is set
    !(__WEBPACK_AMD_DEFINE_ARRAY__ = [], __WEBPACK_AMD_DEFINE_RESULT__ = (function () {
      return root['Chartist'] = factory();
    }).apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));
  } else {}
})(this, function () {
  /* Chartist.js 0.11.4
   * Copyright © 2019 Gion Kunz
   * Free to use under either the WTFPL license or the MIT license.
   * https://raw.githubusercontent.com/gionkunz/chartist-js/master/LICENSE-WTFPL
   * https://raw.githubusercontent.com/gionkunz/chartist-js/master/LICENSE-MIT
   */

  /**
   * The core module of Chartist that is mainly providing static functions and higher level functions for chart modules.
   *
   * @module Chartist.Core
   */
  var Chartist = {
    version: '0.11.4'
  };

  (function (globalRoot, Chartist) {
    'use strict';

    var window = globalRoot.window;
    var document = globalRoot.document;
    /**
     * This object contains all namespaces used within Chartist.
     *
     * @memberof Chartist.Core
     * @type {{svg: string, xmlns: string, xhtml: string, xlink: string, ct: string}}
     */

    Chartist.namespaces = {
      svg: 'http://www.w3.org/2000/svg',
      xmlns: 'http://www.w3.org/2000/xmlns/',
      xhtml: 'http://www.w3.org/1999/xhtml',
      xlink: 'http://www.w3.org/1999/xlink',
      ct: 'http://gionkunz.github.com/chartist-js/ct'
    };
    /**
     * Helps to simplify functional style code
     *
     * @memberof Chartist.Core
     * @param {*} n This exact value will be returned by the noop function
     * @return {*} The same value that was provided to the n parameter
     */

    Chartist.noop = function (n) {
      return n;
    };
    /**
     * Generates a-z from a number 0 to 26
     *
     * @memberof Chartist.Core
     * @param {Number} n A number from 0 to 26 that will result in a letter a-z
     * @return {String} A character from a-z based on the input number n
     */


    Chartist.alphaNumerate = function (n) {
      // Limit to a-z
      return String.fromCharCode(97 + n % 26);
    };
    /**
     * Simple recursive object extend
     *
     * @memberof Chartist.Core
     * @param {Object} target Target object where the source will be merged into
     * @param {Object...} sources This object (objects) will be merged into target and then target is returned
     * @return {Object} An object that has the same reference as target but is extended and merged with the properties of source
     */


    Chartist.extend = function (target) {
      var i, source, sourceProp;
      target = target || {};

      for (i = 1; i < arguments.length; i++) {
        source = arguments[i];

        for (var prop in source) {
          sourceProp = source[prop];

          if (typeof sourceProp === 'object' && sourceProp !== null && !(sourceProp instanceof Array)) {
            target[prop] = Chartist.extend(target[prop], sourceProp);
          } else {
            target[prop] = sourceProp;
          }
        }
      }

      return target;
    };
    /**
     * Replaces all occurrences of subStr in str with newSubStr and returns a new string.
     *
     * @memberof Chartist.Core
     * @param {String} str
     * @param {String} subStr
     * @param {String} newSubStr
     * @return {String}
     */


    Chartist.replaceAll = function (str, subStr, newSubStr) {
      return str.replace(new RegExp(subStr, 'g'), newSubStr);
    };
    /**
     * Converts a number to a string with a unit. If a string is passed then this will be returned unmodified.
     *
     * @memberof Chartist.Core
     * @param {Number} value
     * @param {String} unit
     * @return {String} Returns the passed number value with unit.
     */


    Chartist.ensureUnit = function (value, unit) {
      if (typeof value === 'number') {
        value = value + unit;
      }

      return value;
    };
    /**
     * Converts a number or string to a quantity object.
     *
     * @memberof Chartist.Core
     * @param {String|Number} input
     * @return {Object} Returns an object containing the value as number and the unit as string.
     */


    Chartist.quantity = function (input) {
      if (typeof input === 'string') {
        var match = /^(\d+)\s*(.*)$/g.exec(input);
        return {
          value: +match[1],
          unit: match[2] || undefined
        };
      }

      return {
        value: input
      };
    };
    /**
     * This is a wrapper around document.querySelector that will return the query if it's already of type Node
     *
     * @memberof Chartist.Core
     * @param {String|Node} query The query to use for selecting a Node or a DOM node that will be returned directly
     * @return {Node}
     */


    Chartist.querySelector = function (query) {
      return query instanceof Node ? query : document.querySelector(query);
    };
    /**
     * Functional style helper to produce array with given length initialized with undefined values
     *
     * @memberof Chartist.Core
     * @param length
     * @return {Array}
     */


    Chartist.times = function (length) {
      return Array.apply(null, new Array(length));
    };
    /**
     * Sum helper to be used in reduce functions
     *
     * @memberof Chartist.Core
     * @param previous
     * @param current
     * @return {*}
     */


    Chartist.sum = function (previous, current) {
      return previous + (current ? current : 0);
    };
    /**
     * Multiply helper to be used in `Array.map` for multiplying each value of an array with a factor.
     *
     * @memberof Chartist.Core
     * @param {Number} factor
     * @returns {Function} Function that can be used in `Array.map` to multiply each value in an array
     */


    Chartist.mapMultiply = function (factor) {
      return function (num) {
        return num * factor;
      };
    };
    /**
     * Add helper to be used in `Array.map` for adding a addend to each value of an array.
     *
     * @memberof Chartist.Core
     * @param {Number} addend
     * @returns {Function} Function that can be used in `Array.map` to add a addend to each value in an array
     */


    Chartist.mapAdd = function (addend) {
      return function (num) {
        return num + addend;
      };
    };
    /**
     * Map for multi dimensional arrays where their nested arrays will be mapped in serial. The output array will have the length of the largest nested array. The callback function is called with variable arguments where each argument is the nested array value (or undefined if there are no more values).
     *
     * @memberof Chartist.Core
     * @param arr
     * @param cb
     * @return {Array}
     */


    Chartist.serialMap = function (arr, cb) {
      var result = [],
          length = Math.max.apply(null, arr.map(function (e) {
        return e.length;
      }));
      Chartist.times(length).forEach(function (e, index) {
        var args = arr.map(function (e) {
          return e[index];
        });
        result[index] = cb.apply(null, args);
      });
      return result;
    };
    /**
     * This helper function can be used to round values with certain precision level after decimal. This is used to prevent rounding errors near float point precision limit.
     *
     * @memberof Chartist.Core
     * @param {Number} value The value that should be rounded with precision
     * @param {Number} [digits] The number of digits after decimal used to do the rounding
     * @returns {number} Rounded value
     */


    Chartist.roundWithPrecision = function (value, digits) {
      var precision = Math.pow(10, digits || Chartist.precision);
      return Math.round(value * precision) / precision;
    };
    /**
     * Precision level used internally in Chartist for rounding. If you require more decimal places you can increase this number.
     *
     * @memberof Chartist.Core
     * @type {number}
     */


    Chartist.precision = 8;
    /**
     * A map with characters to escape for strings to be safely used as attribute values.
     *
     * @memberof Chartist.Core
     * @type {Object}
     */

    Chartist.escapingMap = {
      '&': '&amp;',
      '<': '&lt;',
      '>': '&gt;',
      '"': '&quot;',
      '\'': '&#039;'
    };
    /**
     * This function serializes arbitrary data to a string. In case of data that can't be easily converted to a string, this function will create a wrapper object and serialize the data using JSON.stringify. The outcoming string will always be escaped using Chartist.escapingMap.
     * If called with null or undefined the function will return immediately with null or undefined.
     *
     * @memberof Chartist.Core
     * @param {Number|String|Object} data
     * @return {String}
     */

    Chartist.serialize = function (data) {
      if (data === null || data === undefined) {
        return data;
      } else if (typeof data === 'number') {
        data = '' + data;
      } else if (typeof data === 'object') {
        data = JSON.stringify({
          data: data
        });
      }

      return Object.keys(Chartist.escapingMap).reduce(function (result, key) {
        return Chartist.replaceAll(result, key, Chartist.escapingMap[key]);
      }, data);
    };
    /**
     * This function de-serializes a string previously serialized with Chartist.serialize. The string will always be unescaped using Chartist.escapingMap before it's returned. Based on the input value the return type can be Number, String or Object. JSON.parse is used with try / catch to see if the unescaped string can be parsed into an Object and this Object will be returned on success.
     *
     * @memberof Chartist.Core
     * @param {String} data
     * @return {String|Number|Object}
     */


    Chartist.deserialize = function (data) {
      if (typeof data !== 'string') {
        return data;
      }

      data = Object.keys(Chartist.escapingMap).reduce(function (result, key) {
        return Chartist.replaceAll(result, Chartist.escapingMap[key], key);
      }, data);

      try {
        data = JSON.parse(data);
        data = data.data !== undefined ? data.data : data;
      } catch (e) {}

      return data;
    };
    /**
     * Create or reinitialize the SVG element for the chart
     *
     * @memberof Chartist.Core
     * @param {Node} container The containing DOM Node object that will be used to plant the SVG element
     * @param {String} width Set the width of the SVG element. Default is 100%
     * @param {String} height Set the height of the SVG element. Default is 100%
     * @param {String} className Specify a class to be added to the SVG element
     * @return {Object} The created/reinitialized SVG element
     */


    Chartist.createSvg = function (container, width, height, className) {
      var svg;
      width = width || '100%';
      height = height || '100%'; // Check if there is a previous SVG element in the container that contains the Chartist XML namespace and remove it
      // Since the DOM API does not support namespaces we need to manually search the returned list http://www.w3.org/TR/selectors-api/

      Array.prototype.slice.call(container.querySelectorAll('svg')).filter(function filterChartistSvgObjects(svg) {
        return svg.getAttributeNS(Chartist.namespaces.xmlns, 'ct');
      }).forEach(function removePreviousElement(svg) {
        container.removeChild(svg);
      }); // Create svg object with width and height or use 100% as default

      svg = new Chartist.Svg('svg').attr({
        width: width,
        height: height
      }).addClass(className);
      svg._node.style.width = width;
      svg._node.style.height = height; // Add the DOM node to our container

      container.appendChild(svg._node);
      return svg;
    };
    /**
     * Ensures that the data object passed as second argument to the charts is present and correctly initialized.
     *
     * @param  {Object} data The data object that is passed as second argument to the charts
     * @return {Object} The normalized data object
     */


    Chartist.normalizeData = function (data, reverse, multi) {
      var labelCount;
      var output = {
        raw: data,
        normalized: {}
      }; // Check if we should generate some labels based on existing series data

      output.normalized.series = Chartist.getDataArray({
        series: data.series || []
      }, reverse, multi); // If all elements of the normalized data array are arrays we're dealing with
      // multi series data and we need to find the largest series if they are un-even

      if (output.normalized.series.every(function (value) {
        return value instanceof Array;
      })) {
        // Getting the series with the the most elements
        labelCount = Math.max.apply(null, output.normalized.series.map(function (series) {
          return series.length;
        }));
      } else {
        // We're dealing with Pie data so we just take the normalized array length
        labelCount = output.normalized.series.length;
      }

      output.normalized.labels = (data.labels || []).slice(); // Padding the labels to labelCount with empty strings

      Array.prototype.push.apply(output.normalized.labels, Chartist.times(Math.max(0, labelCount - output.normalized.labels.length)).map(function () {
        return '';
      }));

      if (reverse) {
        Chartist.reverseData(output.normalized);
      }

      return output;
    };
    /**
     * This function safely checks if an objects has an owned property.
     *
     * @param {Object} object The object where to check for a property
     * @param {string} property The property name
     * @returns {boolean} Returns true if the object owns the specified property
     */


    Chartist.safeHasProperty = function (object, property) {
      return object !== null && typeof object === 'object' && object.hasOwnProperty(property);
    };
    /**
     * Checks if a value is considered a hole in the data series.
     *
     * @param {*} value
     * @returns {boolean} True if the value is considered a data hole
     */


    Chartist.isDataHoleValue = function (value) {
      return value === null || value === undefined || typeof value === 'number' && isNaN(value);
    };
    /**
     * Reverses the series, labels and series data arrays.
     *
     * @memberof Chartist.Core
     * @param data
     */


    Chartist.reverseData = function (data) {
      data.labels.reverse();
      data.series.reverse();

      for (var i = 0; i < data.series.length; i++) {
        if (typeof data.series[i] === 'object' && data.series[i].data !== undefined) {
          data.series[i].data.reverse();
        } else if (data.series[i] instanceof Array) {
          data.series[i].reverse();
        }
      }
    };
    /**
     * Convert data series into plain array
     *
     * @memberof Chartist.Core
     * @param {Object} data The series object that contains the data to be visualized in the chart
     * @param {Boolean} [reverse] If true the whole data is reversed by the getDataArray call. This will modify the data object passed as first parameter. The labels as well as the series order is reversed. The whole series data arrays are reversed too.
     * @param {Boolean} [multi] Create a multi dimensional array from a series data array where a value object with `x` and `y` values will be created.
     * @return {Array} A plain array that contains the data to be visualized in the chart
     */


    Chartist.getDataArray = function (data, reverse, multi) {
      // Recursively walks through nested arrays and convert string values to numbers and objects with value properties
      // to values. Check the tests in data core -> data normalization for a detailed specification of expected values
      function recursiveConvert(value) {
        if (Chartist.safeHasProperty(value, 'value')) {
          // We are dealing with value object notation so we need to recurse on value property
          return recursiveConvert(value.value);
        } else if (Chartist.safeHasProperty(value, 'data')) {
          // We are dealing with series object notation so we need to recurse on data property
          return recursiveConvert(value.data);
        } else if (value instanceof Array) {
          // Data is of type array so we need to recurse on the series
          return value.map(recursiveConvert);
        } else if (Chartist.isDataHoleValue(value)) {
          // We're dealing with a hole in the data and therefore need to return undefined
          // We're also returning undefined for multi value output
          return undefined;
        } else {
          // We need to prepare multi value output (x and y data)
          if (multi) {
            var multiValue = {}; // Single series value arrays are assumed to specify the Y-Axis value
            // For example: [1, 2] => [{x: undefined, y: 1}, {x: undefined, y: 2}]
            // If multi is a string then it's assumed that it specified which dimension should be filled as default

            if (typeof multi === 'string') {
              multiValue[multi] = Chartist.getNumberOrUndefined(value);
            } else {
              multiValue.y = Chartist.getNumberOrUndefined(value);
            }

            multiValue.x = value.hasOwnProperty('x') ? Chartist.getNumberOrUndefined(value.x) : multiValue.x;
            multiValue.y = value.hasOwnProperty('y') ? Chartist.getNumberOrUndefined(value.y) : multiValue.y;
            return multiValue;
          } else {
            // We can return simple data
            return Chartist.getNumberOrUndefined(value);
          }
        }
      }

      return data.series.map(recursiveConvert);
    };
    /**
     * Converts a number into a padding object.
     *
     * @memberof Chartist.Core
     * @param {Object|Number} padding
     * @param {Number} [fallback] This value is used to fill missing values if a incomplete padding object was passed
     * @returns {Object} Returns a padding object containing top, right, bottom, left properties filled with the padding number passed in as argument. If the argument is something else than a number (presumably already a correct padding object) then this argument is directly returned.
     */


    Chartist.normalizePadding = function (padding, fallback) {
      fallback = fallback || 0;
      return typeof padding === 'number' ? {
        top: padding,
        right: padding,
        bottom: padding,
        left: padding
      } : {
        top: typeof padding.top === 'number' ? padding.top : fallback,
        right: typeof padding.right === 'number' ? padding.right : fallback,
        bottom: typeof padding.bottom === 'number' ? padding.bottom : fallback,
        left: typeof padding.left === 'number' ? padding.left : fallback
      };
    };

    Chartist.getMetaData = function (series, index) {
      var value = series.data ? series.data[index] : series[index];
      return value ? value.meta : undefined;
    };
    /**
     * Calculate the order of magnitude for the chart scale
     *
     * @memberof Chartist.Core
     * @param {Number} value The value Range of the chart
     * @return {Number} The order of magnitude
     */


    Chartist.orderOfMagnitude = function (value) {
      return Math.floor(Math.log(Math.abs(value)) / Math.LN10);
    };
    /**
     * Project a data length into screen coordinates (pixels)
     *
     * @memberof Chartist.Core
     * @param {Object} axisLength The svg element for the chart
     * @param {Number} length Single data value from a series array
     * @param {Object} bounds All the values to set the bounds of the chart
     * @return {Number} The projected data length in pixels
     */


    Chartist.projectLength = function (axisLength, length, bounds) {
      return length / bounds.range * axisLength;
    };
    /**
     * Get the height of the area in the chart for the data series
     *
     * @memberof Chartist.Core
     * @param {Object} svg The svg element for the chart
     * @param {Object} options The Object that contains all the optional values for the chart
     * @return {Number} The height of the area in the chart for the data series
     */


    Chartist.getAvailableHeight = function (svg, options) {
      return Math.max((Chartist.quantity(options.height).value || svg.height()) - (options.chartPadding.top + options.chartPadding.bottom) - options.axisX.offset, 0);
    };
    /**
     * Get highest and lowest value of data array. This Array contains the data that will be visualized in the chart.
     *
     * @memberof Chartist.Core
     * @param {Array} data The array that contains the data to be visualized in the chart
     * @param {Object} options The Object that contains the chart options
     * @param {String} dimension Axis dimension 'x' or 'y' used to access the correct value and high / low configuration
     * @return {Object} An object that contains the highest and lowest value that will be visualized on the chart.
     */


    Chartist.getHighLow = function (data, options, dimension) {
      // TODO: Remove workaround for deprecated global high / low config. Axis high / low configuration is preferred
      options = Chartist.extend({}, options, dimension ? options['axis' + dimension.toUpperCase()] : {});
      var highLow = {
        high: options.high === undefined ? -Number.MAX_VALUE : +options.high,
        low: options.low === undefined ? Number.MAX_VALUE : +options.low
      };
      var findHigh = options.high === undefined;
      var findLow = options.low === undefined; // Function to recursively walk through arrays and find highest and lowest number

      function recursiveHighLow(data) {
        if (data === undefined) {
          return undefined;
        } else if (data instanceof Array) {
          for (var i = 0; i < data.length; i++) {
            recursiveHighLow(data[i]);
          }
        } else {
          var value = dimension ? +data[dimension] : +data;

          if (findHigh && value > highLow.high) {
            highLow.high = value;
          }

          if (findLow && value < highLow.low) {
            highLow.low = value;
          }
        }
      } // Start to find highest and lowest number recursively


      if (findHigh || findLow) {
        recursiveHighLow(data);
      } // Overrides of high / low based on reference value, it will make sure that the invisible reference value is
      // used to generate the chart. This is useful when the chart always needs to contain the position of the
      // invisible reference value in the view i.e. for bipolar scales.


      if (options.referenceValue || options.referenceValue === 0) {
        highLow.high = Math.max(options.referenceValue, highLow.high);
        highLow.low = Math.min(options.referenceValue, highLow.low);
      } // If high and low are the same because of misconfiguration or flat data (only the same value) we need
      // to set the high or low to 0 depending on the polarity


      if (highLow.high <= highLow.low) {
        // If both values are 0 we set high to 1
        if (highLow.low === 0) {
          highLow.high = 1;
        } else if (highLow.low < 0) {
          // If we have the same negative value for the bounds we set bounds.high to 0
          highLow.high = 0;
        } else if (highLow.high > 0) {
          // If we have the same positive value for the bounds we set bounds.low to 0
          highLow.low = 0;
        } else {
          // If data array was empty, values are Number.MAX_VALUE and -Number.MAX_VALUE. Set bounds to prevent errors
          highLow.high = 1;
          highLow.low = 0;
        }
      }

      return highLow;
    };
    /**
     * Checks if a value can be safely coerced to a number. This includes all values except null which result in finite numbers when coerced. This excludes NaN, since it's not finite.
     *
     * @memberof Chartist.Core
     * @param value
     * @returns {Boolean}
     */


    Chartist.isNumeric = function (value) {
      return value === null ? false : isFinite(value);
    };
    /**
     * Returns true on all falsey values except the numeric value 0.
     *
     * @memberof Chartist.Core
     * @param value
     * @returns {boolean}
     */


    Chartist.isFalseyButZero = function (value) {
      return !value && value !== 0;
    };
    /**
     * Returns a number if the passed parameter is a valid number or the function will return undefined. On all other values than a valid number, this function will return undefined.
     *
     * @memberof Chartist.Core
     * @param value
     * @returns {*}
     */


    Chartist.getNumberOrUndefined = function (value) {
      return Chartist.isNumeric(value) ? +value : undefined;
    };
    /**
     * Checks if provided value object is multi value (contains x or y properties)
     *
     * @memberof Chartist.Core
     * @param value
     */


    Chartist.isMultiValue = function (value) {
      return typeof value === 'object' && ('x' in value || 'y' in value);
    };
    /**
     * Gets a value from a dimension `value.x` or `value.y` while returning value directly if it's a valid numeric value. If the value is not numeric and it's falsey this function will return `defaultValue`.
     *
     * @memberof Chartist.Core
     * @param value
     * @param dimension
     * @param defaultValue
     * @returns {*}
     */


    Chartist.getMultiValue = function (value, dimension) {
      if (Chartist.isMultiValue(value)) {
        return Chartist.getNumberOrUndefined(value[dimension || 'y']);
      } else {
        return Chartist.getNumberOrUndefined(value);
      }
    };
    /**
     * Pollard Rho Algorithm to find smallest factor of an integer value. There are more efficient algorithms for factorization, but this one is quite efficient and not so complex.
     *
     * @memberof Chartist.Core
     * @param {Number} num An integer number where the smallest factor should be searched for
     * @returns {Number} The smallest integer factor of the parameter num.
     */


    Chartist.rho = function (num) {
      if (num === 1) {
        return num;
      }

      function gcd(p, q) {
        if (p % q === 0) {
          return q;
        } else {
          return gcd(q, p % q);
        }
      }

      function f(x) {
        return x * x + 1;
      }

      var x1 = 2,
          x2 = 2,
          divisor;

      if (num % 2 === 0) {
        return 2;
      }

      do {
        x1 = f(x1) % num;
        x2 = f(f(x2)) % num;
        divisor = gcd(Math.abs(x1 - x2), num);
      } while (divisor === 1);

      return divisor;
    };
    /**
     * Calculate and retrieve all the bounds for the chart and return them in one array
     *
     * @memberof Chartist.Core
     * @param {Number} axisLength The length of the Axis used for
     * @param {Object} highLow An object containing a high and low property indicating the value range of the chart.
     * @param {Number} scaleMinSpace The minimum projected length a step should result in
     * @param {Boolean} onlyInteger
     * @return {Object} All the values to set the bounds of the chart
     */


    Chartist.getBounds = function (axisLength, highLow, scaleMinSpace, onlyInteger) {
      var i,
          optimizationCounter = 0,
          newMin,
          newMax,
          bounds = {
        high: highLow.high,
        low: highLow.low
      };
      bounds.valueRange = bounds.high - bounds.low;
      bounds.oom = Chartist.orderOfMagnitude(bounds.valueRange);
      bounds.step = Math.pow(10, bounds.oom);
      bounds.min = Math.floor(bounds.low / bounds.step) * bounds.step;
      bounds.max = Math.ceil(bounds.high / bounds.step) * bounds.step;
      bounds.range = bounds.max - bounds.min;
      bounds.numberOfSteps = Math.round(bounds.range / bounds.step); // Optimize scale step by checking if subdivision is possible based on horizontalGridMinSpace
      // If we are already below the scaleMinSpace value we will scale up

      var length = Chartist.projectLength(axisLength, bounds.step, bounds);
      var scaleUp = length < scaleMinSpace;
      var smallestFactor = onlyInteger ? Chartist.rho(bounds.range) : 0; // First check if we should only use integer steps and if step 1 is still larger than scaleMinSpace so we can use 1

      if (onlyInteger && Chartist.projectLength(axisLength, 1, bounds) >= scaleMinSpace) {
        bounds.step = 1;
      } else if (onlyInteger && smallestFactor < bounds.step && Chartist.projectLength(axisLength, smallestFactor, bounds) >= scaleMinSpace) {
        // If step 1 was too small, we can try the smallest factor of range
        // If the smallest factor is smaller than the current bounds.step and the projected length of smallest factor
        // is larger than the scaleMinSpace we should go for it.
        bounds.step = smallestFactor;
      } else {
        // Trying to divide or multiply by 2 and find the best step value
        while (true) {
          if (scaleUp && Chartist.projectLength(axisLength, bounds.step, bounds) <= scaleMinSpace) {
            bounds.step *= 2;
          } else if (!scaleUp && Chartist.projectLength(axisLength, bounds.step / 2, bounds) >= scaleMinSpace) {
            bounds.step /= 2;

            if (onlyInteger && bounds.step % 1 !== 0) {
              bounds.step *= 2;
              break;
            }
          } else {
            break;
          }

          if (optimizationCounter++ > 1000) {
            throw new Error('Exceeded maximum number of iterations while optimizing scale step!');
          }
        }
      }

      var EPSILON = 2.221E-16;
      bounds.step = Math.max(bounds.step, EPSILON);

      function safeIncrement(value, increment) {
        // If increment is too small use *= (1+EPSILON) as a simple nextafter
        if (value === (value += increment)) {
          value *= 1 + (increment > 0 ? EPSILON : -EPSILON);
        }

        return value;
      } // Narrow min and max based on new step


      newMin = bounds.min;
      newMax = bounds.max;

      while (newMin + bounds.step <= bounds.low) {
        newMin = safeIncrement(newMin, bounds.step);
      }

      while (newMax - bounds.step >= bounds.high) {
        newMax = safeIncrement(newMax, -bounds.step);
      }

      bounds.min = newMin;
      bounds.max = newMax;
      bounds.range = bounds.max - bounds.min;
      var values = [];

      for (i = bounds.min; i <= bounds.max; i = safeIncrement(i, bounds.step)) {
        var value = Chartist.roundWithPrecision(i);

        if (value !== values[values.length - 1]) {
          values.push(value);
        }
      }

      bounds.values = values;
      return bounds;
    };
    /**
     * Calculate cartesian coordinates of polar coordinates
     *
     * @memberof Chartist.Core
     * @param {Number} centerX X-axis coordinates of center point of circle segment
     * @param {Number} centerY X-axis coordinates of center point of circle segment
     * @param {Number} radius Radius of circle segment
     * @param {Number} angleInDegrees Angle of circle segment in degrees
     * @return {{x:Number, y:Number}} Coordinates of point on circumference
     */


    Chartist.polarToCartesian = function (centerX, centerY, radius, angleInDegrees) {
      var angleInRadians = (angleInDegrees - 90) * Math.PI / 180.0;
      return {
        x: centerX + radius * Math.cos(angleInRadians),
        y: centerY + radius * Math.sin(angleInRadians)
      };
    };
    /**
     * Initialize chart drawing rectangle (area where chart is drawn) x1,y1 = bottom left / x2,y2 = top right
     *
     * @memberof Chartist.Core
     * @param {Object} svg The svg element for the chart
     * @param {Object} options The Object that contains all the optional values for the chart
     * @param {Number} [fallbackPadding] The fallback padding if partial padding objects are used
     * @return {Object} The chart rectangles coordinates inside the svg element plus the rectangles measurements
     */


    Chartist.createChartRect = function (svg, options, fallbackPadding) {
      var hasAxis = !!(options.axisX || options.axisY);
      var yAxisOffset = hasAxis ? options.axisY.offset : 0;
      var xAxisOffset = hasAxis ? options.axisX.offset : 0; // If width or height results in invalid value (including 0) we fallback to the unitless settings or even 0

      var width = svg.width() || Chartist.quantity(options.width).value || 0;
      var height = svg.height() || Chartist.quantity(options.height).value || 0;
      var normalizedPadding = Chartist.normalizePadding(options.chartPadding, fallbackPadding); // If settings were to small to cope with offset (legacy) and padding, we'll adjust

      width = Math.max(width, yAxisOffset + normalizedPadding.left + normalizedPadding.right);
      height = Math.max(height, xAxisOffset + normalizedPadding.top + normalizedPadding.bottom);
      var chartRect = {
        padding: normalizedPadding,
        width: function width() {
          return this.x2 - this.x1;
        },
        height: function height() {
          return this.y1 - this.y2;
        }
      };

      if (hasAxis) {
        if (options.axisX.position === 'start') {
          chartRect.y2 = normalizedPadding.top + xAxisOffset;
          chartRect.y1 = Math.max(height - normalizedPadding.bottom, chartRect.y2 + 1);
        } else {
          chartRect.y2 = normalizedPadding.top;
          chartRect.y1 = Math.max(height - normalizedPadding.bottom - xAxisOffset, chartRect.y2 + 1);
        }

        if (options.axisY.position === 'start') {
          chartRect.x1 = normalizedPadding.left + yAxisOffset;
          chartRect.x2 = Math.max(width - normalizedPadding.right, chartRect.x1 + 1);
        } else {
          chartRect.x1 = normalizedPadding.left;
          chartRect.x2 = Math.max(width - normalizedPadding.right - yAxisOffset, chartRect.x1 + 1);
        }
      } else {
        chartRect.x1 = normalizedPadding.left;
        chartRect.x2 = Math.max(width - normalizedPadding.right, chartRect.x1 + 1);
        chartRect.y2 = normalizedPadding.top;
        chartRect.y1 = Math.max(height - normalizedPadding.bottom, chartRect.y2 + 1);
      }

      return chartRect;
    };
    /**
     * Creates a grid line based on a projected value.
     *
     * @memberof Chartist.Core
     * @param position
     * @param index
     * @param axis
     * @param offset
     * @param length
     * @param group
     * @param classes
     * @param eventEmitter
     */


    Chartist.createGrid = function (position, index, axis, offset, length, group, classes, eventEmitter) {
      var positionalData = {};
      positionalData[axis.units.pos + '1'] = position;
      positionalData[axis.units.pos + '2'] = position;
      positionalData[axis.counterUnits.pos + '1'] = offset;
      positionalData[axis.counterUnits.pos + '2'] = offset + length;
      var gridElement = group.elem('line', positionalData, classes.join(' ')); // Event for grid draw

      eventEmitter.emit('draw', Chartist.extend({
        type: 'grid',
        axis: axis,
        index: index,
        group: group,
        element: gridElement
      }, positionalData));
    };
    /**
     * Creates a grid background rect and emits the draw event.
     *
     * @memberof Chartist.Core
     * @param gridGroup
     * @param chartRect
     * @param className
     * @param eventEmitter
     */


    Chartist.createGridBackground = function (gridGroup, chartRect, className, eventEmitter) {
      var gridBackground = gridGroup.elem('rect', {
        x: chartRect.x1,
        y: chartRect.y2,
        width: chartRect.width(),
        height: chartRect.height()
      }, className, true); // Event for grid background draw

      eventEmitter.emit('draw', {
        type: 'gridBackground',
        group: gridGroup,
        element: gridBackground
      });
    };
    /**
     * Creates a label based on a projected value and an axis.
     *
     * @memberof Chartist.Core
     * @param position
     * @param length
     * @param index
     * @param labels
     * @param axis
     * @param axisOffset
     * @param labelOffset
     * @param group
     * @param classes
     * @param useForeignObject
     * @param eventEmitter
     */


    Chartist.createLabel = function (position, length, index, labels, axis, axisOffset, labelOffset, group, classes, useForeignObject, eventEmitter) {
      var labelElement;
      var positionalData = {};
      positionalData[axis.units.pos] = position + labelOffset[axis.units.pos];
      positionalData[axis.counterUnits.pos] = labelOffset[axis.counterUnits.pos];
      positionalData[axis.units.len] = length;
      positionalData[axis.counterUnits.len] = Math.max(0, axisOffset - 10);

      if (useForeignObject) {
        // We need to set width and height explicitly to px as span will not expand with width and height being
        // 100% in all browsers
        var content = document.createElement('span');
        content.className = classes.join(' ');
        content.setAttribute('xmlns', Chartist.namespaces.xhtml);
        content.innerText = labels[index];
        content.style[axis.units.len] = Math.round(positionalData[axis.units.len]) + 'px';
        content.style[axis.counterUnits.len] = Math.round(positionalData[axis.counterUnits.len]) + 'px';
        labelElement = group.foreignObject(content, Chartist.extend({
          style: 'overflow: visible;'
        }, positionalData));
      } else {
        labelElement = group.elem('text', positionalData, classes.join(' ')).text(labels[index]);
      }

      eventEmitter.emit('draw', Chartist.extend({
        type: 'label',
        axis: axis,
        index: index,
        group: group,
        element: labelElement,
        text: labels[index]
      }, positionalData));
    };
    /**
     * Helper to read series specific options from options object. It automatically falls back to the global option if
     * there is no option in the series options.
     *
     * @param {Object} series Series object
     * @param {Object} options Chartist options object
     * @param {string} key The options key that should be used to obtain the options
     * @returns {*}
     */


    Chartist.getSeriesOption = function (series, options, key) {
      if (series.name && options.series && options.series[series.name]) {
        var seriesOptions = options.series[series.name];
        return seriesOptions.hasOwnProperty(key) ? seriesOptions[key] : options[key];
      } else {
        return options[key];
      }
    };
    /**
     * Provides options handling functionality with callback for options changes triggered by responsive options and media query matches
     *
     * @memberof Chartist.Core
     * @param {Object} options Options set by user
     * @param {Array} responsiveOptions Optional functions to add responsive behavior to chart
     * @param {Object} eventEmitter The event emitter that will be used to emit the options changed events
     * @return {Object} The consolidated options object from the defaults, base and matching responsive options
     */


    Chartist.optionsProvider = function (options, responsiveOptions, eventEmitter) {
      var baseOptions = Chartist.extend({}, options),
          currentOptions,
          mediaQueryListeners = [],
          i;

      function updateCurrentOptions(mediaEvent) {
        var previousOptions = currentOptions;
        currentOptions = Chartist.extend({}, baseOptions);

        if (responsiveOptions) {
          for (i = 0; i < responsiveOptions.length; i++) {
            var mql = window.matchMedia(responsiveOptions[i][0]);

            if (mql.matches) {
              currentOptions = Chartist.extend(currentOptions, responsiveOptions[i][1]);
            }
          }
        }

        if (eventEmitter && mediaEvent) {
          eventEmitter.emit('optionsChanged', {
            previousOptions: previousOptions,
            currentOptions: currentOptions
          });
        }
      }

      function removeMediaQueryListeners() {
        mediaQueryListeners.forEach(function (mql) {
          mql.removeListener(updateCurrentOptions);
        });
      }

      if (!window.matchMedia) {
        throw 'window.matchMedia not found! Make sure you\'re using a polyfill.';
      } else if (responsiveOptions) {
        for (i = 0; i < responsiveOptions.length; i++) {
          var mql = window.matchMedia(responsiveOptions[i][0]);
          mql.addListener(updateCurrentOptions);
          mediaQueryListeners.push(mql);
        }
      } // Execute initially without an event argument so we get the correct options


      updateCurrentOptions();
      return {
        removeMediaQueryListeners: removeMediaQueryListeners,
        getCurrentOptions: function getCurrentOptions() {
          return Chartist.extend({}, currentOptions);
        }
      };
    };
    /**
     * Splits a list of coordinates and associated values into segments. Each returned segment contains a pathCoordinates
     * valueData property describing the segment.
     *
     * With the default options, segments consist of contiguous sets of points that do not have an undefined value. Any
     * points with undefined values are discarded.
     *
     * **Options**
     * The following options are used to determine how segments are formed
     * ```javascript
     * var options = {
     *   // If fillHoles is true, undefined values are simply discarded without creating a new segment. Assuming other options are default, this returns single segment.
     *   fillHoles: false,
     *   // If increasingX is true, the coordinates in all segments have strictly increasing x-values.
     *   increasingX: false
     * };
     * ```
     *
     * @memberof Chartist.Core
     * @param {Array} pathCoordinates List of point coordinates to be split in the form [x1, y1, x2, y2 ... xn, yn]
     * @param {Array} values List of associated point values in the form [v1, v2 .. vn]
     * @param {Object} options Options set by user
     * @return {Array} List of segments, each containing a pathCoordinates and valueData property.
     */


    Chartist.splitIntoSegments = function (pathCoordinates, valueData, options) {
      var defaultOptions = {
        increasingX: false,
        fillHoles: false
      };
      options = Chartist.extend({}, defaultOptions, options);
      var segments = [];
      var hole = true;

      for (var i = 0; i < pathCoordinates.length; i += 2) {
        // If this value is a "hole" we set the hole flag
        if (Chartist.getMultiValue(valueData[i / 2].value) === undefined) {
          // if(valueData[i / 2].value === undefined) {
          if (!options.fillHoles) {
            hole = true;
          }
        } else {
          if (options.increasingX && i >= 2 && pathCoordinates[i] <= pathCoordinates[i - 2]) {
            // X is not increasing, so we need to make sure we start a new segment
            hole = true;
          } // If it's a valid value we need to check if we're coming out of a hole and create a new empty segment


          if (hole) {
            segments.push({
              pathCoordinates: [],
              valueData: []
            }); // As we have a valid value now, we are not in a "hole" anymore

            hole = false;
          } // Add to the segment pathCoordinates and valueData


          segments[segments.length - 1].pathCoordinates.push(pathCoordinates[i], pathCoordinates[i + 1]);
          segments[segments.length - 1].valueData.push(valueData[i / 2]);
        }
      }

      return segments;
    };
  })(this || global, Chartist);

  ;
  /**
  * Chartist path interpolation functions.
  *
  * @module Chartist.Interpolation
  */

  /* global Chartist */

  (function (globalRoot, Chartist) {
    'use strict';

    Chartist.Interpolation = {};
    /**
     * This interpolation function does not smooth the path and the result is only containing lines and no curves.
     *
     * @example
     * var chart = new Chartist.Line('.ct-chart', {
     *   labels: [1, 2, 3, 4, 5],
     *   series: [[1, 2, 8, 1, 7]]
     * }, {
     *   lineSmooth: Chartist.Interpolation.none({
     *     fillHoles: false
     *   })
     * });
     *
     *
     * @memberof Chartist.Interpolation
     * @return {Function}
     */

    Chartist.Interpolation.none = function (options) {
      var defaultOptions = {
        fillHoles: false
      };
      options = Chartist.extend({}, defaultOptions, options);
      return function none(pathCoordinates, valueData) {
        var path = new Chartist.Svg.Path();
        var hole = true;

        for (var i = 0; i < pathCoordinates.length; i += 2) {
          var currX = pathCoordinates[i];
          var currY = pathCoordinates[i + 1];
          var currData = valueData[i / 2];

          if (Chartist.getMultiValue(currData.value) !== undefined) {
            if (hole) {
              path.move(currX, currY, false, currData);
            } else {
              path.line(currX, currY, false, currData);
            }

            hole = false;
          } else if (!options.fillHoles) {
            hole = true;
          }
        }

        return path;
      };
    };
    /**
     * Simple smoothing creates horizontal handles that are positioned with a fraction of the length between two data points. You can use the divisor option to specify the amount of smoothing.
     *
     * Simple smoothing can be used instead of `Chartist.Smoothing.cardinal` if you'd like to get rid of the artifacts it produces sometimes. Simple smoothing produces less flowing lines but is accurate by hitting the points and it also doesn't swing below or above the given data point.
     *
     * All smoothing functions within Chartist are factory functions that accept an options parameter. The simple interpolation function accepts one configuration parameter `divisor`, between 1 and ∞, which controls the smoothing characteristics.
     *
     * @example
     * var chart = new Chartist.Line('.ct-chart', {
     *   labels: [1, 2, 3, 4, 5],
     *   series: [[1, 2, 8, 1, 7]]
     * }, {
     *   lineSmooth: Chartist.Interpolation.simple({
     *     divisor: 2,
     *     fillHoles: false
     *   })
     * });
     *
     *
     * @memberof Chartist.Interpolation
     * @param {Object} options The options of the simple interpolation factory function.
     * @return {Function}
     */


    Chartist.Interpolation.simple = function (options) {
      var defaultOptions = {
        divisor: 2,
        fillHoles: false
      };
      options = Chartist.extend({}, defaultOptions, options);
      var d = 1 / Math.max(1, options.divisor);
      return function simple(pathCoordinates, valueData) {
        var path = new Chartist.Svg.Path();
        var prevX, prevY, prevData;

        for (var i = 0; i < pathCoordinates.length; i += 2) {
          var currX = pathCoordinates[i];
          var currY = pathCoordinates[i + 1];
          var length = (currX - prevX) * d;
          var currData = valueData[i / 2];

          if (currData.value !== undefined) {
            if (prevData === undefined) {
              path.move(currX, currY, false, currData);
            } else {
              path.curve(prevX + length, prevY, currX - length, currY, currX, currY, false, currData);
            }

            prevX = currX;
            prevY = currY;
            prevData = currData;
          } else if (!options.fillHoles) {
            prevX = currX = prevData = undefined;
          }
        }

        return path;
      };
    };
    /**
     * Cardinal / Catmull-Rome spline interpolation is the default smoothing function in Chartist. It produces nice results where the splines will always meet the points. It produces some artifacts though when data values are increased or decreased rapidly. The line may not follow a very accurate path and if the line should be accurate this smoothing function does not produce the best results.
     *
     * Cardinal splines can only be created if there are more than two data points. If this is not the case this smoothing will fallback to `Chartist.Smoothing.none`.
     *
     * All smoothing functions within Chartist are factory functions that accept an options parameter. The cardinal interpolation function accepts one configuration parameter `tension`, between 0 and 1, which controls the smoothing intensity.
     *
     * @example
     * var chart = new Chartist.Line('.ct-chart', {
     *   labels: [1, 2, 3, 4, 5],
     *   series: [[1, 2, 8, 1, 7]]
     * }, {
     *   lineSmooth: Chartist.Interpolation.cardinal({
     *     tension: 1,
     *     fillHoles: false
     *   })
     * });
     *
     * @memberof Chartist.Interpolation
     * @param {Object} options The options of the cardinal factory function.
     * @return {Function}
     */


    Chartist.Interpolation.cardinal = function (options) {
      var defaultOptions = {
        tension: 1,
        fillHoles: false
      };
      options = Chartist.extend({}, defaultOptions, options);
      var t = Math.min(1, Math.max(0, options.tension)),
          c = 1 - t;
      return function cardinal(pathCoordinates, valueData) {
        // First we try to split the coordinates into segments
        // This is necessary to treat "holes" in line charts
        var segments = Chartist.splitIntoSegments(pathCoordinates, valueData, {
          fillHoles: options.fillHoles
        });

        if (!segments.length) {
          // If there were no segments return 'Chartist.Interpolation.none'
          return Chartist.Interpolation.none()([]);
        } else if (segments.length > 1) {
          // If the split resulted in more that one segment we need to interpolate each segment individually and join them
          // afterwards together into a single path.
          var paths = []; // For each segment we will recurse the cardinal function

          segments.forEach(function (segment) {
            paths.push(cardinal(segment.pathCoordinates, segment.valueData));
          }); // Join the segment path data into a single path and return

          return Chartist.Svg.Path.join(paths);
        } else {
          // If there was only one segment we can proceed regularly by using pathCoordinates and valueData from the first
          // segment
          pathCoordinates = segments[0].pathCoordinates;
          valueData = segments[0].valueData; // If less than two points we need to fallback to no smoothing

          if (pathCoordinates.length <= 4) {
            return Chartist.Interpolation.none()(pathCoordinates, valueData);
          }

          var path = new Chartist.Svg.Path().move(pathCoordinates[0], pathCoordinates[1], false, valueData[0]),
              z;

          for (var i = 0, iLen = pathCoordinates.length; iLen - 2 * !z > i; i += 2) {
            var p = [{
              x: +pathCoordinates[i - 2],
              y: +pathCoordinates[i - 1]
            }, {
              x: +pathCoordinates[i],
              y: +pathCoordinates[i + 1]
            }, {
              x: +pathCoordinates[i + 2],
              y: +pathCoordinates[i + 3]
            }, {
              x: +pathCoordinates[i + 4],
              y: +pathCoordinates[i + 5]
            }];

            if (z) {
              if (!i) {
                p[0] = {
                  x: +pathCoordinates[iLen - 2],
                  y: +pathCoordinates[iLen - 1]
                };
              } else if (iLen - 4 === i) {
                p[3] = {
                  x: +pathCoordinates[0],
                  y: +pathCoordinates[1]
                };
              } else if (iLen - 2 === i) {
                p[2] = {
                  x: +pathCoordinates[0],
                  y: +pathCoordinates[1]
                };
                p[3] = {
                  x: +pathCoordinates[2],
                  y: +pathCoordinates[3]
                };
              }
            } else {
              if (iLen - 4 === i) {
                p[3] = p[2];
              } else if (!i) {
                p[0] = {
                  x: +pathCoordinates[i],
                  y: +pathCoordinates[i + 1]
                };
              }
            }

            path.curve(t * (-p[0].x + 6 * p[1].x + p[2].x) / 6 + c * p[2].x, t * (-p[0].y + 6 * p[1].y + p[2].y) / 6 + c * p[2].y, t * (p[1].x + 6 * p[2].x - p[3].x) / 6 + c * p[2].x, t * (p[1].y + 6 * p[2].y - p[3].y) / 6 + c * p[2].y, p[2].x, p[2].y, false, valueData[(i + 2) / 2]);
          }

          return path;
        }
      };
    };
    /**
     * Monotone Cubic spline interpolation produces a smooth curve which preserves monotonicity. Unlike cardinal splines, the curve will not extend beyond the range of y-values of the original data points.
     *
     * Monotone Cubic splines can only be created if there are more than two data points. If this is not the case this smoothing will fallback to `Chartist.Smoothing.none`.
     *
     * The x-values of subsequent points must be increasing to fit a Monotone Cubic spline. If this condition is not met for a pair of adjacent points, then there will be a break in the curve between those data points.
     *
     * All smoothing functions within Chartist are factory functions that accept an options parameter.
     *
     * @example
     * var chart = new Chartist.Line('.ct-chart', {
     *   labels: [1, 2, 3, 4, 5],
     *   series: [[1, 2, 8, 1, 7]]
     * }, {
     *   lineSmooth: Chartist.Interpolation.monotoneCubic({
     *     fillHoles: false
     *   })
     * });
     *
     * @memberof Chartist.Interpolation
     * @param {Object} options The options of the monotoneCubic factory function.
     * @return {Function}
     */


    Chartist.Interpolation.monotoneCubic = function (options) {
      var defaultOptions = {
        fillHoles: false
      };
      options = Chartist.extend({}, defaultOptions, options);
      return function monotoneCubic(pathCoordinates, valueData) {
        // First we try to split the coordinates into segments
        // This is necessary to treat "holes" in line charts
        var segments = Chartist.splitIntoSegments(pathCoordinates, valueData, {
          fillHoles: options.fillHoles,
          increasingX: true
        });

        if (!segments.length) {
          // If there were no segments return 'Chartist.Interpolation.none'
          return Chartist.Interpolation.none()([]);
        } else if (segments.length > 1) {
          // If the split resulted in more that one segment we need to interpolate each segment individually and join them
          // afterwards together into a single path.
          var paths = []; // For each segment we will recurse the monotoneCubic fn function

          segments.forEach(function (segment) {
            paths.push(monotoneCubic(segment.pathCoordinates, segment.valueData));
          }); // Join the segment path data into a single path and return

          return Chartist.Svg.Path.join(paths);
        } else {
          // If there was only one segment we can proceed regularly by using pathCoordinates and valueData from the first
          // segment
          pathCoordinates = segments[0].pathCoordinates;
          valueData = segments[0].valueData; // If less than three points we need to fallback to no smoothing

          if (pathCoordinates.length <= 4) {
            return Chartist.Interpolation.none()(pathCoordinates, valueData);
          }

          var xs = [],
              ys = [],
              i,
              n = pathCoordinates.length / 2,
              ms = [],
              ds = [],
              dys = [],
              dxs = [],
              path; // Populate x and y coordinates into separate arrays, for readability

          for (i = 0; i < n; i++) {
            xs[i] = pathCoordinates[i * 2];
            ys[i] = pathCoordinates[i * 2 + 1];
          } // Calculate deltas and derivative


          for (i = 0; i < n - 1; i++) {
            dys[i] = ys[i + 1] - ys[i];
            dxs[i] = xs[i + 1] - xs[i];
            ds[i] = dys[i] / dxs[i];
          } // Determine desired slope (m) at each point using Fritsch-Carlson method
          // See: http://math.stackexchange.com/questions/45218/implementation-of-monotone-cubic-interpolation


          ms[0] = ds[0];
          ms[n - 1] = ds[n - 2];

          for (i = 1; i < n - 1; i++) {
            if (ds[i] === 0 || ds[i - 1] === 0 || ds[i - 1] > 0 !== ds[i] > 0) {
              ms[i] = 0;
            } else {
              ms[i] = 3 * (dxs[i - 1] + dxs[i]) / ((2 * dxs[i] + dxs[i - 1]) / ds[i - 1] + (dxs[i] + 2 * dxs[i - 1]) / ds[i]);

              if (!isFinite(ms[i])) {
                ms[i] = 0;
              }
            }
          } // Now build a path from the slopes


          path = new Chartist.Svg.Path().move(xs[0], ys[0], false, valueData[0]);

          for (i = 0; i < n - 1; i++) {
            path.curve( // First control point
            xs[i] + dxs[i] / 3, ys[i] + ms[i] * dxs[i] / 3, // Second control point
            xs[i + 1] - dxs[i] / 3, ys[i + 1] - ms[i + 1] * dxs[i] / 3, // End point
            xs[i + 1], ys[i + 1], false, valueData[i + 1]);
          }

          return path;
        }
      };
    };
    /**
     * Step interpolation will cause the line chart to move in steps rather than diagonal or smoothed lines. This interpolation will create additional points that will also be drawn when the `showPoint` option is enabled.
     *
     * All smoothing functions within Chartist are factory functions that accept an options parameter. The step interpolation function accepts one configuration parameter `postpone`, that can be `true` or `false`. The default value is `true` and will cause the step to occur where the value actually changes. If a different behaviour is needed where the step is shifted to the left and happens before the actual value, this option can be set to `false`.
     *
     * @example
     * var chart = new Chartist.Line('.ct-chart', {
     *   labels: [1, 2, 3, 4, 5],
     *   series: [[1, 2, 8, 1, 7]]
     * }, {
     *   lineSmooth: Chartist.Interpolation.step({
     *     postpone: true,
     *     fillHoles: false
     *   })
     * });
     *
     * @memberof Chartist.Interpolation
     * @param options
     * @returns {Function}
     */


    Chartist.Interpolation.step = function (options) {
      var defaultOptions = {
        postpone: true,
        fillHoles: false
      };
      options = Chartist.extend({}, defaultOptions, options);
      return function step(pathCoordinates, valueData) {
        var path = new Chartist.Svg.Path();
        var prevX, prevY, prevData;

        for (var i = 0; i < pathCoordinates.length; i += 2) {
          var currX = pathCoordinates[i];
          var currY = pathCoordinates[i + 1];
          var currData = valueData[i / 2]; // If the current point is also not a hole we can draw the step lines

          if (currData.value !== undefined) {
            if (prevData === undefined) {
              path.move(currX, currY, false, currData);
            } else {
              if (options.postpone) {
                // If postponed we should draw the step line with the value of the previous value
                path.line(currX, prevY, false, prevData);
              } else {
                // If not postponed we should draw the step line with the value of the current value
                path.line(prevX, currY, false, currData);
              } // Line to the actual point (this should only be a Y-Axis movement


              path.line(currX, currY, false, currData);
            }

            prevX = currX;
            prevY = currY;
            prevData = currData;
          } else if (!options.fillHoles) {
            prevX = prevY = prevData = undefined;
          }
        }

        return path;
      };
    };
  })(this || global, Chartist);

  ;
  /**
  * A very basic event module that helps to generate and catch events.
  *
  * @module Chartist.Event
  */

  /* global Chartist */

  (function (globalRoot, Chartist) {
    'use strict';

    Chartist.EventEmitter = function () {
      var handlers = [];
      /**
       * Add an event handler for a specific event
       *
       * @memberof Chartist.Event
       * @param {String} event The event name
       * @param {Function} handler A event handler function
       */

      function addEventHandler(event, handler) {
        handlers[event] = handlers[event] || [];
        handlers[event].push(handler);
      }
      /**
       * Remove an event handler of a specific event name or remove all event handlers for a specific event.
       *
       * @memberof Chartist.Event
       * @param {String} event The event name where a specific or all handlers should be removed
       * @param {Function} [handler] An optional event handler function. If specified only this specific handler will be removed and otherwise all handlers are removed.
       */


      function removeEventHandler(event, handler) {
        // Only do something if there are event handlers with this name existing
        if (handlers[event]) {
          // If handler is set we will look for a specific handler and only remove this
          if (handler) {
            handlers[event].splice(handlers[event].indexOf(handler), 1);

            if (handlers[event].length === 0) {
              delete handlers[event];
            }
          } else {
            // If no handler is specified we remove all handlers for this event
            delete handlers[event];
          }
        }
      }
      /**
       * Use this function to emit an event. All handlers that are listening for this event will be triggered with the data parameter.
       *
       * @memberof Chartist.Event
       * @param {String} event The event name that should be triggered
       * @param {*} data Arbitrary data that will be passed to the event handler callback functions
       */


      function emit(event, data) {
        // Only do something if there are event handlers with this name existing
        if (handlers[event]) {
          handlers[event].forEach(function (handler) {
            handler(data);
          });
        } // Emit event to star event handlers


        if (handlers['*']) {
          handlers['*'].forEach(function (starHandler) {
            starHandler(event, data);
          });
        }
      }

      return {
        addEventHandler: addEventHandler,
        removeEventHandler: removeEventHandler,
        emit: emit
      };
    };
  })(this || global, Chartist);

  ;
  /**
  * This module provides some basic prototype inheritance utilities.
  *
  * @module Chartist.Class
  */

  /* global Chartist */

  (function (globalRoot, Chartist) {
    'use strict';

    function listToArray(list) {
      var arr = [];

      if (list.length) {
        for (var i = 0; i < list.length; i++) {
          arr.push(list[i]);
        }
      }

      return arr;
    }
    /**
     * Method to extend from current prototype.
     *
     * @memberof Chartist.Class
     * @param {Object} properties The object that serves as definition for the prototype that gets created for the new class. This object should always contain a constructor property that is the desired constructor for the newly created class.
     * @param {Object} [superProtoOverride] By default extens will use the current class prototype or Chartist.class. With this parameter you can specify any super prototype that will be used.
     * @return {Function} Constructor function of the new class
     *
     * @example
     * var Fruit = Class.extend({
       * color: undefined,
       *   sugar: undefined,
       *
       *   constructor: function(color, sugar) {
       *     this.color = color;
       *     this.sugar = sugar;
       *   },
       *
       *   eat: function() {
       *     this.sugar = 0;
       *     return this;
       *   }
       * });
     *
     * var Banana = Fruit.extend({
       *   length: undefined,
       *
       *   constructor: function(length, sugar) {
       *     Banana.super.constructor.call(this, 'Yellow', sugar);
       *     this.length = length;
       *   }
       * });
     *
     * var banana = new Banana(20, 40);
     * console.log('banana instanceof Fruit', banana instanceof Fruit);
     * console.log('Fruit is prototype of banana', Fruit.prototype.isPrototypeOf(banana));
     * console.log('bananas prototype is Fruit', Object.getPrototypeOf(banana) === Fruit.prototype);
     * console.log(banana.sugar);
     * console.log(banana.eat().sugar);
     * console.log(banana.color);
     */


    function extend(properties, superProtoOverride) {
      var superProto = superProtoOverride || this.prototype || Chartist.Class;
      var proto = Object.create(superProto);
      Chartist.Class.cloneDefinitions(proto, properties);

      var constr = function constr() {
        var fn = proto.constructor || function () {},
            instance; // If this is linked to the Chartist namespace the constructor was not called with new
        // To provide a fallback we will instantiate here and return the instance


        instance = this === Chartist ? Object.create(proto) : this;
        fn.apply(instance, Array.prototype.slice.call(arguments, 0)); // If this constructor was not called with new we need to return the instance
        // This will not harm when the constructor has been called with new as the returned value is ignored

        return instance;
      };

      constr.prototype = proto;
      constr.super = superProto;
      constr.extend = this.extend;
      return constr;
    } // Variable argument list clones args > 0 into args[0] and retruns modified args[0]


    function cloneDefinitions() {
      var args = listToArray(arguments);
      var target = args[0];
      args.splice(1, args.length - 1).forEach(function (source) {
        Object.getOwnPropertyNames(source).forEach(function (propName) {
          // If this property already exist in target we delete it first
          delete target[propName]; // Define the property with the descriptor from source

          Object.defineProperty(target, propName, Object.getOwnPropertyDescriptor(source, propName));
        });
      });
      return target;
    }

    Chartist.Class = {
      extend: extend,
      cloneDefinitions: cloneDefinitions
    };
  })(this || global, Chartist);

  ;
  /**
  * Base for all chart types. The methods in Chartist.Base are inherited to all chart types.
  *
  * @module Chartist.Base
  */

  /* global Chartist */

  (function (globalRoot, Chartist) {
    'use strict';

    var window = globalRoot.window; // TODO: Currently we need to re-draw the chart on window resize. This is usually very bad and will affect performance.
    // This is done because we can't work with relative coordinates when drawing the chart because SVG Path does not
    // work with relative positions yet. We need to check if we can do a viewBox hack to switch to percentage.
    // See http://mozilla.6506.n7.nabble.com/Specyfing-paths-with-percentages-unit-td247474.html
    // Update: can be done using the above method tested here: http://codepen.io/gionkunz/pen/KDvLj
    // The problem is with the label offsets that can't be converted into percentage and affecting the chart container

    /**
     * Updates the chart which currently does a full reconstruction of the SVG DOM
     *
     * @param {Object} [data] Optional data you'd like to set for the chart before it will update. If not specified the update method will use the data that is already configured with the chart.
     * @param {Object} [options] Optional options you'd like to add to the previous options for the chart before it will update. If not specified the update method will use the options that have been already configured with the chart.
     * @param {Boolean} [override] If set to true, the passed options will be used to extend the options that have been configured already. Otherwise the chart default options will be used as the base
     * @memberof Chartist.Base
     */

    function update(data, options, override) {
      if (data) {
        this.data = data || {};
        this.data.labels = this.data.labels || [];
        this.data.series = this.data.series || []; // Event for data transformation that allows to manipulate the data before it gets rendered in the charts

        this.eventEmitter.emit('data', {
          type: 'update',
          data: this.data
        });
      }

      if (options) {
        this.options = Chartist.extend({}, override ? this.options : this.defaultOptions, options); // If chartist was not initialized yet, we just set the options and leave the rest to the initialization
        // Otherwise we re-create the optionsProvider at this point

        if (!this.initializeTimeoutId) {
          this.optionsProvider.removeMediaQueryListeners();
          this.optionsProvider = Chartist.optionsProvider(this.options, this.responsiveOptions, this.eventEmitter);
        }
      } // Only re-created the chart if it has been initialized yet


      if (!this.initializeTimeoutId) {
        this.createChart(this.optionsProvider.getCurrentOptions());
      } // Return a reference to the chart object to chain up calls


      return this;
    }
    /**
     * This method can be called on the API object of each chart and will un-register all event listeners that were added to other components. This currently includes a window.resize listener as well as media query listeners if any responsive options have been provided. Use this function if you need to destroy and recreate Chartist charts dynamically.
     *
     * @memberof Chartist.Base
     */


    function detach() {
      // Only detach if initialization already occurred on this chart. If this chart still hasn't initialized (therefore
      // the initializationTimeoutId is still a valid timeout reference, we will clear the timeout
      if (!this.initializeTimeoutId) {
        window.removeEventListener('resize', this.resizeListener);
        this.optionsProvider.removeMediaQueryListeners();
      } else {
        window.clearTimeout(this.initializeTimeoutId);
      }

      return this;
    }
    /**
     * Use this function to register event handlers. The handler callbacks are synchronous and will run in the main thread rather than the event loop.
     *
     * @memberof Chartist.Base
     * @param {String} event Name of the event. Check the examples for supported events.
     * @param {Function} handler The handler function that will be called when an event with the given name was emitted. This function will receive a data argument which contains event data. See the example for more details.
     */


    function on(event, handler) {
      this.eventEmitter.addEventHandler(event, handler);
      return this;
    }
    /**
     * Use this function to un-register event handlers. If the handler function parameter is omitted all handlers for the given event will be un-registered.
     *
     * @memberof Chartist.Base
     * @param {String} event Name of the event for which a handler should be removed
     * @param {Function} [handler] The handler function that that was previously used to register a new event handler. This handler will be removed from the event handler list. If this parameter is omitted then all event handlers for the given event are removed from the list.
     */


    function off(event, handler) {
      this.eventEmitter.removeEventHandler(event, handler);
      return this;
    }

    function initialize() {
      // Add window resize listener that re-creates the chart
      window.addEventListener('resize', this.resizeListener); // Obtain current options based on matching media queries (if responsive options are given)
      // This will also register a listener that is re-creating the chart based on media changes

      this.optionsProvider = Chartist.optionsProvider(this.options, this.responsiveOptions, this.eventEmitter); // Register options change listener that will trigger a chart update

      this.eventEmitter.addEventHandler('optionsChanged', function () {
        this.update();
      }.bind(this)); // Before the first chart creation we need to register us with all plugins that are configured
      // Initialize all relevant plugins with our chart object and the plugin options specified in the config

      if (this.options.plugins) {
        this.options.plugins.forEach(function (plugin) {
          if (plugin instanceof Array) {
            plugin[0](this, plugin[1]);
          } else {
            plugin(this);
          }
        }.bind(this));
      } // Event for data transformation that allows to manipulate the data before it gets rendered in the charts


      this.eventEmitter.emit('data', {
        type: 'initial',
        data: this.data
      }); // Create the first chart

      this.createChart(this.optionsProvider.getCurrentOptions()); // As chart is initialized from the event loop now we can reset our timeout reference
      // This is important if the chart gets initialized on the same element twice

      this.initializeTimeoutId = undefined;
    }
    /**
     * Constructor of chart base class.
     *
     * @param query
     * @param data
     * @param defaultOptions
     * @param options
     * @param responsiveOptions
     * @constructor
     */


    function Base(query, data, defaultOptions, options, responsiveOptions) {
      this.container = Chartist.querySelector(query);
      this.data = data || {};
      this.data.labels = this.data.labels || [];
      this.data.series = this.data.series || [];
      this.defaultOptions = defaultOptions;
      this.options = options;
      this.responsiveOptions = responsiveOptions;
      this.eventEmitter = Chartist.EventEmitter();
      this.supportsForeignObject = Chartist.Svg.isSupported('Extensibility');
      this.supportsAnimations = Chartist.Svg.isSupported('AnimationEventsAttribute');

      this.resizeListener = function resizeListener() {
        this.update();
      }.bind(this);

      if (this.container) {
        // If chartist was already initialized in this container we are detaching all event listeners first
        if (this.container.__chartist__) {
          this.container.__chartist__.detach();
        }

        this.container.__chartist__ = this;
      } // Using event loop for first draw to make it possible to register event listeners in the same call stack where
      // the chart was created.


      this.initializeTimeoutId = setTimeout(initialize.bind(this), 0);
    } // Creating the chart base class


    Chartist.Base = Chartist.Class.extend({
      constructor: Base,
      optionsProvider: undefined,
      container: undefined,
      svg: undefined,
      eventEmitter: undefined,
      createChart: function createChart() {
        throw new Error('Base chart type can\'t be instantiated!');
      },
      update: update,
      detach: detach,
      on: on,
      off: off,
      version: Chartist.version,
      supportsForeignObject: false
    });
  })(this || global, Chartist);

  ;
  /**
  * Chartist SVG module for simple SVG DOM abstraction
  *
  * @module Chartist.Svg
  */

  /* global Chartist */

  (function (globalRoot, Chartist) {
    'use strict';

    var document = globalRoot.document;
    /**
     * Chartist.Svg creates a new SVG object wrapper with a starting element. You can use the wrapper to fluently create sub-elements and modify them.
     *
     * @memberof Chartist.Svg
     * @constructor
     * @param {String|Element} name The name of the SVG element to create or an SVG dom element which should be wrapped into Chartist.Svg
     * @param {Object} attributes An object with properties that will be added as attributes to the SVG element that is created. Attributes with undefined values will not be added.
     * @param {String} className This class or class list will be added to the SVG element
     * @param {Object} parent The parent SVG wrapper object where this newly created wrapper and it's element will be attached to as child
     * @param {Boolean} insertFirst If this param is set to true in conjunction with a parent element the newly created element will be added as first child element in the parent element
     */

    function Svg(name, attributes, className, parent, insertFirst) {
      // If Svg is getting called with an SVG element we just return the wrapper
      if (name instanceof Element) {
        this._node = name;
      } else {
        this._node = document.createElementNS(Chartist.namespaces.svg, name); // If this is an SVG element created then custom namespace

        if (name === 'svg') {
          this.attr({
            'xmlns:ct': Chartist.namespaces.ct
          });
        }
      }

      if (attributes) {
        this.attr(attributes);
      }

      if (className) {
        this.addClass(className);
      }

      if (parent) {
        if (insertFirst && parent._node.firstChild) {
          parent._node.insertBefore(this._node, parent._node.firstChild);
        } else {
          parent._node.appendChild(this._node);
        }
      }
    }
    /**
     * Set attributes on the current SVG element of the wrapper you're currently working on.
     *
     * @memberof Chartist.Svg
     * @param {Object|String} attributes An object with properties that will be added as attributes to the SVG element that is created. Attributes with undefined values will not be added. If this parameter is a String then the function is used as a getter and will return the attribute value.
     * @param {String} [ns] If specified, the attribute will be obtained using getAttributeNs. In order to write namepsaced attributes you can use the namespace:attribute notation within the attributes object.
     * @return {Object|String} The current wrapper object will be returned so it can be used for chaining or the attribute value if used as getter function.
     */


    function attr(attributes, ns) {
      if (typeof attributes === 'string') {
        if (ns) {
          return this._node.getAttributeNS(ns, attributes);
        } else {
          return this._node.getAttribute(attributes);
        }
      }

      Object.keys(attributes).forEach(function (key) {
        // If the attribute value is undefined we can skip this one
        if (attributes[key] === undefined) {
          return;
        }

        if (key.indexOf(':') !== -1) {
          var namespacedAttribute = key.split(':');

          this._node.setAttributeNS(Chartist.namespaces[namespacedAttribute[0]], key, attributes[key]);
        } else {
          this._node.setAttribute(key, attributes[key]);
        }
      }.bind(this));
      return this;
    }
    /**
     * Create a new SVG element whose wrapper object will be selected for further operations. This way you can also create nested groups easily.
     *
     * @memberof Chartist.Svg
     * @param {String} name The name of the SVG element that should be created as child element of the currently selected element wrapper
     * @param {Object} [attributes] An object with properties that will be added as attributes to the SVG element that is created. Attributes with undefined values will not be added.
     * @param {String} [className] This class or class list will be added to the SVG element
     * @param {Boolean} [insertFirst] If this param is set to true in conjunction with a parent element the newly created element will be added as first child element in the parent element
     * @return {Chartist.Svg} Returns a Chartist.Svg wrapper object that can be used to modify the containing SVG data
     */


    function elem(name, attributes, className, insertFirst) {
      return new Chartist.Svg(name, attributes, className, this, insertFirst);
    }
    /**
     * Returns the parent Chartist.SVG wrapper object
     *
     * @memberof Chartist.Svg
     * @return {Chartist.Svg} Returns a Chartist.Svg wrapper around the parent node of the current node. If the parent node is not existing or it's not an SVG node then this function will return null.
     */


    function parent() {
      return this._node.parentNode instanceof SVGElement ? new Chartist.Svg(this._node.parentNode) : null;
    }
    /**
     * This method returns a Chartist.Svg wrapper around the root SVG element of the current tree.
     *
     * @memberof Chartist.Svg
     * @return {Chartist.Svg} The root SVG element wrapped in a Chartist.Svg element
     */


    function root() {
      var node = this._node;

      while (node.nodeName !== 'svg') {
        node = node.parentNode;
      }

      return new Chartist.Svg(node);
    }
    /**
     * Find the first child SVG element of the current element that matches a CSS selector. The returned object is a Chartist.Svg wrapper.
     *
     * @memberof Chartist.Svg
     * @param {String} selector A CSS selector that is used to query for child SVG elements
     * @return {Chartist.Svg} The SVG wrapper for the element found or null if no element was found
     */


    function querySelector(selector) {
      var foundNode = this._node.querySelector(selector);

      return foundNode ? new Chartist.Svg(foundNode) : null;
    }
    /**
     * Find the all child SVG elements of the current element that match a CSS selector. The returned object is a Chartist.Svg.List wrapper.
     *
     * @memberof Chartist.Svg
     * @param {String} selector A CSS selector that is used to query for child SVG elements
     * @return {Chartist.Svg.List} The SVG wrapper list for the element found or null if no element was found
     */


    function querySelectorAll(selector) {
      var foundNodes = this._node.querySelectorAll(selector);

      return foundNodes.length ? new Chartist.Svg.List(foundNodes) : null;
    }
    /**
     * Returns the underlying SVG node for the current element.
     *
     * @memberof Chartist.Svg
     * @returns {Node}
     */


    function getNode() {
      return this._node;
    }
    /**
     * This method creates a foreignObject (see https://developer.mozilla.org/en-US/docs/Web/SVG/Element/foreignObject) that allows to embed HTML content into a SVG graphic. With the help of foreignObjects you can enable the usage of regular HTML elements inside of SVG where they are subject for SVG positioning and transformation but the Browser will use the HTML rendering capabilities for the containing DOM.
     *
     * @memberof Chartist.Svg
     * @param {Node|String} content The DOM Node, or HTML string that will be converted to a DOM Node, that is then placed into and wrapped by the foreignObject
     * @param {String} [attributes] An object with properties that will be added as attributes to the foreignObject element that is created. Attributes with undefined values will not be added.
     * @param {String} [className] This class or class list will be added to the SVG element
     * @param {Boolean} [insertFirst] Specifies if the foreignObject should be inserted as first child
     * @return {Chartist.Svg} New wrapper object that wraps the foreignObject element
     */


    function foreignObject(content, attributes, className, insertFirst) {
      // If content is string then we convert it to DOM
      // TODO: Handle case where content is not a string nor a DOM Node
      if (typeof content === 'string') {
        var container = document.createElement('div');
        container.innerHTML = content;
        content = container.firstChild;
      } // Adding namespace to content element


      content.setAttribute('xmlns', Chartist.namespaces.xmlns); // Creating the foreignObject without required extension attribute (as described here
      // http://www.w3.org/TR/SVG/extend.html#ForeignObjectElement)

      var fnObj = this.elem('foreignObject', attributes, className, insertFirst); // Add content to foreignObjectElement

      fnObj._node.appendChild(content);

      return fnObj;
    }
    /**
     * This method adds a new text element to the current Chartist.Svg wrapper.
     *
     * @memberof Chartist.Svg
     * @param {String} t The text that should be added to the text element that is created
     * @return {Chartist.Svg} The same wrapper object that was used to add the newly created element
     */


    function text(t) {
      this._node.appendChild(document.createTextNode(t));

      return this;
    }
    /**
     * This method will clear all child nodes of the current wrapper object.
     *
     * @memberof Chartist.Svg
     * @return {Chartist.Svg} The same wrapper object that got emptied
     */


    function empty() {
      while (this._node.firstChild) {
        this._node.removeChild(this._node.firstChild);
      }

      return this;
    }
    /**
     * This method will cause the current wrapper to remove itself from its parent wrapper. Use this method if you'd like to get rid of an element in a given DOM structure.
     *
     * @memberof Chartist.Svg
     * @return {Chartist.Svg} The parent wrapper object of the element that got removed
     */


    function remove() {
      this._node.parentNode.removeChild(this._node);

      return this.parent();
    }
    /**
     * This method will replace the element with a new element that can be created outside of the current DOM.
     *
     * @memberof Chartist.Svg
     * @param {Chartist.Svg} newElement The new Chartist.Svg object that will be used to replace the current wrapper object
     * @return {Chartist.Svg} The wrapper of the new element
     */


    function replace(newElement) {
      this._node.parentNode.replaceChild(newElement._node, this._node);

      return newElement;
    }
    /**
     * This method will append an element to the current element as a child.
     *
     * @memberof Chartist.Svg
     * @param {Chartist.Svg} element The Chartist.Svg element that should be added as a child
     * @param {Boolean} [insertFirst] Specifies if the element should be inserted as first child
     * @return {Chartist.Svg} The wrapper of the appended object
     */


    function append(element, insertFirst) {
      if (insertFirst && this._node.firstChild) {
        this._node.insertBefore(element._node, this._node.firstChild);
      } else {
        this._node.appendChild(element._node);
      }

      return this;
    }
    /**
     * Returns an array of class names that are attached to the current wrapper element. This method can not be chained further.
     *
     * @memberof Chartist.Svg
     * @return {Array} A list of classes or an empty array if there are no classes on the current element
     */


    function classes() {
      return this._node.getAttribute('class') ? this._node.getAttribute('class').trim().split(/\s+/) : [];
    }
    /**
     * Adds one or a space separated list of classes to the current element and ensures the classes are only existing once.
     *
     * @memberof Chartist.Svg
     * @param {String} names A white space separated list of class names
     * @return {Chartist.Svg} The wrapper of the current element
     */


    function addClass(names) {
      this._node.setAttribute('class', this.classes(this._node).concat(names.trim().split(/\s+/)).filter(function (elem, pos, self) {
        return self.indexOf(elem) === pos;
      }).join(' '));

      return this;
    }
    /**
     * Removes one or a space separated list of classes from the current element.
     *
     * @memberof Chartist.Svg
     * @param {String} names A white space separated list of class names
     * @return {Chartist.Svg} The wrapper of the current element
     */


    function removeClass(names) {
      var removedClasses = names.trim().split(/\s+/);

      this._node.setAttribute('class', this.classes(this._node).filter(function (name) {
        return removedClasses.indexOf(name) === -1;
      }).join(' '));

      return this;
    }
    /**
     * Removes all classes from the current element.
     *
     * @memberof Chartist.Svg
     * @return {Chartist.Svg} The wrapper of the current element
     */


    function removeAllClasses() {
      this._node.setAttribute('class', '');

      return this;
    }
    /**
     * Get element height using `getBoundingClientRect`
     *
     * @memberof Chartist.Svg
     * @return {Number} The elements height in pixels
     */


    function height() {
      return this._node.getBoundingClientRect().height;
    }
    /**
     * Get element width using `getBoundingClientRect`
     *
     * @memberof Chartist.Core
     * @return {Number} The elements width in pixels
     */


    function width() {
      return this._node.getBoundingClientRect().width;
    }
    /**
     * The animate function lets you animate the current element with SMIL animations. You can add animations for multiple attributes at the same time by using an animation definition object. This object should contain SMIL animation attributes. Please refer to http://www.w3.org/TR/SVG/animate.html for a detailed specification about the available animation attributes. Additionally an easing property can be passed in the animation definition object. This can be a string with a name of an easing function in `Chartist.Svg.Easing` or an array with four numbers specifying a cubic Bézier curve.
     * **An animations object could look like this:**
     * ```javascript
     * element.animate({
     *   opacity: {
     *     dur: 1000,
     *     from: 0,
     *     to: 1
     *   },
     *   x1: {
     *     dur: '1000ms',
     *     from: 100,
     *     to: 200,
     *     easing: 'easeOutQuart'
     *   },
     *   y1: {
     *     dur: '2s',
     *     from: 0,
     *     to: 100
     *   }
     * });
     * ```
     * **Automatic unit conversion**
     * For the `dur` and the `begin` animate attribute you can also omit a unit by passing a number. The number will automatically be converted to milli seconds.
     * **Guided mode**
     * The default behavior of SMIL animations with offset using the `begin` attribute is that the attribute will keep it's original value until the animation starts. Mostly this behavior is not desired as you'd like to have your element attributes already initialized with the animation `from` value even before the animation starts. Also if you don't specify `fill="freeze"` on an animate element or if you delete the animation after it's done (which is done in guided mode) the attribute will switch back to the initial value. This behavior is also not desired when performing simple one-time animations. For one-time animations you'd want to trigger animations immediately instead of relative to the document begin time. That's why in guided mode Chartist.Svg will also use the `begin` property to schedule a timeout and manually start the animation after the timeout. If you're using multiple SMIL definition objects for an attribute (in an array), guided mode will be disabled for this attribute, even if you explicitly enabled it.
     * If guided mode is enabled the following behavior is added:
     * - Before the animation starts (even when delayed with `begin`) the animated attribute will be set already to the `from` value of the animation
     * - `begin` is explicitly set to `indefinite` so it can be started manually without relying on document begin time (creation)
     * - The animate element will be forced to use `fill="freeze"`
     * - The animation will be triggered with `beginElement()` in a timeout where `begin` of the definition object is interpreted in milli seconds. If no `begin` was specified the timeout is triggered immediately.
     * - After the animation the element attribute value will be set to the `to` value of the animation
     * - The animate element is deleted from the DOM
     *
     * @memberof Chartist.Svg
     * @param {Object} animations An animations object where the property keys are the attributes you'd like to animate. The properties should be objects again that contain the SMIL animation attributes (usually begin, dur, from, and to). The property begin and dur is auto converted (see Automatic unit conversion). You can also schedule multiple animations for the same attribute by passing an Array of SMIL definition objects. Attributes that contain an array of SMIL definition objects will not be executed in guided mode.
     * @param {Boolean} guided Specify if guided mode should be activated for this animation (see Guided mode). If not otherwise specified, guided mode will be activated.
     * @param {Object} eventEmitter If specified, this event emitter will be notified when an animation starts or ends.
     * @return {Chartist.Svg} The current element where the animation was added
     */


    function animate(animations, guided, eventEmitter) {
      if (guided === undefined) {
        guided = true;
      }

      Object.keys(animations).forEach(function createAnimateForAttributes(attribute) {
        function createAnimate(animationDefinition, guided) {
          var attributeProperties = {},
              animate,
              timeout,
              easing; // Check if an easing is specified in the definition object and delete it from the object as it will not
          // be part of the animate element attributes.

          if (animationDefinition.easing) {
            // If already an easing Bézier curve array we take it or we lookup a easing array in the Easing object
            easing = animationDefinition.easing instanceof Array ? animationDefinition.easing : Chartist.Svg.Easing[animationDefinition.easing];
            delete animationDefinition.easing;
          } // If numeric dur or begin was provided we assume milli seconds


          animationDefinition.begin = Chartist.ensureUnit(animationDefinition.begin, 'ms');
          animationDefinition.dur = Chartist.ensureUnit(animationDefinition.dur, 'ms');

          if (easing) {
            animationDefinition.calcMode = 'spline';
            animationDefinition.keySplines = easing.join(' ');
            animationDefinition.keyTimes = '0;1';
          } // Adding "fill: freeze" if we are in guided mode and set initial attribute values


          if (guided) {
            animationDefinition.fill = 'freeze'; // Animated property on our element should already be set to the animation from value in guided mode

            attributeProperties[attribute] = animationDefinition.from;
            this.attr(attributeProperties); // In guided mode we also set begin to indefinite so we can trigger the start manually and put the begin
            // which needs to be in ms aside

            timeout = Chartist.quantity(animationDefinition.begin || 0).value;
            animationDefinition.begin = 'indefinite';
          }

          animate = this.elem('animate', Chartist.extend({
            attributeName: attribute
          }, animationDefinition));

          if (guided) {
            // If guided we take the value that was put aside in timeout and trigger the animation manually with a timeout
            setTimeout(function () {
              // If beginElement fails we set the animated attribute to the end position and remove the animate element
              // This happens if the SMIL ElementTimeControl interface is not supported or any other problems occured in
              // the browser. (Currently FF 34 does not support animate elements in foreignObjects)
              try {
                animate._node.beginElement();
              } catch (err) {
                // Set animated attribute to current animated value
                attributeProperties[attribute] = animationDefinition.to;
                this.attr(attributeProperties); // Remove the animate element as it's no longer required

                animate.remove();
              }
            }.bind(this), timeout);
          }

          if (eventEmitter) {
            animate._node.addEventListener('beginEvent', function handleBeginEvent() {
              eventEmitter.emit('animationBegin', {
                element: this,
                animate: animate._node,
                params: animationDefinition
              });
            }.bind(this));
          }

          animate._node.addEventListener('endEvent', function handleEndEvent() {
            if (eventEmitter) {
              eventEmitter.emit('animationEnd', {
                element: this,
                animate: animate._node,
                params: animationDefinition
              });
            }

            if (guided) {
              // Set animated attribute to current animated value
              attributeProperties[attribute] = animationDefinition.to;
              this.attr(attributeProperties); // Remove the animate element as it's no longer required

              animate.remove();
            }
          }.bind(this));
        } // If current attribute is an array of definition objects we create an animate for each and disable guided mode


        if (animations[attribute] instanceof Array) {
          animations[attribute].forEach(function (animationDefinition) {
            createAnimate.bind(this)(animationDefinition, false);
          }.bind(this));
        } else {
          createAnimate.bind(this)(animations[attribute], guided);
        }
      }.bind(this));
      return this;
    }

    Chartist.Svg = Chartist.Class.extend({
      constructor: Svg,
      attr: attr,
      elem: elem,
      parent: parent,
      root: root,
      querySelector: querySelector,
      querySelectorAll: querySelectorAll,
      getNode: getNode,
      foreignObject: foreignObject,
      text: text,
      empty: empty,
      remove: remove,
      replace: replace,
      append: append,
      classes: classes,
      addClass: addClass,
      removeClass: removeClass,
      removeAllClasses: removeAllClasses,
      height: height,
      width: width,
      animate: animate
    });
    /**
     * This method checks for support of a given SVG feature like Extensibility, SVG-animation or the like. Check http://www.w3.org/TR/SVG11/feature for a detailed list.
     *
     * @memberof Chartist.Svg
     * @param {String} feature The SVG 1.1 feature that should be checked for support.
     * @return {Boolean} True of false if the feature is supported or not
     */

    Chartist.Svg.isSupported = function (feature) {
      return document.implementation.hasFeature('http://www.w3.org/TR/SVG11/feature#' + feature, '1.1');
    };
    /**
     * This Object contains some standard easing cubic bezier curves. Then can be used with their name in the `Chartist.Svg.animate`. You can also extend the list and use your own name in the `animate` function. Click the show code button to see the available bezier functions.
     *
     * @memberof Chartist.Svg
     */


    var easingCubicBeziers = {
      easeInSine: [0.47, 0, 0.745, 0.715],
      easeOutSine: [0.39, 0.575, 0.565, 1],
      easeInOutSine: [0.445, 0.05, 0.55, 0.95],
      easeInQuad: [0.55, 0.085, 0.68, 0.53],
      easeOutQuad: [0.25, 0.46, 0.45, 0.94],
      easeInOutQuad: [0.455, 0.03, 0.515, 0.955],
      easeInCubic: [0.55, 0.055, 0.675, 0.19],
      easeOutCubic: [0.215, 0.61, 0.355, 1],
      easeInOutCubic: [0.645, 0.045, 0.355, 1],
      easeInQuart: [0.895, 0.03, 0.685, 0.22],
      easeOutQuart: [0.165, 0.84, 0.44, 1],
      easeInOutQuart: [0.77, 0, 0.175, 1],
      easeInQuint: [0.755, 0.05, 0.855, 0.06],
      easeOutQuint: [0.23, 1, 0.32, 1],
      easeInOutQuint: [0.86, 0, 0.07, 1],
      easeInExpo: [0.95, 0.05, 0.795, 0.035],
      easeOutExpo: [0.19, 1, 0.22, 1],
      easeInOutExpo: [1, 0, 0, 1],
      easeInCirc: [0.6, 0.04, 0.98, 0.335],
      easeOutCirc: [0.075, 0.82, 0.165, 1],
      easeInOutCirc: [0.785, 0.135, 0.15, 0.86],
      easeInBack: [0.6, -0.28, 0.735, 0.045],
      easeOutBack: [0.175, 0.885, 0.32, 1.275],
      easeInOutBack: [0.68, -0.55, 0.265, 1.55]
    };
    Chartist.Svg.Easing = easingCubicBeziers;
    /**
     * This helper class is to wrap multiple `Chartist.Svg` elements into a list where you can call the `Chartist.Svg` functions on all elements in the list with one call. This is helpful when you'd like to perform calls with `Chartist.Svg` on multiple elements.
     * An instance of this class is also returned by `Chartist.Svg.querySelectorAll`.
     *
     * @memberof Chartist.Svg
     * @param {Array<Node>|NodeList} nodeList An Array of SVG DOM nodes or a SVG DOM NodeList (as returned by document.querySelectorAll)
     * @constructor
     */

    function SvgList(nodeList) {
      var list = this;
      this.svgElements = [];

      for (var i = 0; i < nodeList.length; i++) {
        this.svgElements.push(new Chartist.Svg(nodeList[i]));
      } // Add delegation methods for Chartist.Svg


      Object.keys(Chartist.Svg.prototype).filter(function (prototypeProperty) {
        return ['constructor', 'parent', 'querySelector', 'querySelectorAll', 'replace', 'append', 'classes', 'height', 'width'].indexOf(prototypeProperty) === -1;
      }).forEach(function (prototypeProperty) {
        list[prototypeProperty] = function () {
          var args = Array.prototype.slice.call(arguments, 0);
          list.svgElements.forEach(function (element) {
            Chartist.Svg.prototype[prototypeProperty].apply(element, args);
          });
          return list;
        };
      });
    }

    Chartist.Svg.List = Chartist.Class.extend({
      constructor: SvgList
    });
  })(this || global, Chartist);

  ;
  /**
  * Chartist SVG path module for SVG path description creation and modification.
  *
  * @module Chartist.Svg.Path
  */

  /* global Chartist */

  (function (globalRoot, Chartist) {
    'use strict';
    /**
     * Contains the descriptors of supported element types in a SVG path. Currently only move, line and curve are supported.
     *
     * @memberof Chartist.Svg.Path
     * @type {Object}
     */

    var elementDescriptions = {
      m: ['x', 'y'],
      l: ['x', 'y'],
      c: ['x1', 'y1', 'x2', 'y2', 'x', 'y'],
      a: ['rx', 'ry', 'xAr', 'lAf', 'sf', 'x', 'y']
    };
    /**
     * Default options for newly created SVG path objects.
     *
     * @memberof Chartist.Svg.Path
     * @type {Object}
     */

    var defaultOptions = {
      // The accuracy in digit count after the decimal point. This will be used to round numbers in the SVG path. If this option is set to false then no rounding will be performed.
      accuracy: 3
    };

    function element(command, params, pathElements, pos, relative, data) {
      var pathElement = Chartist.extend({
        command: relative ? command.toLowerCase() : command.toUpperCase()
      }, params, data ? {
        data: data
      } : {});
      pathElements.splice(pos, 0, pathElement);
    }

    function forEachParam(pathElements, cb) {
      pathElements.forEach(function (pathElement, pathElementIndex) {
        elementDescriptions[pathElement.command.toLowerCase()].forEach(function (paramName, paramIndex) {
          cb(pathElement, paramName, pathElementIndex, paramIndex, pathElements);
        });
      });
    }
    /**
     * Used to construct a new path object.
     *
     * @memberof Chartist.Svg.Path
     * @param {Boolean} close If set to true then this path will be closed when stringified (with a Z at the end)
     * @param {Object} options Options object that overrides the default objects. See default options for more details.
     * @constructor
     */


    function SvgPath(close, options) {
      this.pathElements = [];
      this.pos = 0;
      this.close = close;
      this.options = Chartist.extend({}, defaultOptions, options);
    }
    /**
     * Gets or sets the current position (cursor) inside of the path. You can move around the cursor freely but limited to 0 or the count of existing elements. All modifications with element functions will insert new elements at the position of this cursor.
     *
     * @memberof Chartist.Svg.Path
     * @param {Number} [pos] If a number is passed then the cursor is set to this position in the path element array.
     * @return {Chartist.Svg.Path|Number} If the position parameter was passed then the return value will be the path object for easy call chaining. If no position parameter was passed then the current position is returned.
     */


    function position(pos) {
      if (pos !== undefined) {
        this.pos = Math.max(0, Math.min(this.pathElements.length, pos));
        return this;
      } else {
        return this.pos;
      }
    }
    /**
     * Removes elements from the path starting at the current position.
     *
     * @memberof Chartist.Svg.Path
     * @param {Number} count Number of path elements that should be removed from the current position.
     * @return {Chartist.Svg.Path} The current path object for easy call chaining.
     */


    function remove(count) {
      this.pathElements.splice(this.pos, count);
      return this;
    }
    /**
     * Use this function to add a new move SVG path element.
     *
     * @memberof Chartist.Svg.Path
     * @param {Number} x The x coordinate for the move element.
     * @param {Number} y The y coordinate for the move element.
     * @param {Boolean} [relative] If set to true the move element will be created with relative coordinates (lowercase letter)
     * @param {*} [data] Any data that should be stored with the element object that will be accessible in pathElement
     * @return {Chartist.Svg.Path} The current path object for easy call chaining.
     */


    function move(x, y, relative, data) {
      element('M', {
        x: +x,
        y: +y
      }, this.pathElements, this.pos++, relative, data);
      return this;
    }
    /**
     * Use this function to add a new line SVG path element.
     *
     * @memberof Chartist.Svg.Path
     * @param {Number} x The x coordinate for the line element.
     * @param {Number} y The y coordinate for the line element.
     * @param {Boolean} [relative] If set to true the line element will be created with relative coordinates (lowercase letter)
     * @param {*} [data] Any data that should be stored with the element object that will be accessible in pathElement
     * @return {Chartist.Svg.Path} The current path object for easy call chaining.
     */


    function line(x, y, relative, data) {
      element('L', {
        x: +x,
        y: +y
      }, this.pathElements, this.pos++, relative, data);
      return this;
    }
    /**
     * Use this function to add a new curve SVG path element.
     *
     * @memberof Chartist.Svg.Path
     * @param {Number} x1 The x coordinate for the first control point of the bezier curve.
     * @param {Number} y1 The y coordinate for the first control point of the bezier curve.
     * @param {Number} x2 The x coordinate for the second control point of the bezier curve.
     * @param {Number} y2 The y coordinate for the second control point of the bezier curve.
     * @param {Number} x The x coordinate for the target point of the curve element.
     * @param {Number} y The y coordinate for the target point of the curve element.
     * @param {Boolean} [relative] If set to true the curve element will be created with relative coordinates (lowercase letter)
     * @param {*} [data] Any data that should be stored with the element object that will be accessible in pathElement
     * @return {Chartist.Svg.Path} The current path object for easy call chaining.
     */


    function curve(x1, y1, x2, y2, x, y, relative, data) {
      element('C', {
        x1: +x1,
        y1: +y1,
        x2: +x2,
        y2: +y2,
        x: +x,
        y: +y
      }, this.pathElements, this.pos++, relative, data);
      return this;
    }
    /**
     * Use this function to add a new non-bezier curve SVG path element.
     *
     * @memberof Chartist.Svg.Path
     * @param {Number} rx The radius to be used for the x-axis of the arc.
     * @param {Number} ry The radius to be used for the y-axis of the arc.
     * @param {Number} xAr Defines the orientation of the arc
     * @param {Number} lAf Large arc flag
     * @param {Number} sf Sweep flag
     * @param {Number} x The x coordinate for the target point of the curve element.
     * @param {Number} y The y coordinate for the target point of the curve element.
     * @param {Boolean} [relative] If set to true the curve element will be created with relative coordinates (lowercase letter)
     * @param {*} [data] Any data that should be stored with the element object that will be accessible in pathElement
     * @return {Chartist.Svg.Path} The current path object for easy call chaining.
     */


    function arc(rx, ry, xAr, lAf, sf, x, y, relative, data) {
      element('A', {
        rx: +rx,
        ry: +ry,
        xAr: +xAr,
        lAf: +lAf,
        sf: +sf,
        x: +x,
        y: +y
      }, this.pathElements, this.pos++, relative, data);
      return this;
    }
    /**
     * Parses an SVG path seen in the d attribute of path elements, and inserts the parsed elements into the existing path object at the current cursor position. Any closing path indicators (Z at the end of the path) will be ignored by the parser as this is provided by the close option in the options of the path object.
     *
     * @memberof Chartist.Svg.Path
     * @param {String} path Any SVG path that contains move (m), line (l) or curve (c) components.
     * @return {Chartist.Svg.Path} The current path object for easy call chaining.
     */


    function parse(path) {
      // Parsing the SVG path string into an array of arrays [['M', '10', '10'], ['L', '100', '100']]
      var chunks = path.replace(/([A-Za-z])([0-9])/g, '$1 $2').replace(/([0-9])([A-Za-z])/g, '$1 $2').split(/[\s,]+/).reduce(function (result, element) {
        if (element.match(/[A-Za-z]/)) {
          result.push([]);
        }

        result[result.length - 1].push(element);
        return result;
      }, []); // If this is a closed path we remove the Z at the end because this is determined by the close option

      if (chunks[chunks.length - 1][0].toUpperCase() === 'Z') {
        chunks.pop();
      } // Using svgPathElementDescriptions to map raw path arrays into objects that contain the command and the parameters
      // For example {command: 'M', x: '10', y: '10'}


      var elements = chunks.map(function (chunk) {
        var command = chunk.shift(),
            description = elementDescriptions[command.toLowerCase()];
        return Chartist.extend({
          command: command
        }, description.reduce(function (result, paramName, index) {
          result[paramName] = +chunk[index];
          return result;
        }, {}));
      }); // Preparing a splice call with the elements array as var arg params and insert the parsed elements at the current position

      var spliceArgs = [this.pos, 0];
      Array.prototype.push.apply(spliceArgs, elements);
      Array.prototype.splice.apply(this.pathElements, spliceArgs); // Increase the internal position by the element count

      this.pos += elements.length;
      return this;
    }
    /**
     * This function renders to current SVG path object into a final SVG string that can be used in the d attribute of SVG path elements. It uses the accuracy option to round big decimals. If the close parameter was set in the constructor of this path object then a path closing Z will be appended to the output string.
     *
     * @memberof Chartist.Svg.Path
     * @return {String}
     */


    function stringify() {
      var accuracyMultiplier = Math.pow(10, this.options.accuracy);
      return this.pathElements.reduce(function (path, pathElement) {
        var params = elementDescriptions[pathElement.command.toLowerCase()].map(function (paramName) {
          return this.options.accuracy ? Math.round(pathElement[paramName] * accuracyMultiplier) / accuracyMultiplier : pathElement[paramName];
        }.bind(this));
        return path + pathElement.command + params.join(',');
      }.bind(this), '') + (this.close ? 'Z' : '');
    }
    /**
     * Scales all elements in the current SVG path object. There is an individual parameter for each coordinate. Scaling will also be done for control points of curves, affecting the given coordinate.
     *
     * @memberof Chartist.Svg.Path
     * @param {Number} x The number which will be used to scale the x, x1 and x2 of all path elements.
     * @param {Number} y The number which will be used to scale the y, y1 and y2 of all path elements.
     * @return {Chartist.Svg.Path} The current path object for easy call chaining.
     */


    function scale(x, y) {
      forEachParam(this.pathElements, function (pathElement, paramName) {
        pathElement[paramName] *= paramName[0] === 'x' ? x : y;
      });
      return this;
    }
    /**
     * Translates all elements in the current SVG path object. The translation is relative and there is an individual parameter for each coordinate. Translation will also be done for control points of curves, affecting the given coordinate.
     *
     * @memberof Chartist.Svg.Path
     * @param {Number} x The number which will be used to translate the x, x1 and x2 of all path elements.
     * @param {Number} y The number which will be used to translate the y, y1 and y2 of all path elements.
     * @return {Chartist.Svg.Path} The current path object for easy call chaining.
     */


    function translate(x, y) {
      forEachParam(this.pathElements, function (pathElement, paramName) {
        pathElement[paramName] += paramName[0] === 'x' ? x : y;
      });
      return this;
    }
    /**
     * This function will run over all existing path elements and then loop over their attributes. The callback function will be called for every path element attribute that exists in the current path.
     * The method signature of the callback function looks like this:
     * ```javascript
     * function(pathElement, paramName, pathElementIndex, paramIndex, pathElements)
     * ```
     * If something else than undefined is returned by the callback function, this value will be used to replace the old value. This allows you to build custom transformations of path objects that can't be achieved using the basic transformation functions scale and translate.
     *
     * @memberof Chartist.Svg.Path
     * @param {Function} transformFnc The callback function for the transformation. Check the signature in the function description.
     * @return {Chartist.Svg.Path} The current path object for easy call chaining.
     */


    function transform(transformFnc) {
      forEachParam(this.pathElements, function (pathElement, paramName, pathElementIndex, paramIndex, pathElements) {
        var transformed = transformFnc(pathElement, paramName, pathElementIndex, paramIndex, pathElements);

        if (transformed || transformed === 0) {
          pathElement[paramName] = transformed;
        }
      });
      return this;
    }
    /**
     * This function clones a whole path object with all its properties. This is a deep clone and path element objects will also be cloned.
     *
     * @memberof Chartist.Svg.Path
     * @param {Boolean} [close] Optional option to set the new cloned path to closed. If not specified or false, the original path close option will be used.
     * @return {Chartist.Svg.Path}
     */


    function clone(close) {
      var c = new Chartist.Svg.Path(close || this.close);
      c.pos = this.pos;
      c.pathElements = this.pathElements.slice().map(function cloneElements(pathElement) {
        return Chartist.extend({}, pathElement);
      });
      c.options = Chartist.extend({}, this.options);
      return c;
    }
    /**
     * Split a Svg.Path object by a specific command in the path chain. The path chain will be split and an array of newly created paths objects will be returned. This is useful if you'd like to split an SVG path by it's move commands, for example, in order to isolate chunks of drawings.
     *
     * @memberof Chartist.Svg.Path
     * @param {String} command The command you'd like to use to split the path
     * @return {Array<Chartist.Svg.Path>}
     */


    function splitByCommand(command) {
      var split = [new Chartist.Svg.Path()];
      this.pathElements.forEach(function (pathElement) {
        if (pathElement.command === command.toUpperCase() && split[split.length - 1].pathElements.length !== 0) {
          split.push(new Chartist.Svg.Path());
        }

        split[split.length - 1].pathElements.push(pathElement);
      });
      return split;
    }
    /**
     * This static function on `Chartist.Svg.Path` is joining multiple paths together into one paths.
     *
     * @memberof Chartist.Svg.Path
     * @param {Array<Chartist.Svg.Path>} paths A list of paths to be joined together. The order is important.
     * @param {boolean} close If the newly created path should be a closed path
     * @param {Object} options Path options for the newly created path.
     * @return {Chartist.Svg.Path}
     */


    function join(paths, close, options) {
      var joinedPath = new Chartist.Svg.Path(close, options);

      for (var i = 0; i < paths.length; i++) {
        var path = paths[i];

        for (var j = 0; j < path.pathElements.length; j++) {
          joinedPath.pathElements.push(path.pathElements[j]);
        }
      }

      return joinedPath;
    }

    Chartist.Svg.Path = Chartist.Class.extend({
      constructor: SvgPath,
      position: position,
      remove: remove,
      move: move,
      line: line,
      curve: curve,
      arc: arc,
      scale: scale,
      translate: translate,
      transform: transform,
      parse: parse,
      stringify: stringify,
      clone: clone,
      splitByCommand: splitByCommand
    });
    Chartist.Svg.Path.elementDescriptions = elementDescriptions;
    Chartist.Svg.Path.join = join;
  })(this || global, Chartist);

  ;
  /* global Chartist */

  (function (globalRoot, Chartist) {
    'use strict';

    var window = globalRoot.window;
    var document = globalRoot.document;
    var axisUnits = {
      x: {
        pos: 'x',
        len: 'width',
        dir: 'horizontal',
        rectStart: 'x1',
        rectEnd: 'x2',
        rectOffset: 'y2'
      },
      y: {
        pos: 'y',
        len: 'height',
        dir: 'vertical',
        rectStart: 'y2',
        rectEnd: 'y1',
        rectOffset: 'x1'
      }
    };

    function Axis(units, chartRect, ticks, options) {
      this.units = units;
      this.counterUnits = units === axisUnits.x ? axisUnits.y : axisUnits.x;
      this.chartRect = chartRect;
      this.axisLength = chartRect[units.rectEnd] - chartRect[units.rectStart];
      this.gridOffset = chartRect[units.rectOffset];
      this.ticks = ticks;
      this.options = options;
    }

    function createGridAndLabels(gridGroup, labelGroup, useForeignObject, chartOptions, eventEmitter) {
      var axisOptions = chartOptions['axis' + this.units.pos.toUpperCase()];
      var projectedValues = this.ticks.map(this.projectValue.bind(this));
      var labelValues = this.ticks.map(axisOptions.labelInterpolationFnc);
      projectedValues.forEach(function (projectedValue, index) {
        var labelOffset = {
          x: 0,
          y: 0
        }; // TODO: Find better solution for solving this problem
        // Calculate how much space we have available for the label

        var labelLength;

        if (projectedValues[index + 1]) {
          // If we still have one label ahead, we can calculate the distance to the next tick / label
          labelLength = projectedValues[index + 1] - projectedValue;
        } else {
          // If we don't have a label ahead and we have only two labels in total, we just take the remaining distance to
          // on the whole axis length. We limit that to a minimum of 30 pixel, so that labels close to the border will
          // still be visible inside of the chart padding.
          labelLength = Math.max(this.axisLength - projectedValue, 30);
        } // Skip grid lines and labels where interpolated label values are falsey (execpt for 0)


        if (Chartist.isFalseyButZero(labelValues[index]) && labelValues[index] !== '') {
          return;
        } // Transform to global coordinates using the chartRect
        // We also need to set the label offset for the createLabel function


        if (this.units.pos === 'x') {
          projectedValue = this.chartRect.x1 + projectedValue;
          labelOffset.x = chartOptions.axisX.labelOffset.x; // If the labels should be positioned in start position (top side for vertical axis) we need to set a
          // different offset as for positioned with end (bottom)

          if (chartOptions.axisX.position === 'start') {
            labelOffset.y = this.chartRect.padding.top + chartOptions.axisX.labelOffset.y + (useForeignObject ? 5 : 20);
          } else {
            labelOffset.y = this.chartRect.y1 + chartOptions.axisX.labelOffset.y + (useForeignObject ? 5 : 20);
          }
        } else {
          projectedValue = this.chartRect.y1 - projectedValue;
          labelOffset.y = chartOptions.axisY.labelOffset.y - (useForeignObject ? labelLength : 0); // If the labels should be positioned in start position (left side for horizontal axis) we need to set a
          // different offset as for positioned with end (right side)

          if (chartOptions.axisY.position === 'start') {
            labelOffset.x = useForeignObject ? this.chartRect.padding.left + chartOptions.axisY.labelOffset.x : this.chartRect.x1 - 10;
          } else {
            labelOffset.x = this.chartRect.x2 + chartOptions.axisY.labelOffset.x + 10;
          }
        }

        if (axisOptions.showGrid) {
          Chartist.createGrid(projectedValue, index, this, this.gridOffset, this.chartRect[this.counterUnits.len](), gridGroup, [chartOptions.classNames.grid, chartOptions.classNames[this.units.dir]], eventEmitter);
        }

        if (axisOptions.showLabel) {
          Chartist.createLabel(projectedValue, labelLength, index, labelValues, this, axisOptions.offset, labelOffset, labelGroup, [chartOptions.classNames.label, chartOptions.classNames[this.units.dir], axisOptions.position === 'start' ? chartOptions.classNames[axisOptions.position] : chartOptions.classNames['end']], useForeignObject, eventEmitter);
        }
      }.bind(this));
    }

    Chartist.Axis = Chartist.Class.extend({
      constructor: Axis,
      createGridAndLabels: createGridAndLabels,
      projectValue: function projectValue(value, index, data) {
        throw new Error('Base axis can\'t be instantiated!');
      }
    });
    Chartist.Axis.units = axisUnits;
  })(this || global, Chartist);

  ;
  /**
  * The auto scale axis uses standard linear scale projection of values along an axis. It uses order of magnitude to find a scale automatically and evaluates the available space in order to find the perfect amount of ticks for your chart.
  * **Options**
  * The following options are used by this axis in addition to the default axis options outlined in the axis configuration of the chart default settings.
  * ```javascript
  * var options = {
  *   // If high is specified then the axis will display values explicitly up to this value and the computed maximum from the data is ignored
  *   high: 100,
  *   // If low is specified then the axis will display values explicitly down to this value and the computed minimum from the data is ignored
  *   low: 0,
  *   // This option will be used when finding the right scale division settings. The amount of ticks on the scale will be determined so that as many ticks as possible will be displayed, while not violating this minimum required space (in pixel).
  *   scaleMinSpace: 20,
  *   // Can be set to true or false. If set to true, the scale will be generated with whole numbers only.
  *   onlyInteger: true,
  *   // The reference value can be used to make sure that this value will always be on the chart. This is especially useful on bipolar charts where the bipolar center always needs to be part of the chart.
  *   referenceValue: 5
  * };
  * ```
  *
  * @module Chartist.AutoScaleAxis
  */

  /* global Chartist */

  (function (globalRoot, Chartist) {
    'use strict';

    var window = globalRoot.window;
    var document = globalRoot.document;

    function AutoScaleAxis(axisUnit, data, chartRect, options) {
      // Usually we calculate highLow based on the data but this can be overriden by a highLow object in the options
      var highLow = options.highLow || Chartist.getHighLow(data, options, axisUnit.pos);
      this.bounds = Chartist.getBounds(chartRect[axisUnit.rectEnd] - chartRect[axisUnit.rectStart], highLow, options.scaleMinSpace || 20, options.onlyInteger);
      this.range = {
        min: this.bounds.min,
        max: this.bounds.max
      };
      Chartist.AutoScaleAxis.super.constructor.call(this, axisUnit, chartRect, this.bounds.values, options);
    }

    function projectValue(value) {
      return this.axisLength * (+Chartist.getMultiValue(value, this.units.pos) - this.bounds.min) / this.bounds.range;
    }

    Chartist.AutoScaleAxis = Chartist.Axis.extend({
      constructor: AutoScaleAxis,
      projectValue: projectValue
    });
  })(this || global, Chartist);

  ;
  /**
  * The fixed scale axis uses standard linear projection of values along an axis. It makes use of a divisor option to divide the range provided from the minimum and maximum value or the options high and low that will override the computed minimum and maximum.
  * **Options**
  * The following options are used by this axis in addition to the default axis options outlined in the axis configuration of the chart default settings.
  * ```javascript
  * var options = {
  *   // If high is specified then the axis will display values explicitly up to this value and the computed maximum from the data is ignored
  *   high: 100,
  *   // If low is specified then the axis will display values explicitly down to this value and the computed minimum from the data is ignored
  *   low: 0,
  *   // If specified then the value range determined from minimum to maximum (or low and high) will be divided by this number and ticks will be generated at those division points. The default divisor is 1.
  *   divisor: 4,
  *   // If ticks is explicitly set, then the axis will not compute the ticks with the divisor, but directly use the data in ticks to determine at what points on the axis a tick need to be generated.
  *   ticks: [1, 10, 20, 30]
  * };
  * ```
  *
  * @module Chartist.FixedScaleAxis
  */

  /* global Chartist */

  (function (globalRoot, Chartist) {
    'use strict';

    var window = globalRoot.window;
    var document = globalRoot.document;

    function FixedScaleAxis(axisUnit, data, chartRect, options) {
      var highLow = options.highLow || Chartist.getHighLow(data, options, axisUnit.pos);
      this.divisor = options.divisor || 1;
      this.ticks = options.ticks || Chartist.times(this.divisor).map(function (value, index) {
        return highLow.low + (highLow.high - highLow.low) / this.divisor * index;
      }.bind(this));
      this.ticks.sort(function (a, b) {
        return a - b;
      });
      this.range = {
        min: highLow.low,
        max: highLow.high
      };
      Chartist.FixedScaleAxis.super.constructor.call(this, axisUnit, chartRect, this.ticks, options);
      this.stepLength = this.axisLength / this.divisor;
    }

    function projectValue(value) {
      return this.axisLength * (+Chartist.getMultiValue(value, this.units.pos) - this.range.min) / (this.range.max - this.range.min);
    }

    Chartist.FixedScaleAxis = Chartist.Axis.extend({
      constructor: FixedScaleAxis,
      projectValue: projectValue
    });
  })(this || global, Chartist);

  ;
  /**
  * The step axis for step based charts like bar chart or step based line charts. It uses a fixed amount of ticks that will be equally distributed across the whole axis length. The projection is done using the index of the data value rather than the value itself and therefore it's only useful for distribution purpose.
  * **Options**
  * The following options are used by this axis in addition to the default axis options outlined in the axis configuration of the chart default settings.
  * ```javascript
  * var options = {
  *   // Ticks to be used to distribute across the axis length. As this axis type relies on the index of the value rather than the value, arbitrary data that can be converted to a string can be used as ticks.
  *   ticks: ['One', 'Two', 'Three'],
  *   // If set to true the full width will be used to distribute the values where the last value will be at the maximum of the axis length. If false the spaces between the ticks will be evenly distributed instead.
  *   stretch: true
  * };
  * ```
  *
  * @module Chartist.StepAxis
  */

  /* global Chartist */

  (function (globalRoot, Chartist) {
    'use strict';

    var window = globalRoot.window;
    var document = globalRoot.document;

    function StepAxis(axisUnit, data, chartRect, options) {
      Chartist.StepAxis.super.constructor.call(this, axisUnit, chartRect, options.ticks, options);
      var calc = Math.max(1, options.ticks.length - (options.stretch ? 1 : 0));
      this.stepLength = this.axisLength / calc;
    }

    function projectValue(value, index) {
      return this.stepLength * index;
    }

    Chartist.StepAxis = Chartist.Axis.extend({
      constructor: StepAxis,
      projectValue: projectValue
    });
  })(this || global, Chartist);

  ;
  /**
  * The Chartist line chart can be used to draw Line or Scatter charts. If used in the browser you can access the global `Chartist` namespace where you find the `Line` function as a main entry point.
  *
  * For examples on how to use the line chart please check the examples of the `Chartist.Line` method.
  *
  * @module Chartist.Line
  */

  /* global Chartist */

  (function (globalRoot, Chartist) {
    'use strict';

    var window = globalRoot.window;
    var document = globalRoot.document;
    /**
     * Default options in line charts. Expand the code view to see a detailed list of options with comments.
     *
     * @memberof Chartist.Line
     */

    var defaultOptions = {
      // Options for X-Axis
      axisX: {
        // The offset of the labels to the chart area
        offset: 30,
        // Position where labels are placed. Can be set to `start` or `end` where `start` is equivalent to left or top on vertical axis and `end` is equivalent to right or bottom on horizontal axis.
        position: 'end',
        // Allows you to correct label positioning on this axis by positive or negative x and y offset.
        labelOffset: {
          x: 0,
          y: 0
        },
        // If labels should be shown or not
        showLabel: true,
        // If the axis grid should be drawn or not
        showGrid: true,
        // Interpolation function that allows you to intercept the value from the axis label
        labelInterpolationFnc: Chartist.noop,
        // Set the axis type to be used to project values on this axis. If not defined, Chartist.StepAxis will be used for the X-Axis, where the ticks option will be set to the labels in the data and the stretch option will be set to the global fullWidth option. This type can be changed to any axis constructor available (e.g. Chartist.FixedScaleAxis), where all axis options should be present here.
        type: undefined
      },
      // Options for Y-Axis
      axisY: {
        // The offset of the labels to the chart area
        offset: 40,
        // Position where labels are placed. Can be set to `start` or `end` where `start` is equivalent to left or top on vertical axis and `end` is equivalent to right or bottom on horizontal axis.
        position: 'start',
        // Allows you to correct label positioning on this axis by positive or negative x and y offset.
        labelOffset: {
          x: 0,
          y: 0
        },
        // If labels should be shown or not
        showLabel: true,
        // If the axis grid should be drawn or not
        showGrid: true,
        // Interpolation function that allows you to intercept the value from the axis label
        labelInterpolationFnc: Chartist.noop,
        // Set the axis type to be used to project values on this axis. If not defined, Chartist.AutoScaleAxis will be used for the Y-Axis, where the high and low options will be set to the global high and low options. This type can be changed to any axis constructor available (e.g. Chartist.FixedScaleAxis), where all axis options should be present here.
        type: undefined,
        // This value specifies the minimum height in pixel of the scale steps
        scaleMinSpace: 20,
        // Use only integer values (whole numbers) for the scale steps
        onlyInteger: false
      },
      // Specify a fixed width for the chart as a string (i.e. '100px' or '50%')
      width: undefined,
      // Specify a fixed height for the chart as a string (i.e. '100px' or '50%')
      height: undefined,
      // If the line should be drawn or not
      showLine: true,
      // If dots should be drawn or not
      showPoint: true,
      // If the line chart should draw an area
      showArea: false,
      // The base for the area chart that will be used to close the area shape (is normally 0)
      areaBase: 0,
      // Specify if the lines should be smoothed. This value can be true or false where true will result in smoothing using the default smoothing interpolation function Chartist.Interpolation.cardinal and false results in Chartist.Interpolation.none. You can also choose other smoothing / interpolation functions available in the Chartist.Interpolation module, or write your own interpolation function. Check the examples for a brief description.
      lineSmooth: true,
      // If the line chart should add a background fill to the .ct-grids group.
      showGridBackground: false,
      // Overriding the natural low of the chart allows you to zoom in or limit the charts lowest displayed value
      low: undefined,
      // Overriding the natural high of the chart allows you to zoom in or limit the charts highest displayed value
      high: undefined,
      // Padding of the chart drawing area to the container element and labels as a number or padding object {top: 5, right: 5, bottom: 5, left: 5}
      chartPadding: {
        top: 15,
        right: 15,
        bottom: 5,
        left: 10
      },
      // When set to true, the last grid line on the x-axis is not drawn and the chart elements will expand to the full available width of the chart. For the last label to be drawn correctly you might need to add chart padding or offset the last label with a draw event handler.
      fullWidth: false,
      // If true the whole data is reversed including labels, the series order as well as the whole series data arrays.
      reverseData: false,
      // Override the class names that get used to generate the SVG structure of the chart
      classNames: {
        chart: 'ct-chart-line',
        label: 'ct-label',
        labelGroup: 'ct-labels',
        series: 'ct-series',
        line: 'ct-line',
        point: 'ct-point',
        area: 'ct-area',
        grid: 'ct-grid',
        gridGroup: 'ct-grids',
        gridBackground: 'ct-grid-background',
        vertical: 'ct-vertical',
        horizontal: 'ct-horizontal',
        start: 'ct-start',
        end: 'ct-end'
      }
    };
    /**
     * Creates a new chart
     *
     */

    function createChart(options) {
      var data = Chartist.normalizeData(this.data, options.reverseData, true); // Create new svg object

      this.svg = Chartist.createSvg(this.container, options.width, options.height, options.classNames.chart); // Create groups for labels, grid and series

      var gridGroup = this.svg.elem('g').addClass(options.classNames.gridGroup);
      var seriesGroup = this.svg.elem('g');
      var labelGroup = this.svg.elem('g').addClass(options.classNames.labelGroup);
      var chartRect = Chartist.createChartRect(this.svg, options, defaultOptions.padding);
      var axisX, axisY;

      if (options.axisX.type === undefined) {
        axisX = new Chartist.StepAxis(Chartist.Axis.units.x, data.normalized.series, chartRect, Chartist.extend({}, options.axisX, {
          ticks: data.normalized.labels,
          stretch: options.fullWidth
        }));
      } else {
        axisX = options.axisX.type.call(Chartist, Chartist.Axis.units.x, data.normalized.series, chartRect, options.axisX);
      }

      if (options.axisY.type === undefined) {
        axisY = new Chartist.AutoScaleAxis(Chartist.Axis.units.y, data.normalized.series, chartRect, Chartist.extend({}, options.axisY, {
          high: Chartist.isNumeric(options.high) ? options.high : options.axisY.high,
          low: Chartist.isNumeric(options.low) ? options.low : options.axisY.low
        }));
      } else {
        axisY = options.axisY.type.call(Chartist, Chartist.Axis.units.y, data.normalized.series, chartRect, options.axisY);
      }

      axisX.createGridAndLabels(gridGroup, labelGroup, this.supportsForeignObject, options, this.eventEmitter);
      axisY.createGridAndLabels(gridGroup, labelGroup, this.supportsForeignObject, options, this.eventEmitter);

      if (options.showGridBackground) {
        Chartist.createGridBackground(gridGroup, chartRect, options.classNames.gridBackground, this.eventEmitter);
      } // Draw the series


      data.raw.series.forEach(function (series, seriesIndex) {
        var seriesElement = seriesGroup.elem('g'); // Write attributes to series group element. If series name or meta is undefined the attributes will not be written

        seriesElement.attr({
          'ct:series-name': series.name,
          'ct:meta': Chartist.serialize(series.meta)
        }); // Use series class from series data or if not set generate one

        seriesElement.addClass([options.classNames.series, series.className || options.classNames.series + '-' + Chartist.alphaNumerate(seriesIndex)].join(' '));
        var pathCoordinates = [],
            pathData = [];
        data.normalized.series[seriesIndex].forEach(function (value, valueIndex) {
          var p = {
            x: chartRect.x1 + axisX.projectValue(value, valueIndex, data.normalized.series[seriesIndex]),
            y: chartRect.y1 - axisY.projectValue(value, valueIndex, data.normalized.series[seriesIndex])
          };
          pathCoordinates.push(p.x, p.y);
          pathData.push({
            value: value,
            valueIndex: valueIndex,
            meta: Chartist.getMetaData(series, valueIndex)
          });
        }.bind(this));
        var seriesOptions = {
          lineSmooth: Chartist.getSeriesOption(series, options, 'lineSmooth'),
          showPoint: Chartist.getSeriesOption(series, options, 'showPoint'),
          showLine: Chartist.getSeriesOption(series, options, 'showLine'),
          showArea: Chartist.getSeriesOption(series, options, 'showArea'),
          areaBase: Chartist.getSeriesOption(series, options, 'areaBase')
        };
        var smoothing = typeof seriesOptions.lineSmooth === 'function' ? seriesOptions.lineSmooth : seriesOptions.lineSmooth ? Chartist.Interpolation.monotoneCubic() : Chartist.Interpolation.none(); // Interpolating path where pathData will be used to annotate each path element so we can trace back the original
        // index, value and meta data

        var path = smoothing(pathCoordinates, pathData); // If we should show points we need to create them now to avoid secondary loop
        // Points are drawn from the pathElements returned by the interpolation function
        // Small offset for Firefox to render squares correctly

        if (seriesOptions.showPoint) {
          path.pathElements.forEach(function (pathElement) {
            var point = seriesElement.elem('line', {
              x1: pathElement.x,
              y1: pathElement.y,
              x2: pathElement.x + 0.01,
              y2: pathElement.y
            }, options.classNames.point).attr({
              'ct:value': [pathElement.data.value.x, pathElement.data.value.y].filter(Chartist.isNumeric).join(','),
              'ct:meta': Chartist.serialize(pathElement.data.meta)
            });
            this.eventEmitter.emit('draw', {
              type: 'point',
              value: pathElement.data.value,
              index: pathElement.data.valueIndex,
              meta: pathElement.data.meta,
              series: series,
              seriesIndex: seriesIndex,
              axisX: axisX,
              axisY: axisY,
              group: seriesElement,
              element: point,
              x: pathElement.x,
              y: pathElement.y
            });
          }.bind(this));
        }

        if (seriesOptions.showLine) {
          var line = seriesElement.elem('path', {
            d: path.stringify()
          }, options.classNames.line, true);
          this.eventEmitter.emit('draw', {
            type: 'line',
            values: data.normalized.series[seriesIndex],
            path: path.clone(),
            chartRect: chartRect,
            index: seriesIndex,
            series: series,
            seriesIndex: seriesIndex,
            seriesMeta: series.meta,
            axisX: axisX,
            axisY: axisY,
            group: seriesElement,
            element: line
          });
        } // Area currently only works with axes that support a range!


        if (seriesOptions.showArea && axisY.range) {
          // If areaBase is outside the chart area (< min or > max) we need to set it respectively so that
          // the area is not drawn outside the chart area.
          var areaBase = Math.max(Math.min(seriesOptions.areaBase, axisY.range.max), axisY.range.min); // We project the areaBase value into screen coordinates

          var areaBaseProjected = chartRect.y1 - axisY.projectValue(areaBase); // In order to form the area we'll first split the path by move commands so we can chunk it up into segments

          path.splitByCommand('M').filter(function onlySolidSegments(pathSegment) {
            // We filter only "solid" segments that contain more than one point. Otherwise there's no need for an area
            return pathSegment.pathElements.length > 1;
          }).map(function convertToArea(solidPathSegments) {
            // Receiving the filtered solid path segments we can now convert those segments into fill areas
            var firstElement = solidPathSegments.pathElements[0];
            var lastElement = solidPathSegments.pathElements[solidPathSegments.pathElements.length - 1]; // Cloning the solid path segment with closing option and removing the first move command from the clone
            // We then insert a new move that should start at the area base and draw a straight line up or down
            // at the end of the path we add an additional straight line to the projected area base value
            // As the closing option is set our path will be automatically closed

            return solidPathSegments.clone(true).position(0).remove(1).move(firstElement.x, areaBaseProjected).line(firstElement.x, firstElement.y).position(solidPathSegments.pathElements.length + 1).line(lastElement.x, areaBaseProjected);
          }).forEach(function createArea(areaPath) {
            // For each of our newly created area paths, we'll now create path elements by stringifying our path objects
            // and adding the created DOM elements to the correct series group
            var area = seriesElement.elem('path', {
              d: areaPath.stringify()
            }, options.classNames.area, true); // Emit an event for each area that was drawn

            this.eventEmitter.emit('draw', {
              type: 'area',
              values: data.normalized.series[seriesIndex],
              path: areaPath.clone(),
              series: series,
              seriesIndex: seriesIndex,
              axisX: axisX,
              axisY: axisY,
              chartRect: chartRect,
              index: seriesIndex,
              group: seriesElement,
              element: area
            });
          }.bind(this));
        }
      }.bind(this));
      this.eventEmitter.emit('created', {
        bounds: axisY.bounds,
        chartRect: chartRect,
        axisX: axisX,
        axisY: axisY,
        svg: this.svg,
        options: options
      });
    }
    /**
     * This method creates a new line chart.
     *
     * @memberof Chartist.Line
     * @param {String|Node} query A selector query string or directly a DOM element
     * @param {Object} data The data object that needs to consist of a labels and a series array
     * @param {Object} [options] The options object with options that override the default options. Check the examples for a detailed list.
     * @param {Array} [responsiveOptions] Specify an array of responsive option arrays which are a media query and options object pair => [[mediaQueryString, optionsObject],[more...]]
     * @return {Object} An object which exposes the API for the created chart
     *
     * @example
     * // Create a simple line chart
     * var data = {
     *   // A labels array that can contain any sort of values
     *   labels: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri'],
     *   // Our series array that contains series objects or in this case series data arrays
     *   series: [
     *     [5, 2, 4, 2, 0]
     *   ]
     * };
     *
     * // As options we currently only set a static size of 300x200 px
     * var options = {
     *   width: '300px',
     *   height: '200px'
     * };
     *
     * // In the global name space Chartist we call the Line function to initialize a line chart. As a first parameter we pass in a selector where we would like to get our chart created. Second parameter is the actual data object and as a third parameter we pass in our options
     * new Chartist.Line('.ct-chart', data, options);
     *
     * @example
     * // Use specific interpolation function with configuration from the Chartist.Interpolation module
     *
     * var chart = new Chartist.Line('.ct-chart', {
     *   labels: [1, 2, 3, 4, 5],
     *   series: [
     *     [1, 1, 8, 1, 7]
     *   ]
     * }, {
     *   lineSmooth: Chartist.Interpolation.cardinal({
     *     tension: 0.2
     *   })
     * });
     *
     * @example
     * // Create a line chart with responsive options
     *
     * var data = {
     *   // A labels array that can contain any sort of values
     *   labels: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday'],
     *   // Our series array that contains series objects or in this case series data arrays
     *   series: [
     *     [5, 2, 4, 2, 0]
     *   ]
     * };
     *
     * // In addition to the regular options we specify responsive option overrides that will override the default configutation based on the matching media queries.
     * var responsiveOptions = [
     *   ['screen and (min-width: 641px) and (max-width: 1024px)', {
     *     showPoint: false,
     *     axisX: {
     *       labelInterpolationFnc: function(value) {
     *         // Will return Mon, Tue, Wed etc. on medium screens
     *         return value.slice(0, 3);
     *       }
     *     }
     *   }],
     *   ['screen and (max-width: 640px)', {
     *     showLine: false,
     *     axisX: {
     *       labelInterpolationFnc: function(value) {
     *         // Will return M, T, W etc. on small screens
     *         return value[0];
     *       }
     *     }
     *   }]
     * ];
     *
     * new Chartist.Line('.ct-chart', data, null, responsiveOptions);
     *
     */


    function Line(query, data, options, responsiveOptions) {
      Chartist.Line.super.constructor.call(this, query, data, defaultOptions, Chartist.extend({}, defaultOptions, options), responsiveOptions);
    } // Creating line chart type in Chartist namespace


    Chartist.Line = Chartist.Base.extend({
      constructor: Line,
      createChart: createChart
    });
  })(this || global, Chartist);

  ;
  /**
  * The bar chart module of Chartist that can be used to draw unipolar or bipolar bar and grouped bar charts.
  *
  * @module Chartist.Bar
  */

  /* global Chartist */

  (function (globalRoot, Chartist) {
    'use strict';

    var window = globalRoot.window;
    var document = globalRoot.document;
    /**
     * Default options in bar charts. Expand the code view to see a detailed list of options with comments.
     *
     * @memberof Chartist.Bar
     */

    var defaultOptions = {
      // Options for X-Axis
      axisX: {
        // The offset of the chart drawing area to the border of the container
        offset: 30,
        // Position where labels are placed. Can be set to `start` or `end` where `start` is equivalent to left or top on vertical axis and `end` is equivalent to right or bottom on horizontal axis.
        position: 'end',
        // Allows you to correct label positioning on this axis by positive or negative x and y offset.
        labelOffset: {
          x: 0,
          y: 0
        },
        // If labels should be shown or not
        showLabel: true,
        // If the axis grid should be drawn or not
        showGrid: true,
        // Interpolation function that allows you to intercept the value from the axis label
        labelInterpolationFnc: Chartist.noop,
        // This value specifies the minimum width in pixel of the scale steps
        scaleMinSpace: 30,
        // Use only integer values (whole numbers) for the scale steps
        onlyInteger: false
      },
      // Options for Y-Axis
      axisY: {
        // The offset of the chart drawing area to the border of the container
        offset: 40,
        // Position where labels are placed. Can be set to `start` or `end` where `start` is equivalent to left or top on vertical axis and `end` is equivalent to right or bottom on horizontal axis.
        position: 'start',
        // Allows you to correct label positioning on this axis by positive or negative x and y offset.
        labelOffset: {
          x: 0,
          y: 0
        },
        // If labels should be shown or not
        showLabel: true,
        // If the axis grid should be drawn or not
        showGrid: true,
        // Interpolation function that allows you to intercept the value from the axis label
        labelInterpolationFnc: Chartist.noop,
        // This value specifies the minimum height in pixel of the scale steps
        scaleMinSpace: 20,
        // Use only integer values (whole numbers) for the scale steps
        onlyInteger: false
      },
      // Specify a fixed width for the chart as a string (i.e. '100px' or '50%')
      width: undefined,
      // Specify a fixed height for the chart as a string (i.e. '100px' or '50%')
      height: undefined,
      // Overriding the natural high of the chart allows you to zoom in or limit the charts highest displayed value
      high: undefined,
      // Overriding the natural low of the chart allows you to zoom in or limit the charts lowest displayed value
      low: undefined,
      // Unless low/high are explicitly set, bar chart will be centered at zero by default. Set referenceValue to null to auto scale.
      referenceValue: 0,
      // Padding of the chart drawing area to the container element and labels as a number or padding object {top: 5, right: 5, bottom: 5, left: 5}
      chartPadding: {
        top: 15,
        right: 15,
        bottom: 5,
        left: 10
      },
      // Specify the distance in pixel of bars in a group
      seriesBarDistance: 15,
      // If set to true this property will cause the series bars to be stacked. Check the `stackMode` option for further stacking options.
      stackBars: false,
      // If set to 'overlap' this property will force the stacked bars to draw from the zero line.
      // If set to 'accumulate' this property will form a total for each series point. This will also influence the y-axis and the overall bounds of the chart. In stacked mode the seriesBarDistance property will have no effect.
      stackMode: 'accumulate',
      // Inverts the axes of the bar chart in order to draw a horizontal bar chart. Be aware that you also need to invert your axis settings as the Y Axis will now display the labels and the X Axis the values.
      horizontalBars: false,
      // If set to true then each bar will represent a series and the data array is expected to be a one dimensional array of data values rather than a series array of series. This is useful if the bar chart should represent a profile rather than some data over time.
      distributeSeries: false,
      // If true the whole data is reversed including labels, the series order as well as the whole series data arrays.
      reverseData: false,
      // If the bar chart should add a background fill to the .ct-grids group.
      showGridBackground: false,
      // Override the class names that get used to generate the SVG structure of the chart
      classNames: {
        chart: 'ct-chart-bar',
        horizontalBars: 'ct-horizontal-bars',
        label: 'ct-label',
        labelGroup: 'ct-labels',
        series: 'ct-series',
        bar: 'ct-bar',
        grid: 'ct-grid',
        gridGroup: 'ct-grids',
        gridBackground: 'ct-grid-background',
        vertical: 'ct-vertical',
        horizontal: 'ct-horizontal',
        start: 'ct-start',
        end: 'ct-end'
      }
    };
    /**
     * Creates a new chart
     *
     */

    function createChart(options) {
      var data;
      var highLow;

      if (options.distributeSeries) {
        data = Chartist.normalizeData(this.data, options.reverseData, options.horizontalBars ? 'x' : 'y');
        data.normalized.series = data.normalized.series.map(function (value) {
          return [value];
        });
      } else {
        data = Chartist.normalizeData(this.data, options.reverseData, options.horizontalBars ? 'x' : 'y');
      } // Create new svg element


      this.svg = Chartist.createSvg(this.container, options.width, options.height, options.classNames.chart + (options.horizontalBars ? ' ' + options.classNames.horizontalBars : '')); // Drawing groups in correct order

      var gridGroup = this.svg.elem('g').addClass(options.classNames.gridGroup);
      var seriesGroup = this.svg.elem('g');
      var labelGroup = this.svg.elem('g').addClass(options.classNames.labelGroup);

      if (options.stackBars && data.normalized.series.length !== 0) {
        // If stacked bars we need to calculate the high low from stacked values from each series
        var serialSums = Chartist.serialMap(data.normalized.series, function serialSums() {
          return Array.prototype.slice.call(arguments).map(function (value) {
            return value;
          }).reduce(function (prev, curr) {
            return {
              x: prev.x + (curr && curr.x) || 0,
              y: prev.y + (curr && curr.y) || 0
            };
          }, {
            x: 0,
            y: 0
          });
        });
        highLow = Chartist.getHighLow([serialSums], options, options.horizontalBars ? 'x' : 'y');
      } else {
        highLow = Chartist.getHighLow(data.normalized.series, options, options.horizontalBars ? 'x' : 'y');
      } // Overrides of high / low from settings


      highLow.high = +options.high || (options.high === 0 ? 0 : highLow.high);
      highLow.low = +options.low || (options.low === 0 ? 0 : highLow.low);
      var chartRect = Chartist.createChartRect(this.svg, options, defaultOptions.padding);
      var valueAxis, labelAxisTicks, labelAxis, axisX, axisY; // We need to set step count based on some options combinations

      if (options.distributeSeries && options.stackBars) {
        // If distributed series are enabled and bars need to be stacked, we'll only have one bar and therefore should
        // use only the first label for the step axis
        labelAxisTicks = data.normalized.labels.slice(0, 1);
      } else {
        // If distributed series are enabled but stacked bars aren't, we should use the series labels
        // If we are drawing a regular bar chart with two dimensional series data, we just use the labels array
        // as the bars are normalized
        labelAxisTicks = data.normalized.labels;
      } // Set labelAxis and valueAxis based on the horizontalBars setting. This setting will flip the axes if necessary.


      if (options.horizontalBars) {
        if (options.axisX.type === undefined) {
          valueAxis = axisX = new Chartist.AutoScaleAxis(Chartist.Axis.units.x, data.normalized.series, chartRect, Chartist.extend({}, options.axisX, {
            highLow: highLow,
            referenceValue: 0
          }));
        } else {
          valueAxis = axisX = options.axisX.type.call(Chartist, Chartist.Axis.units.x, data.normalized.series, chartRect, Chartist.extend({}, options.axisX, {
            highLow: highLow,
            referenceValue: 0
          }));
        }

        if (options.axisY.type === undefined) {
          labelAxis = axisY = new Chartist.StepAxis(Chartist.Axis.units.y, data.normalized.series, chartRect, {
            ticks: labelAxisTicks
          });
        } else {
          labelAxis = axisY = options.axisY.type.call(Chartist, Chartist.Axis.units.y, data.normalized.series, chartRect, options.axisY);
        }
      } else {
        if (options.axisX.type === undefined) {
          labelAxis = axisX = new Chartist.StepAxis(Chartist.Axis.units.x, data.normalized.series, chartRect, {
            ticks: labelAxisTicks
          });
        } else {
          labelAxis = axisX = options.axisX.type.call(Chartist, Chartist.Axis.units.x, data.normalized.series, chartRect, options.axisX);
        }

        if (options.axisY.type === undefined) {
          valueAxis = axisY = new Chartist.AutoScaleAxis(Chartist.Axis.units.y, data.normalized.series, chartRect, Chartist.extend({}, options.axisY, {
            highLow: highLow,
            referenceValue: 0
          }));
        } else {
          valueAxis = axisY = options.axisY.type.call(Chartist, Chartist.Axis.units.y, data.normalized.series, chartRect, Chartist.extend({}, options.axisY, {
            highLow: highLow,
            referenceValue: 0
          }));
        }
      } // Projected 0 point


      var zeroPoint = options.horizontalBars ? chartRect.x1 + valueAxis.projectValue(0) : chartRect.y1 - valueAxis.projectValue(0); // Used to track the screen coordinates of stacked bars

      var stackedBarValues = [];
      labelAxis.createGridAndLabels(gridGroup, labelGroup, this.supportsForeignObject, options, this.eventEmitter);
      valueAxis.createGridAndLabels(gridGroup, labelGroup, this.supportsForeignObject, options, this.eventEmitter);

      if (options.showGridBackground) {
        Chartist.createGridBackground(gridGroup, chartRect, options.classNames.gridBackground, this.eventEmitter);
      } // Draw the series


      data.raw.series.forEach(function (series, seriesIndex) {
        // Calculating bi-polar value of index for seriesOffset. For i = 0..4 biPol will be -1.5, -0.5, 0.5, 1.5 etc.
        var biPol = seriesIndex - (data.raw.series.length - 1) / 2; // Half of the period width between vertical grid lines used to position bars

        var periodHalfLength; // Current series SVG element

        var seriesElement; // We need to set periodHalfLength based on some options combinations

        if (options.distributeSeries && !options.stackBars) {
          // If distributed series are enabled but stacked bars aren't, we need to use the length of the normaizedData array
          // which is the series count and divide by 2
          periodHalfLength = labelAxis.axisLength / data.normalized.series.length / 2;
        } else if (options.distributeSeries && options.stackBars) {
          // If distributed series and stacked bars are enabled we'll only get one bar so we should just divide the axis
          // length by 2
          periodHalfLength = labelAxis.axisLength / 2;
        } else {
          // On regular bar charts we should just use the series length
          periodHalfLength = labelAxis.axisLength / data.normalized.series[seriesIndex].length / 2;
        } // Adding the series group to the series element


        seriesElement = seriesGroup.elem('g'); // Write attributes to series group element. If series name or meta is undefined the attributes will not be written

        seriesElement.attr({
          'ct:series-name': series.name,
          'ct:meta': Chartist.serialize(series.meta)
        }); // Use series class from series data or if not set generate one

        seriesElement.addClass([options.classNames.series, series.className || options.classNames.series + '-' + Chartist.alphaNumerate(seriesIndex)].join(' '));
        data.normalized.series[seriesIndex].forEach(function (value, valueIndex) {
          var projected, bar, previousStack, labelAxisValueIndex; // We need to set labelAxisValueIndex based on some options combinations

          if (options.distributeSeries && !options.stackBars) {
            // If distributed series are enabled but stacked bars aren't, we can use the seriesIndex for later projection
            // on the step axis for label positioning
            labelAxisValueIndex = seriesIndex;
          } else if (options.distributeSeries && options.stackBars) {
            // If distributed series and stacked bars are enabled, we will only get one bar and therefore always use
            // 0 for projection on the label step axis
            labelAxisValueIndex = 0;
          } else {
            // On regular bar charts we just use the value index to project on the label step axis
            labelAxisValueIndex = valueIndex;
          } // We need to transform coordinates differently based on the chart layout


          if (options.horizontalBars) {
            projected = {
              x: chartRect.x1 + valueAxis.projectValue(value && value.x ? value.x : 0, valueIndex, data.normalized.series[seriesIndex]),
              y: chartRect.y1 - labelAxis.projectValue(value && value.y ? value.y : 0, labelAxisValueIndex, data.normalized.series[seriesIndex])
            };
          } else {
            projected = {
              x: chartRect.x1 + labelAxis.projectValue(value && value.x ? value.x : 0, labelAxisValueIndex, data.normalized.series[seriesIndex]),
              y: chartRect.y1 - valueAxis.projectValue(value && value.y ? value.y : 0, valueIndex, data.normalized.series[seriesIndex])
            };
          } // If the label axis is a step based axis we will offset the bar into the middle of between two steps using
          // the periodHalfLength value. Also we do arrange the different series so that they align up to each other using
          // the seriesBarDistance. If we don't have a step axis, the bar positions can be chosen freely so we should not
          // add any automated positioning.


          if (labelAxis instanceof Chartist.StepAxis) {
            // Offset to center bar between grid lines, but only if the step axis is not stretched
            if (!labelAxis.options.stretch) {
              projected[labelAxis.units.pos] += periodHalfLength * (options.horizontalBars ? -1 : 1);
            } // Using bi-polar offset for multiple series if no stacked bars or series distribution is used


            projected[labelAxis.units.pos] += options.stackBars || options.distributeSeries ? 0 : biPol * options.seriesBarDistance * (options.horizontalBars ? -1 : 1);
          } // Enter value in stacked bar values used to remember previous screen value for stacking up bars


          previousStack = stackedBarValues[valueIndex] || zeroPoint;
          stackedBarValues[valueIndex] = previousStack - (zeroPoint - projected[labelAxis.counterUnits.pos]); // Skip if value is undefined

          if (value === undefined) {
            return;
          }

          var positions = {};
          positions[labelAxis.units.pos + '1'] = projected[labelAxis.units.pos];
          positions[labelAxis.units.pos + '2'] = projected[labelAxis.units.pos];

          if (options.stackBars && (options.stackMode === 'accumulate' || !options.stackMode)) {
            // Stack mode: accumulate (default)
            // If bars are stacked we use the stackedBarValues reference and otherwise base all bars off the zero line
            // We want backwards compatibility, so the expected fallback without the 'stackMode' option
            // to be the original behaviour (accumulate)
            positions[labelAxis.counterUnits.pos + '1'] = previousStack;
            positions[labelAxis.counterUnits.pos + '2'] = stackedBarValues[valueIndex];
          } else {
            // Draw from the zero line normally
            // This is also the same code for Stack mode: overlap
            positions[labelAxis.counterUnits.pos + '1'] = zeroPoint;
            positions[labelAxis.counterUnits.pos + '2'] = projected[labelAxis.counterUnits.pos];
          } // Limit x and y so that they are within the chart rect


          positions.x1 = Math.min(Math.max(positions.x1, chartRect.x1), chartRect.x2);
          positions.x2 = Math.min(Math.max(positions.x2, chartRect.x1), chartRect.x2);
          positions.y1 = Math.min(Math.max(positions.y1, chartRect.y2), chartRect.y1);
          positions.y2 = Math.min(Math.max(positions.y2, chartRect.y2), chartRect.y1);
          var metaData = Chartist.getMetaData(series, valueIndex); // Create bar element

          bar = seriesElement.elem('line', positions, options.classNames.bar).attr({
            'ct:value': [value.x, value.y].filter(Chartist.isNumeric).join(','),
            'ct:meta': Chartist.serialize(metaData)
          });
          this.eventEmitter.emit('draw', Chartist.extend({
            type: 'bar',
            value: value,
            index: valueIndex,
            meta: metaData,
            series: series,
            seriesIndex: seriesIndex,
            axisX: axisX,
            axisY: axisY,
            chartRect: chartRect,
            group: seriesElement,
            element: bar
          }, positions));
        }.bind(this));
      }.bind(this));
      this.eventEmitter.emit('created', {
        bounds: valueAxis.bounds,
        chartRect: chartRect,
        axisX: axisX,
        axisY: axisY,
        svg: this.svg,
        options: options
      });
    }
    /**
     * This method creates a new bar chart and returns API object that you can use for later changes.
     *
     * @memberof Chartist.Bar
     * @param {String|Node} query A selector query string or directly a DOM element
     * @param {Object} data The data object that needs to consist of a labels and a series array
     * @param {Object} [options] The options object with options that override the default options. Check the examples for a detailed list.
     * @param {Array} [responsiveOptions] Specify an array of responsive option arrays which are a media query and options object pair => [[mediaQueryString, optionsObject],[more...]]
     * @return {Object} An object which exposes the API for the created chart
     *
     * @example
     * // Create a simple bar chart
     * var data = {
     *   labels: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri'],
     *   series: [
     *     [5, 2, 4, 2, 0]
     *   ]
     * };
     *
     * // In the global name space Chartist we call the Bar function to initialize a bar chart. As a first parameter we pass in a selector where we would like to get our chart created and as a second parameter we pass our data object.
     * new Chartist.Bar('.ct-chart', data);
     *
     * @example
     * // This example creates a bipolar grouped bar chart where the boundaries are limitted to -10 and 10
     * new Chartist.Bar('.ct-chart', {
     *   labels: [1, 2, 3, 4, 5, 6, 7],
     *   series: [
     *     [1, 3, 2, -5, -3, 1, -6],
     *     [-5, -2, -4, -1, 2, -3, 1]
     *   ]
     * }, {
     *   seriesBarDistance: 12,
     *   low: -10,
     *   high: 10
     * });
     *
     */


    function Bar(query, data, options, responsiveOptions) {
      Chartist.Bar.super.constructor.call(this, query, data, defaultOptions, Chartist.extend({}, defaultOptions, options), responsiveOptions);
    } // Creating bar chart type in Chartist namespace


    Chartist.Bar = Chartist.Base.extend({
      constructor: Bar,
      createChart: createChart
    });
  })(this || global, Chartist);

  ;
  /**
  * The pie chart module of Chartist that can be used to draw pie, donut or gauge charts
  *
  * @module Chartist.Pie
  */

  /* global Chartist */

  (function (globalRoot, Chartist) {
    'use strict';

    var window = globalRoot.window;
    var document = globalRoot.document;
    /**
     * Default options in line charts. Expand the code view to see a detailed list of options with comments.
     *
     * @memberof Chartist.Pie
     */

    var defaultOptions = {
      // Specify a fixed width for the chart as a string (i.e. '100px' or '50%')
      width: undefined,
      // Specify a fixed height for the chart as a string (i.e. '100px' or '50%')
      height: undefined,
      // Padding of the chart drawing area to the container element and labels as a number or padding object {top: 5, right: 5, bottom: 5, left: 5}
      chartPadding: 5,
      // Override the class names that are used to generate the SVG structure of the chart
      classNames: {
        chartPie: 'ct-chart-pie',
        chartDonut: 'ct-chart-donut',
        series: 'ct-series',
        slicePie: 'ct-slice-pie',
        sliceDonut: 'ct-slice-donut',
        sliceDonutSolid: 'ct-slice-donut-solid',
        label: 'ct-label'
      },
      // The start angle of the pie chart in degrees where 0 points north. A higher value offsets the start angle clockwise.
      startAngle: 0,
      // An optional total you can specify. By specifying a total value, the sum of the values in the series must be this total in order to draw a full pie. You can use this parameter to draw only parts of a pie or gauge charts.
      total: undefined,
      // If specified the donut CSS classes will be used and strokes will be drawn instead of pie slices.
      donut: false,
      // If specified the donut segments will be drawn as shapes instead of strokes.
      donutSolid: false,
      // Specify the donut stroke width, currently done in javascript for convenience. May move to CSS styles in the future.
      // This option can be set as number or string to specify a relative width (i.e. 100 or '30%').
      donutWidth: 60,
      // If a label should be shown or not
      showLabel: true,
      // Label position offset from the standard position which is half distance of the radius. This value can be either positive or negative. Positive values will position the label away from the center.
      labelOffset: 0,
      // This option can be set to 'inside', 'outside' or 'center'. Positioned with 'inside' the labels will be placed on half the distance of the radius to the border of the Pie by respecting the 'labelOffset'. The 'outside' option will place the labels at the border of the pie and 'center' will place the labels in the absolute center point of the chart. The 'center' option only makes sense in conjunction with the 'labelOffset' option.
      labelPosition: 'inside',
      // An interpolation function for the label value
      labelInterpolationFnc: Chartist.noop,
      // Label direction can be 'neutral', 'explode' or 'implode'. The labels anchor will be positioned based on those settings as well as the fact if the labels are on the right or left side of the center of the chart. Usually explode is useful when labels are positioned far away from the center.
      labelDirection: 'neutral',
      // If true the whole data is reversed including labels, the series order as well as the whole series data arrays.
      reverseData: false,
      // If true empty values will be ignored to avoid drawing unncessary slices and labels
      ignoreEmptyValues: false
    };
    /**
     * Determines SVG anchor position based on direction and center parameter
     *
     * @param center
     * @param label
     * @param direction
     * @return {string}
     */

    function determineAnchorPosition(center, label, direction) {
      var toTheRight = label.x > center.x;

      if (toTheRight && direction === 'explode' || !toTheRight && direction === 'implode') {
        return 'start';
      } else if (toTheRight && direction === 'implode' || !toTheRight && direction === 'explode') {
        return 'end';
      } else {
        return 'middle';
      }
    }
    /**
     * Creates the pie chart
     *
     * @param options
     */


    function createChart(options) {
      var data = Chartist.normalizeData(this.data);
      var seriesGroups = [],
          labelsGroup,
          chartRect,
          radius,
          labelRadius,
          totalDataSum,
          startAngle = options.startAngle; // Create SVG.js draw

      this.svg = Chartist.createSvg(this.container, options.width, options.height, options.donut ? options.classNames.chartDonut : options.classNames.chartPie); // Calculate charting rect

      chartRect = Chartist.createChartRect(this.svg, options, defaultOptions.padding); // Get biggest circle radius possible within chartRect

      radius = Math.min(chartRect.width() / 2, chartRect.height() / 2); // Calculate total of all series to get reference value or use total reference from optional options

      totalDataSum = options.total || data.normalized.series.reduce(function (previousValue, currentValue) {
        return previousValue + currentValue;
      }, 0);
      var donutWidth = Chartist.quantity(options.donutWidth);

      if (donutWidth.unit === '%') {
        donutWidth.value *= radius / 100;
      } // If this is a donut chart we need to adjust our radius to enable strokes to be drawn inside
      // Unfortunately this is not possible with the current SVG Spec
      // See this proposal for more details: http://lists.w3.org/Archives/Public/www-svg/2003Oct/0000.html


      radius -= options.donut && !options.donutSolid ? donutWidth.value / 2 : 0; // If labelPosition is set to `outside` or a donut chart is drawn then the label position is at the radius,
      // if regular pie chart it's half of the radius

      if (options.labelPosition === 'outside' || options.donut && !options.donutSolid) {
        labelRadius = radius;
      } else if (options.labelPosition === 'center') {
        // If labelPosition is center we start with 0 and will later wait for the labelOffset
        labelRadius = 0;
      } else if (options.donutSolid) {
        labelRadius = radius - donutWidth.value / 2;
      } else {
        // Default option is 'inside' where we use half the radius so the label will be placed in the center of the pie
        // slice
        labelRadius = radius / 2;
      } // Add the offset to the labelRadius where a negative offset means closed to the center of the chart


      labelRadius += options.labelOffset; // Calculate end angle based on total sum and current data value and offset with padding

      var center = {
        x: chartRect.x1 + chartRect.width() / 2,
        y: chartRect.y2 + chartRect.height() / 2
      }; // Check if there is only one non-zero value in the series array.

      var hasSingleValInSeries = data.raw.series.filter(function (val) {
        return val.hasOwnProperty('value') ? val.value !== 0 : val !== 0;
      }).length === 1; // Creating the series groups

      data.raw.series.forEach(function (series, index) {
        seriesGroups[index] = this.svg.elem('g', null, null);
      }.bind(this)); //if we need to show labels we create the label group now

      if (options.showLabel) {
        labelsGroup = this.svg.elem('g', null, null);
      } // Draw the series
      // initialize series groups


      data.raw.series.forEach(function (series, index) {
        // If current value is zero and we are ignoring empty values then skip to next value
        if (data.normalized.series[index] === 0 && options.ignoreEmptyValues) return; // If the series is an object and contains a name or meta data we add a custom attribute

        seriesGroups[index].attr({
          'ct:series-name': series.name
        }); // Use series class from series data or if not set generate one

        seriesGroups[index].addClass([options.classNames.series, series.className || options.classNames.series + '-' + Chartist.alphaNumerate(index)].join(' ')); // If the whole dataset is 0 endAngle should be zero. Can't divide by 0.

        var endAngle = totalDataSum > 0 ? startAngle + data.normalized.series[index] / totalDataSum * 360 : 0; // Use slight offset so there are no transparent hairline issues

        var overlappigStartAngle = Math.max(0, startAngle - (index === 0 || hasSingleValInSeries ? 0 : 0.2)); // If we need to draw the arc for all 360 degrees we need to add a hack where we close the circle
        // with Z and use 359.99 degrees

        if (endAngle - overlappigStartAngle >= 359.99) {
          endAngle = overlappigStartAngle + 359.99;
        }

        var start = Chartist.polarToCartesian(center.x, center.y, radius, overlappigStartAngle),
            end = Chartist.polarToCartesian(center.x, center.y, radius, endAngle);
        var innerStart, innerEnd, donutSolidRadius; // Create a new path element for the pie chart. If this isn't a donut chart we should close the path for a correct stroke

        var path = new Chartist.Svg.Path(!options.donut || options.donutSolid).move(end.x, end.y).arc(radius, radius, 0, endAngle - startAngle > 180, 0, start.x, start.y); // If regular pie chart (no donut) we add a line to the center of the circle for completing the pie

        if (!options.donut) {
          path.line(center.x, center.y);
        } else if (options.donutSolid) {
          donutSolidRadius = radius - donutWidth.value;
          innerStart = Chartist.polarToCartesian(center.x, center.y, donutSolidRadius, startAngle - (index === 0 || hasSingleValInSeries ? 0 : 0.2));
          innerEnd = Chartist.polarToCartesian(center.x, center.y, donutSolidRadius, endAngle);
          path.line(innerStart.x, innerStart.y);
          path.arc(donutSolidRadius, donutSolidRadius, 0, endAngle - startAngle > 180, 1, innerEnd.x, innerEnd.y);
        } // Create the SVG path
        // If this is a donut chart we add the donut class, otherwise just a regular slice


        var pathClassName = options.classNames.slicePie;

        if (options.donut) {
          pathClassName = options.classNames.sliceDonut;

          if (options.donutSolid) {
            pathClassName = options.classNames.sliceDonutSolid;
          }
        }

        var pathElement = seriesGroups[index].elem('path', {
          d: path.stringify()
        }, pathClassName); // Adding the pie series value to the path

        pathElement.attr({
          'ct:value': data.normalized.series[index],
          'ct:meta': Chartist.serialize(series.meta)
        }); // If this is a donut, we add the stroke-width as style attribute

        if (options.donut && !options.donutSolid) {
          pathElement._node.style.strokeWidth = donutWidth.value + 'px';
        } // Fire off draw event


        this.eventEmitter.emit('draw', {
          type: 'slice',
          value: data.normalized.series[index],
          totalDataSum: totalDataSum,
          index: index,
          meta: series.meta,
          series: series,
          group: seriesGroups[index],
          element: pathElement,
          path: path.clone(),
          center: center,
          radius: radius,
          startAngle: startAngle,
          endAngle: endAngle
        }); // If we need to show labels we need to add the label for this slice now

        if (options.showLabel) {
          var labelPosition;

          if (data.raw.series.length === 1) {
            // If we have only 1 series, we can position the label in the center of the pie
            labelPosition = {
              x: center.x,
              y: center.y
            };
          } else {
            // Position at the labelRadius distance from center and between start and end angle
            labelPosition = Chartist.polarToCartesian(center.x, center.y, labelRadius, startAngle + (endAngle - startAngle) / 2);
          }

          var rawValue;

          if (data.normalized.labels && !Chartist.isFalseyButZero(data.normalized.labels[index])) {
            rawValue = data.normalized.labels[index];
          } else {
            rawValue = data.normalized.series[index];
          }

          var interpolatedValue = options.labelInterpolationFnc(rawValue, index);

          if (interpolatedValue || interpolatedValue === 0) {
            var labelElement = labelsGroup.elem('text', {
              dx: labelPosition.x,
              dy: labelPosition.y,
              'text-anchor': determineAnchorPosition(center, labelPosition, options.labelDirection)
            }, options.classNames.label).text('' + interpolatedValue); // Fire off draw event

            this.eventEmitter.emit('draw', {
              type: 'label',
              index: index,
              group: labelsGroup,
              element: labelElement,
              text: '' + interpolatedValue,
              x: labelPosition.x,
              y: labelPosition.y
            });
          }
        } // Set next startAngle to current endAngle.
        // (except for last slice)


        startAngle = endAngle;
      }.bind(this));
      this.eventEmitter.emit('created', {
        chartRect: chartRect,
        svg: this.svg,
        options: options
      });
    }
    /**
     * This method creates a new pie chart and returns an object that can be used to redraw the chart.
     *
     * @memberof Chartist.Pie
     * @param {String|Node} query A selector query string or directly a DOM element
     * @param {Object} data The data object in the pie chart needs to have a series property with a one dimensional data array. The values will be normalized against each other and don't necessarily need to be in percentage. The series property can also be an array of value objects that contain a value property and a className property to override the CSS class name for the series group.
     * @param {Object} [options] The options object with options that override the default options. Check the examples for a detailed list.
     * @param {Array} [responsiveOptions] Specify an array of responsive option arrays which are a media query and options object pair => [[mediaQueryString, optionsObject],[more...]]
     * @return {Object} An object with a version and an update method to manually redraw the chart
     *
     * @example
     * // Simple pie chart example with four series
     * new Chartist.Pie('.ct-chart', {
     *   series: [10, 2, 4, 3]
     * });
     *
     * @example
     * // Drawing a donut chart
     * new Chartist.Pie('.ct-chart', {
     *   series: [10, 2, 4, 3]
     * }, {
     *   donut: true
     * });
     *
     * @example
     * // Using donut, startAngle and total to draw a gauge chart
     * new Chartist.Pie('.ct-chart', {
     *   series: [20, 10, 30, 40]
     * }, {
     *   donut: true,
     *   donutWidth: 20,
     *   startAngle: 270,
     *   total: 200
     * });
     *
     * @example
     * // Drawing a pie chart with padding and labels that are outside the pie
     * new Chartist.Pie('.ct-chart', {
     *   series: [20, 10, 30, 40]
     * }, {
     *   chartPadding: 30,
     *   labelOffset: 50,
     *   labelDirection: 'explode'
     * });
     *
     * @example
     * // Overriding the class names for individual series as well as a name and meta data.
     * // The name will be written as ct:series-name attribute and the meta data will be serialized and written
     * // to a ct:meta attribute.
     * new Chartist.Pie('.ct-chart', {
     *   series: [{
     *     value: 20,
     *     name: 'Series 1',
     *     className: 'my-custom-class-one',
     *     meta: 'Meta One'
     *   }, {
     *     value: 10,
     *     name: 'Series 2',
     *     className: 'my-custom-class-two',
     *     meta: 'Meta Two'
     *   }, {
     *     value: 70,
     *     name: 'Series 3',
     *     className: 'my-custom-class-three',
     *     meta: 'Meta Three'
     *   }]
     * });
     */


    function Pie(query, data, options, responsiveOptions) {
      Chartist.Pie.super.constructor.call(this, query, data, defaultOptions, Chartist.extend({}, defaultOptions, options), responsiveOptions);
    } // Creating pie chart type in Chartist namespace


    Chartist.Pie = Chartist.Base.extend({
      constructor: Pie,
      createChart: createChart,
      determineAnchorPosition: determineAnchorPosition
    });
  })(this || global, Chartist);

  return Chartist;
});

/***/ }),

/***/ "un8i":
/*!****************************************************!*\
  !*** ./src/app/typography/typography.component.ts ***!
  \****************************************************/
/*! exports provided: TypographyComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TypographyComponent", function() { return TypographyComponent; });
/* harmony import */ var _raw_loader_typography_component_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! raw-loader!./typography.component.html */ "O5tJ");
/* harmony import */ var _typography_component_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./typography.component.css */ "Wwls");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "fXoL");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var TypographyComponent = /** @class */ (function () {
    function TypographyComponent() {
    }
    TypographyComponent.prototype.ngOnInit = function () {
    };
    TypographyComponent.ctorParameters = function () { return []; };
    TypographyComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Component"])({
            selector: 'app-typography',
            template: _raw_loader_typography_component_html__WEBPACK_IMPORTED_MODULE_0__["default"],
            styles: [_typography_component_css__WEBPACK_IMPORTED_MODULE_1__["default"]]
        }),
        __metadata("design:paramtypes", [])
    ], TypographyComponent);
    return TypographyComponent;
}());



/***/ }),

/***/ "urC5":
/*!****************************************!*\
  !*** ./src/app/maps/maps.component.ts ***!
  \****************************************/
/*! exports provided: MapsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MapsComponent", function() { return MapsComponent; });
/* harmony import */ var _raw_loader_maps_component_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! raw-loader!./maps.component.html */ "3Puv");
/* harmony import */ var _maps_component_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./maps.component.css */ "YpYv");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "fXoL");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var MapsComponent = /** @class */ (function () {
    function MapsComponent() {
    }
    MapsComponent.prototype.ngOnInit = function () {
    };
    MapsComponent.ctorParameters = function () { return []; };
    MapsComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Component"])({
            selector: 'app-maps',
            template: _raw_loader_maps_component_html__WEBPACK_IMPORTED_MODULE_0__["default"],
            styles: [_maps_component_css__WEBPACK_IMPORTED_MODULE_1__["default"]]
        }),
        __metadata("design:paramtypes", [])
    ], MapsComponent);
    return MapsComponent;
}());



/***/ })

}]);
//# sourceMappingURL=layouts-admin-layout-admin-layout-module.js.map