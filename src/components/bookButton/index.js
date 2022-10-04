"use strict";
exports.__esModule = true;
exports.BookButton = void 0;
var react_1 = require("react");
var styles_1 = require("./styles");
function BookButton(_a) {
    var id = _a.id, bookName = _a.bookName, bookFullName = _a.bookFullName;
    return (<styles_1.Container>
            <styles_1.BookButtonHeader>
                <styles_1.HeaderText> {id} </styles_1.HeaderText>
            </styles_1.BookButtonHeader>
                <styles_1.BookButtonBody>
                    <styles_1.BodyText> {bookName} </styles_1.BodyText>
                </styles_1.BookButtonBody>
            <styles_1.BookButtonFooter>
                 <styles_1.FooterText> {bookFullName} </styles_1.FooterText>
            </styles_1.BookButtonFooter>
        </styles_1.Container>);
}
exports.BookButton = BookButton;
