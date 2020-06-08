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
/******/ 	return __webpack_require__(__webpack_require__.s = 0);
/******/ })
/************************************************************************/
/******/ ({

/***/ "../next-server/lib/utils":
/*!*****************************************************!*\
  !*** external "next/dist/next-server/lib/utils.js" ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("next/dist/next-server/lib/utils.js");

/***/ }),

/***/ "./configurations/redux.ts":
/*!*********************************!*\
  !*** ./configurations/redux.ts ***!
  \*********************************/
/*! exports provided: persistSecretKey, persistBlackList, defaultState, defaultAction */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "persistSecretKey", function() { return persistSecretKey; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "persistBlackList", function() { return persistBlackList; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "defaultState", function() { return defaultState; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "defaultAction", function() { return defaultAction; });
const persistSecretKey = 'abang-baso-jangan-kasih-tau-sipa-siapa-ya';
const persistBlackList = ['auth', [// 'data',
// 'res',
'action']];
const defaultState = {
  fetch: false,
  error: null,
  response: null,
  action: null
};
const defaultAction = {
  type: null,
  data: null
};

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/interopRequireDefault.js":
/*!**********************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/interopRequireDefault.js ***!
  \**********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function _interopRequireDefault(obj) {
  return obj && obj.__esModule ? obj : {
    "default": obj
  };
}

module.exports = _interopRequireDefault;

/***/ }),

/***/ "./node_modules/materialize-css/dist/css/materialize.min.css":
/*!*******************************************************************!*\
  !*** ./node_modules/materialize-css/dist/css/materialize.min.css ***!
  \*******************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {



/***/ }),

/***/ "./node_modules/next/app.js":
/*!**********************************!*\
  !*** ./node_modules/next/app.js ***!
  \**********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! ./dist/pages/_app */ "./node_modules/next/dist/pages/_app.js")


/***/ }),

/***/ "./node_modules/next/dist/pages/_app.js":
/*!**********************************************!*\
  !*** ./node_modules/next/dist/pages/_app.js ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _interopRequireDefault = __webpack_require__(/*! @babel/runtime/helpers/interopRequireDefault */ "./node_modules/@babel/runtime/helpers/interopRequireDefault.js");

exports.__esModule = true;
exports.Container = Container;
exports.createUrl = createUrl;
exports.default = void 0;

var _react = _interopRequireDefault(__webpack_require__(/*! react */ "react"));

var _utils = __webpack_require__(/*! ../next-server/lib/utils */ "../next-server/lib/utils");

exports.AppInitialProps = _utils.AppInitialProps;
/**
* `App` component is used for initialize of pages. It allows for overwriting and full control of the `page` initialization.
* This allows for keeping state between navigation, custom error handling, injecting additional data.
*/

async function appGetInitialProps({
  Component,
  ctx
}) {
  const pageProps = await (0, _utils.loadGetInitialProps)(Component, ctx);
  return {
    pageProps
  };
}

class App extends _react.default.Component {
  // Kept here for backwards compatibility.
  // When someone ended App they could call `super.componentDidCatch`.
  // @deprecated This method is no longer needed. Errors are caught at the top level
  componentDidCatch(error, _errorInfo) {
    throw error;
  }

  render() {
    const {
      router,
      Component,
      pageProps,
      __N_SSG,
      __N_SSP
    } = this.props;
    return /*#__PURE__*/_react.default.createElement(Component, Object.assign({}, pageProps, // we don't add the legacy URL prop if it's using non-legacy
    // methods like getStaticProps and getServerSideProps
    !(__N_SSG || __N_SSP) ? {
      url: createUrl(router)
    } : {}));
  }

}

exports.default = App;
App.origGetInitialProps = appGetInitialProps;
App.getInitialProps = appGetInitialProps;
let warnContainer;
let warnUrl;

if (true) {
  warnContainer = (0, _utils.execOnce)(() => {
    console.warn(`Warning: the \`Container\` in \`_app\` has been deprecated and should be removed. https://err.sh/vercel/next.js/app-container-deprecated`);
  });
  warnUrl = (0, _utils.execOnce)(() => {
    console.error(`Warning: the 'url' property is deprecated. https://err.sh/vercel/next.js/url-deprecated`);
  });
} // @deprecated noop for now until removal


function Container(p) {
  if (true) warnContainer();
  return p.children;
}

function createUrl(router) {
  // This is to make sure we don't references the router object at call time
  const {
    pathname,
    asPath,
    query
  } = router;
  return {
    get query() {
      if (true) warnUrl();
      return query;
    },

    get pathname() {
      if (true) warnUrl();
      return pathname;
    },

    get asPath() {
      if (true) warnUrl();
      return asPath;
    },

    back: () => {
      if (true) warnUrl();
      router.back();
    },
    push: (url, as) => {
      if (true) warnUrl();
      return router.push(url, as);
    },
    pushTo: (href, as) => {
      if (true) warnUrl();
      const pushRoute = as ? href : '';
      const pushUrl = as || href;
      return router.push(pushRoute, pushUrl);
    },
    replace: (url, as) => {
      if (true) warnUrl();
      return router.replace(url, as);
    },
    replaceTo: (href, as) => {
      if (true) warnUrl();
      const replaceRoute = as ? href : '';
      const replaceUrl = as || href;
      return router.replace(replaceRoute, replaceUrl);
    }
  };
}

/***/ }),

/***/ "./pages/_app.tsx":
/*!************************!*\
  !*** ./pages/_app.tsx ***!
  \************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var next_app__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/app */ "./node_modules/next/app.js");
/* harmony import */ var next_app__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_app__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var redux_core_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! redux/core/component */ "./redux/core/component.tsx");
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react-redux */ "react-redux");
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react_redux__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var redux_persist__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! redux-persist */ "redux-persist");
/* harmony import */ var redux_persist__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(redux_persist__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var redux_persist_integration_react__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! redux-persist/integration/react */ "redux-persist/integration/react");
/* harmony import */ var redux_persist_integration_react__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(redux_persist_integration_react__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var materialize_css_dist_css_materialize_min_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! materialize-css/dist/css/materialize.min.css */ "./node_modules/materialize-css/dist/css/materialize.min.css");
/* harmony import */ var materialize_css_dist_css_materialize_min_css__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(materialize_css_dist_css_materialize_min_css__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var styles_app_scss__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! styles/_app.scss */ "./styles/_app.scss");
/* harmony import */ var styles_app_scss__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(styles_app_scss__WEBPACK_IMPORTED_MODULE_7__);
var _jsxFileName = "G:\\TAPERA\\nextworkspace\\tapera-frontend-package-v2\\pages\\_app.tsx";

var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }









class MyApp extends next_app__WEBPACK_IMPORTED_MODULE_1___default.a {
  constructor(props) {
    super(props);
    this.persistor = Object(redux_persist__WEBPACK_IMPORTED_MODULE_4__["persistStore"])(props.reduxStore);
  }

  render() {
    const {
      Component,
      pageProps,
      reduxStore
    } = this.props;
    return __jsx(react_redux__WEBPACK_IMPORTED_MODULE_3__["Provider"], {
      store: reduxStore,
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 19,
        columnNumber: 7
      }
    }, __jsx(redux_persist_integration_react__WEBPACK_IMPORTED_MODULE_5__["PersistGate"], {
      loading: __jsx(Component, _extends({}, pageProps, {
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 21,
          columnNumber: 20
        }
      })),
      persistor: this.persistor,
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 20,
        columnNumber: 9
      }
    }, __jsx(Component, _extends({}, pageProps, {
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 24,
        columnNumber: 11
      }
    }))));
  }

}

/* harmony default export */ __webpack_exports__["default"] = (Object(redux_core_component__WEBPACK_IMPORTED_MODULE_2__["default"])(MyApp));

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

/***/ "./redux/constants/TestConstants.ts":
/*!******************************************!*\
  !*** ./redux/constants/TestConstants.ts ***!
  \******************************************/
/*! exports provided: TESTREDUX */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TESTREDUX", function() { return TESTREDUX; });
const TESTREDUX = 'TESTREDUX';

/***/ }),

/***/ "./redux/core/component.tsx":
/*!**********************************!*\
  !*** ./redux/core/component.tsx ***!
  \**********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return withReduxStore; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var redux_core_store__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! redux/core/store */ "./redux/core/store.ts");
var _jsxFileName = "G:\\TAPERA\\nextworkspace\\tapera-frontend-package-v2\\redux\\core\\component.tsx";

var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }



const isServer = true;
const __NEXT_REDUX_STORE__ = '__NEXT_REDUX_STORE__';

function getOrCreateStore(initialState) {
  // Always make a new store if server, otherwise state is shared between requests
  if (isServer) {
    return Object(redux_core_store__WEBPACK_IMPORTED_MODULE_1__["initializeStore"])(initialState);
  } // Create store if unavailable on the client and set it on the window object


  if (!window[__NEXT_REDUX_STORE__]) {
    window[__NEXT_REDUX_STORE__] = Object(redux_core_store__WEBPACK_IMPORTED_MODULE_1__["initializeStore"])(initialState);
  }

  return window[__NEXT_REDUX_STORE__];
}

function withReduxStore(App) {
  return class AppWithRedux extends react__WEBPACK_IMPORTED_MODULE_0__["Component"] {
    static async getInitialProps(appContext) {
      // Get or Create the store with `undefined` as initialState
      // This allows you to set a custom default initialState
      const reduxStore = getOrCreateStore(); // Provide the store to getInitialProps of pages

      appContext.ctx.reduxStore = reduxStore;
      let appProps = {};

      if (typeof App.getInitialProps === 'function') {
        appProps = await App.getInitialProps(appContext);
      }

      return _objectSpread(_objectSpread({}, appProps), {}, {
        initialReduxState: reduxStore.getState()
      });
    }

    constructor(props) {
      super(props);
      this.reduxStore = getOrCreateStore(props.initialReduxState);
    }

    render() {
      return __jsx(App, _extends({}, this.props, {
        reduxStore: this.reduxStore,
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 47,
          columnNumber: 14
        }
      }));
    }

  };
}

/***/ }),

/***/ "./redux/core/hook.ts":
/*!****************************!*\
  !*** ./redux/core/hook.ts ***!
  \****************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/**
 * @author: dwi.setiyadi@gmail.com
*/
// import storage from 'redux-persist/lib/storage';
const hook = (state, action) => {
  // do your hook here
  return {
    state,
    action
  };
};

/* harmony default export */ __webpack_exports__["default"] = (hook);

/***/ }),

/***/ "./redux/core/persist.ts":
/*!*******************************!*\
  !*** ./redux/core/persist.ts ***!
  \*******************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var redux_persist_lib_storage__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! redux-persist/lib/storage */ "redux-persist/lib/storage");
/* harmony import */ var redux_persist_lib_storage__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(redux_persist_lib_storage__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var redux_persist_transform_encrypt__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! redux-persist-transform-encrypt */ "redux-persist-transform-encrypt");
/* harmony import */ var redux_persist_transform_encrypt__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(redux_persist_transform_encrypt__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var redux_persist_transform_filter__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! redux-persist-transform-filter */ "redux-persist-transform-filter");
/* harmony import */ var redux_persist_transform_filter__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(redux_persist_transform_filter__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var configurations_redux__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! configurations/redux */ "./configurations/redux.ts");




const encryptor = redux_persist_transform_encrypt__WEBPACK_IMPORTED_MODULE_1___default()({
  secretKey: configurations_redux__WEBPACK_IMPORTED_MODULE_3__["persistSecretKey"],

  onError(error) {
    console.log('createEncryptor error ', error); // eslint-disable-line
  }

});
const saveAuthSubsetBlacklistFilter = Object(redux_persist_transform_filter__WEBPACK_IMPORTED_MODULE_2__["createBlacklistFilter"])(configurations_redux__WEBPACK_IMPORTED_MODULE_3__["persistBlackList"]);
const persistConfig = {
  active: true,
  reducerVersion: '1.0',
  storeConfig: {
    key: 'root',
    storage: (redux_persist_lib_storage__WEBPACK_IMPORTED_MODULE_0___default()),
    // whitelist: ['auth', 'notification'],
    transforms: [saveAuthSubsetBlacklistFilter, encryptor] // transform: [encryptor],

  }
};
/* harmony default export */ __webpack_exports__["default"] = (persistConfig);

/***/ }),

/***/ "./redux/core/reducer.ts":
/*!*******************************!*\
  !*** ./redux/core/reducer.ts ***!
  \*******************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var redux__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! redux */ "redux");
/* harmony import */ var redux__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(redux__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var redux_reducers__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! redux/reducers */ "./redux/reducers/index.ts");
/* harmony import */ var redux_core_hook__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! redux/core/hook */ "./redux/core/hook.ts");



let reduxReducer = Object(redux__WEBPACK_IMPORTED_MODULE_0__["combineReducers"])(redux_reducers__WEBPACK_IMPORTED_MODULE_1__["default"]);

if (Object.keys(redux_reducers__WEBPACK_IMPORTED_MODULE_1__["default"]).length === 0 && redux_reducers__WEBPACK_IMPORTED_MODULE_1__["default"].constructor === Object) {
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const initialReducer = (state = [], action) => state;

  reduxReducer = Object(redux__WEBPACK_IMPORTED_MODULE_0__["combineReducers"])({
    initialReducer
  });
}

const hooks = (state, action) => {
  const hook = Object(redux_core_hook__WEBPACK_IMPORTED_MODULE_2__["default"])(state, action);
  return reduxReducer(hook.state, hook.action);
};

/* harmony default export */ __webpack_exports__["default"] = (hooks);

/***/ }),

/***/ "./redux/core/saga.ts":
/*!****************************!*\
  !*** ./redux/core/saga.ts ***!
  \****************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return reduxSaga; });
/* harmony import */ var redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! redux-saga/effects */ "redux-saga/effects");
/* harmony import */ var redux_saga_effects__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var redux_sagas__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! redux/sagas */ "./redux/sagas/index.ts");


function* reduxSaga() {
  yield Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__["all"])(redux_sagas__WEBPACK_IMPORTED_MODULE_1__["default"]);
}

/***/ }),

/***/ "./redux/core/store.ts":
/*!*****************************!*\
  !*** ./redux/core/store.ts ***!
  \*****************************/
/*! exports provided: initializeStore */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "initializeStore", function() { return initializeStore; });
/* harmony import */ var redux__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! redux */ "redux");
/* harmony import */ var redux__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(redux__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var redux_devtools_extension__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! redux-devtools-extension */ "redux-devtools-extension");
/* harmony import */ var redux_devtools_extension__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(redux_devtools_extension__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var redux_persist__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! redux-persist */ "redux-persist");
/* harmony import */ var redux_persist__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(redux_persist__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var redux_saga__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! redux-saga */ "redux-saga");
/* harmony import */ var redux_saga__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(redux_saga__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var redux_core_reducer__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! redux/core/reducer */ "./redux/core/reducer.ts");
/* harmony import */ var redux_core_persist__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! redux/core/persist */ "./redux/core/persist.ts");
/* harmony import */ var redux_core_saga__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! redux/core/saga */ "./redux/core/saga.ts");






 // import { defaultState } from 'configurations/redux';

const persistedReducer = Object(redux_persist__WEBPACK_IMPORTED_MODULE_2__["persistReducer"])(redux_core_persist__WEBPACK_IMPORTED_MODULE_5__["default"].storeConfig, redux_core_reducer__WEBPACK_IMPORTED_MODULE_4__["default"]);
const sagaMiddleware = redux_saga__WEBPACK_IMPORTED_MODULE_3___default()();
const middlewares = [sagaMiddleware];
function initializeStore(initialState) {
  const store = Object(redux__WEBPACK_IMPORTED_MODULE_0__["createStore"])(persistedReducer, initialState, Object(redux_devtools_extension__WEBPACK_IMPORTED_MODULE_1__["composeWithDevTools"])(Object(redux__WEBPACK_IMPORTED_MODULE_0__["applyMiddleware"])(...middlewares)));
  sagaMiddleware.run(redux_core_saga__WEBPACK_IMPORTED_MODULE_6__["default"]);
  return store;
}

/***/ }),

/***/ "./redux/reducers/MovieReducers.ts":
/*!*****************************************!*\
  !*** ./redux/reducers/MovieReducers.ts ***!
  \*****************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var configurations_redux__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! configurations/redux */ "./configurations/redux.ts");
/* harmony import */ var _constants_MovieConstants__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../constants/MovieConstants */ "./redux/constants/MovieConstants.ts");
function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }




const ReducerNowPlayingDashboard = (state = configurations_redux__WEBPACK_IMPORTED_MODULE_0__["defaultState"], action = configurations_redux__WEBPACK_IMPORTED_MODULE_0__["defaultAction"]) => {
  switch (action.type) {
    case _constants_MovieConstants__WEBPACK_IMPORTED_MODULE_1__["NOWPLAYINGFETCH"]:
      return _objectSpread(_objectSpread({}, state), {}, {
        fetch: true,
        data: action.data,
        action: action.type
      });

    case _constants_MovieConstants__WEBPACK_IMPORTED_MODULE_1__["NOWPLAYINGSUCCESS"]:
      return _objectSpread(_objectSpread({}, state), {}, {
        fetch: false,
        response: action.data,
        action: action.type
      });

    case _constants_MovieConstants__WEBPACK_IMPORTED_MODULE_1__["NOWPLAYINGFAIL"]:
      return _objectSpread(_objectSpread({}, state), {}, {
        fetch: false,
        error: action.data,
        action: action.type
      });

    default:
      return state;
  }
};

/* harmony default export */ __webpack_exports__["default"] = (ReducerNowPlayingDashboard);

/***/ }),

/***/ "./redux/reducers/TestReducers.ts":
/*!****************************************!*\
  !*** ./redux/reducers/TestReducers.ts ***!
  \****************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var redux_constants_TestConstants__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! redux/constants/TestConstants */ "./redux/constants/TestConstants.ts");
/* harmony import */ var configurations_redux__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! configurations/redux */ "./configurations/redux.ts");
function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }




const TestReducers = (state = configurations_redux__WEBPACK_IMPORTED_MODULE_1__["defaultState"], action = configurations_redux__WEBPACK_IMPORTED_MODULE_1__["defaultAction"]) => {
  switch (action.type) {
    case redux_constants_TestConstants__WEBPACK_IMPORTED_MODULE_0__["TESTREDUX"]:
      return _objectSpread(_objectSpread({}, state), {}, {
        response: action.data,
        action: action.type
      });

    default:
      return state;
  }
};

/* harmony default export */ __webpack_exports__["default"] = (TestReducers);

/***/ }),

/***/ "./redux/reducers/index.ts":
/*!*********************************!*\
  !*** ./redux/reducers/index.ts ***!
  \*********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var redux_reducers_TestReducers__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! redux/reducers/TestReducers */ "./redux/reducers/TestReducers.ts");
/* harmony import */ var redux_reducers_MovieReducers__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! redux/reducers/MovieReducers */ "./redux/reducers/MovieReducers.ts");


const reducers = {
  test: redux_reducers_TestReducers__WEBPACK_IMPORTED_MODULE_0__["default"],
  nowPlaying: redux_reducers_MovieReducers__WEBPACK_IMPORTED_MODULE_1__["default"]
};
/* harmony default export */ __webpack_exports__["default"] = (reducers);

/***/ }),

/***/ "./redux/sagas/MovieSagas.ts":
/*!***********************************!*\
  !*** ./redux/sagas/MovieSagas.ts ***!
  \***********************************/
/*! exports provided: watcherNowPlaying */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "watcherNowPlaying", function() { return watcherNowPlaying; });
/* harmony import */ var redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! redux-saga/effects */ "redux-saga/effects");
/* harmony import */ var redux_saga_effects__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _constants_MovieConstants__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../constants/MovieConstants */ "./redux/constants/MovieConstants.ts");
/* harmony import */ var _actions_MovieActions__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../actions/MovieActions */ "./redux/actions/MovieActions.ts");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! axios */ "axios");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_3__);





function* workerSagaNowPlaying(params) {
  try {
    const response = yield Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__["call"])(callApi);

    if (response.status === 200 && response.data.results.length > 0) {
      yield Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__["put"])(Object(_actions_MovieActions__WEBPACK_IMPORTED_MODULE_2__["nowPlayingSuccess"])(response.data.results));
    } else {
      yield Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__["put"])(Object(_actions_MovieActions__WEBPACK_IMPORTED_MODULE_2__["nowPlayingFail"])(response.data.status_message));
    }
  } catch (error) {
    yield Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__["put"])(Object(_actions_MovieActions__WEBPACK_IMPORTED_MODULE_2__["nowPlayingFail"])(error.message));
  }
}

function callApi() {
  return axios__WEBPACK_IMPORTED_MODULE_3___default.a.get("https://api.themoviedb.org/3/discover/movie?api_key=2cd60e70e23d1aac41f24a242c1e08f8&primary_release_date.gte=2020-06-01&primary_release_date.lte=2020-08-30");
}

const watcherNowPlaying = [Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__["takeLatest"])(_constants_MovieConstants__WEBPACK_IMPORTED_MODULE_1__["NOWPLAYINGFETCH"], workerSagaNowPlaying)];

/***/ }),

/***/ "./redux/sagas/index.ts":
/*!******************************!*\
  !*** ./redux/sagas/index.ts ***!
  \******************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var redux_sagas_MovieSagas__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! redux/sagas/MovieSagas */ "./redux/sagas/MovieSagas.ts");

/* harmony default export */ __webpack_exports__["default"] = ([...redux_sagas_MovieSagas__WEBPACK_IMPORTED_MODULE_0__["watcherNowPlaying"]]);

/***/ }),

/***/ "./styles/_app.scss":
/*!**************************!*\
  !*** ./styles/_app.scss ***!
  \**************************/
/*! no static exports found */
/***/ (function(module, exports) {



/***/ }),

/***/ 0:
/*!*****************************************!*\
  !*** multi private-next-pages/_app.tsx ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! private-next-pages/_app.tsx */"./pages/_app.tsx");


/***/ }),

/***/ "axios":
/*!************************!*\
  !*** external "axios" ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("axios");

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

/***/ }),

/***/ "redux":
/*!************************!*\
  !*** external "redux" ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("redux");

/***/ }),

/***/ "redux-devtools-extension":
/*!*******************************************!*\
  !*** external "redux-devtools-extension" ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("redux-devtools-extension");

/***/ }),

/***/ "redux-persist":
/*!********************************!*\
  !*** external "redux-persist" ***!
  \********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("redux-persist");

/***/ }),

/***/ "redux-persist-transform-encrypt":
/*!**************************************************!*\
  !*** external "redux-persist-transform-encrypt" ***!
  \**************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("redux-persist-transform-encrypt");

/***/ }),

/***/ "redux-persist-transform-filter":
/*!*************************************************!*\
  !*** external "redux-persist-transform-filter" ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("redux-persist-transform-filter");

/***/ }),

/***/ "redux-persist/integration/react":
/*!**************************************************!*\
  !*** external "redux-persist/integration/react" ***!
  \**************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("redux-persist/integration/react");

/***/ }),

/***/ "redux-persist/lib/storage":
/*!********************************************!*\
  !*** external "redux-persist/lib/storage" ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("redux-persist/lib/storage");

/***/ }),

/***/ "redux-saga":
/*!*****************************!*\
  !*** external "redux-saga" ***!
  \*****************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("redux-saga");

/***/ }),

/***/ "redux-saga/effects":
/*!*************************************!*\
  !*** external "redux-saga/effects" ***!
  \*************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("redux-saga/effects");

/***/ })

/******/ });
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwibmV4dC9kaXN0L25leHQtc2VydmVyL2xpYi91dGlscy5qc1wiIiwid2VicGFjazovLy8uL2NvbmZpZ3VyYXRpb25zL3JlZHV4LnRzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9AYmFiZWwvcnVudGltZS9oZWxwZXJzL2ludGVyb3BSZXF1aXJlRGVmYXVsdC5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvbmV4dC9hcHAuanMiLCJ3ZWJwYWNrOi8vLy4uLy4uL3BhZ2VzL19hcHAudHN4Iiwid2VicGFjazovLy8uL3BhZ2VzL19hcHAudHN4Iiwid2VicGFjazovLy8uL3JlZHV4L2FjdGlvbnMvTW92aWVBY3Rpb25zLnRzIiwid2VicGFjazovLy8uL3JlZHV4L2NvbnN0YW50cy9Nb3ZpZUNvbnN0YW50cy50cyIsIndlYnBhY2s6Ly8vLi9yZWR1eC9jb25zdGFudHMvVGVzdENvbnN0YW50cy50cyIsIndlYnBhY2s6Ly8vLi9yZWR1eC9jb3JlL2NvbXBvbmVudC50c3giLCJ3ZWJwYWNrOi8vLy4vcmVkdXgvY29yZS9ob29rLnRzIiwid2VicGFjazovLy8uL3JlZHV4L2NvcmUvcGVyc2lzdC50cyIsIndlYnBhY2s6Ly8vLi9yZWR1eC9jb3JlL3JlZHVjZXIudHMiLCJ3ZWJwYWNrOi8vLy4vcmVkdXgvY29yZS9zYWdhLnRzIiwid2VicGFjazovLy8uL3JlZHV4L2NvcmUvc3RvcmUudHMiLCJ3ZWJwYWNrOi8vLy4vcmVkdXgvcmVkdWNlcnMvTW92aWVSZWR1Y2Vycy50cyIsIndlYnBhY2s6Ly8vLi9yZWR1eC9yZWR1Y2Vycy9UZXN0UmVkdWNlcnMudHMiLCJ3ZWJwYWNrOi8vLy4vcmVkdXgvcmVkdWNlcnMvaW5kZXgudHMiLCJ3ZWJwYWNrOi8vLy4vcmVkdXgvc2FnYXMvTW92aWVTYWdhcy50cyIsIndlYnBhY2s6Ly8vLi9yZWR1eC9zYWdhcy9pbmRleC50cyIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJheGlvc1wiIiwid2VicGFjazovLy9leHRlcm5hbCBcInJlYWN0XCIiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwicmVhY3QtcmVkdXhcIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJyZWR1eFwiIiwid2VicGFjazovLy9leHRlcm5hbCBcInJlZHV4LWRldnRvb2xzLWV4dGVuc2lvblwiIiwid2VicGFjazovLy9leHRlcm5hbCBcInJlZHV4LXBlcnNpc3RcIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJyZWR1eC1wZXJzaXN0LXRyYW5zZm9ybS1lbmNyeXB0XCIiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwicmVkdXgtcGVyc2lzdC10cmFuc2Zvcm0tZmlsdGVyXCIiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwicmVkdXgtcGVyc2lzdC9pbnRlZ3JhdGlvbi9yZWFjdFwiIiwid2VicGFjazovLy9leHRlcm5hbCBcInJlZHV4LXBlcnNpc3QvbGliL3N0b3JhZ2VcIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJyZWR1eC1zYWdhXCIiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwicmVkdXgtc2FnYS9lZmZlY3RzXCIiXSwibmFtZXMiOlsicGVyc2lzdFNlY3JldEtleSIsInBlcnNpc3RCbGFja0xpc3QiLCJkZWZhdWx0U3RhdGUiLCJmZXRjaCIsImVycm9yIiwicmVzcG9uc2UiLCJhY3Rpb24iLCJkZWZhdWx0QWN0aW9uIiwidHlwZSIsImRhdGEiLCJwYWdlUHJvcHMiLCJSZWFjdCIsIkNvbXBvbmVudCIsImNvbXBvbmVudERpZENhdGNoIiwicmVuZGVyIiwiX19OX1NTRyIsInVybCIsImNyZWF0ZVVybCIsIkFwcCIsIm9yaWdHZXRJbml0aWFsUHJvcHMiLCJhcHBHZXRJbml0aWFsUHJvcHMiLCJnZXRJbml0aWFsUHJvcHMiLCJ3YXJuQ29udGFpbmVyIiwiY29uc29sZSIsIndhcm5VcmwiLCJwIiwiYmFjayIsInJvdXRlciIsInB1c2giLCJwdXNoVG8iLCJwdXNoUm91dGUiLCJhcyIsInB1c2hVcmwiLCJyZXBsYWNlIiwicmVwbGFjZVRvIiwicmVwbGFjZVJvdXRlIiwicmVwbGFjZVVybCIsIk15QXBwIiwiY29uc3RydWN0b3IiLCJwcm9wcyIsInBlcnNpc3RvciIsInBlcnNpc3RTdG9yZSIsInJlZHV4U3RvcmUiLCJ3aXRoUmVkdXhTdG9yZSIsIm5vd1BsYXlpbmdGZXRjaCIsInZhbHVlIiwiTk9XUExBWUlOR0ZFVENIIiwibm93UGxheWluZ1N1Y2Nlc3MiLCJOT1dQTEFZSU5HU1VDQ0VTUyIsIm5vd1BsYXlpbmdGYWlsIiwiTk9XUExBWUlOR0ZBSUwiLCJURVNUUkVEVVgiLCJpc1NlcnZlciIsIl9fTkVYVF9SRURVWF9TVE9SRV9fIiwiZ2V0T3JDcmVhdGVTdG9yZSIsImluaXRpYWxTdGF0ZSIsImluaXRpYWxpemVTdG9yZSIsIndpbmRvdyIsIkFwcFdpdGhSZWR1eCIsImFwcENvbnRleHQiLCJjdHgiLCJhcHBQcm9wcyIsImluaXRpYWxSZWR1eFN0YXRlIiwiZ2V0U3RhdGUiLCJob29rIiwic3RhdGUiLCJlbmNyeXB0b3IiLCJjcmVhdGVFbmNyeXB0b3IiLCJzZWNyZXRLZXkiLCJvbkVycm9yIiwibG9nIiwic2F2ZUF1dGhTdWJzZXRCbGFja2xpc3RGaWx0ZXIiLCJjcmVhdGVCbGFja2xpc3RGaWx0ZXIiLCJwZXJzaXN0Q29uZmlnIiwiYWN0aXZlIiwicmVkdWNlclZlcnNpb24iLCJzdG9yZUNvbmZpZyIsImtleSIsInN0b3JhZ2UiLCJ0cmFuc2Zvcm1zIiwicmVkdXhSZWR1Y2VyIiwiY29tYmluZVJlZHVjZXJzIiwiTG9hZFJlZHVjZXJzIiwiT2JqZWN0Iiwia2V5cyIsImxlbmd0aCIsImluaXRpYWxSZWR1Y2VyIiwiaG9va3MiLCJob29rUmVkdWNlciIsInJlZHV4U2FnYSIsImFsbCIsIkxvYWRTYWdhcyIsInBlcnNpc3RlZFJlZHVjZXIiLCJwZXJzaXN0UmVkdWNlciIsInBlcnNpc3QiLCJyZWR1Y2VyIiwic2FnYU1pZGRsZXdhcmUiLCJjcmVhdGVTYWdhTWlkZGxld2FyZSIsIm1pZGRsZXdhcmVzIiwic3RvcmUiLCJjcmVhdGVTdG9yZSIsImNvbXBvc2VXaXRoRGV2VG9vbHMiLCJhcHBseU1pZGRsZXdhcmUiLCJydW4iLCJzYWdhIiwiUmVkdWNlck5vd1BsYXlpbmdEYXNoYm9hcmQiLCJUZXN0UmVkdWNlcnMiLCJyZWR1Y2VycyIsInRlc3QiLCJub3dQbGF5aW5nIiwiTW92aWVSZWR1Y2VycyIsIndvcmtlclNhZ2FOb3dQbGF5aW5nIiwicGFyYW1zIiwiY2FsbCIsImNhbGxBcGkiLCJzdGF0dXMiLCJyZXN1bHRzIiwicHV0Iiwic3RhdHVzX21lc3NhZ2UiLCJtZXNzYWdlIiwiYXhpb3MiLCJnZXQiLCJ3YXRjaGVyTm93UGxheWluZyIsInRha2VMYXRlc3QiXSwibWFwcGluZ3MiOiI7O1FBQUE7UUFDQTs7UUFFQTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQSxJQUFJO1FBQ0o7UUFDQTs7UUFFQTtRQUNBOztRQUVBO1FBQ0E7UUFDQTs7O1FBR0E7UUFDQTs7UUFFQTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBLDBDQUEwQyxnQ0FBZ0M7UUFDMUU7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQSx3REFBd0Qsa0JBQWtCO1FBQzFFO1FBQ0EsaURBQWlELGNBQWM7UUFDL0Q7O1FBRUE7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBLHlDQUF5QyxpQ0FBaUM7UUFDMUUsZ0hBQWdILG1CQUFtQixFQUFFO1FBQ3JJO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0EsMkJBQTJCLDBCQUEwQixFQUFFO1FBQ3ZELGlDQUFpQyxlQUFlO1FBQ2hEO1FBQ0E7UUFDQTs7UUFFQTtRQUNBLHNEQUFzRCwrREFBK0Q7O1FBRXJIO1FBQ0E7OztRQUdBO1FBQ0E7Ozs7Ozs7Ozs7OztBQ3hGQSwrRDs7Ozs7Ozs7Ozs7O0FDQUE7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RSwrRUFBaUIsQ0FBQzFDLFFBQVEsQ0FBQ0ksSUFBVCxDQUFjMkcsT0FBZixDQUFsQixDQUFUO0FBQ0gsS0FGRCxNQUVPO0FBQ0gsWUFBTUMsOERBQUcsQ0FBQ3BFLDRFQUFjLENBQUM1QyxRQUFRLENBQUNJLElBQVQsQ0FBYzZHLGNBQWYsQ0FBZixDQUFUO0FBQ0g7QUFDSixHQVBELENBT0UsT0FBT2xILEtBQVAsRUFBYztBQUNaLFVBQU1pSCw4REFBRyxDQUFDcEUsNEVBQWMsQ0FBQzdDLEtBQUssQ0FBQ21ILE9BQVAsQ0FBZixDQUFUO0FBQ0g7QUFDSjs7QUFFRCxTQUFTTCxPQUFULEdBQW1CO0FBQ2YsU0FBUU0sNENBQUssQ0FBQ0MsR0FBTixDQUFVLDhKQUFWLENBQVI7QUFFSDs7QUFJTSxNQUFNQyxpQkFBaUIsR0FBRyxDQUM3QkMscUVBQVUsQ0FBQzdFLHlFQUFELEVBQWtCaUUsb0JBQWxCLENBRG1CLENBQTFCLEM7Ozs7Ozs7Ozs7OztBQ25DUDtBQUFBO0FBQUE7QUFDZSxnRUFDYixHQUFHVyx3RUFEVSxDQUFmLEU7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUNEQSxrQzs7Ozs7Ozs7Ozs7QUNBQSxrQzs7Ozs7Ozs7Ozs7QUNBQSx3Qzs7Ozs7Ozs7Ozs7QUNBQSxrQzs7Ozs7Ozs7Ozs7QUNBQSxxRDs7Ozs7Ozs7Ozs7QUNBQSwwQzs7Ozs7Ozs7Ozs7QUNBQSw0RDs7Ozs7Ozs7Ozs7QUNBQSwyRDs7Ozs7Ozs7Ozs7QUNBQSw0RDs7Ozs7Ozs7Ozs7QUNBQSxzRDs7Ozs7Ozs7Ozs7QUNBQSx1Qzs7Ozs7Ozs7Ozs7QUNBQSwrQyIsImZpbGUiOiJzdGF0aWNcXGRldmVsb3BtZW50XFxwYWdlc1xcX2FwcC5qcyIsInNvdXJjZXNDb250ZW50IjpbIiBcdC8vIFRoZSBtb2R1bGUgY2FjaGVcbiBcdHZhciBpbnN0YWxsZWRNb2R1bGVzID0gcmVxdWlyZSgnLi4vLi4vLi4vc3NyLW1vZHVsZS1jYWNoZS5qcycpO1xuXG4gXHQvLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuIFx0ZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXG4gXHRcdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuIFx0XHRpZihpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSkge1xuIFx0XHRcdHJldHVybiBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXS5leHBvcnRzO1xuIFx0XHR9XG4gXHRcdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG4gXHRcdHZhciBtb2R1bGUgPSBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSA9IHtcbiBcdFx0XHRpOiBtb2R1bGVJZCxcbiBcdFx0XHRsOiBmYWxzZSxcbiBcdFx0XHRleHBvcnRzOiB7fVxuIFx0XHR9O1xuXG4gXHRcdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuIFx0XHR2YXIgdGhyZXcgPSB0cnVlO1xuIFx0XHR0cnkge1xuIFx0XHRcdG1vZHVsZXNbbW9kdWxlSWRdLmNhbGwobW9kdWxlLmV4cG9ydHMsIG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuIFx0XHRcdHRocmV3ID0gZmFsc2U7XG4gXHRcdH0gZmluYWxseSB7XG4gXHRcdFx0aWYodGhyZXcpIGRlbGV0ZSBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXTtcbiBcdFx0fVxuXG4gXHRcdC8vIEZsYWcgdGhlIG1vZHVsZSBhcyBsb2FkZWRcbiBcdFx0bW9kdWxlLmwgPSB0cnVlO1xuXG4gXHRcdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG4gXHRcdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbiBcdH1cblxuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZXMgb2JqZWN0IChfX3dlYnBhY2tfbW9kdWxlc19fKVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5tID0gbW9kdWxlcztcblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGUgY2FjaGVcbiBcdF9fd2VicGFja19yZXF1aXJlX18uYyA9IGluc3RhbGxlZE1vZHVsZXM7XG5cbiBcdC8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb24gZm9yIGhhcm1vbnkgZXhwb3J0c1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kID0gZnVuY3Rpb24oZXhwb3J0cywgbmFtZSwgZ2V0dGVyKSB7XG4gXHRcdGlmKCFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywgbmFtZSkpIHtcbiBcdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgbmFtZSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGdldHRlciB9KTtcbiBcdFx0fVxuIFx0fTtcblxuIFx0Ly8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5yID0gZnVuY3Rpb24oZXhwb3J0cykge1xuIFx0XHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcbiBcdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcbiBcdFx0fVxuIFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xuIFx0fTtcblxuIFx0Ly8gY3JlYXRlIGEgZmFrZSBuYW1lc3BhY2Ugb2JqZWN0XG4gXHQvLyBtb2RlICYgMTogdmFsdWUgaXMgYSBtb2R1bGUgaWQsIHJlcXVpcmUgaXRcbiBcdC8vIG1vZGUgJiAyOiBtZXJnZSBhbGwgcHJvcGVydGllcyBvZiB2YWx1ZSBpbnRvIHRoZSBuc1xuIFx0Ly8gbW9kZSAmIDQ6IHJldHVybiB2YWx1ZSB3aGVuIGFscmVhZHkgbnMgb2JqZWN0XG4gXHQvLyBtb2RlICYgOHwxOiBiZWhhdmUgbGlrZSByZXF1aXJlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnQgPSBmdW5jdGlvbih2YWx1ZSwgbW9kZSkge1xuIFx0XHRpZihtb2RlICYgMSkgdmFsdWUgPSBfX3dlYnBhY2tfcmVxdWlyZV9fKHZhbHVlKTtcbiBcdFx0aWYobW9kZSAmIDgpIHJldHVybiB2YWx1ZTtcbiBcdFx0aWYoKG1vZGUgJiA0KSAmJiB0eXBlb2YgdmFsdWUgPT09ICdvYmplY3QnICYmIHZhbHVlICYmIHZhbHVlLl9fZXNNb2R1bGUpIHJldHVybiB2YWx1ZTtcbiBcdFx0dmFyIG5zID0gT2JqZWN0LmNyZWF0ZShudWxsKTtcbiBcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5yKG5zKTtcbiBcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KG5zLCAnZGVmYXVsdCcsIHsgZW51bWVyYWJsZTogdHJ1ZSwgdmFsdWU6IHZhbHVlIH0pO1xuIFx0XHRpZihtb2RlICYgMiAmJiB0eXBlb2YgdmFsdWUgIT0gJ3N0cmluZycpIGZvcih2YXIga2V5IGluIHZhbHVlKSBfX3dlYnBhY2tfcmVxdWlyZV9fLmQobnMsIGtleSwgZnVuY3Rpb24oa2V5KSB7IHJldHVybiB2YWx1ZVtrZXldOyB9LmJpbmQobnVsbCwga2V5KSk7XG4gXHRcdHJldHVybiBucztcbiBcdH07XG5cbiBcdC8vIGdldERlZmF1bHRFeHBvcnQgZnVuY3Rpb24gZm9yIGNvbXBhdGliaWxpdHkgd2l0aCBub24taGFybW9ueSBtb2R1bGVzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm4gPSBmdW5jdGlvbihtb2R1bGUpIHtcbiBcdFx0dmFyIGdldHRlciA9IG1vZHVsZSAmJiBtb2R1bGUuX19lc01vZHVsZSA/XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0RGVmYXVsdCgpIHsgcmV0dXJuIG1vZHVsZVsnZGVmYXVsdCddOyB9IDpcbiBcdFx0XHRmdW5jdGlvbiBnZXRNb2R1bGVFeHBvcnRzKCkgeyByZXR1cm4gbW9kdWxlOyB9O1xuIFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQoZ2V0dGVyLCAnYScsIGdldHRlcik7XG4gXHRcdHJldHVybiBnZXR0ZXI7XG4gXHR9O1xuXG4gXHQvLyBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGxcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubyA9IGZ1bmN0aW9uKG9iamVjdCwgcHJvcGVydHkpIHsgcmV0dXJuIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmplY3QsIHByb3BlcnR5KTsgfTtcblxuIFx0Ly8gX193ZWJwYWNrX3B1YmxpY19wYXRoX19cbiBcdF9fd2VicGFja19yZXF1aXJlX18ucCA9IFwiXCI7XG5cblxuIFx0Ly8gTG9hZCBlbnRyeSBtb2R1bGUgYW5kIHJldHVybiBleHBvcnRzXG4gXHRyZXR1cm4gX193ZWJwYWNrX3JlcXVpcmVfXyhfX3dlYnBhY2tfcmVxdWlyZV9fLnMgPSAwKTtcbiIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcIm5leHQvZGlzdC9uZXh0LXNlcnZlci9saWIvdXRpbHMuanNcIik7IiwiZXhwb3J0IGNvbnN0IHBlcnNpc3RTZWNyZXRLZXkgPSAnYWJhbmctYmFzby1qYW5nYW4ta2FzaWgtdGF1LXNpcGEtc2lhcGEteWEnO1xuXG5leHBvcnQgY29uc3QgcGVyc2lzdEJsYWNrTGlzdCA9IFtcbiAgJ2F1dGgnLFxuICBbXG4gICAgLy8gJ2RhdGEnLFxuICAgIC8vICdyZXMnLFxuICAgICdhY3Rpb24nXG4gIF0sXG5dO1xuXG5leHBvcnQgY29uc3QgZGVmYXVsdFN0YXRlID0ge1xuICBmZXRjaDogZmFsc2UsXG4gIGVycm9yOiBudWxsLFxuICByZXNwb25zZTogbnVsbCxcbiAgYWN0aW9uOiBudWxsLFxufVxuXG5leHBvcnQgY29uc3QgZGVmYXVsdEFjdGlvbiA9IHtcbiAgdHlwZTogbnVsbCxcbiAgZGF0YTogbnVsbCxcbn0iLCJmdW5jdGlvbiBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KG9iaikge1xuICByZXR1cm4gb2JqICYmIG9iai5fX2VzTW9kdWxlID8gb2JqIDoge1xuICAgIFwiZGVmYXVsdFwiOiBvYmpcbiAgfTtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0OyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZSgnLi9kaXN0L3BhZ2VzL19hcHAnKVxuIiwiaW1wb3J0IFJlYWN0LCB7IEVycm9ySW5mbyB9IGZyb20gJ3JlYWN0J1xuaW1wb3J0IHtcbiAgZXhlY09uY2UsXG4gIGxvYWRHZXRJbml0aWFsUHJvcHMsXG4gIEFwcENvbnRleHRUeXBlLFxuICBBcHBJbml0aWFsUHJvcHMsXG4gIEFwcFByb3BzVHlwZSxcbn0gZnJvbSAnLi4vbmV4dC1zZXJ2ZXIvbGliL3V0aWxzJ1xuaW1wb3J0IHsgUm91dGVyIH0gZnJvbSAnLi4vY2xpZW50L3JvdXRlcidcblxuZXhwb3J0IHsgQXBwSW5pdGlhbFByb3BzIH1cblxuZXhwb3J0IHR5cGUgQXBwQ29udGV4dCA9IEFwcENvbnRleHRUeXBlPFJvdXRlcj5cblxuZXhwb3J0IHR5cGUgQXBwUHJvcHM8UCA9IHt9PiA9IEFwcFByb3BzVHlwZTxSb3V0ZXIsIFA+XG5cbi8qKlxuICogYEFwcGAgY29tcG9uZW50IGlzIHVzZWQgZm9yIGluaXRpYWxpemUgb2YgcGFnZXMuIEl0IGFsbG93cyBmb3Igb3ZlcndyaXRpbmcgYW5kIGZ1bGwgY29udHJvbCBvZiB0aGUgYHBhZ2VgIGluaXRpYWxpemF0aW9uLlxuICogVGhpcyBhbGxvd3MgZm9yIGtlZXBpbmcgc3RhdGUgYmV0d2VlbiBuYXZpZ2F0aW9uLCBjdXN0b20gZXJyb3IgaGFuZGxpbmcsIGluamVjdGluZyBhZGRpdGlvbmFsIGRhdGEuXG4gKi9cbmFzeW5jIGZ1bmN0aW9uIGFwcEdldEluaXRpYWxQcm9wcyh7XG4gIENvbXBvbmVudCxcbiAgY3R4LFxufTogQXBwQ29udGV4dCk6IFByb21pc2U8QXBwSW5pdGlhbFByb3BzPiB7XG4gIGNvbnN0IHBhZ2VQcm9wcyA9IGF3YWl0IGxvYWRHZXRJbml0aWFsUHJvcHMoQ29tcG9uZW50LCBjdHgpXG4gIHJldHVybiB7IHBhZ2VQcm9wcyB9XG59XG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIEFwcDxQID0ge30sIENQID0ge30sIFMgPSB7fT4gZXh0ZW5kcyBSZWFjdC5Db21wb25lbnQ8XG4gIFAgJiBBcHBQcm9wczxDUD4sXG4gIFNcbj4ge1xuICBzdGF0aWMgb3JpZ0dldEluaXRpYWxQcm9wcyA9IGFwcEdldEluaXRpYWxQcm9wc1xuICBzdGF0aWMgZ2V0SW5pdGlhbFByb3BzID0gYXBwR2V0SW5pdGlhbFByb3BzXG5cbiAgLy8gS2VwdCBoZXJlIGZvciBiYWNrd2FyZHMgY29tcGF0aWJpbGl0eS5cbiAgLy8gV2hlbiBzb21lb25lIGVuZGVkIEFwcCB0aGV5IGNvdWxkIGNhbGwgYHN1cGVyLmNvbXBvbmVudERpZENhdGNoYC5cbiAgLy8gQGRlcHJlY2F0ZWQgVGhpcyBtZXRob2QgaXMgbm8gbG9uZ2VyIG5lZWRlZC4gRXJyb3JzIGFyZSBjYXVnaHQgYXQgdGhlIHRvcCBsZXZlbFxuICBjb21wb25lbnREaWRDYXRjaChlcnJvcjogRXJyb3IsIF9lcnJvckluZm86IEVycm9ySW5mbyk6IHZvaWQge1xuICAgIHRocm93IGVycm9yXG4gIH1cblxuICByZW5kZXIoKSB7XG4gICAgY29uc3QgeyByb3V0ZXIsIENvbXBvbmVudCwgcGFnZVByb3BzLCBfX05fU1NHLCBfX05fU1NQIH0gPSB0aGlzXG4gICAgICAucHJvcHMgYXMgQXBwUHJvcHM8Q1A+XG5cbiAgICByZXR1cm4gKFxuICAgICAgPENvbXBvbmVudFxuICAgICAgICB7Li4ucGFnZVByb3BzfVxuICAgICAgICB7XG4gICAgICAgICAgLy8gd2UgZG9uJ3QgYWRkIHRoZSBsZWdhY3kgVVJMIHByb3AgaWYgaXQncyB1c2luZyBub24tbGVnYWN5XG4gICAgICAgICAgLy8gbWV0aG9kcyBsaWtlIGdldFN0YXRpY1Byb3BzIGFuZCBnZXRTZXJ2ZXJTaWRlUHJvcHNcbiAgICAgICAgICAuLi4oIShfX05fU1NHIHx8IF9fTl9TU1ApID8geyB1cmw6IGNyZWF0ZVVybChyb3V0ZXIpIH0gOiB7fSlcbiAgICAgICAgfVxuICAgICAgLz5cbiAgICApXG4gIH1cbn1cblxubGV0IHdhcm5Db250YWluZXI6ICgpID0+IHZvaWRcbmxldCB3YXJuVXJsOiAoKSA9PiB2b2lkXG5cbmlmIChwcm9jZXNzLmVudi5OT0RFX0VOViAhPT0gJ3Byb2R1Y3Rpb24nKSB7XG4gIHdhcm5Db250YWluZXIgPSBleGVjT25jZSgoKSA9PiB7XG4gICAgY29uc29sZS53YXJuKFxuICAgICAgYFdhcm5pbmc6IHRoZSBcXGBDb250YWluZXJcXGAgaW4gXFxgX2FwcFxcYCBoYXMgYmVlbiBkZXByZWNhdGVkIGFuZCBzaG91bGQgYmUgcmVtb3ZlZC4gaHR0cHM6Ly9lcnIuc2gvdmVyY2VsL25leHQuanMvYXBwLWNvbnRhaW5lci1kZXByZWNhdGVkYFxuICAgIClcbiAgfSlcblxuICB3YXJuVXJsID0gZXhlY09uY2UoKCkgPT4ge1xuICAgIGNvbnNvbGUuZXJyb3IoXG4gICAgICBgV2FybmluZzogdGhlICd1cmwnIHByb3BlcnR5IGlzIGRlcHJlY2F0ZWQuIGh0dHBzOi8vZXJyLnNoL3ZlcmNlbC9uZXh0LmpzL3VybC1kZXByZWNhdGVkYFxuICAgIClcbiAgfSlcbn1cblxuLy8gQGRlcHJlY2F0ZWQgbm9vcCBmb3Igbm93IHVudGlsIHJlbW92YWxcbmV4cG9ydCBmdW5jdGlvbiBDb250YWluZXIocDogYW55KSB7XG4gIGlmIChwcm9jZXNzLmVudi5OT0RFX0VOViAhPT0gJ3Byb2R1Y3Rpb24nKSB3YXJuQ29udGFpbmVyKClcbiAgcmV0dXJuIHAuY2hpbGRyZW5cbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGNyZWF0ZVVybChyb3V0ZXI6IFJvdXRlcikge1xuICAvLyBUaGlzIGlzIHRvIG1ha2Ugc3VyZSB3ZSBkb24ndCByZWZlcmVuY2VzIHRoZSByb3V0ZXIgb2JqZWN0IGF0IGNhbGwgdGltZVxuICBjb25zdCB7IHBhdGhuYW1lLCBhc1BhdGgsIHF1ZXJ5IH0gPSByb3V0ZXJcbiAgcmV0dXJuIHtcbiAgICBnZXQgcXVlcnkoKSB7XG4gICAgICBpZiAocHJvY2Vzcy5lbnYuTk9ERV9FTlYgIT09ICdwcm9kdWN0aW9uJykgd2FyblVybCgpXG4gICAgICByZXR1cm4gcXVlcnlcbiAgICB9LFxuICAgIGdldCBwYXRobmFtZSgpIHtcbiAgICAgIGlmIChwcm9jZXNzLmVudi5OT0RFX0VOViAhPT0gJ3Byb2R1Y3Rpb24nKSB3YXJuVXJsKClcbiAgICAgIHJldHVybiBwYXRobmFtZVxuICAgIH0sXG4gICAgZ2V0IGFzUGF0aCgpIHtcbiAgICAgIGlmIChwcm9jZXNzLmVudi5OT0RFX0VOViAhPT0gJ3Byb2R1Y3Rpb24nKSB3YXJuVXJsKClcbiAgICAgIHJldHVybiBhc1BhdGhcbiAgICB9LFxuICAgIGJhY2s6ICgpID0+IHtcbiAgICAgIGlmIChwcm9jZXNzLmVudi5OT0RFX0VOViAhPT0gJ3Byb2R1Y3Rpb24nKSB3YXJuVXJsKClcbiAgICAgIHJvdXRlci5iYWNrKClcbiAgICB9LFxuICAgIHB1c2g6ICh1cmw6IHN0cmluZywgYXM/OiBzdHJpbmcpID0+IHtcbiAgICAgIGlmIChwcm9jZXNzLmVudi5OT0RFX0VOViAhPT0gJ3Byb2R1Y3Rpb24nKSB3YXJuVXJsKClcbiAgICAgIHJldHVybiByb3V0ZXIucHVzaCh1cmwsIGFzKVxuICAgIH0sXG4gICAgcHVzaFRvOiAoaHJlZjogc3RyaW5nLCBhcz86IHN0cmluZykgPT4ge1xuICAgICAgaWYgKHByb2Nlc3MuZW52Lk5PREVfRU5WICE9PSAncHJvZHVjdGlvbicpIHdhcm5VcmwoKVxuICAgICAgY29uc3QgcHVzaFJvdXRlID0gYXMgPyBocmVmIDogJydcbiAgICAgIGNvbnN0IHB1c2hVcmwgPSBhcyB8fCBocmVmXG5cbiAgICAgIHJldHVybiByb3V0ZXIucHVzaChwdXNoUm91dGUsIHB1c2hVcmwpXG4gICAgfSxcbiAgICByZXBsYWNlOiAodXJsOiBzdHJpbmcsIGFzPzogc3RyaW5nKSA9PiB7XG4gICAgICBpZiAocHJvY2Vzcy5lbnYuTk9ERV9FTlYgIT09ICdwcm9kdWN0aW9uJykgd2FyblVybCgpXG4gICAgICByZXR1cm4gcm91dGVyLnJlcGxhY2UodXJsLCBhcylcbiAgICB9LFxuICAgIHJlcGxhY2VUbzogKGhyZWY6IHN0cmluZywgYXM/OiBzdHJpbmcpID0+IHtcbiAgICAgIGlmIChwcm9jZXNzLmVudi5OT0RFX0VOViAhPT0gJ3Byb2R1Y3Rpb24nKSB3YXJuVXJsKClcbiAgICAgIGNvbnN0IHJlcGxhY2VSb3V0ZSA9IGFzID8gaHJlZiA6ICcnXG4gICAgICBjb25zdCByZXBsYWNlVXJsID0gYXMgfHwgaHJlZlxuXG4gICAgICByZXR1cm4gcm91dGVyLnJlcGxhY2UocmVwbGFjZVJvdXRlLCByZXBsYWNlVXJsKVxuICAgIH0sXG4gIH1cbn1cbiIsImltcG9ydCBBcHAgZnJvbSAnbmV4dC9hcHAnO1xuaW1wb3J0IHdpdGhSZWR1eFN0b3JlIGZyb20gJ3JlZHV4L2NvcmUvY29tcG9uZW50JztcbmltcG9ydCB7IFByb3ZpZGVyIH0gZnJvbSAncmVhY3QtcmVkdXgnO1xuaW1wb3J0IHsgcGVyc2lzdFN0b3JlIH0gZnJvbSAncmVkdXgtcGVyc2lzdCc7XG5pbXBvcnQgeyBQZXJzaXN0R2F0ZSB9IGZyb20gJ3JlZHV4LXBlcnNpc3QvaW50ZWdyYXRpb24vcmVhY3QnO1xuXG5pbXBvcnQgJ21hdGVyaWFsaXplLWNzcy9kaXN0L2Nzcy9tYXRlcmlhbGl6ZS5taW4uY3NzJztcbmltcG9ydCAnc3R5bGVzL19hcHAuc2Nzcyc7XG5cbmNsYXNzIE15QXBwIGV4dGVuZHMgQXBwIHtcbiAgY29uc3RydWN0b3IocHJvcHMpIHtcbiAgICBzdXBlcihwcm9wcylcbiAgICB0aGlzLnBlcnNpc3RvciA9IHBlcnNpc3RTdG9yZShwcm9wcy5yZWR1eFN0b3JlKVxuICB9XG5cbiAgcmVuZGVyKCkge1xuICAgIGNvbnN0IHsgQ29tcG9uZW50LCBwYWdlUHJvcHMsIHJlZHV4U3RvcmUgfSA9IHRoaXMucHJvcHM7XG4gICAgcmV0dXJuIChcbiAgICAgIDxQcm92aWRlciBzdG9yZT17cmVkdXhTdG9yZX0+XG4gICAgICAgIDxQZXJzaXN0R2F0ZVxuICAgICAgICAgIGxvYWRpbmc9ezxDb21wb25lbnQgey4uLnBhZ2VQcm9wc30gLz59XG4gICAgICAgICAgcGVyc2lzdG9yPXt0aGlzLnBlcnNpc3Rvcn1cbiAgICAgICAgPlxuICAgICAgICAgIDxDb21wb25lbnQgey4uLnBhZ2VQcm9wc30gLz5cbiAgICAgICAgPC9QZXJzaXN0R2F0ZT5cbiAgICAgIDwvUHJvdmlkZXI+XG4gICAgKTtcbiAgfVxufVxuXG5leHBvcnQgZGVmYXVsdCB3aXRoUmVkdXhTdG9yZShNeUFwcCk7XG4iLCJpbXBvcnQge1xyXG4gICAgTk9XUExBWUlOR0ZFVENILFxyXG4gICAgTk9XUExBWUlOR1NVQ0NFU1MsXHJcbiAgICBOT1dQTEFZSU5HRkFJTCxcclxuICB9IGZyb20gJy4uL2NvbnN0YW50cy9Nb3ZpZUNvbnN0YW50cyc7XHJcblxyXG5leHBvcnQgY29uc3Qgbm93UGxheWluZ0ZldGNoID0gKHZhbHVlOiBvYmplY3QpID0+ICh7IHR5cGU6IE5PV1BMQVlJTkdGRVRDSCwgZGF0YTogdmFsdWUgfSk7XHJcbmV4cG9ydCBjb25zdCBub3dQbGF5aW5nU3VjY2VzcyA9ICh2YWx1ZTogb2JqZWN0KSA9PiAoeyB0eXBlOiBOT1dQTEFZSU5HU1VDQ0VTUywgZGF0YTogdmFsdWUgfSk7XHJcbmV4cG9ydCBjb25zdCBub3dQbGF5aW5nRmFpbCA9ICh2YWx1ZTogb2JqZWN0KSA9PiAoeyB0eXBlOiBOT1dQTEFZSU5HRkFJTCwgZGF0YTogdmFsdWUgfSk7IiwiZXhwb3J0IGNvbnN0IE5PV1BMQVlJTkdGRVRDSCA9ICdOT1dQTEFZSU5HRkVUQ0gnO1xyXG5leHBvcnQgY29uc3QgTk9XUExBWUlOR1NVQ0NFU1MgPSAnTk9XUExBWUlOR1NVQ0NFU1MnO1xyXG5leHBvcnQgY29uc3QgTk9XUExBWUlOR0ZBSUwgPSAnTk9XUExBWUlOR0ZBSUwnOyIsImV4cG9ydCBjb25zdCBURVNUUkVEVVggPSAnVEVTVFJFRFVYJzsiLCJpbXBvcnQgeyBDb21wb25lbnQgfSBmcm9tICdyZWFjdCc7XG5pbXBvcnQgeyBpbml0aWFsaXplU3RvcmUgfSBmcm9tICdyZWR1eC9jb3JlL3N0b3JlJztcblxuY29uc3QgaXNTZXJ2ZXIgPSB0eXBlb2Ygd2luZG93ID09PSAndW5kZWZpbmVkJztcbmNvbnN0IF9fTkVYVF9SRURVWF9TVE9SRV9fID0gJ19fTkVYVF9SRURVWF9TVE9SRV9fJztcblxuZnVuY3Rpb24gZ2V0T3JDcmVhdGVTdG9yZShpbml0aWFsU3RhdGUpIHtcbiAgLy8gQWx3YXlzIG1ha2UgYSBuZXcgc3RvcmUgaWYgc2VydmVyLCBvdGhlcndpc2Ugc3RhdGUgaXMgc2hhcmVkIGJldHdlZW4gcmVxdWVzdHNcbiAgaWYgKGlzU2VydmVyKSB7XG4gICAgcmV0dXJuIGluaXRpYWxpemVTdG9yZShpbml0aWFsU3RhdGUpO1xuICB9XG5cbiAgLy8gQ3JlYXRlIHN0b3JlIGlmIHVuYXZhaWxhYmxlIG9uIHRoZSBjbGllbnQgYW5kIHNldCBpdCBvbiB0aGUgd2luZG93IG9iamVjdFxuICBpZiAoIXdpbmRvd1tfX05FWFRfUkVEVVhfU1RPUkVfX10pIHtcbiAgICB3aW5kb3dbX19ORVhUX1JFRFVYX1NUT1JFX19dID0gaW5pdGlhbGl6ZVN0b3JlKGluaXRpYWxTdGF0ZSk7XG4gIH1cbiAgcmV0dXJuIHdpbmRvd1tfX05FWFRfUkVEVVhfU1RPUkVfX107XG59XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIHdpdGhSZWR1eFN0b3JlKEFwcCkge1xuICByZXR1cm4gY2xhc3MgQXBwV2l0aFJlZHV4IGV4dGVuZHMgQ29tcG9uZW50IHtcbiAgICBzdGF0aWMgYXN5bmMgZ2V0SW5pdGlhbFByb3BzKGFwcENvbnRleHQpIHtcbiAgICAgIC8vIEdldCBvciBDcmVhdGUgdGhlIHN0b3JlIHdpdGggYHVuZGVmaW5lZGAgYXMgaW5pdGlhbFN0YXRlXG4gICAgICAvLyBUaGlzIGFsbG93cyB5b3UgdG8gc2V0IGEgY3VzdG9tIGRlZmF1bHQgaW5pdGlhbFN0YXRlXG4gICAgICBjb25zdCByZWR1eFN0b3JlID0gZ2V0T3JDcmVhdGVTdG9yZSgpO1xuXG4gICAgICAvLyBQcm92aWRlIHRoZSBzdG9yZSB0byBnZXRJbml0aWFsUHJvcHMgb2YgcGFnZXNcbiAgICAgIGFwcENvbnRleHQuY3R4LnJlZHV4U3RvcmUgPSByZWR1eFN0b3JlO1xuXG4gICAgICBsZXQgYXBwUHJvcHMgPSB7fTtcbiAgICAgIGlmICh0eXBlb2YgQXBwLmdldEluaXRpYWxQcm9wcyA9PT0gJ2Z1bmN0aW9uJykge1xuICAgICAgICBhcHBQcm9wcyA9IGF3YWl0IEFwcC5nZXRJbml0aWFsUHJvcHMoYXBwQ29udGV4dCk7XG4gICAgICB9XG5cbiAgICAgIHJldHVybiB7XG4gICAgICAgIC4uLmFwcFByb3BzLFxuICAgICAgICBpbml0aWFsUmVkdXhTdGF0ZTogcmVkdXhTdG9yZS5nZXRTdGF0ZSgpLFxuICAgICAgfTtcbiAgICB9XG5cbiAgICBjb25zdHJ1Y3Rvcihwcm9wcykge1xuICAgICAgc3VwZXIocHJvcHMpO1xuICAgICAgdGhpcy5yZWR1eFN0b3JlID0gZ2V0T3JDcmVhdGVTdG9yZShwcm9wcy5pbml0aWFsUmVkdXhTdGF0ZSk7XG4gICAgfVxuXG4gICAgcmVuZGVyKCkge1xuICAgICAgcmV0dXJuIDxBcHAgey4uLnRoaXMucHJvcHN9IHJlZHV4U3RvcmU9e3RoaXMucmVkdXhTdG9yZX0gLz47XG4gICAgfVxuICB9XG59XG4iLCIvKipcbiAqIEBhdXRob3I6IGR3aS5zZXRpeWFkaUBnbWFpbC5jb21cbiovXG5cbi8vIGltcG9ydCBzdG9yYWdlIGZyb20gJ3JlZHV4LXBlcnNpc3QvbGliL3N0b3JhZ2UnO1xuXG5jb25zdCBob29rOiBhbnkgPSAoc3RhdGU6IGFueSwgYWN0aW9uOiBhbnkpID0+IHtcbiAgLy8gZG8geW91ciBob29rIGhlcmVcbiAgcmV0dXJuIHsgc3RhdGUsIGFjdGlvbiB9O1xufTtcblxuZXhwb3J0IGRlZmF1bHQgaG9vaztcbiIsImltcG9ydCBzdG9yYWdlIGZyb20gJ3JlZHV4LXBlcnNpc3QvbGliL3N0b3JhZ2UnXG5pbXBvcnQgY3JlYXRlRW5jcnlwdG9yIGZyb20gJ3JlZHV4LXBlcnNpc3QtdHJhbnNmb3JtLWVuY3J5cHQnO1xuaW1wb3J0IHsgY3JlYXRlQmxhY2tsaXN0RmlsdGVyIH0gZnJvbSAncmVkdXgtcGVyc2lzdC10cmFuc2Zvcm0tZmlsdGVyJztcbmltcG9ydCB7IHBlcnNpc3RTZWNyZXRLZXksIHBlcnNpc3RCbGFja0xpc3QgfSBmcm9tICdjb25maWd1cmF0aW9ucy9yZWR1eCc7XG5cbmNvbnN0IGVuY3J5cHRvciA9IGNyZWF0ZUVuY3J5cHRvcih7XG4gIHNlY3JldEtleTogcGVyc2lzdFNlY3JldEtleSxcbiAgb25FcnJvcihlcnJvcikge1xuICAgIGNvbnNvbGUubG9nKCdjcmVhdGVFbmNyeXB0b3IgZXJyb3IgJywgZXJyb3IpOyAvLyBlc2xpbnQtZGlzYWJsZS1saW5lXG4gIH0sXG59KTtcbiBcbmNvbnN0IHNhdmVBdXRoU3Vic2V0QmxhY2tsaXN0RmlsdGVyID0gY3JlYXRlQmxhY2tsaXN0RmlsdGVyKHBlcnNpc3RCbGFja0xpc3QpO1xuXG5jb25zdCBwZXJzaXN0Q29uZmlnID0ge1xuICBhY3RpdmU6IHRydWUsXG4gIHJlZHVjZXJWZXJzaW9uOiAnMS4wJyxcbiAgc3RvcmVDb25maWc6IHtcbiAgICBrZXk6ICdyb290JyxcbiAgICBzdG9yYWdlLFxuICAgIC8vIHdoaXRlbGlzdDogWydhdXRoJywgJ25vdGlmaWNhdGlvbiddLFxuICAgIHRyYW5zZm9ybXM6IFtzYXZlQXV0aFN1YnNldEJsYWNrbGlzdEZpbHRlciwgZW5jcnlwdG9yXSxcbiAgICAvLyB0cmFuc2Zvcm06IFtlbmNyeXB0b3JdLFxuICB9LFxufTtcblxuZXhwb3J0IGRlZmF1bHQgcGVyc2lzdENvbmZpZzsiLCJpbXBvcnQgeyBjb21iaW5lUmVkdWNlcnMgfSBmcm9tICdyZWR1eCc7XG5pbXBvcnQgTG9hZFJlZHVjZXJzIGZyb20gJ3JlZHV4L3JlZHVjZXJzJztcbmltcG9ydCBob29rUmVkdWNlciBmcm9tICdyZWR1eC9jb3JlL2hvb2snO1xuIFxubGV0IHJlZHV4UmVkdWNlcjogYW55ID0gY29tYmluZVJlZHVjZXJzKExvYWRSZWR1Y2Vycyk7XG4gXG5pZiAoT2JqZWN0LmtleXMoTG9hZFJlZHVjZXJzKS5sZW5ndGggPT09IDAgJiYgTG9hZFJlZHVjZXJzLmNvbnN0cnVjdG9yID09PSBPYmplY3QpIHtcbiAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIEB0eXBlc2NyaXB0LWVzbGludC9uby11bnVzZWQtdmFyc1xuICBjb25zdCBpbml0aWFsUmVkdWNlcjogYW55ID0gKHN0YXRlOiBhbnkgPSBbXSwgYWN0aW9uOiBhbnkpID0+IHN0YXRlO1xuICByZWR1eFJlZHVjZXIgPSBjb21iaW5lUmVkdWNlcnMoeyBpbml0aWFsUmVkdWNlciB9IGFzIGFueSk7XG59XG4gXG5jb25zdCBob29rczogYW55ID0gKHN0YXRlOiBhbnksIGFjdGlvbjogYW55KSA9PiB7XG4gIGNvbnN0IGhvb2sgPSBob29rUmVkdWNlcihzdGF0ZSwgYWN0aW9uKTtcbiAgcmV0dXJuIHJlZHV4UmVkdWNlcihob29rLnN0YXRlLCBob29rLmFjdGlvbik7XG59O1xuIFxuZXhwb3J0IGRlZmF1bHQgaG9va3M7IiwiaW1wb3J0IHsgYWxsIH0gZnJvbSAncmVkdXgtc2FnYS9lZmZlY3RzJztcclxuaW1wb3J0IExvYWRTYWdhcyBmcm9tICdyZWR1eC9zYWdhcyc7XHJcblxyXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiogcmVkdXhTYWdhKCkge1xyXG4gIHlpZWxkIGFsbChMb2FkU2FnYXMpO1xyXG59IiwiaW1wb3J0IHsgY3JlYXRlU3RvcmUsIGFwcGx5TWlkZGxld2FyZSB9IGZyb20gJ3JlZHV4JztcbmltcG9ydCB7IGNvbXBvc2VXaXRoRGV2VG9vbHMgfSBmcm9tICdyZWR1eC1kZXZ0b29scy1leHRlbnNpb24nO1xuaW1wb3J0IHsgcGVyc2lzdFJlZHVjZXIgfSBmcm9tICdyZWR1eC1wZXJzaXN0JztcbmltcG9ydCBjcmVhdGVTYWdhTWlkZGxld2FyZSBmcm9tICdyZWR1eC1zYWdhJztcblxuaW1wb3J0IHJlZHVjZXIgZnJvbSAncmVkdXgvY29yZS9yZWR1Y2VyJztcbmltcG9ydCBwZXJzaXN0IGZyb20gJ3JlZHV4L2NvcmUvcGVyc2lzdCc7XG5pbXBvcnQgc2FnYSBmcm9tICdyZWR1eC9jb3JlL3NhZ2EnO1xuXG4vLyBpbXBvcnQgeyBkZWZhdWx0U3RhdGUgfSBmcm9tICdjb25maWd1cmF0aW9ucy9yZWR1eCc7XG5pbXBvcnQgeyBEZWZhdWx0U3RhdGUgfSBmcm9tICdjb25maWd1cmF0aW9ucy9pbnRlcmZhY2VzL3JlZHV4JztcblxuY29uc3QgcGVyc2lzdGVkUmVkdWNlciA9IHBlcnNpc3RSZWR1Y2VyKHBlcnNpc3Quc3RvcmVDb25maWcsIHJlZHVjZXIpO1xuXG5jb25zdCBzYWdhTWlkZGxld2FyZSA9IGNyZWF0ZVNhZ2FNaWRkbGV3YXJlKCk7XG5jb25zdCBtaWRkbGV3YXJlcyA9IFtzYWdhTWlkZGxld2FyZV07XG5cbmV4cG9ydCBmdW5jdGlvbiBpbml0aWFsaXplU3RvcmUoaW5pdGlhbFN0YXRlOiBhbnkpIHtcbiAgY29uc3Qgc3RvcmUgPSBjcmVhdGVTdG9yZShcbiAgICBwZXJzaXN0ZWRSZWR1Y2VyLFxuICAgIGluaXRpYWxTdGF0ZSxcbiAgICBjb21wb3NlV2l0aERldlRvb2xzKGFwcGx5TWlkZGxld2FyZSguLi5taWRkbGV3YXJlcykpLFxuICApO1xuXG4gIHNhZ2FNaWRkbGV3YXJlLnJ1bihzYWdhKTtcblxuICByZXR1cm4gc3RvcmU7XG59XG4iLCJpbXBvcnQgeyBEZWZhdWx0U3RhdGUsIERlZmF1bHRBY3Rpb24gfSBmcm9tICdjb25maWd1cmF0aW9ucy9pbnRlcmZhY2VzL3JlZHV4JztcclxuaW1wb3J0IHsgZGVmYXVsdFN0YXRlLCBkZWZhdWx0QWN0aW9uIH0gZnJvbSAnY29uZmlndXJhdGlvbnMvcmVkdXgnO1xyXG5pbXBvcnQgeyBOT1dQTEFZSU5HRkVUQ0gsIE5PV1BMQVlJTkdTVUNDRVNTLCBOT1dQTEFZSU5HRkFJTCB9IGZyb20gJy4uL2NvbnN0YW50cy9Nb3ZpZUNvbnN0YW50cyc7XHJcblxyXG5jb25zdCBSZWR1Y2VyTm93UGxheWluZ0Rhc2hib2FyZCA9IChzdGF0ZTogRGVmYXVsdFN0YXRlID0gZGVmYXVsdFN0YXRlLCBhY3Rpb246IERlZmF1bHRBY3Rpb24gPSBkZWZhdWx0QWN0aW9uKSA9PiB7XHJcbiAgICBzd2l0Y2ggKGFjdGlvbi50eXBlKSB7XHJcbiAgICAgIGNhc2UgTk9XUExBWUlOR0ZFVENIOlxyXG4gICAgICAgIHJldHVybiB7XHJcbiAgICAgICAgICAuLi5zdGF0ZSxcclxuICAgICAgICAgIGZldGNoOiB0cnVlLFxyXG4gICAgICAgICAgZGF0YTogYWN0aW9uLmRhdGEsXHJcbiAgICAgICAgICBhY3Rpb246IGFjdGlvbi50eXBlLFxyXG4gICAgICAgIH07XHJcbiAgXHJcbiAgICAgIGNhc2UgTk9XUExBWUlOR1NVQ0NFU1M6XHJcbiAgICAgICAgcmV0dXJuIHtcclxuICAgICAgICAgIC4uLnN0YXRlLFxyXG4gICAgICAgICAgZmV0Y2g6IGZhbHNlLFxyXG4gICAgICAgICAgcmVzcG9uc2U6IGFjdGlvbi5kYXRhLFxyXG4gICAgICAgICAgYWN0aW9uOiBhY3Rpb24udHlwZSxcclxuICAgICAgICB9O1xyXG4gIFxyXG4gICAgICBjYXNlIE5PV1BMQVlJTkdGQUlMOlxyXG4gICAgICAgIHJldHVybiB7XHJcbiAgICAgICAgICAuLi5zdGF0ZSxcclxuICAgICAgICAgIGZldGNoOiBmYWxzZSxcclxuICAgICAgICAgIGVycm9yOiBhY3Rpb24uZGF0YSxcclxuICAgICAgICAgIGFjdGlvbjogYWN0aW9uLnR5cGUsXHJcbiAgICAgICAgfTtcclxuICBcclxuICAgICAgZGVmYXVsdDpcclxuICAgICAgICByZXR1cm4gc3RhdGU7XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgUmVkdWNlck5vd1BsYXlpbmdEYXNoYm9hcmQ7XHJcbiIsImltcG9ydCB7IERlZmF1bHRTdGF0ZSwgRGVmYXVsdEFjdGlvbiB9IGZyb20gJ2NvbmZpZ3VyYXRpb25zL2ludGVyZmFjZXMvcmVkdXgnO1xuXG5pbXBvcnQge1xuICBURVNUUkVEVVhcbn0gZnJvbSAncmVkdXgvY29uc3RhbnRzL1Rlc3RDb25zdGFudHMnO1xuXG5pbXBvcnQge1xuICBkZWZhdWx0U3RhdGUsXG4gIGRlZmF1bHRBY3Rpb25cbn0gZnJvbSAnY29uZmlndXJhdGlvbnMvcmVkdXgnO1xuXG5jb25zdCBUZXN0UmVkdWNlcnMgPSAoc3RhdGU6IERlZmF1bHRTdGF0ZSA9IGRlZmF1bHRTdGF0ZSwgYWN0aW9uOiBEZWZhdWx0QWN0aW9uID0gZGVmYXVsdEFjdGlvbikgPT4ge1xuICBzd2l0Y2ggKGFjdGlvbi50eXBlKSB7XG4gICAgY2FzZSBURVNUUkVEVVg6XG4gICAgICByZXR1cm4ge1xuICAgICAgICAuLi5zdGF0ZSxcbiAgICAgICAgcmVzcG9uc2U6IGFjdGlvbi5kYXRhLFxuICAgICAgICBhY3Rpb246IGFjdGlvbi50eXBlLFxuICAgICAgfTtcblxuICAgIGRlZmF1bHQ6XG4gICAgICByZXR1cm4gc3RhdGU7XG4gIH1cbn1cblxuZXhwb3J0IGRlZmF1bHQgVGVzdFJlZHVjZXJzO1xuIiwiaW1wb3J0IFRlc3RSZWR1Y2VycyBmcm9tICdyZWR1eC9yZWR1Y2Vycy9UZXN0UmVkdWNlcnMnO1xuaW1wb3J0IE1vdmllUmVkdWNlcnMgZnJvbSAncmVkdXgvcmVkdWNlcnMvTW92aWVSZWR1Y2Vycyc7XG5cbmNvbnN0IHJlZHVjZXJzOiBvYmplY3QgPSB7XG4gIHRlc3Q6IFRlc3RSZWR1Y2VycyxcbiAgbm93UGxheWluZzogTW92aWVSZWR1Y2Vycyxcbn07XG5cbmV4cG9ydCBkZWZhdWx0IHJlZHVjZXJzO1xuIiwiaW1wb3J0IHtcclxuICAgIGNhbGwsXHJcbiAgICBwdXQsXHJcbiAgICB0YWtlTGF0ZXN0LFxyXG59IGZyb20gJ3JlZHV4LXNhZ2EvZWZmZWN0cyc7XHJcbmltcG9ydCB7IERlZmF1bHRBY3Rpb24gfSBmcm9tICdjb25maWd1cmF0aW9ucy9pbnRlcmZhY2VzL3JlZHV4JztcclxuaW1wb3J0IHsgTk9XUExBWUlOR0VORFBPSU5UIH0gZnJvbSAnY29uZmlndXJhdGlvbnMvTW92aWVDb25maWcnO1xyXG5pbXBvcnQgeyBOT1dQTEFZSU5HRkVUQ0ggfSBmcm9tICcuLi9jb25zdGFudHMvTW92aWVDb25zdGFudHMnO1xyXG5pbXBvcnQge1xyXG4gICAgbm93UGxheWluZ1N1Y2Nlc3MsXHJcbiAgICBub3dQbGF5aW5nRmFpbCxcclxufSBmcm9tICcuLi9hY3Rpb25zL01vdmllQWN0aW9ucyc7XHJcbmltcG9ydCB7IGdldCB9IGZyb20gJ2xpYnJhcmllcy9hcGknO1xyXG5pbXBvcnQgYXhpb3MgZnJvbSAnYXhpb3MnO1xyXG5cclxuZnVuY3Rpb24qIHdvcmtlclNhZ2FOb3dQbGF5aW5nIChwYXJhbXM6IERlZmF1bHRBY3Rpb24pIHtcclxuICAgIHRyeSB7XHJcbiAgICAgICAgY29uc3QgcmVzcG9uc2UgPSB5aWVsZCBjYWxsKGNhbGxBcGkpXHJcbiAgICAgICAgaWYgKHJlc3BvbnNlLnN0YXR1cyA9PT0gMjAwICYmIHJlc3BvbnNlLmRhdGEucmVzdWx0cy5sZW5ndGggPiAwKSB7XHJcbiAgICAgICAgICAgIHlpZWxkIHB1dChub3dQbGF5aW5nU3VjY2VzcyhyZXNwb25zZS5kYXRhLnJlc3VsdHMpKTtcclxuICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICB5aWVsZCBwdXQobm93UGxheWluZ0ZhaWwocmVzcG9uc2UuZGF0YS5zdGF0dXNfbWVzc2FnZSkpO1xyXG4gICAgICAgIH1cclxuICAgIH0gY2F0Y2ggKGVycm9yKSB7XHJcbiAgICAgICAgeWllbGQgcHV0KG5vd1BsYXlpbmdGYWlsKGVycm9yLm1lc3NhZ2UpKTtcclxuICAgIH1cclxufVxyXG5cclxuZnVuY3Rpb24gY2FsbEFwaSgpIHtcclxuICAgIHJldHVybiAgYXhpb3MuZ2V0KFwiaHR0cHM6Ly9hcGkudGhlbW92aWVkYi5vcmcvMy9kaXNjb3Zlci9tb3ZpZT9hcGlfa2V5PTJjZDYwZTcwZTIzZDFhYWM0MWYyNGEyNDJjMWUwOGY4JnByaW1hcnlfcmVsZWFzZV9kYXRlLmd0ZT0yMDIwLTA2LTAxJnByaW1hcnlfcmVsZWFzZV9kYXRlLmx0ZT0yMDIwLTA4LTMwXCIpO1xyXG5cclxufVxyXG5cclxuXHJcblxyXG5leHBvcnQgY29uc3Qgd2F0Y2hlck5vd1BsYXlpbmcgPSBbXHJcbiAgICB0YWtlTGF0ZXN0KE5PV1BMQVlJTkdGRVRDSCwgd29ya2VyU2FnYU5vd1BsYXlpbmcpLFxyXG5dOyIsImltcG9ydCB7IHdhdGNoZXJOb3dQbGF5aW5nIH0gZnJvbSAncmVkdXgvc2FnYXMvTW92aWVTYWdhcyc7XHJcbmV4cG9ydCBkZWZhdWx0IFtcclxuICAuLi53YXRjaGVyTm93UGxheWluZyxcclxuXTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJheGlvc1wiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJyZWFjdFwiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJyZWFjdC1yZWR1eFwiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJyZWR1eFwiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJyZWR1eC1kZXZ0b29scy1leHRlbnNpb25cIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwicmVkdXgtcGVyc2lzdFwiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJyZWR1eC1wZXJzaXN0LXRyYW5zZm9ybS1lbmNyeXB0XCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcInJlZHV4LXBlcnNpc3QtdHJhbnNmb3JtLWZpbHRlclwiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJyZWR1eC1wZXJzaXN0L2ludGVncmF0aW9uL3JlYWN0XCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcInJlZHV4LXBlcnNpc3QvbGliL3N0b3JhZ2VcIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwicmVkdXgtc2FnYVwiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJyZWR1eC1zYWdhL2VmZmVjdHNcIik7Il0sInNvdXJjZVJvb3QiOiIifQ==