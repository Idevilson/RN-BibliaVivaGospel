"use strict";
exports.__esModule = true;
exports.SearchBar = void 0;
var react_1 = require("react");
var vector_icons_1 = require("@expo/vector-icons");
var styles_1 = require("./styles");
function SearchBar(_a) {
    var setSearchText = _a.setSearchText, onPress = _a.onPress;
    return (<styles_1.Container>
            <styles_1.Input placeholder="PESQUISAR" onChangeText={setSearchText}/>

            <styles_1.SearchButton onPress={onPress}>
                <vector_icons_1.FontAwesome name="search" size={25} color="#7205DC"/>
            </styles_1.SearchButton>
        </styles_1.Container>);
}
exports.SearchBar = SearchBar;
