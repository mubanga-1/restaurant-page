/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./node_modules/css-loader/dist/cjs.js!./src/styles.css":
/*!**************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./src/styles.css ***!
  \**************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/noSourceMaps.js */ \"./node_modules/css-loader/dist/runtime/noSourceMaps.js\");\n/* harmony import */ var _node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/api.js */ \"./node_modules/css-loader/dist/runtime/api.js\");\n/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/getUrl.js */ \"./node_modules/css-loader/dist/runtime/getUrl.js\");\n/* harmony import */ var _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2__);\n// Imports\n\n\n\nvar ___CSS_LOADER_URL_IMPORT_0___ = new URL(/* asset import */ __webpack_require__(/*! fonts/Open Sans/static/OpenSans-Regular.ttf */ \"./src/fonts/Open Sans/static/OpenSans-Regular.ttf\"), __webpack_require__.b);\nvar ___CSS_LOADER_URL_IMPORT_1___ = new URL(/* asset import */ __webpack_require__(/*! ./coffee.png */ \"./src/coffee.png\"), __webpack_require__.b);\nvar ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));\nvar ___CSS_LOADER_URL_REPLACEMENT_0___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(___CSS_LOADER_URL_IMPORT_0___);\nvar ___CSS_LOADER_URL_REPLACEMENT_1___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(___CSS_LOADER_URL_IMPORT_1___);\n// Module\n___CSS_LOADER_EXPORT___.push([module.id, `@font-face {\r\n    font-family: \"Open Sans\";\r\n    src: url(${___CSS_LOADER_URL_REPLACEMENT_0___});\r\n    font-weight: normal;\r\n    font-display: swap;\r\n}\r\n\r\n* {\r\n    box-sizing: border-box;\r\n    margin: 0;\r\n    padding: 0;\r\n}\r\n\r\nbody {\r\n    background-color: grey;\r\n    background-image:linear-gradient(rgba(4, 9, 30, .7), rgba(4, 9, 30, .7)), url(${___CSS_LOADER_URL_REPLACEMENT_1___});\r\n    background-size: cover;\r\n    font-family: \"Open Sans\";\r\n}\r\n\r\nnav, .links, #menu-content {\r\n    display: flex;\r\n    align-items: center;\r\n}\r\n\r\n/* header section */\r\nheader {\r\n    padding: 1.4rem;\r\n}\r\n\r\nnav {\r\n    justify-content: space-between;\r\n}\r\n\r\n.links {\r\n    gap: .8rem;\r\n}\r\n\r\n.logo div {\r\n    font-size: 3rem;\r\n    font-family: \"Dancing Script\", sans-serif;\r\n    color: #fff;\r\n    transition: 1s ease;\r\n}\r\n\r\nnav button {\r\n    width: 4.6rem;\r\n    height: 1.5rem;\r\n    text-transform: capitalize;\r\n    font-size: 1.2rem;  \r\n    background-color: transparent;\r\n    border: none;\r\n    border-radius: .8rem;\r\n    border-bottom: 3px solid transparent;   \r\n    color: #fff;   \r\n    transition: .5s ease;\r\n}\r\n\r\nnav button:hover {\r\n    border-bottom: 3px solid #A67B5B;      \r\n}\r\n\r\n.logo div:hover, nav button:hover {\r\n    color: #A67B5B;\r\n    cursor: pointer;\r\n}\r\n\r\n/* Main content section */\r\n#content > div {\r\n    padding-left: 1.5rem;\r\n    padding-right: 1.5rem;\r\n    margin-top: 1.5rem;\r\n    color: #f1f2f3;\r\n}\r\n\r\n/* Home tab styles */\r\n\r\n.ad  #ad-heading {\r\n    font-size: 1.7rem;\r\n}\r\n\r\n.ad p, #days li {\r\n    font-size: 1.125rem;\r\n}\r\n\r\n#ad-heading, .ad p {\r\n    padding-left: 1rem;\r\n}\r\n\r\n.side {\r\n    grid-column: 2 / 3;\r\n    padding-right: 1rem;\r\n}\r\n\r\n.info-heading {\r\n    font-size: 1.7rem;\r\n}\r\n\r\n.sub-heading {\r\n    font-size: 1.3rem;\r\n    padding-bottom: 1.5rem;\r\n}\r\n\r\n#days {\r\n    list-style-type: none;\r\n}\r\n\r\n#days li {\r\n    padding-bottom: .5rem;\r\n}\r\n\r\n#days, #location-content  {\r\n    margin-left: 3rem;\r\n}\r\n\r\n.ad p {\r\n    margin-left: 2rem;\r\n}\r\n\r\n#slogan {\r\n    font-size: 1.5rem;\r\n    margin-top: 2rem;\r\n}\r\n\r\n/* Menu tab styles */\r\n\r\n#menu-content {\r\n    flex-direction: column;\r\n    gap: 2rem;\r\n    padding: 1.2rem;\r\n    width: 40%;\r\n}\r\n\r\n#menu-header {\r\n    margin-top: 3rem;\r\n    font-size: 2.4rem;\r\n}\r\n\r\n#menu-list {\r\n    list-style-type: none;\r\n}\r\n\r\n.menu-item {\r\n    font-size: 1.5rem;\r\n    margin-bottom: .8rem;\r\n}\r\n\r\n.scroll {\r\n    align-self: center;\r\n    font-size: 2rem;\r\n    border: 1px solid #8c8c8c;\r\n    transition: .8s ease;\r\n}\r\n\r\n.scroll:hover {\r\n    cursor: pointer;\r\n    background-color: #A67B5B;\r\n}\r\n\r\n#indicators {\r\n    width: 100%;\r\n    display: flex;\r\n    gap: 1rem;\r\n    justify-content: center;\r\n    align-items: center;\r\n}\r\n\r\n.indicator {\r\n    background-color: #fff;\r\n    width: .5rem;\r\n    height: .5rem;\r\n    border-radius: 6.25rem;\r\n}\r\n\r\n\r\n/* Contact tab styles */\r\n#info {\r\n    display: flex;\r\n    flex-direction: column;\r\n    gap: 2.5rem;\r\n    font-size: 1.5rem;\r\n}\r\n\r\n#info > div {\r\n    text-align: center;\r\n}`, \"\"]);\n// Exports\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);\n\n\n//# sourceURL=webpack:///./src/styles.css?./node_modules/css-loader/dist/cjs.js");

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/api.js":
/*!*****************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/api.js ***!
  \*****************************************************/
/***/ ((module) => {

eval("\n\n/*\n  MIT License http://www.opensource.org/licenses/mit-license.php\n  Author Tobias Koppers @sokra\n*/\nmodule.exports = function (cssWithMappingToString) {\n  var list = [];\n\n  // return the list of modules as css string\n  list.toString = function toString() {\n    return this.map(function (item) {\n      var content = \"\";\n      var needLayer = typeof item[5] !== \"undefined\";\n      if (item[4]) {\n        content += \"@supports (\".concat(item[4], \") {\");\n      }\n      if (item[2]) {\n        content += \"@media \".concat(item[2], \" {\");\n      }\n      if (needLayer) {\n        content += \"@layer\".concat(item[5].length > 0 ? \" \".concat(item[5]) : \"\", \" {\");\n      }\n      content += cssWithMappingToString(item);\n      if (needLayer) {\n        content += \"}\";\n      }\n      if (item[2]) {\n        content += \"}\";\n      }\n      if (item[4]) {\n        content += \"}\";\n      }\n      return content;\n    }).join(\"\");\n  };\n\n  // import a list of modules into the list\n  list.i = function i(modules, media, dedupe, supports, layer) {\n    if (typeof modules === \"string\") {\n      modules = [[null, modules, undefined]];\n    }\n    var alreadyImportedModules = {};\n    if (dedupe) {\n      for (var k = 0; k < this.length; k++) {\n        var id = this[k][0];\n        if (id != null) {\n          alreadyImportedModules[id] = true;\n        }\n      }\n    }\n    for (var _k = 0; _k < modules.length; _k++) {\n      var item = [].concat(modules[_k]);\n      if (dedupe && alreadyImportedModules[item[0]]) {\n        continue;\n      }\n      if (typeof layer !== \"undefined\") {\n        if (typeof item[5] === \"undefined\") {\n          item[5] = layer;\n        } else {\n          item[1] = \"@layer\".concat(item[5].length > 0 ? \" \".concat(item[5]) : \"\", \" {\").concat(item[1], \"}\");\n          item[5] = layer;\n        }\n      }\n      if (media) {\n        if (!item[2]) {\n          item[2] = media;\n        } else {\n          item[1] = \"@media \".concat(item[2], \" {\").concat(item[1], \"}\");\n          item[2] = media;\n        }\n      }\n      if (supports) {\n        if (!item[4]) {\n          item[4] = \"\".concat(supports);\n        } else {\n          item[1] = \"@supports (\".concat(item[4], \") {\").concat(item[1], \"}\");\n          item[4] = supports;\n        }\n      }\n      list.push(item);\n    }\n  };\n  return list;\n};\n\n//# sourceURL=webpack:///./node_modules/css-loader/dist/runtime/api.js?");

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/getUrl.js":
/*!********************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/getUrl.js ***!
  \********************************************************/
/***/ ((module) => {

eval("\n\nmodule.exports = function (url, options) {\n  if (!options) {\n    options = {};\n  }\n  if (!url) {\n    return url;\n  }\n  url = String(url.__esModule ? url.default : url);\n\n  // If url is already wrapped in quotes, remove them\n  if (/^['\"].*['\"]$/.test(url)) {\n    url = url.slice(1, -1);\n  }\n  if (options.hash) {\n    url += options.hash;\n  }\n\n  // Should url be wrapped?\n  // See https://drafts.csswg.org/css-values-3/#urls\n  if (/[\"'() \\t\\n]|(%20)/.test(url) || options.needQuotes) {\n    return \"\\\"\".concat(url.replace(/\"/g, '\\\\\"').replace(/\\n/g, \"\\\\n\"), \"\\\"\");\n  }\n  return url;\n};\n\n//# sourceURL=webpack:///./node_modules/css-loader/dist/runtime/getUrl.js?");

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/noSourceMaps.js":
/*!**************************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/noSourceMaps.js ***!
  \**************************************************************/
/***/ ((module) => {

eval("\n\nmodule.exports = function (i) {\n  return i[1];\n};\n\n//# sourceURL=webpack:///./node_modules/css-loader/dist/runtime/noSourceMaps.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js":
/*!****************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js ***!
  \****************************************************************************/
/***/ ((module) => {

eval("\n\nvar stylesInDOM = [];\nfunction getIndexByIdentifier(identifier) {\n  var result = -1;\n  for (var i = 0; i < stylesInDOM.length; i++) {\n    if (stylesInDOM[i].identifier === identifier) {\n      result = i;\n      break;\n    }\n  }\n  return result;\n}\nfunction modulesToDom(list, options) {\n  var idCountMap = {};\n  var identifiers = [];\n  for (var i = 0; i < list.length; i++) {\n    var item = list[i];\n    var id = options.base ? item[0] + options.base : item[0];\n    var count = idCountMap[id] || 0;\n    var identifier = \"\".concat(id, \" \").concat(count);\n    idCountMap[id] = count + 1;\n    var indexByIdentifier = getIndexByIdentifier(identifier);\n    var obj = {\n      css: item[1],\n      media: item[2],\n      sourceMap: item[3],\n      supports: item[4],\n      layer: item[5]\n    };\n    if (indexByIdentifier !== -1) {\n      stylesInDOM[indexByIdentifier].references++;\n      stylesInDOM[indexByIdentifier].updater(obj);\n    } else {\n      var updater = addElementStyle(obj, options);\n      options.byIndex = i;\n      stylesInDOM.splice(i, 0, {\n        identifier: identifier,\n        updater: updater,\n        references: 1\n      });\n    }\n    identifiers.push(identifier);\n  }\n  return identifiers;\n}\nfunction addElementStyle(obj, options) {\n  var api = options.domAPI(options);\n  api.update(obj);\n  var updater = function updater(newObj) {\n    if (newObj) {\n      if (newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap && newObj.supports === obj.supports && newObj.layer === obj.layer) {\n        return;\n      }\n      api.update(obj = newObj);\n    } else {\n      api.remove();\n    }\n  };\n  return updater;\n}\nmodule.exports = function (list, options) {\n  options = options || {};\n  list = list || [];\n  var lastIdentifiers = modulesToDom(list, options);\n  return function update(newList) {\n    newList = newList || [];\n    for (var i = 0; i < lastIdentifiers.length; i++) {\n      var identifier = lastIdentifiers[i];\n      var index = getIndexByIdentifier(identifier);\n      stylesInDOM[index].references--;\n    }\n    var newLastIdentifiers = modulesToDom(newList, options);\n    for (var _i = 0; _i < lastIdentifiers.length; _i++) {\n      var _identifier = lastIdentifiers[_i];\n      var _index = getIndexByIdentifier(_identifier);\n      if (stylesInDOM[_index].references === 0) {\n        stylesInDOM[_index].updater();\n        stylesInDOM.splice(_index, 1);\n      }\n    }\n    lastIdentifiers = newLastIdentifiers;\n  };\n};\n\n//# sourceURL=webpack:///./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertBySelector.js":
/*!********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertBySelector.js ***!
  \********************************************************************/
/***/ ((module) => {

eval("\n\nvar memo = {};\n\n/* istanbul ignore next  */\nfunction getTarget(target) {\n  if (typeof memo[target] === \"undefined\") {\n    var styleTarget = document.querySelector(target);\n\n    // Special case to return head of iframe instead of iframe itself\n    if (window.HTMLIFrameElement && styleTarget instanceof window.HTMLIFrameElement) {\n      try {\n        // This will throw an exception if access to iframe is blocked\n        // due to cross-origin restrictions\n        styleTarget = styleTarget.contentDocument.head;\n      } catch (e) {\n        // istanbul ignore next\n        styleTarget = null;\n      }\n    }\n    memo[target] = styleTarget;\n  }\n  return memo[target];\n}\n\n/* istanbul ignore next  */\nfunction insertBySelector(insert, style) {\n  var target = getTarget(insert);\n  if (!target) {\n    throw new Error(\"Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.\");\n  }\n  target.appendChild(style);\n}\nmodule.exports = insertBySelector;\n\n//# sourceURL=webpack:///./node_modules/style-loader/dist/runtime/insertBySelector.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertStyleElement.js":
/*!**********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertStyleElement.js ***!
  \**********************************************************************/
/***/ ((module) => {

eval("\n\n/* istanbul ignore next  */\nfunction insertStyleElement(options) {\n  var element = document.createElement(\"style\");\n  options.setAttributes(element, options.attributes);\n  options.insert(element, options.options);\n  return element;\n}\nmodule.exports = insertStyleElement;\n\n//# sourceURL=webpack:///./node_modules/style-loader/dist/runtime/insertStyleElement.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js":
/*!**********************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js ***!
  \**********************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("\n\n/* istanbul ignore next  */\nfunction setAttributesWithoutAttributes(styleElement) {\n  var nonce =  true ? __webpack_require__.nc : 0;\n  if (nonce) {\n    styleElement.setAttribute(\"nonce\", nonce);\n  }\n}\nmodule.exports = setAttributesWithoutAttributes;\n\n//# sourceURL=webpack:///./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleDomAPI.js":
/*!***************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleDomAPI.js ***!
  \***************************************************************/
/***/ ((module) => {

eval("\n\n/* istanbul ignore next  */\nfunction apply(styleElement, options, obj) {\n  var css = \"\";\n  if (obj.supports) {\n    css += \"@supports (\".concat(obj.supports, \") {\");\n  }\n  if (obj.media) {\n    css += \"@media \".concat(obj.media, \" {\");\n  }\n  var needLayer = typeof obj.layer !== \"undefined\";\n  if (needLayer) {\n    css += \"@layer\".concat(obj.layer.length > 0 ? \" \".concat(obj.layer) : \"\", \" {\");\n  }\n  css += obj.css;\n  if (needLayer) {\n    css += \"}\";\n  }\n  if (obj.media) {\n    css += \"}\";\n  }\n  if (obj.supports) {\n    css += \"}\";\n  }\n  var sourceMap = obj.sourceMap;\n  if (sourceMap && typeof btoa !== \"undefined\") {\n    css += \"\\n/*# sourceMappingURL=data:application/json;base64,\".concat(btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))), \" */\");\n  }\n\n  // For old IE\n  /* istanbul ignore if  */\n  options.styleTagTransform(css, styleElement, options.options);\n}\nfunction removeStyleElement(styleElement) {\n  // istanbul ignore if\n  if (styleElement.parentNode === null) {\n    return false;\n  }\n  styleElement.parentNode.removeChild(styleElement);\n}\n\n/* istanbul ignore next  */\nfunction domAPI(options) {\n  if (typeof document === \"undefined\") {\n    return {\n      update: function update() {},\n      remove: function remove() {}\n    };\n  }\n  var styleElement = options.insertStyleElement(options);\n  return {\n    update: function update(obj) {\n      apply(styleElement, options, obj);\n    },\n    remove: function remove() {\n      removeStyleElement(styleElement);\n    }\n  };\n}\nmodule.exports = domAPI;\n\n//# sourceURL=webpack:///./node_modules/style-loader/dist/runtime/styleDomAPI.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleTagTransform.js":
/*!*********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleTagTransform.js ***!
  \*********************************************************************/
/***/ ((module) => {

eval("\n\n/* istanbul ignore next  */\nfunction styleTagTransform(css, styleElement) {\n  if (styleElement.styleSheet) {\n    styleElement.styleSheet.cssText = css;\n  } else {\n    while (styleElement.firstChild) {\n      styleElement.removeChild(styleElement.firstChild);\n    }\n    styleElement.appendChild(document.createTextNode(css));\n  }\n}\nmodule.exports = styleTagTransform;\n\n//# sourceURL=webpack:///./node_modules/style-loader/dist/runtime/styleTagTransform.js?");

/***/ }),

/***/ "./src/address.txt":
/*!*************************!*\
  !*** ./src/address.txt ***!
  \*************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (\"87 Wrenmoor Avenue\\r\\nOld Fern District\\r\\nElbridge, ME 04628\\r\\nUnited States\");\n\n//# sourceURL=webpack:///./src/address.txt?");

/***/ }),

/***/ "./src/advertisement.txt":
/*!*******************************!*\
  !*** ./src/advertisement.txt ***!
  \*******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (\"🚀 Fuel Your Code. One Sip at a Time. \\r\\n\\r\\nDevelopers, we get it. Long hours, endless tickets, and mind-numbing debugging marathons. \\r\\nThe grind is real—and sometimes, so is the mental fog.\\r\\n\\r\\nThat’s where Dev Café Coffee comes in. \\r\\nSpecially roasted for deep thinkers and digital builders,\\r\\nour blends are engineered to energize your brain without the crash.  \\r\\nWhether you're cranking out APIs or surviving sprint planning, our coffee keeps you sharp, focused,  \\r\\nand ready to tackle even the most soul-crushing legacy code. \\r\\n\\r\\nNo more stale office brews or jittery shortcuts. Just smooth, \\r\\nrich coffee that tastes like productivity—and feels like a second wind. \\r\\n<div id=\\\"slogan\\\">\\\"Code Hard. Brew Smart.”</div>\");\n\n//# sourceURL=webpack:///./src/advertisement.txt?");

/***/ }),

/***/ "./src/coffee.png":
/*!************************!*\
  !*** ./src/coffee.png ***!
  \************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("module.exports = __webpack_require__.p + \"043f0e5d467adb798e0a.png\";\n\n//# sourceURL=webpack:///./src/coffee.png?");

/***/ }),

/***/ "./src/contact.js":
/*!************************!*\
  !*** ./src/contact.js ***!
  \************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   createContact: () => (/* binding */ createContact)\n/* harmony export */ });\n/* harmony import */ var _utils_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./utils.js */ \"./src/utils.js\");\n/* harmony import */ var _contact_txt__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./contact.txt */ \"./src/contact.txt\");\n// Import createDomElement from utils.js\r\n\r\n\r\n// Default import text from contact.txt as a string\r\n\r\n\r\nconst contactInfo = _contact_txt__WEBPACK_IMPORTED_MODULE_1__[\"default\"].split(\"\\n\");\r\n\r\n// Used to display contact information on page \r\nfunction createContact() {\r\n    const containerDiv = document.querySelector(\"#content\");\r\n    containerDiv.style.width = \"100%\";\r\n    containerDiv.style.display = \"flex\";\r\n    containerDiv.style.flexDirection = \"column\";\r\n    containerDiv.style.justifyContent = \"center\"; \r\n    containerDiv.style.alignItems = \"center\";\r\n\r\n    const infoContainer = (0,_utils_js__WEBPACK_IMPORTED_MODULE_0__.createDomElement)({type: \"div\", id: \"info\", classList: [], text: \"\"});\r\n\r\n    // Split contactInfo into more specific arrays of information\r\n    const phone = [];\r\n    const email = [];\r\n    const socialMedia = [];\r\n\r\n    for (let i = 0; i < contactInfo.length; i++) {\r\n        if (i < 2) phone.push(contactInfo[i]);\r\n        else if (i < 4) email.push(contactInfo[i]);\r\n        else socialMedia.push(contactInfo[i]);\r\n    }\r\n\r\n    // Create containers of information\r\n    const phoneSection = (0,_utils_js__WEBPACK_IMPORTED_MODULE_0__.createDomElement)({type: \"div\", id: \"service\", classList: [\"side\"], text: \"\"});\r\n    (0,_utils_js__WEBPACK_IMPORTED_MODULE_0__.addText)(phoneSection, phone);\r\n\r\n    const emailSection = (0,_utils_js__WEBPACK_IMPORTED_MODULE_0__.createDomElement)({type: \"div\", id: \"service\", classList: [\"side\"], text: \"\"});\r\n    (0,_utils_js__WEBPACK_IMPORTED_MODULE_0__.addText)(emailSection, email);\r\n\r\n\r\n    const socialMediaSection = (0,_utils_js__WEBPACK_IMPORTED_MODULE_0__.createDomElement)({type: \"div\", id: \"service\", classList: [\"side\"], text: \"\"});\r\n    (0,_utils_js__WEBPACK_IMPORTED_MODULE_0__.addText)(socialMediaSection, socialMedia);\r\n\r\n\r\n    const miniSections = [phoneSection, emailSection, socialMediaSection];\r\n    (0,_utils_js__WEBPACK_IMPORTED_MODULE_0__.appendChildren)(infoContainer, miniSections);\r\n\r\n    containerDiv.appendChild(infoContainer);\r\n}\r\n\r\n\n\n//# sourceURL=webpack:///./src/contact.js?");

/***/ }),

/***/ "./src/contact.txt":
/*!*************************!*\
  !*** ./src/contact.txt ***!
  \*************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (\"📞 Phone\\r\\n(555) 123-4567\\r\\n📧 Email\\r\\nhello@devcafé.co\\r\\n📱 Social Media\\r\\nInstagram: @devcafé\\r\\nFacebook: facebook.com/devcafé\\r\\nTwitter: @devcafébrews\");\n\n//# sourceURL=webpack:///./src/contact.txt?");

/***/ }),

/***/ "./src/fonts/Open Sans/static/OpenSans-Regular.ttf":
/*!*********************************************************!*\
  !*** ./src/fonts/Open Sans/static/OpenSans-Regular.ttf ***!
  \*********************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("module.exports = __webpack_require__.p + \"b8cc747a58ffa52b7ff9.ttf\";\n\n//# sourceURL=webpack:///./src/fonts/Open_Sans/static/OpenSans-Regular.ttf?");

/***/ }),

/***/ "./src/home.js":
/*!*********************!*\
  !*** ./src/home.js ***!
  \*********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   createHome: () => (/* binding */ createHome)\n/* harmony export */ });\n/* harmony import */ var _advertisement_txt__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./advertisement.txt */ \"./src/advertisement.txt\");\n/* harmony import */ var _hours_txt__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./hours.txt */ \"./src/hours.txt\");\n/* harmony import */ var _address_txt__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./address.txt */ \"./src/address.txt\");\n/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./utils */ \"./src/utils.js\");\n// Default import text from advertisement.txt as a string\r\n\r\n\r\n// Default import text from hours.txt as a string\r\n\r\n\r\n// Default import text from address.txt\r\n\r\n\r\n// Import createDomElement function from utlls.js\r\n\r\n\r\n\r\nconst advertInfo = _advertisement_txt__WEBPACK_IMPORTED_MODULE_0__[\"default\"].split(\"\\n\");\r\nconst hoursInfo = _hours_txt__WEBPACK_IMPORTED_MODULE_1__[\"default\"].split(\"\\n\");\r\nconst addressInfo = _address_txt__WEBPACK_IMPORTED_MODULE_2__[\"default\"].split(\"\\n\");\r\n\r\n\r\nconst homePage = (function() {\r\n    // Modify content div in order to add content for home page\r\n    const containerDiv = document.querySelector(\"#content\"); \r\n\r\n    function createAdSection() {\r\n        // Create container for advertisement\r\n        const adContainer = (0,_utils__WEBPACK_IMPORTED_MODULE_3__.createDomElement)({type: \"div\", id:\"\", classList: [\"ad\"], text:\"\"});\r\n\r\n        // Create heading for advertisement\r\n        const adHeading = (0,_utils__WEBPACK_IMPORTED_MODULE_3__.createDomElement)({type: \"div\", id:\"ad-heading\", classList: [], text: advertInfo[0]});\r\n        adContainer.appendChild(adHeading);\r\n\r\n        // Create paragraphs and add content to each paragraph\r\n        const paragraphs = [];\r\n        for (let i = 0; i < 3; i++) {\r\n            paragraphs.push(document.createElement(\"p\"));\r\n        }\r\n        \r\n        // Populates each paragraph within the paragraphs array with the appropriate text\r\n        for (let i = 1; i < advertInfo.length; i++) {\r\n            if (i < 4) {\r\n                paragraphs[0].innerHTML += `${advertInfo[i]}<br>`;\r\n            } else if (i < 11) {\r\n                paragraphs[1].innerHTML += `${advertInfo[i]}<br>`;\r\n            } else {\r\n                paragraphs[2].innerHTML += `${advertInfo[i]}<br>`;\r\n            }\r\n        }\r\n\r\n        // Add each paragraph to advertisement container\r\n        paragraphs.forEach((paragraph) => {\r\n            adContainer.appendChild(paragraph);\r\n        });\r\n\r\n        return adContainer;\r\n    }\r\n\r\n\r\n    function createHoursSection() {\r\n        // Create a container for displaying hours on the screen\r\n        const hours = (0,_utils__WEBPACK_IMPORTED_MODULE_3__.createDomElement)({type: \"div\", id: \"service\", classList: [\"side\"], text: \"\"})\r\n\r\n        // Create heading for hours container\r\n        const hoursHeading = (0,_utils__WEBPACK_IMPORTED_MODULE_3__.createDomElement)({type: \"div\", id: \"\", classList: [\"info-heading\"], text: \"⏰ Hours\"});\r\n        hours.appendChild(hoursHeading);\r\n\r\n        \r\n        // Create list for Actual Days\r\n        const days = (0,_utils__WEBPACK_IMPORTED_MODULE_3__.createDomElement)({type: \"ul\", id: \"days\", classList: [], text: \"\"});\r\n        days.id = \"days\";\r\n        \r\n        // Append specific information from files \r\n        for (let i = 0; i < hoursInfo.length; i++) {\r\n            if (!(i === 0) && !(i === 7)) {\r\n                let day = (0,_utils__WEBPACK_IMPORTED_MODULE_3__.createDomElement)({type: \"li\", id: \"\", classList: [], text: hoursInfo[i]});\r\n                days.appendChild(day); \r\n\r\n            } else if (hoursInfo[i] == \"\") {\r\n                days.appendChild(document.createElement(\"br\"));\r\n\r\n            } else {\r\n                let subHeading = (0,_utils__WEBPACK_IMPORTED_MODULE_3__.createDomElement)({type: \"div\", id: \"\", classList: [\"sub-heading\"], text: hoursInfo[i]});\r\n                days.appendChild(subHeading);\r\n            }\r\n        }\r\n\r\n        hours.appendChild(days);\r\n\r\n        return hours;\r\n    }\r\n\r\n\r\n    function createLocationSection() {\r\n        // Create container for location address\r\n        const location = (0,_utils__WEBPACK_IMPORTED_MODULE_3__.createDomElement)({type: \"div\", id: \"location\", classList: [\"side\"], text: \"\"});\r\n\r\n        // Create heading for location div\r\n        const locationHeading = (0,_utils__WEBPACK_IMPORTED_MODULE_3__.createDomElement)({type: \"div\", id: \"\", classList: [\"info-heading\"], text: \"📍 Location\"});\r\n        location.appendChild(locationHeading);\r\n\r\n        // Create content wrapper for location text\r\n        const locationContent = (0,_utils__WEBPACK_IMPORTED_MODULE_3__.createDomElement)({type: \"div\", id: \"location-content\", classList: [], text: \"\"});;\r\n        (0,_utils__WEBPACK_IMPORTED_MODULE_3__.addText)(locationContent, addressInfo);\r\n\r\n        location.appendChild(locationContent);\r\n\r\n        return location;\r\n    }\r\n\r\n    function createHome() {\r\n        containerDiv.style.display = \"grid\";\r\n        containerDiv.style.gridTemplateColumns = \"6fr 2fr\";\r\n        containerDiv.style.height = \"60vh\"; \r\n\r\n        const adSection = createAdSection();\r\n        const hoursSection = createHoursSection();\r\n        const locationSection = createLocationSection();\r\n\r\n        const sections = [adSection, hoursSection, locationSection]\r\n        ;(0,_utils__WEBPACK_IMPORTED_MODULE_3__.appendChildren)(containerDiv, sections);        \r\n    }\r\n\r\n    return { createHome };\r\n\r\n})();\r\n\r\nconst createHome = homePage.createHome;\n\n//# sourceURL=webpack:///./src/home.js?");

/***/ }),

/***/ "./src/hours.txt":
/*!***********************!*\
  !*** ./src/hours.txt ***!
  \***********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (\"--- Weekdays ---\\r\\nMonday : 7:00AM - 8:30PM\\r\\nTueday : 8:30AM - 8:30PM\\r\\nWednesday : 7:00AM - 8:30PM\\r\\nThursday : 8:30AM - 8:30PM\\r\\nFriday : 7:00AM - 8:30PM\\r\\n\\r\\n--- Weekends ---\\r\\nSunday : ~CLOSED~\\r\\nSaturday : 9:30AM - 6:30PM\");\n\n//# sourceURL=webpack:///./src/hours.txt?");

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _styles_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./styles.css */ \"./src/styles.css\");\n/* harmony import */ var _pages_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./pages.js */ \"./src/pages.js\");\n// Apply styles through \"side effect\" importing\r\n  \r\n\r\n// Import function for adding sections to pages depending on which tab the user is on\r\n\r\n\r\n// Used to change the colors of navigation buttons to show which tab has been selected\r\nfunction highlight(element) {\r\n    element.style.backgroundColor = \"#f1f2f3\";\r\n    element.style.color = \"#A67B5B\";\r\n}\r\n\r\n// Used to change the colors of navigation buttons to show that the user has changed their tab\r\nfunction unhighlight(element) {\r\n    element.style.backgroundColor = \"\";\r\n    element.style.color = \"\";\r\n}\r\n\r\n// Display the homepage's content when page loads for first time\r\ndocument.addEventListener(\"DOMContentLoaded\", () => {\r\n    highlight(document.querySelector(\"#home\"));\r\n    (0,_pages_js__WEBPACK_IMPORTED_MODULE_1__.createHome)();\r\n});\r\n\r\n\r\nconst navBtnContainer = document.querySelector(\".links\");\r\nconst buttons = document.querySelectorAll(\".links button\");\r\n\r\n// Detects when a navigation button is clicked and makes it visually apparent as which one\r\nnavBtnContainer.addEventListener(\"click\", (event) => {\r\n    let target = event.target;\r\n    (0,_pages_js__WEBPACK_IMPORTED_MODULE_1__.clearScreen)();\r\n    \r\n    for (let i = 0; i < buttons.length; i++) {\r\n        if (buttons[i].id === target.id) {\r\n            highlight(buttons[i]);\r\n\r\n            // Change between what information to display based on which navigation button is clicked\r\n            switch(target.id) {\r\n                case \"home\":\r\n                    (0,_pages_js__WEBPACK_IMPORTED_MODULE_1__.createHome)();\r\n                    break;\r\n\r\n                case \"menu\":\r\n                    (0,_pages_js__WEBPACK_IMPORTED_MODULE_1__.createMenu)();\r\n                    break;\r\n\r\n                case \"contact\":\r\n                    (0,_pages_js__WEBPACK_IMPORTED_MODULE_1__.createContact)();\r\n                    break;\r\n            }\r\n\r\n        } else {\r\n            unhighlight(buttons[i]);\r\n        }\r\n    }\r\n});\n\n//# sourceURL=webpack:///./src/index.js?");

/***/ }),

/***/ "./src/menu.js":
/*!*********************!*\
  !*** ./src/menu.js ***!
  \*********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   createMenu: () => (/* binding */ createMenu)\n/* harmony export */ });\n/* harmony import */ var _menu_txt__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./menu.txt */ \"./src/menu.txt\");\n/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./utils */ \"./src/utils.js\");\n// Default import text from menu.txt as a string\r\n\r\n\r\n// Import createDomElement function from utlls.js\r\n\r\n\r\n\r\n// Separate menu options into diferent arrays and store then in an object\r\nfunction getOptions () {    \r\n    const menuInfo = _menu_txt__WEBPACK_IMPORTED_MODULE_0__[\"default\"].split(\"\\n\");\r\n\r\n    const options = {\r\n        coffee: [],\r\n        tea: [],\r\n        pastries: [],\r\n        sandwiches: [],\r\n    };\r\n\r\n    // Gets the appropriate items based off of the start of one option and the ending of another in menu.txt\r\n    for (let i = 0; i < menuInfo.length; i++) {\r\n        if (i < 7) {\r\n            options.coffee.push(menuInfo[i]);\r\n        } else if (i < 13) {\r\n            options.tea.push(menuInfo[i]);\r\n        } else if (i < 19) {\r\n            options.pastries.push(menuInfo[i]);\r\n        } else {\r\n            options.sandwiches.push(menuInfo[i]);\r\n        }\r\n    }\r\n\r\n    // Puts the options in an array and then returns it\r\n    const optionsList = [];\r\n    \r\n    for (let option in options) {\r\n        optionsList.push(options[option]);\r\n    }\r\n\r\n    return optionsList;\r\n}\r\n\r\n// Tracks the index of the currently displayed menu option for toggle control\r\nlet activeOption;\r\n\r\n// Get seperated menu options and store the in an array \r\nconst menuOptions = getOptions();\r\n\r\n// Contains functionality for displaying an option onto the page\r\nfunction displayOption (option, container, optionIndex) {\r\n    // create Header for list of menu items\r\n    const menuHeader = (0,_utils__WEBPACK_IMPORTED_MODULE_1__.createDomElement)({type: \"div\", id:\"menu-header\", classList: [], text:`${option[0]}`});\r\n    // create list for menu items\r\n    const menuList = (0,_utils__WEBPACK_IMPORTED_MODULE_1__.createDomElement)({type: \"ul\", id:\"menu-list\", classList: [], text:\"\"});  \r\n\r\n    // Make display indicators\r\n    const indicatorWrapper = (0,_utils__WEBPACK_IMPORTED_MODULE_1__.createDomElement)({type: \"div\", id:\"indicators\", classList: [], text:\"\"});\r\n\r\n    // create indicators\r\n    for (let i = 0; i < menuOptions.length; i++) {\r\n        let indicator = (0,_utils__WEBPACK_IMPORTED_MODULE_1__.createDomElement)({type: \"div\", id:`${i + 1}`, classList: [\"indicator\"], text:\"\"});\r\n\r\n        // Makes visual indication as to what option number the user is on\r\n        if (i == optionIndex) {\r\n            indicator.style.backgroundColor = \"#8c8c8c\";    \r\n        }\r\n        \r\n        indicatorWrapper.appendChild(indicator);\r\n    }\r\n\r\n    // Add items in options array to menuList\r\n    for (let i = 1; i < option.length; i++) {\r\n        const item = (0,_utils__WEBPACK_IMPORTED_MODULE_1__.createDomElement)({type: \"li\", id:\"\", classList: [\"menu-item\"], text:`${option[i]}`})\r\n        menuList.appendChild(item);      \r\n    }\r\n\r\n    const menuContents = [menuHeader, menuList, indicatorWrapper];\r\n    (0,_utils__WEBPACK_IMPORTED_MODULE_1__.appendChildren)(container, menuContents);\r\n\r\n    activeOption = optionIndex;\r\n}\r\n\r\n// clears menu content\r\nfunction clearMenu() {\r\n    const menuContent = document.querySelectorAll(\"#menu-content > *\");\r\n    for (let i = 0; i < menuContent.length; i++) {\r\n        document.querySelector(\"#menu-content\").removeChild(menuContent[i]);\r\n    }\r\n}\r\n\r\n\r\n// Get's called when menu button is clicked on page\r\nfunction createMenu() {\r\n\r\n    const containerDiv = document.querySelector(\"#content\");\r\n    containerDiv.style.display = \"flex\";\r\n    containerDiv.style.flexDirection = \"row\";\r\n    containerDiv.style.width = \"100%\";\r\n    containerDiv.style.gap = \"1.25rem\";\r\n    containerDiv.style.justifyContent = \"center\";\r\n    containerDiv.style.height = \"60vh\";\r\n\r\n    // create text block and scroll buttons for menu \r\n    const leftScroller = (0,_utils__WEBPACK_IMPORTED_MODULE_1__.createDomElement)({type: \"div\", id:\"left\", classList: [\"scroll\"], text:\"<\"});\r\n    const menu = (0,_utils__WEBPACK_IMPORTED_MODULE_1__.createDomElement)({type: \"div\", id:\"menu-content\", classList: [], text:\"\"});\r\n    const rightScroller = (0,_utils__WEBPACK_IMPORTED_MODULE_1__.createDomElement)({type: \"div\", id:\"right\", classList: [\"scroll\"], text:\">\"});  \r\n\r\n    const menuComponents = [leftScroller, menu, rightScroller];\r\n    (0,_utils__WEBPACK_IMPORTED_MODULE_1__.appendChildren)(containerDiv, menuComponents)\r\n\r\n    // Displays the first option by default \r\n    displayOption(menuOptions[0], menu, 0);\r\n\r\n\r\n    // Switches to the option with a lower index assuming the current one's index is greater than zero\r\n    leftScroller.addEventListener(\"click\", () => {\r\n        if (activeOption > 0) {\r\n            clearMenu();\r\n            activeOption--;\r\n\r\n            displayOption(menuOptions[activeOption], menu, activeOption);\r\n        }\r\n    })\r\n\r\n    // Switches to the option with a higher index assuming the current one's index is lower than menuOption.length - 1\r\n    rightScroller.addEventListener(\"click\", () => {\r\n        if (activeOption < menuOptions.length - 1) {\r\n            clearMenu();\r\n            activeOption++;\r\n\r\n            displayOption(menuOptions[activeOption], menu, activeOption);            \r\n        } \r\n    });\r\n}\r\n\r\n\n\n//# sourceURL=webpack:///./src/menu.js?");

/***/ }),

/***/ "./src/menu.txt":
/*!**********************!*\
  !*** ./src/menu.txt ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (\"Coffee☕\\r\\nEspresso — $2.50\\r\\nAmericano — $3.00\\r\\nCappuccino — $3.50\\r\\nLatte — $4.00\\r\\nMocha — $4.25\\r\\nCold Brew — $4.50\\r\\nTea🍵\\r\\nEnglish Breakfast — $2.75\\r\\nEarl Grey — $2.75\\r\\nGreen Tea — $2.75\\r\\nChai Latte — $3.75\\r\\nHerbal Infusion — $3.00\\r\\nPastries🍰\\r\\nCroissant — $2.50\\r\\nPain au Chocolat — $2.75\\r\\nBlueberry Muffin — $3.00\\r\\nBanana Bread — $2.50\\r\\nCinnamon Roll — $3.25\\r\\nSandwiches🥪\\r\\nTurkey & Swiss — $6.50\\r\\nCaprese (Mozzarella, Tomato, Basil) — $6.00\\r\\nHam & Cheddar — $6.25\\r\\nVeggie Wrap — $5.75\\r\\nGrilled Cheese — $5.00\");\n\n//# sourceURL=webpack:///./src/menu.txt?");

/***/ }),

/***/ "./src/pages.js":
/*!**********************!*\
  !*** ./src/pages.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   clearScreen: () => (/* reexport safe */ _utils_js__WEBPACK_IMPORTED_MODULE_0__.clearScreen),\n/* harmony export */   createContact: () => (/* reexport safe */ _contact_js__WEBPACK_IMPORTED_MODULE_3__.createContact),\n/* harmony export */   createHome: () => (/* reexport safe */ _home_js__WEBPACK_IMPORTED_MODULE_1__.createHome),\n/* harmony export */   createMenu: () => (/* reexport safe */ _menu_js__WEBPACK_IMPORTED_MODULE_2__.createMenu)\n/* harmony export */ });\n/* harmony import */ var _utils_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./utils.js */ \"./src/utils.js\");\n/* harmony import */ var _home_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./home.js */ \"./src/home.js\");\n/* harmony import */ var _menu_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./menu.js */ \"./src/menu.js\");\n/* harmony import */ var _contact_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./contact.js */ \"./src/contact.js\");\n\r\n\r\n\r\n\n\n//# sourceURL=webpack:///./src/pages.js?");

/***/ }),

/***/ "./src/styles.css":
/*!************************!*\
  !*** ./src/styles.css ***!
  \************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ \"./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleDomAPI.js */ \"./node_modules/style-loader/dist/runtime/styleDomAPI.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertBySelector.js */ \"./node_modules/style-loader/dist/runtime/insertBySelector.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js */ \"./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertStyleElement.js */ \"./node_modules/style-loader/dist/runtime/insertStyleElement.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleTagTransform.js */ \"./node_modules/style-loader/dist/runtime/styleTagTransform.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);\n/* harmony import */ var _node_modules_css_loader_dist_cjs_js_styles_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../node_modules/css-loader/dist/cjs.js!./styles.css */ \"./node_modules/css-loader/dist/cjs.js!./src/styles.css\");\n\n      \n      \n      \n      \n      \n      \n      \n      \n      \n\nvar options = {};\n\noptions.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());\noptions.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());\noptions.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, \"head\");\noptions.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());\noptions.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());\n\nvar update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_styles_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"], options);\n\n\n\n\n       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_styles_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"] && _node_modules_css_loader_dist_cjs_js_styles_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"].locals ? _node_modules_css_loader_dist_cjs_js_styles_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"].locals : undefined);\n\n\n//# sourceURL=webpack:///./src/styles.css?");

/***/ }),

/***/ "./src/utils.js":
/*!**********************!*\
  !*** ./src/utils.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   addText: () => (/* binding */ addText),\n/* harmony export */   appendChildren: () => (/* binding */ appendChildren),\n/* harmony export */   clearScreen: () => (/* binding */ clearScreen),\n/* harmony export */   createDomElement: () => (/* binding */ createDomElement)\n/* harmony export */ });\n// Useful for clearing the main content of the browser window\r\nfunction clearScreen() {\r\n    const content = document.querySelectorAll(\"#content > *\");\r\n    for (let i = 0; i < content.length; i++) {\r\n        document.querySelector(\"#content\").removeChild(content[i]);\r\n    }\r\n}\r\n\r\n// Useful for efficienty creating new DOM elements\r\nfunction createDomElement(elementObject) {\r\n    let newElement;\r\n\r\n    if (typeof elementObject.type === \"string\") {\r\n        newElement = document.createElement(elementObject.type);\r\n    } else {\r\n        throw TypeError(`${elementObject.type} field was not passed in as a string!`);\r\n    }\r\n\r\n    newElement.id = elementObject.id;\r\n    newElement.classList = elementObject.classList;\r\n    newElement.innerText = elementObject.text;\r\n\r\n    return newElement;\r\n\r\n}\r\n\r\n// Useful for appending more that one child at a time\r\nfunction appendChildren(parent, children) {\r\n    children.forEach((child) => {\r\n        parent.appendChild(child);\r\n    });\r\n} \r\n\r\n// Useful for appending lines of text to a DOM element more efficiently\r\nfunction addText(element, textArray) {\r\n    for (let i = 0; i < textArray.length; i++) {\r\n        element.innerHTML += `${textArray[i]}<br>`;\r\n    }\r\n}\r\n\r\n\r\n\n\n//# sourceURL=webpack:///./src/utils.js?");

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
/******/ 			if (document.currentScript && document.currentScript.tagName.toUpperCase() === 'SCRIPT')
/******/ 				scriptUrl = document.currentScript.src;
/******/ 			if (!scriptUrl) {
/******/ 				var scripts = document.getElementsByTagName("script");
/******/ 				if(scripts.length) {
/******/ 					var i = scripts.length - 1;
/******/ 					while (i > -1 && (!scriptUrl || !/^http(s?):/.test(scriptUrl))) scriptUrl = scripts[i--].src;
/******/ 				}
/******/ 			}
/******/ 		}
/******/ 		// When supporting browsers where an automatic publicPath is not supported you must specify an output.publicPath manually via configuration
/******/ 		// or pass an empty string ("") and set the __webpack_public_path__ variable from your code to use your own logic.
/******/ 		if (!scriptUrl) throw new Error("Automatic publicPath is not supported in this browser");
/******/ 		scriptUrl = scriptUrl.replace(/^blob:/, "").replace(/#.*$/, "").replace(/\?.*$/, "").replace(/\/[^\/]+$/, "/");
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
/******/ 	/* webpack/runtime/nonce */
/******/ 	(() => {
/******/ 		__webpack_require__.nc = undefined;
/******/ 	})();
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = __webpack_require__("./src/index.js");
/******/ 	
/******/ })()
;