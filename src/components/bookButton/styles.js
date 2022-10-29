"use strict";
var __makeTemplateObject = (this && this.__makeTemplateObject) || function (cooked, raw) {
    if (Object.defineProperty) { Object.defineProperty(cooked, "raw", { value: raw }); } else { cooked.raw = raw; }
    return cooked;
};
exports.__esModule = true;
exports.FooterText = exports.BookButtonFooter = exports.BodyText = exports.BookButtonBody = exports.HeaderText = exports.BookButtonHeader = exports.Container = void 0;
var native_1 = require("styled-components/native");
exports.Container = native_1["default"].TouchableOpacity(templateObject_1 || (templateObject_1 = __makeTemplateObject(["\n    width: 50%;  \n    height: 100px;\n  \n    margin: 5px;\n    background-color: #7205DC;\n"], ["\n    width: 50%;  \n    height: 100px;\n  \n    margin: 5px;\n    background-color: #7205DC;\n"])));
exports.BookButtonHeader = native_1["default"].View(templateObject_2 || (templateObject_2 = __makeTemplateObject(["\n    width: 100%;\n    height: 25%;\n"], ["\n    width: 100%;\n    height: 25%;\n"])));
exports.HeaderText = native_1["default"].Text(templateObject_3 || (templateObject_3 = __makeTemplateObject(["\n    font-size: 20px;\n    margin-left: 6px;\n    color: #fff;\n"], ["\n    font-size: 20px;\n    margin-left: 6px;\n    color: #fff;\n"])));
exports.BookButtonBody = native_1["default"].View(templateObject_4 || (templateObject_4 = __makeTemplateObject(["\n    width: 100%;\n    height: 50%;\n\n    align-items: center;\n    justify-content: center;\n"], ["\n    width: 100%;\n    height: 50%;\n\n    align-items: center;\n    justify-content: center;\n"])));
exports.BodyText = native_1["default"].Text(templateObject_5 || (templateObject_5 = __makeTemplateObject(["\n    font-size: 35px;\n    font-weight: bold;\n    color: #3AF1A1;\n"], ["\n    font-size: 35px;\n    font-weight: bold;\n    color: #3AF1A1;\n"])));
exports.BookButtonFooter = native_1["default"].View(templateObject_6 || (templateObject_6 = __makeTemplateObject(["\n    width: 100%;\n    height: 25%;\n\n    align-items: flex-end;\n"], ["\n    width: 100%;\n    height: 25%;\n\n    align-items: flex-end;\n"])));
exports.FooterText = native_1["default"].Text(templateObject_7 || (templateObject_7 = __makeTemplateObject(["\n    font-size: 15px;\n    margin-right: 8px;\n    color: #fff;\n"], ["\n    font-size: 15px;\n    margin-right: 8px;\n    color: #fff;\n"])));
var templateObject_1, templateObject_2, templateObject_3, templateObject_4, templateObject_5, templateObject_6, templateObject_7;
