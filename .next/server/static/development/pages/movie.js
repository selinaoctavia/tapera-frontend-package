module.exports =
/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = require('../../../ssr-module-cache.js');
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		var threw = true;
/******/ 		try {
/******/ 			modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/ 			threw = false;
/******/ 		} finally {
/******/ 			if(threw) delete installedModules[moduleId];
/******/ 		}
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 6);
/******/ })
/************************************************************************/
/******/ ({

/***/ "./pages/movie.tsx":
/*!*************************!*\
  !*** ./pages/movie.tsx ***!
  \*************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-redux */ "react-redux");
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_redux__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! moment */ "moment");
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(moment__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var redux_actions_MovieActions__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! redux/actions/MovieActions */ "./redux/actions/MovieActions.ts");
var _jsxFileName = "G:\\TAPERA\\nextworkspace\\tapera-frontend-package-v2\\pages\\movie.tsx";
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;





class Movie extends react__WEBPACK_IMPORTED_MODULE_0__["Component"] {
  constructor(props) {
    super(props);
  }

  componentDidMount() {
    const start = moment__WEBPACK_IMPORTED_MODULE_2___default()().startOf('month');
    const end = moment__WEBPACK_IMPORTED_MODULE_2___default()(start).add(2, 'month');
    const data = {
      'primary_release_date.gte': start.format('YYYY-MM-DD'),
      'primary_release_date.lte': end.format('YYYY-MM-DD')
    };
    this.props.onRequest(data);
  }

  render() {
    const {
      response,
      error
    } = this.props;
    console.log(response);
    return response.map((movie, key) => {
      return __jsx("div", {
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 29,
          columnNumber: 13
        }
      }, movie.title);
    });
  }

}

const mapStateToProps = state => ({
  fetch: state.nowPlaying.fetch,
  response: state.nowPlaying.response,
  error: state.nowPlaying.error,
  action: state.nowPlaying.action
});

const mapDispatchToProps = dispatch => ({
  onRequest: value => dispatch(Object(redux_actions_MovieActions__WEBPACK_IMPORTED_MODULE_3__["nowPlayingFetch"])(value))
});

/* harmony default export */ __webpack_exports__["default"] = (Object(react_redux__WEBPACK_IMPORTED_MODULE_1__["connect"])(mapStateToProps, mapDispatchToProps)(Movie));

/***/ }),

/***/ "./redux/actions/MovieActions.ts":
/*!***************************************!*\
  !*** ./redux/actions/MovieActions.ts ***!
  \***************************************/
/*! exports provided: nowPlayingFetch, nowPlayingSuccess, nowPlayingFail */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "nowPlayingFetch", function() { return nowPlayingFetch; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "nowPlayingSuccess", function() { return nowPlayingSuccess; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "nowPlayingFail", function() { return nowPlayingFail; });
/* harmony import */ var _constants_MovieConstants__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../constants/MovieConstants */ "./redux/constants/MovieConstants.ts");

const nowPlayingFetch = value => ({
  type: _constants_MovieConstants__WEBPACK_IMPORTED_MODULE_0__["NOWPLAYINGFETCH"],
  data: value
});
const nowPlayingSuccess = value => ({
  type: _constants_MovieConstants__WEBPACK_IMPORTED_MODULE_0__["NOWPLAYINGSUCCESS"],
  data: value
});
const nowPlayingFail = value => ({
  type: _constants_MovieConstants__WEBPACK_IMPORTED_MODULE_0__["NOWPLAYINGFAIL"],
  data: value
});

/***/ }),

/***/ "./redux/constants/MovieConstants.ts":
/*!*******************************************!*\
  !*** ./redux/constants/MovieConstants.ts ***!
  \*******************************************/
/*! exports provided: NOWPLAYINGFETCH, NOWPLAYINGSUCCESS, NOWPLAYINGFAIL */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NOWPLAYINGFETCH", function() { return NOWPLAYINGFETCH; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NOWPLAYINGSUCCESS", function() { return NOWPLAYINGSUCCESS; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NOWPLAYINGFAIL", function() { return NOWPLAYINGFAIL; });
const NOWPLAYINGFETCH = 'NOWPLAYINGFETCH';
const NOWPLAYINGSUCCESS = 'NOWPLAYINGSUCCESS';
const NOWPLAYINGFAIL = 'NOWPLAYINGFAIL';

/***/ }),

/***/ 6:
/*!*******************************!*\
  !*** multi ./pages/movie.tsx ***!
  \*******************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! G:\TAPERA\nextworkspace\tapera-frontend-package-v2\pages\movie.tsx */"./pages/movie.tsx");


/***/ }),

/***/ "moment":
/*!*************************!*\
  !*** external "moment" ***!
  \*************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("moment");

/***/ }),

/***/ "react":
/*!************************!*\
  !*** external "react" ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("react");

/***/ }),

/***/ "react-redux":
/*!******************************!*\
  !*** external "react-redux" ***!
  \******************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("react-redux");

/***/ })

/******/ });
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vLy4vcGFnZXMvbW92aWUudHN4Iiwid2VicGFjazovLy8uL3JlZHV4L2FjdGlvbnMvTW92aWVBY3Rpb25zLnRzIiwid2VicGFjazovLy8uL3JlZHV4L2NvbnN0YW50cy9Nb3ZpZUNvbnN0YW50cy50cyIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJtb21lbnRcIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJyZWFjdFwiIiwid2VicGFjazovLy9leHRlcm5hbCBcInJlYWN0LXJlZHV4XCIiXSwibmFtZXMiOlsiTW92aWUiLCJDb21wb25lbnQiLCJjb25zdHJ1Y3RvciIsInByb3BzIiwiY29tcG9uZW50RGlkTW91bnQiLCJzdGFydCIsIk1vbWVudCIsInN0YXJ0T2YiLCJlbmQiLCJhZGQiLCJkYXRhIiwiZm9ybWF0Iiwib25SZXF1ZXN0IiwicmVuZGVyIiwicmVzcG9uc2UiLCJlcnJvciIsImNvbnNvbGUiLCJsb2ciLCJtYXAiLCJtb3ZpZSIsImtleSIsInRpdGxlIiwibWFwU3RhdGVUb1Byb3BzIiwic3RhdGUiLCJmZXRjaCIsIm5vd1BsYXlpbmciLCJhY3Rpb24iLCJtYXBEaXNwYXRjaFRvUHJvcHMiLCJkaXNwYXRjaCIsInZhbHVlIiwibm93UGxheWluZ0ZldGNoIiwiY29ubmVjdCIsInR5cGUiLCJOT1dQTEFZSU5HRkVUQ0giLCJub3dQbGF5aW5nU3VjY2VzcyIsIk5PV1BMQVlJTkdTVUNDRVNTIiwibm93UGxheWluZ0ZhaWwiLCJOT1dQTEFZSU5HRkFJTCJdLCJtYXBwaW5ncyI6Ijs7UUFBQTtRQUNBOztRQUVBO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBLElBQUk7UUFDSjtRQUNBOztRQUVBO1FBQ0E7O1FBRUE7UUFDQTtRQUNBOzs7UUFHQTtRQUNBOztRQUVBO1FBQ0E7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Ozs7Ozs7Ozs7OztBQ1JQO0FBQUE7QUFBQTtBQUFBO0FBQU8sTUFBTUksZUFBZSxHQUFHLGlCQUF4QjtBQUNBLE1BQU1FLGlCQUFpQixHQUFHLG1CQUExQjtBQUNBLE1BQU1FLGNBQWMsR0FBRyxnQkFBdkIsQzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUNGUCxtQzs7Ozs7Ozs7Ozs7QUNBQSxrQzs7Ozs7Ozs7Ozs7QUNBQSx3QyIsImZpbGUiOiJzdGF0aWNcXGRldmVsb3BtZW50XFxwYWdlc1xcbW92aWUuanMiLCJzb3VyY2VzQ29udGVudCI6WyIgXHQvLyBUaGUgbW9kdWxlIGNhY2hlXG4gXHR2YXIgaW5zdGFsbGVkTW9kdWxlcyA9IHJlcXVpcmUoJy4uLy4uLy4uL3Nzci1tb2R1bGUtY2FjaGUuanMnKTtcblxuIFx0Ly8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbiBcdGZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblxuIFx0XHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcbiBcdFx0aWYoaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0pIHtcbiBcdFx0XHRyZXR1cm4gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0uZXhwb3J0cztcbiBcdFx0fVxuIFx0XHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuIFx0XHR2YXIgbW9kdWxlID0gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0gPSB7XG4gXHRcdFx0aTogbW9kdWxlSWQsXG4gXHRcdFx0bDogZmFsc2UsXG4gXHRcdFx0ZXhwb3J0czoge31cbiBcdFx0fTtcblxuIFx0XHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cbiBcdFx0dmFyIHRocmV3ID0gdHJ1ZTtcbiBcdFx0dHJ5IHtcbiBcdFx0XHRtb2R1bGVzW21vZHVsZUlkXS5jYWxsKG1vZHVsZS5leHBvcnRzLCBtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcbiBcdFx0XHR0aHJldyA9IGZhbHNlO1xuIFx0XHR9IGZpbmFsbHkge1xuIFx0XHRcdGlmKHRocmV3KSBkZWxldGUgaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF07XG4gXHRcdH1cblxuIFx0XHQvLyBGbGFnIHRoZSBtb2R1bGUgYXMgbG9hZGVkXG4gXHRcdG1vZHVsZS5sID0gdHJ1ZTtcblxuIFx0XHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuIFx0XHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG4gXHR9XG5cblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGVzIG9iamVjdCAoX193ZWJwYWNrX21vZHVsZXNfXylcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubSA9IG1vZHVsZXM7XG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlIGNhY2hlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmMgPSBpbnN0YWxsZWRNb2R1bGVzO1xuXG4gXHQvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9uIGZvciBoYXJtb255IGV4cG9ydHNcbiBcdF9fd2VicGFja19yZXF1aXJlX18uZCA9IGZ1bmN0aW9uKGV4cG9ydHMsIG5hbWUsIGdldHRlcikge1xuIFx0XHRpZighX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIG5hbWUpKSB7XG4gXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIG5hbWUsIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBnZXR0ZXIgfSk7XG4gXHRcdH1cbiBcdH07XG5cbiBcdC8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbiBcdF9fd2VicGFja19yZXF1aXJlX18uciA9IGZ1bmN0aW9uKGV4cG9ydHMpIHtcbiBcdFx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG4gXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG4gXHRcdH1cbiBcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbiBcdH07XG5cbiBcdC8vIGNyZWF0ZSBhIGZha2UgbmFtZXNwYWNlIG9iamVjdFxuIFx0Ly8gbW9kZSAmIDE6IHZhbHVlIGlzIGEgbW9kdWxlIGlkLCByZXF1aXJlIGl0XG4gXHQvLyBtb2RlICYgMjogbWVyZ2UgYWxsIHByb3BlcnRpZXMgb2YgdmFsdWUgaW50byB0aGUgbnNcbiBcdC8vIG1vZGUgJiA0OiByZXR1cm4gdmFsdWUgd2hlbiBhbHJlYWR5IG5zIG9iamVjdFxuIFx0Ly8gbW9kZSAmIDh8MTogYmVoYXZlIGxpa2UgcmVxdWlyZVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy50ID0gZnVuY3Rpb24odmFsdWUsIG1vZGUpIHtcbiBcdFx0aWYobW9kZSAmIDEpIHZhbHVlID0gX193ZWJwYWNrX3JlcXVpcmVfXyh2YWx1ZSk7XG4gXHRcdGlmKG1vZGUgJiA4KSByZXR1cm4gdmFsdWU7XG4gXHRcdGlmKChtb2RlICYgNCkgJiYgdHlwZW9mIHZhbHVlID09PSAnb2JqZWN0JyAmJiB2YWx1ZSAmJiB2YWx1ZS5fX2VzTW9kdWxlKSByZXR1cm4gdmFsdWU7XG4gXHRcdHZhciBucyA9IE9iamVjdC5jcmVhdGUobnVsbCk7XG4gXHRcdF9fd2VicGFja19yZXF1aXJlX18ucihucyk7XG4gXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShucywgJ2RlZmF1bHQnLCB7IGVudW1lcmFibGU6IHRydWUsIHZhbHVlOiB2YWx1ZSB9KTtcbiBcdFx0aWYobW9kZSAmIDIgJiYgdHlwZW9mIHZhbHVlICE9ICdzdHJpbmcnKSBmb3IodmFyIGtleSBpbiB2YWx1ZSkgX193ZWJwYWNrX3JlcXVpcmVfXy5kKG5zLCBrZXksIGZ1bmN0aW9uKGtleSkgeyByZXR1cm4gdmFsdWVba2V5XTsgfS5iaW5kKG51bGwsIGtleSkpO1xuIFx0XHRyZXR1cm4gbnM7XG4gXHR9O1xuXG4gXHQvLyBnZXREZWZhdWx0RXhwb3J0IGZ1bmN0aW9uIGZvciBjb21wYXRpYmlsaXR5IHdpdGggbm9uLWhhcm1vbnkgbW9kdWxlc1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5uID0gZnVuY3Rpb24obW9kdWxlKSB7XG4gXHRcdHZhciBnZXR0ZXIgPSBtb2R1bGUgJiYgbW9kdWxlLl9fZXNNb2R1bGUgP1xuIFx0XHRcdGZ1bmN0aW9uIGdldERlZmF1bHQoKSB7IHJldHVybiBtb2R1bGVbJ2RlZmF1bHQnXTsgfSA6XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0TW9kdWxlRXhwb3J0cygpIHsgcmV0dXJuIG1vZHVsZTsgfTtcbiBcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kKGdldHRlciwgJ2EnLCBnZXR0ZXIpO1xuIFx0XHRyZXR1cm4gZ2V0dGVyO1xuIFx0fTtcblxuIFx0Ly8gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSBmdW5jdGlvbihvYmplY3QsIHByb3BlcnR5KSB7IHJldHVybiBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqZWN0LCBwcm9wZXJ0eSk7IH07XG5cbiBcdC8vIF9fd2VicGFja19wdWJsaWNfcGF0aF9fXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnAgPSBcIlwiO1xuXG5cbiBcdC8vIExvYWQgZW50cnkgbW9kdWxlIGFuZCByZXR1cm4gZXhwb3J0c1xuIFx0cmV0dXJuIF9fd2VicGFja19yZXF1aXJlX18oX193ZWJwYWNrX3JlcXVpcmVfXy5zID0gNik7XG4iLCJpbXBvcnQgUmVhY3QsIHsgQ29tcG9uZW50IH0gZnJvbSAncmVhY3QnO1xyXG5pbXBvcnQgeyBjb25uZWN0IH0gZnJvbSAncmVhY3QtcmVkdXgnO1xyXG5pbXBvcnQgTW9tZW50IGZyb20gJ21vbWVudCc7XHJcbmltcG9ydCB7IG5vd1BsYXlpbmdGZXRjaCB9IGZyb20gJ3JlZHV4L2FjdGlvbnMvTW92aWVBY3Rpb25zJztcclxuaW1wb3J0IHsgTk9XUExBWUlOR1NVQ0NFU1MsIE5PV1BMQVlJTkdGQUlMIH0gZnJvbSAncmVkdXgvY29uc3RhbnRzL01vdmllQ29uc3RhbnRzJztcclxuXHJcbmNsYXNzIE1vdmllIGV4dGVuZHMgQ29tcG9uZW50PGFueSwgYW55PiB7XHJcbiAgICBjb25zdHJ1Y3Rvcihwcm9wczogYW55KSB7XHJcbiAgICAgIHN1cGVyKHByb3BzKTtcclxuICAgIH1cclxuICBcclxuICAgIGNvbXBvbmVudERpZE1vdW50KCkge1xyXG4gICAgICBjb25zdCBzdGFydCA9IE1vbWVudCgpLnN0YXJ0T2YoJ21vbnRoJyk7XHJcbiAgICAgIGNvbnN0IGVuZCAgID0gTW9tZW50KHN0YXJ0KS5hZGQoMiwgJ21vbnRoJyk7XHJcbiAgICAgIGNvbnN0IGRhdGEgPSB7XHJcbiAgICAgICAgJ3ByaW1hcnlfcmVsZWFzZV9kYXRlLmd0ZSc6IHN0YXJ0LmZvcm1hdCgnWVlZWS1NTS1ERCcpLFxyXG4gICAgICAgICdwcmltYXJ5X3JlbGVhc2VfZGF0ZS5sdGUnOiBlbmQuZm9ybWF0KCdZWVlZLU1NLUREJyksXHJcbiAgICAgIH07XHJcbiAgICAgIHRoaXMucHJvcHMub25SZXF1ZXN0KGRhdGEpO1xyXG4gICAgfVxyXG4gIFxyXG4gICAgcmVuZGVyKCkge1xyXG4gICAgICBjb25zdCB7IHJlc3BvbnNlLCBlcnJvciB9ID0gdGhpcy5wcm9wcztcclxuICAgICAgY29uc29sZS5sb2cocmVzcG9uc2UpO1xyXG4gICAgICByZXR1cm4gKFxyXG4gICAgICAgICBcclxuICAgICAgICByZXNwb25zZS5tYXAoKG1vdmllOiBhbnksIGtleTogbnVtYmVyKSA9PiB7XHJcbiAgICAgICAgICAgIHJldHVybiAoXHJcbiAgICAgICAgICAgIDxkaXY+e21vdmllLnRpdGxlfTwvZGl2PlxyXG4gICAgICAgICAgICApXHJcbiAgICAgICAgfSlcclxuICAgICAgICApO1xyXG4gICAgfVxyXG4gIH1cclxuICBcclxuICBjb25zdCBtYXBTdGF0ZVRvUHJvcHMgPSAoc3RhdGU6IGFueSkgPT4gKHtcclxuICAgIGZldGNoOiBzdGF0ZS5ub3dQbGF5aW5nLmZldGNoLFxyXG4gICAgcmVzcG9uc2U6IHN0YXRlLm5vd1BsYXlpbmcucmVzcG9uc2UsXHJcbiAgICBlcnJvcjogc3RhdGUubm93UGxheWluZy5lcnJvcixcclxuICAgIGFjdGlvbjogc3RhdGUubm93UGxheWluZy5hY3Rpb24sXHJcbiAgfSk7XHJcbiAgXHJcbiAgY29uc3QgbWFwRGlzcGF0Y2hUb1Byb3BzID0gKGRpc3BhdGNoOiBhbnkpID0+ICh7XHJcbiAgICBvblJlcXVlc3Q6ICh2YWx1ZTogb2JqZWN0KSA9PiBkaXNwYXRjaChub3dQbGF5aW5nRmV0Y2godmFsdWUpKSxcclxuICB9KTtcclxuICBcclxuZXhwb3J0IGRlZmF1bHQgY29ubmVjdChtYXBTdGF0ZVRvUHJvcHMsIG1hcERpc3BhdGNoVG9Qcm9wcykoTW92aWUpO1xyXG4gICIsImltcG9ydCB7XHJcbiAgICBOT1dQTEFZSU5HRkVUQ0gsXHJcbiAgICBOT1dQTEFZSU5HU1VDQ0VTUyxcclxuICAgIE5PV1BMQVlJTkdGQUlMLFxyXG4gIH0gZnJvbSAnLi4vY29uc3RhbnRzL01vdmllQ29uc3RhbnRzJztcclxuXHJcbmV4cG9ydCBjb25zdCBub3dQbGF5aW5nRmV0Y2ggPSAodmFsdWU6IG9iamVjdCkgPT4gKHsgdHlwZTogTk9XUExBWUlOR0ZFVENILCBkYXRhOiB2YWx1ZSB9KTtcclxuZXhwb3J0IGNvbnN0IG5vd1BsYXlpbmdTdWNjZXNzID0gKHZhbHVlOiBvYmplY3QpID0+ICh7IHR5cGU6IE5PV1BMQVlJTkdTVUNDRVNTLCBkYXRhOiB2YWx1ZSB9KTtcclxuZXhwb3J0IGNvbnN0IG5vd1BsYXlpbmdGYWlsID0gKHZhbHVlOiBvYmplY3QpID0+ICh7IHR5cGU6IE5PV1BMQVlJTkdGQUlMLCBkYXRhOiB2YWx1ZSB9KTsiLCJleHBvcnQgY29uc3QgTk9XUExBWUlOR0ZFVENIID0gJ05PV1BMQVlJTkdGRVRDSCc7XHJcbmV4cG9ydCBjb25zdCBOT1dQTEFZSU5HU1VDQ0VTUyA9ICdOT1dQTEFZSU5HU1VDQ0VTUyc7XHJcbmV4cG9ydCBjb25zdCBOT1dQTEFZSU5HRkFJTCA9ICdOT1dQTEFZSU5HRkFJTCc7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwibW9tZW50XCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcInJlYWN0XCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcInJlYWN0LXJlZHV4XCIpOyJdLCJzb3VyY2VSb290IjoiIn0=