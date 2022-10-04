"use strict";
var __makeTemplateObject = (this && this.__makeTemplateObject) || function (cooked, raw) {
    if (Object.defineProperty) { Object.defineProperty(cooked, "raw", { value: raw }); } else { cooked.raw = raw; }
    return cooked;
};
exports.__esModule = true;
exports.TitleButton = exports.Button = void 0;
var react_native_gesture_handler_1 = require("react-native-gesture-handler");
var native_1 = require("styled-components/native");
exports.Button = (0, native_1["default"])(react_native_gesture_handler_1.TouchableOpacity)(templateObject_1 || (templateObject_1 = __makeTemplateObject(["\n    background-color: ", ";\n\n    width: 270px;\n    height: 169px;\n    border-radius: 23px;\n\n    align-items: center;\n    justify-content: center;\n\n    margin-bottom: 120px;\n"], ["\n    background-color: ", ";\n\n    width: 270px;\n    height: 169px;\n    border-radius: 23px;\n\n    align-items: center;\n    justify-content: center;\n\n    margin-bottom: 120px;\n"])), function (ButtonProps) { return ButtonProps.backgroundColor; });
exports.TitleButton = native_1["default"].Text(templateObject_2 || (templateObject_2 = __makeTemplateObject(["\n    font-size: 30px;\n\n    font-weight: bold;\n    text-align: center;\n    \n    color: ", ";\n"], ["\n    font-size: 30px;\n\n    font-weight: bold;\n    text-align: center;\n    \n    color: ", ";\n"])), function (ButtonProps) { return ButtonProps.titleColor === "#7205DC" ?
    "#7205DC" : "#3AF1A1"; });
var templateObject_1, templateObject_2;
