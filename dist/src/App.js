var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import './styles/index.scss';
import { Suspense, useState } from 'react';
import { Routes, Route, Link } from "react-router-dom";
import { AboutPageAsync } from "./pages/AboutPage/AboutPage.async";
import { MainPageAsync } from "./pages/MainPage/MainPage.async";
var App = function () {
    var _a = useState(Theme.LIGHT), theme = _a[0], setTheme = _a[1];
    var toogleTheme = function () {
        setTheme(theme === Theme.LIGHT ? Theme.DARK : Theme.LIGHT);
    };
    return (_jsxs("div", __assign({ className: "app ".concat(theme) }, { children: [_jsx("button", __assign({ onClick: toogleTheme }, { children: "change theme" }), void 0), _jsx(Link, __assign({ to: '/' }, { children: "\u0413\u043B\u0430\u0432\u043D\u0430\u044F" }), void 0), _jsx(Link, __assign({ to: '/about' }, { children: "\u041E \u0441\u0430\u0439\u0442\u0435" }), void 0), _jsx(Suspense, __assign({ fallback: _jsx("div", { children: "Loading..." }, void 0) }, { children: _jsxs(Routes, { children: [_jsx(Route, { path: '/about', element: _jsx(AboutPageAsync, {}, void 0) }, void 0), _jsx(Route, { path: '/', element: _jsx(MainPageAsync, {}, void 0) }, void 0)] }, void 0) }), void 0)] }), void 0));
};
export default App;
