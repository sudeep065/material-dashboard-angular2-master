(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! /home/runner/work/learn-angular/learn-angular/src/main.ts */"zUnb");


/***/ }),

/***/ "2DHQ":
/*!**********************************************************!*\
  !*** ./src/app/components/sidebar/sidebar.component.css ***!
  \**********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzaWRlYmFyLmNvbXBvbmVudC5jc3MifQ== */");

/***/ }),

/***/ "2RNu":
/*!************************************************************************************!*\
  !*** ./src/app/ng-animate/components/animate-buttons/animate-buttons.component.ts ***!
  \************************************************************************************/
/*! exports provided: AnimateButtonsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AnimateButtonsComponent", function() { return AnimateButtonsComponent; });
/* harmony import */ var _raw_loader_animate_buttons_component_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! raw-loader!./animate-buttons.component.html */ "5IyU");
/* harmony import */ var _animate_buttons_component_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./animate-buttons.component.css */ "k+Q/");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_animations__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/animations */ "R0Ic");
/* harmony import */ var ng_animate__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ng-animate */ "5Rqa");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var AnimateButtonsComponent = /** @class */ (function () {
    // end of global declarations
    function AnimateButtonsComponent() {
        // global declarations
        this.bounce = false;
        this.flash = false;
        this.pulse = false;
        this.rubberBand = false;
        this.shake = false;
        this.swing = false;
        this.tada = false;
        this.wobble = false;
        this.jello = false;
        this.attentionSeekers = [
            'bounce',
            'flash',
            'pulse',
            'rubberBand',
            'shake',
            'swing',
            'tada',
            'wobble',
            'jello'
        ];
        // ==================
        this.bounceIn = false;
        this.bounceInDown = false;
        this.bounceInLeft = false;
        this.bounceOut = false;
        this.bounceOutUp = false;
        this.bounceOutRight = false;
        this.bouncing = [
            'bounceIn',
            'bounceInDown',
            'bounceInLeft',
            'bounceOut',
            'bounceOutUp',
            'bounceOutRight'
        ];
        // ==================
        this.fadeIn = false;
        this.fadeInDown = false;
        this.fadeInLeft = false;
        this.fadeOut = false;
        this.fadeOutUp = false;
        this.fadeOutRight = false;
        // ==================
        this.fading = [
            'fadeIn',
            'fadeInDown',
            'fadeInLeft',
            'fadeOut',
            'fadeOutUp',
            'fadeOutRight'
        ];
        // ==================
        this.slideInDown = false;
        this.slideInLeft = false;
        this.slideOutUp = false;
        this.slideOutRight = false;
        this.sliding = ['slideInDown', 'slideInLeft', 'slideOutUp', 'slideOutRight'];
        // ==================
        this.flip = false;
        this.flipInX = false;
        this.flipInY = false;
        this.flipOutX = false;
        this.flipOutY = false;
        this.flippers = ['flip', 'flipInX', 'flipInY', 'flipOutX', 'flipOutY'];
        // ==================
        this.lightSpeedIn = false;
        this.lightSpeedOut = false;
        this.lightSpeed = ['lightSpeedIn', 'lightSpeedOut'];
        // ==================
        this.rotateIn = false;
        this.rotateInDownLeft = false;
        this.rotateInUpRight = false;
        this.rotateOut = false;
        this.rotateOutUpLeft = false;
        this.rotateOutDownRight = false;
        this.rotate = [
            'rotateIn',
            'rotateInDownLeft',
            'rotateInUpRight',
            'rotateOut',
            'rotateOutUpLeft',
            'rotateOutDownRight'
        ];
        // ==================
        this.hinge = false;
        this.jackInTheBox = false;
        this.rollIn = false;
        this.rollOut = false;
        this.specials = ['hinge', 'jackInTheBox', 'rollIn', 'rollOut'];
        // ==================
        this.zoomIn = false;
        this.zoomInDown = false;
        this.zoomInLeft = false;
        this.zoomOut = false;
        this.zoomOutUp = false;
        this.zoomOutRight = false;
        this.zooming = [
            'zoomIn',
            'zoomInDown',
            'zoomInLeft',
            'zoomOut',
            'zoomOutUp',
            'zoomOutRight'
        ];
    }
    AnimateButtonsComponent.prototype.animate = function (name) {
        this[name] = !this[name];
    };
    AnimateButtonsComponent.ctorParameters = function () { return []; };
    AnimateButtonsComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Component"])({
            selector: 'app-animate-buttons',
            template: _raw_loader_animate_buttons_component_html__WEBPACK_IMPORTED_MODULE_0__["default"],
            encapsulation: _angular_core__WEBPACK_IMPORTED_MODULE_2__["ViewEncapsulation"].None,
            animations: [
                Object(_angular_animations__WEBPACK_IMPORTED_MODULE_3__["trigger"])('bounce', [Object(_angular_animations__WEBPACK_IMPORTED_MODULE_3__["transition"])('* => *', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_3__["useAnimation"])(ng_animate__WEBPACK_IMPORTED_MODULE_4__["bounce"]))]),
                Object(_angular_animations__WEBPACK_IMPORTED_MODULE_3__["trigger"])('flash', [Object(_angular_animations__WEBPACK_IMPORTED_MODULE_3__["transition"])('* => *', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_3__["useAnimation"])(ng_animate__WEBPACK_IMPORTED_MODULE_4__["flash"]))]),
                Object(_angular_animations__WEBPACK_IMPORTED_MODULE_3__["trigger"])('pulse', [Object(_angular_animations__WEBPACK_IMPORTED_MODULE_3__["transition"])('* => *', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_3__["useAnimation"])(ng_animate__WEBPACK_IMPORTED_MODULE_4__["pulse"]))]),
                Object(_angular_animations__WEBPACK_IMPORTED_MODULE_3__["trigger"])('rubberBand', [Object(_angular_animations__WEBPACK_IMPORTED_MODULE_3__["transition"])('* => *', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_3__["useAnimation"])(ng_animate__WEBPACK_IMPORTED_MODULE_4__["rubberBand"]))]),
                Object(_angular_animations__WEBPACK_IMPORTED_MODULE_3__["trigger"])('shake', [Object(_angular_animations__WEBPACK_IMPORTED_MODULE_3__["transition"])('* => *', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_3__["useAnimation"])(ng_animate__WEBPACK_IMPORTED_MODULE_4__["shake"]))]),
                Object(_angular_animations__WEBPACK_IMPORTED_MODULE_3__["trigger"])('swing', [Object(_angular_animations__WEBPACK_IMPORTED_MODULE_3__["transition"])('* => *', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_3__["useAnimation"])(ng_animate__WEBPACK_IMPORTED_MODULE_4__["swing"]))]),
                Object(_angular_animations__WEBPACK_IMPORTED_MODULE_3__["trigger"])('tada', [Object(_angular_animations__WEBPACK_IMPORTED_MODULE_3__["transition"])('* => *', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_3__["useAnimation"])(ng_animate__WEBPACK_IMPORTED_MODULE_4__["tada"]))]),
                Object(_angular_animations__WEBPACK_IMPORTED_MODULE_3__["trigger"])('wobble', [Object(_angular_animations__WEBPACK_IMPORTED_MODULE_3__["transition"])('* => *', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_3__["useAnimation"])(ng_animate__WEBPACK_IMPORTED_MODULE_4__["wobble"]))]),
                Object(_angular_animations__WEBPACK_IMPORTED_MODULE_3__["trigger"])('jello', [Object(_angular_animations__WEBPACK_IMPORTED_MODULE_3__["transition"])('* => *', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_3__["useAnimation"])(ng_animate__WEBPACK_IMPORTED_MODULE_4__["jello"]))]),
                Object(_angular_animations__WEBPACK_IMPORTED_MODULE_3__["trigger"])('bounceIn', [Object(_angular_animations__WEBPACK_IMPORTED_MODULE_3__["transition"])('* => *', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_3__["useAnimation"])(ng_animate__WEBPACK_IMPORTED_MODULE_4__["bounceIn"]))]),
                Object(_angular_animations__WEBPACK_IMPORTED_MODULE_3__["trigger"])('bounceInDown', [Object(_angular_animations__WEBPACK_IMPORTED_MODULE_3__["transition"])('* => *', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_3__["useAnimation"])(ng_animate__WEBPACK_IMPORTED_MODULE_4__["bounceInDown"]))]),
                Object(_angular_animations__WEBPACK_IMPORTED_MODULE_3__["trigger"])('bounceInLeft', [Object(_angular_animations__WEBPACK_IMPORTED_MODULE_3__["transition"])('* => *', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_3__["useAnimation"])(ng_animate__WEBPACK_IMPORTED_MODULE_4__["bounceInLeft"]))]),
                Object(_angular_animations__WEBPACK_IMPORTED_MODULE_3__["trigger"])('bounceOut', [Object(_angular_animations__WEBPACK_IMPORTED_MODULE_3__["transition"])('* => *', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_3__["useAnimation"])(ng_animate__WEBPACK_IMPORTED_MODULE_4__["bounceOut"]))]),
                Object(_angular_animations__WEBPACK_IMPORTED_MODULE_3__["trigger"])('bounceOutRight', [
                    Object(_angular_animations__WEBPACK_IMPORTED_MODULE_3__["transition"])('* => *', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_3__["useAnimation"])(ng_animate__WEBPACK_IMPORTED_MODULE_4__["bounceOutRight"]))
                ]),
                Object(_angular_animations__WEBPACK_IMPORTED_MODULE_3__["trigger"])('bounceOutUp', [Object(_angular_animations__WEBPACK_IMPORTED_MODULE_3__["transition"])('* => *', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_3__["useAnimation"])(ng_animate__WEBPACK_IMPORTED_MODULE_4__["bounceOutUp"]))]),
                Object(_angular_animations__WEBPACK_IMPORTED_MODULE_3__["trigger"])('fadeIn', [Object(_angular_animations__WEBPACK_IMPORTED_MODULE_3__["transition"])('* => *', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_3__["useAnimation"])(ng_animate__WEBPACK_IMPORTED_MODULE_4__["fadeIn"]))]),
                Object(_angular_animations__WEBPACK_IMPORTED_MODULE_3__["trigger"])('fadeInDown', [Object(_angular_animations__WEBPACK_IMPORTED_MODULE_3__["transition"])('* => *', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_3__["useAnimation"])(ng_animate__WEBPACK_IMPORTED_MODULE_4__["fadeInDown"]))]),
                Object(_angular_animations__WEBPACK_IMPORTED_MODULE_3__["trigger"])('fadeInLeft', [Object(_angular_animations__WEBPACK_IMPORTED_MODULE_3__["transition"])('* => *', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_3__["useAnimation"])(ng_animate__WEBPACK_IMPORTED_MODULE_4__["fadeInLeft"]))]),
                Object(_angular_animations__WEBPACK_IMPORTED_MODULE_3__["trigger"])('fadeOut', [Object(_angular_animations__WEBPACK_IMPORTED_MODULE_3__["transition"])('* => *', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_3__["useAnimation"])(ng_animate__WEBPACK_IMPORTED_MODULE_4__["fadeOut"]))]),
                Object(_angular_animations__WEBPACK_IMPORTED_MODULE_3__["trigger"])('fadeOutUp', [Object(_angular_animations__WEBPACK_IMPORTED_MODULE_3__["transition"])('* => *', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_3__["useAnimation"])(ng_animate__WEBPACK_IMPORTED_MODULE_4__["fadeOutUp"]))]),
                Object(_angular_animations__WEBPACK_IMPORTED_MODULE_3__["trigger"])('fadeOutRight', [Object(_angular_animations__WEBPACK_IMPORTED_MODULE_3__["transition"])('* => *', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_3__["useAnimation"])(ng_animate__WEBPACK_IMPORTED_MODULE_4__["fadeOutRight"]))]),
                Object(_angular_animations__WEBPACK_IMPORTED_MODULE_3__["trigger"])('slideInDown', [Object(_angular_animations__WEBPACK_IMPORTED_MODULE_3__["transition"])('* => *', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_3__["useAnimation"])(ng_animate__WEBPACK_IMPORTED_MODULE_4__["slideInDown"]))]),
                Object(_angular_animations__WEBPACK_IMPORTED_MODULE_3__["trigger"])('slideInLeft', [Object(_angular_animations__WEBPACK_IMPORTED_MODULE_3__["transition"])('* => *', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_3__["useAnimation"])(ng_animate__WEBPACK_IMPORTED_MODULE_4__["slideInLeft"]))]),
                Object(_angular_animations__WEBPACK_IMPORTED_MODULE_3__["trigger"])('slideOutUp', [Object(_angular_animations__WEBPACK_IMPORTED_MODULE_3__["transition"])('* => *', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_3__["useAnimation"])(ng_animate__WEBPACK_IMPORTED_MODULE_4__["slideOutUp"]))]),
                Object(_angular_animations__WEBPACK_IMPORTED_MODULE_3__["trigger"])('slideOutRight', [
                    Object(_angular_animations__WEBPACK_IMPORTED_MODULE_3__["transition"])('* => *', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_3__["useAnimation"])(ng_animate__WEBPACK_IMPORTED_MODULE_4__["slideOutRight"]))
                ]),
                Object(_angular_animations__WEBPACK_IMPORTED_MODULE_3__["trigger"])('flip', [Object(_angular_animations__WEBPACK_IMPORTED_MODULE_3__["transition"])('* => *', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_3__["useAnimation"])(ng_animate__WEBPACK_IMPORTED_MODULE_4__["flip"]))]),
                Object(_angular_animations__WEBPACK_IMPORTED_MODULE_3__["trigger"])('flipInX', [Object(_angular_animations__WEBPACK_IMPORTED_MODULE_3__["transition"])('* => *', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_3__["useAnimation"])(ng_animate__WEBPACK_IMPORTED_MODULE_4__["flipInX"]))]),
                Object(_angular_animations__WEBPACK_IMPORTED_MODULE_3__["trigger"])('flipInY', [Object(_angular_animations__WEBPACK_IMPORTED_MODULE_3__["transition"])('* => *', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_3__["useAnimation"])(ng_animate__WEBPACK_IMPORTED_MODULE_4__["flipInY"]))]),
                Object(_angular_animations__WEBPACK_IMPORTED_MODULE_3__["trigger"])('flipOutX', [Object(_angular_animations__WEBPACK_IMPORTED_MODULE_3__["transition"])('* => *', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_3__["useAnimation"])(ng_animate__WEBPACK_IMPORTED_MODULE_4__["flipOutX"]))]),
                Object(_angular_animations__WEBPACK_IMPORTED_MODULE_3__["trigger"])('flipOutY', [Object(_angular_animations__WEBPACK_IMPORTED_MODULE_3__["transition"])('* => *', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_3__["useAnimation"])(ng_animate__WEBPACK_IMPORTED_MODULE_4__["flipOutY"]))]),
                Object(_angular_animations__WEBPACK_IMPORTED_MODULE_3__["trigger"])('lightSpeedIn', [Object(_angular_animations__WEBPACK_IMPORTED_MODULE_3__["transition"])('* => *', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_3__["useAnimation"])(ng_animate__WEBPACK_IMPORTED_MODULE_4__["lightSpeedIn"]))]),
                Object(_angular_animations__WEBPACK_IMPORTED_MODULE_3__["trigger"])('lightSpeedOut', [
                    Object(_angular_animations__WEBPACK_IMPORTED_MODULE_3__["transition"])('* => *', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_3__["useAnimation"])(ng_animate__WEBPACK_IMPORTED_MODULE_4__["lightSpeedOut"]))
                ]),
                Object(_angular_animations__WEBPACK_IMPORTED_MODULE_3__["trigger"])('rotateIn', [Object(_angular_animations__WEBPACK_IMPORTED_MODULE_3__["transition"])('* => *', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_3__["useAnimation"])(ng_animate__WEBPACK_IMPORTED_MODULE_4__["rotateIn"]))]),
                Object(_angular_animations__WEBPACK_IMPORTED_MODULE_3__["trigger"])('rotateInDownLeft', [
                    Object(_angular_animations__WEBPACK_IMPORTED_MODULE_3__["transition"])('* => *', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_3__["useAnimation"])(ng_animate__WEBPACK_IMPORTED_MODULE_4__["rotateInDownLeft"]))
                ]),
                Object(_angular_animations__WEBPACK_IMPORTED_MODULE_3__["trigger"])('rotateInUpRight', [
                    Object(_angular_animations__WEBPACK_IMPORTED_MODULE_3__["transition"])('* => *', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_3__["useAnimation"])(ng_animate__WEBPACK_IMPORTED_MODULE_4__["rotateInUpRight"]))
                ]),
                Object(_angular_animations__WEBPACK_IMPORTED_MODULE_3__["trigger"])('rotateOut', [Object(_angular_animations__WEBPACK_IMPORTED_MODULE_3__["transition"])('* => *', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_3__["useAnimation"])(ng_animate__WEBPACK_IMPORTED_MODULE_4__["rotateOut"]))]),
                Object(_angular_animations__WEBPACK_IMPORTED_MODULE_3__["trigger"])('rotateOutUpLeft', [
                    Object(_angular_animations__WEBPACK_IMPORTED_MODULE_3__["transition"])('* => *', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_3__["useAnimation"])(ng_animate__WEBPACK_IMPORTED_MODULE_4__["rotateOutUpLeft"]))
                ]),
                Object(_angular_animations__WEBPACK_IMPORTED_MODULE_3__["trigger"])('rotateOutDownRight', [
                    Object(_angular_animations__WEBPACK_IMPORTED_MODULE_3__["transition"])('* => *', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_3__["useAnimation"])(ng_animate__WEBPACK_IMPORTED_MODULE_4__["rotateOutDownRight"]))
                ]),
                Object(_angular_animations__WEBPACK_IMPORTED_MODULE_3__["trigger"])('hinge', [Object(_angular_animations__WEBPACK_IMPORTED_MODULE_3__["transition"])('* => *', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_3__["useAnimation"])(ng_animate__WEBPACK_IMPORTED_MODULE_4__["hinge"]))]),
                Object(_angular_animations__WEBPACK_IMPORTED_MODULE_3__["trigger"])('jackInTheBox', [Object(_angular_animations__WEBPACK_IMPORTED_MODULE_3__["transition"])('* => *', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_3__["useAnimation"])(ng_animate__WEBPACK_IMPORTED_MODULE_4__["jackInTheBox"]))]),
                Object(_angular_animations__WEBPACK_IMPORTED_MODULE_3__["trigger"])('rollIn', [Object(_angular_animations__WEBPACK_IMPORTED_MODULE_3__["transition"])('* => *', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_3__["useAnimation"])(ng_animate__WEBPACK_IMPORTED_MODULE_4__["rollIn"]))]),
                Object(_angular_animations__WEBPACK_IMPORTED_MODULE_3__["trigger"])('rollOut', [Object(_angular_animations__WEBPACK_IMPORTED_MODULE_3__["transition"])('* => *', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_3__["useAnimation"])(ng_animate__WEBPACK_IMPORTED_MODULE_4__["rollOut"]))]),
                Object(_angular_animations__WEBPACK_IMPORTED_MODULE_3__["trigger"])('zoomIn', [Object(_angular_animations__WEBPACK_IMPORTED_MODULE_3__["transition"])('* => *', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_3__["useAnimation"])(ng_animate__WEBPACK_IMPORTED_MODULE_4__["zoomIn"]))]),
                Object(_angular_animations__WEBPACK_IMPORTED_MODULE_3__["trigger"])('zoomInLeft', [Object(_angular_animations__WEBPACK_IMPORTED_MODULE_3__["transition"])('* => *', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_3__["useAnimation"])(ng_animate__WEBPACK_IMPORTED_MODULE_4__["zoomInLeft"]))]),
                Object(_angular_animations__WEBPACK_IMPORTED_MODULE_3__["trigger"])('zoomInDown', [Object(_angular_animations__WEBPACK_IMPORTED_MODULE_3__["transition"])('* => *', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_3__["useAnimation"])(ng_animate__WEBPACK_IMPORTED_MODULE_4__["zoomInDown"]))]),
                Object(_angular_animations__WEBPACK_IMPORTED_MODULE_3__["trigger"])('zoomOut', [Object(_angular_animations__WEBPACK_IMPORTED_MODULE_3__["transition"])('* => *', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_3__["useAnimation"])(ng_animate__WEBPACK_IMPORTED_MODULE_4__["zoomOut"]))]),
                Object(_angular_animations__WEBPACK_IMPORTED_MODULE_3__["trigger"])('zoomOutUp', [Object(_angular_animations__WEBPACK_IMPORTED_MODULE_3__["transition"])('* => *', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_3__["useAnimation"])(ng_animate__WEBPACK_IMPORTED_MODULE_4__["zoomOutUp"]))]),
                Object(_angular_animations__WEBPACK_IMPORTED_MODULE_3__["trigger"])('zoomOutRight', [Object(_angular_animations__WEBPACK_IMPORTED_MODULE_3__["transition"])('* => *', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_3__["useAnimation"])(ng_animate__WEBPACK_IMPORTED_MODULE_4__["zoomOutRight"]))])
            ],
            styles: [_animate_buttons_component_css__WEBPACK_IMPORTED_MODULE_1__["default"]]
        }),
        __metadata("design:paramtypes", [])
    ], AnimateButtonsComponent);
    return AnimateButtonsComponent;
}());



/***/ }),

/***/ "5IyU":
/*!****************************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/ng-animate/components/animate-buttons/animate-buttons.component.html ***!
  \****************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"main-content\">\n    <div class=\"container-fluid\">\n        <div class=\"card\">\n            <div class=\"card-header card-header-danger\">\n                <h3 class=\"card-title\">Button Animations</h3>\n                <p class=\"card-category\">Handcrafted by <a target=\"_blank\"\n                        href=\"https://www.npmjs.com/package/ng-animate\">ng-animate</a>. Please checkout the\n                    <a href=\"https://github.com/sudeep065/ng-animate-buttons/\" target=\"_blank\">code at GitHub.</a>\n                </p>\n            </div>\n            <div class=\"card-body\">\n                <div class=\"container\">\n                    <div class=\"content\">\n                        <div class=\"animations\">\n                            <div [@bounce]=\"bounce\" [@flash]=\"flash\" [@pulse]=\"pulse\" [@rubberBand]=\"rubberBand\"\n                                [@shake]=\"shake\" [@swing]=\"swing\" [@tada]=\"tada\" [@wobble]=\"wobble\" [@jello]=\"jello\"\n                                class=\"box\"></div>\n                            <h2>Attention Seekers</h2>\n                            <p>\n                                <button *ngFor=\"let animation of attentionSeekers\" (click)=\"animate(animation)\"\n                                    class=\"btn\" type=\"button\">{{ animation }}</button>\n                            </p>\n\n                            <div [@bounceIn]=\"bounceIn\" [@bounceInDown]=\"bounceInDown\" [@bounceInLeft]=\"bounceInLeft\"\n                                [@bounceOut]=\"{ value: bounceOut, params: { scale: 1.25 } }\"\n                                [@bounceOutUp]=\"bounceOutUp\" [@bounceOutRight]=\"bounceOutRight\" class=\"box\"></div>\n                            <h2>Bouncing <small>(not all directions are shown in the demo)</small></h2>\n                            <p>\n                                <button *ngFor=\"let animation of bouncing\" (click)=\"animate(animation)\" class=\"btn\"\n                                    type=\"button\">{{\n                                    animation }}</button>\n                            </p>\n\n                            <div [@fadeIn]=\"{ value: fadeIn, params: { timing: 2 } }\" [@fadeInDown]=\"fadeInDown\"\n                                [@fadeInLeft]=\"fadeInLeft\" [@fadeOut]=\"fadeOut\" [@fadeOutUp]=\"fadeOutUp\"\n                                [@fadeOutRight]=\"fadeOutRight\" class=\"box\"></div>\n                            <h2>Fading <small>(not all directions are shown in the demo)</small></h2>\n                            <p>\n                                <button *ngFor=\"let animation of fading\" (click)=\"animate(animation)\" class=\"btn\"\n                                    type=\"button\">{{\n                                    animation }}</button>\n                            </p>\n\n                            <div [@slideInDown]=\"slideInDown\" [@slideInLeft]=\"slideInLeft\" [@slideOutUp]=\"slideOutUp\"\n                                [@slideOutRight]=\"slideOutRight\" class=\"box\"></div>\n                            <h2>Sliding <small>(not all directions are shown in the demo)</small></h2>\n                            <p>\n                                <button *ngFor=\"let animation of sliding\" (click)=\"animate(animation)\" class=\"btn\"\n                                    type=\"button\">{{\n                                    animation }}</button>\n                            </p>\n\n                            <div [@flip]=\"flip\" [@flipInX]=\"flipInX\" [@flipInY]=\"flipInY\" [@flipOutX]=\"flipOutX\"\n                                [@flipOutY]=\"flipOutY\" class=\"box\"></div>\n                            <h2>Flippers</h2>\n                            <p>\n                                <button *ngFor=\"let animation of flippers\" (click)=\"animate(animation)\" class=\"btn\"\n                                    type=\"button\">{{\n                                    animation }}</button>\n                            </p>\n\n                            <div [@lightSpeedIn]=\"{ value: lightSpeedIn, params: { timing: 0.4 } }\"\n                                [@lightSpeedOut]=\"lightSpeedOut\" class=\"box\"></div>\n                            <h2>LightSpeed</h2>\n                            <p>\n                                <button *ngFor=\"let animation of lightSpeed\" (click)=\"animate(animation)\" class=\"btn\"\n                                    type=\"button\">{{\n                                    animation }}</button>\n                            </p>\n\n                            <div [@rotateIn]=\"rotateIn\" [@rotateInDownLeft]=\"rotateInDownLeft\"\n                                [@rotateInUpRight]=\"rotateInUpRight\" [@rotateOut]=\"rotateOut\"\n                                [@rotateOutUpLeft]=\"rotateOutUpLeft\" [@rotateOutDownRight]=\"rotateOutDownRight\"\n                                class=\"box\"></div>\n                            <h2>Rotate <small>(not all directions are shown in the demo)</small></h2>\n                            <p>\n                                <button *ngFor=\"let animation of rotate\" (click)=\"animate(animation)\" class=\"btn\"\n                                    type=\"button\">{{\n                                    animation }}</button>\n                            </p>\n\n                            <div [@hinge]=\"hinge\" [@jackInTheBox]=\"jackInTheBox\" [@rollIn]=\"rollIn\" [@rollOut]=\"rollOut\"\n                                class=\"box\">\n                            </div>\n                            <h2>Specials</h2>\n                            <p>\n                                <button *ngFor=\"let animation of specials\" (click)=\"animate(animation)\" class=\"btn\"\n                                    type=\"button\">{{\n                                    animation }}</button>\n                            </p>\n\n                            <div [@zoomIn]=\"zoomIn\" [@zoomInLeft]=\"zoomInLeft\" [@zoomInDown]=\"zoomInDown\"\n                                [@zoomOut]=\"zoomOut\" [@zoomOutUp]=\"zoomOutUp\" [@zoomOutRight]=\"zoomOutRight\"\n                                class=\"box\"></div>\n                            <h2>Zooming <small>(not all directions are shown in the demo)</small></h2>\n                            <p>\n                                <button *ngFor=\"let animation of zooming\" (click)=\"animate(animation)\" class=\"btn\"\n                                    type=\"button\">{{\n                                    animation }}</button>\n                            </p>\n                        </div>\n                    </div>\n                </div>\n            </div>\n        </div>\n    </div>\n</div>");

/***/ }),

/***/ "A3xY":
/*!***********************************!*\
  !*** ./src/app/app.component.css ***!
  \***********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJhcHAuY29tcG9uZW50LmNzcyJ9 */");

/***/ }),

/***/ "AK6u":
/*!********************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/layouts/admin-layout/admin-layout.component.html ***!
  \********************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"wrapper\">\n    <div class=\"sidebar\" data-color=\"danger\" data-background-color=\"white\" data-image=\"./assets/img/sidebar-1.jpg\">\n        <app-sidebar></app-sidebar>\n        <div class=\"sidebar-background\" style=\"background-image: url(./assets/img/sidebar-4.jpg)\"></div>\n    </div>\n    <div class=\"main-panel\">\n        <app-navbar></app-navbar>\n        <router-outlet></router-outlet>\n        <div *ngIf=\"isMaps('maps')\">\n            <app-footer></app-footer>\n        </div>\n    </div>\n    <div class=\"fixed-plugin\" [hidden]=\"isInterviewRoute()\">\n        <div class=\"dropdown\">\n            <a href=\"#\" data-toggle=\"dropdown\" aria-expanded=\"true\">\n                <i class=\"fa fa-cog fa-2x\"> </i>\n            </a>\n            <ul class=\"dropdown-menu\">\n                <li class=\"header-title\"> Sidebar Filters <span class=\"small\">(click icon to close)</span></li>\n                \n                <li class=\"adjustments-line\">\n                    <a href=\"javascript:void(0)\" class=\"switch-trigger active-color\">\n                        <div class=\"ml-auto mr-auto\">\n                            <span class=\"badge filter badge-purple\" data-color=\"purple\"></span>\n                            <span class=\"badge filter badge-azure\" data-color=\"azure\"></span>\n                            <span class=\"badge filter badge-green\" data-color=\"green\"></span>\n                            <span class=\"badge filter badge-orange\" data-color=\"orange\"></span>\n                            <span class=\"badge filter badge-danger active\" data-color=\"danger\"></span>\n                        </div>\n                        <div class=\"clearfix\"></div>\n                    <div class=\"ripple-container\"></div></a>\n                </li>\n                <li class=\"header-title\">Images</li>\n                <li>\n                    <a class=\"img-holder switch-trigger\" href=\"javascript:void(0)\">\n                        <img src=\"./assets/img/sidebar-1.jpg\" alt=\"\">\n                    </a>\n                </li>\n                <li>\n                    <a class=\"img-holder switch-trigger\" href=\"javascript:void(0)\">\n                        <img src=\"./assets/img/sidebar-2.jpg\" alt=\"\">\n                    <div class=\"ripple-container\"></div></a>\n                </li>\n                <li>\n                    <a class=\"img-holder switch-trigger\" href=\"javascript:void(0)\">\n                        <img src=\"./assets/img/sidebar-3.jpg\" alt=\"\">\n                    </a>\n                </li>\n                <li class=\"active\">\n                    <a class=\"img-holder switch-trigger\" href=\"javascript:void(0)\">\n                        <img src=\"./assets/img/sidebar-4.jpg\" alt=\"\">\n                    </a>\n                </li>\n            </ul>\n        </div>\n    </div>\n</div>\n");

/***/ }),

/***/ "AytR":
/*!*****************************************!*\
  !*** ./src/environments/environment.ts ***!
  \*****************************************/
/*! exports provided: environment */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "environment", function() { return environment; });
// The file contents for the current environment will overwrite these during build.
// The build system defaults to the dev environment which uses `environment.ts`, but if you do
// `ng build --env=prod` then `environment.prod.ts` will be used instead.
// The list of which env maps to which file can be found in `.angular-cli.json`.
var environment = {
    production: false
};


/***/ }),

/***/ "KKA+":
/*!*************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/components/sidebar/sidebar.component.html ***!
  \*************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"logo\">\n    <a href=\"#\" class=\"simple-text\">\n        <div class=\"logo-img\">\n            <img src=\"assets/img/learn_angular_log_2.png\" alt=\"Learn Angular logo\"/>\n        </div>\n            Learn-{{ '{' }}angular{{ '}' }}\n    </a>\n</div>\n<div class=\"sidebar-wrapper\">\n  <div *ngIf=\"isMobileMenu()\">\n    <form class=\"navbar-form\">\n      <span class=\"bmd-form-group\">\n        <div class=\"input-group no-border\">\n          <input type=\"text\" value=\"\" class=\"form-control\" placeholder=\"Search...\">\n          <button mat-raised-button type=\"submit\" class=\"btn btn-white btn-round btn-just-icon\">\n            <i class=\"material-icons\">search</i>\n            <div class=\"ripple-container\"></div>\n          </button>\n        </div>\n      </span>\n    </form>\n    <ul class=\"nav navbar-nav nav-mobile-menu\">\n        <!-- <li class=\"nav-item\">\n            <a class=\"nav-link\" href=\"javascript:void(0)\">\n                <i class=\"material-icons\">dashboard</i>\n                <p>\n                    <span class=\"d-lg-none d-md-block\">Stats</span>\n                </p>\n            </a>\n        </li> -->\n        <li class=\"nav-item dropdown\">\n            <a class=\"nav-link\" href=\"javascript:void(0)\" id=\"navbarDropdownMenuLink\" data-toggle=\"dropdown\" aria-haspopup=\"true\" aria-expanded=\"false\">\n                <i class=\"material-icons\">notifications</i>\n                <span class=\"notification\">5</span>\n                <p>\n                    <span class=\"d-lg-none d-md-block\">Some Actions</span>\n                </p>\n            </a>\n            <div class=\"dropdown-menu dropdown-menu-right\" aria-labelledby=\"navbarDropdownMenuLink\">\n                <a class=\"dropdown-item\" href=\"#\">Mike John responded to your email</a>\n                <a class=\"dropdown-item\" href=\"#\">You have 5 new tasks</a>\n                <a class=\"dropdown-item\" href=\"#\">You're now friend with Andrew</a>\n                <a class=\"dropdown-item\" href=\"#\">Another Notification</a>\n                <a class=\"dropdown-item\" href=\"#\">Another One</a>\n            </div>\n        </li>\n        <!-- <li class=\"nav-item\">\n            <a class=\"nav-link\" href=\"javascript:void(0)\">\n                <i class=\"material-icons\">person</i>\n                <p>\n                    <span class=\"d-lg-none d-md-block\">Account</span>\n                </p>\n            </a>\n        </li> -->\n    </ul>\n  </div>\n    <ul class=\"nav\">\n        <li routerLinkActive=\"active\" *ngFor=\"let menuItem of menuItems\" class=\"{{menuItem.class}} nav-item\">\n            <a class=\"nav-link\" [routerLink]=\"[menuItem.path]\">\n                <i class=\"material-icons\">{{menuItem.icon}}</i>\n                <p>{{menuItem.title}}</p>\n            </a>\n        </li>\n    </ul>\n</div>\n");

/***/ }),

/***/ "LmEr":
/*!*******************************************************!*\
  !*** ./src/app/components/footer/footer.component.ts ***!
  \*******************************************************/
/*! exports provided: FooterComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FooterComponent", function() { return FooterComponent; });
/* harmony import */ var _raw_loader_footer_component_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! raw-loader!./footer.component.html */ "WwN9");
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


var FooterComponent = /** @class */ (function () {
    function FooterComponent() {
        this.test = new Date();
    }
    FooterComponent.prototype.ngOnInit = function () {
    };
    FooterComponent.ctorParameters = function () { return []; };
    FooterComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-footer',
            template: _raw_loader_footer_component_html__WEBPACK_IMPORTED_MODULE_0__["default"]
        }),
        __metadata("design:paramtypes", [])
    ], FooterComponent);
    return FooterComponent;
}());



/***/ }),

/***/ "P6kD":
/*!****************************************************************!*\
  !*** ./src/app/layouts/admin-layout/admin-layout.component.ts ***!
  \****************************************************************/
/*! exports provided: AdminLayoutComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AdminLayoutComponent", function() { return AdminLayoutComponent; });
/* harmony import */ var _raw_loader_admin_layout_component_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! raw-loader!./admin-layout.component.html */ "AK6u");
/* harmony import */ var _admin_layout_component_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./admin-layout.component.scss */ "vtrx");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var rxjs_add_operator_filter__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rxjs/add/operator/filter */ "fjAU");
/* harmony import */ var rxjs_add_operator_filter__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(rxjs_add_operator_filter__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var perfect_scrollbar__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! perfect-scrollbar */ "t/UT");
/* harmony import */ var jquery__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! jquery */ "EVdn");
/* harmony import */ var jquery__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(jquery__WEBPACK_IMPORTED_MODULE_7__);
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};








var AdminLayoutComponent = /** @class */ (function () {
    function AdminLayoutComponent(location, router) {
        this.location = location;
        this.router = router;
        this.yScrollStack = [];
    }
    AdminLayoutComponent.prototype.ngOnInit = function () {
        var _this = this;
        var isWindows = navigator.platform.indexOf('Win') > -1 ? true : false;
        if (isWindows && !document.getElementsByTagName('body')[0].classList.contains('sidebar-mini')) {
            // if we are on windows OS we activate the perfectScrollbar function
            document.getElementsByTagName('body')[0].classList.add('perfect-scrollbar-on');
        }
        else {
            document.getElementsByTagName('body')[0].classList.remove('perfect-scrollbar-off');
        }
        var elemMainPanel = document.querySelector('.main-panel');
        var elemSidebar = document.querySelector('.sidebar .sidebar-wrapper');
        this.location.subscribe(function (ev) {
            _this.lastPoppedUrl = ev.url;
        });
        this.router.events.subscribe(function (event) {
            if (event instanceof _angular_router__WEBPACK_IMPORTED_MODULE_5__["NavigationStart"]) {
                if (event.url != _this.lastPoppedUrl)
                    _this.yScrollStack.push(window.scrollY);
            }
            else if (event instanceof _angular_router__WEBPACK_IMPORTED_MODULE_5__["NavigationEnd"]) {
                if (event.url == _this.lastPoppedUrl) {
                    _this.lastPoppedUrl = undefined;
                    window.scrollTo(0, _this.yScrollStack.pop());
                }
                else
                    window.scrollTo(0, 0);
            }
        });
        this._router = this.router.events.filter(function (event) { return event instanceof _angular_router__WEBPACK_IMPORTED_MODULE_5__["NavigationEnd"]; }).subscribe(function (event) {
            elemMainPanel.scrollTop = 0;
            elemSidebar.scrollTop = 0;
        });
        if (window.matchMedia("(min-width: 960px)").matches && !this.isMac()) {
            var ps = new perfect_scrollbar__WEBPACK_IMPORTED_MODULE_6__["default"](elemMainPanel);
            ps = new perfect_scrollbar__WEBPACK_IMPORTED_MODULE_6__["default"](elemSidebar);
        }
        var window_width = jquery__WEBPACK_IMPORTED_MODULE_7__(window).width();
        var $sidebar = jquery__WEBPACK_IMPORTED_MODULE_7__('.sidebar');
        var $sidebar_responsive = jquery__WEBPACK_IMPORTED_MODULE_7__('body > .navbar-collapse');
        var $sidebar_img_container = $sidebar.find('.sidebar-background');
        if (window_width > 767) {
            if (jquery__WEBPACK_IMPORTED_MODULE_7__('.fixed-plugin .dropdown').hasClass('show-dropdown')) {
                jquery__WEBPACK_IMPORTED_MODULE_7__('.fixed-plugin .dropdown').addClass('open');
            }
        }
        jquery__WEBPACK_IMPORTED_MODULE_7__('.fixed-plugin a').click(function (event) {
            // Alex if we click on switch, stop propagation of the event, so the dropdown will not be hide, otherwise we set the  section active
            if (jquery__WEBPACK_IMPORTED_MODULE_7__(this).hasClass('switch-trigger')) {
                if (event.stopPropagation) {
                    event.stopPropagation();
                }
                else if (window.event) {
                    window.event.cancelBubble = true;
                }
            }
        });
        jquery__WEBPACK_IMPORTED_MODULE_7__('.fixed-plugin .badge').click(function () {
            var $full_page_background = jquery__WEBPACK_IMPORTED_MODULE_7__('.full-page-background');
            jquery__WEBPACK_IMPORTED_MODULE_7__(this).siblings().removeClass('active');
            jquery__WEBPACK_IMPORTED_MODULE_7__(this).addClass('active');
            var new_color = jquery__WEBPACK_IMPORTED_MODULE_7__(this).data('color');
            if ($sidebar.length !== 0) {
                $sidebar.attr('data-color', new_color);
            }
            if ($sidebar_responsive.length != 0) {
                $sidebar_responsive.attr('data-color', new_color);
            }
        });
        jquery__WEBPACK_IMPORTED_MODULE_7__('.fixed-plugin .img-holder').click(function () {
            var $full_page_background = jquery__WEBPACK_IMPORTED_MODULE_7__('.full-page-background');
            jquery__WEBPACK_IMPORTED_MODULE_7__(this).parent('li').siblings().removeClass('active');
            jquery__WEBPACK_IMPORTED_MODULE_7__(this).parent('li').addClass('active');
            var new_image = jquery__WEBPACK_IMPORTED_MODULE_7__(this).find("img").attr('src');
            if ($sidebar_img_container.length != 0) {
                $sidebar_img_container.fadeOut('fast', function () {
                    $sidebar_img_container.css('background-image', 'url("' + new_image + '")');
                    $sidebar_img_container.fadeIn('fast');
                });
            }
            if ($full_page_background.length != 0) {
                $full_page_background.fadeOut('fast', function () {
                    $full_page_background.css('background-image', 'url("' + new_image + '")');
                    $full_page_background.fadeIn('fast');
                });
            }
            if ($sidebar_responsive.length != 0) {
                $sidebar_responsive.css('background-image', 'url("' + new_image + '")');
            }
        });
    };
    AdminLayoutComponent.prototype.ngAfterViewInit = function () {
        this.runOnRouteChange();
    };
    AdminLayoutComponent.prototype.isMaps = function (path) {
        var titlee = this.location.prepareExternalUrl(this.location.path());
        titlee = titlee.slice(1);
        if (path == titlee) {
            return false;
        }
        else {
            return true;
        }
    };
    AdminLayoutComponent.prototype.isInterviewRoute = function () {
        return this.router.url.indexOf('/interview') === 0;
    };
    AdminLayoutComponent.prototype.runOnRouteChange = function () {
        if (window.matchMedia("(min-width: 960px)").matches && !this.isMac()) {
            var elemMainPanel = document.querySelector('.main-panel');
            var ps = new perfect_scrollbar__WEBPACK_IMPORTED_MODULE_6__["default"](elemMainPanel);
            ps.update();
        }
    };
    AdminLayoutComponent.prototype.isMac = function () {
        var bool = false;
        if (navigator.platform.toUpperCase().indexOf('MAC') >= 0 || navigator.platform.toUpperCase().indexOf('IPAD') >= 0) {
            bool = true;
        }
        return bool;
    };
    AdminLayoutComponent.ctorParameters = function () { return [
        { type: _angular_common__WEBPACK_IMPORTED_MODULE_3__["Location"] },
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_5__["Router"] }
    ]; };
    AdminLayoutComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Component"])({
            selector: 'app-admin-layout',
            template: _raw_loader_admin_layout_component_html__WEBPACK_IMPORTED_MODULE_0__["default"],
            styles: [_admin_layout_component_scss__WEBPACK_IMPORTED_MODULE_1__["default"]]
        }),
        __metadata("design:paramtypes", [_angular_common__WEBPACK_IMPORTED_MODULE_3__["Location"], _angular_router__WEBPACK_IMPORTED_MODULE_5__["Router"]])
    ], AdminLayoutComponent);
    return AdminLayoutComponent;
}());



/***/ }),

/***/ "S6iF":
/*!***********************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/components/navbar/navbar.component.html ***!
  \***********************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<nav class=\"navbar navbar-expand-lg navbar-transparent  navbar-absolute fixed-top\">\n    <div class=\"container-fluid\">\n        <div class=\"navbar-wrapper\">\n          <a class=\"navbar-brand\" href=\"javascript:void(0)\">{{getTitle()}}</a>\n        </div>\n        <button mat-raised-button class=\"navbar-toggler\" type=\"button\" (click)=\"sidebarToggle()\">\n            <span class=\"sr-only\">Toggle navigation</span>\n            <span class=\"navbar-toggler-icon icon-bar\"></span>\n            <span class=\"navbar-toggler-icon icon-bar\"></span>\n            <span class=\"navbar-toggler-icon icon-bar\"></span>\n        </button>\n        <div class=\"collapse navbar-collapse justify-content-end\" id=\"navigation\">\n            <form class=\"navbar-form\">\n                <div class=\"input-group no-border\">\n                    <input type=\"text\" value=\"\" class=\"form-control\" placeholder=\"Search...\">\n                    <button mat-raised-button type=\"submit\" class=\"btn btn-white btn-round btn-just-icon\">\n                        <i class=\"material-icons\">search</i>\n                        <div class=\"ripple-container\"></div>\n                    </button>\n                </div>\n            </form>\n            <ul class=\"navbar-nav\">\n                <li class=\"nav-item\">\n                    <a class=\"nav-link\" href=\"javascript:void(0)\" (click)=\"openDialog()\">\n                        <i class=\"material-icons\">dashboard</i>\n                    </a>\n                </li>\n                <li class=\"nav-item dropdown\">\n                    <a class=\"nav-link\" href=\"javascript:void(0)\" id=\"navbarDropdownMenuLink\" data-toggle=\"dropdown\" aria-haspopup=\"true\" aria-expanded=\"false\">\n                        <i class=\"material-icons\">notifications</i>\n                        <span class=\"notification\">5</span>\n                        <p>\n                            <span class=\"d-lg-none d-md-block\">Some Actions</span>\n                        </p>\n                    </a>\n                    <div class=\"dropdown-menu dropdown-menu-right\" aria-labelledby=\"navbarDropdownMenuLink\">\n                        <a class=\"dropdown-item\" href=\"javascript:void(0)\">Mike John responded to your email</a>\n                        <a class=\"dropdown-item\" href=\"javascript:void(0)\">You have 5 new tasks</a>\n                        <a class=\"dropdown-item\" href=\"javascript:void(0)\">You're now friend with Andrew</a>\n                        <a class=\"dropdown-item\" href=\"javascript:void(0)\">Another Notification</a>\n                        <a class=\"dropdown-item\" href=\"javascript:void(0)\">Another One</a>\n                    </div>\n                </li>\n                <!-- <li class=\"nav-item\">\n                    <a class=\"nav-link\" href=\"javascript:void(0)\">\n                        <i class=\"material-icons\">person</i>\n                        <p>\n                            <span class=\"d-lg-none d-md-block\">Account</span>\n                        </p>\n                    </a>\n                </li> -->\n            </ul>\n        </div>\n    </div>\n</nav>");

/***/ }),

/***/ "Sy1n":
/*!**********************************!*\
  !*** ./src/app/app.component.ts ***!
  \**********************************/
/*! exports provided: AppComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppComponent", function() { return AppComponent; });
/* harmony import */ var _raw_loader_app_component_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! raw-loader!./app.component.html */ "VzVu");
/* harmony import */ var _app_component_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./app.component.css */ "A3xY");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "tyNb");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var AppComponent = /** @class */ (function () {
    function AppComponent(router) {
        this.router = router;
        this.router.events.subscribe(function (event) {
            if (event instanceof _angular_router__WEBPACK_IMPORTED_MODULE_3__["NavigationEnd"]) {
                var analytics = window.ga;
                if (typeof analytics === 'function') {
                    analytics('set', 'page', event.urlAfterRedirects);
                    analytics('send', 'pageview');
                }
            }
        });
    }
    AppComponent.ctorParameters = function () { return [
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"] }
    ]; };
    AppComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Component"])({
            selector: 'app-root',
            template: _raw_loader_app_component_html__WEBPACK_IMPORTED_MODULE_0__["default"],
            styles: [_app_component_css__WEBPACK_IMPORTED_MODULE_1__["default"]]
        }),
        __metadata("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"]])
    ], AppComponent);
    return AppComponent;
}());



/***/ }),

/***/ "VzVu":
/*!**************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/app.component.html ***!
  \**************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n<router-outlet></router-outlet>\n");

/***/ }),

/***/ "WwN9":
/*!***********************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/components/footer/footer.component.html ***!
  \***********************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<footer class=\"footer \">\n    <div class=\"container-fluid\">\n        <div class=\"copyright pull-right\">\n            &copy;\n            {{test | date: 'yyyy'}}, by Learn Angular Team.\n        </div>\n    </div>\n</footer>\n");

/***/ }),

/***/ "ZAI4":
/*!*******************************!*\
  !*** ./src/app/app.module.ts ***!
  \*******************************/
/*! exports provided: AppModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppModule", function() { return AppModule; });
/* harmony import */ var _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/platform-browser/animations */ "R1ws");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common/http */ "tk/3");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _angular_material_form_field__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/material/form-field */ "kmnG");
/* harmony import */ var _app_routing__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./app.routing */ "beVS");
/* harmony import */ var _components_components_module__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./components/components.module */ "j1ZV");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./app.component */ "Sy1n");
/* harmony import */ var _layouts_admin_layout_admin_layout_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./layouts/admin-layout/admin-layout.component */ "P6kD");
/* harmony import */ var _ng_animate_components_animate_buttons_animate_buttons_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./ng-animate/components/animate-buttons/animate-buttons.component */ "2RNu");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};











var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [
                _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_0__["BrowserAnimationsModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormsModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_2__["ReactiveFormsModule"],
                _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpClientModule"],
                _components_components_module__WEBPACK_IMPORTED_MODULE_7__["ComponentsModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterModule"],
                _app_routing__WEBPACK_IMPORTED_MODULE_6__["AppRoutingModule"],
                _angular_material_form_field__WEBPACK_IMPORTED_MODULE_5__["MatFormFieldModule"]
            ],
            declarations: [
                _app_component__WEBPACK_IMPORTED_MODULE_8__["AppComponent"],
                _layouts_admin_layout_admin_layout_component__WEBPACK_IMPORTED_MODULE_9__["AdminLayoutComponent"],
                _ng_animate_components_animate_buttons_animate_buttons_component__WEBPACK_IMPORTED_MODULE_10__["AnimateButtonsComponent"],
            ],
            providers: [],
            bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_8__["AppComponent"]]
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "beVS":
/*!********************************!*\
  !*** ./src/app/app.routing.ts ***!
  \********************************/
/*! exports provided: AppRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppRoutingModule", function() { return AppRoutingModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/platform-browser */ "jhN1");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _layouts_admin_layout_admin_layout_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./layouts/admin-layout/admin-layout.component */ "P6kD");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};





var routes = [
    {
        path: '',
        redirectTo: 'dashboard',
        pathMatch: 'full',
    }, {
        path: '',
        component: _layouts_admin_layout_admin_layout_component__WEBPACK_IMPORTED_MODULE_4__["AdminLayoutComponent"],
        children: [{
                path: '',
                loadChildren: './layouts/admin-layout/admin-layout.module#AdminLayoutModule'
            }]
    }
];
var AppRoutingModule = /** @class */ (function () {
    function AppRoutingModule() {
    }
    AppRoutingModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
                _angular_platform_browser__WEBPACK_IMPORTED_MODULE_2__["BrowserModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_3__["RouterModule"].forRoot(routes, {
                    useHash: true
                })
            ],
            exports: [],
        })
    ], AppRoutingModule);
    return AppRoutingModule;
}());



/***/ }),

/***/ "hrlM":
/*!*******************************************************!*\
  !*** ./src/app/components/navbar/navbar.component.ts ***!
  \*******************************************************/
/*! exports provided: NavbarComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NavbarComponent", function() { return NavbarComponent; });
/* harmony import */ var _raw_loader_navbar_component_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! raw-loader!./navbar.component.html */ "S6iF");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _sidebar_sidebar_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../sidebar/sidebar.component */ "zBoC");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/material/dialog */ "0IaG");
/* harmony import */ var _common_dialog_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../common/dialog.component */ "wxyP");
/* harmony import */ var _angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/material/snack-bar */ "dNgK");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};








var NavbarComponent = /** @class */ (function () {
    function NavbarComponent(location, element, router, dialog, _snackBar) {
        this.element = element;
        this.router = router;
        this.dialog = dialog;
        this._snackBar = _snackBar;
        this.mobile_menu_visible = 0;
        this.location = location;
        this.sidebarVisible = false;
    }
    NavbarComponent.prototype.ngOnInit = function () {
        var _this = this;
        if (this.router.url.indexOf('/interview') !== 0) {
            this.openSnackBar('Please check our website frequently many topics will be added', 'This is SnackBar Sample.');
        }
        this.listTitles = _sidebar_sidebar_component__WEBPACK_IMPORTED_MODULE_2__["ROUTES"].filter(function (listTitle) { return listTitle; });
        var navbar = this.element.nativeElement;
        this.toggleButton = navbar.getElementsByClassName('navbar-toggler')[0];
        this.router.events.subscribe(function (event) {
            _this.sidebarClose();
            var $layer = document.getElementsByClassName('close-layer')[0];
            if ($layer) {
                $layer.remove();
                _this.mobile_menu_visible = 0;
            }
        });
    };
    NavbarComponent.prototype.sidebarOpen = function () {
        var toggleButton = this.toggleButton;
        var body = document.getElementsByTagName('body')[0];
        setTimeout(function () {
            toggleButton.classList.add('toggled');
        }, 500);
        body.classList.add('nav-open');
        this.sidebarVisible = true;
    };
    ;
    NavbarComponent.prototype.sidebarClose = function () {
        var body = document.getElementsByTagName('body')[0];
        this.toggleButton.classList.remove('toggled');
        this.sidebarVisible = false;
        body.classList.remove('nav-open');
    };
    ;
    NavbarComponent.prototype.sidebarToggle = function () {
        // const toggleButton = this.toggleButton;
        // const body = document.getElementsByTagName('body')[0];
        var $toggle = document.getElementsByClassName('navbar-toggler')[0];
        if (this.sidebarVisible === false) {
            this.sidebarOpen();
        }
        else {
            this.sidebarClose();
        }
        var body = document.getElementsByTagName('body')[0];
        if (this.mobile_menu_visible == 1) {
            // $('html').removeClass('nav-open');
            body.classList.remove('nav-open');
            if ($layer) {
                $layer.remove();
            }
            setTimeout(function () {
                $toggle.classList.remove('toggled');
            }, 400);
            this.mobile_menu_visible = 0;
        }
        else {
            setTimeout(function () {
                $toggle.classList.add('toggled');
            }, 430);
            var $layer = document.createElement('div');
            $layer.setAttribute('class', 'close-layer');
            if (body.querySelectorAll('.main-panel')) {
                document.getElementsByClassName('main-panel')[0].appendChild($layer);
            }
            else if (body.classList.contains('off-canvas-sidebar')) {
                document.getElementsByClassName('wrapper-full-page')[0].appendChild($layer);
            }
            setTimeout(function () {
                $layer.classList.add('visible');
            }, 100);
            $layer.onclick = function () {
                body.classList.remove('nav-open');
                this.mobile_menu_visible = 0;
                $layer.classList.remove('visible');
                setTimeout(function () {
                    $layer.remove();
                    $toggle.classList.remove('toggled');
                }, 400);
            }.bind(this);
            body.classList.add('nav-open');
            this.mobile_menu_visible = 1;
        }
    };
    ;
    NavbarComponent.prototype.getTitle = function () {
        var titlee = this.location.prepareExternalUrl(this.location.path());
        if (titlee.charAt(0) === '#') {
            titlee = titlee.slice(1);
        }
        for (var item = 0; item < this.listTitles.length; item++) {
            if (titlee === this.listTitles[item].path || titlee.indexOf(this.listTitles[item].path + '/') === 0) {
                return this.listTitles[item].title;
            }
        }
        return 'Dashboard';
    };
    NavbarComponent.prototype.openDialog = function () {
        var dialogRef = this.dialog.open(_common_dialog_component__WEBPACK_IMPORTED_MODULE_6__["DialogOverviewExampleDialog"]);
        dialogRef.afterClosed().subscribe(function (result) {
            console.log("Dialog result: " + result);
        });
    };
    NavbarComponent.prototype.openSnackBar = function (message, action) {
        this._snackBar.open(message, action, {
            duration: 9000,
        });
    };
    NavbarComponent.ctorParameters = function () { return [
        { type: _angular_common__WEBPACK_IMPORTED_MODULE_3__["Location"] },
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"] },
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"] },
        { type: _angular_material_dialog__WEBPACK_IMPORTED_MODULE_5__["MatDialog"] },
        { type: _angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_7__["MatSnackBar"] }
    ]; };
    NavbarComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-navbar',
            template: _raw_loader_navbar_component_html__WEBPACK_IMPORTED_MODULE_0__["default"]
        }),
        __metadata("design:paramtypes", [_angular_common__WEBPACK_IMPORTED_MODULE_3__["Location"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"], _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"],
            _angular_material_dialog__WEBPACK_IMPORTED_MODULE_5__["MatDialog"], _angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_7__["MatSnackBar"]])
    ], NavbarComponent);
    return NavbarComponent;
}());



/***/ }),

/***/ "iATf":
/*!***********************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/components/common/dialog.component.html ***!
  \***********************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<h3 mat-dialog-title>Material Dialog Sample</h3>\n<hr>\n<div mat-dialog-content>\n  <p>Title goes here</p>\n  <div class=\"row\">\n    <p>Below is the content which can be passed from any component.</p>\n  </div>\n</div>\n<br>\n<div mat-dialog-actions>\n  <button mat-raised-button type=\"submit\" class=\"btn btn-danger pull-right\" (click)=\"onNoClick()\">Ok, Got it.</button>\n</div>");

/***/ }),

/***/ "j1ZV":
/*!*************************************************!*\
  !*** ./src/app/components/components.module.ts ***!
  \*************************************************/
/*! exports provided: ComponentsModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ComponentsModule", function() { return ComponentsModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/material/dialog */ "0IaG");
/* harmony import */ var _footer_footer_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./footer/footer.component */ "LmEr");
/* harmony import */ var _navbar_navbar_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./navbar/navbar.component */ "hrlM");
/* harmony import */ var _sidebar_sidebar_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./sidebar/sidebar.component */ "zBoC");
/* harmony import */ var _angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/material/snack-bar */ "dNgK");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};








var ComponentsModule = /** @class */ (function () {
    function ComponentsModule() {
    }
    ComponentsModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"],
                _angular_material_dialog__WEBPACK_IMPORTED_MODULE_3__["MatDialogModule"],
                _angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_7__["MatSnackBarModule"]
            ],
            declarations: [
                _footer_footer_component__WEBPACK_IMPORTED_MODULE_4__["FooterComponent"],
                _navbar_navbar_component__WEBPACK_IMPORTED_MODULE_5__["NavbarComponent"],
                _sidebar_sidebar_component__WEBPACK_IMPORTED_MODULE_6__["SidebarComponent"]
            ],
            exports: [
                _footer_footer_component__WEBPACK_IMPORTED_MODULE_4__["FooterComponent"],
                _navbar_navbar_component__WEBPACK_IMPORTED_MODULE_5__["NavbarComponent"],
                _sidebar_sidebar_component__WEBPACK_IMPORTED_MODULE_6__["SidebarComponent"]
            ]
        })
    ], ComponentsModule);
    return ComponentsModule;
}());



/***/ }),

/***/ "k+Q/":
/*!*************************************************************************************!*\
  !*** ./src/app/ng-animate/components/animate-buttons/animate-buttons.component.css ***!
  \*************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("small {\n    font-size: 0.875rem;\n    font-weight: normal;\n  }\n  \n  .bodyBackGround {\n    background: #3494e6;\n    background: linear-gradient(to right, #3494e6);\n    color: #fff;\n    font-family: 'helvetica neue', helvetica, sans-serif;\n    font-size: 15px;\n    margin: 0;\n    padding-bottom: 4rem;\n  }\n  \n  .btn {\n    background-color: #3494e6;\n    border: none;\n    border-radius: 2px;\n    color: #666;\n     cursor: pointer;\n    font-size: inherit;\n    margin-top: 0.5rem;\n    padding: 0.5rem 1rem;\n  }\n  \n  .btn:not(:last-child) {\n    margin-right: 0.5rem;\n  }\n  \n  .container {\n    align-items: center;\n    display: flex;\n    justify-content: center;\n    min-height: 100vh;\n    width: 100vw;\n  }\n  \n  .content {\n    max-width: 60rem;\n    text-align: center;\n  }\n  \n  .box {\n    background-color:#f44336;\n    border-radius: 3px;\n    height: 48px;\n    width: 48px;\n    margin: 0 auto;\n    margin-top: 5rem;\n  }\n  \n  .animations {\n    margin-top: 3rem;\n  }\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFuaW1hdGUtYnV0dG9ucy5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0lBQ0ksbUJBQW1CO0lBQ25CLG1CQUFtQjtFQUNyQjs7RUFFQTtJQUNFLG1CQUFtQjtJQUNuQiw4Q0FBOEM7SUFDOUMsV0FBVztJQUNYLG9EQUFvRDtJQUNwRCxlQUFlO0lBQ2YsU0FBUztJQUNULG9CQUFvQjtFQUN0Qjs7RUFFQTtJQUNFLHlCQUF5QjtJQUN6QixZQUFZO0lBQ1osa0JBQWtCO0lBQ2xCLFdBQVc7S0FDVixlQUFlO0lBQ2hCLGtCQUFrQjtJQUNsQixrQkFBa0I7SUFDbEIsb0JBQW9CO0VBQ3RCOztFQUVBO0lBQ0Usb0JBQW9CO0VBQ3RCOztFQUVBO0lBQ0UsbUJBQW1CO0lBQ25CLGFBQWE7SUFDYix1QkFBdUI7SUFDdkIsaUJBQWlCO0lBQ2pCLFlBQVk7RUFDZDs7RUFFQTtJQUNFLGdCQUFnQjtJQUNoQixrQkFBa0I7RUFDcEI7O0VBRUE7SUFDRSx3QkFBd0I7SUFDeEIsa0JBQWtCO0lBQ2xCLFlBQVk7SUFDWixXQUFXO0lBQ1gsY0FBYztJQUNkLGdCQUFnQjtFQUNsQjs7RUFFQTtJQUNFLGdCQUFnQjtFQUNsQiIsImZpbGUiOiJhbmltYXRlLWJ1dHRvbnMuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbInNtYWxsIHtcbiAgICBmb250LXNpemU6IDAuODc1cmVtO1xuICAgIGZvbnQtd2VpZ2h0OiBub3JtYWw7XG4gIH1cbiAgXG4gIC5ib2R5QmFja0dyb3VuZCB7XG4gICAgYmFja2dyb3VuZDogIzM0OTRlNjtcbiAgICBiYWNrZ3JvdW5kOiBsaW5lYXItZ3JhZGllbnQodG8gcmlnaHQsICMzNDk0ZTYpO1xuICAgIGNvbG9yOiAjZmZmO1xuICAgIGZvbnQtZmFtaWx5OiAnaGVsdmV0aWNhIG5ldWUnLCBoZWx2ZXRpY2EsIHNhbnMtc2VyaWY7XG4gICAgZm9udC1zaXplOiAxNXB4O1xuICAgIG1hcmdpbjogMDtcbiAgICBwYWRkaW5nLWJvdHRvbTogNHJlbTtcbiAgfVxuICBcbiAgLmJ0biB7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogIzM0OTRlNjtcbiAgICBib3JkZXI6IG5vbmU7XG4gICAgYm9yZGVyLXJhZGl1czogMnB4O1xuICAgIGNvbG9yOiAjNjY2O1xuICAgICBjdXJzb3I6IHBvaW50ZXI7XG4gICAgZm9udC1zaXplOiBpbmhlcml0O1xuICAgIG1hcmdpbi10b3A6IDAuNXJlbTtcbiAgICBwYWRkaW5nOiAwLjVyZW0gMXJlbTtcbiAgfVxuICBcbiAgLmJ0bjpub3QoOmxhc3QtY2hpbGQpIHtcbiAgICBtYXJnaW4tcmlnaHQ6IDAuNXJlbTtcbiAgfVxuICBcbiAgLmNvbnRhaW5lciB7XG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICAgIG1pbi1oZWlnaHQ6IDEwMHZoO1xuICAgIHdpZHRoOiAxMDB2dztcbiAgfVxuICBcbiAgLmNvbnRlbnQge1xuICAgIG1heC13aWR0aDogNjByZW07XG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xuICB9XG4gIFxuICAuYm94IHtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiNmNDQzMzY7XG4gICAgYm9yZGVyLXJhZGl1czogM3B4O1xuICAgIGhlaWdodDogNDhweDtcbiAgICB3aWR0aDogNDhweDtcbiAgICBtYXJnaW46IDAgYXV0bztcbiAgICBtYXJnaW4tdG9wOiA1cmVtO1xuICB9XG4gIFxuICAuYW5pbWF0aW9ucyB7XG4gICAgbWFyZ2luLXRvcDogM3JlbTtcbiAgfSJdfQ== */");

/***/ }),

/***/ "vtrx":
/*!******************************************************************!*\
  !*** ./src/app/layouts/admin-layout/admin-layout.component.scss ***!
  \******************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJhZG1pbi1sYXlvdXQuY29tcG9uZW50LnNjc3MifQ== */");

/***/ }),

/***/ "wxyP":
/*!*******************************************************!*\
  !*** ./src/app/components/common/dialog.component.ts ***!
  \*******************************************************/
/*! exports provided: DialogOverviewExampleDialog */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DialogOverviewExampleDialog", function() { return DialogOverviewExampleDialog; });
/* harmony import */ var _raw_loader_dialog_component_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! raw-loader!./dialog.component.html */ "iATf");
/* harmony import */ var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/material/dialog */ "0IaG");
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



var DialogOverviewExampleDialog = /** @class */ (function () {
    function DialogOverviewExampleDialog(dialogRef, data) {
        this.dialogRef = dialogRef;
        this.data = data;
    }
    DialogOverviewExampleDialog.prototype.onNoClick = function () {
        this.dialogRef.close();
    };
    DialogOverviewExampleDialog.ctorParameters = function () { return [
        { type: _angular_material_dialog__WEBPACK_IMPORTED_MODULE_1__["MatDialogRef"] },
        { type: undefined, decorators: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Inject"], args: [_angular_material_dialog__WEBPACK_IMPORTED_MODULE_1__["MAT_DIALOG_DATA"],] }] }
    ]; };
    DialogOverviewExampleDialog = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Component"])({
            selector: 'app-dialog',
            template: _raw_loader_dialog_component_html__WEBPACK_IMPORTED_MODULE_0__["default"]
        }),
        __metadata("design:paramtypes", [_angular_material_dialog__WEBPACK_IMPORTED_MODULE_1__["MatDialogRef"], Object])
    ], DialogOverviewExampleDialog);
    return DialogOverviewExampleDialog;
}());



/***/ }),

/***/ "zBoC":
/*!*********************************************************!*\
  !*** ./src/app/components/sidebar/sidebar.component.ts ***!
  \*********************************************************/
/*! exports provided: ROUTES, SidebarComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ROUTES", function() { return ROUTES; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SidebarComponent", function() { return SidebarComponent; });
/* harmony import */ var _raw_loader_sidebar_component_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! raw-loader!./sidebar.component.html */ "KKA+");
/* harmony import */ var _sidebar_component_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./sidebar.component.css */ "2DHQ");
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



var ROUTES = [
    { path: '/dashboard', title: 'Dashboard', icon: 'dashboard', class: '' },
    { path: '/user-profile', title: 'User Profile', icon: 'person', class: '' },
    { path: '/table-list', title: 'Table List', icon: 'table_view', class: '' },
    { path: '/typography', title: 'Typography', icon: 'library_books', class: '' },
    { path: '/icons', title: 'Icons', icon: 'bubble_chart', class: '' },
    { path: '/notifications', title: 'Notifications', icon: 'notifications', class: '' },
    { path: '/interview', title: 'Interview Library', icon: 'school', class: '' },
    { path: '/animation', title: 'Buttons Animation', icon: 'smart_button', class: '' },
    { path: '/about', title: 'About', icon: 'psychology', class: '' }
];
var SidebarComponent = /** @class */ (function () {
    function SidebarComponent() {
    }
    SidebarComponent.prototype.ngOnInit = function () {
        this.menuItems = ROUTES.filter(function (menuItem) { return menuItem; });
    };
    SidebarComponent.prototype.isMobileMenu = function () {
        if ($(window).width() > 991) {
            return false;
        }
        return true;
    };
    ;
    SidebarComponent.ctorParameters = function () { return []; };
    SidebarComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Component"])({
            selector: 'app-sidebar',
            template: _raw_loader_sidebar_component_html__WEBPACK_IMPORTED_MODULE_0__["default"],
            styles: [_sidebar_component_css__WEBPACK_IMPORTED_MODULE_1__["default"]]
        }),
        __metadata("design:paramtypes", [])
    ], SidebarComponent);
    return SidebarComponent;
}());



/***/ }),

/***/ "zUnb":
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser-dynamic */ "a3Wg");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app/app.module */ "ZAI4");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./environments/environment */ "AytR");
/* harmony import */ var hammerjs__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! hammerjs */ "yLV6");
/* harmony import */ var hammerjs__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(hammerjs__WEBPACK_IMPORTED_MODULE_4__);
/*!

=========================================================
* Material Dashboard Angular - v2.4.0
=========================================================



=========================================================

* The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

*/





if (_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["enableProdMode"])();
}
Object(_angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__["platformBrowserDynamic"])().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"]);


/***/ }),

/***/ "zn8P":
/*!******************************************************!*\
  !*** ./$$_lazy_route_resource lazy namespace object ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var map = {
	"./layouts/admin-layout/admin-layout.module": [
		"IqXj",
		"layouts-admin-layout-admin-layout-module"
	]
};
function webpackAsyncContext(req) {
	if(!__webpack_require__.o(map, req)) {
		return Promise.resolve().then(function() {
			var e = new Error("Cannot find module '" + req + "'");
			e.code = 'MODULE_NOT_FOUND';
			throw e;
		});
	}

	var ids = map[req], id = ids[0];
	return __webpack_require__.e(ids[1]).then(function() {
		return __webpack_require__(id);
	});
}
webpackAsyncContext.keys = function webpackAsyncContextKeys() {
	return Object.keys(map);
};
webpackAsyncContext.id = "zn8P";
module.exports = webpackAsyncContext;

/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.js.map