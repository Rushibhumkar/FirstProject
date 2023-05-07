import { Dimensions, StyleSheet, Text, View, Animated } from 'react-native'
import React from 'react'
import { Gesture, GestureDetector } from 'react-native-gesture-handler';
import GestureDetector from 'react-native-gesture-detector';

const { height: SCREEN_HEIGHT } = Dimensions.get('window');

const BottomSheet = () => {
    const gesture = Gesture.Pan().onUpdate((event) => {
        // console.log(event.translationY)
    })
    return (
        <View style={styles.mainCont}>
            <GestureDetector gesture={gesture}>
                <Animated.View style={styles.bottomSheetCont}>
                    <View style={styles.line} />
                </Animated.View>
            </GestureDetector>
        </View>
    )
}

export default BottomSheet

const styles = StyleSheet.create({
    mainCont: {
        flex: 1,
        backgroundColor: "yellow",
    },
    bottomSheetCont: {
        height: SCREEN_HEIGHT,
        width: '100%',
        backgroundColor: "#fff",
        position: "absolute",
        top: SCREEN_HEIGHT / 1.5,
        borderRadius: 25
    },
    line: {
        width: 80,
        height: 5,
        backgroundColor: "grey",
        alignSelf: "center",
        marginVertical: 15,
        borderRadius: 100
    }

})