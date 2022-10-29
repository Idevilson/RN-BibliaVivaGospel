"use strict";
exports.__esModule = true;
exports.DrawerNavigation = void 0;
var drawer_1 = require("@react-navigation/drawer");
var drawer_2 = require("../components/drawer");
var stackContainer_routes_1 = require("./stackContainer.routes");
var vector_icons_1 = require("@expo/vector-icons");
var Drawer = (0, drawer_1.createDrawerNavigator)();
var BibleVersionContext_1 = require("../hooks/BibleVersionContext");
function DrawerNavigation() {
    return (<BibleVersionContext_1.BibleVersionProvider>
            <Drawer.Navigator drawerContent={function (props) { return <drawer_2.CustomDrawer {...props}/>; }} screenOptions={{
            headerShown: false
        }}>
                <Drawer.Screen name="SelectChapter" component={stackContainer_routes_1.StackContainer} options={{
            drawerActiveTintColor: "#7205DC",
            drawerIcon: function (_a) {
                var color = _a.color;
                return <vector_icons_1.AntDesign name="home" size={24} color={color}/>;
            },
            drawerLabelStyle: { marginLeft: 1 }
        }}/>

                <Drawer.Screen name="Anotações" component={stackContainer_routes_1.StackContainer} options={{
            drawerActiveTintColor: "#7205DC",
            drawerIcon: function (_a) {
                var color = _a.color;
                return <vector_icons_1.Foundation name="clipboard-notes" size={24} color={color} style={{
                        marginLeft: 5
                    }}/>;
            },
            drawerLabelStyle: { marginLeft: 5 }
        }}/>

                <Drawer.Screen name="Configurações" component={stackContainer_routes_1.StackContainer} options={{
            drawerActiveTintColor: "#7205DC",
            drawerIcon: function (_a) {
                var color = _a.color;
                return <vector_icons_1.AntDesign name="setting" size={24} color={color} style={{
                        marginLeft: 2
                    }}/>;
            }
        }}/>
            </Drawer.Navigator>
        </BibleVersionContext_1.BibleVersionProvider>);
}
exports.DrawerNavigation = DrawerNavigation;
