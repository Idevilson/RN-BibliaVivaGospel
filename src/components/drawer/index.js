"use strict";
exports.__esModule = true;
exports.CustomDrawer = void 0;
var react_1 = require("react");
var drawer_1 = require("@react-navigation/drawer");
var styles_1 = require("./styles");
var LogoBibliaVivaGospel_svg_1 = require("../../../assets/LogoBibliaVivaGospel.svg");
function CustomDrawer(props) {
    return (<drawer_1.DrawerContentScrollView {...props}>
            <styles_1.DrawerHeader>
                <LogoBibliaVivaGospel_svg_1["default"] width={250} style={{
            marginTop: 10
        }}/>
            </styles_1.DrawerHeader>

            <styles_1.DrawerContent style={{
            marginTop: 30
        }}>
                <drawer_1.DrawerItemList {...props}/>
            </styles_1.DrawerContent>


        </drawer_1.DrawerContentScrollView>);
}
exports.CustomDrawer = CustomDrawer;
