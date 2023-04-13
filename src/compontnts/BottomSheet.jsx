import { Dimensions, StyleSheet, Text, View, Animated } from 'react-native'
import React from 'react'
import GestureDetector from 'react-native-gesture-detector';

const { height: SCREEN_HEIGHT } = Dimensions.get('window');

const BottomSheet = () => {
    return (
        <View style={styles.mainCont}>
            <GestureDetector>
                <Animated.View style={styles.bottomSheetCont}>
                    <View style={styles.line}></View>
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