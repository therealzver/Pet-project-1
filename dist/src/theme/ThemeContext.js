import { createContext } from "react";
export var Theme;
(function (Theme) {
    Theme["LIGHT"] = "light";
    Theme["DARK"] = "dark";
})(Theme || (Theme = {}));
export var themeContext = createContext({});
export var LOCAL_STORAGE_THEME_KEY = 'theme';
