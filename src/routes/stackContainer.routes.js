"use strict";
exports.__esModule = true;
exports.StackContainer = void 0;
var react_1 = require("react");
var native_stack_1 = require("@react-navigation/native-stack");
var Home_1 = require("../screens/Home");
var AntigoTestamentoHome_1 = require("../screens/AntigoTestamentoHome");
var Stack = (0, native_stack_1.createNativeStackNavigator)();
function StackContainer() {
    return (<Stack.Navigator screenOptions={{
            headerShown: false
        }}>
            <Stack.Screen name="Home" component={Home_1.Home}/>
            <Stack.Screen name="AntigoTestamentoHome" component={AntigoTestamentoHome_1.AntigoTestamentoHome}/>
        </Stack.Navigator>);
}
exports.StackContainer = StackContainer;
