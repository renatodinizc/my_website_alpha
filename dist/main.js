/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./node_modules/css-loader/dist/cjs.js!./src/style.css":
/*!*************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./src/style.css ***!
  \*************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/sourceMaps.js */ "./node_modules/css-loader/dist/runtime/sourceMaps.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/getUrl.js */ "./node_modules/css-loader/dist/runtime/getUrl.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2__);
// Imports



var ___CSS_LOADER_URL_IMPORT_0___ = new URL(/* asset import */ __webpack_require__(/*! ./fonts/Montserrat/Montserrat-Light.woff */ "./src/fonts/Montserrat/Montserrat-Light.woff"), __webpack_require__.b);
var ___CSS_LOADER_URL_IMPORT_1___ = new URL(/* asset import */ __webpack_require__(/*! ./fonts/Montserrat/Montserrat-Medium.woff */ "./src/fonts/Montserrat/Montserrat-Medium.woff"), __webpack_require__.b);
var ___CSS_LOADER_URL_IMPORT_2___ = new URL(/* asset import */ __webpack_require__(/*! ./fonts/SF_Pro/SF-Pro-Text-Light.woff */ "./src/fonts/SF_Pro/SF-Pro-Text-Light.woff"), __webpack_require__.b);
var ___CSS_LOADER_URL_IMPORT_3___ = new URL(/* asset import */ __webpack_require__(/*! ./fonts/SF_Pro/SF-Pro-Text-Medium.woff */ "./src/fonts/SF_Pro/SF-Pro-Text-Medium.woff"), __webpack_require__.b);
var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));
var ___CSS_LOADER_URL_REPLACEMENT_0___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(___CSS_LOADER_URL_IMPORT_0___);
var ___CSS_LOADER_URL_REPLACEMENT_1___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(___CSS_LOADER_URL_IMPORT_1___);
var ___CSS_LOADER_URL_REPLACEMENT_2___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(___CSS_LOADER_URL_IMPORT_2___);
var ___CSS_LOADER_URL_REPLACEMENT_3___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(___CSS_LOADER_URL_IMPORT_3___);
// Module
___CSS_LOADER_EXPORT___.push([module.id, "body {\n  display: flex;\n  flex-direction: column;\n  background-color: rgb(245, 245, 247);\n}\n\nheader {\n  padding: 10px;\n  display: flex;\n  gap: 4%;\n  padding: 0% 4%;\n  background-color: rgb(49,49,50);\n  margin-left: -1%;\n  margin-right: -1%;\n  margin-top: -1%;\n}\n\nheader>* {\n  color: rgb(214,213,214);\n}\n\nheader :first-of-type {\n  font-size: 30px;\n}\nheader :nth-of-type(2) {\n  margin-left: auto;\n}\n\nheader>button {\n  border: none;\n  background-color: transparent;\n  padding: 20px 10px;\n  font-size: 20px;\n}\n\n#logo {\nfont-weight: bold;\n}\n\n#logo:hover {\n  transform: scale(1);\n  transition-duration: 0s;\n}\n\nheader>button:hover {\n  transform: scale(1.15);\n  transition-duration: 0.3s;\n}\n\n\n\n.projectBoard {\n  width: min(700px, 100%);\n  align-self: center;\n  display: grid;\n  grid-template-columns: repeat(2, 1fr);\n  gap: 2%;\n  margin: 1%;\n  margin-bottom: 30px;\n}\n\n.project {\n  display: flex;\n  border-radius: 1.2em;\n  flex-direction: column;\n  align-items: center;\n  height: 200px;\n  overflow: scroll;\n  padding: 5% 5%;\n  gap: 10%;\n  background-color: white;\n}\n\n.project:hover {\n  transform: scale(1.03);\n  transition-duration: 0.3s;\n  box-shadow: 0px 0px 20px 1px rgba(0, 0, 0, 0.2);\n}\n\n.project>* {\n  margin: 0px;\n}\n\n.project>img {\n  width: 64px;\n  height: auto;\n}\n\n.project>p {\n  text-align: center;\n}\n\n.essayBoard {\n  display: flex;\n  flex-direction: column;\n  width: min(700px, 100%);\n  align-self: center;\n  margin: 1%;\n  gap: 15px;\n}\n\n.essay {\n  border-radius: 1.2em;\n  display: flex;\n  flex-direction: column;\n  padding: 3% 4%;\n  max-height: 250px;\n  background-color: white;\n}\n\n.essay:hover {\n  transform: scale(1.03);\n  transition-duration: 0.3s;\n  box-shadow: 0px 0px 20px 1px rgba(0, 0, 0, 0.2);\n}\n\n.essay>* {\n  margin: 0.3%;\n}\n\n.essay>:nth-child(3) {\n  margin-top: 2.5%;\n  overflow: scroll;\n}\n\n#aboutMeBoard>* {\n\n}\n\n#aboutMeBoard {\n  display: grid;\n  align-self: center;\n  width: min(900px, 100%);\n  grid-template-columns: 1.1fr 1fr;\n  grid-template-rows: 70px 1fr;\n  gap: 2.5%;\n  margin: 2%;\n}\n\n#aboutMeBoard>img {\n  width: 90%;\n  height: auto;\n  grid-row: 1/3;\n  border-radius: 1.2em;\n  transform: rotate(-5deg);\n}\n\n#aboutMeBoard>p {\n  padding-right: 10%;\n  font-size: 1.1em;\n}\n\n#aboutMeBoard>h2 {\n  padding-right: 10%;\n  font-size: 2em;\n}\n\nfooter {\n  background-color: rgb(49,49,50);\n  color: rgb(214,213,214);\n  padding: 1.2% 0%;\n  display: flex;\n  justify-content: center;\n  margin-top: 1%;\n  margin-left: -1%;\n  margin-bottom: -3%;\n}\n\n* {\n  font-family: 'SF Pro', 'Montserrat', -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;\n}\n\n@font-face {\n  font-family: 'Montserrat';\n  src: url(" + ___CSS_LOADER_URL_REPLACEMENT_0___ + ") format('woff');\n  font-style: normal;\n  font-weight: normal;\n}\n\n@font-face {\n  font-family: 'Montserrat';\n  src: url(" + ___CSS_LOADER_URL_REPLACEMENT_1___ + ") format('woff');\n  font-style: normal;\n  font-weight: bold;\n}\n\n@font-face {\n  font-family: 'SF Pro';\n  src: url(" + ___CSS_LOADER_URL_REPLACEMENT_2___ + ") format('woff');\n  font-style: normal;\n  font-weight: normal;\n}\n\n@font-face {\n  font-family: 'SF Pro';\n  src: url(" + ___CSS_LOADER_URL_REPLACEMENT_3___ + ") format('woff');\n  font-style: normal;\n  font-weight: bold;\n}", "",{"version":3,"sources":["webpack://./src/style.css"],"names":[],"mappings":"AAAA;EACE,aAAa;EACb,sBAAsB;EACtB,oCAAoC;AACtC;;AAEA;EACE,aAAa;EACb,aAAa;EACb,OAAO;EACP,cAAc;EACd,+BAA+B;EAC/B,gBAAgB;EAChB,iBAAiB;EACjB,eAAe;AACjB;;AAEA;EACE,uBAAuB;AACzB;;AAEA;EACE,eAAe;AACjB;AACA;EACE,iBAAiB;AACnB;;AAEA;EACE,YAAY;EACZ,6BAA6B;EAC7B,kBAAkB;EAClB,eAAe;AACjB;;AAEA;AACA,iBAAiB;AACjB;;AAEA;EACE,mBAAmB;EACnB,uBAAuB;AACzB;;AAEA;EACE,sBAAsB;EACtB,yBAAyB;AAC3B;;;;AAIA;EACE,uBAAuB;EACvB,kBAAkB;EAClB,aAAa;EACb,qCAAqC;EACrC,OAAO;EACP,UAAU;EACV,mBAAmB;AACrB;;AAEA;EACE,aAAa;EACb,oBAAoB;EACpB,sBAAsB;EACtB,mBAAmB;EACnB,aAAa;EACb,gBAAgB;EAChB,cAAc;EACd,QAAQ;EACR,uBAAuB;AACzB;;AAEA;EACE,sBAAsB;EACtB,yBAAyB;EACzB,+CAA+C;AACjD;;AAEA;EACE,WAAW;AACb;;AAEA;EACE,WAAW;EACX,YAAY;AACd;;AAEA;EACE,kBAAkB;AACpB;;AAEA;EACE,aAAa;EACb,sBAAsB;EACtB,uBAAuB;EACvB,kBAAkB;EAClB,UAAU;EACV,SAAS;AACX;;AAEA;EACE,oBAAoB;EACpB,aAAa;EACb,sBAAsB;EACtB,cAAc;EACd,iBAAiB;EACjB,uBAAuB;AACzB;;AAEA;EACE,sBAAsB;EACtB,yBAAyB;EACzB,+CAA+C;AACjD;;AAEA;EACE,YAAY;AACd;;AAEA;EACE,gBAAgB;EAChB,gBAAgB;AAClB;;AAEA;;AAEA;;AAEA;EACE,aAAa;EACb,kBAAkB;EAClB,uBAAuB;EACvB,gCAAgC;EAChC,4BAA4B;EAC5B,SAAS;EACT,UAAU;AACZ;;AAEA;EACE,UAAU;EACV,YAAY;EACZ,aAAa;EACb,oBAAoB;EACpB,wBAAwB;AAC1B;;AAEA;EACE,kBAAkB;EAClB,gBAAgB;AAClB;;AAEA;EACE,kBAAkB;EAClB,cAAc;AAChB;;AAEA;EACE,+BAA+B;EAC/B,uBAAuB;EACvB,gBAAgB;EAChB,aAAa;EACb,uBAAuB;EACvB,cAAc;EACd,gBAAgB;EAChB,kBAAkB;AACpB;;AAEA;EACE,gKAAgK;AAClK;;AAEA;EACE,yBAAyB;EACzB,2DAAmE;EACnE,kBAAkB;EAClB,mBAAmB;AACrB;;AAEA;EACE,yBAAyB;EACzB,2DAAoE;EACpE,kBAAkB;EAClB,iBAAiB;AACnB;;AAEA;EACE,qBAAqB;EACrB,2DAAgE;EAChE,kBAAkB;EAClB,mBAAmB;AACrB;;AAEA;EACE,qBAAqB;EACrB,2DAAiE;EACjE,kBAAkB;EAClB,iBAAiB;AACnB","sourcesContent":["body {\n  display: flex;\n  flex-direction: column;\n  background-color: rgb(245, 245, 247);\n}\n\nheader {\n  padding: 10px;\n  display: flex;\n  gap: 4%;\n  padding: 0% 4%;\n  background-color: rgb(49,49,50);\n  margin-left: -1%;\n  margin-right: -1%;\n  margin-top: -1%;\n}\n\nheader>* {\n  color: rgb(214,213,214);\n}\n\nheader :first-of-type {\n  font-size: 30px;\n}\nheader :nth-of-type(2) {\n  margin-left: auto;\n}\n\nheader>button {\n  border: none;\n  background-color: transparent;\n  padding: 20px 10px;\n  font-size: 20px;\n}\n\n#logo {\nfont-weight: bold;\n}\n\n#logo:hover {\n  transform: scale(1);\n  transition-duration: 0s;\n}\n\nheader>button:hover {\n  transform: scale(1.15);\n  transition-duration: 0.3s;\n}\n\n\n\n.projectBoard {\n  width: min(700px, 100%);\n  align-self: center;\n  display: grid;\n  grid-template-columns: repeat(2, 1fr);\n  gap: 2%;\n  margin: 1%;\n  margin-bottom: 30px;\n}\n\n.project {\n  display: flex;\n  border-radius: 1.2em;\n  flex-direction: column;\n  align-items: center;\n  height: 200px;\n  overflow: scroll;\n  padding: 5% 5%;\n  gap: 10%;\n  background-color: white;\n}\n\n.project:hover {\n  transform: scale(1.03);\n  transition-duration: 0.3s;\n  box-shadow: 0px 0px 20px 1px rgba(0, 0, 0, 0.2);\n}\n\n.project>* {\n  margin: 0px;\n}\n\n.project>img {\n  width: 64px;\n  height: auto;\n}\n\n.project>p {\n  text-align: center;\n}\n\n.essayBoard {\n  display: flex;\n  flex-direction: column;\n  width: min(700px, 100%);\n  align-self: center;\n  margin: 1%;\n  gap: 15px;\n}\n\n.essay {\n  border-radius: 1.2em;\n  display: flex;\n  flex-direction: column;\n  padding: 3% 4%;\n  max-height: 250px;\n  background-color: white;\n}\n\n.essay:hover {\n  transform: scale(1.03);\n  transition-duration: 0.3s;\n  box-shadow: 0px 0px 20px 1px rgba(0, 0, 0, 0.2);\n}\n\n.essay>* {\n  margin: 0.3%;\n}\n\n.essay>:nth-child(3) {\n  margin-top: 2.5%;\n  overflow: scroll;\n}\n\n#aboutMeBoard>* {\n\n}\n\n#aboutMeBoard {\n  display: grid;\n  align-self: center;\n  width: min(900px, 100%);\n  grid-template-columns: 1.1fr 1fr;\n  grid-template-rows: 70px 1fr;\n  gap: 2.5%;\n  margin: 2%;\n}\n\n#aboutMeBoard>img {\n  width: 90%;\n  height: auto;\n  grid-row: 1/3;\n  border-radius: 1.2em;\n  transform: rotate(-5deg);\n}\n\n#aboutMeBoard>p {\n  padding-right: 10%;\n  font-size: 1.1em;\n}\n\n#aboutMeBoard>h2 {\n  padding-right: 10%;\n  font-size: 2em;\n}\n\nfooter {\n  background-color: rgb(49,49,50);\n  color: rgb(214,213,214);\n  padding: 1.2% 0%;\n  display: flex;\n  justify-content: center;\n  margin-top: 1%;\n  margin-left: -1%;\n  margin-bottom: -3%;\n}\n\n* {\n  font-family: 'SF Pro', 'Montserrat', -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;\n}\n\n@font-face {\n  font-family: 'Montserrat';\n  src: url('./fonts/Montserrat/Montserrat-Light.woff') format('woff');\n  font-style: normal;\n  font-weight: normal;\n}\n\n@font-face {\n  font-family: 'Montserrat';\n  src: url('./fonts/Montserrat/Montserrat-Medium.woff') format('woff');\n  font-style: normal;\n  font-weight: bold;\n}\n\n@font-face {\n  font-family: 'SF Pro';\n  src: url('./fonts/SF_Pro/SF-Pro-Text-Light.woff') format('woff');\n  font-style: normal;\n  font-weight: normal;\n}\n\n@font-face {\n  font-family: 'SF Pro';\n  src: url('./fonts/SF_Pro/SF-Pro-Text-Medium.woff') format('woff');\n  font-style: normal;\n  font-weight: bold;\n}"],"sourceRoot":""}]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/api.js":
/*!*****************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/api.js ***!
  \*****************************************************/
/***/ ((module) => {



/*
  MIT License http://www.opensource.org/licenses/mit-license.php
  Author Tobias Koppers @sokra
*/
module.exports = function (cssWithMappingToString) {
  var list = []; // return the list of modules as css string

  list.toString = function toString() {
    return this.map(function (item) {
      var content = "";
      var needLayer = typeof item[5] !== "undefined";

      if (item[4]) {
        content += "@supports (".concat(item[4], ") {");
      }

      if (item[2]) {
        content += "@media ".concat(item[2], " {");
      }

      if (needLayer) {
        content += "@layer".concat(item[5].length > 0 ? " ".concat(item[5]) : "", " {");
      }

      content += cssWithMappingToString(item);

      if (needLayer) {
        content += "}";
      }

      if (item[2]) {
        content += "}";
      }

      if (item[4]) {
        content += "}";
      }

      return content;
    }).join("");
  }; // import a list of modules into the list


  list.i = function i(modules, media, dedupe, supports, layer) {
    if (typeof modules === "string") {
      modules = [[null, modules, undefined]];
    }

    var alreadyImportedModules = {};

    if (dedupe) {
      for (var k = 0; k < this.length; k++) {
        var id = this[k][0];

        if (id != null) {
          alreadyImportedModules[id] = true;
        }
      }
    }

    for (var _k = 0; _k < modules.length; _k++) {
      var item = [].concat(modules[_k]);

      if (dedupe && alreadyImportedModules[item[0]]) {
        continue;
      }

      if (typeof layer !== "undefined") {
        if (typeof item[5] === "undefined") {
          item[5] = layer;
        } else {
          item[1] = "@layer".concat(item[5].length > 0 ? " ".concat(item[5]) : "", " {").concat(item[1], "}");
          item[5] = layer;
        }
      }

      if (media) {
        if (!item[2]) {
          item[2] = media;
        } else {
          item[1] = "@media ".concat(item[2], " {").concat(item[1], "}");
          item[2] = media;
        }
      }

      if (supports) {
        if (!item[4]) {
          item[4] = "".concat(supports);
        } else {
          item[1] = "@supports (".concat(item[4], ") {").concat(item[1], "}");
          item[4] = supports;
        }
      }

      list.push(item);
    }
  };

  return list;
};

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/getUrl.js":
/*!********************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/getUrl.js ***!
  \********************************************************/
/***/ ((module) => {



module.exports = function (url, options) {
  if (!options) {
    options = {};
  }

  if (!url) {
    return url;
  }

  url = String(url.__esModule ? url.default : url); // If url is already wrapped in quotes, remove them

  if (/^['"].*['"]$/.test(url)) {
    url = url.slice(1, -1);
  }

  if (options.hash) {
    url += options.hash;
  } // Should url be wrapped?
  // See https://drafts.csswg.org/css-values-3/#urls


  if (/["'() \t\n]|(%20)/.test(url) || options.needQuotes) {
    return "\"".concat(url.replace(/"/g, '\\"').replace(/\n/g, "\\n"), "\"");
  }

  return url;
};

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/sourceMaps.js":
/*!************************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/sourceMaps.js ***!
  \************************************************************/
/***/ ((module) => {



module.exports = function (item) {
  var content = item[1];
  var cssMapping = item[3];

  if (!cssMapping) {
    return content;
  }

  if (typeof btoa === "function") {
    var base64 = btoa(unescape(encodeURIComponent(JSON.stringify(cssMapping))));
    var data = "sourceMappingURL=data:application/json;charset=utf-8;base64,".concat(base64);
    var sourceMapping = "/*# ".concat(data, " */");
    var sourceURLs = cssMapping.sources.map(function (source) {
      return "/*# sourceURL=".concat(cssMapping.sourceRoot || "").concat(source, " */");
    });
    return [content].concat(sourceURLs).concat([sourceMapping]).join("\n");
  }

  return [content].join("\n");
};

/***/ }),

/***/ "./src/style.css":
/*!***********************!*\
  !*** ./src/style.css ***!
  \***********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleDomAPI.js */ "./node_modules/style-loader/dist/runtime/styleDomAPI.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertBySelector.js */ "./node_modules/style-loader/dist/runtime/insertBySelector.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js */ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertStyleElement.js */ "./node_modules/style-loader/dist/runtime/insertStyleElement.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleTagTransform.js */ "./node_modules/style-loader/dist/runtime/styleTagTransform.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../node_modules/css-loader/dist/cjs.js!./style.css */ "./node_modules/css-loader/dist/cjs.js!./src/style.css");

      
      
      
      
      
      
      
      
      

var options = {};

options.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());
options.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());

      options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, "head");
    
options.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());
options.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__["default"], options);




       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__["default"] && _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals ? _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals : undefined);


/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js":
/*!****************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js ***!
  \****************************************************************************/
/***/ ((module) => {



var stylesInDOM = [];

function getIndexByIdentifier(identifier) {
  var result = -1;

  for (var i = 0; i < stylesInDOM.length; i++) {
    if (stylesInDOM[i].identifier === identifier) {
      result = i;
      break;
    }
  }

  return result;
}

function modulesToDom(list, options) {
  var idCountMap = {};
  var identifiers = [];

  for (var i = 0; i < list.length; i++) {
    var item = list[i];
    var id = options.base ? item[0] + options.base : item[0];
    var count = idCountMap[id] || 0;
    var identifier = "".concat(id, " ").concat(count);
    idCountMap[id] = count + 1;
    var indexByIdentifier = getIndexByIdentifier(identifier);
    var obj = {
      css: item[1],
      media: item[2],
      sourceMap: item[3],
      supports: item[4],
      layer: item[5]
    };

    if (indexByIdentifier !== -1) {
      stylesInDOM[indexByIdentifier].references++;
      stylesInDOM[indexByIdentifier].updater(obj);
    } else {
      var updater = addElementStyle(obj, options);
      options.byIndex = i;
      stylesInDOM.splice(i, 0, {
        identifier: identifier,
        updater: updater,
        references: 1
      });
    }

    identifiers.push(identifier);
  }

  return identifiers;
}

function addElementStyle(obj, options) {
  var api = options.domAPI(options);
  api.update(obj);

  var updater = function updater(newObj) {
    if (newObj) {
      if (newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap && newObj.supports === obj.supports && newObj.layer === obj.layer) {
        return;
      }

      api.update(obj = newObj);
    } else {
      api.remove();
    }
  };

  return updater;
}

module.exports = function (list, options) {
  options = options || {};
  list = list || [];
  var lastIdentifiers = modulesToDom(list, options);
  return function update(newList) {
    newList = newList || [];

    for (var i = 0; i < lastIdentifiers.length; i++) {
      var identifier = lastIdentifiers[i];
      var index = getIndexByIdentifier(identifier);
      stylesInDOM[index].references--;
    }

    var newLastIdentifiers = modulesToDom(newList, options);

    for (var _i = 0; _i < lastIdentifiers.length; _i++) {
      var _identifier = lastIdentifiers[_i];

      var _index = getIndexByIdentifier(_identifier);

      if (stylesInDOM[_index].references === 0) {
        stylesInDOM[_index].updater();

        stylesInDOM.splice(_index, 1);
      }
    }

    lastIdentifiers = newLastIdentifiers;
  };
};

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertBySelector.js":
/*!********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertBySelector.js ***!
  \********************************************************************/
/***/ ((module) => {



var memo = {};
/* istanbul ignore next  */

function getTarget(target) {
  if (typeof memo[target] === "undefined") {
    var styleTarget = document.querySelector(target); // Special case to return head of iframe instead of iframe itself

    if (window.HTMLIFrameElement && styleTarget instanceof window.HTMLIFrameElement) {
      try {
        // This will throw an exception if access to iframe is blocked
        // due to cross-origin restrictions
        styleTarget = styleTarget.contentDocument.head;
      } catch (e) {
        // istanbul ignore next
        styleTarget = null;
      }
    }

    memo[target] = styleTarget;
  }

  return memo[target];
}
/* istanbul ignore next  */


function insertBySelector(insert, style) {
  var target = getTarget(insert);

  if (!target) {
    throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");
  }

  target.appendChild(style);
}

module.exports = insertBySelector;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertStyleElement.js":
/*!**********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertStyleElement.js ***!
  \**********************************************************************/
/***/ ((module) => {



/* istanbul ignore next  */
function insertStyleElement(options) {
  var element = document.createElement("style");
  options.setAttributes(element, options.attributes);
  options.insert(element, options.options);
  return element;
}

module.exports = insertStyleElement;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js":
/*!**********************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js ***!
  \**********************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {



/* istanbul ignore next  */
function setAttributesWithoutAttributes(styleElement) {
  var nonce =  true ? __webpack_require__.nc : 0;

  if (nonce) {
    styleElement.setAttribute("nonce", nonce);
  }
}

module.exports = setAttributesWithoutAttributes;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleDomAPI.js":
/*!***************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleDomAPI.js ***!
  \***************************************************************/
/***/ ((module) => {



/* istanbul ignore next  */
function apply(styleElement, options, obj) {
  var css = "";

  if (obj.supports) {
    css += "@supports (".concat(obj.supports, ") {");
  }

  if (obj.media) {
    css += "@media ".concat(obj.media, " {");
  }

  var needLayer = typeof obj.layer !== "undefined";

  if (needLayer) {
    css += "@layer".concat(obj.layer.length > 0 ? " ".concat(obj.layer) : "", " {");
  }

  css += obj.css;

  if (needLayer) {
    css += "}";
  }

  if (obj.media) {
    css += "}";
  }

  if (obj.supports) {
    css += "}";
  }

  var sourceMap = obj.sourceMap;

  if (sourceMap && typeof btoa !== "undefined") {
    css += "\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))), " */");
  } // For old IE

  /* istanbul ignore if  */


  options.styleTagTransform(css, styleElement, options.options);
}

function removeStyleElement(styleElement) {
  // istanbul ignore if
  if (styleElement.parentNode === null) {
    return false;
  }

  styleElement.parentNode.removeChild(styleElement);
}
/* istanbul ignore next  */


function domAPI(options) {
  var styleElement = options.insertStyleElement(options);
  return {
    update: function update(obj) {
      apply(styleElement, options, obj);
    },
    remove: function remove() {
      removeStyleElement(styleElement);
    }
  };
}

module.exports = domAPI;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleTagTransform.js":
/*!*********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleTagTransform.js ***!
  \*********************************************************************/
/***/ ((module) => {



/* istanbul ignore next  */
function styleTagTransform(css, styleElement) {
  if (styleElement.styleSheet) {
    styleElement.styleSheet.cssText = css;
  } else {
    while (styleElement.firstChild) {
      styleElement.removeChild(styleElement.firstChild);
    }

    styleElement.appendChild(document.createTextNode(css));
  }
}

module.exports = styleTagTransform;

/***/ }),

/***/ "./src/aboutme.js":
/*!************************!*\
  !*** ./src/aboutme.js ***!
  \************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _images_profile_jpg__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./images/profile.jpg */ "./src/images/profile.jpg");


const aboutMe = () => {
  const board = document.createElement('main');
  document.getElementById('body').appendChild(board);
  board.setAttribute('id', 'aboutMeBoard');

  const title = document.createElement('h2');
  board.appendChild(title);
  title.innerText = "Hello, I'm Renato!";

  const img = document.createElement('img');
  board.appendChild(img);
  img.src = _images_profile_jpg__WEBPACK_IMPORTED_MODULE_0__;

  const description = document.createElement('p');
  board.appendChild(description);
  description.innerText = "Failure is the heartbeat of discovery. We stumble a lot trying new things. And at one of those tries, I discovered programming. \n \n I've started to learn how to program just for fun and fell in love with it. So much, that I want to pursue it for the rest of my life. Web development allows me to express my creativity more satisfyingly, create with a clear structure, and focus in on details in a way I've never been able to do before. \n \n After over a year of study, I am ready to contribute to the world in this new way, and I'm looking forward to bringing the best traits of a creative developer to the table."
};

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (aboutMe);

/***/ }),

/***/ "./src/clear.js":
/*!**********************!*\
  !*** ./src/clear.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
const clear = () => {
  document.querySelector('#body>:nth-child(3)').remove();
  document.querySelector('#body>:nth-child(2)').remove();
};

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (clear);

/***/ }),

/***/ "./src/essays.js":
/*!***********************!*\
  !*** ./src/essays.js ***!
  \***********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _articles_json__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./articles.json */ "./src/articles.json");


const essays = () => {

  const essayBoard = document.createElement('main');
  document.getElementById('body').appendChild(essayBoard);
  essayBoard.classList.add('essayBoard');

  for(let i = 0; i < _articles_json__WEBPACK_IMPORTED_MODULE_0__.length; i++) {
    const essay = document.createElement('article');
    essayBoard.appendChild(essay);
    essay.classList.add('essay');

    const title = document.createElement('h3');
    title.innerText = _articles_json__WEBPACK_IMPORTED_MODULE_0__[i].title;
    essay.appendChild(title);

    const date = document.createElement('h6');
    date.innerText = _articles_json__WEBPACK_IMPORTED_MODULE_0__[i].date;
    essay.appendChild(date);

    const content = document.createElement('p');
    content.innerText = _articles_json__WEBPACK_IMPORTED_MODULE_0__[i].content;
    essay.appendChild(content);
  };
}

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (essays);

/***/ }),

/***/ "./src/footer.js":
/*!***********************!*\
  !*** ./src/footer.js ***!
  \***********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
const footer = () => {
  const footerTab = document.createElement('footer');
  document.getElementById('body').appendChild(footerTab);
  footerTab.innerText = 'Designed by Renato Diniz in Curitiba';
}

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (footer);

/***/ }),

/***/ "./src/header.js":
/*!***********************!*\
  !*** ./src/header.js ***!
  \***********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
const header = () => {
  const header = document.createElement('header');
  document.getElementById('body').appendChild(header);

  const homeBtn = document.createElement('button');
  homeBtn.innerText = 'Renato Diniz';
  homeBtn.setAttribute('id','logo');
  const projectsBtn = document.createElement('button');
  projectsBtn.innerHTML = 'Projects';
  projectsBtn.setAttribute('id','projectsButton');
  const essaysBtn = document.createElement('button');
  essaysBtn.innerText = 'Essays';
  essaysBtn.setAttribute('id', 'essaysButton');
  const aboutMeBtn = document.createElement('button');
  aboutMeBtn.innerText = 'About Me';
  aboutMeBtn.setAttribute('id', 'aboutMeButton');

  header.appendChild(homeBtn);
  header.appendChild(projectsBtn);
  header.appendChild(essaysBtn);
  header.appendChild(aboutMeBtn);
};

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (header);


/***/ }),

/***/ "./src/projects.js":
/*!*************************!*\
  !*** ./src/projects.js ***!
  \*************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _images_etch_a_sketch_png__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./images/etch-a-sketch.png */ "./src/images/etch-a-sketch.png");
/* harmony import */ var _images_calculator_png__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./images/calculator.png */ "./src/images/calculator.png");
/* harmony import */ var _images_professional_dashboard_png__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./images/professional-dashboard.png */ "./src/images/professional-dashboard.png");
/* harmony import */ var _images_red_bull_landing_page_png__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./images/red-bull-landing-page.png */ "./src/images/red-bull-landing-page.png");
/* harmony import */ var _images_freelancing_hub_png__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./images/freelancing-hub.png */ "./src/images/freelancing-hub.png");
/* harmony import */ var _images_am4zon_png__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./images/am4zon.png */ "./src/images/am4zon.png");







const projects = () => {

  const projectImages = [_images_etch_a_sketch_png__WEBPACK_IMPORTED_MODULE_0__, _images_calculator_png__WEBPACK_IMPORTED_MODULE_1__, _images_professional_dashboard_png__WEBPACK_IMPORTED_MODULE_2__,
                         _images_red_bull_landing_page_png__WEBPACK_IMPORTED_MODULE_3__, _images_freelancing_hub_png__WEBPACK_IMPORTED_MODULE_4__, _images_am4zon_png__WEBPACK_IMPORTED_MODULE_5__];
  const projectTitles = ['Etch A Sketch', 'Calculate Me!', 'Professional Dashboard',
                        'RedBull® landing page', 'Freelancing Hub', 'Am4zon'];
  const projectDescriptions = [
    'Online Etch A Sketch game simulation',
    'Complete functional online calculator',
    'Professional admin project dashboard',
    'Simulation of a RedBull® landing page for new products',
    'FreelancingHUB is a free B2B digital platform, which aims to promote an environment of business connections with a social purpose between organizations of different activities and freelancers from all over the country.',
    'The Am4zon project is in essence a clone website from the original Amazon®. In the Am4zon platform, users can easily access all books by genre and author, search through our entire database via the menu search box and access book collections tailored by our specialists.'
  ];

  const projectBoard = document.createElement('main');
  document.getElementById('body').appendChild(projectBoard);
  projectBoard.classList.add('projectBoard');
  

  for(let i = 0; i < projectTitles.length; i++) {
    let project = document.createElement('div');
    project.classList.add('project');
    let img = document.createElement('img');
    img.src = projectImages[i];
    project.appendChild(img);

    let title = document.createElement('h3');
    title.innerText = projectTitles[i];
    project.appendChild(title);

    let description = document.createElement('p');
    description.innerText = (projectDescriptions[i]);
    project.appendChild(description);

    projectBoard.appendChild(project);
  };
};

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (projects);


/***/ }),

/***/ "./src/fonts/Montserrat/Montserrat-Light.woff":
/*!****************************************************!*\
  !*** ./src/fonts/Montserrat/Montserrat-Light.woff ***!
  \****************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "df75a5aea067f7b1d014.woff";

/***/ }),

/***/ "./src/fonts/Montserrat/Montserrat-Medium.woff":
/*!*****************************************************!*\
  !*** ./src/fonts/Montserrat/Montserrat-Medium.woff ***!
  \*****************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "ff93faa1ec704c321dea.woff";

/***/ }),

/***/ "./src/fonts/SF_Pro/SF-Pro-Text-Light.woff":
/*!*************************************************!*\
  !*** ./src/fonts/SF_Pro/SF-Pro-Text-Light.woff ***!
  \*************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "8e5f0c0fe7baef2a303f.woff";

/***/ }),

/***/ "./src/fonts/SF_Pro/SF-Pro-Text-Medium.woff":
/*!**************************************************!*\
  !*** ./src/fonts/SF_Pro/SF-Pro-Text-Medium.woff ***!
  \**************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "8ef685ce7fe4aa52e857.woff";

/***/ }),

/***/ "./src/images/am4zon.png":
/*!*******************************!*\
  !*** ./src/images/am4zon.png ***!
  \*******************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "b96d12d45f677947f8a9.png";

/***/ }),

/***/ "./src/images/calculator.png":
/*!***********************************!*\
  !*** ./src/images/calculator.png ***!
  \***********************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "cfcb86029517f17c3e4e.png";

/***/ }),

/***/ "./src/images/etch-a-sketch.png":
/*!**************************************!*\
  !*** ./src/images/etch-a-sketch.png ***!
  \**************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "8a42746c1b0b98ba01ca.png";

/***/ }),

/***/ "./src/images/freelancing-hub.png":
/*!****************************************!*\
  !*** ./src/images/freelancing-hub.png ***!
  \****************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "6be74dfeefd55186bf1f.png";

/***/ }),

/***/ "./src/images/professional-dashboard.png":
/*!***********************************************!*\
  !*** ./src/images/professional-dashboard.png ***!
  \***********************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "d3c92741068478b33996.png";

/***/ }),

/***/ "./src/images/profile.jpg":
/*!********************************!*\
  !*** ./src/images/profile.jpg ***!
  \********************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "1aa02750c8945a56d634.jpg";

/***/ }),

/***/ "./src/images/red-bull-landing-page.png":
/*!**********************************************!*\
  !*** ./src/images/red-bull-landing-page.png ***!
  \**********************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "c5a7f13a66749e2b883d.png";

/***/ }),

/***/ "./src/articles.json":
/*!***************************!*\
  !*** ./src/articles.json ***!
  \***************************/
/***/ ((module) => {

module.exports = JSON.parse('[{"title":"Lorem Ipsum","date":"August 2020","content":"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla elit justo, faucibus condimentum lobortis eget, congue quis libero. Nullam imperdiet, magna et lacinia mattis, lorem libero vehicula ante, sed tincidunt nisi nisi vel dui. Curabitur auctor felis ligula, id interdum leo tristique in. Nullam convallis erat quis orci mattis sodales. Suspendisse porttitor felis ut magna iaculis, sit amet ultrices lectus scelerisque. Donec non maximus arcu, eu pellentesque dolor. Aenean venenatis, nunc sit amet varius varius, elit erat volutpat elit, nec venenatis sem felis ut est. Morbi sed ipsum arcu. Vestibulum ultricies ante vel vestibulum elementum. Nulla a justo nunc. Nulla a urna ut nunc dapibus bibendum eu a mauris. Suspendisse vehicula imperdiet accumsan. Cras venenatis massa sit amet sem suscipit vulputate. Curabitur in tellus aliquet, rhoncus augue vitae, tempus eros. Aliquam faucibus ac sem quis consectetur. Sed vel viverra ex, ullamcorper blandit nisi. Proin interdum, massa nec congue porta, risus quam luctus ante, ut maximus libero tellus sit amet dui. Integer lobortis mi elit, pulvinar aliquam ex molestie vitae. Aliquam pretium dictum elit, non luctus mi. Maecenas auctor porta rhoncus. Integer convallis volutpat tortor, a pretium lacus posuere sit amet."},{"title":"Nunc mollis fermentum nunc","date":"Septemper 2021","content":"Phasellus id ligula diam. Integer dapibus tincidunt justo, quis iaculis tortor maximus sit amet. Fusce viverra a libero eget sagittis. Donec fringilla augue eget leo imperdiet, at aliquam ex egestas. Donec sollicitudin finibus magna, ac consectetur sem rhoncus gravida. Mauris ultricies ipsum id elit ultrices, ut consectetur ante viverra. Integer eu interdum urna. Proin auctor velit ac lorem ornare vulputate vel et dolor. Vestibulum eget ultrices tellus."},{"title":"Suspendisse dolor elit","date":"March 2022","content":"Phasellus porttitor mauris nisl. Mauris hendrerit velit non rutrum interdum. Pellentesque bibendum hendrerit mi accumsan vestibulum. Praesent sed magna condimentum diam suscipit fringilla id placerat ligula. Sed vitae sem feugiat, molestie turpis eleifend, euismod tellus. Cras nec nunc rhoncus, tristique lorem ut, aliquet tellus. Duis orci sem, posuere ac lectus sit amet, semper mattis enim. Vivamus at ornare tortor, quis elementum dui. Pellentesque accumsan viverra efficitur. Vestibulum maximus mi magna, ut suscipit magna accumsan et. Aenean gravida est eu ex sollicitudin volutpat. Nunc et congue felis. In iaculis consequat pulvinar. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Morbi vel ante tempus, semper nunc sit amet, eleifend risus. Nunc cursus magna vel dolor pulvinar, vitae dapibus diam varius. Nullam et imperdiet felis. Donec hendrerit molestie ligula in rutrum. Sed lobortis odio eu augue volutpat consequat. Phasellus hendrerit lacus erat. Aenean lacinia sollicitudin lorem. Curabitur nec lacus purus. Cras vehicula elit sit amet interdum egestas. Vestibulum pellentesque diam dolor, ac feugiat diam venenatis at. Fusce accumsan magna in aliquet euismod. Nulla rutrum viverra mi non condimentum. Nulla blandit dui vitae justo imperdiet ornare. Etiam nec aliquet felis."},{"title":"Integer eu nisl velit","date":"January 2022","content":"Pellentesque a velit ipsum. Proin eleifend lacus quis quam fermentum iaculis. Nunc ac dignissim mi. Quisque interdum scelerisque urna, eget aliquam leo. Integer quis convallis risus, id dapibus orci. Vivamus dapibus vitae sapien ac sodales. Mauris mauris nisl, semper quis nibh ac, tincidunt iaculis sapien. Etiam id nisl vitae felis blandit congue a vel sapien. Nunc ornare metus et est dignissim, non egestas augue hendrerit. Mauris dictum, mauris sed blandit finibus, lorem neque sollicitudin ipsum, eget convallis lacus nunc vitae nisi. Fusce facilisis semper nibh ut imperdiet. Etiam gravida vulputate arcu, ut hendrerit ante mattis et. Pellentesque sit amet condimentum est. Nunc enim ante, finibus id placerat vitae, fermentum sit amet quam. Donec at nunc nibh. Nulla ac lacinia velit. Ut convallis eros metus, ut imperdiet tortor faucibus congue. Donec vitae velit efficitur, efficitur neque ut, posuere est. Phasellus et lacus ullamcorper, vulputate nisl maximus, porta eros. Proin eu nisi ipsum. Fusce sed ipsum eleifend, scelerisque arcu et, euismod purus. Morbi fringilla eu arcu a molestie. Proin nec lacus id mauris efficitur vulputate facilisis a velit. Duis id ligula dignissim, semper erat auctor, facilisis diam. Mauris scelerisque ut justo a tincidunt. Quisque dui orci, dictum quis ullamcorper et, ultricies ut lorem. Vivamus laoreet auctor dui sit amet cursus. Etiam hendrerit justo ac vehicula mattis. Nulla tempor posuere tortor, eget ultricies risus vulputate sed. Donec gravida sit amet mi et vehicula. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Curabitur vitae eros lorem. Integer eu nisl velit. Donec id consequat dolor, eget posuere nisl. Aliquam in urna rhoncus mi posuere posuere at non diam. Vivamus dignissim maximus tortor. Aliquam ac dictum neque, vel maximus metus. Sed sit amet turpis blandit ligula tincidunt rhoncus. Phasellus viverra condimentum mollis. Fusce in dolor lacinia, lobortis eros ac, interdum mi. Fusce convallis pulvinar consectetur. Vestibulum rhoncus sapien in semper lacinia. Donec risus dui, dignissim non dui eget, aliquet scelerisque tortor. Sed vitae urna vitae risus semper eleifend et sit amet metus. Sed a arcu tortor. Proin sit amet enim sit amet ante lacinia vestibulum. Sed erat nulla, consectetur quis auctor eget, commodo a tortor. Mauris et purus nec magna consectetur gravida. Donec iaculis dui ligula, fringilla congue enim dignissim nec. Vestibulum eleifend porttitor metus, eget lacinia nunc. Aenean accumsan pretium tincidunt. Duis et arcu felis. Mauris at nulla vel eros tincidunt dapibus vitae et nunc. Donec luctus fringilla erat, ut porttitor purus sodales vitae. Vivamus quis ultricies urna. Donec gravida dui congue turpis egestas, non semper justo porttitor. Nam eget bibendum augue, vitae efficitur velit. Pellentesque vulputate, ex a auctor facilisis, nisi eros dictum risus, vel commodo ex dolor et nisl. Phasellus ligula mi, luctus a tortor eu, tempor accumsan felis. Fusce quis lobortis lacus. Praesent malesuada dignissim massa sed placerat. Etiam malesuada dictum justo, et molestie leo euismod sed. Proin maximus enim at metus malesuada euismod. Nunc sit amet rutrum urna, vel maximus lacus. Phasellus non enim eu magna tempus dignissim. Pellentesque finibus nibh risus, id luctus felis pulvinar in. Pellentesque elit nunc, finibus nec gravida nec, lobortis id enim. Vivamus vel est vestibulum, efficitur libero sed, mollis elit. Praesent leo mi, vehicula sed ornare eu, condimentum sit amet ante. Nunc tellus turpis, iaculis quis purus feugiat, consectetur accumsan mi. Vestibulum vulputate mi sed porttitor bibendum. Maecenas tempus urna vel finibus congue. Sed et tellus magna. Nullam fermentum at dolor in pulvinar. In sit amet laoreet felis, egestas condimentum libero. Curabitur rutrum congue ullamcorper. Pellentesque malesuada sit amet purus at rhoncus. In quis lobortis velit. Proin nec dui purus. Maecenas a enim eu ligula feugiat hendrerit id non eros. Quisque ac elit vitae est maximus ultrices id eget neque. Suspendisse luctus vulputate sem consectetur consectetur. Fusce faucibus enim sit amet justo efficitur feugiat. Morbi vehicula dictum libero. Aliquam sagittis, ante convallis eleifend vulputate, lectus augue tempus leo, ullamcorper aliquam turpis sapien in dui. Etiam rutrum tincidunt ante nec ullamcorper. Fusce dictum nunc sed nisl fringilla venenatis. Curabitur in ligula tempus, blandit elit a, lacinia felis. Aenean quis est quis orci posuere auctor. Praesent tempus tellus metus, eget euismod mauris ornare non. Aliquam vitae luctus est. Duis id vulputate quam, vitae accumsan mi. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut varius mauris a orci sodales, dignissim pharetra magna viverra. Integer commodo egestas ipsum vel aliquam. Aliquam eget erat vel ligula efficitur vestibulum. Mauris faucibus neque sed tellus scelerisque porttitor. Maecenas ultrices porta turpis sit amet malesuada. Nam lorem ipsum, finibus eu libero vel, euismod malesuada ante."}]');

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			id: moduleId,
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = __webpack_modules__;
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/compat get default export */
/******/ 	(() => {
/******/ 		// getDefaultExport function for compatibility with non-harmony modules
/******/ 		__webpack_require__.n = (module) => {
/******/ 			var getter = module && module.__esModule ?
/******/ 				() => (module['default']) :
/******/ 				() => (module);
/******/ 			__webpack_require__.d(getter, { a: getter });
/******/ 			return getter;
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/global */
/******/ 	(() => {
/******/ 		__webpack_require__.g = (function() {
/******/ 			if (typeof globalThis === 'object') return globalThis;
/******/ 			try {
/******/ 				return this || new Function('return this')();
/******/ 			} catch (e) {
/******/ 				if (typeof window === 'object') return window;
/******/ 			}
/******/ 		})();
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/publicPath */
/******/ 	(() => {
/******/ 		var scriptUrl;
/******/ 		if (__webpack_require__.g.importScripts) scriptUrl = __webpack_require__.g.location + "";
/******/ 		var document = __webpack_require__.g.document;
/******/ 		if (!scriptUrl && document) {
/******/ 			if (document.currentScript)
/******/ 				scriptUrl = document.currentScript.src
/******/ 			if (!scriptUrl) {
/******/ 				var scripts = document.getElementsByTagName("script");
/******/ 				if(scripts.length) scriptUrl = scripts[scripts.length - 1].src
/******/ 			}
/******/ 		}
/******/ 		// When supporting browsers where an automatic publicPath is not supported you must specify an output.publicPath manually via configuration
/******/ 		// or pass an empty string ("") and set the __webpack_public_path__ variable from your code to use your own logic.
/******/ 		if (!scriptUrl) throw new Error("Automatic publicPath is not supported in this browser");
/******/ 		scriptUrl = scriptUrl.replace(/#.*$/, "").replace(/\?.*$/, "").replace(/\/[^\/]+$/, "/");
/******/ 		__webpack_require__.p = scriptUrl;
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/jsonp chunk loading */
/******/ 	(() => {
/******/ 		__webpack_require__.b = document.baseURI || self.location.href;
/******/ 		
/******/ 		// object to store loaded and loading chunks
/******/ 		// undefined = chunk not loaded, null = chunk preloaded/prefetched
/******/ 		// [resolve, reject, Promise] = chunk loading, 0 = chunk loaded
/******/ 		var installedChunks = {
/******/ 			"main": 0
/******/ 		};
/******/ 		
/******/ 		// no chunk on demand loading
/******/ 		
/******/ 		// no prefetching
/******/ 		
/******/ 		// no preloaded
/******/ 		
/******/ 		// no HMR
/******/ 		
/******/ 		// no HMR manifest
/******/ 		
/******/ 		// no on chunks loaded
/******/ 		
/******/ 		// no jsonp function
/******/ 	})();
/******/ 	
/************************************************************************/
var __webpack_exports__ = {};
// This entry need to be wrapped in an IIFE because it need to be isolated against other modules in the chunk.
(() => {
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _style_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./style.css */ "./src/style.css");
/* harmony import */ var _header__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./header */ "./src/header.js");
/* harmony import */ var _projects__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./projects */ "./src/projects.js");
/* harmony import */ var _clear__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./clear */ "./src/clear.js");
/* harmony import */ var _essays_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./essays.js */ "./src/essays.js");
/* harmony import */ var _footer_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./footer.js */ "./src/footer.js");
/* harmony import */ var _aboutme__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./aboutme */ "./src/aboutme.js");








(0,_header__WEBPACK_IMPORTED_MODULE_1__["default"])();
(0,_projects__WEBPACK_IMPORTED_MODULE_2__["default"])();
(0,_footer_js__WEBPACK_IMPORTED_MODULE_5__["default"])();

document.getElementById('projectsButton').addEventListener('click', projectsPage);
document.getElementById('essaysButton').addEventListener('click', essaysPage);
document.getElementById('aboutMeButton').addEventListener('click', aboutMePage);

function projectsPage() {
  (0,_clear__WEBPACK_IMPORTED_MODULE_3__["default"])();
  (0,_projects__WEBPACK_IMPORTED_MODULE_2__["default"])();
  (0,_footer_js__WEBPACK_IMPORTED_MODULE_5__["default"])();
};

function essaysPage() {
  (0,_clear__WEBPACK_IMPORTED_MODULE_3__["default"])();
  (0,_essays_js__WEBPACK_IMPORTED_MODULE_4__["default"])();
  (0,_footer_js__WEBPACK_IMPORTED_MODULE_5__["default"])();
};

function aboutMePage() {
  (0,_clear__WEBPACK_IMPORTED_MODULE_3__["default"])();
  (0,_aboutme__WEBPACK_IMPORTED_MODULE_6__["default"])();
  (0,_footer_js__WEBPACK_IMPORTED_MODULE_5__["default"])();
};


})();

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWFpbi5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQzBHO0FBQ2pCO0FBQ087QUFDaEcsNENBQTRDLDZKQUEyRDtBQUN2Ryw0Q0FBNEMsK0pBQTREO0FBQ3hHLDRDQUE0Qyx1SkFBd0Q7QUFDcEcsNENBQTRDLHlKQUF5RDtBQUNyRyw4QkFBOEIsbUZBQTJCLENBQUMsNEZBQXFDO0FBQy9GLHlDQUF5QyxzRkFBK0I7QUFDeEUseUNBQXlDLHNGQUErQjtBQUN4RSx5Q0FBeUMsc0ZBQStCO0FBQ3hFLHlDQUF5QyxzRkFBK0I7QUFDeEU7QUFDQSxnREFBZ0Qsa0JBQWtCLDJCQUEyQix5Q0FBeUMsR0FBRyxZQUFZLGtCQUFrQixrQkFBa0IsWUFBWSxtQkFBbUIsb0NBQW9DLHFCQUFxQixzQkFBc0Isb0JBQW9CLEdBQUcsY0FBYyw0QkFBNEIsR0FBRywyQkFBMkIsb0JBQW9CLEdBQUcsMEJBQTBCLHNCQUFzQixHQUFHLG1CQUFtQixpQkFBaUIsa0NBQWtDLHVCQUF1QixvQkFBb0IsR0FBRyxXQUFXLG9CQUFvQixHQUFHLGlCQUFpQix3QkFBd0IsNEJBQTRCLEdBQUcseUJBQXlCLDJCQUEyQiw4QkFBOEIsR0FBRyx1QkFBdUIsNEJBQTRCLHVCQUF1QixrQkFBa0IsMENBQTBDLFlBQVksZUFBZSx3QkFBd0IsR0FBRyxjQUFjLGtCQUFrQix5QkFBeUIsMkJBQTJCLHdCQUF3QixrQkFBa0IscUJBQXFCLG1CQUFtQixhQUFhLDRCQUE0QixHQUFHLG9CQUFvQiwyQkFBMkIsOEJBQThCLG9EQUFvRCxHQUFHLGdCQUFnQixnQkFBZ0IsR0FBRyxrQkFBa0IsZ0JBQWdCLGlCQUFpQixHQUFHLGdCQUFnQix1QkFBdUIsR0FBRyxpQkFBaUIsa0JBQWtCLDJCQUEyQiw0QkFBNEIsdUJBQXVCLGVBQWUsY0FBYyxHQUFHLFlBQVkseUJBQXlCLGtCQUFrQiwyQkFBMkIsbUJBQW1CLHNCQUFzQiw0QkFBNEIsR0FBRyxrQkFBa0IsMkJBQTJCLDhCQUE4QixvREFBb0QsR0FBRyxjQUFjLGlCQUFpQixHQUFHLDBCQUEwQixxQkFBcUIscUJBQXFCLEdBQUcscUJBQXFCLEtBQUssbUJBQW1CLGtCQUFrQix1QkFBdUIsNEJBQTRCLHFDQUFxQyxpQ0FBaUMsY0FBYyxlQUFlLEdBQUcsdUJBQXVCLGVBQWUsaUJBQWlCLGtCQUFrQix5QkFBeUIsNkJBQTZCLEdBQUcscUJBQXFCLHVCQUF1QixxQkFBcUIsR0FBRyxzQkFBc0IsdUJBQXVCLG1CQUFtQixHQUFHLFlBQVksb0NBQW9DLDRCQUE0QixxQkFBcUIsa0JBQWtCLDRCQUE0QixtQkFBbUIscUJBQXFCLHVCQUF1QixHQUFHLE9BQU8scUtBQXFLLEdBQUcsZ0JBQWdCLDhCQUE4Qix3RUFBd0UsdUJBQXVCLHdCQUF3QixHQUFHLGdCQUFnQiw4QkFBOEIsd0VBQXdFLHVCQUF1QixzQkFBc0IsR0FBRyxnQkFBZ0IsMEJBQTBCLHdFQUF3RSx1QkFBdUIsd0JBQXdCLEdBQUcsZ0JBQWdCLDBCQUEwQix3RUFBd0UsdUJBQXVCLHNCQUFzQixHQUFHLE9BQU8sZ0ZBQWdGLFVBQVUsWUFBWSxhQUFhLE9BQU8sS0FBSyxVQUFVLFVBQVUsVUFBVSxVQUFVLFlBQVksYUFBYSxhQUFhLFdBQVcsT0FBTyxLQUFLLFlBQVksT0FBTyxLQUFLLFVBQVUsTUFBTSxLQUFLLFlBQVksT0FBTyxLQUFLLFVBQVUsWUFBWSxhQUFhLFdBQVcsT0FBTyxLQUFLLFlBQVksT0FBTyxLQUFLLFlBQVksYUFBYSxPQUFPLEtBQUssWUFBWSxhQUFhLFNBQVMsS0FBSyxZQUFZLGFBQWEsV0FBVyxZQUFZLFdBQVcsVUFBVSxZQUFZLE9BQU8sS0FBSyxVQUFVLFlBQVksYUFBYSxhQUFhLFdBQVcsWUFBWSxXQUFXLFVBQVUsWUFBWSxPQUFPLEtBQUssWUFBWSxhQUFhLGFBQWEsT0FBTyxLQUFLLFVBQVUsTUFBTSxLQUFLLFVBQVUsVUFBVSxNQUFNLEtBQUssWUFBWSxPQUFPLEtBQUssVUFBVSxZQUFZLGFBQWEsYUFBYSxXQUFXLFVBQVUsTUFBTSxLQUFLLFlBQVksV0FBVyxZQUFZLFdBQVcsWUFBWSxhQUFhLE9BQU8sS0FBSyxZQUFZLGFBQWEsYUFBYSxPQUFPLEtBQUssVUFBVSxNQUFNLEtBQUssWUFBWSxhQUFhLE9BQU8sTUFBTSxNQUFNLEtBQUssVUFBVSxZQUFZLGFBQWEsYUFBYSxhQUFhLFdBQVcsVUFBVSxNQUFNLEtBQUssVUFBVSxVQUFVLFVBQVUsWUFBWSxhQUFhLE9BQU8sS0FBSyxZQUFZLGFBQWEsT0FBTyxLQUFLLFlBQVksV0FBVyxPQUFPLEtBQUssWUFBWSxhQUFhLGFBQWEsV0FBVyxZQUFZLFdBQVcsWUFBWSxhQUFhLE9BQU8sS0FBSyxZQUFZLE9BQU8sS0FBSyxZQUFZLGFBQWEsYUFBYSxhQUFhLE9BQU8sS0FBSyxZQUFZLGFBQWEsYUFBYSxhQUFhLE9BQU8sS0FBSyxZQUFZLGFBQWEsYUFBYSxhQUFhLE9BQU8sS0FBSyxZQUFZLGFBQWEsYUFBYSxhQUFhLGdDQUFnQyxrQkFBa0IsMkJBQTJCLHlDQUF5QyxHQUFHLFlBQVksa0JBQWtCLGtCQUFrQixZQUFZLG1CQUFtQixvQ0FBb0MscUJBQXFCLHNCQUFzQixvQkFBb0IsR0FBRyxjQUFjLDRCQUE0QixHQUFHLDJCQUEyQixvQkFBb0IsR0FBRywwQkFBMEIsc0JBQXNCLEdBQUcsbUJBQW1CLGlCQUFpQixrQ0FBa0MsdUJBQXVCLG9CQUFvQixHQUFHLFdBQVcsb0JBQW9CLEdBQUcsaUJBQWlCLHdCQUF3Qiw0QkFBNEIsR0FBRyx5QkFBeUIsMkJBQTJCLDhCQUE4QixHQUFHLHVCQUF1Qiw0QkFBNEIsdUJBQXVCLGtCQUFrQiwwQ0FBMEMsWUFBWSxlQUFlLHdCQUF3QixHQUFHLGNBQWMsa0JBQWtCLHlCQUF5QiwyQkFBMkIsd0JBQXdCLGtCQUFrQixxQkFBcUIsbUJBQW1CLGFBQWEsNEJBQTRCLEdBQUcsb0JBQW9CLDJCQUEyQiw4QkFBOEIsb0RBQW9ELEdBQUcsZ0JBQWdCLGdCQUFnQixHQUFHLGtCQUFrQixnQkFBZ0IsaUJBQWlCLEdBQUcsZ0JBQWdCLHVCQUF1QixHQUFHLGlCQUFpQixrQkFBa0IsMkJBQTJCLDRCQUE0Qix1QkFBdUIsZUFBZSxjQUFjLEdBQUcsWUFBWSx5QkFBeUIsa0JBQWtCLDJCQUEyQixtQkFBbUIsc0JBQXNCLDRCQUE0QixHQUFHLGtCQUFrQiwyQkFBMkIsOEJBQThCLG9EQUFvRCxHQUFHLGNBQWMsaUJBQWlCLEdBQUcsMEJBQTBCLHFCQUFxQixxQkFBcUIsR0FBRyxxQkFBcUIsS0FBSyxtQkFBbUIsa0JBQWtCLHVCQUF1Qiw0QkFBNEIscUNBQXFDLGlDQUFpQyxjQUFjLGVBQWUsR0FBRyx1QkFBdUIsZUFBZSxpQkFBaUIsa0JBQWtCLHlCQUF5Qiw2QkFBNkIsR0FBRyxxQkFBcUIsdUJBQXVCLHFCQUFxQixHQUFHLHNCQUFzQix1QkFBdUIsbUJBQW1CLEdBQUcsWUFBWSxvQ0FBb0MsNEJBQTRCLHFCQUFxQixrQkFBa0IsNEJBQTRCLG1CQUFtQixxQkFBcUIsdUJBQXVCLEdBQUcsT0FBTyxxS0FBcUssR0FBRyxnQkFBZ0IsOEJBQThCLHdFQUF3RSx1QkFBdUIsd0JBQXdCLEdBQUcsZ0JBQWdCLDhCQUE4Qix5RUFBeUUsdUJBQXVCLHNCQUFzQixHQUFHLGdCQUFnQiwwQkFBMEIscUVBQXFFLHVCQUF1Qix3QkFBd0IsR0FBRyxnQkFBZ0IsMEJBQTBCLHNFQUFzRSx1QkFBdUIsc0JBQXNCLEdBQUcsbUJBQW1CO0FBQzE5UTtBQUNBLGlFQUFlLHVCQUF1QixFQUFDOzs7Ozs7Ozs7OztBQ2hCMUI7O0FBRWI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGlCQUFpQjs7QUFFakI7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQSxxREFBcUQ7QUFDckQ7O0FBRUE7QUFDQSxnREFBZ0Q7QUFDaEQ7O0FBRUE7QUFDQSxxRkFBcUY7QUFDckY7O0FBRUE7O0FBRUE7QUFDQSxxQkFBcUI7QUFDckI7O0FBRUE7QUFDQSxxQkFBcUI7QUFDckI7O0FBRUE7QUFDQSxxQkFBcUI7QUFDckI7O0FBRUE7QUFDQSxLQUFLO0FBQ0wsS0FBSzs7O0FBR0w7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQSxzQkFBc0IsaUJBQWlCO0FBQ3ZDOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUEscUJBQXFCLHFCQUFxQjtBQUMxQzs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsVUFBVTtBQUNWLHNGQUFzRixxQkFBcUI7QUFDM0c7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLFVBQVU7QUFDVixpREFBaUQscUJBQXFCO0FBQ3RFO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxVQUFVO0FBQ1Ysc0RBQXNELHFCQUFxQjtBQUMzRTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7Ozs7Ozs7Ozs7QUNyR2E7O0FBRWI7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBLG9EQUFvRDs7QUFFcEQ7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQSxJQUFJO0FBQ0o7OztBQUdBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOzs7Ozs7Ozs7O0FDNUJhOztBQUViO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLHVEQUF1RCxjQUFjO0FBQ3JFO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBOztBQUVBO0FBQ0E7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUNwQkEsTUFBK0Y7QUFDL0YsTUFBcUY7QUFDckYsTUFBNEY7QUFDNUYsTUFBK0c7QUFDL0csTUFBd0c7QUFDeEcsTUFBd0c7QUFDeEcsTUFBbUc7QUFDbkc7QUFDQTs7QUFFQTs7QUFFQSw0QkFBNEIscUdBQW1CO0FBQy9DLHdCQUF3QixrSEFBYTs7QUFFckMsdUJBQXVCLHVHQUFhO0FBQ3BDO0FBQ0EsaUJBQWlCLCtGQUFNO0FBQ3ZCLDZCQUE2QixzR0FBa0I7O0FBRS9DLGFBQWEsMEdBQUcsQ0FBQyxzRkFBTzs7OztBQUk2QztBQUNyRSxPQUFPLGlFQUFlLHNGQUFPLElBQUksNkZBQWMsR0FBRyw2RkFBYyxZQUFZLEVBQUM7Ozs7Ozs7Ozs7O0FDMUJoRTs7QUFFYjs7QUFFQTtBQUNBOztBQUVBLGtCQUFrQix3QkFBd0I7QUFDMUM7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQSxrQkFBa0IsaUJBQWlCO0FBQ25DO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLE1BQU07QUFDTjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxPQUFPO0FBQ1A7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0EsTUFBTTtBQUNOO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQSxvQkFBb0IsNEJBQTRCO0FBQ2hEO0FBQ0E7QUFDQTtBQUNBOztBQUVBOztBQUVBLHFCQUFxQiw2QkFBNkI7QUFDbEQ7O0FBRUE7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOzs7Ozs7Ozs7O0FDdkdhOztBQUViO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLHNEQUFzRDs7QUFFdEQ7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFFBQVE7QUFDUjtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7O0FBR0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTs7Ozs7Ozs7OztBQ3RDYTs7QUFFYjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7Ozs7Ozs7OztBQ1ZhOztBQUViO0FBQ0E7QUFDQSxjQUFjLEtBQXdDLEdBQUcsc0JBQWlCLEdBQUcsQ0FBSTs7QUFFakY7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7Ozs7Ozs7Ozs7QUNYYTs7QUFFYjtBQUNBO0FBQ0E7O0FBRUE7QUFDQSxrREFBa0Q7QUFDbEQ7O0FBRUE7QUFDQSwwQ0FBMEM7QUFDMUM7O0FBRUE7O0FBRUE7QUFDQSxpRkFBaUY7QUFDakY7O0FBRUE7O0FBRUE7QUFDQSxhQUFhO0FBQ2I7O0FBRUE7QUFDQSxhQUFhO0FBQ2I7O0FBRUE7QUFDQSxhQUFhO0FBQ2I7O0FBRUE7O0FBRUE7QUFDQSx5REFBeUQ7QUFDekQsSUFBSTs7QUFFSjs7O0FBR0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7O0FBR0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBOzs7Ozs7Ozs7O0FDckVhOztBQUViO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsSUFBSTtBQUNKO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7Ozs7Ozs7Ozs7Ozs7OztBQ2YyQzs7QUFFM0M7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQSxZQUFZLGdEQUFPOztBQUVuQjtBQUNBO0FBQ0E7QUFDQTs7QUFFQSxpRUFBZSxPQUFPOzs7Ozs7Ozs7Ozs7OztBQ3BCdEI7QUFDQTtBQUNBO0FBQ0E7O0FBRUEsaUVBQWUsS0FBSzs7Ozs7Ozs7Ozs7Ozs7O0FDTG1COztBQUV2Qzs7QUFFQTtBQUNBO0FBQ0E7O0FBRUEsaUJBQWlCLElBQUksa0RBQWUsRUFBRTtBQUN0QztBQUNBO0FBQ0E7O0FBRUE7QUFDQSxzQkFBc0IsMkNBQVE7QUFDOUI7O0FBRUE7QUFDQSxxQkFBcUIsMkNBQVE7QUFDN0I7O0FBRUE7QUFDQSx3QkFBd0IsMkNBQVE7QUFDaEM7QUFDQTtBQUNBOztBQUVBLGlFQUFlLE1BQU07Ozs7Ozs7Ozs7Ozs7O0FDM0JyQjtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBLGlFQUFlLE1BQU07Ozs7Ozs7Ozs7Ozs7O0FDTnJCO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQSxpRUFBZSxNQUFNLEVBQUM7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ3ZCaUM7QUFDTjtBQUN3QjtBQUNGO0FBQ1o7QUFDbEI7O0FBRXpDOztBQUVBLHlCQUF5QixzREFBYSxFQUFFLG1EQUFVLEVBQUUsK0RBQXNCO0FBQzFFLHlCQUF5Qiw4REFBcUIsRUFBRSx3REFBZSxFQUFFLCtDQUFNO0FBQ3ZFO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBLGlCQUFpQiwwQkFBMEI7QUFDM0M7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQSxpRUFBZSxRQUFRLEVBQUM7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7VUM5Q3hCO1VBQ0E7O1VBRUE7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7O1VBRUE7VUFDQTs7VUFFQTtVQUNBO1VBQ0E7O1VBRUE7VUFDQTs7Ozs7V0N6QkE7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBLGlDQUFpQyxXQUFXO1dBQzVDO1dBQ0E7Ozs7O1dDUEE7V0FDQTtXQUNBO1dBQ0E7V0FDQSx5Q0FBeUMsd0NBQXdDO1dBQ2pGO1dBQ0E7V0FDQTs7Ozs7V0NQQTtXQUNBO1dBQ0E7V0FDQTtXQUNBLEdBQUc7V0FDSDtXQUNBO1dBQ0EsQ0FBQzs7Ozs7V0NQRDs7Ozs7V0NBQTtXQUNBO1dBQ0E7V0FDQSx1REFBdUQsaUJBQWlCO1dBQ3hFO1dBQ0EsZ0RBQWdELGFBQWE7V0FDN0Q7Ozs7O1dDTkE7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7Ozs7O1dDZkE7O1dBRUE7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBOztXQUVBOztXQUVBOztXQUVBOztXQUVBOztXQUVBOztXQUVBOztXQUVBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7QUNyQnFCO0FBQ1M7QUFDSTtBQUNOO0FBQ0s7QUFDQTtBQUNEOztBQUVoQyxtREFBTTtBQUNOLHFEQUFRO0FBQ1Isc0RBQU07O0FBRU47QUFDQTtBQUNBOztBQUVBO0FBQ0EsRUFBRSxrREFBSztBQUNQLEVBQUUscURBQVE7QUFDVixFQUFFLHNEQUFNO0FBQ1I7O0FBRUE7QUFDQSxFQUFFLGtEQUFLO0FBQ1AsRUFBRSxzREFBTTtBQUNSLEVBQUUsc0RBQU07QUFDUjs7QUFFQTtBQUNBLEVBQUUsa0RBQUs7QUFDUCxFQUFFLG9EQUFPO0FBQ1QsRUFBRSxzREFBTTtBQUNSIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vbXlfd2Vic2l0ZV9hbHBoYS8uL3NyYy9zdHlsZS5jc3MiLCJ3ZWJwYWNrOi8vbXlfd2Vic2l0ZV9hbHBoYS8uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9hcGkuanMiLCJ3ZWJwYWNrOi8vbXlfd2Vic2l0ZV9hbHBoYS8uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9nZXRVcmwuanMiLCJ3ZWJwYWNrOi8vbXlfd2Vic2l0ZV9hbHBoYS8uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9zb3VyY2VNYXBzLmpzIiwid2VicGFjazovL215X3dlYnNpdGVfYWxwaGEvLi9zcmMvc3R5bGUuY3NzPzcxNjMiLCJ3ZWJwYWNrOi8vbXlfd2Vic2l0ZV9hbHBoYS8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luamVjdFN0eWxlc0ludG9TdHlsZVRhZy5qcyIsIndlYnBhY2s6Ly9teV93ZWJzaXRlX2FscGhhLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0QnlTZWxlY3Rvci5qcyIsIndlYnBhY2s6Ly9teV93ZWJzaXRlX2FscGhhLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0U3R5bGVFbGVtZW50LmpzIiwid2VicGFjazovL215X3dlYnNpdGVfYWxwaGEvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMuanMiLCJ3ZWJwYWNrOi8vbXlfd2Vic2l0ZV9hbHBoYS8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlRG9tQVBJLmpzIiwid2VicGFjazovL215X3dlYnNpdGVfYWxwaGEvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZVRhZ1RyYW5zZm9ybS5qcyIsIndlYnBhY2s6Ly9teV93ZWJzaXRlX2FscGhhLy4vc3JjL2Fib3V0bWUuanMiLCJ3ZWJwYWNrOi8vbXlfd2Vic2l0ZV9hbHBoYS8uL3NyYy9jbGVhci5qcyIsIndlYnBhY2s6Ly9teV93ZWJzaXRlX2FscGhhLy4vc3JjL2Vzc2F5cy5qcyIsIndlYnBhY2s6Ly9teV93ZWJzaXRlX2FscGhhLy4vc3JjL2Zvb3Rlci5qcyIsIndlYnBhY2s6Ly9teV93ZWJzaXRlX2FscGhhLy4vc3JjL2hlYWRlci5qcyIsIndlYnBhY2s6Ly9teV93ZWJzaXRlX2FscGhhLy4vc3JjL3Byb2plY3RzLmpzIiwid2VicGFjazovL215X3dlYnNpdGVfYWxwaGEvd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vbXlfd2Vic2l0ZV9hbHBoYS93ZWJwYWNrL3J1bnRpbWUvY29tcGF0IGdldCBkZWZhdWx0IGV4cG9ydCIsIndlYnBhY2s6Ly9teV93ZWJzaXRlX2FscGhhL3dlYnBhY2svcnVudGltZS9kZWZpbmUgcHJvcGVydHkgZ2V0dGVycyIsIndlYnBhY2s6Ly9teV93ZWJzaXRlX2FscGhhL3dlYnBhY2svcnVudGltZS9nbG9iYWwiLCJ3ZWJwYWNrOi8vbXlfd2Vic2l0ZV9hbHBoYS93ZWJwYWNrL3J1bnRpbWUvaGFzT3duUHJvcGVydHkgc2hvcnRoYW5kIiwid2VicGFjazovL215X3dlYnNpdGVfYWxwaGEvd2VicGFjay9ydW50aW1lL21ha2UgbmFtZXNwYWNlIG9iamVjdCIsIndlYnBhY2s6Ly9teV93ZWJzaXRlX2FscGhhL3dlYnBhY2svcnVudGltZS9wdWJsaWNQYXRoIiwid2VicGFjazovL215X3dlYnNpdGVfYWxwaGEvd2VicGFjay9ydW50aW1lL2pzb25wIGNodW5rIGxvYWRpbmciLCJ3ZWJwYWNrOi8vbXlfd2Vic2l0ZV9hbHBoYS8uL3NyYy9pbmRleC5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyIvLyBJbXBvcnRzXG5pbXBvcnQgX19fQ1NTX0xPQURFUl9BUElfU09VUkNFTUFQX0lNUE9SVF9fXyBmcm9tIFwiLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL3NvdXJjZU1hcHMuanNcIjtcbmltcG9ydCBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18gZnJvbSBcIi4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9hcGkuanNcIjtcbmltcG9ydCBfX19DU1NfTE9BREVSX0dFVF9VUkxfSU1QT1JUX19fIGZyb20gXCIuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvZ2V0VXJsLmpzXCI7XG52YXIgX19fQ1NTX0xPQURFUl9VUkxfSU1QT1JUXzBfX18gPSBuZXcgVVJMKFwiLi9mb250cy9Nb250c2VycmF0L01vbnRzZXJyYXQtTGlnaHQud29mZlwiLCBpbXBvcnQubWV0YS51cmwpO1xudmFyIF9fX0NTU19MT0FERVJfVVJMX0lNUE9SVF8xX19fID0gbmV3IFVSTChcIi4vZm9udHMvTW9udHNlcnJhdC9Nb250c2VycmF0LU1lZGl1bS53b2ZmXCIsIGltcG9ydC5tZXRhLnVybCk7XG52YXIgX19fQ1NTX0xPQURFUl9VUkxfSU1QT1JUXzJfX18gPSBuZXcgVVJMKFwiLi9mb250cy9TRl9Qcm8vU0YtUHJvLVRleHQtTGlnaHQud29mZlwiLCBpbXBvcnQubWV0YS51cmwpO1xudmFyIF9fX0NTU19MT0FERVJfVVJMX0lNUE9SVF8zX19fID0gbmV3IFVSTChcIi4vZm9udHMvU0ZfUHJvL1NGLVByby1UZXh0LU1lZGl1bS53b2ZmXCIsIGltcG9ydC5tZXRhLnVybCk7XG52YXIgX19fQ1NTX0xPQURFUl9FWFBPUlRfX18gPSBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18oX19fQ1NTX0xPQURFUl9BUElfU09VUkNFTUFQX0lNUE9SVF9fXyk7XG52YXIgX19fQ1NTX0xPQURFUl9VUkxfUkVQTEFDRU1FTlRfMF9fXyA9IF9fX0NTU19MT0FERVJfR0VUX1VSTF9JTVBPUlRfX18oX19fQ1NTX0xPQURFUl9VUkxfSU1QT1JUXzBfX18pO1xudmFyIF9fX0NTU19MT0FERVJfVVJMX1JFUExBQ0VNRU5UXzFfX18gPSBfX19DU1NfTE9BREVSX0dFVF9VUkxfSU1QT1JUX19fKF9fX0NTU19MT0FERVJfVVJMX0lNUE9SVF8xX19fKTtcbnZhciBfX19DU1NfTE9BREVSX1VSTF9SRVBMQUNFTUVOVF8yX19fID0gX19fQ1NTX0xPQURFUl9HRVRfVVJMX0lNUE9SVF9fXyhfX19DU1NfTE9BREVSX1VSTF9JTVBPUlRfMl9fXyk7XG52YXIgX19fQ1NTX0xPQURFUl9VUkxfUkVQTEFDRU1FTlRfM19fXyA9IF9fX0NTU19MT0FERVJfR0VUX1VSTF9JTVBPUlRfX18oX19fQ1NTX0xPQURFUl9VUkxfSU1QT1JUXzNfX18pO1xuLy8gTW9kdWxlXG5fX19DU1NfTE9BREVSX0VYUE9SVF9fXy5wdXNoKFttb2R1bGUuaWQsIFwiYm9keSB7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gIGJhY2tncm91bmQtY29sb3I6IHJnYigyNDUsIDI0NSwgMjQ3KTtcXG59XFxuXFxuaGVhZGVyIHtcXG4gIHBhZGRpbmc6IDEwcHg7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgZ2FwOiA0JTtcXG4gIHBhZGRpbmc6IDAlIDQlO1xcbiAgYmFja2dyb3VuZC1jb2xvcjogcmdiKDQ5LDQ5LDUwKTtcXG4gIG1hcmdpbi1sZWZ0OiAtMSU7XFxuICBtYXJnaW4tcmlnaHQ6IC0xJTtcXG4gIG1hcmdpbi10b3A6IC0xJTtcXG59XFxuXFxuaGVhZGVyPioge1xcbiAgY29sb3I6IHJnYigyMTQsMjEzLDIxNCk7XFxufVxcblxcbmhlYWRlciA6Zmlyc3Qtb2YtdHlwZSB7XFxuICBmb250LXNpemU6IDMwcHg7XFxufVxcbmhlYWRlciA6bnRoLW9mLXR5cGUoMikge1xcbiAgbWFyZ2luLWxlZnQ6IGF1dG87XFxufVxcblxcbmhlYWRlcj5idXR0b24ge1xcbiAgYm9yZGVyOiBub25lO1xcbiAgYmFja2dyb3VuZC1jb2xvcjogdHJhbnNwYXJlbnQ7XFxuICBwYWRkaW5nOiAyMHB4IDEwcHg7XFxuICBmb250LXNpemU6IDIwcHg7XFxufVxcblxcbiNsb2dvIHtcXG5mb250LXdlaWdodDogYm9sZDtcXG59XFxuXFxuI2xvZ286aG92ZXIge1xcbiAgdHJhbnNmb3JtOiBzY2FsZSgxKTtcXG4gIHRyYW5zaXRpb24tZHVyYXRpb246IDBzO1xcbn1cXG5cXG5oZWFkZXI+YnV0dG9uOmhvdmVyIHtcXG4gIHRyYW5zZm9ybTogc2NhbGUoMS4xNSk7XFxuICB0cmFuc2l0aW9uLWR1cmF0aW9uOiAwLjNzO1xcbn1cXG5cXG5cXG5cXG4ucHJvamVjdEJvYXJkIHtcXG4gIHdpZHRoOiBtaW4oNzAwcHgsIDEwMCUpO1xcbiAgYWxpZ24tc2VsZjogY2VudGVyO1xcbiAgZGlzcGxheTogZ3JpZDtcXG4gIGdyaWQtdGVtcGxhdGUtY29sdW1uczogcmVwZWF0KDIsIDFmcik7XFxuICBnYXA6IDIlO1xcbiAgbWFyZ2luOiAxJTtcXG4gIG1hcmdpbi1ib3R0b206IDMwcHg7XFxufVxcblxcbi5wcm9qZWN0IHtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBib3JkZXItcmFkaXVzOiAxLjJlbTtcXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgaGVpZ2h0OiAyMDBweDtcXG4gIG92ZXJmbG93OiBzY3JvbGw7XFxuICBwYWRkaW5nOiA1JSA1JTtcXG4gIGdhcDogMTAlO1xcbiAgYmFja2dyb3VuZC1jb2xvcjogd2hpdGU7XFxufVxcblxcbi5wcm9qZWN0OmhvdmVyIHtcXG4gIHRyYW5zZm9ybTogc2NhbGUoMS4wMyk7XFxuICB0cmFuc2l0aW9uLWR1cmF0aW9uOiAwLjNzO1xcbiAgYm94LXNoYWRvdzogMHB4IDBweCAyMHB4IDFweCByZ2JhKDAsIDAsIDAsIDAuMik7XFxufVxcblxcbi5wcm9qZWN0Pioge1xcbiAgbWFyZ2luOiAwcHg7XFxufVxcblxcbi5wcm9qZWN0PmltZyB7XFxuICB3aWR0aDogNjRweDtcXG4gIGhlaWdodDogYXV0bztcXG59XFxuXFxuLnByb2plY3Q+cCB7XFxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxufVxcblxcbi5lc3NheUJvYXJkIHtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAgd2lkdGg6IG1pbig3MDBweCwgMTAwJSk7XFxuICBhbGlnbi1zZWxmOiBjZW50ZXI7XFxuICBtYXJnaW46IDElO1xcbiAgZ2FwOiAxNXB4O1xcbn1cXG5cXG4uZXNzYXkge1xcbiAgYm9yZGVyLXJhZGl1czogMS4yZW07XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gIHBhZGRpbmc6IDMlIDQlO1xcbiAgbWF4LWhlaWdodDogMjUwcHg7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiB3aGl0ZTtcXG59XFxuXFxuLmVzc2F5OmhvdmVyIHtcXG4gIHRyYW5zZm9ybTogc2NhbGUoMS4wMyk7XFxuICB0cmFuc2l0aW9uLWR1cmF0aW9uOiAwLjNzO1xcbiAgYm94LXNoYWRvdzogMHB4IDBweCAyMHB4IDFweCByZ2JhKDAsIDAsIDAsIDAuMik7XFxufVxcblxcbi5lc3NheT4qIHtcXG4gIG1hcmdpbjogMC4zJTtcXG59XFxuXFxuLmVzc2F5PjpudGgtY2hpbGQoMykge1xcbiAgbWFyZ2luLXRvcDogMi41JTtcXG4gIG92ZXJmbG93OiBzY3JvbGw7XFxufVxcblxcbiNhYm91dE1lQm9hcmQ+KiB7XFxuXFxufVxcblxcbiNhYm91dE1lQm9hcmQge1xcbiAgZGlzcGxheTogZ3JpZDtcXG4gIGFsaWduLXNlbGY6IGNlbnRlcjtcXG4gIHdpZHRoOiBtaW4oOTAwcHgsIDEwMCUpO1xcbiAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiAxLjFmciAxZnI7XFxuICBncmlkLXRlbXBsYXRlLXJvd3M6IDcwcHggMWZyO1xcbiAgZ2FwOiAyLjUlO1xcbiAgbWFyZ2luOiAyJTtcXG59XFxuXFxuI2Fib3V0TWVCb2FyZD5pbWcge1xcbiAgd2lkdGg6IDkwJTtcXG4gIGhlaWdodDogYXV0bztcXG4gIGdyaWQtcm93OiAxLzM7XFxuICBib3JkZXItcmFkaXVzOiAxLjJlbTtcXG4gIHRyYW5zZm9ybTogcm90YXRlKC01ZGVnKTtcXG59XFxuXFxuI2Fib3V0TWVCb2FyZD5wIHtcXG4gIHBhZGRpbmctcmlnaHQ6IDEwJTtcXG4gIGZvbnQtc2l6ZTogMS4xZW07XFxufVxcblxcbiNhYm91dE1lQm9hcmQ+aDIge1xcbiAgcGFkZGluZy1yaWdodDogMTAlO1xcbiAgZm9udC1zaXplOiAyZW07XFxufVxcblxcbmZvb3RlciB7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2IoNDksNDksNTApO1xcbiAgY29sb3I6IHJnYigyMTQsMjEzLDIxNCk7XFxuICBwYWRkaW5nOiAxLjIlIDAlO1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbiAgbWFyZ2luLXRvcDogMSU7XFxuICBtYXJnaW4tbGVmdDogLTElO1xcbiAgbWFyZ2luLWJvdHRvbTogLTMlO1xcbn1cXG5cXG4qIHtcXG4gIGZvbnQtZmFtaWx5OiAnU0YgUHJvJywgJ01vbnRzZXJyYXQnLCAtYXBwbGUtc3lzdGVtLCBCbGlua01hY1N5c3RlbUZvbnQsICdTZWdvZSBVSScsIFJvYm90bywgT3h5Z2VuLCBVYnVudHUsIENhbnRhcmVsbCwgJ09wZW4gU2FucycsICdIZWx2ZXRpY2EgTmV1ZScsIHNhbnMtc2VyaWY7XFxufVxcblxcbkBmb250LWZhY2Uge1xcbiAgZm9udC1mYW1pbHk6ICdNb250c2VycmF0JztcXG4gIHNyYzogdXJsKFwiICsgX19fQ1NTX0xPQURFUl9VUkxfUkVQTEFDRU1FTlRfMF9fXyArIFwiKSBmb3JtYXQoJ3dvZmYnKTtcXG4gIGZvbnQtc3R5bGU6IG5vcm1hbDtcXG4gIGZvbnQtd2VpZ2h0OiBub3JtYWw7XFxufVxcblxcbkBmb250LWZhY2Uge1xcbiAgZm9udC1mYW1pbHk6ICdNb250c2VycmF0JztcXG4gIHNyYzogdXJsKFwiICsgX19fQ1NTX0xPQURFUl9VUkxfUkVQTEFDRU1FTlRfMV9fXyArIFwiKSBmb3JtYXQoJ3dvZmYnKTtcXG4gIGZvbnQtc3R5bGU6IG5vcm1hbDtcXG4gIGZvbnQtd2VpZ2h0OiBib2xkO1xcbn1cXG5cXG5AZm9udC1mYWNlIHtcXG4gIGZvbnQtZmFtaWx5OiAnU0YgUHJvJztcXG4gIHNyYzogdXJsKFwiICsgX19fQ1NTX0xPQURFUl9VUkxfUkVQTEFDRU1FTlRfMl9fXyArIFwiKSBmb3JtYXQoJ3dvZmYnKTtcXG4gIGZvbnQtc3R5bGU6IG5vcm1hbDtcXG4gIGZvbnQtd2VpZ2h0OiBub3JtYWw7XFxufVxcblxcbkBmb250LWZhY2Uge1xcbiAgZm9udC1mYW1pbHk6ICdTRiBQcm8nO1xcbiAgc3JjOiB1cmwoXCIgKyBfX19DU1NfTE9BREVSX1VSTF9SRVBMQUNFTUVOVF8zX19fICsgXCIpIGZvcm1hdCgnd29mZicpO1xcbiAgZm9udC1zdHlsZTogbm9ybWFsO1xcbiAgZm9udC13ZWlnaHQ6IGJvbGQ7XFxufVwiLCBcIlwiLHtcInZlcnNpb25cIjozLFwic291cmNlc1wiOltcIndlYnBhY2s6Ly8uL3NyYy9zdHlsZS5jc3NcIl0sXCJuYW1lc1wiOltdLFwibWFwcGluZ3NcIjpcIkFBQUE7RUFDRSxhQUFhO0VBQ2Isc0JBQXNCO0VBQ3RCLG9DQUFvQztBQUN0Qzs7QUFFQTtFQUNFLGFBQWE7RUFDYixhQUFhO0VBQ2IsT0FBTztFQUNQLGNBQWM7RUFDZCwrQkFBK0I7RUFDL0IsZ0JBQWdCO0VBQ2hCLGlCQUFpQjtFQUNqQixlQUFlO0FBQ2pCOztBQUVBO0VBQ0UsdUJBQXVCO0FBQ3pCOztBQUVBO0VBQ0UsZUFBZTtBQUNqQjtBQUNBO0VBQ0UsaUJBQWlCO0FBQ25COztBQUVBO0VBQ0UsWUFBWTtFQUNaLDZCQUE2QjtFQUM3QixrQkFBa0I7RUFDbEIsZUFBZTtBQUNqQjs7QUFFQTtBQUNBLGlCQUFpQjtBQUNqQjs7QUFFQTtFQUNFLG1CQUFtQjtFQUNuQix1QkFBdUI7QUFDekI7O0FBRUE7RUFDRSxzQkFBc0I7RUFDdEIseUJBQXlCO0FBQzNCOzs7O0FBSUE7RUFDRSx1QkFBdUI7RUFDdkIsa0JBQWtCO0VBQ2xCLGFBQWE7RUFDYixxQ0FBcUM7RUFDckMsT0FBTztFQUNQLFVBQVU7RUFDVixtQkFBbUI7QUFDckI7O0FBRUE7RUFDRSxhQUFhO0VBQ2Isb0JBQW9CO0VBQ3BCLHNCQUFzQjtFQUN0QixtQkFBbUI7RUFDbkIsYUFBYTtFQUNiLGdCQUFnQjtFQUNoQixjQUFjO0VBQ2QsUUFBUTtFQUNSLHVCQUF1QjtBQUN6Qjs7QUFFQTtFQUNFLHNCQUFzQjtFQUN0Qix5QkFBeUI7RUFDekIsK0NBQStDO0FBQ2pEOztBQUVBO0VBQ0UsV0FBVztBQUNiOztBQUVBO0VBQ0UsV0FBVztFQUNYLFlBQVk7QUFDZDs7QUFFQTtFQUNFLGtCQUFrQjtBQUNwQjs7QUFFQTtFQUNFLGFBQWE7RUFDYixzQkFBc0I7RUFDdEIsdUJBQXVCO0VBQ3ZCLGtCQUFrQjtFQUNsQixVQUFVO0VBQ1YsU0FBUztBQUNYOztBQUVBO0VBQ0Usb0JBQW9CO0VBQ3BCLGFBQWE7RUFDYixzQkFBc0I7RUFDdEIsY0FBYztFQUNkLGlCQUFpQjtFQUNqQix1QkFBdUI7QUFDekI7O0FBRUE7RUFDRSxzQkFBc0I7RUFDdEIseUJBQXlCO0VBQ3pCLCtDQUErQztBQUNqRDs7QUFFQTtFQUNFLFlBQVk7QUFDZDs7QUFFQTtFQUNFLGdCQUFnQjtFQUNoQixnQkFBZ0I7QUFDbEI7O0FBRUE7O0FBRUE7O0FBRUE7RUFDRSxhQUFhO0VBQ2Isa0JBQWtCO0VBQ2xCLHVCQUF1QjtFQUN2QixnQ0FBZ0M7RUFDaEMsNEJBQTRCO0VBQzVCLFNBQVM7RUFDVCxVQUFVO0FBQ1o7O0FBRUE7RUFDRSxVQUFVO0VBQ1YsWUFBWTtFQUNaLGFBQWE7RUFDYixvQkFBb0I7RUFDcEIsd0JBQXdCO0FBQzFCOztBQUVBO0VBQ0Usa0JBQWtCO0VBQ2xCLGdCQUFnQjtBQUNsQjs7QUFFQTtFQUNFLGtCQUFrQjtFQUNsQixjQUFjO0FBQ2hCOztBQUVBO0VBQ0UsK0JBQStCO0VBQy9CLHVCQUF1QjtFQUN2QixnQkFBZ0I7RUFDaEIsYUFBYTtFQUNiLHVCQUF1QjtFQUN2QixjQUFjO0VBQ2QsZ0JBQWdCO0VBQ2hCLGtCQUFrQjtBQUNwQjs7QUFFQTtFQUNFLGdLQUFnSztBQUNsSzs7QUFFQTtFQUNFLHlCQUF5QjtFQUN6QiwyREFBbUU7RUFDbkUsa0JBQWtCO0VBQ2xCLG1CQUFtQjtBQUNyQjs7QUFFQTtFQUNFLHlCQUF5QjtFQUN6QiwyREFBb0U7RUFDcEUsa0JBQWtCO0VBQ2xCLGlCQUFpQjtBQUNuQjs7QUFFQTtFQUNFLHFCQUFxQjtFQUNyQiwyREFBZ0U7RUFDaEUsa0JBQWtCO0VBQ2xCLG1CQUFtQjtBQUNyQjs7QUFFQTtFQUNFLHFCQUFxQjtFQUNyQiwyREFBaUU7RUFDakUsa0JBQWtCO0VBQ2xCLGlCQUFpQjtBQUNuQlwiLFwic291cmNlc0NvbnRlbnRcIjpbXCJib2R5IHtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAgYmFja2dyb3VuZC1jb2xvcjogcmdiKDI0NSwgMjQ1LCAyNDcpO1xcbn1cXG5cXG5oZWFkZXIge1xcbiAgcGFkZGluZzogMTBweDtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBnYXA6IDQlO1xcbiAgcGFkZGluZzogMCUgNCU7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2IoNDksNDksNTApO1xcbiAgbWFyZ2luLWxlZnQ6IC0xJTtcXG4gIG1hcmdpbi1yaWdodDogLTElO1xcbiAgbWFyZ2luLXRvcDogLTElO1xcbn1cXG5cXG5oZWFkZXI+KiB7XFxuICBjb2xvcjogcmdiKDIxNCwyMTMsMjE0KTtcXG59XFxuXFxuaGVhZGVyIDpmaXJzdC1vZi10eXBlIHtcXG4gIGZvbnQtc2l6ZTogMzBweDtcXG59XFxuaGVhZGVyIDpudGgtb2YtdHlwZSgyKSB7XFxuICBtYXJnaW4tbGVmdDogYXV0bztcXG59XFxuXFxuaGVhZGVyPmJ1dHRvbiB7XFxuICBib3JkZXI6IG5vbmU7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiB0cmFuc3BhcmVudDtcXG4gIHBhZGRpbmc6IDIwcHggMTBweDtcXG4gIGZvbnQtc2l6ZTogMjBweDtcXG59XFxuXFxuI2xvZ28ge1xcbmZvbnQtd2VpZ2h0OiBib2xkO1xcbn1cXG5cXG4jbG9nbzpob3ZlciB7XFxuICB0cmFuc2Zvcm06IHNjYWxlKDEpO1xcbiAgdHJhbnNpdGlvbi1kdXJhdGlvbjogMHM7XFxufVxcblxcbmhlYWRlcj5idXR0b246aG92ZXIge1xcbiAgdHJhbnNmb3JtOiBzY2FsZSgxLjE1KTtcXG4gIHRyYW5zaXRpb24tZHVyYXRpb246IDAuM3M7XFxufVxcblxcblxcblxcbi5wcm9qZWN0Qm9hcmQge1xcbiAgd2lkdGg6IG1pbig3MDBweCwgMTAwJSk7XFxuICBhbGlnbi1zZWxmOiBjZW50ZXI7XFxuICBkaXNwbGF5OiBncmlkO1xcbiAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiByZXBlYXQoMiwgMWZyKTtcXG4gIGdhcDogMiU7XFxuICBtYXJnaW46IDElO1xcbiAgbWFyZ2luLWJvdHRvbTogMzBweDtcXG59XFxuXFxuLnByb2plY3Qge1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGJvcmRlci1yYWRpdXM6IDEuMmVtO1xcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICBoZWlnaHQ6IDIwMHB4O1xcbiAgb3ZlcmZsb3c6IHNjcm9sbDtcXG4gIHBhZGRpbmc6IDUlIDUlO1xcbiAgZ2FwOiAxMCU7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiB3aGl0ZTtcXG59XFxuXFxuLnByb2plY3Q6aG92ZXIge1xcbiAgdHJhbnNmb3JtOiBzY2FsZSgxLjAzKTtcXG4gIHRyYW5zaXRpb24tZHVyYXRpb246IDAuM3M7XFxuICBib3gtc2hhZG93OiAwcHggMHB4IDIwcHggMXB4IHJnYmEoMCwgMCwgMCwgMC4yKTtcXG59XFxuXFxuLnByb2plY3Q+KiB7XFxuICBtYXJnaW46IDBweDtcXG59XFxuXFxuLnByb2plY3Q+aW1nIHtcXG4gIHdpZHRoOiA2NHB4O1xcbiAgaGVpZ2h0OiBhdXRvO1xcbn1cXG5cXG4ucHJvamVjdD5wIHtcXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcXG59XFxuXFxuLmVzc2F5Qm9hcmQge1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICB3aWR0aDogbWluKDcwMHB4LCAxMDAlKTtcXG4gIGFsaWduLXNlbGY6IGNlbnRlcjtcXG4gIG1hcmdpbjogMSU7XFxuICBnYXA6IDE1cHg7XFxufVxcblxcbi5lc3NheSB7XFxuICBib3JkZXItcmFkaXVzOiAxLjJlbTtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAgcGFkZGluZzogMyUgNCU7XFxuICBtYXgtaGVpZ2h0OiAyNTBweDtcXG4gIGJhY2tncm91bmQtY29sb3I6IHdoaXRlO1xcbn1cXG5cXG4uZXNzYXk6aG92ZXIge1xcbiAgdHJhbnNmb3JtOiBzY2FsZSgxLjAzKTtcXG4gIHRyYW5zaXRpb24tZHVyYXRpb246IDAuM3M7XFxuICBib3gtc2hhZG93OiAwcHggMHB4IDIwcHggMXB4IHJnYmEoMCwgMCwgMCwgMC4yKTtcXG59XFxuXFxuLmVzc2F5Pioge1xcbiAgbWFyZ2luOiAwLjMlO1xcbn1cXG5cXG4uZXNzYXk+Om50aC1jaGlsZCgzKSB7XFxuICBtYXJnaW4tdG9wOiAyLjUlO1xcbiAgb3ZlcmZsb3c6IHNjcm9sbDtcXG59XFxuXFxuI2Fib3V0TWVCb2FyZD4qIHtcXG5cXG59XFxuXFxuI2Fib3V0TWVCb2FyZCB7XFxuICBkaXNwbGF5OiBncmlkO1xcbiAgYWxpZ24tc2VsZjogY2VudGVyO1xcbiAgd2lkdGg6IG1pbig5MDBweCwgMTAwJSk7XFxuICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IDEuMWZyIDFmcjtcXG4gIGdyaWQtdGVtcGxhdGUtcm93czogNzBweCAxZnI7XFxuICBnYXA6IDIuNSU7XFxuICBtYXJnaW46IDIlO1xcbn1cXG5cXG4jYWJvdXRNZUJvYXJkPmltZyB7XFxuICB3aWR0aDogOTAlO1xcbiAgaGVpZ2h0OiBhdXRvO1xcbiAgZ3JpZC1yb3c6IDEvMztcXG4gIGJvcmRlci1yYWRpdXM6IDEuMmVtO1xcbiAgdHJhbnNmb3JtOiByb3RhdGUoLTVkZWcpO1xcbn1cXG5cXG4jYWJvdXRNZUJvYXJkPnAge1xcbiAgcGFkZGluZy1yaWdodDogMTAlO1xcbiAgZm9udC1zaXplOiAxLjFlbTtcXG59XFxuXFxuI2Fib3V0TWVCb2FyZD5oMiB7XFxuICBwYWRkaW5nLXJpZ2h0OiAxMCU7XFxuICBmb250LXNpemU6IDJlbTtcXG59XFxuXFxuZm9vdGVyIHtcXG4gIGJhY2tncm91bmQtY29sb3I6IHJnYig0OSw0OSw1MCk7XFxuICBjb2xvcjogcmdiKDIxNCwyMTMsMjE0KTtcXG4gIHBhZGRpbmc6IDEuMiUgMCU7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxuICBtYXJnaW4tdG9wOiAxJTtcXG4gIG1hcmdpbi1sZWZ0OiAtMSU7XFxuICBtYXJnaW4tYm90dG9tOiAtMyU7XFxufVxcblxcbioge1xcbiAgZm9udC1mYW1pbHk6ICdTRiBQcm8nLCAnTW9udHNlcnJhdCcsIC1hcHBsZS1zeXN0ZW0sIEJsaW5rTWFjU3lzdGVtRm9udCwgJ1NlZ29lIFVJJywgUm9ib3RvLCBPeHlnZW4sIFVidW50dSwgQ2FudGFyZWxsLCAnT3BlbiBTYW5zJywgJ0hlbHZldGljYSBOZXVlJywgc2Fucy1zZXJpZjtcXG59XFxuXFxuQGZvbnQtZmFjZSB7XFxuICBmb250LWZhbWlseTogJ01vbnRzZXJyYXQnO1xcbiAgc3JjOiB1cmwoJy4vZm9udHMvTW9udHNlcnJhdC9Nb250c2VycmF0LUxpZ2h0LndvZmYnKSBmb3JtYXQoJ3dvZmYnKTtcXG4gIGZvbnQtc3R5bGU6IG5vcm1hbDtcXG4gIGZvbnQtd2VpZ2h0OiBub3JtYWw7XFxufVxcblxcbkBmb250LWZhY2Uge1xcbiAgZm9udC1mYW1pbHk6ICdNb250c2VycmF0JztcXG4gIHNyYzogdXJsKCcuL2ZvbnRzL01vbnRzZXJyYXQvTW9udHNlcnJhdC1NZWRpdW0ud29mZicpIGZvcm1hdCgnd29mZicpO1xcbiAgZm9udC1zdHlsZTogbm9ybWFsO1xcbiAgZm9udC13ZWlnaHQ6IGJvbGQ7XFxufVxcblxcbkBmb250LWZhY2Uge1xcbiAgZm9udC1mYW1pbHk6ICdTRiBQcm8nO1xcbiAgc3JjOiB1cmwoJy4vZm9udHMvU0ZfUHJvL1NGLVByby1UZXh0LUxpZ2h0LndvZmYnKSBmb3JtYXQoJ3dvZmYnKTtcXG4gIGZvbnQtc3R5bGU6IG5vcm1hbDtcXG4gIGZvbnQtd2VpZ2h0OiBub3JtYWw7XFxufVxcblxcbkBmb250LWZhY2Uge1xcbiAgZm9udC1mYW1pbHk6ICdTRiBQcm8nO1xcbiAgc3JjOiB1cmwoJy4vZm9udHMvU0ZfUHJvL1NGLVByby1UZXh0LU1lZGl1bS53b2ZmJykgZm9ybWF0KCd3b2ZmJyk7XFxuICBmb250LXN0eWxlOiBub3JtYWw7XFxuICBmb250LXdlaWdodDogYm9sZDtcXG59XCJdLFwic291cmNlUm9vdFwiOlwiXCJ9XSk7XG4vLyBFeHBvcnRzXG5leHBvcnQgZGVmYXVsdCBfX19DU1NfTE9BREVSX0VYUE9SVF9fXztcbiIsIlwidXNlIHN0cmljdFwiO1xuXG4vKlxuICBNSVQgTGljZW5zZSBodHRwOi8vd3d3Lm9wZW5zb3VyY2Uub3JnL2xpY2Vuc2VzL21pdC1saWNlbnNlLnBocFxuICBBdXRob3IgVG9iaWFzIEtvcHBlcnMgQHNva3JhXG4qL1xubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoY3NzV2l0aE1hcHBpbmdUb1N0cmluZykge1xuICB2YXIgbGlzdCA9IFtdOyAvLyByZXR1cm4gdGhlIGxpc3Qgb2YgbW9kdWxlcyBhcyBjc3Mgc3RyaW5nXG5cbiAgbGlzdC50b1N0cmluZyA9IGZ1bmN0aW9uIHRvU3RyaW5nKCkge1xuICAgIHJldHVybiB0aGlzLm1hcChmdW5jdGlvbiAoaXRlbSkge1xuICAgICAgdmFyIGNvbnRlbnQgPSBcIlwiO1xuICAgICAgdmFyIG5lZWRMYXllciA9IHR5cGVvZiBpdGVtWzVdICE9PSBcInVuZGVmaW5lZFwiO1xuXG4gICAgICBpZiAoaXRlbVs0XSkge1xuICAgICAgICBjb250ZW50ICs9IFwiQHN1cHBvcnRzIChcIi5jb25jYXQoaXRlbVs0XSwgXCIpIHtcIik7XG4gICAgICB9XG5cbiAgICAgIGlmIChpdGVtWzJdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJAbWVkaWEgXCIuY29uY2F0KGl0ZW1bMl0sIFwiIHtcIik7XG4gICAgICB9XG5cbiAgICAgIGlmIChuZWVkTGF5ZXIpIHtcbiAgICAgICAgY29udGVudCArPSBcIkBsYXllclwiLmNvbmNhdChpdGVtWzVdLmxlbmd0aCA+IDAgPyBcIiBcIi5jb25jYXQoaXRlbVs1XSkgOiBcIlwiLCBcIiB7XCIpO1xuICAgICAgfVxuXG4gICAgICBjb250ZW50ICs9IGNzc1dpdGhNYXBwaW5nVG9TdHJpbmcoaXRlbSk7XG5cbiAgICAgIGlmIChuZWVkTGF5ZXIpIHtcbiAgICAgICAgY29udGVudCArPSBcIn1cIjtcbiAgICAgIH1cblxuICAgICAgaWYgKGl0ZW1bMl0pIHtcbiAgICAgICAgY29udGVudCArPSBcIn1cIjtcbiAgICAgIH1cblxuICAgICAgaWYgKGl0ZW1bNF0pIHtcbiAgICAgICAgY29udGVudCArPSBcIn1cIjtcbiAgICAgIH1cblxuICAgICAgcmV0dXJuIGNvbnRlbnQ7XG4gICAgfSkuam9pbihcIlwiKTtcbiAgfTsgLy8gaW1wb3J0IGEgbGlzdCBvZiBtb2R1bGVzIGludG8gdGhlIGxpc3RcblxuXG4gIGxpc3QuaSA9IGZ1bmN0aW9uIGkobW9kdWxlcywgbWVkaWEsIGRlZHVwZSwgc3VwcG9ydHMsIGxheWVyKSB7XG4gICAgaWYgKHR5cGVvZiBtb2R1bGVzID09PSBcInN0cmluZ1wiKSB7XG4gICAgICBtb2R1bGVzID0gW1tudWxsLCBtb2R1bGVzLCB1bmRlZmluZWRdXTtcbiAgICB9XG5cbiAgICB2YXIgYWxyZWFkeUltcG9ydGVkTW9kdWxlcyA9IHt9O1xuXG4gICAgaWYgKGRlZHVwZSkge1xuICAgICAgZm9yICh2YXIgayA9IDA7IGsgPCB0aGlzLmxlbmd0aDsgaysrKSB7XG4gICAgICAgIHZhciBpZCA9IHRoaXNba11bMF07XG5cbiAgICAgICAgaWYgKGlkICE9IG51bGwpIHtcbiAgICAgICAgICBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzW2lkXSA9IHRydWU7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG5cbiAgICBmb3IgKHZhciBfayA9IDA7IF9rIDwgbW9kdWxlcy5sZW5ndGg7IF9rKyspIHtcbiAgICAgIHZhciBpdGVtID0gW10uY29uY2F0KG1vZHVsZXNbX2tdKTtcblxuICAgICAgaWYgKGRlZHVwZSAmJiBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzW2l0ZW1bMF1dKSB7XG4gICAgICAgIGNvbnRpbnVlO1xuICAgICAgfVxuXG4gICAgICBpZiAodHlwZW9mIGxheWVyICE9PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgICAgIGlmICh0eXBlb2YgaXRlbVs1XSA9PT0gXCJ1bmRlZmluZWRcIikge1xuICAgICAgICAgIGl0ZW1bNV0gPSBsYXllcjtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBpdGVtWzFdID0gXCJAbGF5ZXJcIi5jb25jYXQoaXRlbVs1XS5sZW5ndGggPiAwID8gXCIgXCIuY29uY2F0KGl0ZW1bNV0pIDogXCJcIiwgXCIge1wiKS5jb25jYXQoaXRlbVsxXSwgXCJ9XCIpO1xuICAgICAgICAgIGl0ZW1bNV0gPSBsYXllcjtcbiAgICAgICAgfVxuICAgICAgfVxuXG4gICAgICBpZiAobWVkaWEpIHtcbiAgICAgICAgaWYgKCFpdGVtWzJdKSB7XG4gICAgICAgICAgaXRlbVsyXSA9IG1lZGlhO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGl0ZW1bMV0gPSBcIkBtZWRpYSBcIi5jb25jYXQoaXRlbVsyXSwgXCIge1wiKS5jb25jYXQoaXRlbVsxXSwgXCJ9XCIpO1xuICAgICAgICAgIGl0ZW1bMl0gPSBtZWRpYTtcbiAgICAgICAgfVxuICAgICAgfVxuXG4gICAgICBpZiAoc3VwcG9ydHMpIHtcbiAgICAgICAgaWYgKCFpdGVtWzRdKSB7XG4gICAgICAgICAgaXRlbVs0XSA9IFwiXCIuY29uY2F0KHN1cHBvcnRzKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBpdGVtWzFdID0gXCJAc3VwcG9ydHMgKFwiLmNvbmNhdChpdGVtWzRdLCBcIikge1wiKS5jb25jYXQoaXRlbVsxXSwgXCJ9XCIpO1xuICAgICAgICAgIGl0ZW1bNF0gPSBzdXBwb3J0cztcbiAgICAgICAgfVxuICAgICAgfVxuXG4gICAgICBsaXN0LnB1c2goaXRlbSk7XG4gICAgfVxuICB9O1xuXG4gIHJldHVybiBsaXN0O1xufTsiLCJcInVzZSBzdHJpY3RcIjtcblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAodXJsLCBvcHRpb25zKSB7XG4gIGlmICghb3B0aW9ucykge1xuICAgIG9wdGlvbnMgPSB7fTtcbiAgfVxuXG4gIGlmICghdXJsKSB7XG4gICAgcmV0dXJuIHVybDtcbiAgfVxuXG4gIHVybCA9IFN0cmluZyh1cmwuX19lc01vZHVsZSA/IHVybC5kZWZhdWx0IDogdXJsKTsgLy8gSWYgdXJsIGlzIGFscmVhZHkgd3JhcHBlZCBpbiBxdW90ZXMsIHJlbW92ZSB0aGVtXG5cbiAgaWYgKC9eWydcIl0uKlsnXCJdJC8udGVzdCh1cmwpKSB7XG4gICAgdXJsID0gdXJsLnNsaWNlKDEsIC0xKTtcbiAgfVxuXG4gIGlmIChvcHRpb25zLmhhc2gpIHtcbiAgICB1cmwgKz0gb3B0aW9ucy5oYXNoO1xuICB9IC8vIFNob3VsZCB1cmwgYmUgd3JhcHBlZD9cbiAgLy8gU2VlIGh0dHBzOi8vZHJhZnRzLmNzc3dnLm9yZy9jc3MtdmFsdWVzLTMvI3VybHNcblxuXG4gIGlmICgvW1wiJygpIFxcdFxcbl18KCUyMCkvLnRlc3QodXJsKSB8fCBvcHRpb25zLm5lZWRRdW90ZXMpIHtcbiAgICByZXR1cm4gXCJcXFwiXCIuY29uY2F0KHVybC5yZXBsYWNlKC9cIi9nLCAnXFxcXFwiJykucmVwbGFjZSgvXFxuL2csIFwiXFxcXG5cIiksIFwiXFxcIlwiKTtcbiAgfVxuXG4gIHJldHVybiB1cmw7XG59OyIsIlwidXNlIHN0cmljdFwiO1xuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChpdGVtKSB7XG4gIHZhciBjb250ZW50ID0gaXRlbVsxXTtcbiAgdmFyIGNzc01hcHBpbmcgPSBpdGVtWzNdO1xuXG4gIGlmICghY3NzTWFwcGluZykge1xuICAgIHJldHVybiBjb250ZW50O1xuICB9XG5cbiAgaWYgKHR5cGVvZiBidG9hID09PSBcImZ1bmN0aW9uXCIpIHtcbiAgICB2YXIgYmFzZTY0ID0gYnRvYSh1bmVzY2FwZShlbmNvZGVVUklDb21wb25lbnQoSlNPTi5zdHJpbmdpZnkoY3NzTWFwcGluZykpKSk7XG4gICAgdmFyIGRhdGEgPSBcInNvdXJjZU1hcHBpbmdVUkw9ZGF0YTphcHBsaWNhdGlvbi9qc29uO2NoYXJzZXQ9dXRmLTg7YmFzZTY0LFwiLmNvbmNhdChiYXNlNjQpO1xuICAgIHZhciBzb3VyY2VNYXBwaW5nID0gXCIvKiMgXCIuY29uY2F0KGRhdGEsIFwiICovXCIpO1xuICAgIHZhciBzb3VyY2VVUkxzID0gY3NzTWFwcGluZy5zb3VyY2VzLm1hcChmdW5jdGlvbiAoc291cmNlKSB7XG4gICAgICByZXR1cm4gXCIvKiMgc291cmNlVVJMPVwiLmNvbmNhdChjc3NNYXBwaW5nLnNvdXJjZVJvb3QgfHwgXCJcIikuY29uY2F0KHNvdXJjZSwgXCIgKi9cIik7XG4gICAgfSk7XG4gICAgcmV0dXJuIFtjb250ZW50XS5jb25jYXQoc291cmNlVVJMcykuY29uY2F0KFtzb3VyY2VNYXBwaW5nXSkuam9pbihcIlxcblwiKTtcbiAgfVxuXG4gIHJldHVybiBbY29udGVudF0uam9pbihcIlxcblwiKTtcbn07IiwiXG4gICAgICBpbXBvcnQgQVBJIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5qZWN0U3R5bGVzSW50b1N0eWxlVGFnLmpzXCI7XG4gICAgICBpbXBvcnQgZG9tQVBJIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVEb21BUEkuanNcIjtcbiAgICAgIGltcG9ydCBpbnNlcnRGbiBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydEJ5U2VsZWN0b3IuanNcIjtcbiAgICAgIGltcG9ydCBzZXRBdHRyaWJ1dGVzIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzLmpzXCI7XG4gICAgICBpbXBvcnQgaW5zZXJ0U3R5bGVFbGVtZW50IGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0U3R5bGVFbGVtZW50LmpzXCI7XG4gICAgICBpbXBvcnQgc3R5bGVUYWdUcmFuc2Zvcm1GbiBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlVGFnVHJhbnNmb3JtLmpzXCI7XG4gICAgICBpbXBvcnQgY29udGVudCwgKiBhcyBuYW1lZEV4cG9ydCBmcm9tIFwiISEuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuL3N0eWxlLmNzc1wiO1xuICAgICAgXG4gICAgICBcblxudmFyIG9wdGlvbnMgPSB7fTtcblxub3B0aW9ucy5zdHlsZVRhZ1RyYW5zZm9ybSA9IHN0eWxlVGFnVHJhbnNmb3JtRm47XG5vcHRpb25zLnNldEF0dHJpYnV0ZXMgPSBzZXRBdHRyaWJ1dGVzO1xuXG4gICAgICBvcHRpb25zLmluc2VydCA9IGluc2VydEZuLmJpbmQobnVsbCwgXCJoZWFkXCIpO1xuICAgIFxub3B0aW9ucy5kb21BUEkgPSBkb21BUEk7XG5vcHRpb25zLmluc2VydFN0eWxlRWxlbWVudCA9IGluc2VydFN0eWxlRWxlbWVudDtcblxudmFyIHVwZGF0ZSA9IEFQSShjb250ZW50LCBvcHRpb25zKTtcblxuXG5cbmV4cG9ydCAqIGZyb20gXCIhIS4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4vc3R5bGUuY3NzXCI7XG4gICAgICAgZXhwb3J0IGRlZmF1bHQgY29udGVudCAmJiBjb250ZW50LmxvY2FscyA/IGNvbnRlbnQubG9jYWxzIDogdW5kZWZpbmVkO1xuIiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbnZhciBzdHlsZXNJbkRPTSA9IFtdO1xuXG5mdW5jdGlvbiBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKSB7XG4gIHZhciByZXN1bHQgPSAtMTtcblxuICBmb3IgKHZhciBpID0gMDsgaSA8IHN0eWxlc0luRE9NLmxlbmd0aDsgaSsrKSB7XG4gICAgaWYgKHN0eWxlc0luRE9NW2ldLmlkZW50aWZpZXIgPT09IGlkZW50aWZpZXIpIHtcbiAgICAgIHJlc3VsdCA9IGk7XG4gICAgICBicmVhaztcbiAgICB9XG4gIH1cblxuICByZXR1cm4gcmVzdWx0O1xufVxuXG5mdW5jdGlvbiBtb2R1bGVzVG9Eb20obGlzdCwgb3B0aW9ucykge1xuICB2YXIgaWRDb3VudE1hcCA9IHt9O1xuICB2YXIgaWRlbnRpZmllcnMgPSBbXTtcblxuICBmb3IgKHZhciBpID0gMDsgaSA8IGxpc3QubGVuZ3RoOyBpKyspIHtcbiAgICB2YXIgaXRlbSA9IGxpc3RbaV07XG4gICAgdmFyIGlkID0gb3B0aW9ucy5iYXNlID8gaXRlbVswXSArIG9wdGlvbnMuYmFzZSA6IGl0ZW1bMF07XG4gICAgdmFyIGNvdW50ID0gaWRDb3VudE1hcFtpZF0gfHwgMDtcbiAgICB2YXIgaWRlbnRpZmllciA9IFwiXCIuY29uY2F0KGlkLCBcIiBcIikuY29uY2F0KGNvdW50KTtcbiAgICBpZENvdW50TWFwW2lkXSA9IGNvdW50ICsgMTtcbiAgICB2YXIgaW5kZXhCeUlkZW50aWZpZXIgPSBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKTtcbiAgICB2YXIgb2JqID0ge1xuICAgICAgY3NzOiBpdGVtWzFdLFxuICAgICAgbWVkaWE6IGl0ZW1bMl0sXG4gICAgICBzb3VyY2VNYXA6IGl0ZW1bM10sXG4gICAgICBzdXBwb3J0czogaXRlbVs0XSxcbiAgICAgIGxheWVyOiBpdGVtWzVdXG4gICAgfTtcblxuICAgIGlmIChpbmRleEJ5SWRlbnRpZmllciAhPT0gLTEpIHtcbiAgICAgIHN0eWxlc0luRE9NW2luZGV4QnlJZGVudGlmaWVyXS5yZWZlcmVuY2VzKys7XG4gICAgICBzdHlsZXNJbkRPTVtpbmRleEJ5SWRlbnRpZmllcl0udXBkYXRlcihvYmopO1xuICAgIH0gZWxzZSB7XG4gICAgICB2YXIgdXBkYXRlciA9IGFkZEVsZW1lbnRTdHlsZShvYmosIG9wdGlvbnMpO1xuICAgICAgb3B0aW9ucy5ieUluZGV4ID0gaTtcbiAgICAgIHN0eWxlc0luRE9NLnNwbGljZShpLCAwLCB7XG4gICAgICAgIGlkZW50aWZpZXI6IGlkZW50aWZpZXIsXG4gICAgICAgIHVwZGF0ZXI6IHVwZGF0ZXIsXG4gICAgICAgIHJlZmVyZW5jZXM6IDFcbiAgICAgIH0pO1xuICAgIH1cblxuICAgIGlkZW50aWZpZXJzLnB1c2goaWRlbnRpZmllcik7XG4gIH1cblxuICByZXR1cm4gaWRlbnRpZmllcnM7XG59XG5cbmZ1bmN0aW9uIGFkZEVsZW1lbnRTdHlsZShvYmosIG9wdGlvbnMpIHtcbiAgdmFyIGFwaSA9IG9wdGlvbnMuZG9tQVBJKG9wdGlvbnMpO1xuICBhcGkudXBkYXRlKG9iaik7XG5cbiAgdmFyIHVwZGF0ZXIgPSBmdW5jdGlvbiB1cGRhdGVyKG5ld09iaikge1xuICAgIGlmIChuZXdPYmopIHtcbiAgICAgIGlmIChuZXdPYmouY3NzID09PSBvYmouY3NzICYmIG5ld09iai5tZWRpYSA9PT0gb2JqLm1lZGlhICYmIG5ld09iai5zb3VyY2VNYXAgPT09IG9iai5zb3VyY2VNYXAgJiYgbmV3T2JqLnN1cHBvcnRzID09PSBvYmouc3VwcG9ydHMgJiYgbmV3T2JqLmxheWVyID09PSBvYmoubGF5ZXIpIHtcbiAgICAgICAgcmV0dXJuO1xuICAgICAgfVxuXG4gICAgICBhcGkudXBkYXRlKG9iaiA9IG5ld09iaik7XG4gICAgfSBlbHNlIHtcbiAgICAgIGFwaS5yZW1vdmUoKTtcbiAgICB9XG4gIH07XG5cbiAgcmV0dXJuIHVwZGF0ZXI7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGxpc3QsIG9wdGlvbnMpIHtcbiAgb3B0aW9ucyA9IG9wdGlvbnMgfHwge307XG4gIGxpc3QgPSBsaXN0IHx8IFtdO1xuICB2YXIgbGFzdElkZW50aWZpZXJzID0gbW9kdWxlc1RvRG9tKGxpc3QsIG9wdGlvbnMpO1xuICByZXR1cm4gZnVuY3Rpb24gdXBkYXRlKG5ld0xpc3QpIHtcbiAgICBuZXdMaXN0ID0gbmV3TGlzdCB8fCBbXTtcblxuICAgIGZvciAodmFyIGkgPSAwOyBpIDwgbGFzdElkZW50aWZpZXJzLmxlbmd0aDsgaSsrKSB7XG4gICAgICB2YXIgaWRlbnRpZmllciA9IGxhc3RJZGVudGlmaWVyc1tpXTtcbiAgICAgIHZhciBpbmRleCA9IGdldEluZGV4QnlJZGVudGlmaWVyKGlkZW50aWZpZXIpO1xuICAgICAgc3R5bGVzSW5ET01baW5kZXhdLnJlZmVyZW5jZXMtLTtcbiAgICB9XG5cbiAgICB2YXIgbmV3TGFzdElkZW50aWZpZXJzID0gbW9kdWxlc1RvRG9tKG5ld0xpc3QsIG9wdGlvbnMpO1xuXG4gICAgZm9yICh2YXIgX2kgPSAwOyBfaSA8IGxhc3RJZGVudGlmaWVycy5sZW5ndGg7IF9pKyspIHtcbiAgICAgIHZhciBfaWRlbnRpZmllciA9IGxhc3RJZGVudGlmaWVyc1tfaV07XG5cbiAgICAgIHZhciBfaW5kZXggPSBnZXRJbmRleEJ5SWRlbnRpZmllcihfaWRlbnRpZmllcik7XG5cbiAgICAgIGlmIChzdHlsZXNJbkRPTVtfaW5kZXhdLnJlZmVyZW5jZXMgPT09IDApIHtcbiAgICAgICAgc3R5bGVzSW5ET01bX2luZGV4XS51cGRhdGVyKCk7XG5cbiAgICAgICAgc3R5bGVzSW5ET00uc3BsaWNlKF9pbmRleCwgMSk7XG4gICAgICB9XG4gICAgfVxuXG4gICAgbGFzdElkZW50aWZpZXJzID0gbmV3TGFzdElkZW50aWZpZXJzO1xuICB9O1xufTsiLCJcInVzZSBzdHJpY3RcIjtcblxudmFyIG1lbW8gPSB7fTtcbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuXG5mdW5jdGlvbiBnZXRUYXJnZXQodGFyZ2V0KSB7XG4gIGlmICh0eXBlb2YgbWVtb1t0YXJnZXRdID09PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgdmFyIHN0eWxlVGFyZ2V0ID0gZG9jdW1lbnQucXVlcnlTZWxlY3Rvcih0YXJnZXQpOyAvLyBTcGVjaWFsIGNhc2UgdG8gcmV0dXJuIGhlYWQgb2YgaWZyYW1lIGluc3RlYWQgb2YgaWZyYW1lIGl0c2VsZlxuXG4gICAgaWYgKHdpbmRvdy5IVE1MSUZyYW1lRWxlbWVudCAmJiBzdHlsZVRhcmdldCBpbnN0YW5jZW9mIHdpbmRvdy5IVE1MSUZyYW1lRWxlbWVudCkge1xuICAgICAgdHJ5IHtcbiAgICAgICAgLy8gVGhpcyB3aWxsIHRocm93IGFuIGV4Y2VwdGlvbiBpZiBhY2Nlc3MgdG8gaWZyYW1lIGlzIGJsb2NrZWRcbiAgICAgICAgLy8gZHVlIHRvIGNyb3NzLW9yaWdpbiByZXN0cmljdGlvbnNcbiAgICAgICAgc3R5bGVUYXJnZXQgPSBzdHlsZVRhcmdldC5jb250ZW50RG9jdW1lbnQuaGVhZDtcbiAgICAgIH0gY2F0Y2ggKGUpIHtcbiAgICAgICAgLy8gaXN0YW5idWwgaWdub3JlIG5leHRcbiAgICAgICAgc3R5bGVUYXJnZXQgPSBudWxsO1xuICAgICAgfVxuICAgIH1cblxuICAgIG1lbW9bdGFyZ2V0XSA9IHN0eWxlVGFyZ2V0O1xuICB9XG5cbiAgcmV0dXJuIG1lbW9bdGFyZ2V0XTtcbn1cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuXG5cbmZ1bmN0aW9uIGluc2VydEJ5U2VsZWN0b3IoaW5zZXJ0LCBzdHlsZSkge1xuICB2YXIgdGFyZ2V0ID0gZ2V0VGFyZ2V0KGluc2VydCk7XG5cbiAgaWYgKCF0YXJnZXQpIHtcbiAgICB0aHJvdyBuZXcgRXJyb3IoXCJDb3VsZG4ndCBmaW5kIGEgc3R5bGUgdGFyZ2V0LiBUaGlzIHByb2JhYmx5IG1lYW5zIHRoYXQgdGhlIHZhbHVlIGZvciB0aGUgJ2luc2VydCcgcGFyYW1ldGVyIGlzIGludmFsaWQuXCIpO1xuICB9XG5cbiAgdGFyZ2V0LmFwcGVuZENoaWxkKHN0eWxlKTtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBpbnNlcnRCeVNlbGVjdG9yOyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGluc2VydFN0eWxlRWxlbWVudChvcHRpb25zKSB7XG4gIHZhciBlbGVtZW50ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInN0eWxlXCIpO1xuICBvcHRpb25zLnNldEF0dHJpYnV0ZXMoZWxlbWVudCwgb3B0aW9ucy5hdHRyaWJ1dGVzKTtcbiAgb3B0aW9ucy5pbnNlcnQoZWxlbWVudCwgb3B0aW9ucy5vcHRpb25zKTtcbiAgcmV0dXJuIGVsZW1lbnQ7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gaW5zZXJ0U3R5bGVFbGVtZW50OyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIHNldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcyhzdHlsZUVsZW1lbnQpIHtcbiAgdmFyIG5vbmNlID0gdHlwZW9mIF9fd2VicGFja19ub25jZV9fICE9PSBcInVuZGVmaW5lZFwiID8gX193ZWJwYWNrX25vbmNlX18gOiBudWxsO1xuXG4gIGlmIChub25jZSkge1xuICAgIHN0eWxlRWxlbWVudC5zZXRBdHRyaWJ1dGUoXCJub25jZVwiLCBub25jZSk7XG4gIH1cbn1cblxubW9kdWxlLmV4cG9ydHMgPSBzZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXM7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gYXBwbHkoc3R5bGVFbGVtZW50LCBvcHRpb25zLCBvYmopIHtcbiAgdmFyIGNzcyA9IFwiXCI7XG5cbiAgaWYgKG9iai5zdXBwb3J0cykge1xuICAgIGNzcyArPSBcIkBzdXBwb3J0cyAoXCIuY29uY2F0KG9iai5zdXBwb3J0cywgXCIpIHtcIik7XG4gIH1cblxuICBpZiAob2JqLm1lZGlhKSB7XG4gICAgY3NzICs9IFwiQG1lZGlhIFwiLmNvbmNhdChvYmoubWVkaWEsIFwiIHtcIik7XG4gIH1cblxuICB2YXIgbmVlZExheWVyID0gdHlwZW9mIG9iai5sYXllciAhPT0gXCJ1bmRlZmluZWRcIjtcblxuICBpZiAobmVlZExheWVyKSB7XG4gICAgY3NzICs9IFwiQGxheWVyXCIuY29uY2F0KG9iai5sYXllci5sZW5ndGggPiAwID8gXCIgXCIuY29uY2F0KG9iai5sYXllcikgOiBcIlwiLCBcIiB7XCIpO1xuICB9XG5cbiAgY3NzICs9IG9iai5jc3M7XG5cbiAgaWYgKG5lZWRMYXllcikge1xuICAgIGNzcyArPSBcIn1cIjtcbiAgfVxuXG4gIGlmIChvYmoubWVkaWEpIHtcbiAgICBjc3MgKz0gXCJ9XCI7XG4gIH1cblxuICBpZiAob2JqLnN1cHBvcnRzKSB7XG4gICAgY3NzICs9IFwifVwiO1xuICB9XG5cbiAgdmFyIHNvdXJjZU1hcCA9IG9iai5zb3VyY2VNYXA7XG5cbiAgaWYgKHNvdXJjZU1hcCAmJiB0eXBlb2YgYnRvYSAhPT0gXCJ1bmRlZmluZWRcIikge1xuICAgIGNzcyArPSBcIlxcbi8qIyBzb3VyY2VNYXBwaW5nVVJMPWRhdGE6YXBwbGljYXRpb24vanNvbjtiYXNlNjQsXCIuY29uY2F0KGJ0b2EodW5lc2NhcGUoZW5jb2RlVVJJQ29tcG9uZW50KEpTT04uc3RyaW5naWZ5KHNvdXJjZU1hcCkpKSksIFwiICovXCIpO1xuICB9IC8vIEZvciBvbGQgSUVcblxuICAvKiBpc3RhbmJ1bCBpZ25vcmUgaWYgICovXG5cblxuICBvcHRpb25zLnN0eWxlVGFnVHJhbnNmb3JtKGNzcywgc3R5bGVFbGVtZW50LCBvcHRpb25zLm9wdGlvbnMpO1xufVxuXG5mdW5jdGlvbiByZW1vdmVTdHlsZUVsZW1lbnQoc3R5bGVFbGVtZW50KSB7XG4gIC8vIGlzdGFuYnVsIGlnbm9yZSBpZlxuICBpZiAoc3R5bGVFbGVtZW50LnBhcmVudE5vZGUgPT09IG51bGwpIHtcbiAgICByZXR1cm4gZmFsc2U7XG4gIH1cblxuICBzdHlsZUVsZW1lbnQucGFyZW50Tm9kZS5yZW1vdmVDaGlsZChzdHlsZUVsZW1lbnQpO1xufVxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5cblxuZnVuY3Rpb24gZG9tQVBJKG9wdGlvbnMpIHtcbiAgdmFyIHN0eWxlRWxlbWVudCA9IG9wdGlvbnMuaW5zZXJ0U3R5bGVFbGVtZW50KG9wdGlvbnMpO1xuICByZXR1cm4ge1xuICAgIHVwZGF0ZTogZnVuY3Rpb24gdXBkYXRlKG9iaikge1xuICAgICAgYXBwbHkoc3R5bGVFbGVtZW50LCBvcHRpb25zLCBvYmopO1xuICAgIH0sXG4gICAgcmVtb3ZlOiBmdW5jdGlvbiByZW1vdmUoKSB7XG4gICAgICByZW1vdmVTdHlsZUVsZW1lbnQoc3R5bGVFbGVtZW50KTtcbiAgICB9XG4gIH07XG59XG5cbm1vZHVsZS5leHBvcnRzID0gZG9tQVBJOyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIHN0eWxlVGFnVHJhbnNmb3JtKGNzcywgc3R5bGVFbGVtZW50KSB7XG4gIGlmIChzdHlsZUVsZW1lbnQuc3R5bGVTaGVldCkge1xuICAgIHN0eWxlRWxlbWVudC5zdHlsZVNoZWV0LmNzc1RleHQgPSBjc3M7XG4gIH0gZWxzZSB7XG4gICAgd2hpbGUgKHN0eWxlRWxlbWVudC5maXJzdENoaWxkKSB7XG4gICAgICBzdHlsZUVsZW1lbnQucmVtb3ZlQ2hpbGQoc3R5bGVFbGVtZW50LmZpcnN0Q2hpbGQpO1xuICAgIH1cblxuICAgIHN0eWxlRWxlbWVudC5hcHBlbmRDaGlsZChkb2N1bWVudC5jcmVhdGVUZXh0Tm9kZShjc3MpKTtcbiAgfVxufVxuXG5tb2R1bGUuZXhwb3J0cyA9IHN0eWxlVGFnVHJhbnNmb3JtOyIsImltcG9ydCBwcm9maWxlIGZyb20gJy4vaW1hZ2VzL3Byb2ZpbGUuanBnJztcblxuY29uc3QgYWJvdXRNZSA9ICgpID0+IHtcbiAgY29uc3QgYm9hcmQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdtYWluJyk7XG4gIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdib2R5JykuYXBwZW5kQ2hpbGQoYm9hcmQpO1xuICBib2FyZC5zZXRBdHRyaWJ1dGUoJ2lkJywgJ2Fib3V0TWVCb2FyZCcpO1xuXG4gIGNvbnN0IHRpdGxlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaDInKTtcbiAgYm9hcmQuYXBwZW5kQ2hpbGQodGl0bGUpO1xuICB0aXRsZS5pbm5lclRleHQgPSBcIkhlbGxvLCBJJ20gUmVuYXRvIVwiO1xuXG4gIGNvbnN0IGltZyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2ltZycpO1xuICBib2FyZC5hcHBlbmRDaGlsZChpbWcpO1xuICBpbWcuc3JjID0gcHJvZmlsZTtcblxuICBjb25zdCBkZXNjcmlwdGlvbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3AnKTtcbiAgYm9hcmQuYXBwZW5kQ2hpbGQoZGVzY3JpcHRpb24pO1xuICBkZXNjcmlwdGlvbi5pbm5lclRleHQgPSBcIkZhaWx1cmUgaXMgdGhlIGhlYXJ0YmVhdCBvZiBkaXNjb3ZlcnkuIFdlIHN0dW1ibGUgYSBsb3QgdHJ5aW5nIG5ldyB0aGluZ3MuIEFuZCBhdCBvbmUgb2YgdGhvc2UgdHJpZXMsIEkgZGlzY292ZXJlZCBwcm9ncmFtbWluZy4gXFxuIFxcbiBJJ3ZlIHN0YXJ0ZWQgdG8gbGVhcm4gaG93IHRvIHByb2dyYW0ganVzdCBmb3IgZnVuIGFuZCBmZWxsIGluIGxvdmUgd2l0aCBpdC4gU28gbXVjaCwgdGhhdCBJIHdhbnQgdG8gcHVyc3VlIGl0IGZvciB0aGUgcmVzdCBvZiBteSBsaWZlLiBXZWIgZGV2ZWxvcG1lbnQgYWxsb3dzIG1lIHRvIGV4cHJlc3MgbXkgY3JlYXRpdml0eSBtb3JlIHNhdGlzZnlpbmdseSwgY3JlYXRlIHdpdGggYSBjbGVhciBzdHJ1Y3R1cmUsIGFuZCBmb2N1cyBpbiBvbiBkZXRhaWxzIGluIGEgd2F5IEkndmUgbmV2ZXIgYmVlbiBhYmxlIHRvIGRvIGJlZm9yZS4gXFxuIFxcbiBBZnRlciBvdmVyIGEgeWVhciBvZiBzdHVkeSwgSSBhbSByZWFkeSB0byBjb250cmlidXRlIHRvIHRoZSB3b3JsZCBpbiB0aGlzIG5ldyB3YXksIGFuZCBJJ20gbG9va2luZyBmb3J3YXJkIHRvIGJyaW5naW5nIHRoZSBiZXN0IHRyYWl0cyBvZiBhIGNyZWF0aXZlIGRldmVsb3BlciB0byB0aGUgdGFibGUuXCJcbn07XG5cbmV4cG9ydCBkZWZhdWx0IGFib3V0TWU7IiwiY29uc3QgY2xlYXIgPSAoKSA9PiB7XG4gIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNib2R5PjpudGgtY2hpbGQoMyknKS5yZW1vdmUoKTtcbiAgZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI2JvZHk+Om50aC1jaGlsZCgyKScpLnJlbW92ZSgpO1xufTtcblxuZXhwb3J0IGRlZmF1bHQgY2xlYXI7IiwiaW1wb3J0IGFydGljbGVzIGZyb20gJy4vYXJ0aWNsZXMuanNvbic7XG5cbmNvbnN0IGVzc2F5cyA9ICgpID0+IHtcblxuICBjb25zdCBlc3NheUJvYXJkID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnbWFpbicpO1xuICBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnYm9keScpLmFwcGVuZENoaWxkKGVzc2F5Qm9hcmQpO1xuICBlc3NheUJvYXJkLmNsYXNzTGlzdC5hZGQoJ2Vzc2F5Qm9hcmQnKTtcblxuICBmb3IobGV0IGkgPSAwOyBpIDwgYXJ0aWNsZXMubGVuZ3RoOyBpKyspIHtcbiAgICBjb25zdCBlc3NheSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2FydGljbGUnKTtcbiAgICBlc3NheUJvYXJkLmFwcGVuZENoaWxkKGVzc2F5KTtcbiAgICBlc3NheS5jbGFzc0xpc3QuYWRkKCdlc3NheScpO1xuXG4gICAgY29uc3QgdGl0bGUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdoMycpO1xuICAgIHRpdGxlLmlubmVyVGV4dCA9IGFydGljbGVzW2ldLnRpdGxlO1xuICAgIGVzc2F5LmFwcGVuZENoaWxkKHRpdGxlKTtcblxuICAgIGNvbnN0IGRhdGUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdoNicpO1xuICAgIGRhdGUuaW5uZXJUZXh0ID0gYXJ0aWNsZXNbaV0uZGF0ZTtcbiAgICBlc3NheS5hcHBlbmRDaGlsZChkYXRlKTtcblxuICAgIGNvbnN0IGNvbnRlbnQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdwJyk7XG4gICAgY29udGVudC5pbm5lclRleHQgPSBhcnRpY2xlc1tpXS5jb250ZW50O1xuICAgIGVzc2F5LmFwcGVuZENoaWxkKGNvbnRlbnQpO1xuICB9O1xufVxuXG5leHBvcnQgZGVmYXVsdCBlc3NheXM7IiwiY29uc3QgZm9vdGVyID0gKCkgPT4ge1xuICBjb25zdCBmb290ZXJUYWIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdmb290ZXInKTtcbiAgZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2JvZHknKS5hcHBlbmRDaGlsZChmb290ZXJUYWIpO1xuICBmb290ZXJUYWIuaW5uZXJUZXh0ID0gJ0Rlc2lnbmVkIGJ5IFJlbmF0byBEaW5peiBpbiBDdXJpdGliYSc7XG59XG5cbmV4cG9ydCBkZWZhdWx0IGZvb3RlcjsiLCJjb25zdCBoZWFkZXIgPSAoKSA9PiB7XG4gIGNvbnN0IGhlYWRlciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2hlYWRlcicpO1xuICBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnYm9keScpLmFwcGVuZENoaWxkKGhlYWRlcik7XG5cbiAgY29uc3QgaG9tZUJ0biA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2J1dHRvbicpO1xuICBob21lQnRuLmlubmVyVGV4dCA9ICdSZW5hdG8gRGluaXonO1xuICBob21lQnRuLnNldEF0dHJpYnV0ZSgnaWQnLCdsb2dvJyk7XG4gIGNvbnN0IHByb2plY3RzQnRuID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnYnV0dG9uJyk7XG4gIHByb2plY3RzQnRuLmlubmVySFRNTCA9ICdQcm9qZWN0cyc7XG4gIHByb2plY3RzQnRuLnNldEF0dHJpYnV0ZSgnaWQnLCdwcm9qZWN0c0J1dHRvbicpO1xuICBjb25zdCBlc3NheXNCdG4gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdidXR0b24nKTtcbiAgZXNzYXlzQnRuLmlubmVyVGV4dCA9ICdFc3NheXMnO1xuICBlc3NheXNCdG4uc2V0QXR0cmlidXRlKCdpZCcsICdlc3NheXNCdXR0b24nKTtcbiAgY29uc3QgYWJvdXRNZUJ0biA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2J1dHRvbicpO1xuICBhYm91dE1lQnRuLmlubmVyVGV4dCA9ICdBYm91dCBNZSc7XG4gIGFib3V0TWVCdG4uc2V0QXR0cmlidXRlKCdpZCcsICdhYm91dE1lQnV0dG9uJyk7XG5cbiAgaGVhZGVyLmFwcGVuZENoaWxkKGhvbWVCdG4pO1xuICBoZWFkZXIuYXBwZW5kQ2hpbGQocHJvamVjdHNCdG4pO1xuICBoZWFkZXIuYXBwZW5kQ2hpbGQoZXNzYXlzQnRuKTtcbiAgaGVhZGVyLmFwcGVuZENoaWxkKGFib3V0TWVCdG4pO1xufTtcblxuZXhwb3J0IGRlZmF1bHQgaGVhZGVyO1xuIiwiaW1wb3J0IGV0Y2hfYV9za2V0Y2ggZnJvbSAnLi9pbWFnZXMvZXRjaC1hLXNrZXRjaC5wbmcnO1xuaW1wb3J0IGNhbGN1bGF0b3IgZnJvbSAnLi9pbWFnZXMvY2FsY3VsYXRvci5wbmcnO1xuaW1wb3J0IHByb2Zlc3Npb25hbF9kYXNoYm9hcmQgZnJvbSAnLi9pbWFnZXMvcHJvZmVzc2lvbmFsLWRhc2hib2FyZC5wbmcnO1xuaW1wb3J0IHJlZF9idWxsX2xhbmRpbmdfcGFnZSBmcm9tICcuL2ltYWdlcy9yZWQtYnVsbC1sYW5kaW5nLXBhZ2UucG5nJztcbmltcG9ydCBmcmVlbGFuY2luZ19odWIgZnJvbSAnLi9pbWFnZXMvZnJlZWxhbmNpbmctaHViLnBuZyc7XG5pbXBvcnQgYW00em9uIGZyb20gJy4vaW1hZ2VzL2FtNHpvbi5wbmcnO1xuXG5jb25zdCBwcm9qZWN0cyA9ICgpID0+IHtcblxuICBjb25zdCBwcm9qZWN0SW1hZ2VzID0gW2V0Y2hfYV9za2V0Y2gsIGNhbGN1bGF0b3IsIHByb2Zlc3Npb25hbF9kYXNoYm9hcmQsXG4gICAgICAgICAgICAgICAgICAgICAgICAgcmVkX2J1bGxfbGFuZGluZ19wYWdlLCBmcmVlbGFuY2luZ19odWIsIGFtNHpvbl07XG4gIGNvbnN0IHByb2plY3RUaXRsZXMgPSBbJ0V0Y2ggQSBTa2V0Y2gnLCAnQ2FsY3VsYXRlIE1lIScsICdQcm9mZXNzaW9uYWwgRGFzaGJvYXJkJyxcbiAgICAgICAgICAgICAgICAgICAgICAgICdSZWRCdWxswq4gbGFuZGluZyBwYWdlJywgJ0ZyZWVsYW5jaW5nIEh1YicsICdBbTR6b24nXTtcbiAgY29uc3QgcHJvamVjdERlc2NyaXB0aW9ucyA9IFtcbiAgICAnT25saW5lIEV0Y2ggQSBTa2V0Y2ggZ2FtZSBzaW11bGF0aW9uJyxcbiAgICAnQ29tcGxldGUgZnVuY3Rpb25hbCBvbmxpbmUgY2FsY3VsYXRvcicsXG4gICAgJ1Byb2Zlc3Npb25hbCBhZG1pbiBwcm9qZWN0IGRhc2hib2FyZCcsXG4gICAgJ1NpbXVsYXRpb24gb2YgYSBSZWRCdWxswq4gbGFuZGluZyBwYWdlIGZvciBuZXcgcHJvZHVjdHMnLFxuICAgICdGcmVlbGFuY2luZ0hVQiBpcyBhIGZyZWUgQjJCIGRpZ2l0YWwgcGxhdGZvcm0sIHdoaWNoIGFpbXMgdG8gcHJvbW90ZSBhbiBlbnZpcm9ubWVudCBvZiBidXNpbmVzcyBjb25uZWN0aW9ucyB3aXRoIGEgc29jaWFsIHB1cnBvc2UgYmV0d2VlbiBvcmdhbml6YXRpb25zIG9mIGRpZmZlcmVudCBhY3Rpdml0aWVzIGFuZCBmcmVlbGFuY2VycyBmcm9tIGFsbCBvdmVyIHRoZSBjb3VudHJ5LicsXG4gICAgJ1RoZSBBbTR6b24gcHJvamVjdCBpcyBpbiBlc3NlbmNlIGEgY2xvbmUgd2Vic2l0ZSBmcm9tIHRoZSBvcmlnaW5hbCBBbWF6b27Cri4gSW4gdGhlIEFtNHpvbiBwbGF0Zm9ybSwgdXNlcnMgY2FuIGVhc2lseSBhY2Nlc3MgYWxsIGJvb2tzIGJ5IGdlbnJlIGFuZCBhdXRob3IsIHNlYXJjaCB0aHJvdWdoIG91ciBlbnRpcmUgZGF0YWJhc2UgdmlhIHRoZSBtZW51IHNlYXJjaCBib3ggYW5kIGFjY2VzcyBib29rIGNvbGxlY3Rpb25zIHRhaWxvcmVkIGJ5IG91ciBzcGVjaWFsaXN0cy4nXG4gIF07XG5cbiAgY29uc3QgcHJvamVjdEJvYXJkID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnbWFpbicpO1xuICBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnYm9keScpLmFwcGVuZENoaWxkKHByb2plY3RCb2FyZCk7XG4gIHByb2plY3RCb2FyZC5jbGFzc0xpc3QuYWRkKCdwcm9qZWN0Qm9hcmQnKTtcbiAgXG5cbiAgZm9yKGxldCBpID0gMDsgaSA8IHByb2plY3RUaXRsZXMubGVuZ3RoOyBpKyspIHtcbiAgICBsZXQgcHJvamVjdCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgIHByb2plY3QuY2xhc3NMaXN0LmFkZCgncHJvamVjdCcpO1xuICAgIGxldCBpbWcgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdpbWcnKTtcbiAgICBpbWcuc3JjID0gcHJvamVjdEltYWdlc1tpXTtcbiAgICBwcm9qZWN0LmFwcGVuZENoaWxkKGltZyk7XG5cbiAgICBsZXQgdGl0bGUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdoMycpO1xuICAgIHRpdGxlLmlubmVyVGV4dCA9IHByb2plY3RUaXRsZXNbaV07XG4gICAgcHJvamVjdC5hcHBlbmRDaGlsZCh0aXRsZSk7XG5cbiAgICBsZXQgZGVzY3JpcHRpb24gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdwJyk7XG4gICAgZGVzY3JpcHRpb24uaW5uZXJUZXh0ID0gKHByb2plY3REZXNjcmlwdGlvbnNbaV0pO1xuICAgIHByb2plY3QuYXBwZW5kQ2hpbGQoZGVzY3JpcHRpb24pO1xuXG4gICAgcHJvamVjdEJvYXJkLmFwcGVuZENoaWxkKHByb2plY3QpO1xuICB9O1xufTtcblxuZXhwb3J0IGRlZmF1bHQgcHJvamVjdHM7XG4iLCIvLyBUaGUgbW9kdWxlIGNhY2hlXG52YXIgX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fID0ge307XG5cbi8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG5mdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuXHR2YXIgY2FjaGVkTW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXTtcblx0aWYgKGNhY2hlZE1vZHVsZSAhPT0gdW5kZWZpbmVkKSB7XG5cdFx0cmV0dXJuIGNhY2hlZE1vZHVsZS5leHBvcnRzO1xuXHR9XG5cdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG5cdHZhciBtb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdID0ge1xuXHRcdGlkOiBtb2R1bGVJZCxcblx0XHQvLyBubyBtb2R1bGUubG9hZGVkIG5lZWRlZFxuXHRcdGV4cG9ydHM6IHt9XG5cdH07XG5cblx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG5cdF9fd2VicGFja19tb2R1bGVzX19bbW9kdWxlSWRdKG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG5cdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG5cdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbn1cblxuLy8gZXhwb3NlIHRoZSBtb2R1bGVzIG9iamVjdCAoX193ZWJwYWNrX21vZHVsZXNfXylcbl9fd2VicGFja19yZXF1aXJlX18ubSA9IF9fd2VicGFja19tb2R1bGVzX187XG5cbiIsIi8vIGdldERlZmF1bHRFeHBvcnQgZnVuY3Rpb24gZm9yIGNvbXBhdGliaWxpdHkgd2l0aCBub24taGFybW9ueSBtb2R1bGVzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLm4gPSAobW9kdWxlKSA9PiB7XG5cdHZhciBnZXR0ZXIgPSBtb2R1bGUgJiYgbW9kdWxlLl9fZXNNb2R1bGUgP1xuXHRcdCgpID0+IChtb2R1bGVbJ2RlZmF1bHQnXSkgOlxuXHRcdCgpID0+IChtb2R1bGUpO1xuXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQoZ2V0dGVyLCB7IGE6IGdldHRlciB9KTtcblx0cmV0dXJuIGdldHRlcjtcbn07IiwiLy8gZGVmaW5lIGdldHRlciBmdW5jdGlvbnMgZm9yIGhhcm1vbnkgZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5kID0gKGV4cG9ydHMsIGRlZmluaXRpb24pID0+IHtcblx0Zm9yKHZhciBrZXkgaW4gZGVmaW5pdGlvbikge1xuXHRcdGlmKF9fd2VicGFja19yZXF1aXJlX18ubyhkZWZpbml0aW9uLCBrZXkpICYmICFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywga2V5KSkge1xuXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIGtleSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGRlZmluaXRpb25ba2V5XSB9KTtcblx0XHR9XG5cdH1cbn07IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5nID0gKGZ1bmN0aW9uKCkge1xuXHRpZiAodHlwZW9mIGdsb2JhbFRoaXMgPT09ICdvYmplY3QnKSByZXR1cm4gZ2xvYmFsVGhpcztcblx0dHJ5IHtcblx0XHRyZXR1cm4gdGhpcyB8fCBuZXcgRnVuY3Rpb24oJ3JldHVybiB0aGlzJykoKTtcblx0fSBjYXRjaCAoZSkge1xuXHRcdGlmICh0eXBlb2Ygd2luZG93ID09PSAnb2JqZWN0JykgcmV0dXJuIHdpbmRvdztcblx0fVxufSkoKTsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSAob2JqLCBwcm9wKSA9PiAoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iaiwgcHJvcCkpIiwiLy8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5yID0gKGV4cG9ydHMpID0+IHtcblx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG5cdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG5cdH1cblx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbn07IiwidmFyIHNjcmlwdFVybDtcbmlmIChfX3dlYnBhY2tfcmVxdWlyZV9fLmcuaW1wb3J0U2NyaXB0cykgc2NyaXB0VXJsID0gX193ZWJwYWNrX3JlcXVpcmVfXy5nLmxvY2F0aW9uICsgXCJcIjtcbnZhciBkb2N1bWVudCA9IF9fd2VicGFja19yZXF1aXJlX18uZy5kb2N1bWVudDtcbmlmICghc2NyaXB0VXJsICYmIGRvY3VtZW50KSB7XG5cdGlmIChkb2N1bWVudC5jdXJyZW50U2NyaXB0KVxuXHRcdHNjcmlwdFVybCA9IGRvY3VtZW50LmN1cnJlbnRTY3JpcHQuc3JjXG5cdGlmICghc2NyaXB0VXJsKSB7XG5cdFx0dmFyIHNjcmlwdHMgPSBkb2N1bWVudC5nZXRFbGVtZW50c0J5VGFnTmFtZShcInNjcmlwdFwiKTtcblx0XHRpZihzY3JpcHRzLmxlbmd0aCkgc2NyaXB0VXJsID0gc2NyaXB0c1tzY3JpcHRzLmxlbmd0aCAtIDFdLnNyY1xuXHR9XG59XG4vLyBXaGVuIHN1cHBvcnRpbmcgYnJvd3NlcnMgd2hlcmUgYW4gYXV0b21hdGljIHB1YmxpY1BhdGggaXMgbm90IHN1cHBvcnRlZCB5b3UgbXVzdCBzcGVjaWZ5IGFuIG91dHB1dC5wdWJsaWNQYXRoIG1hbnVhbGx5IHZpYSBjb25maWd1cmF0aW9uXG4vLyBvciBwYXNzIGFuIGVtcHR5IHN0cmluZyAoXCJcIikgYW5kIHNldCB0aGUgX193ZWJwYWNrX3B1YmxpY19wYXRoX18gdmFyaWFibGUgZnJvbSB5b3VyIGNvZGUgdG8gdXNlIHlvdXIgb3duIGxvZ2ljLlxuaWYgKCFzY3JpcHRVcmwpIHRocm93IG5ldyBFcnJvcihcIkF1dG9tYXRpYyBwdWJsaWNQYXRoIGlzIG5vdCBzdXBwb3J0ZWQgaW4gdGhpcyBicm93c2VyXCIpO1xuc2NyaXB0VXJsID0gc2NyaXB0VXJsLnJlcGxhY2UoLyMuKiQvLCBcIlwiKS5yZXBsYWNlKC9cXD8uKiQvLCBcIlwiKS5yZXBsYWNlKC9cXC9bXlxcL10rJC8sIFwiL1wiKTtcbl9fd2VicGFja19yZXF1aXJlX18ucCA9IHNjcmlwdFVybDsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLmIgPSBkb2N1bWVudC5iYXNlVVJJIHx8IHNlbGYubG9jYXRpb24uaHJlZjtcblxuLy8gb2JqZWN0IHRvIHN0b3JlIGxvYWRlZCBhbmQgbG9hZGluZyBjaHVua3Ncbi8vIHVuZGVmaW5lZCA9IGNodW5rIG5vdCBsb2FkZWQsIG51bGwgPSBjaHVuayBwcmVsb2FkZWQvcHJlZmV0Y2hlZFxuLy8gW3Jlc29sdmUsIHJlamVjdCwgUHJvbWlzZV0gPSBjaHVuayBsb2FkaW5nLCAwID0gY2h1bmsgbG9hZGVkXG52YXIgaW5zdGFsbGVkQ2h1bmtzID0ge1xuXHRcIm1haW5cIjogMFxufTtcblxuLy8gbm8gY2h1bmsgb24gZGVtYW5kIGxvYWRpbmdcblxuLy8gbm8gcHJlZmV0Y2hpbmdcblxuLy8gbm8gcHJlbG9hZGVkXG5cbi8vIG5vIEhNUlxuXG4vLyBubyBITVIgbWFuaWZlc3RcblxuLy8gbm8gb24gY2h1bmtzIGxvYWRlZFxuXG4vLyBubyBqc29ucCBmdW5jdGlvbiIsImltcG9ydCAnLi9zdHlsZS5jc3MnO1xuaW1wb3J0IGhlYWRlciBmcm9tICcuL2hlYWRlcic7XG5pbXBvcnQgcHJvamVjdHMgZnJvbSAnLi9wcm9qZWN0cyc7XG5pbXBvcnQgY2xlYXIgZnJvbSAnLi9jbGVhcic7XG5pbXBvcnQgZXNzYXlzIGZyb20gJy4vZXNzYXlzLmpzJztcbmltcG9ydCBmb290ZXIgZnJvbSAnLi9mb290ZXIuanMnO1xuaW1wb3J0IGFib3V0TWUgZnJvbSAnLi9hYm91dG1lJztcblxuaGVhZGVyKCk7XG5wcm9qZWN0cygpO1xuZm9vdGVyKCk7XG5cbmRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdwcm9qZWN0c0J1dHRvbicpLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgcHJvamVjdHNQYWdlKTtcbmRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdlc3NheXNCdXR0b24nKS5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIGVzc2F5c1BhZ2UpO1xuZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2Fib3V0TWVCdXR0b24nKS5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIGFib3V0TWVQYWdlKTtcblxuZnVuY3Rpb24gcHJvamVjdHNQYWdlKCkge1xuICBjbGVhcigpO1xuICBwcm9qZWN0cygpO1xuICBmb290ZXIoKTtcbn07XG5cbmZ1bmN0aW9uIGVzc2F5c1BhZ2UoKSB7XG4gIGNsZWFyKCk7XG4gIGVzc2F5cygpO1xuICBmb290ZXIoKTtcbn07XG5cbmZ1bmN0aW9uIGFib3V0TWVQYWdlKCkge1xuICBjbGVhcigpO1xuICBhYm91dE1lKCk7XG4gIGZvb3RlcigpO1xufTtcblxuIl0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9