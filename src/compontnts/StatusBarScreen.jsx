import { StyleSheet, Text, View, Button, Platform, SafeAreaView, StatusBar, } from 'react-native'
import React, { useState, useEffect } from 'react'

const STYLES = ['default', 'dark-content', 'light-content'];
const TRANSITIONS = ['fade', 'slide', 'none'];

const StatusBarScreen = () => {

    const [hidden, setHidden] = useState(false)
    const [statusBarStyle, setStatusBarStyle] = useState(STYLES[0])
    const [statusBarTransition, setStatusBarTransition] = useState(TRANSITIONS[0])

    const changeStatusBarVisibility = () => setHidden(!hidden);
    const changeStatusBarStyle = () => {
        const styleId = STYLES.indexOf(statusBarStyle) + 1;
        if (styleId === STYLES.length) {
            setStatusBarStyle(STYLES[0])

        } else {
            setStatusBarStyle(STYLES[styleId]);
        }
    }
    const changeStatusBarTransition = () => {
        const transition = TRANSITIONS.indexOf(statusBarTransition) + 1;
        if (transition === TRANSITIONS.length) {
            setStatusBarTransition(TRANSITIONS[0])
        } else {
            setStatusBarTransition(TRANSITIONS[transition])
        }
    }
    return (
        <SafeAreaView style={styles.container}>
            <StatusBar
                animated={true}
                // backgroundColor="#61dafb"
                backgroundColor="#494"
                barStyle={statusBarStyle}
                showHideTransition={statusBarTransition}
                hidden={hidden}
            />
            <Text style={styles.textStyle}>
                StatusBar Visibility:{'\n'}
                {hidden ? 'Hidden' : 'Visible'}
            </Text>
            <Text style={styles.textStyle}>
                StatusBar Style:{'\n'}
                {statusBarStyle}
            </Text>
            {Platform.OS === 'ios' ? (
                <Text style={styles.textStyle}>
                    StatusBar Transition:{'\n'}
                    {statusBarTransition}
                </Text>
            ) : null}
            <View style={styles.buttonsContainer}>
                <Button title="Toggle StatusBar" onPress={changeStatusBarVisibility} />
                <Button title="Change StatusBar Style" onPress={changeStatusBarStyle} />
                {Platform.OS === 'ios' ? (
                    <Button
                        title="Change StatusBar Transition"
                        onPress={changeStatusBarTransition}
                    />
                ) : null}
            </View>
        </SafeAreaView>
    )
}

export default StatusBarScreen

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        // backgroundColor: '#ECF0F1',
        backgroundColor: "#494"
    },
    buttonsContainer: {
        padding: 10,
    },
    textStyle: {
        textAlign: 'center',
        marginBottom: 8,
        color: '#000'
    },
})