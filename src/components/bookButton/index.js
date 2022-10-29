"use strict";
exports.__esModule = true;
exports.BookButton = void 0;
var react_1 = require("react");
var native_1 = require("@react-navigation/native");
var styles_1 = require("./styles");
var BibleContext_1 = require("../../hooks/BibleContext");
function BookButtonComponent(_a) {
    var id = _a.id, bookName = _a.bookName, bookFullName = _a.bookFullName, data = _a.data;
    var navigation = (0, native_1.useNavigation)();
    var handleSelectBook = (0, BibleContext_1.useBook)().handleSelectBook;
    function handleCallChapter() {
        handleSelectBook(bookName);
        navigation.navigate("CAPÍTULOS", { bookData: data });
    }
    return (<styles_1.Container onPress={function () { return handleCallChapter(); }}>
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
exports.BookButton = (0, react_1.memo)(BookButtonComponent, function (prevProps, nextProps) {
    return Object.is(prevProps.data, nextProps.data);
});
