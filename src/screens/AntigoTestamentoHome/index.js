"use strict";
exports.__esModule = true;
exports.Books = void 0;
var react_1 = require("react");
var react_native_1 = require("react-native");
var native_1 = require("@react-navigation/native");
var BibleContext_1 = require("../../hooks/BibleContext");
var bookButton_1 = require("../../components/bookButton");
var searchBar_1 = require("../../components/searchBar");
var styles_1 = require("./styles");
function Books() {
    var bibleData = (0, BibleContext_1.useBook)().bibleData;
    var isFocused = (0, native_1.useIsFocused)();
    var _a = (0, react_1.useState)([]), books = _a[0], setBooks = _a[1];
    var _b = (0, react_1.useState)(""), searchText = _b[0], setSearchText = _b[1];
    function handleSearchBook(bookName) {
        var book = bibleData.filter(function (item) { return (item.name.includes(bookName)); });
        setBooks(book);
    }
    (0, react_1.useEffect)(function () {
        setBooks(bibleData);
    }, [isFocused]);
    console.log("Tela dos livros do antigo testamento");
    return (<styles_1.Container>
                <searchBar_1.SearchBar setSearchText={setSearchText} onPress={function () { return handleSearchBook(searchText); }}/>
                <react_native_1.FlatList data={books} style={styles.FlatList} numColumns={2} columnWrapperStyle={{
            justifyContent: "center",
            alignItems: "center"
        }} renderItem={function (_a) {
            var item = _a.item, index = _a.index;
            return (<bookButton_1.BookButton id={index + 1} bookName={item.abbrev} bookFullName={item.name} key={item.abbrev} data={item.chapters}/>);
        }}/>
           </styles_1.Container>);
}
exports.Books = Books;
var styles = react_native_1.StyleSheet.create({
    FlatList: {
        width: '100%'
    }
});
