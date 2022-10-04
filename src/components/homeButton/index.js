"use strict";
exports.__esModule = true;
exports.HomeButton = void 0;
var react_1 = require("react");
var styles_1 = require("./styles");
function HomeButton(_a) {
    var backgroundColor = _a.backgroundColor, titleProps = _a.titleProps, functionProps = _a.functionProps, titleColor = _a.titleColor;
    return (<styles_1.Button backgroundColor={backgroundColor} onPress={functionProps}>
            <styles_1.TitleButton titleColor={titleColor}>
                {titleProps}
            </styles_1.TitleButton>   
        </styles_1.Button>);
}
exports.HomeButton = HomeButton;
