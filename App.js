"use strict";
exports.__esModule = true;
var react_1 = require("react");
var native_1 = require("@react-navigation/native");
var react_native_gesture_handler_1 = require("react-native-gesture-handler");
var index_routes_1 = require("./src/routes/index.routes");
function App() {
    return (<native_1.NavigationContainer>
        <react_native_gesture_handler_1.GestureHandlerRootView style={{ flex: 1 }}>
            <index_routes_1.DrawerNavigation />
        </react_native_gesture_handler_1.GestureHandlerRootView>
    </native_1.NavigationContainer>);
}
exports["default"] = App;
