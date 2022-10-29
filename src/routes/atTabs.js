"use strict";
exports.__esModule = true;
exports.AtTopTabs = void 0;
var react_1 = require("react");
var material_top_tabs_1 = require("@react-navigation/material-top-tabs");
var vector_icons_1 = require("@expo/vector-icons");
var BibleContext_1 = require("../hooks/BibleContext");
var Tab = (0, material_top_tabs_1.createMaterialTopTabNavigator)();
var ChaptersScreens_1 = require("../screens/AntigoTestamentoHome/ChaptersScreens");
var VerseScreen_1 = require("../screens/AntigoTestamentoHome/ChaptersScreens/VerseScreen");
var AntigoTestamentoHome_1 = require("../screens/AntigoTestamentoHome");
var loading_1 = require("../components/loading");
function AtTopTabs() {
    return (<BibleContext_1.AtBookProvider>
            <Tab.Navigator initialRouteName={"LIVROS"} tabBarPosition={"bottom"}>
                <Tab.Screen name={"LIVROS"} component={AntigoTestamentoHome_1.Books} options={{
            tabBarIndicatorStyle: {
                backgroundColor: "#7205DC"
            },
            tabBarActiveTintColor: "#7205DC",
            tabBarPressColor: "#3AF1A1",
            tabBarIcon: function () { return <vector_icons_1.MaterialCommunityIcons name="book-multiple" size={24} color="#7205DC"/>; },
            lazy: true,
            lazyPlaceholder: function () { return <loading_1.Loading />; }
        }}/>

                <Tab.Screen name={"CAPÍTULOS"} component={ChaptersScreens_1.ChaptersScreens} options={{
            tabBarIndicatorStyle: {
                backgroundColor: "#7205DC"
            },
            tabBarActiveTintColor: "#7205DC",
            tabBarPressColor: "#3AF1A1",
            tabBarIcon: function () { return <vector_icons_1.MaterialCommunityIcons name="numeric-3-box-multiple" size={24} color="#7205DC"/>; },
            lazy: true,
            lazyPlaceholder: function () { return <loading_1.Loading />; }
        }}/>

                <Tab.Screen name={"VERSÍCULOS"} component={VerseScreen_1.VerseScreen} options={{
            tabBarIndicatorStyle: {
                backgroundColor: "#7205DC"
            },
            tabBarActiveTintColor: "#7205DC",
            tabBarPressColor: "#3AF1A1",
            tabBarIcon: function () { return <vector_icons_1.MaterialIcons name="library-books" size={24} color="#7205DC"/>; },
            lazy: true,
            lazyPlaceholder: function () { return <loading_1.Loading />; }
        }}/>
            </Tab.Navigator>
        </BibleContext_1.AtBookProvider>);
}
exports.AtTopTabs = AtTopTabs;
