"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("app/(auth)/login/page",{

/***/ "(app-pages-browser)/./app/(auth)/login/page.tsx":
/*!***********************************!*\
  !*** ./app/(auth)/login/page.tsx ***!
  \***********************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": function() { return /* binding */ Login; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/jsx-dev-runtime.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _components_LoginForm__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @/components/LoginForm */ \"(app-pages-browser)/./components/LoginForm.tsx\");\n/* harmony import */ var _components_SignupForm__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @/components/SignupForm */ \"(app-pages-browser)/./components/SignupForm.tsx\");\n/* __next_internal_client_entry_do_not_use__ default auto */ \nvar _s = $RefreshSig$();\n\n\n\nfunction Login() {\n    _s();\n    const [activeTab, setActiveTab] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(\"account\");\n    const switchToSignupTab = ()=>{\n        setActiveTab(\"password\");\n    };\n    const switchToLoginTab = ()=>{\n        setActiveTab(\"account\");\n    };\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        className: \"flex flex-col h-screen justify-center items-center self-center bg-[#e2e]\",\n        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n            className: \"flex flex-col mt-10 box-border shadow-primary shadow-xl border-2 w-fit p-10 rounded-xl bg-secondary\",\n            children: [\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                    className: \"grid w-[500px] grid-cols-2\",\n                    children: [\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                            className: \"p-3 font-bold rounded-lg \".concat(activeTab === \"account\" ? \"bg-primary text-secondary\" : \"\"),\n                            onClick: ()=>setActiveTab(\"account\"),\n                            children: \"Anmelden\"\n                        }, void 0, false, {\n                            fileName: \"F:\\\\PROJECT-2023\\\\B2BMATCH\\\\b2bmatch-ui-final\\\\app\\\\(auth)\\\\login\\\\page.tsx\",\n                            lineNumber: 21,\n                            columnNumber: 11\n                        }, this),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                            className: \"p-3 font-bold rounded-lg \".concat(activeTab === \"password\" ? \"bg-primary text-secondary\" : \"\"),\n                            onClick: ()=>setActiveTab(\"password\"),\n                            children: \"Melden Sie sich an\"\n                        }, void 0, false, {\n                            fileName: \"F:\\\\PROJECT-2023\\\\B2BMATCH\\\\b2bmatch-ui-final\\\\app\\\\(auth)\\\\login\\\\page.tsx\",\n                            lineNumber: 29,\n                            columnNumber: 11\n                        }, this)\n                    ]\n                }, void 0, true, {\n                    fileName: \"F:\\\\PROJECT-2023\\\\B2BMATCH\\\\b2bmatch-ui-final\\\\app\\\\(auth)\\\\login\\\\page.tsx\",\n                    lineNumber: 20,\n                    columnNumber: 9\n                }, this),\n                activeTab === \"account\" ? /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_LoginForm__WEBPACK_IMPORTED_MODULE_2__[\"default\"], {\n                    switchToSignupTab: switchToSignupTab\n                }, void 0, false, {\n                    fileName: \"F:\\\\PROJECT-2023\\\\B2BMATCH\\\\b2bmatch-ui-final\\\\app\\\\(auth)\\\\login\\\\page.tsx\",\n                    lineNumber: 39,\n                    columnNumber: 11\n                }, this) : /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_SignupForm__WEBPACK_IMPORTED_MODULE_3__[\"default\"], {\n                    switchToLoginTab: switchToLoginTab\n                }, void 0, false, {\n                    fileName: \"F:\\\\PROJECT-2023\\\\B2BMATCH\\\\b2bmatch-ui-final\\\\app\\\\(auth)\\\\login\\\\page.tsx\",\n                    lineNumber: 41,\n                    columnNumber: 11\n                }, this)\n            ]\n        }, void 0, true, {\n            fileName: \"F:\\\\PROJECT-2023\\\\B2BMATCH\\\\b2bmatch-ui-final\\\\app\\\\(auth)\\\\login\\\\page.tsx\",\n            lineNumber: 19,\n            columnNumber: 7\n        }, this)\n    }, void 0, false, {\n        fileName: \"F:\\\\PROJECT-2023\\\\B2BMATCH\\\\b2bmatch-ui-final\\\\app\\\\(auth)\\\\login\\\\page.tsx\",\n        lineNumber: 18,\n        columnNumber: 5\n    }, this);\n}\n_s(Login, \"fa6uTp24tTUT819R+uy9Myoqdd0=\");\n_c = Login;\nvar _c;\n$RefreshReg$(_c, \"Login\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwcC1wYWdlcy1icm93c2VyKS8uL2FwcC8oYXV0aCkvbG9naW4vcGFnZS50c3giLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7QUFDaUM7QUFDYztBQUNFO0FBRWxDLFNBQVNHOztJQUN0QixNQUFNLENBQUNDLFdBQVdDLGFBQWEsR0FBR0wsK0NBQVFBLENBQUM7SUFFM0MsTUFBTU0sb0JBQW9CO1FBQ3hCRCxhQUFhO0lBQ2Y7SUFFQSxNQUFNRSxtQkFBbUI7UUFDdkJGLGFBQWE7SUFDZjtJQUVBLHFCQUNFLDhEQUFDRztRQUFJQyxXQUFVO2tCQUNiLDRFQUFDRDtZQUFJQyxXQUFVOzs4QkFDYiw4REFBQ0Q7b0JBQUlDLFdBQVU7O3NDQUNiLDhEQUFDQzs0QkFDQ0QsV0FBVyw0QkFFVixPQURDTCxjQUFjLFlBQVksOEJBQThCOzRCQUUxRE8sU0FBUyxJQUFNTixhQUFhO3NDQUM3Qjs7Ozs7O3NDQUdELDhEQUFDSzs0QkFDQ0QsV0FBVyw0QkFFVixPQURDTCxjQUFjLGFBQWEsOEJBQThCOzRCQUUzRE8sU0FBUyxJQUFNTixhQUFhO3NDQUM3Qjs7Ozs7Ozs7Ozs7O2dCQUlGRCxjQUFjLDBCQUNiLDhEQUFDSCw2REFBU0E7b0JBQUNLLG1CQUFtQkE7Ozs7O3lDQUU5Qiw4REFBQ0osOERBQVVBO29CQUFDSyxrQkFBa0JBOzs7Ozs7Ozs7Ozs7Ozs7OztBQUt4QztHQXhDd0JKO0tBQUFBIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL2FwcC8oYXV0aCkvbG9naW4vcGFnZS50c3g/MWI5OSJdLCJzb3VyY2VzQ29udGVudCI6WyJcInVzZSBjbGllbnRcIjtcclxuaW1wb3J0IHsgdXNlU3RhdGUgfSBmcm9tIFwicmVhY3RcIjtcclxuaW1wb3J0IExvZ2luRm9ybSBmcm9tIFwiQC9jb21wb25lbnRzL0xvZ2luRm9ybVwiO1xyXG5pbXBvcnQgU2lnbnVwRm9ybSBmcm9tIFwiQC9jb21wb25lbnRzL1NpZ251cEZvcm1cIjtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIExvZ2luKCkge1xyXG4gIGNvbnN0IFthY3RpdmVUYWIsIHNldEFjdGl2ZVRhYl0gPSB1c2VTdGF0ZShcImFjY291bnRcIik7XHJcblxyXG4gIGNvbnN0IHN3aXRjaFRvU2lnbnVwVGFiID0gKCkgPT4ge1xyXG4gICAgc2V0QWN0aXZlVGFiKFwicGFzc3dvcmRcIik7XHJcbiAgfTtcclxuXHJcbiAgY29uc3Qgc3dpdGNoVG9Mb2dpblRhYiA9ICgpID0+IHtcclxuICAgIHNldEFjdGl2ZVRhYihcImFjY291bnRcIik7XHJcbiAgfTtcclxuXHJcbiAgcmV0dXJuIChcclxuICAgIDxkaXYgY2xhc3NOYW1lPVwiZmxleCBmbGV4LWNvbCBoLXNjcmVlbiBqdXN0aWZ5LWNlbnRlciBpdGVtcy1jZW50ZXIgc2VsZi1jZW50ZXIgYmctWyNlMmVdXCI+XHJcbiAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZmxleCBmbGV4LWNvbCBtdC0xMCBib3gtYm9yZGVyIHNoYWRvdy1wcmltYXJ5IHNoYWRvdy14bCBib3JkZXItMiB3LWZpdCBwLTEwIHJvdW5kZWQteGwgYmctc2Vjb25kYXJ5XCI+XHJcbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJncmlkIHctWzUwMHB4XSBncmlkLWNvbHMtMlwiPlxyXG4gICAgICAgICAgPGJ1dHRvblxyXG4gICAgICAgICAgICBjbGFzc05hbWU9e2BwLTMgZm9udC1ib2xkIHJvdW5kZWQtbGcgJHtcclxuICAgICAgICAgICAgICBhY3RpdmVUYWIgPT09IFwiYWNjb3VudFwiID8gXCJiZy1wcmltYXJ5IHRleHQtc2Vjb25kYXJ5XCIgOiBcIlwiXHJcbiAgICAgICAgICAgIH1gfVxyXG4gICAgICAgICAgICBvbkNsaWNrPXsoKSA9PiBzZXRBY3RpdmVUYWIoXCJhY2NvdW50XCIpfVxyXG4gICAgICAgICAgPlxyXG4gICAgICAgICAgICBBbm1lbGRlblxyXG4gICAgICAgICAgPC9idXR0b24+XHJcbiAgICAgICAgICA8YnV0dG9uXHJcbiAgICAgICAgICAgIGNsYXNzTmFtZT17YHAtMyBmb250LWJvbGQgcm91bmRlZC1sZyAke1xyXG4gICAgICAgICAgICAgIGFjdGl2ZVRhYiA9PT0gXCJwYXNzd29yZFwiID8gXCJiZy1wcmltYXJ5IHRleHQtc2Vjb25kYXJ5XCIgOiBcIlwiXHJcbiAgICAgICAgICAgIH1gfVxyXG4gICAgICAgICAgICBvbkNsaWNrPXsoKSA9PiBzZXRBY3RpdmVUYWIoXCJwYXNzd29yZFwiKX1cclxuICAgICAgICAgID5cclxuICAgICAgICAgICAgTWVsZGVuIFNpZSBzaWNoIGFuXHJcbiAgICAgICAgICA8L2J1dHRvbj5cclxuICAgICAgICA8L2Rpdj5cclxuICAgICAgICB7YWN0aXZlVGFiID09PSBcImFjY291bnRcIiA/IChcclxuICAgICAgICAgIDxMb2dpbkZvcm0gc3dpdGNoVG9TaWdudXBUYWI9e3N3aXRjaFRvU2lnbnVwVGFifSAvPlxyXG4gICAgICAgICkgOiAoXHJcbiAgICAgICAgICA8U2lnbnVwRm9ybSBzd2l0Y2hUb0xvZ2luVGFiPXtzd2l0Y2hUb0xvZ2luVGFifSAvPlxyXG4gICAgICAgICl9XHJcbiAgICAgIDwvZGl2PlxyXG4gICAgPC9kaXY+XHJcbiAgKTtcclxufVxyXG4iXSwibmFtZXMiOlsidXNlU3RhdGUiLCJMb2dpbkZvcm0iLCJTaWdudXBGb3JtIiwiTG9naW4iLCJhY3RpdmVUYWIiLCJzZXRBY3RpdmVUYWIiLCJzd2l0Y2hUb1NpZ251cFRhYiIsInN3aXRjaFRvTG9naW5UYWIiLCJkaXYiLCJjbGFzc05hbWUiLCJidXR0b24iLCJvbkNsaWNrIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///(app-pages-browser)/./app/(auth)/login/page.tsx\n"));

/***/ })

});