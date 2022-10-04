"use strict";
exports.__esModule = true;
exports.AntigoTestamentoHome = void 0;
var react_1 = require("react");
var react_native_1 = require("react-native");
var AT_json_1 = require("../../../biblia/AT/AT.json");
var bookButton_1 = require("../../components/bookButton");
var searchBar_1 = require("../../components/searchBar");
var styles_1 = require("./styles");
function AntigoTestamentoHome() {
    var _a = (0, react_1.useState)([]), flatListData = _a[0], setFlatListData = _a[1];
    var data = [];
    for (var i = 0; i <= 38; i++) {
        data.push(AT_json_1["default"][i]);
        setFlatListData(AT_json_1["default"][i]);
    }
    console.log(AT_json_1["default"]);
    return (<styles_1.Container>
                <searchBar_1.SearchBar />
                <react_native_1.FlatList data={data} style={styles.FlatList} numColumns={2} renderItem={function (_a) {
            var item = _a.item, index = _a.index;
            return (<bookButton_1.BookButton id={index + 1} bookName={item.abbrev} bookFullName={item.name} key={item.abbrev} data={item}/>);
        }}/>
           </styles_1.Container>);
}
exports.AntigoTestamentoHome = AntigoTestamentoHome;
var styles = react_native_1.StyleSheet.create({
    FlatList: {
        width: '100%',
        flexGrow: 1
    }
});
