/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	var __webpack_modules__ = ({

/***/ "./src/js/global.js":
/*!**************************!*\
  !*** ./src/js/global.js ***!
  \**************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _modals__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./modals */ \"./src/js/modals.js\");\n/* harmony import */ var _modals__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_modals__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _login_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./login.js */ \"./src/js/login.js\");\n/* harmony import */ var _login_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_login_js__WEBPACK_IMPORTED_MODULE_1__);\n\n\n(0,_modals__WEBPACK_IMPORTED_MODULE_0__.modalFunction)();\n(0,_login_js__WEBPACK_IMPORTED_MODULE_1__.loginOption)();\ndocument.addEventListener(\"DOMContentLoaded\", function () {\n  var bgElements = document.querySelectorAll(\"[class*='bg-']\");\n  bgElements.forEach(function (element) {\n    var classes = element.className.split(\" \");\n    classes.forEach(function (cls) {\n      if (cls.startsWith(\"bg-\")) {\n        var colorCode = cls.substring(3);\n        if (/^[0-9A-Fa-f]{6}$/.test(colorCode)) {\n          element.style.backgroundColor = \"#\".concat(colorCode);\n        }\n      }\n    });\n  });\n  var mnElements = document.querySelectorAll(\"[class*='fr-']\");\n  mnElements.forEach(function (element) {\n    var classes = element.className.split(\" \");\n    classes.forEach(function (cls) {\n      if (cls.startsWith(\"fr-\")) {\n        var colorCode = cls.substring(3);\n        if (/^[0-9A-Fa-f]{6}$/.test(colorCode)) {\n          element.style.color = \"#\".concat(colorCode);\n        }\n      }\n    });\n  });\n  // FINALLY FUCKING WORKS!!!!!!! 15/08/2024\n  // Doesn't work again 08/09/2024\n  var fontWeightClass = document.querySelectorAll(\"[class^='fw-'\");\n  fontWeightClass.forEach(function (element) {\n    var classes = element.className.split(\" \");\n    classes.forEach(function (cls) {\n      if (cls.startsWith(\"fw-\")) {\n        var fwValue = cls.substring(3);\n        if (/^\\d+px?$/.test(fwValue)) {\n          element.style.fontWeight = fwValue;\n        }\n      }\n    });\n  });\n  var closingClass = document.getElementByClassName(\"close\");\n  closingClass.textContent = \"&times;\";\n  var elementAlignment = document.querySelectorAll(\"[class^='align-']\");\n  elementAlignment.forEach(function (element) {\n    var classes = element.className.split(\" \");\n    classes.forEach(function (cls) {\n      if (cls.startsWith(\"align-\")) {\n        var alignment = cls.substring(5);\n        if (alignment === \"center\" || alignment === \"left\" || alignment === \"right\") {\n          element.style.textAlign = alignment;\n        }\n      }\n    });\n  });\n  var elementPadding = document.querySelectorAll(\"[class^='pad-']\");\n  elementPadding.forEach(function (element) {\n    var classes = element.className.split(\" \");\n    classes.forEach(function (cls) {\n      if (cls.startsWith(\"pad-\")) {\n        var paddingValue = cls.substring(5);\n        if (/^\\d+px?$/.test(paddingValue)) {\n          // Apply padding to all sides\n          element.style.padding = paddingValue;\n        }\n      }\n    });\n  });\n  // figure out how to have this work for all borders\n  var borderElements = document.querySelectorAll(\"[data-border]\");\n  borderElements.forEach(function (element) {\n    var borderData = element.getAttribute('data-border');\n    if (borderData) {\n      var parts = borderData.split(\" \");\n      parts.forEach(function (part) {\n        if (part.startsWith(\"color-\")) {\n          var colorCode = part.substring(6);\n          if (/^[0-9A-Fa-f]{6}$/.test(colorCode)) {\n            element.style.color = \"#\".concat(colorCode);\n          }\n        }\n        if (part.startsWith(\"radius-\")) {\n          var borderRadius = part.substring(7);\n          if (borderRadius.includes(\"%\")) {\n            borderRadius = borderRadius + \"%\";\n          }\n          if (borderRadius) {\n            borderRadius = borderRadius + \"px\";\n          }\n          element.style.borderRadius = borderRadius;\n        }\n        if (part.startsWith(\"size-\")) {\n          var borderSize = part.substring(7);\n          element.style.borderWidth = borderSize;\n        }\n      });\n    }\n  });\n  var imageDimension = document.querySelectorAll(\"[data-image]\");\n  imageDimension.forEach(function (element) {\n    var imageData = element.getAttribute('data-image');\n    if (imageData) {\n      var parts = imageData.split(\" \");\n      parts.forEach(function (parts) {\n        if (part.startsWith(\"height-\")) {\n          var imageHeight = part.substring(6);\n          if (imageHeight.includes(\"%\")) {\n            imageHeight = imageHeight + \"%\";\n          }\n          if (imageHeight.includes(\"em\") || imageHeight.includes(\"-em\")) {\n            imageHeight = imageHeight + \"em\";\n          } else {\n            imageHeight = imageHeight + \"px\";\n          }\n          element.style.height = imageHeight;\n        }\n        if (part.startsWith(\"width-\")) {\n          var imageWidth = part.substring(7);\n          if (imageWidth.includes(\"%\")) {\n            imageWidth = imageWidth + \"%\";\n          }\n          if (imageWidth.includes(\"em\") || imageWidth.includes(\"-em\")) {\n            imageWidth = imageWidth + \"em\";\n          } else {\n            imageWidth = imageWidth + \"px\";\n          }\n          element.style.width = imageWidth;\n        }\n      });\n    }\n  });\n  var marginCheck = document.querySelectorAll(\"[data-margin]\");\n  marginCheck.forEach(function (element) {\n    var parts = element.className.split(\" \");\n    if (parts.startsWith(\"a-\")) {\n      var everyMargin = parts.cls(5);\n      element.style.margin = everyMargin;\n    } else if (parts.startsWith(\"r-\")) {\n      var rightMargin = parts.cls(5);\n      element.style.marginRight = rightMargin;\n    } else if (parts.startsWith(\"l-\")) {}\n  });\n  var indexValue = document.querySelectorAll(\"[data-index]\");\n  indexValue.forEach(function (element) {\n    var indexData = element.getAttribute('data-index');\n    if (indexData) {\n      var parts = indexData.split(\" \");\n      if (parts.startsWith(\"z-\")) {\n        zIndex = part.substring(5);\n        element.style.zIndex = zIndex;\n      }\n    }\n  });\n});\n\n//# sourceURL=webpack://expack/./src/js/global.js?");

/***/ }),

/***/ "./src/js/login.js":
/*!*************************!*\
  !*** ./src/js/login.js ***!
  \*************************/
/***/ (() => {

eval("throw new Error(\"Module build failed (from ./node_modules/babel-loader/lib/index.js):\\nSyntaxError: C:\\\\Users\\\\Ruby\\\\Documents\\\\GitHub\\\\ExPack\\\\src\\\\js\\\\login.js: Invalid left-hand side in assignment expression. (16:12)\\n\\n\\u001b[0m \\u001b[90m 14 |\\u001b[39m     \\u001b[36mif\\u001b[39m (registerBtn\\u001b[33m.\\u001b[39mlength \\u001b[33m>\\u001b[39m \\u001b[35m0\\u001b[39m) {\\n \\u001b[90m 15 |\\u001b[39m         \\u001b[36mfor\\u001b[39m (\\u001b[36mvar\\u001b[39m i \\u001b[33m=\\u001b[39m \\u001b[35m0\\u001b[39m\\u001b[33m;\\u001b[39m i \\u001b[33m<\\u001b[39m registerBtns\\u001b[33m.\\u001b[39mlength\\u001b[33m;\\u001b[39m i\\u001b[33m++\\u001b[39m) {\\n\\u001b[31m\\u001b[1m>\\u001b[22m\\u001b[39m\\u001b[90m 16 |\\u001b[39m             registerBtn[i]\\u001b[33m.\\u001b[39monclick() \\u001b[33m=\\u001b[39m \\u001b[36mfunction\\u001b[39m() { \\n \\u001b[90m    |\\u001b[39m             \\u001b[31m\\u001b[1m^\\u001b[22m\\u001b[39m\\n \\u001b[90m 17 |\\u001b[39m                 \\u001b[36mvar\\u001b[39m emailRequired \\u001b[33m=\\u001b[39m hasRequiredClass(emailClass)\\u001b[33m;\\u001b[39m\\n \\u001b[90m 18 |\\u001b[39m                 \\u001b[36mvar\\u001b[39m passwordRequired \\u001b[33m=\\u001b[39m hasRequiredClass(passwordClass)\\u001b[33m;\\u001b[39m\\n \\u001b[90m 19 |\\u001b[39m                 \\u001b[36mvar\\u001b[39m usernameRequired \\u001b[33m=\\u001b[39m hasRequiredClass(usernameClass)\\u001b[33m;\\u001b[39m\\u001b[0m\\n    at constructor (C:\\\\Users\\\\Ruby\\\\Documents\\\\GitHub\\\\ExPack\\\\node_modules\\\\@babel\\\\parser\\\\lib\\\\index.js:362:19)\\n    at Parser.raise (C:\\\\Users\\\\Ruby\\\\Documents\\\\GitHub\\\\ExPack\\\\node_modules\\\\@babel\\\\parser\\\\lib\\\\index.js:3260:19)\\n    at Parser.checkLVal (C:\\\\Users\\\\Ruby\\\\Documents\\\\GitHub\\\\ExPack\\\\node_modules\\\\@babel\\\\parser\\\\lib\\\\index.js:7302:12)\\n    at Parser.parseMaybeAssign (C:\\\\Users\\\\Ruby\\\\Documents\\\\GitHub\\\\ExPack\\\\node_modules\\\\@babel\\\\parser\\\\lib\\\\index.js:10375:12)\\n    at Parser.parseExpressionBase (C:\\\\Users\\\\Ruby\\\\Documents\\\\GitHub\\\\ExPack\\\\node_modules\\\\@babel\\\\parser\\\\lib\\\\index.js:10302:23)\\n    at C:\\\\Users\\\\Ruby\\\\Documents\\\\GitHub\\\\ExPack\\\\node_modules\\\\@babel\\\\parser\\\\lib\\\\index.js:10298:39\\n    at Parser.allowInAnd (C:\\\\Users\\\\Ruby\\\\Documents\\\\GitHub\\\\ExPack\\\\node_modules\\\\@babel\\\\parser\\\\lib\\\\index.js:11928:16)\\n    at Parser.parseExpression (C:\\\\Users\\\\Ruby\\\\Documents\\\\GitHub\\\\ExPack\\\\node_modules\\\\@babel\\\\parser\\\\lib\\\\index.js:10298:17)\\n    at Parser.parseStatementContent (C:\\\\Users\\\\Ruby\\\\Documents\\\\GitHub\\\\ExPack\\\\node_modules\\\\@babel\\\\parser\\\\lib\\\\index.js:12372:23)\\n    at Parser.parseStatementLike (C:\\\\Users\\\\Ruby\\\\Documents\\\\GitHub\\\\ExPack\\\\node_modules\\\\@babel\\\\parser\\\\lib\\\\index.js:12239:17)\\n    at Parser.parseStatementListItem (C:\\\\Users\\\\Ruby\\\\Documents\\\\GitHub\\\\ExPack\\\\node_modules\\\\@babel\\\\parser\\\\lib\\\\index.js:12219:17)\\n    at Parser.parseBlockOrModuleBlockBody (C:\\\\Users\\\\Ruby\\\\Documents\\\\GitHub\\\\ExPack\\\\node_modules\\\\@babel\\\\parser\\\\lib\\\\index.js:12792:61)\\n    at Parser.parseBlockBody (C:\\\\Users\\\\Ruby\\\\Documents\\\\GitHub\\\\ExPack\\\\node_modules\\\\@babel\\\\parser\\\\lib\\\\index.js:12785:10)\\n    at Parser.parseBlock (C:\\\\Users\\\\Ruby\\\\Documents\\\\GitHub\\\\ExPack\\\\node_modules\\\\@babel\\\\parser\\\\lib\\\\index.js:12773:10)\\n    at Parser.parseStatementContent (C:\\\\Users\\\\Ruby\\\\Documents\\\\GitHub\\\\ExPack\\\\node_modules\\\\@babel\\\\parser\\\\lib\\\\index.js:12329:21)\\n    at Parser.parseStatementLike (C:\\\\Users\\\\Ruby\\\\Documents\\\\GitHub\\\\ExPack\\\\node_modules\\\\@babel\\\\parser\\\\lib\\\\index.js:12239:17)\\n    at Parser.parseStatement (C:\\\\Users\\\\Ruby\\\\Documents\\\\GitHub\\\\ExPack\\\\node_modules\\\\@babel\\\\parser\\\\lib\\\\index.js:12232:17)\\n    at C:\\\\Users\\\\Ruby\\\\Documents\\\\GitHub\\\\ExPack\\\\node_modules\\\\@babel\\\\parser\\\\lib\\\\index.js:12821:68\\n    at Parser.withSmartMixTopicForbiddingContext (C:\\\\Users\\\\Ruby\\\\Documents\\\\GitHub\\\\ExPack\\\\node_modules\\\\@babel\\\\parser\\\\lib\\\\index.js:11910:14)\\n    at Parser.parseFor (C:\\\\Users\\\\Ruby\\\\Documents\\\\GitHub\\\\ExPack\\\\node_modules\\\\@babel\\\\parser\\\\lib\\\\index.js:12821:22)\\n    at Parser.parseForStatement (C:\\\\Users\\\\Ruby\\\\Documents\\\\GitHub\\\\ExPack\\\\node_modules\\\\@babel\\\\parser\\\\lib\\\\index.js:12568:21)\\n    at Parser.parseStatementContent (C:\\\\Users\\\\Ruby\\\\Documents\\\\GitHub\\\\ExPack\\\\node_modules\\\\@babel\\\\parser\\\\lib\\\\index.js:12257:21)\\n    at Parser.parseStatementLike (C:\\\\Users\\\\Ruby\\\\Documents\\\\GitHub\\\\ExPack\\\\node_modules\\\\@babel\\\\parser\\\\lib\\\\index.js:12239:17)\\n    at Parser.parseStatementListItem (C:\\\\Users\\\\Ruby\\\\Documents\\\\GitHub\\\\ExPack\\\\node_modules\\\\@babel\\\\parser\\\\lib\\\\index.js:12219:17)\\n    at Parser.parseBlockOrModuleBlockBody (C:\\\\Users\\\\Ruby\\\\Documents\\\\GitHub\\\\ExPack\\\\node_modules\\\\@babel\\\\parser\\\\lib\\\\index.js:12792:61)\\n    at Parser.parseBlockBody (C:\\\\Users\\\\Ruby\\\\Documents\\\\GitHub\\\\ExPack\\\\node_modules\\\\@babel\\\\parser\\\\lib\\\\index.js:12785:10)\\n    at Parser.parseBlock (C:\\\\Users\\\\Ruby\\\\Documents\\\\GitHub\\\\ExPack\\\\node_modules\\\\@babel\\\\parser\\\\lib\\\\index.js:12773:10)\\n    at Parser.parseStatementContent (C:\\\\Users\\\\Ruby\\\\Documents\\\\GitHub\\\\ExPack\\\\node_modules\\\\@babel\\\\parser\\\\lib\\\\index.js:12329:21)\\n    at Parser.parseStatementLike (C:\\\\Users\\\\Ruby\\\\Documents\\\\GitHub\\\\ExPack\\\\node_modules\\\\@babel\\\\parser\\\\lib\\\\index.js:12239:17)\\n    at Parser.parseStatementOrSloppyAnnexBFunctionDeclaration (C:\\\\Users\\\\Ruby\\\\Documents\\\\GitHub\\\\ExPack\\\\node_modules\\\\@babel\\\\parser\\\\lib\\\\index.js:12229:17)\\n    at Parser.parseIfStatement (C:\\\\Users\\\\Ruby\\\\Documents\\\\GitHub\\\\ExPack\\\\node_modules\\\\@babel\\\\parser\\\\lib\\\\index.js:12606:28)\\n    at Parser.parseStatementContent (C:\\\\Users\\\\Ruby\\\\Documents\\\\GitHub\\\\ExPack\\\\node_modules\\\\@babel\\\\parser\\\\lib\\\\index.js:12268:21)\\n    at Parser.parseStatementLike (C:\\\\Users\\\\Ruby\\\\Documents\\\\GitHub\\\\ExPack\\\\node_modules\\\\@babel\\\\parser\\\\lib\\\\index.js:12239:17)\\n    at Parser.parseStatementListItem (C:\\\\Users\\\\Ruby\\\\Documents\\\\GitHub\\\\ExPack\\\\node_modules\\\\@babel\\\\parser\\\\lib\\\\index.js:12219:17)\\n    at Parser.parseBlockOrModuleBlockBody (C:\\\\Users\\\\Ruby\\\\Documents\\\\GitHub\\\\ExPack\\\\node_modules\\\\@babel\\\\parser\\\\lib\\\\index.js:12792:61)\\n    at Parser.parseBlockBody (C:\\\\Users\\\\Ruby\\\\Documents\\\\GitHub\\\\ExPack\\\\node_modules\\\\@babel\\\\parser\\\\lib\\\\index.js:12785:10)\\n    at Parser.parseBlock (C:\\\\Users\\\\Ruby\\\\Documents\\\\GitHub\\\\ExPack\\\\node_modules\\\\@babel\\\\parser\\\\lib\\\\index.js:12773:10)\\n    at Parser.parseFunctionBody (C:\\\\Users\\\\Ruby\\\\Documents\\\\GitHub\\\\ExPack\\\\node_modules\\\\@babel\\\\parser\\\\lib\\\\index.js:11618:24)\\n    at Parser.parseFunctionBodyAndFinish (C:\\\\Users\\\\Ruby\\\\Documents\\\\GitHub\\\\ExPack\\\\node_modules\\\\@babel\\\\parser\\\\lib\\\\index.js:11604:10)\\n    at C:\\\\Users\\\\Ruby\\\\Documents\\\\GitHub\\\\ExPack\\\\node_modules\\\\@babel\\\\parser\\\\lib\\\\index.js:12917:12\\n    at Parser.withSmartMixTopicForbiddingContext (C:\\\\Users\\\\Ruby\\\\Documents\\\\GitHub\\\\ExPack\\\\node_modules\\\\@babel\\\\parser\\\\lib\\\\index.js:11910:14)\\n    at Parser.parseFunction (C:\\\\Users\\\\Ruby\\\\Documents\\\\GitHub\\\\ExPack\\\\node_modules\\\\@babel\\\\parser\\\\lib\\\\index.js:12916:10)\\n    at Parser.parseFunctionStatement (C:\\\\Users\\\\Ruby\\\\Documents\\\\GitHub\\\\ExPack\\\\node_modules\\\\@babel\\\\parser\\\\lib\\\\index.js:12601:17)\\n    at Parser.parseStatementContent (C:\\\\Users\\\\Ruby\\\\Documents\\\\GitHub\\\\ExPack\\\\node_modules\\\\@babel\\\\parser\\\\lib\\\\index.js:12263:21)\\n    at Parser.parseStatementLike (C:\\\\Users\\\\Ruby\\\\Documents\\\\GitHub\\\\ExPack\\\\node_modules\\\\@babel\\\\parser\\\\lib\\\\index.js:12239:17)\\n    at Parser.parseModuleItem (C:\\\\Users\\\\Ruby\\\\Documents\\\\GitHub\\\\ExPack\\\\node_modules\\\\@babel\\\\parser\\\\lib\\\\index.js:12216:17)\\n    at Parser.parseBlockOrModuleBlockBody (C:\\\\Users\\\\Ruby\\\\Documents\\\\GitHub\\\\ExPack\\\\node_modules\\\\@babel\\\\parser\\\\lib\\\\index.js:12792:36)\\n    at Parser.parseBlockBody (C:\\\\Users\\\\Ruby\\\\Documents\\\\GitHub\\\\ExPack\\\\node_modules\\\\@babel\\\\parser\\\\lib\\\\index.js:12785:10)\\n    at Parser.parseProgram (C:\\\\Users\\\\Ruby\\\\Documents\\\\GitHub\\\\ExPack\\\\node_modules\\\\@babel\\\\parser\\\\lib\\\\index.js:12113:10)\\n    at Parser.parseTopLevel (C:\\\\Users\\\\Ruby\\\\Documents\\\\GitHub\\\\ExPack\\\\node_modules\\\\@babel\\\\parser\\\\lib\\\\index.js:12103:25)\");\n\n//# sourceURL=webpack://expack/./src/js/login.js?");

/***/ }),

/***/ "./src/js/modals.js":
/*!**************************!*\
  !*** ./src/js/modals.js ***!
  \**************************/
/***/ (() => {

eval("// modified from w3schools\nfunction modalFunction() {\n  var modal = document.getElementsByClassName(\"modal\");\n  var modalBtn = document.getElementsByClassName(\"modal-btn\");\n  var closeClick = document.getElementsByClassName(\"close\");\n  modalBtn.onclick = function () {\n    modal.style.display = \"block\";\n  };\n  closeClick.onclick = function () {\n    modal.style.display = \"none\";\n  };\n  window.onclick = function (event) {\n    if (event.target == modal) {\n      modal.style.display = \"none\";\n    }\n  };\n}\n\n//# sourceURL=webpack://expack/./src/js/modals.js?");

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
/******/ 			// no module.id needed
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
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = __webpack_require__("./src/js/global.js");
/******/ 	
/******/ })()
;