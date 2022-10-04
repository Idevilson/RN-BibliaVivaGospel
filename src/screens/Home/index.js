"use strict";
exports.__esModule = true;
exports.Home = void 0;
var react_1 = require("react");
var native_1 = require("@react-navigation/native");
var header_1 = require("../../components/header");
var styles_1 = require("./styles");
var homeButton_1 = require("../../components/homeButton");
function Home() {
    var navigation = (0, native_1.useNavigation)();
    return (<styles_1.Container>
            <header_1.Header />

            <styles_1.ButtonsContainer>
                <homeButton_1.HomeButton backgroundColor="#7205DC" titleProps="ANTIGO TESTAMENTO" functionProps={function () { return navigation.navigate('AntigoTestamentoHome'); }} titleColor={"#3AF1A1"}/>

                <homeButton_1.HomeButton backgroundColor="#3AF1A1" titleProps="ANTIGO TESTAMENTO" functionProps={function () { }} titleColor="#7205DC"/>
            </styles_1.ButtonsContainer>
        </styles_1.Container>);
}
exports.Home = Home;
