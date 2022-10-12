import  React from "react"
import {
    ScrollView,
    StyleSheet,
    TouchableOpacity
} from "react-native";

import { useBook } from "../../../../hooks/atBooksContext";

import  Animated, {
    useAnimatedStyle,
    useSharedValue,
    useAnimatedGestureHandler
}  from "react-native-reanimated"

import {
    PanGestureHandler,
} from "react-native-gesture-handler";

import { AntDesign } from '@expo/vector-icons';

import {
    Container,
    Verse,
    VerseContainer,
} from "./styles"



const ButtonAnimated = Animated.createAnimatedComponent(TouchableOpacity);

export function VerseScreen() {
    const { book, chapterNumber } = useBook();

    console.log("Tela dos versículos");

    const positionY = useSharedValue(0);
    const positionX = useSharedValue(0);

    const onGestureEvent = useAnimatedGestureHandler({
        onStart(event, ctx: any){
                ctx.positionX = positionX.value;
                ctx.positionY = positionY.value;
        },
        onActive(event, ctx: any){
            positionX.value = event.translationX + ctx.positionX;
            positionY.value = event.translationY + ctx.positionY;
        },

        onEnd(){

        }
    })

    const settingsButtonbStyle = useAnimatedStyle(() => {
        return {
            transform : [
                { translateX: positionX.value },
                { translateY: positionY.value },
            ]
        }
    });

    function handleOpemSettingsModal(){
        console.log("funcionando");
    }

    return (
        <Container>
            <ScrollView style={styles.Container}>
                <VerseContainer
                    selectable
                >
                    {
                        book.chapters[chapterNumber].map((item, index) => (
                            <Verse
                                key={index}
                            >
                                {((index + 1) + " ") + item }
                            </Verse>)
                        )
                    }
                </VerseContainer>
            </ScrollView>

            <PanGestureHandler onGestureEvent={onGestureEvent}>
                <Animated.View
                    style={[
                        settingsButtonbStyle,
                        {
                            position: 'absolute',
                            backgroundColor: "#7205DC",
                            width: 50,
                            height: 50,
                            borderRadius: 25,

                            alignItems: "center",
                            justifyContent: "center"
                        }
                    ]}
                >
                    <ButtonAnimated onPress={() => handleOpemSettingsModal()}>
                        <AntDesign name="setting" size={34} color="#ffffff" />
                    </ButtonAnimated>
                </Animated.View>
            </PanGestureHandler>
        </Container>
    )
}


const styles = StyleSheet.create({
    Container: {
        padding: 5
    }
})