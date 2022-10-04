"use strict";
exports.__esModule = true;
exports.SearchBar = void 0;
var react_1 = require("react");
var vector_icons_1 = require("@expo/vector-icons");
var styles_1 = require("./styles");
function SearchBar() {
    return (<styles_1.Container>
            <styles_1.Input placeholder="PESQUISAR"/>

            <styles_1.SearchButton onPress={function () { return (console.log("Pressed")); }}>
                <vector_icons_1.FontAwesome name="search" size={25} color="black"/>
            </styles_1.SearchButton>
        </styles_1.Container>);
}
exports.SearchBar = SearchBar;
