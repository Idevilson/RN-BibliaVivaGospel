"use strict";
exports.__esModule = true;
exports.Chapter = void 0;
var react_1 = require("react");
var native_1 = require("@react-navigation/native");
var styles_1 = require("./styles");
var BibleContext_1 = require("../../hooks/BibleContext");
function ChapterComponent(_a) {
    var chapterData = _a.chapterData, index = _a.index;
    var navigation = (0, native_1.useNavigation)();
    var handleSetChapterNumber = (0, BibleContext_1.useBook)().handleSetChapterNumber;
    function handleCallChalterScreen() {
        handleSetChapterNumber(index);
        navigation.navigate("VERSÍCULOS", { data: chapterData });
    }
    return (<>
            <styles_1.Container onPress={function () { return handleCallChalterScreen(); }}>
                <styles_1.ChapterNumber>
                    {index}
                </styles_1.ChapterNumber>
            </styles_1.Container>
        </>);
}
exports.Chapter = (0, react_1.memo)(ChapterComponent, function (prevProps, nextProps) {
    return prevProps.index === nextProps.index;
});
