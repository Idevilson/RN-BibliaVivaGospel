"use strict";
exports.__esModule = true;
exports.Loading = void 0;
var react_1 = require("react");
var react_native_1 = require("react-native");
var lottie_react_native_1 = require("lottie-react-native");
function Loading() {
    return (<react_native_1.View style={styles.animationContainer}>
            <lottie_react_native_1["default"] autoPlay style={{
            width: 300,
            height: 300
        }} 
    // Find more Lottie files at https://lottiefiles.com/featured
    source={require('../../../assets/loadingAnimation.json')}/>
        </react_native_1.View>);
}
exports.Loading = Loading;
var styles = react_native_1.StyleSheet.create({
    animationContainer: {
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center',
        flex: 1
    },
    buttonContainer: {
        paddingTop: 20
    }
});
