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

/***/ "(app-pages-browser)/./components/LoginForm.tsx":
/*!**********************************!*\
  !*** ./components/LoginForm.tsx ***!
  \**********************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/jsx-dev-runtime.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var react_icons_kit_feather_eyeOff__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-icons-kit/feather/eyeOff */ \"(app-pages-browser)/./node_modules/react-icons-kit/feather/eyeOff.js\");\n/* __next_internal_client_entry_do_not_use__ default auto */ \nvar _s = $RefreshSig$();\n\n\nconst LoginForm = (param)=>{\n    let { switchToSignupTab } = param;\n    _s();\n    var _s1 = $RefreshSig$();\n    const [email, setEmail] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(\"\");\n    const [password, setPassword] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(\"\");\n    const [showPassword, setShowPassword] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(false);\n    const handleSignupClick = ()=>{\n        switchToSignupTab();\n        console.log(\"signup clicked\");\n    };\n    const togglePasswordVisibility = ()=>{\n        _s1();\n        const [password, setPassword] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(\"\");\n        const [type, setType] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(\"password\");\n        const [icon, setIcon] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(react_icons_kit_feather_eyeOff__WEBPACK_IMPORTED_MODULE_2__.eyeOff);\n        setShowPassword((prevShowPassword)=>!prevShowPassword);\n        const togglePasswordVisibility = ()=>{\n            setShowPassword((prevShowPassword)=>!prevShowPassword);\n        };\n    };\n    _s1(togglePasswordVisibility, \"I2raawZYyYd+3B42R0mKPEFmces=\");\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"section\", {\n        className: \"shadow-none border-none outline-none\",\n        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n            className: \"flex flex-col items-center justify-center h-full \",\n            children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"w-full bg-secondary rounded-lg shadow dark:border md:mt-0 sm:max-w-md xl:p-0 dark:bg-gray-800 dark:border-gray-700 \",\n                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                    className: \"p-6 space-y-4 md:space-y-6 sm:p-8\",\n                    children: [\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h1\", {\n                            className: \"text-xl font-bold leading-tight tracking-tight text-gray-900 md:text-2xl dark:text-white\",\n                            children: \"Melden Sie sich bei Ihrem Konto an\"\n                        }, void 0, false, {\n                            fileName: \"F:\\\\PROJECT-2023\\\\B2BMATCH\\\\b2bmatch-ui-final\\\\components\\\\LoginForm.tsx\",\n                            lineNumber: 32,\n                            columnNumber: 13\n                        }, undefined),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"form\", {\n                            className: \"space-y-4 md:space-y-6\",\n                            action: \"/\",\n                            children: [\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                    children: [\n                                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"label\", {\n                                            htmlFor: \"email\",\n                                            className: \"block mb-2 text-sm font-medium text-gray-900 dark:text-white\",\n                                            children: \"Deine E-Mail\"\n                                        }, void 0, false, {\n                                            fileName: \"F:\\\\PROJECT-2023\\\\B2BMATCH\\\\b2bmatch-ui-final\\\\components\\\\LoginForm.tsx\",\n                                            lineNumber: 37,\n                                            columnNumber: 17\n                                        }, undefined),\n                                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"input\", {\n                                            type: \"email\",\n                                            name: \"email\",\n                                            id: \"email\",\n                                            className: \"bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500\",\n                                            placeholder: \"name@firma.ch\"\n                                        }, void 0, false, {\n                                            fileName: \"F:\\\\PROJECT-2023\\\\B2BMATCH\\\\b2bmatch-ui-final\\\\components\\\\LoginForm.tsx\",\n                                            lineNumber: 43,\n                                            columnNumber: 17\n                                        }, undefined)\n                                    ]\n                                }, void 0, true, {\n                                    fileName: \"F:\\\\PROJECT-2023\\\\B2BMATCH\\\\b2bmatch-ui-final\\\\components\\\\LoginForm.tsx\",\n                                    lineNumber: 36,\n                                    columnNumber: 15\n                                }, undefined),\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                    children: [\n                                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"label\", {\n                                            htmlFor: \"username\",\n                                            className: \"block mb-2 text-sm font-medium text-gray-900 dark:text-white\",\n                                            children: \"Nutzername\"\n                                        }, void 0, false, {\n                                            fileName: \"F:\\\\PROJECT-2023\\\\B2BMATCH\\\\b2bmatch-ui-final\\\\components\\\\LoginForm.tsx\",\n                                            lineNumber: 52,\n                                            columnNumber: 17\n                                        }, undefined),\n                                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"input\", {\n                                            type: \"username\",\n                                            name: \"username\",\n                                            id: \"username\",\n                                            className: \"bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500\",\n                                            placeholder: \"Nike\"\n                                        }, void 0, false, {\n                                            fileName: \"F:\\\\PROJECT-2023\\\\B2BMATCH\\\\b2bmatch-ui-final\\\\components\\\\LoginForm.tsx\",\n                                            lineNumber: 58,\n                                            columnNumber: 17\n                                        }, undefined)\n                                    ]\n                                }, void 0, true, {\n                                    fileName: \"F:\\\\PROJECT-2023\\\\B2BMATCH\\\\b2bmatch-ui-final\\\\components\\\\LoginForm.tsx\",\n                                    lineNumber: 51,\n                                    columnNumber: 15\n                                }, undefined),\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                    children: [\n                                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"label\", {\n                                            htmlFor: \"password\",\n                                            className: \"block mb-2 text-sm font-medium text-gray-900 dark:text-white\",\n                                            children: \"Passwort\"\n                                        }, void 0, false, {\n                                            fileName: \"F:\\\\PROJECT-2023\\\\B2BMATCH\\\\b2bmatch-ui-final\\\\components\\\\LoginForm.tsx\",\n                                            lineNumber: 67,\n                                            columnNumber: 17\n                                        }, undefined),\n                                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"input\", {\n                                            type: \"password\",\n                                            name: \"password\",\n                                            id: \"password\",\n                                            placeholder: \"••••••••\",\n                                            className: \"bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500\",\n                                            required: true\n                                        }, void 0, false, {\n                                            fileName: \"F:\\\\PROJECT-2023\\\\B2BMATCH\\\\b2bmatch-ui-final\\\\components\\\\LoginForm.tsx\",\n                                            lineNumber: 73,\n                                            columnNumber: 17\n                                        }, undefined)\n                                    ]\n                                }, void 0, true, {\n                                    fileName: \"F:\\\\PROJECT-2023\\\\B2BMATCH\\\\b2bmatch-ui-final\\\\components\\\\LoginForm.tsx\",\n                                    lineNumber: 66,\n                                    columnNumber: 15\n                                }, undefined),\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                    className: \"flex items-center justify-between\",\n                                    children: [\n                                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                            className: \"flex items-start\",\n                                            children: [\n                                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                                    className: \"flex items-center h-5\",\n                                                    children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"input\", {\n                                                        id: \"remember\",\n                                                        \"aria-describedby\": \"remember\",\n                                                        type: \"checkbox\",\n                                                        className: \"w-4 h-4 border border-gray-300 rounded bg-gray-50 focus:ring-3 focus:ring-primary-300 dark:bg-gray-700 dark:border-gray-600 dark:focus:ring-primary-600 dark:ring-offset-gray-800\"\n                                                    }, void 0, false, {\n                                                        fileName: \"F:\\\\PROJECT-2023\\\\B2BMATCH\\\\b2bmatch-ui-final\\\\components\\\\LoginForm.tsx\",\n                                                        lineNumber: 86,\n                                                        columnNumber: 21\n                                                    }, undefined)\n                                                }, void 0, false, {\n                                                    fileName: \"F:\\\\PROJECT-2023\\\\B2BMATCH\\\\b2bmatch-ui-final\\\\components\\\\LoginForm.tsx\",\n                                                    lineNumber: 85,\n                                                    columnNumber: 19\n                                                }, undefined),\n                                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                                    className: \"ml-3 text-sm\",\n                                                    children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"label\", {\n                                                        htmlFor: \"remember\",\n                                                        className: \"text-gray-500 dark:text-gray-300\",\n                                                        children: \"Erinnere dich an mich\"\n                                                    }, void 0, false, {\n                                                        fileName: \"F:\\\\PROJECT-2023\\\\B2BMATCH\\\\b2bmatch-ui-final\\\\components\\\\LoginForm.tsx\",\n                                                        lineNumber: 94,\n                                                        columnNumber: 21\n                                                    }, undefined)\n                                                }, void 0, false, {\n                                                    fileName: \"F:\\\\PROJECT-2023\\\\B2BMATCH\\\\b2bmatch-ui-final\\\\components\\\\LoginForm.tsx\",\n                                                    lineNumber: 93,\n                                                    columnNumber: 19\n                                                }, undefined)\n                                            ]\n                                        }, void 0, true, {\n                                            fileName: \"F:\\\\PROJECT-2023\\\\B2BMATCH\\\\b2bmatch-ui-final\\\\components\\\\LoginForm.tsx\",\n                                            lineNumber: 84,\n                                            columnNumber: 17\n                                        }, undefined),\n                                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"a\", {\n                                            href: \"#\",\n                                            className: \"text-sm font-medium text-primary-600 hover:underline dark:text-primary-500\",\n                                            children: \"Passwort vergessen?\"\n                                        }, void 0, false, {\n                                            fileName: \"F:\\\\PROJECT-2023\\\\B2BMATCH\\\\b2bmatch-ui-final\\\\components\\\\LoginForm.tsx\",\n                                            lineNumber: 102,\n                                            columnNumber: 17\n                                        }, undefined)\n                                    ]\n                                }, void 0, true, {\n                                    fileName: \"F:\\\\PROJECT-2023\\\\B2BMATCH\\\\b2bmatch-ui-final\\\\components\\\\LoginForm.tsx\",\n                                    lineNumber: 83,\n                                    columnNumber: 15\n                                }, undefined),\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                                    type: \"submit\",\n                                    className: \"w-full text-secondary bg-primary hover:bg-primary-700 focus:ring-4 focus:outline-none focus:ring-primary-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-primary-600 dark:hover:bg-primary-700 dark:focus:ring-primary-800\",\n                                    children: \"anmelden\"\n                                }, void 0, false, {\n                                    fileName: \"F:\\\\PROJECT-2023\\\\B2BMATCH\\\\b2bmatch-ui-final\\\\components\\\\LoginForm.tsx\",\n                                    lineNumber: 109,\n                                    columnNumber: 15\n                                }, undefined),\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                                    className: \"text-sm font-light text-gray-500 dark:text-gray-400\",\n                                    children: [\n                                        \"Sie haben noch kein Konto?\",\n                                        \" \",\n                                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                                            type: \"button\",\n                                            onClick: handleSignupClick,\n                                            className: \"font-medium text-primary-600 hover:underline dark:text-primary-500\",\n                                            children: \"Registrieren\"\n                                        }, void 0, false, {\n                                            fileName: \"F:\\\\PROJECT-2023\\\\B2BMATCH\\\\b2bmatch-ui-final\\\\components\\\\LoginForm.tsx\",\n                                            lineNumber: 117,\n                                            columnNumber: 17\n                                        }, undefined)\n                                    ]\n                                }, void 0, true, {\n                                    fileName: \"F:\\\\PROJECT-2023\\\\B2BMATCH\\\\b2bmatch-ui-final\\\\components\\\\LoginForm.tsx\",\n                                    lineNumber: 115,\n                                    columnNumber: 15\n                                }, undefined)\n                            ]\n                        }, void 0, true, {\n                            fileName: \"F:\\\\PROJECT-2023\\\\B2BMATCH\\\\b2bmatch-ui-final\\\\components\\\\LoginForm.tsx\",\n                            lineNumber: 35,\n                            columnNumber: 13\n                        }, undefined)\n                    ]\n                }, void 0, true, {\n                    fileName: \"F:\\\\PROJECT-2023\\\\B2BMATCH\\\\b2bmatch-ui-final\\\\components\\\\LoginForm.tsx\",\n                    lineNumber: 31,\n                    columnNumber: 11\n                }, undefined)\n            }, void 0, false, {\n                fileName: \"F:\\\\PROJECT-2023\\\\B2BMATCH\\\\b2bmatch-ui-final\\\\components\\\\LoginForm.tsx\",\n                lineNumber: 30,\n                columnNumber: 9\n            }, undefined)\n        }, void 0, false, {\n            fileName: \"F:\\\\PROJECT-2023\\\\B2BMATCH\\\\b2bmatch-ui-final\\\\components\\\\LoginForm.tsx\",\n            lineNumber: 29,\n            columnNumber: 7\n        }, undefined)\n    }, void 0, false, {\n        fileName: \"F:\\\\PROJECT-2023\\\\B2BMATCH\\\\b2bmatch-ui-final\\\\components\\\\LoginForm.tsx\",\n        lineNumber: 28,\n        columnNumber: 5\n    }, undefined);\n};\n_s(LoginForm, \"aAtMU91qNINbkRAWl1ktzwgKBdk=\");\n_c = LoginForm;\n/* harmony default export */ __webpack_exports__[\"default\"] = (LoginForm);\nvar _c;\n$RefreshReg$(_c, \"LoginForm\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwcC1wYWdlcy1icm93c2VyKS8uL2NvbXBvbmVudHMvTG9naW5Gb3JtLnRzeCIsIm1hcHBpbmdzIjoiOzs7Ozs7O0FBQ2lDO0FBRXVCO0FBR3hELE1BQU1FLFlBQVk7UUFBQyxFQUFFQyxpQkFBaUIsRUFBRTs7O0lBQ3RDLE1BQU0sQ0FBQ0MsT0FBT0MsU0FBUyxHQUFHTCwrQ0FBUUEsQ0FBQztJQUNuQyxNQUFNLENBQUNNLFVBQVVDLFlBQVksR0FBR1AsK0NBQVFBLENBQUM7SUFDekMsTUFBTSxDQUFDUSxjQUFjQyxnQkFBZ0IsR0FBR1QsK0NBQVFBLENBQUM7SUFFakQsTUFBTVUsb0JBQW9CO1FBQ3hCUDtRQUNBUSxRQUFRQyxHQUFHLENBQUM7SUFDZDtJQUVBLE1BQU1DLDJCQUEyQjs7UUFDL0IsTUFBTSxDQUFDUCxVQUFVQyxZQUFZLEdBQUdQLCtDQUFRQSxDQUFDO1FBQ3pDLE1BQU0sQ0FBQ2MsTUFBTUMsUUFBUSxHQUFHZiwrQ0FBUUEsQ0FBQztRQUNqQyxNQUFNLENBQUNnQixNQUFNQyxRQUFRLEdBQUdqQiwrQ0FBUUEsQ0FBQ0Msa0VBQU1BO1FBQ3ZDUSxnQkFBZ0IsQ0FBQ1MsbUJBQXFCLENBQUNBO1FBQ3ZDLE1BQU1MLDJCQUEyQjtZQUMvQkosZ0JBQWdCLENBQUNTLG1CQUFxQixDQUFDQTtRQUN6QztJQUVGO1FBVE1MO0lBVU4scUJBQ0UsOERBQUNNO1FBQVFDLFdBQVU7a0JBQ2pCLDRFQUFDQztZQUFJRCxXQUFVO3NCQUNiLDRFQUFDQztnQkFBSUQsV0FBVTswQkFDYiw0RUFBQ0M7b0JBQUlELFdBQVU7O3NDQUNiLDhEQUFDRTs0QkFBR0YsV0FBVTtzQ0FBMkY7Ozs7OztzQ0FHekcsOERBQUNHOzRCQUFLSCxXQUFVOzRCQUF5QkksUUFBTzs7OENBQzlDLDhEQUFDSDs7c0RBQ0MsOERBQUNJOzRDQUNDQyxTQUFROzRDQUNSTixXQUFVO3NEQUNYOzs7Ozs7c0RBR0QsOERBQUNPOzRDQUNDYixNQUFLOzRDQUNMYyxNQUFLOzRDQUNMQyxJQUFHOzRDQUNIVCxXQUFVOzRDQUNWVSxhQUFZOzs7Ozs7Ozs7Ozs7OENBR2hCLDhEQUFDVDs7c0RBQ0MsOERBQUNJOzRDQUNDQyxTQUFROzRDQUNSTixXQUFVO3NEQUNYOzs7Ozs7c0RBR0QsOERBQUNPOzRDQUNDYixNQUFLOzRDQUNMYyxNQUFLOzRDQUNMQyxJQUFHOzRDQUNIVCxXQUFVOzRDQUNWVSxhQUFZOzs7Ozs7Ozs7Ozs7OENBR2hCLDhEQUFDVDs7c0RBQ0MsOERBQUNJOzRDQUNDQyxTQUFROzRDQUNSTixXQUFVO3NEQUNYOzs7Ozs7c0RBR0QsOERBQUNPOzRDQUNDYixNQUFLOzRDQUNMYyxNQUFLOzRDQUNMQyxJQUFHOzRDQUNIQyxhQUFZOzRDQUNaVixXQUFVOzRDQUNWVyxRQUFROzs7Ozs7Ozs7Ozs7OENBSVosOERBQUNWO29DQUFJRCxXQUFVOztzREFDYiw4REFBQ0M7NENBQUlELFdBQVU7OzhEQUNiLDhEQUFDQztvREFBSUQsV0FBVTs4REFDYiw0RUFBQ087d0RBQ0NFLElBQUc7d0RBQ0hHLG9CQUFpQjt3REFDakJsQixNQUFLO3dEQUNMTSxXQUFVOzs7Ozs7Ozs7Ozs4REFHZCw4REFBQ0M7b0RBQUlELFdBQVU7OERBQ2IsNEVBQUNLO3dEQUNDQyxTQUFRO3dEQUNSTixXQUFVO2tFQUNYOzs7Ozs7Ozs7Ozs7Ozs7OztzREFLTCw4REFBQ2E7NENBQ0NDLE1BQUs7NENBQ0xkLFdBQVU7c0RBQ1g7Ozs7Ozs7Ozs7Ozs4Q0FJSCw4REFBQ2U7b0NBQ0NyQixNQUFLO29DQUNMTSxXQUFVOzhDQUNYOzs7Ozs7OENBR0QsOERBQUNnQjtvQ0FBRWhCLFdBQVU7O3dDQUFzRDt3Q0FDdEM7c0RBQzNCLDhEQUFDZTs0Q0FDQ3JCLE1BQUs7NENBQ0x1QixTQUFTM0I7NENBQ1RVLFdBQVU7c0RBQ1g7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQVVqQjtHQTVITWxCO0tBQUFBO0FBOEhOLCtEQUFlQSxTQUFTQSxFQUFDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL2NvbXBvbmVudHMvTG9naW5Gb3JtLnRzeD81YjA5Il0sInNvdXJjZXNDb250ZW50IjpbIlwidXNlIGNsaWVudFwiO1xyXG5pbXBvcnQgeyB1c2VTdGF0ZSB9IGZyb20gXCJyZWFjdFwiO1xyXG5pbXBvcnQgeyBJY29uIH0gZnJvbSAncmVhY3QtaWNvbnMta2l0JztcclxuaW1wb3J0IHsgZXllT2ZmIH0gZnJvbSAncmVhY3QtaWNvbnMta2l0L2ZlYXRoZXIvZXllT2ZmJztcclxuaW1wb3J0IHsgZXllIH0gZnJvbSAncmVhY3QtaWNvbnMta2l0L2ZlYXRoZXIvZXllJ1xyXG5cclxuY29uc3QgTG9naW5Gb3JtID0gKHsgc3dpdGNoVG9TaWdudXBUYWIgfSkgPT4ge1xyXG4gIGNvbnN0IFtlbWFpbCwgc2V0RW1haWxdID0gdXNlU3RhdGUoXCJcIik7XHJcbiAgY29uc3QgW3Bhc3N3b3JkLCBzZXRQYXNzd29yZF0gPSB1c2VTdGF0ZShcIlwiKTtcclxuICBjb25zdCBbc2hvd1Bhc3N3b3JkLCBzZXRTaG93UGFzc3dvcmRdID0gdXNlU3RhdGUoZmFsc2UpO1xyXG5cclxuICBjb25zdCBoYW5kbGVTaWdudXBDbGljayA9ICgpID0+IHtcclxuICAgIHN3aXRjaFRvU2lnbnVwVGFiKCk7XHJcbiAgICBjb25zb2xlLmxvZyhcInNpZ251cCBjbGlja2VkXCIpO1xyXG4gIH07XHJcblxyXG4gIGNvbnN0IHRvZ2dsZVBhc3N3b3JkVmlzaWJpbGl0eSA9ICgpID0+IHtcclxuICAgIGNvbnN0IFtwYXNzd29yZCwgc2V0UGFzc3dvcmRdID0gdXNlU3RhdGUoXCJcIik7XHJcbiAgICBjb25zdCBbdHlwZSwgc2V0VHlwZV0gPSB1c2VTdGF0ZSgncGFzc3dvcmQnKTtcclxuICAgIGNvbnN0IFtpY29uLCBzZXRJY29uXSA9IHVzZVN0YXRlKGV5ZU9mZik7XHJcbiAgICBzZXRTaG93UGFzc3dvcmQoKHByZXZTaG93UGFzc3dvcmQpID0+ICFwcmV2U2hvd1Bhc3N3b3JkKTtcclxuICAgIGNvbnN0IHRvZ2dsZVBhc3N3b3JkVmlzaWJpbGl0eSA9ICgpID0+IHtcclxuICAgICAgc2V0U2hvd1Bhc3N3b3JkKChwcmV2U2hvd1Bhc3N3b3JkKSA9PiAhcHJldlNob3dQYXNzd29yZCk7XHJcbiAgICB9O1xyXG4gICAgXHJcbiAgfTtcclxuICByZXR1cm4gKFxyXG4gICAgPHNlY3Rpb24gY2xhc3NOYW1lPVwic2hhZG93LW5vbmUgYm9yZGVyLW5vbmUgb3V0bGluZS1ub25lXCI+XHJcbiAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZmxleCBmbGV4LWNvbCBpdGVtcy1jZW50ZXIganVzdGlmeS1jZW50ZXIgaC1mdWxsIFwiPlxyXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwidy1mdWxsIGJnLXNlY29uZGFyeSByb3VuZGVkLWxnIHNoYWRvdyBkYXJrOmJvcmRlciBtZDptdC0wIHNtOm1heC13LW1kIHhsOnAtMCBkYXJrOmJnLWdyYXktODAwIGRhcms6Ym9yZGVyLWdyYXktNzAwIFwiPlxyXG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJwLTYgc3BhY2UteS00IG1kOnNwYWNlLXktNiBzbTpwLThcIj5cclxuICAgICAgICAgICAgPGgxIGNsYXNzTmFtZT1cInRleHQteGwgZm9udC1ib2xkIGxlYWRpbmctdGlnaHQgdHJhY2tpbmctdGlnaHQgdGV4dC1ncmF5LTkwMCBtZDp0ZXh0LTJ4bCBkYXJrOnRleHQtd2hpdGVcIj5cclxuICAgICAgICAgICAgICBNZWxkZW4gU2llIHNpY2ggYmVpIElocmVtIEtvbnRvIGFuXHJcbiAgICAgICAgICAgIDwvaDE+XHJcbiAgICAgICAgICAgIDxmb3JtIGNsYXNzTmFtZT1cInNwYWNlLXktNCBtZDpzcGFjZS15LTZcIiBhY3Rpb249XCIvXCI+XHJcbiAgICAgICAgICAgICAgPGRpdj5cclxuICAgICAgICAgICAgICAgIDxsYWJlbFxyXG4gICAgICAgICAgICAgICAgICBodG1sRm9yPVwiZW1haWxcIlxyXG4gICAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJibG9jayBtYi0yIHRleHQtc20gZm9udC1tZWRpdW0gdGV4dC1ncmF5LTkwMCBkYXJrOnRleHQtd2hpdGVcIlxyXG4gICAgICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgICAgICBEZWluZSBFLU1haWxcclxuICAgICAgICAgICAgICAgIDwvbGFiZWw+XHJcbiAgICAgICAgICAgICAgICA8aW5wdXRcclxuICAgICAgICAgICAgICAgICAgdHlwZT1cImVtYWlsXCJcclxuICAgICAgICAgICAgICAgICAgbmFtZT1cImVtYWlsXCJcclxuICAgICAgICAgICAgICAgICAgaWQ9XCJlbWFpbFwiXHJcbiAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cImJnLWdyYXktNTAgYm9yZGVyIGJvcmRlci1ncmF5LTMwMCB0ZXh0LWdyYXktOTAwIHNtOnRleHQtc20gcm91bmRlZC1sZyBmb2N1czpyaW5nLXByaW1hcnktNjAwIGZvY3VzOmJvcmRlci1wcmltYXJ5LTYwMCBibG9jayB3LWZ1bGwgcC0yLjUgZGFyazpiZy1ncmF5LTcwMCBkYXJrOmJvcmRlci1ncmF5LTYwMCBkYXJrOnBsYWNlaG9sZGVyLWdyYXktNDAwIGRhcms6dGV4dC13aGl0ZSBkYXJrOmZvY3VzOnJpbmctYmx1ZS01MDAgZGFyazpmb2N1czpib3JkZXItYmx1ZS01MDBcIlxyXG4gICAgICAgICAgICAgICAgICBwbGFjZWhvbGRlcj1cIm5hbWVAZmlybWEuY2hcIlxyXG4gICAgICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICA8ZGl2PlxyXG4gICAgICAgICAgICAgICAgPGxhYmVsXHJcbiAgICAgICAgICAgICAgICAgIGh0bWxGb3I9XCJ1c2VybmFtZVwiXHJcbiAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cImJsb2NrIG1iLTIgdGV4dC1zbSBmb250LW1lZGl1bSB0ZXh0LWdyYXktOTAwIGRhcms6dGV4dC13aGl0ZVwiXHJcbiAgICAgICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAgICAgIE51dHplcm5hbWVcclxuICAgICAgICAgICAgICAgIDwvbGFiZWw+XHJcbiAgICAgICAgICAgICAgICA8aW5wdXRcclxuICAgICAgICAgICAgICAgICAgdHlwZT1cInVzZXJuYW1lXCJcclxuICAgICAgICAgICAgICAgICAgbmFtZT1cInVzZXJuYW1lXCJcclxuICAgICAgICAgICAgICAgICAgaWQ9XCJ1c2VybmFtZVwiXHJcbiAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cImJnLWdyYXktNTAgYm9yZGVyIGJvcmRlci1ncmF5LTMwMCB0ZXh0LWdyYXktOTAwIHNtOnRleHQtc20gcm91bmRlZC1sZyBmb2N1czpyaW5nLXByaW1hcnktNjAwIGZvY3VzOmJvcmRlci1wcmltYXJ5LTYwMCBibG9jayB3LWZ1bGwgcC0yLjUgZGFyazpiZy1ncmF5LTcwMCBkYXJrOmJvcmRlci1ncmF5LTYwMCBkYXJrOnBsYWNlaG9sZGVyLWdyYXktNDAwIGRhcms6dGV4dC13aGl0ZSBkYXJrOmZvY3VzOnJpbmctYmx1ZS01MDAgZGFyazpmb2N1czpib3JkZXItYmx1ZS01MDBcIlxyXG4gICAgICAgICAgICAgICAgICBwbGFjZWhvbGRlcj1cIk5pa2VcIlxyXG4gICAgICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICA8ZGl2PlxyXG4gICAgICAgICAgICAgICAgPGxhYmVsXHJcbiAgICAgICAgICAgICAgICAgIGh0bWxGb3I9XCJwYXNzd29yZFwiXHJcbiAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cImJsb2NrIG1iLTIgdGV4dC1zbSBmb250LW1lZGl1bSB0ZXh0LWdyYXktOTAwIGRhcms6dGV4dC13aGl0ZVwiXHJcbiAgICAgICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAgICAgIFBhc3N3b3J0XHJcbiAgICAgICAgICAgICAgICA8L2xhYmVsPlxyXG4gICAgICAgICAgICAgICAgPGlucHV0XHJcbiAgICAgICAgICAgICAgICAgIHR5cGU9XCJwYXNzd29yZFwiXHJcbiAgICAgICAgICAgICAgICAgIG5hbWU9XCJwYXNzd29yZFwiXHJcbiAgICAgICAgICAgICAgICAgIGlkPVwicGFzc3dvcmRcIlxyXG4gICAgICAgICAgICAgICAgICBwbGFjZWhvbGRlcj1cIuKAouKAouKAouKAouKAouKAouKAouKAolwiXHJcbiAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cImJnLWdyYXktNTAgYm9yZGVyIGJvcmRlci1ncmF5LTMwMCB0ZXh0LWdyYXktOTAwIHNtOnRleHQtc20gcm91bmRlZC1sZyBmb2N1czpyaW5nLXByaW1hcnktNjAwIGZvY3VzOmJvcmRlci1wcmltYXJ5LTYwMCBibG9jayB3LWZ1bGwgcC0yLjUgZGFyazpiZy1ncmF5LTcwMCBkYXJrOmJvcmRlci1ncmF5LTYwMCBkYXJrOnBsYWNlaG9sZGVyLWdyYXktNDAwIGRhcms6dGV4dC13aGl0ZSBkYXJrOmZvY3VzOnJpbmctYmx1ZS01MDAgZGFyazpmb2N1czpib3JkZXItYmx1ZS01MDBcIlxyXG4gICAgICAgICAgICAgICAgICByZXF1aXJlZFxyXG4gICAgICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgICAgIFxyXG4gICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZmxleCBpdGVtcy1jZW50ZXIganVzdGlmeS1iZXR3ZWVuXCI+XHJcbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImZsZXggaXRlbXMtc3RhcnRcIj5cclxuICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJmbGV4IGl0ZW1zLWNlbnRlciBoLTVcIj5cclxuICAgICAgICAgICAgICAgICAgICA8aW5wdXRcclxuICAgICAgICAgICAgICAgICAgICAgIGlkPVwicmVtZW1iZXJcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgYXJpYS1kZXNjcmliZWRieT1cInJlbWVtYmVyXCJcclxuICAgICAgICAgICAgICAgICAgICAgIHR5cGU9XCJjaGVja2JveFwiXHJcbiAgICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJ3LTQgaC00IGJvcmRlciBib3JkZXItZ3JheS0zMDAgcm91bmRlZCBiZy1ncmF5LTUwIGZvY3VzOnJpbmctMyBmb2N1czpyaW5nLXByaW1hcnktMzAwIGRhcms6YmctZ3JheS03MDAgZGFyazpib3JkZXItZ3JheS02MDAgZGFyazpmb2N1czpyaW5nLXByaW1hcnktNjAwIGRhcms6cmluZy1vZmZzZXQtZ3JheS04MDBcIlxyXG4gICAgICAgICAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cIm1sLTMgdGV4dC1zbVwiPlxyXG4gICAgICAgICAgICAgICAgICAgIDxsYWJlbFxyXG4gICAgICAgICAgICAgICAgICAgICAgaHRtbEZvcj1cInJlbWVtYmVyXCJcclxuICAgICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cInRleHQtZ3JheS01MDAgZGFyazp0ZXh0LWdyYXktMzAwXCJcclxuICAgICAgICAgICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAgICAgICAgICBFcmlubmVyZSBkaWNoIGFuIG1pY2hcclxuICAgICAgICAgICAgICAgICAgICA8L2xhYmVsPlxyXG4gICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgPGFcclxuICAgICAgICAgICAgICAgICAgaHJlZj1cIiNcIlxyXG4gICAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJ0ZXh0LXNtIGZvbnQtbWVkaXVtIHRleHQtcHJpbWFyeS02MDAgaG92ZXI6dW5kZXJsaW5lIGRhcms6dGV4dC1wcmltYXJ5LTUwMFwiXHJcbiAgICAgICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAgICAgIFBhc3N3b3J0IHZlcmdlc3Nlbj9cclxuICAgICAgICAgICAgICAgIDwvYT5cclxuICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICA8YnV0dG9uXHJcbiAgICAgICAgICAgICAgICB0eXBlPVwic3VibWl0XCJcclxuICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cInctZnVsbCB0ZXh0LXNlY29uZGFyeSBiZy1wcmltYXJ5IGhvdmVyOmJnLXByaW1hcnktNzAwIGZvY3VzOnJpbmctNCBmb2N1czpvdXRsaW5lLW5vbmUgZm9jdXM6cmluZy1wcmltYXJ5LTMwMCBmb250LW1lZGl1bSByb3VuZGVkLWxnIHRleHQtc20gcHgtNSBweS0yLjUgdGV4dC1jZW50ZXIgZGFyazpiZy1wcmltYXJ5LTYwMCBkYXJrOmhvdmVyOmJnLXByaW1hcnktNzAwIGRhcms6Zm9jdXM6cmluZy1wcmltYXJ5LTgwMFwiXHJcbiAgICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgICAgYW5tZWxkZW5cclxuICAgICAgICAgICAgICA8L2J1dHRvbj5cclxuICAgICAgICAgICAgICA8cCBjbGFzc05hbWU9XCJ0ZXh0LXNtIGZvbnQtbGlnaHQgdGV4dC1ncmF5LTUwMCBkYXJrOnRleHQtZ3JheS00MDBcIj5cclxuICAgICAgICAgICAgICAgIFNpZSBoYWJlbiBub2NoIGtlaW4gS29udG8/e1wiIFwifVxyXG4gICAgICAgICAgICAgICAgPGJ1dHRvblxyXG4gICAgICAgICAgICAgICAgICB0eXBlPVwiYnV0dG9uXCJcclxuICAgICAgICAgICAgICAgICAgb25DbGljaz17aGFuZGxlU2lnbnVwQ2xpY2t9XHJcbiAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cImZvbnQtbWVkaXVtIHRleHQtcHJpbWFyeS02MDAgaG92ZXI6dW5kZXJsaW5lIGRhcms6dGV4dC1wcmltYXJ5LTUwMFwiXHJcbiAgICAgICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAgICAgIFJlZ2lzdHJpZXJlblxyXG4gICAgICAgICAgICAgICAgPC9idXR0b24+XHJcbiAgICAgICAgICAgICAgPC9wPlxyXG4gICAgICAgICAgICA8L2Zvcm0+XHJcbiAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICA8L2Rpdj5cclxuICAgICAgPC9kaXY+XHJcbiAgICA8L3NlY3Rpb24+XHJcbiAgKTtcclxufTtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IExvZ2luRm9ybTtcclxuIl0sIm5hbWVzIjpbInVzZVN0YXRlIiwiZXllT2ZmIiwiTG9naW5Gb3JtIiwic3dpdGNoVG9TaWdudXBUYWIiLCJlbWFpbCIsInNldEVtYWlsIiwicGFzc3dvcmQiLCJzZXRQYXNzd29yZCIsInNob3dQYXNzd29yZCIsInNldFNob3dQYXNzd29yZCIsImhhbmRsZVNpZ251cENsaWNrIiwiY29uc29sZSIsImxvZyIsInRvZ2dsZVBhc3N3b3JkVmlzaWJpbGl0eSIsInR5cGUiLCJzZXRUeXBlIiwiaWNvbiIsInNldEljb24iLCJwcmV2U2hvd1Bhc3N3b3JkIiwic2VjdGlvbiIsImNsYXNzTmFtZSIsImRpdiIsImgxIiwiZm9ybSIsImFjdGlvbiIsImxhYmVsIiwiaHRtbEZvciIsImlucHV0IiwibmFtZSIsImlkIiwicGxhY2Vob2xkZXIiLCJyZXF1aXJlZCIsImFyaWEtZGVzY3JpYmVkYnkiLCJhIiwiaHJlZiIsImJ1dHRvbiIsInAiLCJvbkNsaWNrIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///(app-pages-browser)/./components/LoginForm.tsx\n"));

/***/ })

});