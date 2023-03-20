import { Animated, ScrollView, StyleSheet, Text, View } from 'react-native'
import React, { useState, useRef } from 'react'
import { TouchableOpacity } from 'react-native'

const ProgressLine = () => {

    const [isSelected, setSelected] = useState(0);

    const progress1 = useRef(new Animated.Value(0)).current;
    const progress2 = useRef(new Animated.Value(0)).current;
    const progress3 = useRef(new Animated.Value(0)).current;

    const start1 = () => {
        Animated.timing(progress1, {
            toValue: 100,
            duration: 3000,
            useNativeDriver: false,
        }).start();
    }
    const start2 = () => {
        Animated.timing(progress2, {
            toValue: 100,
            duration: 3000,
            useNativeDriver: false,
        }).start();
    }
    const start3 = () => {
        Animated.timing(progress3, {
            toValue: 100,
            duration: 3000,
            useNativeDriver: false,
        }).start();
    }

    return (
        <View style={{ flex: 1 }}>

            {/* First View Start */}

            <View style={{ width: '100%', alignItems: 'flex-start', padding: 50, }}>
                <View style={{ flexDirection: 'row' }}>
                    <View
                        style={{
                            width: 30,
                            height: 30,
                            borderRadius: 15,
                            backgroundColor: isSelected > 0 ? 'green' : '#f2f2f2',
                            justifyContent: 'center',
                            alignItems: 'center',
                        }}
                    ><Text style={{ color: '#fff' }}>1</Text>
                    </View>
                    <View style={{ marginLeft: 20 }}>
                        <Text style={{ color: 'black', alignItems: 'center', fontSize: 18 }}>Vehicle Picked from Home</Text>
                    </View>
                </View>
                <View style={{ width: 6, height: 100, backgroundColor: '#f2f2f2', marginLeft: 12.5 }}></View>
                <View style={{ flexDirection: 'row' }}>
                    <View
                        style={{
                            width: 30,
                            height: 30,
                            borderRadius: 15,
                            backgroundColor: isSelected > 1 ? 'green' : '#f2f2f2',
                            justifyContent: 'center',
                            alignItems: 'center',
                        }}
                    ><Text style={{ color: '#fff' }}>2</Text>
                    </View>
                    <View style={{ marginLeft: 20 }}>
                        <Text style={{ color: 'black', alignItems: 'center', fontSize: 18 }}>Service Start</Text>
                    </View>
                </View>
                <View style={{ width: 6, height: 100, backgroundColor: '#f2f2f2', marginLeft: 12.5 }}></View>
                <View style={{ flexDirection: 'row' }}>
                    <View
                        style={{
                            width: 30,
                            height: 30,
                            borderRadius: 15,
                            backgroundColor: isSelected > 2 ? 'green' : '#f2f2f2',
                            justifyContent: 'center',
                            alignItems: 'center',
                        }}
                    ><Text style={{ color: '#fff' }}>3</Text>
                    </View>
                    <View style={{ marginLeft: 20 }}>
                        <Text style={{ color: 'black', alignItems: 'center', fontSize: 18 }}>Service End</Text>
                    </View>
                </View>
                <View style={{ width: 6, height: 100, backgroundColor: '#f2f2f2', marginLeft: 12.5 }}></View>
                <View style={{ flexDirection: 'row' }}>
                    <View
                        style={{
                            width: 30,
                            height: 30,
                            borderRadius: 15,
                            backgroundColor: isSelected > 3 ? 'green' : '#f2f2f2',
                            justifyContent: 'center',
                            alignItems: 'center',
                        }}
                    ><Text style={{ color: '#fff' }}>4</Text>
                    </View>
                    <View style={{ marginLeft: 20 }}>
                        <Text style={{ color: 'black', alignItems: 'center', fontSize: 18 }}>Vehicle Drop at Home</Text>
                    </View>
                </View>
            </View>
            {/* First View End */}

            {/* Second View Start / Only Lines*/}
            <View style={{ width: '100%', alignItems: 'flex-start', padding: 50, position: 'absolute', top: 0 }}>

                <Animated.View style={{ width: 6, height: progress1, marginTop: 30, backgroundColor: 'green', marginLeft: 12.5 }}></Animated.View>

                <Animated.View style={{ width: 6, height: progress2, marginTop: 30, backgroundColor: 'green', marginLeft: 12.5 }}></Animated.View>

                <Animated.View style={{ width: 6, height: progress3, marginTop: 30, backgroundColor: 'green', marginLeft: 12.5 }}></Animated.View>

            </View>
            {/* second view completed / Only Lines*/}

            {/* Buttons starts */}

            <TouchableOpacity
                style={{
                    marginTop: 100,
                    height: 50,
                    width: 120,
                    backgroundColor: '#5E5FEF',
                    justifyContent: 'center',
                    alignItems: 'center',
                    borderRadius: 10,
                    alignSelf: 'center',
                    marginHorizontal: 20,
                }}
                onPress={() => {
                    if (isSelected == 1) {
                        start1();
                    }
                    if (isSelected == 2) {
                        start2();
                    }
                    if (isSelected == 3) {
                        start3();
                    }
                    if (isSelected == 0) {
                        setSelected(isSelected + 1)

                    }
                    else {
                        setTimeout(() => {
                            setSelected(isSelected + 1)
                        }, 3000);
                    }
                }}
            >
                <Text style={{ color: '#fff', fontSize: 17 }}>Next Step</Text>
            </TouchableOpacity>
        </View>
    )
}

export default ProgressLine

const styles = StyleSheet.create({})
