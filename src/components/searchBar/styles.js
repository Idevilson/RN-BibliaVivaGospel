"use strict";
var __makeTemplateObject = (this && this.__makeTemplateObject) || function (cooked, raw) {
    if (Object.defineProperty) { Object.defineProperty(cooked, "raw", { value: raw }); } else { cooked.raw = raw; }
    return cooked;
};
exports.__esModule = true;
exports.SearchButton = exports.Input = exports.Container = void 0;
var native_1 = require("styled-components/native");
exports.Container = native_1["default"].View(templateObject_1 || (templateObject_1 = __makeTemplateObject(["\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  \n  width: 97.5%;\n  height: 40px;\n  \n  background-color: red;\n  \n  margin-bottom: 10px;\n  border-radius: 5px;\n  \n  flex-direction: row;\n"], ["\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  \n  width: 97.5%;\n  height: 40px;\n  \n  background-color: red;\n  \n  margin-bottom: 10px;\n  border-radius: 5px;\n  \n  flex-direction: row;\n"])));
exports.Input = native_1["default"].TextInput(templateObject_2 || (templateObject_2 = __makeTemplateObject(["\n    width: 85%;\n    background-color: aqua;\n    height: 100%;\n    border-radius: 5px;\n    padding-left: 15px;\n"], ["\n    width: 85%;\n    background-color: aqua;\n    height: 100%;\n    border-radius: 5px;\n    padding-left: 15px;\n"])));
exports.SearchButton = native_1["default"].TouchableOpacity(templateObject_3 || (templateObject_3 = __makeTemplateObject(["\n    height: 100%;\n    width: 15%;\n    background-color: green;\n    \n    justify-content: center;\n    align-items: center;\n"], ["\n    height: 100%;\n    width: 15%;\n    background-color: green;\n    \n    justify-content: center;\n    align-items: center;\n"])));
var templateObject_1, templateObject_2, templateObject_3;
