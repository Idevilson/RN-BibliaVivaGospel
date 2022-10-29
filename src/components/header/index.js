"use strict";
exports.__esModule = true;
exports.Header = void 0;
var react_1 = require("react");
var react_native_modal_dropdown_1 = require("react-native-modal-dropdown");
var vector_icons_1 = require("@expo/vector-icons");
var native_1 = require("@react-navigation/native");
var styles_1 = require("./styles");
var BibleVersionContext_1 = require("../../hooks/BibleVersionContext");
function Header() {
    var navigation = (0, native_1.useNavigation)();
    var setVersionSelected = (0, BibleVersionContext_1.useBibleVersion)().setVersionSelected;
    return (<styles_1.Container>
            <styles_1.ButtonContainer onPress={function () { return navigation.toggleDrawer(); }}>  
                <vector_icons_1.AntDesign name="menuunfold" size={30} color="#7205DC"/>
            </styles_1.ButtonContainer>    

                <react_native_modal_dropdown_1["default"] options={['Versão AA', 'Versã ACF', 'Versão NVI']} animated={true} onSelect={function (value) { return setVersionSelected(Number(value)); }} style={{
            justifyContent: 'center',
            alignItems: 'center',
            height: 50,
            borderRadius: 5,
            width: 150,
            marginLeft: "20%"
        }} textStyle={{
            fontSize: 23,
            color: "#7205DC"
        }} dropdownTextStyle={{
            fontSize: 20
        }} dropdownStyle={{
            width: 150,
            alignItems: 'center',
            justifyContent: 'center',
            marginLeft: -13
        }} defaultValue="VERSÃO AA" defaultIndex={-1}/>
        </styles_1.Container>);
}
exports.Header = Header;
