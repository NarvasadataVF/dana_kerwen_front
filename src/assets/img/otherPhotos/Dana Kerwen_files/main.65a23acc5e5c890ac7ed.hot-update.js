webpackHotUpdate("main",{

/***/ "./src/component/ExperienceRadial/index.js":
/*!*************************************************!*\
  !*** ./src/component/ExperienceRadial/index.js ***!
  \*************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _css_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./css.css */ "./src/component/ExperienceRadial/css.css");
/* harmony import */ var _css_css__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_css_css__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react_circular_progressbar__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-circular-progressbar */ "./node_modules/react-circular-progressbar/dist/index.esm.js");
/* harmony import */ var react_circular_progressbar_dist_styles_css__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react-circular-progressbar/dist/styles.css */ "./node_modules/react-circular-progressbar/dist/styles.css");
/* harmony import */ var react_circular_progressbar_dist_styles_css__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react_circular_progressbar_dist_styles_css__WEBPACK_IMPORTED_MODULE_3__);
var _this = undefined,
  _jsxFileName = "/Users/vfhome/projects/dana_kerwen/src/component/ExperienceRadial/index.js";




var ExperienceRadial = function ExperienceRadial() {
  var percentage = 60;
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "experienceRadial",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 9,
      columnNumber: 5
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_circular_progressbar__WEBPACK_IMPORTED_MODULE_2__["CircularProgressbar"], {
    value: percentage,
    text: "".concat(percentage, "%"),
    styles: Object(react_circular_progressbar__WEBPACK_IMPORTED_MODULE_2__["buildStyles"])({
      // Whether to use rounded or flat corners on the ends - can use 'butt' or 'round'
      strokeLinecap: 'butt',
      // Text size
      textSize: '16px',
      // How long animation takes to go from one percentage to another, in seconds
      pathTransitionDuration: 0.5,
      // Can specify path transition in more detail, or remove it entirely
      pathTransition: 1,
      // Colors
      pathColor: "rgba(62, 152, 199, ".concat(percentage / 100, ")"),
      // textColor: '#f88',
      trailColor: '#00000000',
      backgroundColor: '#fff'
    }),
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 10,
      columnNumber: 9
    }
  }));
};
/* harmony default export */ __webpack_exports__["default"] = (ExperienceRadial);

/***/ })

})
//# sourceMappingURL=main.65a23acc5e5c890ac7ed.hot-update.js.map