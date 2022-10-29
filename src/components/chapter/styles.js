"use strict";
var __makeTemplateObject = (this && this.__makeTemplateObject) || function (cooked, raw) {
    if (Object.defineProperty) { Object.defineProperty(cooked, "raw", { value: raw }); } else { cooked.raw = raw; }
    return cooked;
};
exports.__esModule = true;
exports.ChapterNumber = exports.Container = void 0;
var native_1 = require("styled-components/native");
exports.Container = native_1["default"].TouchableOpacity(templateObject_1 || (templateObject_1 = __makeTemplateObject(["\n  width: 80px;\n  height: 80px;\n  \n  justify-content: center;\n  align-items: center;\n  \n  background-color: #7205DC;\n  margin: 5px\n"], ["\n  width: 80px;\n  height: 80px;\n  \n  justify-content: center;\n  align-items: center;\n  \n  background-color: #7205DC;\n  margin: 5px\n"])));
exports.ChapterNumber = native_1["default"].Text(templateObject_2 || (templateObject_2 = __makeTemplateObject(["\n  font-size: 30px;\n  color: #3AF1A1;\n  font-weight: bold;\n"], ["\n  font-size: 30px;\n  color: #3AF1A1;\n  font-weight: bold;\n"])));
var templateObject_1, templateObject_2;
