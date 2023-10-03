import { jsx as _jsx } from "react/jsx-runtime";
import { render } from "react-dom";
import App from "./App";
import { BrowserRouter } from "react-router-dom";
render(_jsx(BrowserRouter, { children: _jsx(App, {}, void 0) }, void 0), document.getElementById('root'));
