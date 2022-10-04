"use strict";
exports.__esModule = true;
exports.CapitulosAntigoTestamento = void 0;
var react_1 = require("react");
var react_native_1 = require("react-native");
var styles_1 = require("./styles");
function CapitulosAntigoTestamento() {
    var data = [];
    return (<styles_1.Container>
            <react_native_1.FlatList style={styles.FlatList} data={data} renderItem={function () { }}/>
        </styles_1.Container>);
}
exports.CapitulosAntigoTestamento = CapitulosAntigoTestamento;
var styles = react_native_1.StyleSheet.create({
    FlatList: {
        width: '100%',
        backgroundColor: '#fff',
        flexGrow: 1,
        justifyContent: 'center'
    }
});
