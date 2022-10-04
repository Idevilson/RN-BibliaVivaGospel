"use strict";
var __makeTemplateObject = (this && this.__makeTemplateObject) || function (cooked, raw) {
    if (Object.defineProperty) { Object.defineProperty(cooked, "raw", { value: raw }); } else { cooked.raw = raw; }
    return cooked;
};
exports.__esModule = true;
exports.ButtonContainer = exports.Container = void 0;
var native_1 = require("styled-components/native");
exports.Container = native_1["default"].View(templateObject_1 || (templateObject_1 = __makeTemplateObject(["\n    width: 100%;\n    height: 52px;\n\n    flex-direction: row;\n    border-bottom-width: 1px;\n    border-color: #7205DC;\n"], ["\n    width: 100%;\n    height: 52px;\n\n    flex-direction: row;\n    border-bottom-width: 1px;\n    border-color: #7205DC;\n"])));
exports.ButtonContainer = native_1["default"].TouchableOpacity(templateObject_2 || (templateObject_2 = __makeTemplateObject(["\n    width: 50px;\n    height: 50px;\n\n    align-items: center;\n    justify-content: center;\n"], ["\n    width: 50px;\n    height: 50px;\n\n    align-items: center;\n    justify-content: center;\n"])));
var templateObject_1, templateObject_2;
