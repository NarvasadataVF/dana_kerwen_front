(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ "./node_modules/css-loader/index.js?!./node_modules/postcss-loader/src/index.js?!./src/component/ExperienceHeader/css.css":
/*!***************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader??ref--6-oneOf-3-1!./node_modules/postcss-loader/src??postcss!./src/component/ExperienceHeader/css.css ***!
  \***************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(/*! ../../../node_modules/css-loader/lib/css-base.js */ "./node_modules/css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".experienceHeader{\n    text-align: center;\n    display: flex;\n    flex-direction: column;\n    align-items: center;\n}\n.experienceHeader>h1{\n    font-size: 60px;\n    margin-bottom: 0px;\n}\n.experienceHeader>p{\n    max-width: 650px;\n    color: #acacac;\n    font-size: 14px;\n    margin-top: 5px;\n}", ""]);

// exports


/***/ }),

/***/ "./node_modules/css-loader/index.js?!./node_modules/postcss-loader/src/index.js?!./src/component/ExperienceRadial/css.css":
/*!***************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader??ref--6-oneOf-3-1!./node_modules/postcss-loader/src??postcss!./src/component/ExperienceRadial/css.css ***!
  \***************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(/*! ../../../node_modules/css-loader/lib/css-base.js */ "./node_modules/css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".experienceRadial{\n    height: 100px;\n    width: 100px;\n}", ""]);

// exports


/***/ }),

/***/ "./node_modules/css-loader/index.js?!./node_modules/postcss-loader/src/index.js?!./src/component/NewsComponent/css.css":
/*!************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader??ref--6-oneOf-3-1!./node_modules/postcss-loader/src??postcss!./src/component/NewsComponent/css.css ***!
  \************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(/*! ../../../node_modules/css-loader/lib/css-base.js */ "./node_modules/css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".newsComponent{\n    display: flex;\n    flex-direction: column;\n    padding: 0px 25px;\n}\n.newsComponent>h5{\n    color: #7b7b7b;\n    margin-bottom: 0px;\n}\n.newsComponent>p{\n    margin-top: 10px;\n    font-size: 16px;\n    transition: 0.45s;\n    color: var(--white);\n}\n.newsComponent>p:hover{\n    transition: 0.45s;\n    color: var(--green);\n}", ""]);

// exports


/***/ }),

/***/ "./node_modules/css-loader/index.js?!./node_modules/postcss-loader/src/index.js?!./src/component/Poster/css.css":
/*!*****************************************************************************************************************************!*\
  !*** ./node_modules/css-loader??ref--6-oneOf-3-1!./node_modules/postcss-loader/src??postcss!./src/component/Poster/css.css ***!
  \*****************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(/*! ../../../node_modules/css-loader/lib/css-base.js */ "./node_modules/css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".posterContainer{\r\n    /* margin-top: -100px; */\r\n}\r\n.poster{\r\n    /* height: 100vh; */\r\n    position: relative;\r\n    overflow: hidden;\r\n    display: flex;\r\n    flex-direction: column;\r\n}\r\n.posterImg{\r\n    height: 100vh;\r\n    overflow: hidden;\r\n    position: relative;\r\n\r\n}\r\n/* .posterImg::before{\r\n    content: \" \";\r\n    position: absolute;\r\n    left: 0px;\r\n    height: 100%;\r\n    width: 100%;\r\n    background: linear-gradient(70deg, rgb(47, 140, 86) 0%, rgba(91, 205, 139, 0.418) 24%, rgba(1,0,10,1) 95%);\r\n    opacity: 0.8;\r\n}\r\n*/\r\n.posterImg::after{\r\n    content: \" \";\r\n    position: absolute;\r\n    z-index: -1;\r\n    right: 0px;\r\n    height: 100%;\r\n    bottom: 0px;\r\n    width: 100%;\r\n    background: linear-gradient(-90deg, rgba(18, 18, 18, 0.384) 0%, #0f0f0f 100%);\r\n    opacity: 0.8;\r\n} \r\n\r\n.posterImg>img{\r\n    width: 100%;\r\n    z-index: -1;\r\n    height: 100vh!important;\r\n    position: absolute;\r\n    top: 0px;\r\n}\r\n.sliderHolder{\r\n    /* max-width: 1680px; */\r\n    margin: auto;\r\n    position: relative;\r\n    z-index: 5;\r\n}\r\n.panel>ul{\r\n    display: flex;\r\n    flex-wrap: nowrap;\r\n    margin: 0px;\r\n    padding: 0px;\r\n    list-style: none;\r\n    justify-content: center;\r\n}\r\n.panel>ul>li{\r\n    margin-right: 30px;\r\n    box-sizing: border-box;\r\n    border-radius: 8px;\r\n    -webkit-backdrop-filter: blur(7px);\r\n            backdrop-filter: blur(7px);\r\n    border: 1px solid #427c5a8a;\r\n    color: #f9f9f9;\r\n    display: flex;\r\n    flex-direction: column;\r\n    height: 320px;\r\n    width: 400px;\r\n    overflow: hidden;\r\n    cursor: pointer;\r\n}\r\n.panel>ul>li>div:first-child{\r\n    position: relative;\r\n    height: 150px;\r\n    overflow: hidden;\r\n}\r\n.panel>ul>li>div:last-child{\r\n    padding: 5px;\r\n}\r\n.posterContent{\r\n    z-index: 5;\r\n    height: 100%;\r\n    display: flex;\r\n    color: #fff;\r\n    align-items: center;\r\n    width: 100%;\r\n    max-width: 1200px;\r\n    margin: auto;\r\n    font-weight: 300;\r\n}\r\n.posterContent>div{\r\n    flex: 1 1;\r\n}\r\n.posterContent>div>h1{\r\n    margin-bottom: 0px;\r\n    font-size: 60px;\r\n}\r\n.posterContent>div>h1>span{\r\n    color: var(--green);\r\n}\r\n.posterContent>div>p{\r\n    margin-top: 10px;\r\n}\r\n.posterContent>div>button{\r\n    width: 50%;\r\n    height: 50px;\r\n    background-color: var(--green);\r\n    border: none;\r\n    color: white;\r\n    border-radius: 6px;\r\n}\r\n", ""]);

// exports


/***/ }),

/***/ "./node_modules/css-loader/index.js?!./node_modules/postcss-loader/src/index.js?!./src/component/ServiceMarquee/css.css":
/*!*************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader??ref--6-oneOf-3-1!./node_modules/postcss-loader/src??postcss!./src/component/ServiceMarquee/css.css ***!
  \*************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(/*! ../../../node_modules/css-loader/lib/css-base.js */ "./node_modules/css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".serviceMarquee{\r\n    /* position: absolute; */\r\n    margin-top: -160px;\r\n    position: relative;\r\n    z-index: 0;\r\n}\r\n.marqItem{\r\n    font-size: 24px;\r\n    color: #484848;\r\n}", ""]);

// exports


/***/ }),

/***/ "./node_modules/css-loader/index.js?!./node_modules/postcss-loader/src/index.js?!./src/component/ServicePallet/css.css":
/*!************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader??ref--6-oneOf-3-1!./node_modules/postcss-loader/src??postcss!./src/component/ServicePallet/css.css ***!
  \************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(/*! ../../../node_modules/css-loader/lib/css-base.js */ "./node_modules/css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".servicePallet{\r\n    display: flex;\r\n    flex-direction: column;\r\n    justify-content: center;\r\n    align-items: center;\r\n    text-align: center;\r\n    width: 220px;\r\n    color: var(--white);\r\n    padding: 30px;\r\n    transition: 0.5s;\r\n    box-sizing: border-box;\r\n    cursor: pointer;\r\n    padding-bottom: 220px;\r\n    padding-top: 100px;\r\n    /* z-index: 3; */\r\n}\r\n.servicePallet:hover{\r\n    transition: 0.5s;\r\n    background-color: var(--green);\r\n}\r\n.servicePallet>div>img{\r\n    width: 80%;\r\n    transition: 0.25s;   \r\n    filter: invert(48%) sepia(57%) saturate(637%) hue-rotate(82deg) brightness(97%) contrast(84%);\r\n}\r\n.servicePallet:hover>div>img{\r\n    transition: 0.25s;   \r\n    filter: unset;\r\n}\r\n.servicePallet>div:last-child{\r\n    padding-top: 30px;\r\n}\r\n.servicePallet>div:last-child>h3{\r\n    font-size: 12px;\r\n}\r\n.servicePallet>div:last-child>p{\r\n    font-size: 14px;\r\n}", ""]);

// exports


/***/ }),

/***/ "./node_modules/css-loader/index.js?!./node_modules/postcss-loader/src/index.js?!./src/component/WhyUsCard/css.css":
/*!********************************************************************************************************************************!*\
  !*** ./node_modules/css-loader??ref--6-oneOf-3-1!./node_modules/postcss-loader/src??postcss!./src/component/WhyUsCard/css.css ***!
  \********************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(/*! ../../../node_modules/css-loader/lib/css-base.js */ "./node_modules/css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".whyusCard{\n    display: flex;\n    flex-direction: column;\n    align-items: center;\n    text-align: center;\n    width: 270px;\n}", ""]);

// exports


/***/ }),

/***/ "./node_modules/css-loader/index.js?!./node_modules/postcss-loader/src/index.js?!./src/container/Experience/css.css":
/*!*********************************************************************************************************************************!*\
  !*** ./node_modules/css-loader??ref--6-oneOf-3-1!./node_modules/postcss-loader/src??postcss!./src/container/Experience/css.css ***!
  \*********************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(/*! ../../../node_modules/css-loader/lib/css-base.js */ "./node_modules/css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".experience{\n    background-image: linear-gradient(180deg,#000 10%,#202020 60%);\n    color: var(--white);\n    padding-top: 100px;\n}", ""]);

// exports


/***/ }),

/***/ "./node_modules/css-loader/index.js?!./node_modules/postcss-loader/src/index.js?!./src/container/News/css.css":
/*!***************************************************************************************************************************!*\
  !*** ./node_modules/css-loader??ref--6-oneOf-3-1!./node_modules/postcss-loader/src??postcss!./src/container/News/css.css ***!
  \***************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(/*! ../../../node_modules/css-loader/lib/css-base.js */ "./node_modules/css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".news{\n    background-image: linear-gradient(360deg,#151515 0,#202020 80%);\n    color: var(--white);\n    padding: 120px 0px;\n    padding-top: 100px;\n}\n.news>div>h1{\n    font-size: 55px;\n    text-align: center;\n    margin-bottom: 60px;\n}\n.news>div>button{\n    display: flex;\n    justify-self: center;\n    margin: auto;\n    margin-top: 100px;\n}\n.slick-dots{\n    bottom: -60px;\n}\n.slick-dots>li>button{\n    width: 10px;\n    height: 10px;\n}  \n.slick-dots>li>button::before{\n    color: transparent;\n    background-color: white;\n    transition: 0.3s;\n    border-radius: 50%;\n    width: 10px;\n    height: 10px;\n}\n.slick-active>button::before{\n    background-color: var(--green)!important;\n    transition: 0.3s;\n    color: transparent!important;\n}\n", ""]);

// exports


/***/ }),

/***/ "./node_modules/css-loader/index.js?!./node_modules/postcss-loader/src/index.js?!./src/container/OrderBlank/css.css":
/*!*********************************************************************************************************************************!*\
  !*** ./node_modules/css-loader??ref--6-oneOf-3-1!./node_modules/postcss-loader/src??postcss!./src/container/OrderBlank/css.css ***!
  \*********************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var escape = __webpack_require__(/*! ../../../node_modules/css-loader/lib/url/escape.js */ "./node_modules/css-loader/lib/url/escape.js");
exports = module.exports = __webpack_require__(/*! ../../../node_modules/css-loader/lib/css-base.js */ "./node_modules/css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".orderBlank{\n    background-image: url(" + escape(__webpack_require__(/*! ./../../assets//img//OrderBlank.jpg */ "./src/assets/img/OrderBlank.jpg")) + ");\n    background-size: cover;\n    background-repeat: no-repeat;\n    position: relative;\n    padding: 30px 0px;\n}\n.orderBlank::before{\n    background-color: rgba(0, 0, 0, 0.800);\n    content: \" \";\n    position: absolute;\n    left: 0px;\n    top: 0px;\n    width: 100%;\n    height: 100%;\n    z-index: 1;\n}\n.orderBlank>div{\n    display: flex;\n    padding: 50px 0px;\n    z-index: 5;\n    position: relative;\n    flex-direction: column;\n    align-items: center;\n    color: var(--white);\n}\n.orderBlank>div>div{\n    flex: 1 1;\n    display: flex;\n    flex-direction: column;\n    width: 100%;\n    justify-content: center;\n    align-items: center;\n}\n/* .orderBlank>div>div>button{\n    width: 200px;\n    padding: 10px 0px;\n    background-color: transparent;\n    transition: 0.5s;\n    color: var(--white);    \n    border: 1px solid var(--green);\n    border-radius: 6px;\n    font-size: 18px;\n    cursor: pointer;\n}\n.orderBlank>div>div>button:hover{\n    background-color: var(--green);\n    transition: 0.5s;\n} */\n.orderText{\n    text-align: center;\n    margin-bottom: 50px;\n}\n.orderText>h1{\n    margin-bottom: 0px;\n    margin-top: 0px;\n    font-size: 50px;\n}\n.orderText>p{\n    max-width: 500px;\n    color: #acacac;\n    font-size: 14px;\n    /* margin: auto; */\n}\n.orderBlank>div>div>div{\n    /* margin: auto; */\n    margin-bottom: 25px;\n    width: 50%;\n}\n.orderBlank>div>div>div>input{\n    background-color: transparent;\n    width: 100%;\n    outline: none;\n    color: var(--white);\n    border: none;\n    border-bottom: 1px solid white;\n}\n.orderBlank>div>div>div>input::placeholder{\n    color: white;\n}\n.orderBlank>div>div>div>select{\n    background-color: transparent;\n    width: 100%;\n    outline: none;\n    color: var(--white);\n    border: none;\n    border-bottom: 1px solid white;\n}", ""]);

// exports


/***/ }),

/***/ "./node_modules/css-loader/index.js?!./node_modules/postcss-loader/src/index.js?!./src/container/Services/css.css":
/*!*******************************************************************************************************************************!*\
  !*** ./node_modules/css-loader??ref--6-oneOf-3-1!./node_modules/postcss-loader/src??postcss!./src/container/Services/css.css ***!
  \*******************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(/*! ../../../node_modules/css-loader/lib/css-base.js */ "./node_modules/css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".servicePalletHolder{\r\n    width: 100%;\r\n    background-color: var(--darkBg);\r\n    padding: 0px;\r\n    margin: 0px;\r\n    margin-top: -10px;\r\n}\r\n.servicePalletHolder>div:first-child{\r\n    justify-content: space-between;\r\n    display: flex;\r\n}", ""]);

// exports


/***/ }),

/***/ "./node_modules/css-loader/index.js?!./node_modules/postcss-loader/src/index.js?!./src/container/WhyUs/css.css":
/*!****************************************************************************************************************************!*\
  !*** ./node_modules/css-loader??ref--6-oneOf-3-1!./node_modules/postcss-loader/src??postcss!./src/container/WhyUs/css.css ***!
  \****************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(/*! ../../../node_modules/css-loader/lib/css-base.js */ "./node_modules/css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".whyusContainer{\n    background-image: linear-gradient(180deg,#121212 0,#202020 80%);\n    color: var(--white);\n}\n.whyusContainer>div>div:last-child{\n    width: 100%;\n    display: flex;\n    padding-top: 50px;\n    justify-content: center;\n}\n/* .whyusContainer>div>div:last-child>button{\n    display: flex;\n    justify-content: center;\n    align-items: center;\n    border: 2px solid var(--green);\n    border-radius: 6px;\n    padding: 20px 40px;\n    font-size: 21px;\n    color: var(--white);\n    cursor: pointer;\n    background-color: transparent;\n    transition: 0.40s;\n}\n.whyusContainer>div>div:last-child>button:hover{\n    transition: 0.40s;\n    background-color: var(--green);\n    color: var(--white);\n} */\n.whyusHeading{\n    text-align: center;\n    padding: 70px 0px;\n}\n.whyusHeading>h1{\n    margin-top: 0px;\n    font-size: 55px;\n}\n.whyusHeading>p{\n    margin-top: 10px;\n    color: #acacac;\n}\n.whyusCardsHolder{\n    display: flex;\n    justify-content: space-between;\n}", ""]);

// exports


/***/ }),

/***/ "./node_modules/css-loader/index.js?!./node_modules/postcss-loader/src/index.js?!./src/index.css":
/*!**************************************************************************************************************!*\
  !*** ./node_modules/css-loader??ref--6-oneOf-3-1!./node_modules/postcss-loader/src??postcss!./src/index.css ***!
  \**************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var escape = __webpack_require__(/*! ../node_modules/css-loader/lib/url/escape.js */ "./node_modules/css-loader/lib/url/escape.js");
exports = module.exports = __webpack_require__(/*! ../node_modules/css-loader/lib/css-base.js */ "./node_modules/css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "@font-face {\n  font-family: majorant;\n  src: url(" + escape(__webpack_require__(/*! ./assets/fonts/Majorant-Bd.ttf */ "./src/assets/fonts/Majorant-Bd.ttf")) + ");\n  font-weight: 600;\n}\n\n@font-face {\n  font-family: majorant;\n  src: url(" + escape(__webpack_require__(/*! ./assets/fonts/Majorant-Rg.ttf */ "./src/assets/fonts/Majorant-Rg.ttf")) + ");\n  font-weight: 400;\n}\n@font-face {\n  font-family: majorant;\n  src: url(" + escape(__webpack_require__(/*! ./assets/fonts/Majorant-Lt.ttf */ "./src/assets/fonts/Majorant-Lt.ttf")) + ");\n  font-weight: 300;\n}\n@font-face {\n  font-family: majorant;\n  src: url(" + escape(__webpack_require__(/*! ./assets/fonts/Majorant-Th.ttf */ "./src/assets/fonts/Majorant-Th.ttf")) + ");\n  font-weight: 200;\n}\n\n\n:root{\n  --green: #28a745;\n  --white: #fff; \n  --darkBg: #121212;\n  --bg: #202020;\n}\nbody {\n  margin: 0;\n  font-family: majorant, Arial, Helvetica, sans-serif;\n  -webkit-font-smoothing: antialiased;\n  -moz-osx-font-smoothing: grayscale;\n}\n\ncode {\n  font-family: source-code-pro, Menlo, Monaco, Consolas, 'Courier New',\n    monospace;\n}\n\nhtml{\n  scroll-behavior: smooth;\n}\n\n.ContainerXl>div:first-child{\n  max-width: 1200px!important;\n  margin: auto;\n}\n\n.dklButton{\n  background-color: transparent;\n  transition: 0.4s;\n  border: 1px solid var(--green);\n  border-radius: 6px;\n  color: var(--green);\n  font-size: 21px;\n  padding: 20px 40px;\n  display: flex;\n  justify-content: center;\n  cursor: pointer;\n  align-items: center;\n}\n.dklButton:hover{\n  transition: 0.4s;\n  color: var(--white);\n  background-color: var(--green);\n}", ""]);

// exports


/***/ }),

/***/ "./node_modules/css-loader/index.js?!./node_modules/postcss-loader/src/index.js?!./src/layout/Footer/css.css":
/*!**************************************************************************************************************************!*\
  !*** ./node_modules/css-loader??ref--6-oneOf-3-1!./node_modules/postcss-loader/src??postcss!./src/layout/Footer/css.css ***!
  \**************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(/*! ../../../node_modules/css-loader/lib/css-base.js */ "./node_modules/css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".footer{\n    background-color: var(--darkBg);\n    color: var(--white);\n    position: relative;\n}\n.footer::before{\n    content: \" \";\n    position: absolute;\n    top: 0px;\n    left: 0px;\n    width: 100%;\n    background-color: var(--green);\n    height: 10px;\n}\n.footer>div{\n    padding-top: 50px;\n    display: flex;\n    justify-content: space-between;\n}\n.footer>div>div{\n    max-width: 250px;\n}\n.footer>div>div>img{\n    width: 120px;\n}\n.footer>div>div>h1{\n    font-size: 21px;\n    margin-top: -10px;\n}\n.footer>div>div>h2{\n    font-size: 21px;\n    margin-bottom: 0px;\n    font-weight: 500;\n    color: #acacac;\n}\n.footer>div>div>ul{\n    list-style: none;\n    color: #626262;\n    padding-left: 0px;\n}\n.footer>div>div>ul>li{\n    margin-bottom: 10px;\n    font-size: 14px;\n}\n.footerBottomLine{\n    background-color: #202020;\n    margin: 0px;\n    display: flex;\n    justify-content: center;\n    color: var(--white);\n    padding: 4px 0px;\n}\n.footerBottomLine>p{\n    margin: 0px;\n    font-size: 12px;\n}", ""]);

// exports


/***/ }),

/***/ "./node_modules/css-loader/index.js?!./node_modules/postcss-loader/src/index.js?!./src/layout/Navbar/css.css":
/*!**************************************************************************************************************************!*\
  !*** ./node_modules/css-loader??ref--6-oneOf-3-1!./node_modules/postcss-loader/src??postcss!./src/layout/Navbar/css.css ***!
  \**************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(/*! ../../../node_modules/css-loader/lib/css-base.js */ "./node_modules/css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".navbarContainer{\r\n    width: 100%;\r\n    position: relative;\r\n    z-index: 20;\r\n}\r\n.navbarContainer>div{\r\n    position: fixed;\r\n    width: 100%;\r\n    background-color: #121212;\r\n    top: 0px;\r\n}\r\n.navbar{\r\n    display: flex;\r\n    flex-wrap: nowrap;\r\n    align-items: center;\r\n    -webkit-user-select: none;\r\n            user-select: none;\r\n    transition: 0.5s;\r\n    color: #F9f9f9;\r\n    margin: auto;\r\n    max-width: 1200px;\r\n}\r\n.navbar>div{\r\n    flex: 1 1;\r\n    padding-top: 8px;\r\n    padding-bottom: 8px;\r\n    box-sizing: border-box;\r\n}\r\n.navbarLogo{\r\n    display: flex;\r\n}\r\n.navbarLogo>div:first-child{\r\n    margin-left: 20px;\r\n    z-index: 3;\r\n}\r\n.navbarLogo>div>img{\r\n    width: 80px;\r\n    /* margin-top: -20px; */\r\n}\r\n.navbarLogo>div{\r\n    width: 5px;\r\n    height: 75px;\r\n    position: relative;\r\n    transition: 0.25s;\r\n    opacity: 1;\r\n    cursor: pointer;\r\n}\r\n.navbarLogo>div>img{\r\n    transition: 0.4s;\r\n}\r\n.navbarControl{\r\n    display: flex;\r\n    flex-wrap: nowrap;\r\n    justify-content: space-between;\r\n}\r\n.navbarMenu>div{\r\n    display: flex;\r\n    flex-wrap: nowrap;\r\n    align-items: center;\r\n    cursor: pointer;\r\n    position: relative;\r\n}\r\n@keyframes menuTop {\r\n    0%{\r\n        transform: translate(0px, 10px);\r\n    }\r\n    100%{\r\n        transform: translate(0px, 0px);\r\n    }\r\n}\r\n@keyframes menuBottom {\r\n    0%{\r\n        transform: translate(0px, -10px);\r\n    }\r\n    100%{\r\n        transform: translate(0px, 0px);\r\n    }\r\n}\r\n.navbarMenu>div>svg:nth-child(1){\r\n    position: absolute;\r\n}\r\n.navbarMenu>div>svg:nth-child(3){\r\n    position: absolute;\r\n}\r\n.animatedMenu>svg:nth-child(1){\r\n    position: absolute;\r\n    animation-name: menuTop;\r\n    animation-fill-mode: forwards;\r\n    animation-duration: 0.5s;\r\n    animation-iteration-count: 1;\r\n    animation-delay: 0.07s;\r\n    transform: translate(0px, 10px);\r\n}\r\n.animatedMenu>svg:nth-child(3){\r\n    position: absolute;\r\n    transform: translate(0px, -10px);\r\n    animation-name: menuBottom;\r\n    animation-fill-mode: forwards;\r\n    animation-duration: 0.5s;\r\n    animation-delay: 0.07s;\r\n    animation-iteration-count: 1;\r\n}\r\n.animatedMenu::after{\r\n    content: \"Menu\";\r\n    position: absolute;\r\n    display: flex;\r\n    align-items: center;\r\n    left: 135%;\r\n    transition: 0.25s;\r\n    height: 100%;\r\n    width: 100%;\r\n    opacity: 0;\r\n    animation-name: opacityAnim2;\r\n    animation-duration: 0.5s;\r\n    animation-iteration-count: 1;\r\n    animation-fill-mode: forwards\r\n}\r\n.navbarMenu>div>span{\r\n    margin-left: 10px;\r\n    transition: 0.5s;\r\n}\r\n.navbarLocale{\r\n    margin-top: 0px;\r\n    padding-right: 20px;\r\n    cursor: pointer;\r\n    position: relative;\r\n}\r\n.navbarLocale>div{\r\n    display: flex;\r\n    align-items: center;\r\n    flex-direction: column;\r\n    position: relative;\r\n    border-radius: 4px;\r\n    padding: 5px;\r\n    box-sizing: border-box;\r\n    border: 1px solid rgb(209, 209, 209);\r\n    border-bottom-left-radius: 0px;\r\n    border-bottom-right-radius: 0px;\r\n}\r\n.navbarLocale>div>div>span{\r\n    margin-right: 5px;\r\n    text-transform: uppercase;\r\n}\r\n.navbarLocale>div>ul{\r\n    position: absolute;    \r\n    border-radius: 4px;\r\n    margin-top: 0px;\r\n    border-top-left-radius: 0px;\r\n    border-top-right-radius: 0px;\r\n    list-style: none;\r\n    transition: 0.25s;\r\n    padding: 0px;\r\n    border: 1px solid rgb(209, 209, 209);\r\n    overflow: hidden;\r\n    z-index: 3;\r\n    top: 100%;\r\n    opacity: 0;\r\n    width: 90.5%;\r\n}\r\n.navbarLocale>div>ul>li{\r\n    padding-bottom: 5px;\r\n    position: relative;\r\n    font-size: 14px;\r\n    display: flex;\r\n    text-transform: uppercase;\r\n    padding-left: 7px;\r\n    cursor: pointer;\r\n    transition: 0.25s;\r\n    padding-top: 2.5px;\r\n    padding-bottom: 2.5px;\r\n}\r\n.navbarLocale>div>ul>li:last-child{\r\n    border: none;\r\n}\r\n.navbarLocale>div>ul>li:hover{\r\n    transition: 0.25s;\r\n    color: #43ac3c;\r\n}\r\n\r\n.langActive{\r\n    padding: 2px!important; \r\n    transition: 0.25s;\r\n    opacity: 1!important;\r\n}\r\n\r\n.openedNavbar{\r\n    display: flex;\r\n    flex-wrap: nowrap;\r\n    transition: 0.35s;\r\n    height: 0px;\r\n    overflow: hidden;\r\n    position: relative;\r\n    border-bottom: none;\r\n    background-color: #121212;\r\n    color: #F9f9f9;\r\n}\r\n.openedNavbar>div{\r\n    flex: 1 1;\r\n    overflow: hidden;\r\n}\r\n.openedNavbar>div>ul{\r\n    margin: 0px;\r\n    padding: 0px;\r\n    list-style: none;\r\n}\r\n.openedNavbar>div>ul>li{\r\n    margin-bottom: 20px;\r\n    font-size: 25px;\r\n    font-weight: normal;\r\n    transition: 0.25s;\r\n    cursor: pointer;\r\n}\r\n.openedNavbar>div>ul>li>a:hover{\r\n    transition: 0.25s;\r\n    color: #43ac3c!important;\r\n}\r\n.openedNavbar>div>ul>li>a{\r\n    text-decoration: none;\r\n    color: inherit;\r\n}\r\n.openedNavbarText{\r\n    margin-bottom: 20px;\r\n    position: relative;\r\n}\r\n.openedNavbarText>svg{\r\n    position: absolute;\r\n    height: 100%;\r\n    width: 100%;\r\n    z-index: -1;\r\n    transition: 0.25s;\r\n    opacity: 0;\r\n    top: 0px;\r\n    right: 0px;\r\n}\r\n.openedNavbarText>div{\r\n    display: flex;\r\n    height: 100%;\r\n    justify-content: flex-start;\r\n    align-items: flex-end;\r\n    padding-left: 20px;\r\n    transition: 0.5s;\r\n\r\n}\r\n.openedNavbarText>div:hover{\r\n    transform: translate(0px, -5px);\r\n    transition: 0.5s;\r\n}\r\n\r\n.openedNavbarText>div>a{\r\n    text-decoration: none;\r\n    font-size: 30px;\r\n}\r\n.langNtheme{\r\n    display: flex;\r\n    flex-wrap: nowrap;\r\n}\r\n\r\n.activeLogo{\r\n    transition: 1s;\r\n    transform: translate(-150px);\r\n    opacity: 0!important;\r\n}\r\n.activeLogo>img{\r\n    width: 230px;\r\n}\r\n.activeLogoSize>img{\r\n    width: 300px!important;\r\n    transition: 0.7s!important;\r\n    margin-top: 50px;\r\n}\r\n.activeNavbar{\r\n    height: 280px;\r\n    transition: .5s;\r\n}\r\n.activeNavbar>div>img{\r\n    opacity: 1;\r\n    transition: 0.45s;\r\n}\r\n.navCloseIcon{\r\n    position: relative;\r\n    margin-left: -24px;\r\n    margin-top: 3px;\r\n    opacity: 0;\r\n    transition: 0.25s;\r\n}\r\n.navCloseIcon>svg:last-child{\r\n    position: absolute;\r\n    left: 0px;\r\n}\r\n@keyframes closeAnimOne {\r\n    0%{\r\n        transform: translate(-30px, 30px);\r\n        opacity: 0;\r\n    }\r\n    100%{\r\n        transform: translate(0px, 0px);\r\n        opacity: 1;\r\n    }\r\n}\r\n@keyframes closeAnimTwo {\r\n    0%{\r\n        transform: translate(30px, 30px);\r\n        opacity: 0;\r\n    }\r\n    100%{\r\n        transform: translate(0px, 0px);\r\n        opacity: 1;\r\n    }\r\n}\r\n\r\n.opacityNone>svg{\r\n    opacity: 0;\r\n    transition: 0.25s;\r\n}\r\n\r\n.opacityBlock{\r\n    opacity: 1;\r\n    transition: 0.25s;\r\n}\r\n@keyframes opacityAnim {\r\n    0%{\r\n        opacity: 0;\r\n    }\r\n    100%{\r\n        opacity: 1;\r\n    }\r\n}\r\n@keyframes opacityAnim2 {\r\n    0%{\r\n        opacity: 0;\r\n    }\r\n    100%{\r\n        opacity: 1;\r\n    }\r\n}\r\n.menuNameClass::after{\r\n    content: \"Close\";\r\n    position: absolute;\r\n    display: flex;\r\n    align-items: center;\r\n    left: 135%;\r\n    transition: 0.5s;\r\n    height: 100%;\r\n    opacity: 0;\r\n    width: 100%;\r\n    animation-name: opacityAnim;\r\n    animation-duration: 0.5s;\r\n    animation-iteration-count: 1;\r\n    animation-fill-mode: forwards;\r\n}\r\n.opacityBlock>svg:first-child{\r\n    animation-name: closeAnimOne;\r\n    animation-duration: 0.5s;\r\n    animation-fill-mode: forwards;\r\n    animation-iteration-count: 1;\r\n}\r\n\r\n.opacityBlock>svg:last-child{\r\n    position: absolute;\r\n    left: 0px;\r\n    animation-name: closeAnimTwo;\r\n    animation-duration: 0.5s;\r\n    animation-fill-mode: forwards;\r\n    animation-iteration-count: 1;\r\n}\r\n\r\n\r\n\r\n/* TABLET */\r\n\r\n@media (max-width: 1180px) {\r\n    .navbarContainer{\r\n        /* margin: auto; */\r\n        width: 100%;\r\n        position: relative;\r\n        z-index: 20;\r\n    }\r\n    .navbarContainer>div{\r\n        position: absolute;\r\n        width: 100%;\r\n        width: 100%;\r\n        top: 0px;\r\n    }\r\n    .navbar{\r\n        display: flex;\r\n        flex-wrap: nowrap;\r\n        /* background-color: white;\r\n        color: #151515; */\r\n        align-items: center;\r\n        -webkit-user-select: none;\r\n                user-select: none;\r\n        transition: 0.5s;\r\n    }\r\n    .navbar>div{\r\n        flex: 1 1;\r\n        padding-top: 10px;\r\n        box-sizing: border-box;\r\n    }\r\n    .navbarLogo{\r\n        display: flex;\r\n    }\r\n    .navbarLogo>div:first-child{\r\n        margin-left: 10px;\r\n        z-index: 3;\r\n    }\r\n    .navbarLogo>div{\r\n        width: 5px;\r\n        height: auto;\r\n        position: relative;\r\n        transition: 0.25s;\r\n        opacity: 1;\r\n    }\r\n    .navbarLogo>div>svg{\r\n        transition: 0.5s;\r\n        width: 200px;\r\n    }\r\n    .navbarControl{\r\n        display: flex;\r\n        flex-wrap: nowrap;\r\n        justify-content: flex-end;\r\n        padding-top: 0px!important;\r\n    }\r\n    .navbarMenu{\r\n        margin-right: 10px;\r\n        transition: 0.5s;\r\n    }\r\n    .navbarMenu>div>span{\r\n        margin-left: 10px;\r\n        transition: 0.5s;\r\n    }\r\n    .navbarLocale{\r\n        margin-top: 0px;\r\n        padding-right: 20px;\r\n        cursor: pointer;\r\n        position: relative;\r\n    }\r\n    .navbarLocale>div{\r\n        display: flex;\r\n        align-items: center;\r\n        flex-direction: column;\r\n        position: relative;\r\n        border-radius: 4px;\r\n        padding: 4px;\r\n        font-size: 10px;\r\n        box-sizing: border-box;\r\n        border: none;\r\n        border-bottom-left-radius: 0px;\r\n        border-bottom-right-radius: 0px;\r\n    }\r\n    .navbarLocale>div>div{\r\n        display: flex;\r\n        align-items: center;\r\n        justify-content: center;\r\n    }\r\n    .navbarLocale>div>div>svg{\r\n        width: 10px;\r\n    }\r\n    .navbarLocale>div>div>span{\r\n        margin-right: 5px;\r\n        text-transform: uppercase;\r\n    }\r\n    .navbarLocale>div>ul{\r\n        position: absolute;    \r\n        border-radius: 4px;\r\n        margin-top: 0px;\r\n        border-top-left-radius: 0px;\r\n        border-top-right-radius: 0px;\r\n        list-style: none;\r\n        transition: 0.25s;\r\n        padding: 0px;\r\n        border: 1px solid rgb(209, 209, 209);\r\n        overflow: hidden;\r\n        z-index: 3;\r\n        top: 100%;\r\n        opacity: 0;\r\n        width: 90.5%;\r\n    }\r\n    .navbarLocale>div>ul>li{\r\n        position: relative;\r\n        font-size: 10px;\r\n        display: flex;\r\n        text-transform: uppercase;\r\n        padding-left: 7px;\r\n        cursor: pointer;\r\n        transition: 0.25s;\r\n        padding-top: 2.5px;\r\n        padding-bottom: 2.5px;\r\n    }\r\n    \r\n    .langActive{\r\n        padding: 0px!important; \r\n        transition: 0.25s;\r\n        opacity: 1!important;\r\n    }\r\n    \r\n\r\n    .animatedMenu>svg:nth-child(1){\r\n        position: absolute;\r\n        animation-name: menuTop;\r\n        animation-fill-mode: forwards;\r\n        animation-duration: 0.5s;\r\n        animation-iteration-count: 1;\r\n        animation-delay: 0.07s;\r\n        transform: translate(0px, 10px);\r\n    }\r\n    .animatedMenu>svg:nth-child(3){\r\n        position: absolute;\r\n        transform: translate(0px, -10px);\r\n        animation-name: menuBottom;\r\n        animation-fill-mode: forwards;\r\n        animation-duration: 0.5s;\r\n        animation-delay: 0.07s;\r\n        animation-iteration-count: 1;\r\n    }\r\n    .animatedMenu::after{\r\n        content: \"Menu\";\r\n        position: absolute;\r\n        display: flex;\r\n        align-items: center;\r\n        left: -200%!important;\r\n        transition: 0.25s;\r\n        height: 100%;\r\n        width: 100%;\r\n        opacity: 0;\r\n        animation-name: opacityAnim2;\r\n        animation-duration: 0.5s;\r\n        animation-iteration-count: 1;\r\n        animation-fill-mode: forwards\r\n    }\r\n\r\n\r\n\r\n    .openedNavbar{\r\n        display: flex;\r\n        flex-wrap: nowrap;\r\n        transition: 0.35s;\r\n        height: 0px;\r\n        overflow: hidden;\r\n        position: relative;\r\n        border-bottom: none;\r\n    }\r\n    .openedNavbar>div{\r\n        flex: 1 1;\r\n        overflow: hidden;\r\n    }\r\n    .openedNavbar>div>ul{\r\n        margin: 0px;\r\n        padding: 0px;\r\n        list-style: none;\r\n    }\r\n    .openedNavbar>div>ul>li{\r\n        margin-bottom: 15px;\r\n        font-size: 21px;\r\n        font-weight: normal;\r\n        transition: 0.25s;\r\n        cursor: pointer;\r\n        text-align: right;\r\n        margin-right: 10px;\r\n    }\r\n    .openedNavbar>div>ul>li:hover{\r\n        transition: 0.25s;\r\n        color: #43ac3c!important;\r\n    }\r\n    .openedNavbarText{\r\n        margin-bottom: 50px;\r\n        position: relative;\r\n    }\r\n    .openedNavbarText>svg{\r\n        position: absolute;\r\n        height: 100%;\r\n        width: 100%;\r\n        z-index: -1;\r\n        transition: 0.25s;\r\n        opacity: 0;\r\n        top: 0px;\r\n        right: 0px;\r\n    }\r\n    .openedNavbarText>div{\r\n        display: flex;\r\n        height: 100%;\r\n        justify-content: flex-end;\r\n        align-items: flex-end;\r\n        padding-left: 10px;\r\n    }\r\n    .openedNavbarText>div>a{\r\n        color: #43ac3c;\r\n        font-size: 18px;\r\n        display: none;\r\n    }\r\n    .langNtheme{\r\n        display: flex;\r\n        flex-wrap: nowrap;\r\n    }\r\n    \r\n    .activeLogo{\r\n        transition: 1s;\r\n        transform: translate(-100px);\r\n        opacity: 0!important;\r\n    }\r\n    .activeLogo>svg{\r\n        width: 180px!important;\r\n    }\r\n    .activeLogoSize>svg{\r\n        width: 180px!important;\r\n        transition: 0.5s;\r\n    }\r\n    .activeNavbar{\r\n        height: 180px;\r\n        transition: .5s;\r\n    }\r\n    .activeNavbar>div>svg{\r\n        opacity: 1;\r\n        transition: 0.25s;\r\n    }\r\n    .navCloseIcon{\r\n        position: relative;\r\n        margin-left: -24px;\r\n        margin-top: 3px;\r\n        opacity: 0;\r\n        transition: 0.25s;\r\n    }\r\n    .navCloseIcon>svg:last-child{\r\n        position: absolute;\r\n        left: 0px;\r\n    }\r\n    @keyframes closeAnimOne {\r\n        0%{\r\n            transform: translate(-30px, 30px);\r\n            opacity: 0;\r\n        }\r\n        100%{\r\n            transform: translate(0px, 0px);\r\n            opacity: 1;\r\n        }\r\n    }\r\n    @keyframes closeAnimTwo {\r\n        0%{\r\n            transform: translate(30px, 30px);\r\n            opacity: 0;\r\n        }\r\n        100%{\r\n            transform: translate(0px, 0px);\r\n            opacity: 1;\r\n        }\r\n    }\r\n    \r\n    .opacityNone>svg{\r\n        opacity: 0;\r\n        transition: 0.25s;\r\n    }\r\n    \r\n    .opacityBlock{\r\n        opacity: 1;\r\n        transition: 0.25s;\r\n    }\r\n    @keyframes opacityAnim {\r\n        0%{\r\n            opacity: 0;\r\n        }\r\n        100%{\r\n            opacity: 1;\r\n        }\r\n    }\r\n    @keyframes opacityAnim2 {\r\n        0%{\r\n            opacity: 0;\r\n        }\r\n        100%{\r\n            opacity: 1;\r\n        }\r\n    }\r\n    .menuNameClass::after{\r\n        content: \"Close\";\r\n        position: absolute;\r\n        display: flex;\r\n        align-items: center;\r\n        left: -200%;\r\n        transition: 0.5s;\r\n        height: 100%;\r\n        opacity: 0;\r\n        width: 100%;\r\n        animation-name: opacityAnim;\r\n        animation-duration: 0.5s;\r\n        animation-iteration-count: 1;\r\n        animation-fill-mode: forwards;\r\n    }\r\n    .opacityBlock>svg:first-child{\r\n        animation-name: closeAnimOne;\r\n        animation-duration: 0.5s;\r\n        animation-fill-mode: forwards;\r\n        animation-iteration-count: 1;\r\n    }\r\n    \r\n    .opacityBlock>svg:last-child{\r\n        position: absolute;\r\n        left: 0px;\r\n        animation-name: closeAnimTwo;\r\n        animation-duration: 0.5s;\r\n        animation-fill-mode: forwards;\r\n        animation-iteration-count: 1;\r\n    }\r\n\r\n    .langNthemeSpecial{\r\n        flex-direction: row-reverse!important;\r\n    }\r\n\r\n\r\n}", ""]);

// exports


/***/ }),

/***/ "./node_modules/css-loader/index.js?!./node_modules/postcss-loader/src/index.js?!./src/page/About/css.css":
/*!***********************************************************************************************************************!*\
  !*** ./node_modules/css-loader??ref--6-oneOf-3-1!./node_modules/postcss-loader/src??postcss!./src/page/About/css.css ***!
  \***********************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(/*! ../../../node_modules/css-loader/lib/css-base.js */ "./node_modules/css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/***/ }),

/***/ "./node_modules/css-loader/index.js?!./node_modules/postcss-loader/src/index.js?!./src/page/Home/css.css":
/*!**********************************************************************************************************************!*\
  !*** ./node_modules/css-loader??ref--6-oneOf-3-1!./node_modules/postcss-loader/src??postcss!./src/page/Home/css.css ***!
  \**********************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(/*! ../../../node_modules/css-loader/lib/css-base.js */ "./node_modules/css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/***/ }),

/***/ "./src/App.js":
/*!********************!*\
  !*** ./src/App.js ***!
  \********************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-router-dom */ "./node_modules/react-router-dom/dist/index.js");
/* harmony import */ var _layout_Footer__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./layout/Footer */ "./src/layout/Footer/index.js");
/* harmony import */ var _layout_Navbar__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./layout/Navbar */ "./src/layout/Navbar/index.js");
/* harmony import */ var _page_About__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./page/About */ "./src/page/About/index.js");
/* harmony import */ var _page_Home__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./page/Home */ "./src/page/Home/index.js");
var _jsxFileName = "/Users/vfhome/projects/dana_kerwen/src/App.js";






function App() {
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "App",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 10,
      columnNumber: 5
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_1__["BrowserRouter"], {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 11,
      columnNumber: 7
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_layout_Navbar__WEBPACK_IMPORTED_MODULE_3__["default"], {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 12,
      columnNumber: 9
    }
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_1__["Routes"], {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 13,
      columnNumber: 11
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_1__["Route"], {
    exact: true,
    path: "/",
    element: /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_page_Home__WEBPACK_IMPORTED_MODULE_5__["default"], {
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 14,
        columnNumber: 44
      }
    }),
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 14,
      columnNumber: 13
    }
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_1__["Route"], {
    exact: true,
    path: "/About",
    element: /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_page_About__WEBPACK_IMPORTED_MODULE_4__["default"], {
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 15,
        columnNumber: 49
      }
    }),
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 15,
      columnNumber: 13
    }
  })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_layout_Footer__WEBPACK_IMPORTED_MODULE_2__["default"], {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 17,
      columnNumber: 9
    }
  })));
}
/* harmony default export */ __webpack_exports__["default"] = (App);

/***/ }),

/***/ "./src/assets/fonts/Majorant-Bd.ttf":
/*!******************************************!*\
  !*** ./src/assets/fonts/Majorant-Bd.ttf ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "static/media/Majorant-Bd.5cf92433.ttf";

/***/ }),

/***/ "./src/assets/fonts/Majorant-Lt.ttf":
/*!******************************************!*\
  !*** ./src/assets/fonts/Majorant-Lt.ttf ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "static/media/Majorant-Lt.e68b9395.ttf";

/***/ }),

/***/ "./src/assets/fonts/Majorant-Rg.ttf":
/*!******************************************!*\
  !*** ./src/assets/fonts/Majorant-Rg.ttf ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "static/media/Majorant-Rg.4796936e.ttf";

/***/ }),

/***/ "./src/assets/fonts/Majorant-Th.ttf":
/*!******************************************!*\
  !*** ./src/assets/fonts/Majorant-Th.ttf ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "static/media/Majorant-Th.73145876.ttf";

/***/ }),

/***/ "./src/assets/img/OrderBlank.jpg":
/*!***************************************!*\
  !*** ./src/assets/img/OrderBlank.jpg ***!
  \***************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "static/media/OrderBlank.3a2be7c1.jpg";

/***/ }),

/***/ "./src/assets/img/logo.png":
/*!*********************************!*\
  !*** ./src/assets/img/logo.png ***!
  \*********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "static/media/logo.3b20b80c.png";

/***/ }),

/***/ "./src/assets/img/otherPhotos/1h.png":
/*!*******************************************!*\
  !*** ./src/assets/img/otherPhotos/1h.png ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAJYAAAA9CAYAAABP2pDPAAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAAyNpVFh0WE1MOmNvbS5hZG9iZS54bXAAAAAAADw/eHBhY2tldCBiZWdpbj0i77u/IiBpZD0iVzVNME1wQ2VoaUh6cmVTek5UY3prYzlkIj8+IDx4OnhtcG1ldGEgeG1sbnM6eD0iYWRvYmU6bnM6bWV0YS8iIHg6eG1wdGs9IkFkb2JlIFhNUCBDb3JlIDYuMC1jMDA1IDc5LjE2NDU5MCwgMjAyMC8xMi8wOS0xMTo1Nzo0NCAgICAgICAgIj4gPHJkZjpSREYgeG1sbnM6cmRmPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5LzAyLzIyLXJkZi1zeW50YXgtbnMjIj4gPHJkZjpEZXNjcmlwdGlvbiByZGY6YWJvdXQ9IiIgeG1sbnM6eG1wPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvIiB4bWxuczp4bXBNTT0iaHR0cDovL25zLmFkb2JlLmNvbS94YXAvMS4wL21tLyIgeG1sbnM6c3RSZWY9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9zVHlwZS9SZXNvdXJjZVJlZiMiIHhtcDpDcmVhdG9yVG9vbD0iQWRvYmUgUGhvdG9zaG9wIDIyLjEgKFdpbmRvd3MpIiB4bXBNTTpJbnN0YW5jZUlEPSJ4bXAuaWlkOjQzMjBFQjI0QjI2NzExRUJCODFDODUwMzM1MDBERDUyIiB4bXBNTTpEb2N1bWVudElEPSJ4bXAuZGlkOjQzMjBFQjI1QjI2NzExRUJCODFDODUwMzM1MDBERDUyIj4gPHhtcE1NOkRlcml2ZWRGcm9tIHN0UmVmOmluc3RhbmNlSUQ9InhtcC5paWQ6NDMyMEVCMjJCMjY3MTFFQkI4MUM4NTAzMzUwMERENTIiIHN0UmVmOmRvY3VtZW50SUQ9InhtcC5kaWQ6NDMyMEVCMjNCMjY3MTFFQkI4MUM4NTAzMzUwMERENTIiLz4gPC9yZGY6RGVzY3JpcHRpb24+IDwvcmRmOlJERj4gPC94OnhtcG1ldGE+IDw/eHBhY2tldCBlbmQ9InIiPz7oa9AdAAAMwklEQVR42uxdDZAUxRXuvTsO5B8CBxx/p/wooRIxxW8SERC1IECkghUxJAESjRqDhIT4UxELAxhLNJD4FyKQxCJi+RcpU4BGCOUZNNHjRyhF/v9EhOMQ7o7juL3Ne7nX7rtn98zs3uzu3N68qq92tudNz5vuN92vX7/uicRiMRXS5zQS8F3ACcC7gFcDJNtkwCBAZ8BfAO8EuSDzQl2qR9MAN9PxxoAp1jxSLKSKoCtWTqhL9SjCji9kSIalgJmG9BqLnJrmAxaELVYwqZwdl2Xg/g8BZtHxacBLFnkqxHU/pxZNX/cIIKM2TlNpsS4C3A1om0B55HvI92EfZcT7/Yr9fxFwnXgG0/FPAI8KmfIzXeBNQbFQmZ4HPEiV5UQd2XEnF94XAL8kO6ynD3JWG7qydcyuOsHSd9PvRMBT4prZgPOhYqWeFgG+RcdjHZQrwirsIDs20XLAd+gY8/6pT7LeZ8hrC6AQcIylnQVMAqwRvJPIRss8obshyzEScCRWn/7h4bocS/qK2BdpmM8y32G4xw52vNNwfnyQyr0pKBYiAjghKmI9ID/BfF4zVGiyMt1G17dNQLlsNNGSB6afBcwJFSt1aA44wyrjuiTymMCur22ALItZPlEHvh95UKoJlmv7AKoY37x0lndT8mOhQVsEOAq4ErDeMGTfDNgD2AvYALhX8LxKdtongF4NkKWXsHNrHGy57znkM8HixP0KYBugOUv7UmhjpRadxf8RgD0OLcJJwGBxTRcfuuZnxH2wy2pp4Z8ueGsA37bwXkZ5cZofdoXpxTDRPdoIu73hKbj/anEftAM7WXi3Mr4nLDz9ARUiz0WZKNumPqWD3Ugbj1M9zwFa+Hz/GwGPC9/Ze4AeBt7t7Ng0T3gFYCugpXBf3Bv6sdJL8z04QaVdlIq5uDsAT4v7vAXoJvi4jdRdnPuyqovG4B75ezI5d5iNc4VfB4ygubIqennQ+34A8DfGd0sSeV8t/t9EzkscGFyg1iKHFGOz4fqRJFsNedpryaOOYTDTWIvYi1quWVRHrQGXsHxGAU4BDgMuo3lC3kgcoPtfCxhIsjWnlncj5Z1SimRhPBZO3E42pFcCWon/FyWYN1bYVYBD9L9c5KlpNWCqIf0V8o5bx1LKHLngJy2j+cWwK0yQKi3ppYZKTHgQDchl/09a+KKW9BoPtlw63C5hV5gEof9mGHUzFfTyoL3yX8FXLQxdr5VyiP3fSspSRcAuFyMLSizXYxc0GHCOECE5SqhbbWPgLyc5BzJ5P6X5zJPUFV4srttDeXYl26ya8sYXY2e2+rGuZ76YUsApF5wGHEtgKgW791z61Wl5lMb51sYSp+dFHrliTjFC93J6/jziixjKhNMUcd06dm6BZXqIU39DubjJhnQecJzqJkZ1gHTOQ32VEW+bTLRYBfSLXUpHj9e0S7C7inrogqY5dGU2+p1Llxfz0N3J82izrTK4IV4QaWfY8XFx7klqKZewNBxADAXsT0A2RfkUsP8d6LdFAu6WSCZsrM8C0mWWkp/HK2Gc0799lgG7v3+JLnk6+cycXi5TvWG4zBzhE9tHI9F0U9SpxWpPLUrEo6abqBnZcXtVPIY8ooJDC2hkeJcwyiUtUv7HOU0xtFQzyfUg6VLAaPb/dsDLwt7TLSo+z0KWtolcMJvTWrKGfvZSEfvjB41m+d9oOH8AUAzYBnifYTvJ8o6P4Sr3ow0g0sYCtgDKycaooqmedwFTBW8PwAMNtDNnGp5nhkOUQoWBv8Qh5OYhA//VHuRC+oieewv930r21S5D/RQTv6RWMuPusdTQlS6KNcrjxG1DBw6LWaW0NpzvCRgHuAZQaDjfCrCZ8vhzA+R406NSFQEqHcp1t2FQorFQ8L6VosFYL8AFN8XalSLFGuaiWKPTMBr9rbhnMcVoJZJHschjZQPk0XndbDnfg1pPN/rE4R665VqbwnK9mCbprYo1IJY6Gu6iWDekWKkWG+45MMloiHMinxUNkGuMg1KdtZRlNAHlwtasL6B9Cst2sKkrzBGjkUxRTQrzxmH7LwwDk52GWQh0QWyg4fscQ14YVdBDyDsD8ESSsm0wpHUh52ZrlnY/4A9Mzp+JkSNec8wyA4DO0tPprjuuWGNUdtIi8b+jxeWBfp5v0ujrVlUXnWlzU/QWact9krUPeds7szRcxPoAKY+mCvJ1/YmloZf9SAZG3RE3xboiSxUL3/5ryF80TtlXOMsJYKc5tY9VXfjvB4DLlT/RAp2odeEhMdhK3c0UR5MObcYIDR6a3J2mslpmutC1YrVx8eM0dvonKdc6Fz4+ge3WfeygFm67TzKWUZ6aHlPx5fZK1d9Lgsey46LVtcLjXpXpAtcO0q+p7CcvdlwzduwlsvSUn95qagVxoewusqM4ObVC4+maclJ2FRTFulyFpMRcWKa6k36W9FaWFot75wNDOU2oxfJCuivCKai3AybbJpJLkW0XaNIt1pBQp/5PS1T9CIEg0SxhcwWadIvVP9SpkPxWrLYq3IAtpBQoVkFYDCGlQrGKwmIIKVtbrHCT3cZL1imd9gEQriKsn0ZLlTbFahcA4Y6G9dNoCRd5lMvEPOW+k3A6CCdbcY0ehorkhnXVaEhPxrc2KVaLAAh4FSGkLDLeo2m4T43lOKQsVqx0UAd23CUs9qyn/GQ87lUOrU+OinvxMXBOz8LzVvECO1+tEo941Ct6Y2LIy+9dS4gauv4guTZqDWWYSzLmiDKOOjQOuQnw62uasfKMJlFWNSS/rBsMN4p6VSyMG/+rqovR1q6BnmT41zJhccn6cZe8lhEaQgMMD4Qx3zrkGB+uGxVOjCkfLjc/FyDFwhevLytDvTgYN/3QgYZoGBeKZ5HPjmWuI2NxwSpGkuYr+446p1g95VNdNmf8OVSWRxxkL6SeqJbJkUN5ncG1eovVFxcb8NZpuKrbwUULjRuA4a7BpZZrBpH2n2eF1ZUNEirooSIJtlY59CAHHdwTvYlvv+U8VtJQlZnYcNlSYcVsV/ZQ6SL2MnghVCaMIdvtkR/rBF1Nuxx4BlOvUkWyfN4i0SjeoV8xL43Su/jqJT6DaJEnpw8Nq2tnxlJP+w1LkJbSrjSa8HiZge/ZWLBonUHGRwCfMZ4Ky7No4I7Ihxl/GT2njf9O8aWOavowQkfBd4OL7JPddk22KdYkYprhcoNbWIZT01AZR8VD/MeB97jgfS5givW6kO9ggi/U2w78+HJ1EPzLXOTpw3gnu/BOSmbXZIyeXEPN9QqWfhP1xdeztD+q+AqfyjR0I2XCXtNBimj/4SZkuIJlJaXhPCjfYfhswEZPXJ7XVHz1DW53iUvB+qn4Nwuxa3yZ8WNA4jA6xgUUA6k7fJLS2lG6JtweUn89Fk2BkWRazGU8e9ixmy1anUxXeCdp3kts9e0lho34T9L5NZQ2Lg1v+Qd0r64sbbmlS9HUz+EDS5mkV0iuQpc93B9m57uyDTz0N4Ek/2x2Xn/84BgzYZRDt/dDSvuBi+zTk2mx3qDfb9Avflxxn+A5oeJhvBPT2GJpd8UQNqw27WXOByTTmNEcJNKugSks7XYDH24dfoYZ1H3Yue8b+JfQIEcPprSxjjTbwI/fc9Rx9DNZC/ob4keZ8HN3t6m6dY74ncbXnR7M5KuoZiM+PZLbZ7l+r/gfTWOl6OVZHzm4OCpppNSF+YiCRFoevd+8bVO6choJt6Xn4aFOn1quOUCjZNyDlK+s/tChLgeo+P7yOPKf1xDPu4xuyFfx1bi6wkZZrh8jCqRbGipDf810P/NpDbK8NHoJ1zZRgUEhPSOxk9lFpq9S9Ge+u1JVf9+JkRa3ygg6PqTqf511vEUWnU+JHw+GhV+s6tYVYqvUnt5yvTcnGov4neKp1PStZNfiV6l+TMdPM61/g1q9Sh99Rdr5hgqvd6bbQd0DvsWryD/F47p2igGGbt7RwH9P1V+cmm7C8sGoAL0yGzf4WE3Hm0RXh/QsO97EZh6wfNeTIvHe4kUV/y60XsaG21zizn6469+bgPcZ/zMqHuXiz86FLlvUtBU+Dxze3grYJLbVaZGhjyzJ3YIfpd32OC1sJB+MmmOQe5FIm8v4J4lzSwD3iY3a+KBmqOBfRUY+35F6Yzq//oW7/H1sGRngTm69M1wh8xxGLitjjetrZEsdnmWxgf8uB/6/G/idfFPb/HyWRD55gtsBXUt2ywXqVuYGxFb5qqrb0LWIRn5o6GLw4NpGGBmAI/F72PTUARqd2VZmY5f6a/J55ZE99XtV93kVE7WishlCXWkZmRJP+fkQiSgWOkbHkhPvMNlSQZrQ7UsOwzyyoXaoxksDmDulxMOzFJH9hKP4LQQnKiAFLiBbtNjvB/ifAAMA6KdMtsGOcLEAAAAASUVORK5CYII="

/***/ }),

/***/ "./src/assets/img/otherPhotos/safety.png":
/*!***********************************************!*\
  !*** ./src/assets/img/otherPhotos/safety.png ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAEIAAABSCAYAAADgggJzAAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAAyNpVFh0WE1MOmNvbS5hZG9iZS54bXAAAAAAADw/eHBhY2tldCBiZWdpbj0i77u/IiBpZD0iVzVNME1wQ2VoaUh6cmVTek5UY3prYzlkIj8+IDx4OnhtcG1ldGEgeG1sbnM6eD0iYWRvYmU6bnM6bWV0YS8iIHg6eG1wdGs9IkFkb2JlIFhNUCBDb3JlIDYuMC1jMDA1IDc5LjE2NDU5MCwgMjAyMC8xMi8wOS0xMTo1Nzo0NCAgICAgICAgIj4gPHJkZjpSREYgeG1sbnM6cmRmPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5LzAyLzIyLXJkZi1zeW50YXgtbnMjIj4gPHJkZjpEZXNjcmlwdGlvbiByZGY6YWJvdXQ9IiIgeG1sbnM6eG1wPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvIiB4bWxuczp4bXBNTT0iaHR0cDovL25zLmFkb2JlLmNvbS94YXAvMS4wL21tLyIgeG1sbnM6c3RSZWY9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9zVHlwZS9SZXNvdXJjZVJlZiMiIHhtcDpDcmVhdG9yVG9vbD0iQWRvYmUgUGhvdG9zaG9wIDIyLjEgKFdpbmRvd3MpIiB4bXBNTTpJbnN0YW5jZUlEPSJ4bXAuaWlkOkNDRDA3N0ExQjgwOTExRUI5MEVCRjBDMUExRTNBODAwIiB4bXBNTTpEb2N1bWVudElEPSJ4bXAuZGlkOkNDRDA3N0EyQjgwOTExRUI5MEVCRjBDMUExRTNBODAwIj4gPHhtcE1NOkRlcml2ZWRGcm9tIHN0UmVmOmluc3RhbmNlSUQ9InhtcC5paWQ6Q0NEMDc3OUZCODA5MTFFQjkwRUJGMEMxQTFFM0E4MDAiIHN0UmVmOmRvY3VtZW50SUQ9InhtcC5kaWQ6Q0NEMDc3QTBCODA5MTFFQjkwRUJGMEMxQTFFM0E4MDAiLz4gPC9yZGY6RGVzY3JpcHRpb24+IDwvcmRmOlJERj4gPC94OnhtcG1ldGE+IDw/eHBhY2tldCBlbmQ9InIiPz763DDRAAAHRklEQVR42uxcaYwUVRB+sw7HgpyeECALQiAqqEQRYUVUxOyKKMiCGhOj/uCH8RajIVF+CEaFqEQRMUrUyOUVkUuRSzyQQ1DEoCAioqAIsoKcK2t9ma+1ePb0zux090zPTCVfZrrnTXe/r6te1at3xCoXXWayIC0FFwgGC64QxAUfCmYLPhfsDvuB4iHeq6Ogj2CQoJ+grfX7GYKRgp2CTwTv8XNz1IkoEZwjGMC3fpHgxBT+d7rgOuKgYAW1ZaFgraAmCkQ0E/SkysPmepAQNzkk+IrmcJT/OVfQVJUpFVxKjBWsFyzlf1YL9vr14DEf2oj2fNtXCfoLOniU/U2wUjCfb3iT9TvMpYLX6i1o43GtnwXLaUKfCrZmg4izqO5Q+3JBC4+y3wsWUb2XkYxUpAWJxX0uF3TzKLufZDgm9KWgNggimlBtHZXH9wZJyh4RfC2Ywwf7QvBXhlrXiCaHe1/NtqdxkrJ/0+RgQu/y/vsyIQJqeaGgkm+kk8d19lDlFwg+EGxM942kKV2ojRV8xlM9yv5ITcSL+UywPRUiurLSUMeLBSfVcYPFfOtLBDtMduQUwSUkBs/e2aNsteBjmg+ee4Mmoi399wCqXzKVq+Ef5/OtrxH8aXJLmrIOlzNe6S5omKQsPNU6vswXQMRHfPtucpDqtID4hjYYBYlRwwfSvPvQvbvJmjg9gJadVJ85YUZ2AUgt2ypgoqCMbt6JbNupsp3iVqQ2SjA1G7F+CLKVmM6+TpVgimP2dtS3Jk9JsGUvvdxx/QEtjU3hSGMvIgpJYkUiknSVi1IkokhEkYgiEUUiikQUiSgSkYHE86QeSMjcZRJDBJP4WXBEYNDoLZNIwEBOEDxZaKbRxCKh3j3okoibwxsWCfMET9Wn9xmPOAkV6txcwQhTzzGUeETNYZYLCcMFBwrFfTqaUOknCVHTCDdzeJ/mcCDTi5dE2BxAwjCT+bhqZIhwMwcMNmEiyf5cD7Exev2o4FXjPRZZlyAmmGGRgCkGVX5pQtBtxA2C0fxeTpX+Ns1rlJKEQRYJQ/3UhKA1Qg8Od2Sg07kemjDYhYRABp6DIuIdwTh13CkNMkDCzDBJCJKIWpqGJqNLCmSgbXk9JBJCHeBJhwyQMI2VDk0TwnSfqZDRkJqQFRIcImpDIGa0lSNwyCjjPacxLgiTBG0atXCfR9WJBgHe+AF+jlJkYI7kVstFYirPEJPCTDgfQ4caHBy0QlkTIhlnE44spWbsC8EaStX3w1DLanWiRQgPADImuJzHXK5rjY/Tiuswiebq3AEQsUedODmk/sP9gqfV8XKaQ3UI93baxFY6AIRp/KpOtAmxM3WPSczSw2z8iSGRoOU09X0XiNAzUctCfpgXs9ir1ZPnt8M0tqgTXU3hzKPSccyWEqtX2J7Id4FT0LP9vyuhne5WccSZBaINzkR2pPnWl5AErRX9CoCI85UbxczibU5IvUIVutIkhs3yWXTGC5NsjzlEzLMazHw2j9YmkTVzZL7uZGE67g4Vg4/Ic21oze/VDOv/JQKx/VxVeDjzA/kot6jvWLyyy+52v2Z1k6/J00ZSO4NX3PIPWCW32gqB863RvE91vzcx7/E/IrBu41l13DvPtAJr0avU8SSjhgrtjBSyxxvV8Vir3x6LMBFPKA1H/2qq/tEm4hAr70g3lURxurBRnFxym0ksptWkVHsRAZnG/IAjDwl6qeNjEdMMNPw6X4rFsVPsQm5EoKJ3Cg7zGL3Rl01iHZSd3Mh1KaVnaKXqdoeqmycREKyHHKOOsRLwpQi2Ec+bxMo+R8abRErQpEqEY0dz1PFQXigqgtH4m9UxzP3hZIW9iIAa3Wp5kXt5g1yXR8x/o/GQnwQ3uZlEKkQYhp9Ir+9U53CDCTlMwnjLrPeyDtu8/pSKK0TiBmn23y3NwBBdsxwiAFmnGYwejepDYXrRqrr+nGpMgJ2AMBqlM943stPSPQdIOM8kRshGWJowRIfRfhDhkDHQajN6sRUemUUS4OqxP0RPdQ5bOlSkSkK6RDjBCLYkWKjOIb6YLHjbeG9/4rf0YOrgGctEsbAfm2KsSOdi9QmXf2FyY5wVWA2h1oxRiY8gBBtnPGYS2zlUWr+BFGwCsiXdi9a331BD74H85gZ1vjld12qqrJ9jqS3ZSOPaD5rjB6w3s6d8tzl+UDtwIhxZyMgN2qFnunXk28EGWhj0bZfBPdqx4mvptjtYnUTMxsc+M7MzqYgfPcl91A4QMt0yFxDyOEP2ySa9oYK+DJHX0RTKrN/RJpVTS/ZkWolYAJv29aUvH2zcM1yrWAnMvLPnXnamig9jYshN5lIzlvj50LEAdy+Ea72dFXNrKw6TlDfZ5gyjipcm0Tr0e56jV/Bdgpydv5KAeVxP9FC/N6Jql9cR1c6kyW0K0heHsUzhB9r4BFa6im4v2Z522IMOk85nMVg7FMIzhrpe4wjD4MV0s31oDv3Zlixj24Hu8h9hh6f/CDAAEWyV3Pb8P0wAAAAASUVORK5CYII="

/***/ }),

/***/ "./src/assets/img/poster/main1.jpg":
/*!*****************************************!*\
  !*** ./src/assets/img/poster/main1.jpg ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "static/media/main1.903d20f0.jpg";

/***/ }),

/***/ "./src/assets/img/poster/main2.jpg":
/*!*****************************************!*\
  !*** ./src/assets/img/poster/main2.jpg ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "static/media/main2.a922e5a0.jpg";

/***/ }),

/***/ "./src/assets/img/svg/icons.js":
/*!*************************************!*\
  !*** ./src/assets/img/svg/icons.js ***!
  \*************************************/
/*! exports provided: MenuLine1, MenuLine2, MenuLine3, Closelineleft, Closelineright, Localeicon */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MenuLine1", function() { return MenuLine1; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MenuLine2", function() { return MenuLine2; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MenuLine3", function() { return MenuLine3; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Closelineleft", function() { return Closelineleft; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Closelineright", function() { return Closelineright; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Localeicon", function() { return Localeicon; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
var _this = undefined,
  _jsxFileName = "/Users/vfhome/projects/dana_kerwen/src/assets/img/svg/icons.js";

var MenuLine1 = function MenuLine1() {
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("svg", {
    width: "25",
    height: "18",
    viewBox: "0 0 25 18",
    fill: "none",
    xmlns: "http://www.w3.org/2000/svg",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 5,
      columnNumber: 9
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("line", {
    y1: "-1",
    x2: "25",
    y2: "-1",
    transform: "matrix(-1 -1.11471e-07 -6.85628e-08 1 25 2)",
    stroke: "#fff",
    strokeWidth: "2",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 6,
      columnNumber: 13
    }
  }));
};
var MenuLine2 = function MenuLine2() {
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("svg", {
    width: "25",
    height: "18",
    viewBox: "0 0 25 18",
    fill: "none",
    xmlns: "http://www.w3.org/2000/svg",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 12,
      columnNumber: 9
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("line", {
    y1: "-1",
    x2: "25",
    y2: "-1",
    transform: "matrix(-1 -1.11471e-07 -6.85628e-08 1 25 10)",
    stroke: "#fff",
    strokeWidth: "2",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 13,
      columnNumber: 13
    }
  }));
};
var MenuLine3 = function MenuLine3() {
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("svg", {
    width: "25",
    height: "18",
    viewBox: "0 0 25 18",
    fill: "none",
    xmlns: "http://www.w3.org/2000/svg",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 19,
      columnNumber: 9
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("line", {
    y1: "-1",
    x2: "25",
    y2: "-1",
    transform: "matrix(-1 -1.11471e-07 -6.85628e-08 1 25 18)",
    stroke: "#fff",
    strokeWidth: "2",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 20,
      columnNumber: 13
    }
  }));
};
var Closelineleft = function Closelineleft() {
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("svg", {
    width: "22",
    height: "22",
    viewBox: "0 0 22 22",
    fill: "none",
    xmlns: "http://www.w3.org/2000/svg",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 27,
      columnNumber: 9
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("line", {
    x1: "1.29289",
    y1: "21.2929",
    x2: "21.2929",
    y2: "1.29289",
    stroke: "#fff",
    strokeWidth: "2",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 28,
      columnNumber: 13
    }
  }));
};
var Closelineright = function Closelineright() {
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("svg", {
    width: "23",
    height: "22",
    viewBox: "0 0 23 22",
    fill: "none",
    xmlns: "http://www.w3.org/2000/svg",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 35,
      columnNumber: 9
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("line", {
    x1: "22.3103",
    y1: "20.7241",
    x2: "1.31034",
    y2: "0.724138",
    stroke: "#fff",
    strokeWidth: "2",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 36,
      columnNumber: 13
    }
  }));
};
var Localeicon = function Localeicon() {
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("svg", {
    width: "12",
    height: "12",
    viewBox: "0 0 12 12",
    fill: "none",
    xmlns: "http://www.w3.org/2000/svg",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 43,
      columnNumber: 9
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("path", {
    fillRule: "evenodd",
    clipRule: "evenodd",
    d: "M5.43474 0.0243174C4.29225 0.12586 3.11192 0.60938 2.20437 1.34759C1.9376 1.56459 1.51523 1.99027 1.30247 2.2566C0.764502 2.92997 0.323657 3.8408 0.140823 4.65659C0.0260052 5.16903 0 5.41813 0 6.00596C0 6.5938 0.0260052 6.8429 0.140823 7.35533C0.327647 8.18891 0.779993 9.11277 1.33584 9.79593C1.55287 10.0627 1.9786 10.485 2.24497 10.6977C2.91843 11.2356 3.82939 11.6764 4.64529 11.8592C5.15779 11.974 5.40693 12 5.99484 12C6.58275 12 6.83189 11.974 7.34439 11.8592C7.95784 11.7217 8.75994 11.379 9.28704 11.0292C10.2012 10.4223 10.9033 9.62389 11.3827 8.64603C11.7709 7.8542 11.9612 7.10092 11.9955 6.22116C12.0502 4.81918 11.6028 3.44686 10.7167 2.29813C10.5188 2.04149 9.95984 1.48264 9.70317 1.2847C8.46323 0.328477 6.97081 -0.112192 5.43474 0.0243174ZM5.78361 1.61317V2.80561L5.2524 2.83495C4.56155 2.87313 3.92416 2.94768 3.29952 3.0634C3.19186 3.08332 3.1004 3.09618 3.09627 3.09196C3.08282 3.07826 3.24509 2.69572 3.36641 2.45513C3.84645 1.50315 4.46516 0.858673 5.17971 0.566294C5.34403 0.49906 5.62143 0.425092 5.71906 0.422487L5.78361 0.42075V1.61317ZM6.46425 0.457101C7.17932 0.624305 7.85612 1.16983 8.36378 1.98827C8.55708 2.29987 8.92294 3.06183 8.89363 3.09175C8.88961 3.09586 8.76646 3.07823 8.61998 3.05256C7.90977 2.92818 7.43827 2.87369 6.73728 2.83495L6.20607 2.80561V1.61317V0.42075L6.25888 0.421102C6.28794 0.42129 6.38034 0.437506 6.46425 0.457101ZM3.99746 0.912155C3.74473 1.17072 3.48874 1.48804 3.29593 1.78185C3.11875 2.05182 2.80922 2.67734 2.70947 2.96702L2.63671 3.17832L1.83816 3.3156C1.39895 3.3911 1.03385 3.44711 1.02683 3.4401C1.0104 3.42367 1.12813 3.21542 1.31747 2.92602C1.84285 2.12295 2.60088 1.44758 3.4867 0.993305C3.63167 0.918961 4.14016 0.705807 4.17748 0.703742C4.19128 0.702991 4.11026 0.796766 3.99746 0.912155ZM8.07566 0.804722C9.13509 1.23044 10.0542 1.9813 10.6722 2.92602C10.8616 3.21542 10.9793 3.42367 10.9628 3.4401C10.9558 3.44711 10.5907 3.3911 10.1515 3.3156L9.35297 3.17832L9.28021 2.96702C9.18046 2.67734 8.87093 2.05182 8.69375 1.78185C8.50094 1.48804 8.24495 1.17072 7.99222 0.912155C7.87942 0.796766 7.79472 0.702358 7.80401 0.702358C7.81331 0.702358 7.93554 0.748424 8.07566 0.804722ZM5.78361 4.50406V5.79476H4.18687H2.59015L2.604 5.54248C2.63505 4.97683 2.74095 4.28982 2.87395 3.79107C2.91141 3.65062 2.94507 3.53345 2.94873 3.53068C2.95242 3.52794 3.18778 3.4872 3.47177 3.44017C4.26871 3.30819 5.03455 3.22831 5.61345 3.21676L5.78361 3.21336V4.50406ZM6.79962 3.23783C7.33 3.26998 7.88297 3.33511 8.51791 3.44022C8.8019 3.48722 9.03727 3.52794 9.04095 3.53068C9.04461 3.53345 9.07827 3.65062 9.11573 3.79107C9.24873 4.28982 9.35463 4.97683 9.38568 5.54248L9.39953 5.79476H7.80281H6.20607V4.50406V3.21336H6.30087C6.353 3.21336 6.57742 3.22439 6.79962 3.23783ZM2.49775 3.63739C2.49775 3.65119 2.47207 3.7647 2.44069 3.88966C2.32618 4.34544 2.23901 4.95266 2.20336 5.54248L2.18812 5.79476H1.28632H0.384516L0.395242 5.74196C0.401133 5.71293 0.412188 5.59939 0.419816 5.48968C0.44744 5.09259 0.556202 4.58819 0.707493 4.15564C0.754199 4.02209 0.803862 3.90843 0.817851 3.90308C0.849723 3.89083 2.4007 3.61789 2.45667 3.61467C2.47928 3.61336 2.49775 3.62359 2.49775 3.63739ZM10.3446 3.75477C10.7976 3.83313 11.175 3.90144 11.1833 3.90656C11.1916 3.91167 11.2363 4.02443 11.2827 4.15716C11.4335 4.58821 11.5423 5.09313 11.5699 5.48968C11.5775 5.59939 11.5885 5.7129 11.5944 5.74196L11.6052 5.79476H10.7034H9.80156L9.78632 5.54248C9.75067 4.95266 9.6635 4.34544 9.54899 3.88966C9.48879 3.6499 9.48302 3.6123 9.50646 3.6123C9.51444 3.6123 9.89159 3.67641 10.3446 3.75477ZM2.20336 6.46944C2.23927 7.0638 2.32529 7.65984 2.44388 8.13644C2.47693 8.26917 2.49859 8.38315 2.49204 8.3897C2.48045 8.40127 0.83651 8.12398 0.806397 8.10537C0.798112 8.10025 0.753354 7.98749 0.706953 7.85476C0.556202 7.42372 0.447393 6.91879 0.419816 6.52224C0.412188 6.41253 0.401133 6.29902 0.395242 6.26997L0.384516 6.21717H1.28632H2.18812L2.20336 6.46944ZM5.78361 7.50787V8.79857H5.68881C5.47183 8.79857 4.75879 8.74643 4.38712 8.70339C4.05245 8.66464 2.97039 8.49751 2.94873 8.48125C2.94507 8.47848 2.91141 8.3613 2.87395 8.22085C2.74095 7.7221 2.63505 7.0351 2.604 6.46944L2.59015 6.21717H4.18687H5.78361V7.50787ZM9.38568 6.46944C9.35463 7.0351 9.24873 7.7221 9.11573 8.22085C9.07827 8.3613 9.04461 8.47848 9.04095 8.48125C9.01929 8.49751 7.93723 8.66464 7.60256 8.70339C7.23089 8.74643 6.51786 8.79857 6.30087 8.79857H6.20607V7.50787V6.21717H7.80281H9.39953L9.38568 6.46944ZM11.5944 6.26997C11.5885 6.29902 11.5775 6.41253 11.5699 6.52224C11.5423 6.91879 11.4335 7.42372 11.2827 7.85476C11.2363 7.98749 11.1916 8.10025 11.1833 8.10537C11.1532 8.12398 9.50923 8.40127 9.49764 8.3897C9.49109 8.38315 9.51275 8.26917 9.5458 8.13644C9.6644 7.65984 9.75041 7.0638 9.78632 6.46944L9.80156 6.21717H10.7034H11.6052L11.5944 6.26997ZM1.84553 8.69818L2.63671 8.83361L2.70947 9.04491C2.80922 9.33459 3.11875 9.96011 3.29593 10.2301C3.48874 10.5239 3.74473 10.8412 3.99746 11.0998C4.11026 11.2152 4.19496 11.3096 4.18567 11.3096C4.15344 11.3096 3.65857 11.1045 3.51075 11.0299C2.69511 10.6182 1.97013 10.0028 1.4458 9.27707C1.31843 9.10081 1.01911 8.61337 1.01911 8.58225C1.01911 8.55571 0.986016 8.55106 1.84553 8.69818ZM10.9706 8.58225C10.9706 8.61337 10.6713 9.10081 10.5439 9.27707C10.0195 10.0028 9.29457 10.6182 8.47893 11.0299C8.33111 11.1045 7.83624 11.3096 7.80401 11.3096C7.79472 11.3096 7.87942 11.2152 7.99222 11.0998C8.24495 10.8412 8.50094 10.5239 8.69375 10.2301C8.87095 9.96008 9.18046 9.33456 9.28023 9.04481L9.35301 8.83342L10.109 8.70116C10.9053 8.56183 10.9706 8.55282 10.9706 8.58225ZM3.31076 8.9504C3.91118 9.06272 4.58523 9.1415 5.26139 9.17839L5.78361 9.2069V10.399C5.78361 11.7701 5.81778 11.6209 5.51924 11.553C4.54906 11.3323 3.65979 10.3904 3.12377 9.01564C3.10239 8.9608 3.0942 8.91591 3.10558 8.91591C3.11694 8.91591 3.20928 8.93144 3.31076 8.9504ZM8.85624 9.03911C8.32567 10.3937 7.43323 11.334 6.47045 11.553C6.1719 11.6209 6.20607 11.7701 6.20607 10.399V9.2069L6.72829 9.17839C7.39213 9.14218 8.233 9.04221 8.72915 8.94055C8.91362 8.90274 8.91057 8.90037 8.85624 9.03911Z",
    fill: "#5B5B5B",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 44,
      columnNumber: 13
    }
  }));
};

/***/ }),

/***/ "./src/component/ExperienceHeader/css.css":
/*!************************************************!*\
  !*** ./src/component/ExperienceHeader/css.css ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {


var content = __webpack_require__(/*! !../../../node_modules/css-loader??ref--6-oneOf-3-1!../../../node_modules/postcss-loader/src??postcss!./css.css */ "./node_modules/css-loader/index.js?!./node_modules/postcss-loader/src/index.js?!./src/component/ExperienceHeader/css.css");

if(typeof content === 'string') content = [[module.i, content, '']];

var transform;
var insertInto;



var options = {"hmr":true}

options.transform = transform
options.insertInto = undefined;

var update = __webpack_require__(/*! ../../../node_modules/style-loader/lib/addStyles.js */ "./node_modules/style-loader/lib/addStyles.js")(content, options);

if(content.locals) module.exports = content.locals;

if(true) {
	module.hot.accept(/*! !../../../node_modules/css-loader??ref--6-oneOf-3-1!../../../node_modules/postcss-loader/src??postcss!./css.css */ "./node_modules/css-loader/index.js?!./node_modules/postcss-loader/src/index.js?!./src/component/ExperienceHeader/css.css", function() {
		var newContent = __webpack_require__(/*! !../../../node_modules/css-loader??ref--6-oneOf-3-1!../../../node_modules/postcss-loader/src??postcss!./css.css */ "./node_modules/css-loader/index.js?!./node_modules/postcss-loader/src/index.js?!./src/component/ExperienceHeader/css.css");

		if(typeof newContent === 'string') newContent = [[module.i, newContent, '']];

		var locals = (function(a, b) {
			var key, idx = 0;

			for(key in a) {
				if(!b || a[key] !== b[key]) return false;
				idx++;
			}

			for(key in b) idx--;

			return idx === 0;
		}(content.locals, newContent.locals));

		if(!locals) throw new Error('Aborting CSS HMR due to changed css-modules locals.');

		update(newContent);
	});

	module.hot.dispose(function() { update(); });
}

/***/ }),

/***/ "./src/component/ExperienceHeader/index.js":
/*!*************************************************!*\
  !*** ./src/component/ExperienceHeader/index.js ***!
  \*************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _css_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./css.css */ "./src/component/ExperienceHeader/css.css");
/* harmony import */ var _css_css__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_css_css__WEBPACK_IMPORTED_MODULE_1__);
var _this = undefined,
  _jsxFileName = "/Users/vfhome/projects/dana_kerwen/src/component/ExperienceHeader/index.js";


var ExperienceHeader = function ExperienceHeader() {
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "experienceHeader",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 6,
      columnNumber: 5
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("h1", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 7,
      columnNumber: 9
    }
  }, "\u041D\u0430\u0448 \u043E\u043F\u044B\u0442"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 8,
      columnNumber: 9
    }
  }, "Incididunt dolor amet mollit culpa anim minim fugiat occaecat id velit excepteur adipisicing. Ipsum ad cupidatat officia sint quis laborum. Consequat laboris quis voluptate ullamco veniam velit ullamco sunt excepteur incididunt elit et non. in ut esse ex cillum culpa. Veniam quis deserunt laboris eu culpa occaecat dolor ullamco aliqua irure nisi magna commodo qui. Aliquip ex tempor quis ullamco sint ex amet."));
};
/* harmony default export */ __webpack_exports__["default"] = (ExperienceHeader);

/***/ }),

/***/ "./src/component/ExperienceRadial/css.css":
/*!************************************************!*\
  !*** ./src/component/ExperienceRadial/css.css ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {


var content = __webpack_require__(/*! !../../../node_modules/css-loader??ref--6-oneOf-3-1!../../../node_modules/postcss-loader/src??postcss!./css.css */ "./node_modules/css-loader/index.js?!./node_modules/postcss-loader/src/index.js?!./src/component/ExperienceRadial/css.css");

if(typeof content === 'string') content = [[module.i, content, '']];

var transform;
var insertInto;



var options = {"hmr":true}

options.transform = transform
options.insertInto = undefined;

var update = __webpack_require__(/*! ../../../node_modules/style-loader/lib/addStyles.js */ "./node_modules/style-loader/lib/addStyles.js")(content, options);

if(content.locals) module.exports = content.locals;

if(true) {
	module.hot.accept(/*! !../../../node_modules/css-loader??ref--6-oneOf-3-1!../../../node_modules/postcss-loader/src??postcss!./css.css */ "./node_modules/css-loader/index.js?!./node_modules/postcss-loader/src/index.js?!./src/component/ExperienceRadial/css.css", function() {
		var newContent = __webpack_require__(/*! !../../../node_modules/css-loader??ref--6-oneOf-3-1!../../../node_modules/postcss-loader/src??postcss!./css.css */ "./node_modules/css-loader/index.js?!./node_modules/postcss-loader/src/index.js?!./src/component/ExperienceRadial/css.css");

		if(typeof newContent === 'string') newContent = [[module.i, newContent, '']];

		var locals = (function(a, b) {
			var key, idx = 0;

			for(key in a) {
				if(!b || a[key] !== b[key]) return false;
				idx++;
			}

			for(key in b) idx--;

			return idx === 0;
		}(content.locals, newContent.locals));

		if(!locals) throw new Error('Aborting CSS HMR due to changed css-modules locals.');

		update(newContent);
	});

	module.hot.dispose(function() { update(); });
}

/***/ }),

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

/***/ }),

/***/ "./src/component/NewsComponent/css.css":
/*!*********************************************!*\
  !*** ./src/component/NewsComponent/css.css ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {


var content = __webpack_require__(/*! !../../../node_modules/css-loader??ref--6-oneOf-3-1!../../../node_modules/postcss-loader/src??postcss!./css.css */ "./node_modules/css-loader/index.js?!./node_modules/postcss-loader/src/index.js?!./src/component/NewsComponent/css.css");

if(typeof content === 'string') content = [[module.i, content, '']];

var transform;
var insertInto;



var options = {"hmr":true}

options.transform = transform
options.insertInto = undefined;

var update = __webpack_require__(/*! ../../../node_modules/style-loader/lib/addStyles.js */ "./node_modules/style-loader/lib/addStyles.js")(content, options);

if(content.locals) module.exports = content.locals;

if(true) {
	module.hot.accept(/*! !../../../node_modules/css-loader??ref--6-oneOf-3-1!../../../node_modules/postcss-loader/src??postcss!./css.css */ "./node_modules/css-loader/index.js?!./node_modules/postcss-loader/src/index.js?!./src/component/NewsComponent/css.css", function() {
		var newContent = __webpack_require__(/*! !../../../node_modules/css-loader??ref--6-oneOf-3-1!../../../node_modules/postcss-loader/src??postcss!./css.css */ "./node_modules/css-loader/index.js?!./node_modules/postcss-loader/src/index.js?!./src/component/NewsComponent/css.css");

		if(typeof newContent === 'string') newContent = [[module.i, newContent, '']];

		var locals = (function(a, b) {
			var key, idx = 0;

			for(key in a) {
				if(!b || a[key] !== b[key]) return false;
				idx++;
			}

			for(key in b) idx--;

			return idx === 0;
		}(content.locals, newContent.locals));

		if(!locals) throw new Error('Aborting CSS HMR due to changed css-modules locals.');

		update(newContent);
	});

	module.hot.dispose(function() { update(); });
}

/***/ }),

/***/ "./src/component/NewsComponent/index.js":
/*!**********************************************!*\
  !*** ./src/component/NewsComponent/index.js ***!
  \**********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _css_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./css.css */ "./src/component/NewsComponent/css.css");
/* harmony import */ var _css_css__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_css_css__WEBPACK_IMPORTED_MODULE_1__);
var _this = undefined,
  _jsxFileName = "/Users/vfhome/projects/dana_kerwen/src/component/NewsComponent/index.js";


var NewsComponent = function NewsComponent(_ref) {
  var date = _ref.date,
    text = _ref.text;
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "newsComponent",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 6,
      columnNumber: 5
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("h5", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 7,
      columnNumber: 7
    }
  }, date), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 8,
      columnNumber: 7
    }
  }, text));
};
/* harmony default export */ __webpack_exports__["default"] = (NewsComponent);

/***/ }),

/***/ "./src/component/Poster/css.css":
/*!**************************************!*\
  !*** ./src/component/Poster/css.css ***!
  \**************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {


var content = __webpack_require__(/*! !../../../node_modules/css-loader??ref--6-oneOf-3-1!../../../node_modules/postcss-loader/src??postcss!./css.css */ "./node_modules/css-loader/index.js?!./node_modules/postcss-loader/src/index.js?!./src/component/Poster/css.css");

if(typeof content === 'string') content = [[module.i, content, '']];

var transform;
var insertInto;



var options = {"hmr":true}

options.transform = transform
options.insertInto = undefined;

var update = __webpack_require__(/*! ../../../node_modules/style-loader/lib/addStyles.js */ "./node_modules/style-loader/lib/addStyles.js")(content, options);

if(content.locals) module.exports = content.locals;

if(true) {
	module.hot.accept(/*! !../../../node_modules/css-loader??ref--6-oneOf-3-1!../../../node_modules/postcss-loader/src??postcss!./css.css */ "./node_modules/css-loader/index.js?!./node_modules/postcss-loader/src/index.js?!./src/component/Poster/css.css", function() {
		var newContent = __webpack_require__(/*! !../../../node_modules/css-loader??ref--6-oneOf-3-1!../../../node_modules/postcss-loader/src??postcss!./css.css */ "./node_modules/css-loader/index.js?!./node_modules/postcss-loader/src/index.js?!./src/component/Poster/css.css");

		if(typeof newContent === 'string') newContent = [[module.i, newContent, '']];

		var locals = (function(a, b) {
			var key, idx = 0;

			for(key in a) {
				if(!b || a[key] !== b[key]) return false;
				idx++;
			}

			for(key in b) idx--;

			return idx === 0;
		}(content.locals, newContent.locals));

		if(!locals) throw new Error('Aborting CSS HMR due to changed css-modules locals.');

		update(newContent);
	});

	module.hot.dispose(function() { update(); });
}

/***/ }),

/***/ "./src/component/Poster/index.js":
/*!***************************************!*\
  !*** ./src/component/Poster/index.js ***!
  \***************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _css_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./css.css */ "./src/component/Poster/css.css");
/* harmony import */ var _css_css__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_css_css__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _assets_img_poster_main1_jpg__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./../../assets/img/poster/main1.jpg */ "./src/assets/img/poster/main1.jpg");
/* harmony import */ var _assets_img_poster_main1_jpg__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_assets_img_poster_main1_jpg__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _assets_img_poster_main2_jpg__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./../../assets/img/poster/main2.jpg */ "./src/assets/img/poster/main2.jpg");
/* harmony import */ var _assets_img_poster_main2_jpg__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_assets_img_poster_main2_jpg__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var slick_carousel_slick_slick_css__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! slick-carousel/slick/slick.css */ "./node_modules/slick-carousel/slick/slick.css");
/* harmony import */ var slick_carousel_slick_slick_css__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(slick_carousel_slick_slick_css__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var slick_carousel_slick_slick_theme_css__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! slick-carousel/slick/slick-theme.css */ "./node_modules/slick-carousel/slick/slick-theme.css");
/* harmony import */ var slick_carousel_slick_slick_theme_css__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(slick_carousel_slick_slick_theme_css__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var react_slick__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! react-slick */ "./node_modules/react-slick/lib/index.js");
/* harmony import */ var react_slick__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(react_slick__WEBPACK_IMPORTED_MODULE_6__);
var _this = undefined,
  _jsxFileName = "/Users/vfhome/projects/dana_kerwen/src/component/Poster/index.js";







var Poster = function Poster() {
  var settings = {
    dots: false,
    arrows: false,
    infinite: true,
    slidesToShow: 1,
    fade: true,
    autoplay: true,
    speed: 2000,
    autoplaySpeed: 4000,
    slidesToScroll: 1
  };
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "posterContainer",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 23,
      columnNumber: 5
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "poster",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 24,
      columnNumber: 7
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_slick__WEBPACK_IMPORTED_MODULE_6___default.a, Object.assign({}, settings, {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 25,
      columnNumber: 7
    }
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "posterImg",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 26,
      columnNumber: 11
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "posterContent",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 27,
      columnNumber: 13
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 28,
      columnNumber: 15
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("h1", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 29,
      columnNumber: 17
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 29,
      columnNumber: 21
    }
  }, "Dana"), " Kerwen"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 30,
      columnNumber: 17
    }
  }, "Fugiat ex reprehenderit duis duis sunt. Id non id pariatur tempor id. Nisi do sit aute minim non nulla mollit et sit ad. Ea cillum magna laboris voluptate nostrud anim labore tempor. Aliquip aute irure veniam voluptate elit nostrud aute mollit pariatur. Esse adipisicing aliqua laboris elit officia anim proident aliquip sunt minim."), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("button", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 31,
      columnNumber: 17
    }
  }, "Learn More")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 33,
      columnNumber: 15
    }
  })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("img", {
    src: _assets_img_poster_main1_jpg__WEBPACK_IMPORTED_MODULE_2___default.a,
    alt: "posterImg",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 35,
      columnNumber: 13
    }
  })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "posterImg",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 37,
      columnNumber: 11
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "posterContent",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 38,
      columnNumber: 13
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 39,
      columnNumber: 15
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("h1", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 40,
      columnNumber: 17
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 40,
      columnNumber: 21
    }
  }, "Dana"), " Kerwen"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 41,
      columnNumber: 17
    }
  }, "Fugiat ex reprehenderit duis duis sunt. Id non id pariatur tempor id. Nisi do sit aute minim non nulla mollit et sit ad. Ea cillum magna laboris voluptate nostrud anim labore tempor. Aliquip aute irure veniam voluptate elit nostrud aute mollit pariatur. Esse adipisicing aliqua laboris elit officia anim proident aliquip sunt minim."), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("button", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 42,
      columnNumber: 17
    }
  }, "Learn More")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 44,
      columnNumber: 15
    }
  })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("img", {
    src: _assets_img_poster_main2_jpg__WEBPACK_IMPORTED_MODULE_3___default.a,
    alt: "posterImg",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 46,
      columnNumber: 13
    }
  })))));
};
/* harmony default export */ __webpack_exports__["default"] = (Poster);

/***/ }),

/***/ "./src/component/ServiceMarquee/css.css":
/*!**********************************************!*\
  !*** ./src/component/ServiceMarquee/css.css ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {


var content = __webpack_require__(/*! !../../../node_modules/css-loader??ref--6-oneOf-3-1!../../../node_modules/postcss-loader/src??postcss!./css.css */ "./node_modules/css-loader/index.js?!./node_modules/postcss-loader/src/index.js?!./src/component/ServiceMarquee/css.css");

if(typeof content === 'string') content = [[module.i, content, '']];

var transform;
var insertInto;



var options = {"hmr":true}

options.transform = transform
options.insertInto = undefined;

var update = __webpack_require__(/*! ../../../node_modules/style-loader/lib/addStyles.js */ "./node_modules/style-loader/lib/addStyles.js")(content, options);

if(content.locals) module.exports = content.locals;

if(true) {
	module.hot.accept(/*! !../../../node_modules/css-loader??ref--6-oneOf-3-1!../../../node_modules/postcss-loader/src??postcss!./css.css */ "./node_modules/css-loader/index.js?!./node_modules/postcss-loader/src/index.js?!./src/component/ServiceMarquee/css.css", function() {
		var newContent = __webpack_require__(/*! !../../../node_modules/css-loader??ref--6-oneOf-3-1!../../../node_modules/postcss-loader/src??postcss!./css.css */ "./node_modules/css-loader/index.js?!./node_modules/postcss-loader/src/index.js?!./src/component/ServiceMarquee/css.css");

		if(typeof newContent === 'string') newContent = [[module.i, newContent, '']];

		var locals = (function(a, b) {
			var key, idx = 0;

			for(key in a) {
				if(!b || a[key] !== b[key]) return false;
				idx++;
			}

			for(key in b) idx--;

			return idx === 0;
		}(content.locals, newContent.locals));

		if(!locals) throw new Error('Aborting CSS HMR due to changed css-modules locals.');

		update(newContent);
	});

	module.hot.dispose(function() { update(); });
}

/***/ }),

/***/ "./src/component/ServiceMarquee/index.js":
/*!***********************************************!*\
  !*** ./src/component/ServiceMarquee/index.js ***!
  \***********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _css_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./css.css */ "./src/component/ServiceMarquee/css.css");
/* harmony import */ var _css_css__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_css_css__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react_easy_marquee__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-easy-marquee */ "./node_modules/react-easy-marquee/dist/index.es.js");
var _this = undefined,
  _jsxFileName = "/Users/vfhome/projects/dana_kerwen/src/component/ServiceMarquee/index.js";



var ServiceMarquee = function ServiceMarquee() {
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "serviceMarquee",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 7,
      columnNumber: 5
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_easy_marquee__WEBPACK_IMPORTED_MODULE_2__["default"], {
    duration: 25000,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 8,
      columnNumber: 9
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", {
    className: "marqItem",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 9,
      columnNumber: 13
    }
  }, "\u0410\u0432\u0442\u043E\u043F\u0430\u0440\u043A \u0431\u043E\u043B\u0435\u0435 1500 \u0430\u0432\u0442\u043E\u043F\u043E\u0435\u0437\u0434\u043E\u0432"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", {
    className: "marqItem",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 10,
      columnNumber: 13
    }
  }, "\u041F\u0440\u043E\u0444\u0435\u0441\u0441\u0438\u043E\u043D\u0430\u043B\u044C\u043D\u0430\u044F \u043C\u043E\u0442\u0438\u0432\u0438\u0440\u043E\u0432\u0430\u043D\u043D\u0430\u044F \u043A\u043E\u043C\u0430\u043D\u0434\u0430"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", {
    className: "marqItem",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 11,
      columnNumber: 13
    }
  }, "\u0420\u0430\u0431\u043E\u0442\u0430\u0435\u043C 24/7")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_easy_marquee__WEBPACK_IMPORTED_MODULE_2__["default"], {
    duration: 30000,
    reverse: true,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 13,
      columnNumber: 9
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", {
    className: "marqItem",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 14,
      columnNumber: 13
    }
  }, "\u041F\u0440\u043E\u0444\u0435\u0441\u0441\u0438\u043E\u043D\u0430\u043B\u044C\u043D\u0430\u044F \u043C\u043E\u0442\u0438\u0432\u0438\u0440\u043E\u0432\u0430\u043D\u043D\u0430\u044F \u043A\u043E\u043C\u0430\u043D\u0434\u0430"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", {
    className: "marqItem",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 15,
      columnNumber: 13
    }
  }, "\u0421\u043E\u0432\u0440\u0435\u043C\u0435\u043D\u043D\u0430\u044F \u0435\u0432\u0440\u043E\u043F\u0435\u0439\u0441\u043A\u0430\u044F \u0442\u0435\u0445\u043D\u0438\u043A\u0430 "), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", {
    className: "marqItem",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 16,
      columnNumber: 13
    }
  }, "\u0420\u0430\u0431\u043E\u0442\u0430\u0435\u043C 24/7")));
};
/* harmony default export */ __webpack_exports__["default"] = (ServiceMarquee);

/***/ }),

/***/ "./src/component/ServicePallet/css.css":
/*!*********************************************!*\
  !*** ./src/component/ServicePallet/css.css ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {


var content = __webpack_require__(/*! !../../../node_modules/css-loader??ref--6-oneOf-3-1!../../../node_modules/postcss-loader/src??postcss!./css.css */ "./node_modules/css-loader/index.js?!./node_modules/postcss-loader/src/index.js?!./src/component/ServicePallet/css.css");

if(typeof content === 'string') content = [[module.i, content, '']];

var transform;
var insertInto;



var options = {"hmr":true}

options.transform = transform
options.insertInto = undefined;

var update = __webpack_require__(/*! ../../../node_modules/style-loader/lib/addStyles.js */ "./node_modules/style-loader/lib/addStyles.js")(content, options);

if(content.locals) module.exports = content.locals;

if(true) {
	module.hot.accept(/*! !../../../node_modules/css-loader??ref--6-oneOf-3-1!../../../node_modules/postcss-loader/src??postcss!./css.css */ "./node_modules/css-loader/index.js?!./node_modules/postcss-loader/src/index.js?!./src/component/ServicePallet/css.css", function() {
		var newContent = __webpack_require__(/*! !../../../node_modules/css-loader??ref--6-oneOf-3-1!../../../node_modules/postcss-loader/src??postcss!./css.css */ "./node_modules/css-loader/index.js?!./node_modules/postcss-loader/src/index.js?!./src/component/ServicePallet/css.css");

		if(typeof newContent === 'string') newContent = [[module.i, newContent, '']];

		var locals = (function(a, b) {
			var key, idx = 0;

			for(key in a) {
				if(!b || a[key] !== b[key]) return false;
				idx++;
			}

			for(key in b) idx--;

			return idx === 0;
		}(content.locals, newContent.locals));

		if(!locals) throw new Error('Aborting CSS HMR due to changed css-modules locals.');

		update(newContent);
	});

	module.hot.dispose(function() { update(); });
}

/***/ }),

/***/ "./src/component/ServicePallet/index.js":
/*!**********************************************!*\
  !*** ./src/component/ServicePallet/index.js ***!
  \**********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _css_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./css.css */ "./src/component/ServicePallet/css.css");
/* harmony import */ var _css_css__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_css_css__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _assets_img_otherPhotos_1h_png__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./../../assets/img/otherPhotos/1h.png */ "./src/assets/img/otherPhotos/1h.png");
/* harmony import */ var _assets_img_otherPhotos_1h_png__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_assets_img_otherPhotos_1h_png__WEBPACK_IMPORTED_MODULE_2__);
var _this = undefined,
  _jsxFileName = "/Users/vfhome/projects/dana_kerwen/src/component/ServicePallet/index.js";



var ServicePallet = function ServicePallet() {
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "servicePallet",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 7,
      columnNumber: 5
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 8,
      columnNumber: 9
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("img", {
    src: _assets_img_otherPhotos_1h_png__WEBPACK_IMPORTED_MODULE_2___default.a,
    alt: "serviceIcon",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 9,
      columnNumber: 13
    }
  })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 11,
      columnNumber: 9
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("h3", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 12,
      columnNumber: 13
    }
  }, "\u0420\u0415\u0424\u0420\u0418\u0416\u0415\u0420\u0410\u0422\u041E\u0420\u041D\u042B\u0415 \u0410\u0412\u0422\u041E\u041F\u041E\u0415\u0417\u0414\u0410"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 13,
      columnNumber: 13
    }
  }, "33 \u0435\u0432\u0440\u043E\u043F\u0430\u043B\u043B\u0435\u0442, 86 \u043C3 \u043E\u0442 -20 \u0434\u043E +20t\u0431 \u043F\u043E\u0433\u0440\u0443\u0437\u043A\u0430 \u0441 \u043B\u044E\u0431\u043E\u0439 \u0441\u0442\u043E\u0440\u043E\u043D\u044B")));
};
/* harmony default export */ __webpack_exports__["default"] = (ServicePallet);

/***/ }),

/***/ "./src/component/WhyUsCard/css.css":
/*!*****************************************!*\
  !*** ./src/component/WhyUsCard/css.css ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {


var content = __webpack_require__(/*! !../../../node_modules/css-loader??ref--6-oneOf-3-1!../../../node_modules/postcss-loader/src??postcss!./css.css */ "./node_modules/css-loader/index.js?!./node_modules/postcss-loader/src/index.js?!./src/component/WhyUsCard/css.css");

if(typeof content === 'string') content = [[module.i, content, '']];

var transform;
var insertInto;



var options = {"hmr":true}

options.transform = transform
options.insertInto = undefined;

var update = __webpack_require__(/*! ../../../node_modules/style-loader/lib/addStyles.js */ "./node_modules/style-loader/lib/addStyles.js")(content, options);

if(content.locals) module.exports = content.locals;

if(true) {
	module.hot.accept(/*! !../../../node_modules/css-loader??ref--6-oneOf-3-1!../../../node_modules/postcss-loader/src??postcss!./css.css */ "./node_modules/css-loader/index.js?!./node_modules/postcss-loader/src/index.js?!./src/component/WhyUsCard/css.css", function() {
		var newContent = __webpack_require__(/*! !../../../node_modules/css-loader??ref--6-oneOf-3-1!../../../node_modules/postcss-loader/src??postcss!./css.css */ "./node_modules/css-loader/index.js?!./node_modules/postcss-loader/src/index.js?!./src/component/WhyUsCard/css.css");

		if(typeof newContent === 'string') newContent = [[module.i, newContent, '']];

		var locals = (function(a, b) {
			var key, idx = 0;

			for(key in a) {
				if(!b || a[key] !== b[key]) return false;
				idx++;
			}

			for(key in b) idx--;

			return idx === 0;
		}(content.locals, newContent.locals));

		if(!locals) throw new Error('Aborting CSS HMR due to changed css-modules locals.');

		update(newContent);
	});

	module.hot.dispose(function() { update(); });
}

/***/ }),

/***/ "./src/component/WhyUsCard/index.js":
/*!******************************************!*\
  !*** ./src/component/WhyUsCard/index.js ***!
  \******************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _css_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./css.css */ "./src/component/WhyUsCard/css.css");
/* harmony import */ var _css_css__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_css_css__WEBPACK_IMPORTED_MODULE_1__);
var _this = undefined,
  _jsxFileName = "/Users/vfhome/projects/dana_kerwen/src/component/WhyUsCard/index.js";


var WhyUsCard = function WhyUsCard(_ref) {
  var image = _ref.image,
    header = _ref.header,
    text = _ref.text;
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "whyusCard",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 6,
      columnNumber: 5
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("img", {
    src: image,
    alt: "Why Us",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 7,
      columnNumber: 9
    }
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("h2", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 8,
      columnNumber: 9
    }
  }, header), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 9,
      columnNumber: 9
    }
  }, text));
};
/* harmony default export */ __webpack_exports__["default"] = (WhyUsCard);

/***/ }),

/***/ "./src/container/Experience/css.css":
/*!******************************************!*\
  !*** ./src/container/Experience/css.css ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {


var content = __webpack_require__(/*! !../../../node_modules/css-loader??ref--6-oneOf-3-1!../../../node_modules/postcss-loader/src??postcss!./css.css */ "./node_modules/css-loader/index.js?!./node_modules/postcss-loader/src/index.js?!./src/container/Experience/css.css");

if(typeof content === 'string') content = [[module.i, content, '']];

var transform;
var insertInto;



var options = {"hmr":true}

options.transform = transform
options.insertInto = undefined;

var update = __webpack_require__(/*! ../../../node_modules/style-loader/lib/addStyles.js */ "./node_modules/style-loader/lib/addStyles.js")(content, options);

if(content.locals) module.exports = content.locals;

if(true) {
	module.hot.accept(/*! !../../../node_modules/css-loader??ref--6-oneOf-3-1!../../../node_modules/postcss-loader/src??postcss!./css.css */ "./node_modules/css-loader/index.js?!./node_modules/postcss-loader/src/index.js?!./src/container/Experience/css.css", function() {
		var newContent = __webpack_require__(/*! !../../../node_modules/css-loader??ref--6-oneOf-3-1!../../../node_modules/postcss-loader/src??postcss!./css.css */ "./node_modules/css-loader/index.js?!./node_modules/postcss-loader/src/index.js?!./src/container/Experience/css.css");

		if(typeof newContent === 'string') newContent = [[module.i, newContent, '']];

		var locals = (function(a, b) {
			var key, idx = 0;

			for(key in a) {
				if(!b || a[key] !== b[key]) return false;
				idx++;
			}

			for(key in b) idx--;

			return idx === 0;
		}(content.locals, newContent.locals));

		if(!locals) throw new Error('Aborting CSS HMR due to changed css-modules locals.');

		update(newContent);
	});

	module.hot.dispose(function() { update(); });
}

/***/ }),

/***/ "./src/container/Experience/index.js":
/*!*******************************************!*\
  !*** ./src/container/Experience/index.js ***!
  \*******************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _component_ExperienceHeader__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../component/ExperienceHeader */ "./src/component/ExperienceHeader/index.js");
/* harmony import */ var _component_ExperienceRadial__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../component/ExperienceRadial */ "./src/component/ExperienceRadial/index.js");
/* harmony import */ var _css_css__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./css.css */ "./src/container/Experience/css.css");
/* harmony import */ var _css_css__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_css_css__WEBPACK_IMPORTED_MODULE_3__);
var _this = undefined,
  _jsxFileName = "/Users/vfhome/projects/dana_kerwen/src/container/Experience/index.js";




var Experience = function Experience() {
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "ContainerXl experience",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 8,
      columnNumber: 5
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 9,
      columnNumber: 9
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_component_ExperienceHeader__WEBPACK_IMPORTED_MODULE_1__["default"], {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 10,
      columnNumber: 13
    }
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 11,
      columnNumber: 13
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_component_ExperienceRadial__WEBPACK_IMPORTED_MODULE_2__["default"], {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 12,
      columnNumber: 17
    }
  }))));
};
/* harmony default export */ __webpack_exports__["default"] = (Experience);

/***/ }),

/***/ "./src/container/News/css.css":
/*!************************************!*\
  !*** ./src/container/News/css.css ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {


var content = __webpack_require__(/*! !../../../node_modules/css-loader??ref--6-oneOf-3-1!../../../node_modules/postcss-loader/src??postcss!./css.css */ "./node_modules/css-loader/index.js?!./node_modules/postcss-loader/src/index.js?!./src/container/News/css.css");

if(typeof content === 'string') content = [[module.i, content, '']];

var transform;
var insertInto;



var options = {"hmr":true}

options.transform = transform
options.insertInto = undefined;

var update = __webpack_require__(/*! ../../../node_modules/style-loader/lib/addStyles.js */ "./node_modules/style-loader/lib/addStyles.js")(content, options);

if(content.locals) module.exports = content.locals;

if(true) {
	module.hot.accept(/*! !../../../node_modules/css-loader??ref--6-oneOf-3-1!../../../node_modules/postcss-loader/src??postcss!./css.css */ "./node_modules/css-loader/index.js?!./node_modules/postcss-loader/src/index.js?!./src/container/News/css.css", function() {
		var newContent = __webpack_require__(/*! !../../../node_modules/css-loader??ref--6-oneOf-3-1!../../../node_modules/postcss-loader/src??postcss!./css.css */ "./node_modules/css-loader/index.js?!./node_modules/postcss-loader/src/index.js?!./src/container/News/css.css");

		if(typeof newContent === 'string') newContent = [[module.i, newContent, '']];

		var locals = (function(a, b) {
			var key, idx = 0;

			for(key in a) {
				if(!b || a[key] !== b[key]) return false;
				idx++;
			}

			for(key in b) idx--;

			return idx === 0;
		}(content.locals, newContent.locals));

		if(!locals) throw new Error('Aborting CSS HMR due to changed css-modules locals.');

		update(newContent);
	});

	module.hot.dispose(function() { update(); });
}

/***/ }),

/***/ "./src/container/News/index.js":
/*!*************************************!*\
  !*** ./src/container/News/index.js ***!
  \*************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _component_NewsComponent__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../component/NewsComponent */ "./src/component/NewsComponent/index.js");
/* harmony import */ var slick_carousel_slick_slick_css__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! slick-carousel/slick/slick.css */ "./node_modules/slick-carousel/slick/slick.css");
/* harmony import */ var slick_carousel_slick_slick_css__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(slick_carousel_slick_slick_css__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var slick_carousel_slick_slick_theme_css__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! slick-carousel/slick/slick-theme.css */ "./node_modules/slick-carousel/slick/slick-theme.css");
/* harmony import */ var slick_carousel_slick_slick_theme_css__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(slick_carousel_slick_slick_theme_css__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var react_slick__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react-slick */ "./node_modules/react-slick/lib/index.js");
/* harmony import */ var react_slick__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(react_slick__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _css_css__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./css.css */ "./src/container/News/css.css");
/* harmony import */ var _css_css__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_css_css__WEBPACK_IMPORTED_MODULE_5__);
var _this = undefined,
  _jsxFileName = "/Users/vfhome/projects/dana_kerwen/src/container/News/index.js";






var News = function News() {
  var settings = {
    dots: true,
    arrows: false,
    infinite: true,
    slidesToShow: 3,
    autoplay: true,
    speed: 2000,
    autoplaySpeed: 4000,
    slidesToScroll: 1
  };
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "ContainerXl news",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 22,
      columnNumber: 5
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 23,
      columnNumber: 9
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("h1", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 24,
      columnNumber: 13
    }
  }, "\u041D\u043E\u0432\u043E\u0441\u0442\u0438 \u0438 \u0441\u043E\u0431\u044B\u0442\u0438\u044F"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_slick__WEBPACK_IMPORTED_MODULE_4___default.a, Object.assign({}, settings, {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 25,
      columnNumber: 13
    }
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_component_NewsComponent__WEBPACK_IMPORTED_MODULE_1__["default"], {
    date: "24 jan 2022",
    text: "Anim fugiat et veniam exercitation ea ullamco adipisicing elit ea pariatur anim excepteur pariatur non.",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 26,
      columnNumber: 17
    }
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_component_NewsComponent__WEBPACK_IMPORTED_MODULE_1__["default"], {
    date: "24 jan 2022",
    text: "Do fugiat sunt consequat mollit fugiat cupidatat cillum adipisicing exercitation non magna.",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 27,
      columnNumber: 17
    }
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_component_NewsComponent__WEBPACK_IMPORTED_MODULE_1__["default"], {
    date: "24 jan 2022",
    text: "Sunt ut sit nisi amet ad excepteur ipsum adipisicing minim nulla laborum.",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 28,
      columnNumber: 17
    }
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_component_NewsComponent__WEBPACK_IMPORTED_MODULE_1__["default"], {
    date: "24 jan 2022",
    text: "Adipisicing nisi ipsum voluptate id.",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 29,
      columnNumber: 17
    }
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_component_NewsComponent__WEBPACK_IMPORTED_MODULE_1__["default"], {
    date: "24 jan 2022",
    text: "Mollit veniam sit ipsum occaecat nisi ullamco et anim est proident adipisicing ullamco quis.",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 30,
      columnNumber: 17
    }
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_component_NewsComponent__WEBPACK_IMPORTED_MODULE_1__["default"], {
    date: "24 jan 2022",
    text: "Esse culpa laboris labore deserunt.",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 31,
      columnNumber: 17
    }
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_component_NewsComponent__WEBPACK_IMPORTED_MODULE_1__["default"], {
    date: "24 jan 2022",
    text: "Anim dolore amet consectetur sunt ad.",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 32,
      columnNumber: 17
    }
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_component_NewsComponent__WEBPACK_IMPORTED_MODULE_1__["default"], {
    date: "24 jan 2022",
    text: "Duis esse do mollit consectetur nisi anim cillum nulla pariatur ea do non in.",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 33,
      columnNumber: 17
    }
  })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("button", {
    className: "dklButton",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 35,
      columnNumber: 13
    }
  }, "\u0412\u0441\u0435 \u043F\u0443\u0431\u043B\u0438\u043A\u0430\u0446\u0438\u0438")));
};
/* harmony default export */ __webpack_exports__["default"] = (News);

/***/ }),

/***/ "./src/container/OrderBlank/css.css":
/*!******************************************!*\
  !*** ./src/container/OrderBlank/css.css ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {


var content = __webpack_require__(/*! !../../../node_modules/css-loader??ref--6-oneOf-3-1!../../../node_modules/postcss-loader/src??postcss!./css.css */ "./node_modules/css-loader/index.js?!./node_modules/postcss-loader/src/index.js?!./src/container/OrderBlank/css.css");

if(typeof content === 'string') content = [[module.i, content, '']];

var transform;
var insertInto;



var options = {"hmr":true}

options.transform = transform
options.insertInto = undefined;

var update = __webpack_require__(/*! ../../../node_modules/style-loader/lib/addStyles.js */ "./node_modules/style-loader/lib/addStyles.js")(content, options);

if(content.locals) module.exports = content.locals;

if(true) {
	module.hot.accept(/*! !../../../node_modules/css-loader??ref--6-oneOf-3-1!../../../node_modules/postcss-loader/src??postcss!./css.css */ "./node_modules/css-loader/index.js?!./node_modules/postcss-loader/src/index.js?!./src/container/OrderBlank/css.css", function() {
		var newContent = __webpack_require__(/*! !../../../node_modules/css-loader??ref--6-oneOf-3-1!../../../node_modules/postcss-loader/src??postcss!./css.css */ "./node_modules/css-loader/index.js?!./node_modules/postcss-loader/src/index.js?!./src/container/OrderBlank/css.css");

		if(typeof newContent === 'string') newContent = [[module.i, newContent, '']];

		var locals = (function(a, b) {
			var key, idx = 0;

			for(key in a) {
				if(!b || a[key] !== b[key]) return false;
				idx++;
			}

			for(key in b) idx--;

			return idx === 0;
		}(content.locals, newContent.locals));

		if(!locals) throw new Error('Aborting CSS HMR due to changed css-modules locals.');

		update(newContent);
	});

	module.hot.dispose(function() { update(); });
}

/***/ }),

/***/ "./src/container/OrderBlank/index.js":
/*!*******************************************!*\
  !*** ./src/container/OrderBlank/index.js ***!
  \*******************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _css_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./css.css */ "./src/container/OrderBlank/css.css");
/* harmony import */ var _css_css__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_css_css__WEBPACK_IMPORTED_MODULE_1__);
var _this = undefined,
  _jsxFileName = "/Users/vfhome/projects/dana_kerwen/src/container/OrderBlank/index.js";


var OrderBlank = function OrderBlank() {
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "orderBlank ContainerXl",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 6,
      columnNumber: 5
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 7,
      columnNumber: 9
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "orderText",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 8,
      columnNumber: 13
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("h1", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 9,
      columnNumber: 17
    }
  }, "\u0417\u0430\u043A\u0430\u0436\u0438\u0442\u0435 \u043F\u0435\u0440\u0435\u0432\u043E\u0437\u043A\u0443 \u0433\u0440\u0443\u0437\u0430"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 10,
      columnNumber: 17
    }
  }, "Dolor magna proident reprehender elit mollit in commodo pariatur ut do excepteur laborum irure pariatur anim consequat.it et fugiat ad enim exercitation.")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 12,
      columnNumber: 13
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 13,
      columnNumber: 17
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("input", {
    placeholder: "\u041A\u043E\u043C\u043F\u0430\u043D\u0438\u044F",
    type: "text",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 14,
      columnNumber: 21
    }
  })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 16,
      columnNumber: 17
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("input", {
    placeholder: "\u0418\u043C\u044F",
    type: "text",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 17,
      columnNumber: 21
    }
  })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 19,
      columnNumber: 17
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("input", {
    placeholder: "E-mail",
    type: "text",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 20,
      columnNumber: 21
    }
  })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 22,
      columnNumber: 17
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("input", {
    placeholder: "\u0422\u0435\u043B\u0435\u0444\u043E\u043D",
    type: "text",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 23,
      columnNumber: 21
    }
  })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 25,
      columnNumber: 17
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("select", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 26,
      columnNumber: 21
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("option", {
    disabled: true,
    selected: true,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 27,
      columnNumber: 25
    }
  }, "\u0423\u0441\u043B\u043E\u0432\u0438\u044F \u043E\u043F\u043B\u0430\u0442\u044B"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("option", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 28,
      columnNumber: 25
    }
  }, "Mollit nostrud ullamco enim eiusmod"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("option", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 29,
      columnNumber: 25
    }
  }, "Incididunt ullamco nulla"))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("button", {
    className: "dklButton",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 32,
      columnNumber: 17
    }
  }, "\u0417\u0430\u043A\u0430\u0437\u0430\u0442\u044C"))));
};
/* harmony default export */ __webpack_exports__["default"] = (OrderBlank);

/***/ }),

/***/ "./src/container/Services/css.css":
/*!****************************************!*\
  !*** ./src/container/Services/css.css ***!
  \****************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {


var content = __webpack_require__(/*! !../../../node_modules/css-loader??ref--6-oneOf-3-1!../../../node_modules/postcss-loader/src??postcss!./css.css */ "./node_modules/css-loader/index.js?!./node_modules/postcss-loader/src/index.js?!./src/container/Services/css.css");

if(typeof content === 'string') content = [[module.i, content, '']];

var transform;
var insertInto;



var options = {"hmr":true}

options.transform = transform
options.insertInto = undefined;

var update = __webpack_require__(/*! ../../../node_modules/style-loader/lib/addStyles.js */ "./node_modules/style-loader/lib/addStyles.js")(content, options);

if(content.locals) module.exports = content.locals;

if(true) {
	module.hot.accept(/*! !../../../node_modules/css-loader??ref--6-oneOf-3-1!../../../node_modules/postcss-loader/src??postcss!./css.css */ "./node_modules/css-loader/index.js?!./node_modules/postcss-loader/src/index.js?!./src/container/Services/css.css", function() {
		var newContent = __webpack_require__(/*! !../../../node_modules/css-loader??ref--6-oneOf-3-1!../../../node_modules/postcss-loader/src??postcss!./css.css */ "./node_modules/css-loader/index.js?!./node_modules/postcss-loader/src/index.js?!./src/container/Services/css.css");

		if(typeof newContent === 'string') newContent = [[module.i, newContent, '']];

		var locals = (function(a, b) {
			var key, idx = 0;

			for(key in a) {
				if(!b || a[key] !== b[key]) return false;
				idx++;
			}

			for(key in b) idx--;

			return idx === 0;
		}(content.locals, newContent.locals));

		if(!locals) throw new Error('Aborting CSS HMR due to changed css-modules locals.');

		update(newContent);
	});

	module.hot.dispose(function() { update(); });
}

/***/ }),

/***/ "./src/container/Services/index.js":
/*!*****************************************!*\
  !*** ./src/container/Services/index.js ***!
  \*****************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _css_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./css.css */ "./src/container/Services/css.css");
/* harmony import */ var _css_css__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_css_css__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _component_ServicePallet__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../component/ServicePallet */ "./src/component/ServicePallet/index.js");
/* harmony import */ var _component_ServiceMarquee__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../component/ServiceMarquee */ "./src/component/ServiceMarquee/index.js");
var _this = undefined,
  _jsxFileName = "/Users/vfhome/projects/dana_kerwen/src/container/Services/index.js";




var Services = function Services() {
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "ContainerXl servicePalletHolder",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 8,
      columnNumber: 5
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 9,
      columnNumber: 9
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_component_ServicePallet__WEBPACK_IMPORTED_MODULE_2__["default"], {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 10,
      columnNumber: 11
    }
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_component_ServicePallet__WEBPACK_IMPORTED_MODULE_2__["default"], {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 11,
      columnNumber: 11
    }
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_component_ServicePallet__WEBPACK_IMPORTED_MODULE_2__["default"], {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 12,
      columnNumber: 11
    }
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_component_ServicePallet__WEBPACK_IMPORTED_MODULE_2__["default"], {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 13,
      columnNumber: 11
    }
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_component_ServicePallet__WEBPACK_IMPORTED_MODULE_2__["default"], {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 14,
      columnNumber: 11
    }
  })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_component_ServiceMarquee__WEBPACK_IMPORTED_MODULE_3__["default"], {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 16,
      columnNumber: 9
    }
  }));
};
/* harmony default export */ __webpack_exports__["default"] = (Services);

/***/ }),

/***/ "./src/container/WeAreDK/index.js":
/*!****************************************!*\
  !*** ./src/container/WeAreDK/index.js ***!
  \****************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _component_Poster__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../component/Poster */ "./src/component/Poster/index.js");
var _this = undefined,
  _jsxFileName = "/Users/vfhome/projects/dana_kerwen/src/container/WeAreDK/index.js";


var WeAreDK = function WeAreDK() {
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 6,
      columnNumber: 5
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_component_Poster__WEBPACK_IMPORTED_MODULE_1__["default"], {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 7,
      columnNumber: 9
    }
  }));
};
/* harmony default export */ __webpack_exports__["default"] = (WeAreDK);

/***/ }),

/***/ "./src/container/WhyUs/css.css":
/*!*************************************!*\
  !*** ./src/container/WhyUs/css.css ***!
  \*************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {


var content = __webpack_require__(/*! !../../../node_modules/css-loader??ref--6-oneOf-3-1!../../../node_modules/postcss-loader/src??postcss!./css.css */ "./node_modules/css-loader/index.js?!./node_modules/postcss-loader/src/index.js?!./src/container/WhyUs/css.css");

if(typeof content === 'string') content = [[module.i, content, '']];

var transform;
var insertInto;



var options = {"hmr":true}

options.transform = transform
options.insertInto = undefined;

var update = __webpack_require__(/*! ../../../node_modules/style-loader/lib/addStyles.js */ "./node_modules/style-loader/lib/addStyles.js")(content, options);

if(content.locals) module.exports = content.locals;

if(true) {
	module.hot.accept(/*! !../../../node_modules/css-loader??ref--6-oneOf-3-1!../../../node_modules/postcss-loader/src??postcss!./css.css */ "./node_modules/css-loader/index.js?!./node_modules/postcss-loader/src/index.js?!./src/container/WhyUs/css.css", function() {
		var newContent = __webpack_require__(/*! !../../../node_modules/css-loader??ref--6-oneOf-3-1!../../../node_modules/postcss-loader/src??postcss!./css.css */ "./node_modules/css-loader/index.js?!./node_modules/postcss-loader/src/index.js?!./src/container/WhyUs/css.css");

		if(typeof newContent === 'string') newContent = [[module.i, newContent, '']];

		var locals = (function(a, b) {
			var key, idx = 0;

			for(key in a) {
				if(!b || a[key] !== b[key]) return false;
				idx++;
			}

			for(key in b) idx--;

			return idx === 0;
		}(content.locals, newContent.locals));

		if(!locals) throw new Error('Aborting CSS HMR due to changed css-modules locals.');

		update(newContent);
	});

	module.hot.dispose(function() { update(); });
}

/***/ }),

/***/ "./src/container/WhyUs/index.js":
/*!**************************************!*\
  !*** ./src/container/WhyUs/index.js ***!
  \**************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _component_WhyUsCard__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../component/WhyUsCard */ "./src/component/WhyUsCard/index.js");
/* harmony import */ var _css_css__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./css.css */ "./src/container/WhyUs/css.css");
/* harmony import */ var _css_css__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_css_css__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _assets_img_otherPhotos_safety_png__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./../../assets/img/otherPhotos/safety.png */ "./src/assets/img/otherPhotos/safety.png");
/* harmony import */ var _assets_img_otherPhotos_safety_png__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_assets_img_otherPhotos_safety_png__WEBPACK_IMPORTED_MODULE_3__);
var _this = undefined,
  _jsxFileName = "/Users/vfhome/projects/dana_kerwen/src/container/WhyUs/index.js";




var WhyUs = function WhyUs() {
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "ContainerXl whyusContainer",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 9,
      columnNumber: 5
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 10,
      columnNumber: 9
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "whyusHeading",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 11,
      columnNumber: 11
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("h1", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 12,
      columnNumber: 13
    }
  }, "\u041F\u043E\u0447\u0435\u043C\u0443 \u0437\u0430\u043A\u0430\u0437\u0447\u0438\u043A\u0438 \u0432\u044B\u0431\u0438\u0440\u0430\u044E\u0442 \u043D\u0430\u0441"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 13,
      columnNumber: 13
    }
  }, "\u041A\u043E\u043C\u043F\u0430\u043D\u0438\u044F \u0441\u0442\u0440\u0435\u043C\u0438\u0442\u0441\u044F \u0443\u0434\u0435\u0440\u0436\u0438\u0432\u0430\u0442\u044C \u043B\u0438\u0434\u0435\u0440\u0441\u043A\u0438\u0435 \u043F\u043E\u0437\u0438\u0446\u0438\u0438 \u043F\u043E \u0441\u043E\u043E\u0442\u0432\u0435\u0442\u0441\u0442\u0432\u0438\u044E \u0442\u0440\u0435\u0431\u043E\u0432\u0430\u043D\u0438\u044F\u043C \u043A\u043B\u0438\u0435\u043D\u0442\u043E\u0432")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "whyusCardsHolder",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 15,
      columnNumber: 12
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_component_WhyUsCard__WEBPACK_IMPORTED_MODULE_1__["default"], {
    image: _assets_img_otherPhotos_safety_png__WEBPACK_IMPORTED_MODULE_3___default.a,
    header: "\u0411\u0435\u0437\u043E\u043F\u0430\u0441\u043D\u043E\u0441\u0442\u044C",
    text: "\u041F\u0435\u0440\u0435\u0432\u043E\u0437\u043A\u0430 \u0433\u0440\u0443\u0437\u043E\u0432 \u0441\u043E\u0433\u043B\u0430\u0441\u043D\u043E \u043D\u043E\u0440\u043C \u043F\u0440\u0438 \u043F\u043E\u043C\u043E\u0449\u0438 \u043D\u0430\u0434\u0435\u0436\u043D\u043E\u0439 \u0442\u0440\u0430\u043D\u0441\u043F\u043E\u0440\u0442\u043D\u043E\u0439 \u0442\u0435\u0445\u043D\u0438\u043A\u0438",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 16,
      columnNumber: 13
    }
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_component_WhyUsCard__WEBPACK_IMPORTED_MODULE_1__["default"], {
    image: _assets_img_otherPhotos_safety_png__WEBPACK_IMPORTED_MODULE_3___default.a,
    header: "\u0411\u0435\u0437\u043E\u043F\u0430\u0441\u043D\u043E\u0441\u0442\u044C",
    text: "\u041F\u0435\u0440\u0435\u0432\u043E\u0437\u043A\u0430 \u0433\u0440\u0443\u0437\u043E\u0432 \u0441\u043E\u0433\u043B\u0430\u0441\u043D\u043E \u043D\u043E\u0440\u043C \u043F\u0440\u0438 \u043F\u043E\u043C\u043E\u0449\u0438 \u043D\u0430\u0434\u0435\u0436\u043D\u043E\u0439 \u0442\u0440\u0430\u043D\u0441\u043F\u043E\u0440\u0442\u043D\u043E\u0439 \u0442\u0435\u0445\u043D\u0438\u043A\u0438",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 17,
      columnNumber: 13
    }
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_component_WhyUsCard__WEBPACK_IMPORTED_MODULE_1__["default"], {
    image: _assets_img_otherPhotos_safety_png__WEBPACK_IMPORTED_MODULE_3___default.a,
    header: "\u0411\u0435\u0437\u043E\u043F\u0430\u0441\u043D\u043E\u0441\u0442\u044C",
    text: "\u041F\u0435\u0440\u0435\u0432\u043E\u0437\u043A\u0430 \u0433\u0440\u0443\u0437\u043E\u0432 \u0441\u043E\u0433\u043B\u0430\u0441\u043D\u043E \u043D\u043E\u0440\u043C \u043F\u0440\u0438 \u043F\u043E\u043C\u043E\u0449\u0438 \u043D\u0430\u0434\u0435\u0436\u043D\u043E\u0439 \u0442\u0440\u0430\u043D\u0441\u043F\u043E\u0440\u0442\u043D\u043E\u0439 \u0442\u0435\u0445\u043D\u0438\u043A\u0438",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 18,
      columnNumber: 13
    }
  })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 20,
      columnNumber: 12
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("button", {
    className: "dklButton",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 21,
      columnNumber: 13
    }
  }, "\u041D\u0430\u0448\u0438 \u0443\u0441\u043B\u0443\u0433\u0438"))));
};
/* harmony default export */ __webpack_exports__["default"] = (WhyUs);

/***/ }),

/***/ "./src/index.css":
/*!***********************!*\
  !*** ./src/index.css ***!
  \***********************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {


var content = __webpack_require__(/*! !../node_modules/css-loader??ref--6-oneOf-3-1!../node_modules/postcss-loader/src??postcss!./index.css */ "./node_modules/css-loader/index.js?!./node_modules/postcss-loader/src/index.js?!./src/index.css");

if(typeof content === 'string') content = [[module.i, content, '']];

var transform;
var insertInto;



var options = {"hmr":true}

options.transform = transform
options.insertInto = undefined;

var update = __webpack_require__(/*! ../node_modules/style-loader/lib/addStyles.js */ "./node_modules/style-loader/lib/addStyles.js")(content, options);

if(content.locals) module.exports = content.locals;

if(true) {
	module.hot.accept(/*! !../node_modules/css-loader??ref--6-oneOf-3-1!../node_modules/postcss-loader/src??postcss!./index.css */ "./node_modules/css-loader/index.js?!./node_modules/postcss-loader/src/index.js?!./src/index.css", function() {
		var newContent = __webpack_require__(/*! !../node_modules/css-loader??ref--6-oneOf-3-1!../node_modules/postcss-loader/src??postcss!./index.css */ "./node_modules/css-loader/index.js?!./node_modules/postcss-loader/src/index.js?!./src/index.css");

		if(typeof newContent === 'string') newContent = [[module.i, newContent, '']];

		var locals = (function(a, b) {
			var key, idx = 0;

			for(key in a) {
				if(!b || a[key] !== b[key]) return false;
				idx++;
			}

			for(key in b) idx--;

			return idx === 0;
		}(content.locals, newContent.locals));

		if(!locals) throw new Error('Aborting CSS HMR due to changed css-modules locals.');

		update(newContent);
	});

	module.hot.dispose(function() { update(); });
}

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_dom_client__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-dom/client */ "./node_modules/react-dom/client.js");
/* harmony import */ var react_dom_client__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_dom_client__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _index_css__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./index.css */ "./src/index.css");
/* harmony import */ var _index_css__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_index_css__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _App__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./App */ "./src/App.js");
/* harmony import */ var _reportWebVitals__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./reportWebVitals */ "./src/reportWebVitals.js");
var _jsxFileName = "/Users/vfhome/projects/dana_kerwen/src/index.js";





var root = react_dom_client__WEBPACK_IMPORTED_MODULE_1___default.a.createRoot(document.getElementById('root'));
root.render( /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_0___default.a.StrictMode, {
  __self: undefined,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 9,
    columnNumber: 3
  }
}, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_App__WEBPACK_IMPORTED_MODULE_3__["default"], {
  __self: undefined,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 10,
    columnNumber: 5
  }
})));
Object(_reportWebVitals__WEBPACK_IMPORTED_MODULE_4__["default"])();

/***/ }),

/***/ "./src/layout/Footer/css.css":
/*!***********************************!*\
  !*** ./src/layout/Footer/css.css ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {


var content = __webpack_require__(/*! !../../../node_modules/css-loader??ref--6-oneOf-3-1!../../../node_modules/postcss-loader/src??postcss!./css.css */ "./node_modules/css-loader/index.js?!./node_modules/postcss-loader/src/index.js?!./src/layout/Footer/css.css");

if(typeof content === 'string') content = [[module.i, content, '']];

var transform;
var insertInto;



var options = {"hmr":true}

options.transform = transform
options.insertInto = undefined;

var update = __webpack_require__(/*! ../../../node_modules/style-loader/lib/addStyles.js */ "./node_modules/style-loader/lib/addStyles.js")(content, options);

if(content.locals) module.exports = content.locals;

if(true) {
	module.hot.accept(/*! !../../../node_modules/css-loader??ref--6-oneOf-3-1!../../../node_modules/postcss-loader/src??postcss!./css.css */ "./node_modules/css-loader/index.js?!./node_modules/postcss-loader/src/index.js?!./src/layout/Footer/css.css", function() {
		var newContent = __webpack_require__(/*! !../../../node_modules/css-loader??ref--6-oneOf-3-1!../../../node_modules/postcss-loader/src??postcss!./css.css */ "./node_modules/css-loader/index.js?!./node_modules/postcss-loader/src/index.js?!./src/layout/Footer/css.css");

		if(typeof newContent === 'string') newContent = [[module.i, newContent, '']];

		var locals = (function(a, b) {
			var key, idx = 0;

			for(key in a) {
				if(!b || a[key] !== b[key]) return false;
				idx++;
			}

			for(key in b) idx--;

			return idx === 0;
		}(content.locals, newContent.locals));

		if(!locals) throw new Error('Aborting CSS HMR due to changed css-modules locals.');

		update(newContent);
	});

	module.hot.dispose(function() { update(); });
}

/***/ }),

/***/ "./src/layout/Footer/index.js":
/*!************************************!*\
  !*** ./src/layout/Footer/index.js ***!
  \************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _css_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./css.css */ "./src/layout/Footer/css.css");
/* harmony import */ var _css_css__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_css_css__WEBPACK_IMPORTED_MODULE_1__);
var _this = undefined,
  _jsxFileName = "/Users/vfhome/projects/dana_kerwen/src/layout/Footer/index.js";


var Footer = function Footer() {
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_0___default.a.Fragment, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "footer ContainerXl",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 7,
      columnNumber: 5
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 8,
      columnNumber: 9
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 9,
      columnNumber: 13
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("h2", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 10,
      columnNumber: 17
    }
  }, "\u041D\u0430\u0432\u0438\u0433\u0430\u0446\u0438\u044F"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("ul", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 11,
      columnNumber: 17
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("li", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 12,
      columnNumber: 21
    }
  }, "\u0413\u043B\u0430\u0432\u043D\u0430\u044F"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("li", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 13,
      columnNumber: 21
    }
  }, "\u0413\u0440\u0443\u0437\u043E\u043F\u0435\u0440\u0435\u0432\u043E\u0437\u043A\u0438"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("li", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 14,
      columnNumber: 21
    }
  }, "\u041A\u0430\u0440\u044C\u0435\u0440\u0430"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("li", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 15,
      columnNumber: 21
    }
  }, "\u041D\u043E\u0432\u043E\u0441\u0442\u0438"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("li", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 16,
      columnNumber: 21
    }
  }, "\u0421\u0432\u044F\u0436\u0438\u0442\u0435\u0441\u044C \u0441 \u043D\u0430\u043C\u0438"))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 19,
      columnNumber: 13
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("h2", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 20,
      columnNumber: 17
    }
  }, "\u0413\u0440\u0443\u0437\u043E\u043F\u0435\u0440\u0435\u0432\u043E\u0437\u043A\u0438"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("ul", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 21,
      columnNumber: 17
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("li", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 22,
      columnNumber: 21
    }
  }, "Ipsum pariatur deserunt id ex commodo."), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("li", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 23,
      columnNumber: 21
    }
  }, "Laborum duis ullamco elit ea tempor velit cupidatat "), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("li", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 24,
      columnNumber: 21
    }
  }, "Lorem ut elit aliqua reprehenderit."))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 27,
      columnNumber: 13
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("h2", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 28,
      columnNumber: 17
    }
  }, "\u0421\u0432\u044F\u0436\u0438\u0442\u0435\u0441\u044C \u0441 \u043D\u0430\u043C\u0438"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("ul", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 29,
      columnNumber: 17
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("li", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 30,
      columnNumber: 21
    }
  }, "+993 64 12 12 12"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("li", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 31,
      columnNumber: 21
    }
  }, "+993 61 52 42 22")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("h2", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 33,
      columnNumber: 17
    }
  }, "\u042D\u043B\u0435\u043A\u0442\u0440\u043E\u043D\u043D\u0430\u044F \u043F\u043E\u0447\u0442\u0430"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("ul", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 34,
      columnNumber: 17
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("li", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 35,
      columnNumber: 21
    }
  }, "info@dkl.company"))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 38,
      columnNumber: 13
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("h2", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 39,
      columnNumber: 17
    }
  }, "\u0410\u0434\u0440\u0435\u0441"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("ul", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 40,
      columnNumber: 17
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("li", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 41,
      columnNumber: 21
    }
  }, "Fugiat occaecat 582 j. Mollit do voluptate excepteur 6. "))))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "footerBottomLine",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 46,
      columnNumber: 5
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 47,
      columnNumber: 9
    }
  }, "\xA9 Dana Kerwen HJ - All right reserved.")));
};
/* harmony default export */ __webpack_exports__["default"] = (Footer);

/***/ }),

/***/ "./src/layout/Navbar/css.css":
/*!***********************************!*\
  !*** ./src/layout/Navbar/css.css ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {


var content = __webpack_require__(/*! !../../../node_modules/css-loader??ref--6-oneOf-3-1!../../../node_modules/postcss-loader/src??postcss!./css.css */ "./node_modules/css-loader/index.js?!./node_modules/postcss-loader/src/index.js?!./src/layout/Navbar/css.css");

if(typeof content === 'string') content = [[module.i, content, '']];

var transform;
var insertInto;



var options = {"hmr":true}

options.transform = transform
options.insertInto = undefined;

var update = __webpack_require__(/*! ../../../node_modules/style-loader/lib/addStyles.js */ "./node_modules/style-loader/lib/addStyles.js")(content, options);

if(content.locals) module.exports = content.locals;

if(true) {
	module.hot.accept(/*! !../../../node_modules/css-loader??ref--6-oneOf-3-1!../../../node_modules/postcss-loader/src??postcss!./css.css */ "./node_modules/css-loader/index.js?!./node_modules/postcss-loader/src/index.js?!./src/layout/Navbar/css.css", function() {
		var newContent = __webpack_require__(/*! !../../../node_modules/css-loader??ref--6-oneOf-3-1!../../../node_modules/postcss-loader/src??postcss!./css.css */ "./node_modules/css-loader/index.js?!./node_modules/postcss-loader/src/index.js?!./src/layout/Navbar/css.css");

		if(typeof newContent === 'string') newContent = [[module.i, newContent, '']];

		var locals = (function(a, b) {
			var key, idx = 0;

			for(key in a) {
				if(!b || a[key] !== b[key]) return false;
				idx++;
			}

			for(key in b) idx--;

			return idx === 0;
		}(content.locals, newContent.locals));

		if(!locals) throw new Error('Aborting CSS HMR due to changed css-modules locals.');

		update(newContent);
	});

	module.hot.dispose(function() { update(); });
}

/***/ }),

/***/ "./src/layout/Navbar/index.js":
/*!************************************!*\
  !*** ./src/layout/Navbar/index.js ***!
  \************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _Users_vfhome_projects_dana_kerwen_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/slicedToArray */ "./node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/slicedToArray.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _css_css__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./css.css */ "./src/layout/Navbar/css.css");
/* harmony import */ var _css_css__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_css_css__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _assets_img_svg_icons__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../assets/img/svg/icons */ "./src/assets/img/svg/icons.js");
/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react-router-dom */ "./node_modules/react-router-dom/dist/index.js");
/* harmony import */ var _assets_img_logo_png__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./../../assets/img/logo.png */ "./src/assets/img/logo.png");
/* harmony import */ var _assets_img_logo_png__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_assets_img_logo_png__WEBPACK_IMPORTED_MODULE_5__);

var _this = undefined,
  _jsxFileName = "/Users/vfhome/projects/dana_kerwen/src/layout/Navbar/index.js";
// /* eslint-disable no-unused-vars */







var Navbar = function Navbar() {
  var _useLocation = Object(react_router_dom__WEBPACK_IMPORTED_MODULE_4__["useLocation"])(),
    pathname = _useLocation.pathname;
  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_1__["useState"])(false),
    _useState2 = Object(_Users_vfhome_projects_dana_kerwen_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_0__["default"])(_useState, 2),
    opened = _useState2[0],
    setOpened = _useState2[1];
  var langRef = Object(react__WEBPACK_IMPORTED_MODULE_1__["useRef"])();
  var navRef = Object(react__WEBPACK_IMPORTED_MODULE_1__["useRef"])();
  var logoRef = Object(react__WEBPACK_IMPORTED_MODULE_1__["useRef"])();
  var logoNameRef = Object(react__WEBPACK_IMPORTED_MODULE_1__["useRef"])();
  var menuRef = Object(react__WEBPACK_IMPORTED_MODULE_1__["useRef"])();
  var closeRef = Object(react__WEBPACK_IMPORTED_MODULE_1__["useRef"])();
  var _useState3 = Object(react__WEBPACK_IMPORTED_MODULE_1__["useState"])(false),
    _useState4 = Object(_Users_vfhome_projects_dana_kerwen_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_0__["default"])(_useState3, 2),
    isActive = _useState4[0],
    setIsActive = _useState4[1];
  var navigate = Object(react_router_dom__WEBPACK_IMPORTED_MODULE_4__["useNavigate"])();
  var openLang = function openLang() {
    var lang = langRef.current;
    lang.classList.toggle('langActive');
  };

  // useEffect(()=>{
  //     window.addEventListener('scroll', ()=>{
  //         if(window.scrollY >= 80){
  //             logoRef.current.classList.add("activeLogo")
  //             logoNameRef.current.classList.add('activeLogoSize')
  //             setIsActive(true)
  //         }else{
  //             logoRef.current.classList.remove("activeLogo")
  //             logoNameRef.current.classList.remove('activeLogoSize')
  //             setIsActive(false)
  //         }
  //     })
  // }, [])

  Object(react__WEBPACK_IMPORTED_MODULE_1__["useEffect"])(function () {
    var j = null;
    var nav = navRef.current;
    var logo = logoRef.current;
    var logoName = logoNameRef.current;
    var menu = menuRef.current;
    var close = closeRef.current;
    menu.classList.remove('opacityNone');
    menu.classList.remove('animatedMenu');
    menu.classList.remove('menuNameClass');
    close.classList.remove('opacityBlock');
    nav.classList.remove("activeNavbar");
    setOpened(false);
    if (opened) {
      nav.style.borderBottom = "none";
    } else {
      nav.style.borderBottom = "none";
    }
    isActive ? j = null : logo.classList.remove("activeLogo");
    // eslint-disable-next-line no-unused-vars
    isActive ? j = null : logoName.classList.remove('activeLogoSize');
  }, [pathname]);
  var openNav = function openNav() {
    var j = null;
    var nav = navRef.current;
    var logo = logoRef.current;
    var logoName = logoNameRef.current;
    var menu = menuRef.current;
    var close = closeRef.current;
    menu.classList.toggle('opacityNone');
    menu.classList.toggle('animatedMenu');
    menu.classList.toggle('menuNameClass');
    close.classList.toggle('opacityBlock');
    nav.classList.toggle("activeNavbar");
    setOpened(!opened);
    if (opened) {
      nav.style.borderBottom = "none";
    } else {
      nav.style.borderBottom = "1px solid #fff";
    }
    isActive ? j = null : logo.classList.toggle("activeLogo");
    isActive ? j = null : logoName.classList.toggle('activeLogoSize');
  };
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
    className: "navbarContainer",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 95,
      columnNumber: 5
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 96,
      columnNumber: 9
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
    className: "navbar",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 97,
      columnNumber: 13
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
    className: "navbarLogo",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 98,
      columnNumber: 17
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
    ref: logoNameRef,
    onClick: function onClick() {
      navigate('/');
    },
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 99,
      columnNumber: 21
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("img", {
    src: _assets_img_logo_png__WEBPACK_IMPORTED_MODULE_5___default.a,
    alt: "Logo",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 100,
      columnNumber: 25
    }
  })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
    ref: logoRef,
    onClick: function onClick() {
      navigate('/');
    },
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 102,
      columnNumber: 21
    }
  })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
    className: "navbarControl",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 106,
      columnNumber: 17
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
    className: "navbarMenu",
    onClick: openNav,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 107,
      columnNumber: 21
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
    ref: menuRef,
    className: "animatedMenu",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 108,
      columnNumber: 25
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_assets_img_svg_icons__WEBPACK_IMPORTED_MODULE_3__["MenuLine1"], {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 109,
      columnNumber: 29
    }
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_assets_img_svg_icons__WEBPACK_IMPORTED_MODULE_3__["MenuLine2"], {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 110,
      columnNumber: 29
    }
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_assets_img_svg_icons__WEBPACK_IMPORTED_MODULE_3__["MenuLine3"], {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 111,
      columnNumber: 29
    }
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
    className: "navCloseIcon",
    ref: closeRef,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 112,
      columnNumber: 29
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_assets_img_svg_icons__WEBPACK_IMPORTED_MODULE_3__["Closelineleft"], {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 113,
      columnNumber: 33
    }
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_assets_img_svg_icons__WEBPACK_IMPORTED_MODULE_3__["Closelineright"], {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 114,
      columnNumber: 33
    }
  })))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
    className: "langNtheme pcOnly",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 118,
      columnNumber: 21
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 133,
      columnNumber: 25
    }
  })))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
    className: "openedNavbar",
    ref: navRef,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 138,
      columnNumber: 13
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
    className: "openedNavbarText",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 139,
      columnNumber: 17
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
    className: "langNtheme langNthemeSpecial portableOnly",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 140,
      columnNumber: 21
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 155,
      columnNumber: 25
    }
  })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 159,
      columnNumber: 21
    }
  })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 163,
      columnNumber: 17
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("ul", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 164,
      columnNumber: 21
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("li", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 165,
      columnNumber: 25
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_4__["Link"], {
    to: "/about",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 165,
      columnNumber: 29
    }
  }, "\u041E \u041A\u043E\u043C\u043F\u0430\u043D\u0438\u0438")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("li", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 166,
      columnNumber: 25
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_4__["Link"], {
    to: "/Serivces/logistics",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 166,
      columnNumber: 29
    }
  }, "\u0423\u0441\u043B\u0443\u0433\u0438 \u0433\u0440\u0443\u0437\u043E\u043F\u0435\u0440\u0435\u0432\u043E\u0437\u043E\u043A")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("li", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 167,
      columnNumber: 25
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_4__["Link"], {
    to: "/Career",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 167,
      columnNumber: 29
    }
  }, "\u041A\u0430\u0440\u044C\u0435\u0440\u0430")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("li", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 168,
      columnNumber: 25
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_4__["Link"], {
    to: "/News",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 168,
      columnNumber: 29
    }
  }, "\u041D\u043E\u0432\u043E\u0441\u0442\u0438")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("li", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 169,
      columnNumber: 25
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_4__["Link"], {
    to: "/Contact",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 169,
      columnNumber: 29
    }
  }, "\u041A\u043E\u043D\u0442\u0430\u043A\u0442\u044B")))))));
};
/* harmony default export */ __webpack_exports__["default"] = (Navbar);

/***/ }),

/***/ "./src/page/About/css.css":
/*!********************************!*\
  !*** ./src/page/About/css.css ***!
  \********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {


var content = __webpack_require__(/*! !../../../node_modules/css-loader??ref--6-oneOf-3-1!../../../node_modules/postcss-loader/src??postcss!./css.css */ "./node_modules/css-loader/index.js?!./node_modules/postcss-loader/src/index.js?!./src/page/About/css.css");

if(typeof content === 'string') content = [[module.i, content, '']];

var transform;
var insertInto;



var options = {"hmr":true}

options.transform = transform
options.insertInto = undefined;

var update = __webpack_require__(/*! ../../../node_modules/style-loader/lib/addStyles.js */ "./node_modules/style-loader/lib/addStyles.js")(content, options);

if(content.locals) module.exports = content.locals;

if(true) {
	module.hot.accept(/*! !../../../node_modules/css-loader??ref--6-oneOf-3-1!../../../node_modules/postcss-loader/src??postcss!./css.css */ "./node_modules/css-loader/index.js?!./node_modules/postcss-loader/src/index.js?!./src/page/About/css.css", function() {
		var newContent = __webpack_require__(/*! !../../../node_modules/css-loader??ref--6-oneOf-3-1!../../../node_modules/postcss-loader/src??postcss!./css.css */ "./node_modules/css-loader/index.js?!./node_modules/postcss-loader/src/index.js?!./src/page/About/css.css");

		if(typeof newContent === 'string') newContent = [[module.i, newContent, '']];

		var locals = (function(a, b) {
			var key, idx = 0;

			for(key in a) {
				if(!b || a[key] !== b[key]) return false;
				idx++;
			}

			for(key in b) idx--;

			return idx === 0;
		}(content.locals, newContent.locals));

		if(!locals) throw new Error('Aborting CSS HMR due to changed css-modules locals.');

		update(newContent);
	});

	module.hot.dispose(function() { update(); });
}

/***/ }),

/***/ "./src/page/About/index.js":
/*!*********************************!*\
  !*** ./src/page/About/index.js ***!
  \*********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _container_Experience__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../container/Experience */ "./src/container/Experience/index.js");
/* harmony import */ var _css_css__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./css.css */ "./src/page/About/css.css");
/* harmony import */ var _css_css__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_css_css__WEBPACK_IMPORTED_MODULE_2__);
var _this = undefined,
  _jsxFileName = "/Users/vfhome/projects/dana_kerwen/src/page/About/index.js";



var About = function About() {
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "about",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 7,
      columnNumber: 5
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_container_Experience__WEBPACK_IMPORTED_MODULE_1__["default"], {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 8,
      columnNumber: 9
    }
  }));
};
/* harmony default export */ __webpack_exports__["default"] = (About);

/***/ }),

/***/ "./src/page/Home/css.css":
/*!*******************************!*\
  !*** ./src/page/Home/css.css ***!
  \*******************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {


var content = __webpack_require__(/*! !../../../node_modules/css-loader??ref--6-oneOf-3-1!../../../node_modules/postcss-loader/src??postcss!./css.css */ "./node_modules/css-loader/index.js?!./node_modules/postcss-loader/src/index.js?!./src/page/Home/css.css");

if(typeof content === 'string') content = [[module.i, content, '']];

var transform;
var insertInto;



var options = {"hmr":true}

options.transform = transform
options.insertInto = undefined;

var update = __webpack_require__(/*! ../../../node_modules/style-loader/lib/addStyles.js */ "./node_modules/style-loader/lib/addStyles.js")(content, options);

if(content.locals) module.exports = content.locals;

if(true) {
	module.hot.accept(/*! !../../../node_modules/css-loader??ref--6-oneOf-3-1!../../../node_modules/postcss-loader/src??postcss!./css.css */ "./node_modules/css-loader/index.js?!./node_modules/postcss-loader/src/index.js?!./src/page/Home/css.css", function() {
		var newContent = __webpack_require__(/*! !../../../node_modules/css-loader??ref--6-oneOf-3-1!../../../node_modules/postcss-loader/src??postcss!./css.css */ "./node_modules/css-loader/index.js?!./node_modules/postcss-loader/src/index.js?!./src/page/Home/css.css");

		if(typeof newContent === 'string') newContent = [[module.i, newContent, '']];

		var locals = (function(a, b) {
			var key, idx = 0;

			for(key in a) {
				if(!b || a[key] !== b[key]) return false;
				idx++;
			}

			for(key in b) idx--;

			return idx === 0;
		}(content.locals, newContent.locals));

		if(!locals) throw new Error('Aborting CSS HMR due to changed css-modules locals.');

		update(newContent);
	});

	module.hot.dispose(function() { update(); });
}

/***/ }),

/***/ "./src/page/Home/index.js":
/*!********************************!*\
  !*** ./src/page/Home/index.js ***!
  \********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _container_News__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../container/News */ "./src/container/News/index.js");
/* harmony import */ var _container_OrderBlank__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../container/OrderBlank */ "./src/container/OrderBlank/index.js");
/* harmony import */ var _container_Services__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../container/Services */ "./src/container/Services/index.js");
/* harmony import */ var _container_WeAreDK__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../container/WeAreDK */ "./src/container/WeAreDK/index.js");
/* harmony import */ var _container_WhyUs__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../container/WhyUs */ "./src/container/WhyUs/index.js");
/* harmony import */ var _css_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./css.css */ "./src/page/Home/css.css");
/* harmony import */ var _css_css__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(_css_css__WEBPACK_IMPORTED_MODULE_6__);
var _this = undefined,
  _jsxFileName = "/Users/vfhome/projects/dana_kerwen/src/page/Home/index.js";







var Home = function Home() {
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 11,
      columnNumber: 5
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_container_WeAreDK__WEBPACK_IMPORTED_MODULE_4__["default"], {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 12,
      columnNumber: 7
    }
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_container_Services__WEBPACK_IMPORTED_MODULE_3__["default"], {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 13,
      columnNumber: 7
    }
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_container_OrderBlank__WEBPACK_IMPORTED_MODULE_2__["default"], {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 14,
      columnNumber: 7
    }
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_container_WhyUs__WEBPACK_IMPORTED_MODULE_5__["default"], {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 15,
      columnNumber: 7
    }
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_container_News__WEBPACK_IMPORTED_MODULE_1__["default"], {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 16,
      columnNumber: 7
    }
  }));
};
/* harmony default export */ __webpack_exports__["default"] = (Home);

/***/ }),

/***/ "./src/reportWebVitals.js":
/*!********************************!*\
  !*** ./src/reportWebVitals.js ***!
  \********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
var reportWebVitals = function reportWebVitals(onPerfEntry) {
  if (onPerfEntry && onPerfEntry instanceof Function) {
    __webpack_require__.e(/*! import() */ 0).then(__webpack_require__.bind(null, /*! web-vitals */ "./node_modules/web-vitals/dist/web-vitals.js")).then(function (_ref) {
      var getCLS = _ref.getCLS,
        getFID = _ref.getFID,
        getFCP = _ref.getFCP,
        getLCP = _ref.getLCP,
        getTTFB = _ref.getTTFB;
      getCLS(onPerfEntry);
      getFID(onPerfEntry);
      getFCP(onPerfEntry);
      getLCP(onPerfEntry);
      getTTFB(onPerfEntry);
    });
  }
};
/* harmony default export */ __webpack_exports__["default"] = (reportWebVitals);

/***/ }),

/***/ 0:
/*!**********************************************************************************!*\
  !*** multi ./node_modules/react-dev-utils/webpackHotDevClient.js ./src/index.js ***!
  \**********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__(/*! /Users/vfhome/projects/dana_kerwen/node_modules/react-dev-utils/webpackHotDevClient.js */"./node_modules/react-dev-utils/webpackHotDevClient.js");
module.exports = __webpack_require__(/*! /Users/vfhome/projects/dana_kerwen/src/index.js */"./src/index.js");


/***/ })

},[[0,"runtime~main",1]]]);
//# sourceMappingURL=main.chunk.js.map