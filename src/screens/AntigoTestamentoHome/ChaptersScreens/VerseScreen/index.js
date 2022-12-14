"use strict";
exports.__esModule = true;
exports.VerseScreen = void 0;
var react_1 = require("react");
var react_native_1 = require("react-native");
var react_native_reanimated_1 = require("react-native-reanimated");
var react_native_gesture_handler_1 = require("react-native-gesture-handler");
var react_native_select_pro_1 = require("@mobile-reality/react-native-select-pro");
var slider_1 = require("@react-native-community/slider");
var react_native_select_pro_2 = require("@mobile-reality/react-native-select-pro");
var vector_icons_1 = require("@expo/vector-icons");
var BibleContext_1 = require("../../../../hooks/BibleContext");
var styles_1 = require("./styles");
var BibleVersionContext_1 = require("../../../../hooks/BibleVersionContext");
var ButtonAnimated = react_native_reanimated_1["default"].createAnimatedComponent(react_native_1.TouchableOpacity);
function VerseScreen() {
    var setVersionSelected = (0, BibleVersionContext_1.useBibleVersion)().setVersionSelected;
    var _a = (0, BibleContext_1.useBook)(), book = _a.book, chapterNumber = _a.chapterNumber, setModalIsVisible = _a.setModalIsVisible, modalIsVisible = _a.modalIsVisible, setFontSize = _a.setFontSize, fontSize = _a.fontSize, storageFontSize = _a.storageFontSize;
    var positionY = (0, react_native_reanimated_1.useSharedValue)(330);
    var positionX = (0, react_native_reanimated_1.useSharedValue)(341);
    var onGestureEvent = (0, react_native_reanimated_1.useAnimatedGestureHandler)({
        onStart: function (event, ctx) {
            ctx.positionX = positionX.value;
            ctx.positionY = positionY.value;
        },
        onActive: function (event, ctx) {
            positionX.value = event.translationX + ctx.positionX;
            positionY.value = event.translationY + ctx.positionY;
        },
        onEnd: function () {
        }
    });
    var settingsButtonStyle = (0, react_native_reanimated_1.useAnimatedStyle)(function () {
        return {
            transform: [
                { translateX: positionX.value },
                { translateY: positionY.value },
            ]
        };
    });
    function handleSettings(value) {
        setFontSize(value);
        storageFontSize(value);
    }
    console.log(book);
    return (<styles_1.Container>
            <react_native_1.ScrollView style={styles.Container}>
               <styles_1.TextContainer>
                    {book.chapters[chapterNumber].map(function (item, index) {
            return (<>
                                    <styles_1.VerseNumber key={index + 1000}>
                                        {" " + (index + 1) + " "}
                                    </styles_1.VerseNumber>
                                    <styles_1.Verse fontSize={fontSize} key={index}>
                                        {item}
                                    </styles_1.Verse>
                                </>);
        })}
               </styles_1.TextContainer>
            </react_native_1.ScrollView>

            <react_native_gesture_handler_1.PanGestureHandler onGestureEvent={onGestureEvent}>
                <react_native_reanimated_1["default"].View style={[
            settingsButtonStyle,
            {
                position: 'absolute',
                backgroundColor: "#7205DC",
                width: 50,
                height: 50,
                borderRadius: 25,
                alignItems: "center",
                justifyContent: "center"
            }
        ]}>
                    <ButtonAnimated onPress={function () { return setModalIsVisible(true); }}>
                        <vector_icons_1.AntDesign name="setting" size={34} color="#ffffff"/>
                    </ButtonAnimated>
                </react_native_reanimated_1["default"].View>
            </react_native_gesture_handler_1.PanGestureHandler>

            <react_native_1.View style={styles.ModalContainer}>
                <react_native_1.Modal visible={modalIsVisible} transparent={true} animationType={"fade"}>
                    <react_native_select_pro_1.SelectProvider>
                        <react_native_1.View style={styles.ModalContainer}>
                                    <react_native_1.View style={styles.ModalView}>
                                        <styles_1.Label>TAMANHO DA FONTE</styles_1.Label>

                                        <styles_1.HeaderModal>
                                            <vector_icons_1.Feather name="minus" size={24} color="black"/>
                                            <styles_1.NumberFontSize fontSize={fontSize}>{fontSize}</styles_1.NumberFontSize>
                                            <vector_icons_1.Feather name="plus" size={24} color="black"/>
                                        </styles_1.HeaderModal>

                                        <styles_1.BodyModal>
                                            <slider_1["default"] style={{
            width: 250,
            height: 40
        }} minimumValue={15} maximumValue={35} step={1} value={fontSize} onSlidingComplete={function (value) { return handleSettings(value); }} thumbTintColor="#7205DC" minimumTrackTintColor="#7205DC" maximumTrackTintColor="#000000"/>

                                            <styles_1.Label>VERS??O DA B??BLIA</styles_1.Label>
                                                <styles_1.SelectContainer>
                                                    <react_native_select_pro_2.Select animated={true} onSelect={function (_a) {
        var value = _a.value;
        return setVersionSelected(Number(value));
    }} options={[
            { value: "0", label: "VERS??O AA" },
            { value: "1", label: "VERS??O ACF" },
            { value: "2", label: "VERS??O NVI" }
        ]}/>
                                                </styles_1.SelectContainer>

                                        </styles_1.BodyModal>

                                        <styles_1.BottomModal>
                                            <styles_1.Button onPress={function () { return setModalIsVisible(false); }}>
                                                <styles_1.LabelButton>FECHAR</styles_1.LabelButton>
                                            </styles_1.Button>
                                        </styles_1.BottomModal>
                                    </react_native_1.View>
                                </react_native_1.View>
                        </react_native_select_pro_1.SelectProvider>
                </react_native_1.Modal>
            </react_native_1.View>
        </styles_1.Container>);
}
exports.VerseScreen = VerseScreen;
var styles = react_native_1.StyleSheet.create({
    Container: {
        padding: 5
    },
    ModalContainer: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center"
    },
    ModalView: {
        margin: 20,
        backgroundColor: "white",
        borderRadius: 20,
        padding: 25,
        alignItems: "center",
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 2
        },
        shadowOpacity: 0.25,
        shadowRadius: 4,
        elevation: 8
    }
});
