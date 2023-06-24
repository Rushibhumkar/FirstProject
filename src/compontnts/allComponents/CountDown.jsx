import { StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React, { useState } from 'react'
// How to Use UseState
const CountDown = () => {
    const [count, setCount] = useState(0)


    return (
        <View>
            <View style={[styles.col, styles.firstCont]}>
                <Text style={[styles.txt, styles.screen]} >{count}</Text>
            </View>
            <View style={[styles.col, styles.secondCont]}>
                <TouchableOpacity style={[styles.click, styles.plusClick]}
                    onPress={() => {
                        setCount(count + 10)
                    }}
                >
                    <Text style={[styles.txt, styles.plus]} >+10</Text>
                </TouchableOpacity>
                <TouchableOpacity style={[styles.click, styles.resetClick]}
                    onPress={() => {
                        setCount(0)
                    }}
                >
                    <Text style={[styles.txt, styles.reset]}>Reset</Text>
                </TouchableOpacity>
                <TouchableOpacity style={[styles.click, styles.minusClick]}
                    onPress={() => {
                        if (count > 0) setCount(count - 10);
                    }}
                >
                    <Text style={[styles.txt, styles.minus]}>-10</Text>
                </TouchableOpacity>
            </View>
        </View>
    )
}

export default CountDown

const styles = StyleSheet.create({
    txt: {
        color: 'black',
        fontSize: 25,
        fontWeight: 'bold',
        paddingHorizontal: 30,
        paddingVertical: 20
    },
    col: {
        display: "flex",
        flexDirection: "column",
        flexDirection: 'column',
        alignItems: 'center',
    },
    row: {
        display: 'flex',
        flexDirection: "row"
    },
    screen: {
        paddingHorizontal: 80,
        borderRadius: 20,
        color: '#fff'
    },
    firstCont: {
        backgroundColor: '#392',
        marginTop: 20,
        marginHorizontal: 10,
        borderBottomColor: 'black',
        borderBottomWidth: 2,
        paddingVertical: 10,
        borderTopColor: 'black',
        borderTopWidth: 0.5,
        borderLeftColor: 'black',
        borderRightColor: 'black',
        borderRightWidth: 0.5,
        borderLeftWidth: 0.5,
        borderRadius: 10
    },
    click: {
        backgroundColor: 'cyan',
        marginVertical: 10,
        borderWidth: 0.5,
        borderColor: 'red',
        borderRadius: 10
    },
    secondCont: {
        marginTop: 20
    }
})