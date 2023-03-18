import { StyleSheet, Text, View, ScrollView } from 'react-native'
import React from 'react'
import { color } from 'react-native-elements/dist/helpers';

const TrackingService = () => {

    const data = [
        { title: 'Vehicle Picked', letter: 'A', isCurrent: true },
        { title: 'Vehicle Reach on Garage', letter: 'B', isCurrent: true },
        { title: 'Service Start', letter: 'C', isCurrent: true },
        { title: 'Service Completed', letter: 'D', isCurrent: true },
        { title: 'Vehicle start from Garage', letter: 'E', isCurrent: false },
        { title: 'Vehicle Reach at Home', letter: 'F', isCurrent: false },
    ];

    if (!data || data.lenght === 0) return null;

    // const firstItem = data.shift();
    const lastEle = data[data.length - 1];

    return (
        <View style={{ flex: 1 }}>
            <View>
                <Text style={{ color: 'black', textAlign: 'center', fontWeight: 'bold', fontSize: 20, marginVertical: 20 }}>Your Service Tracking</Text>
                <Text style={{ color: 'black', textAlign: 'center', fontWeight: 'bold' }}>Date : 12/3/2023 </Text>
                <Text style={{ color: 'black', textAlign: 'center', fontWeight: 'bold' }}>Day : Monday </Text>
            </View>
            <View style={{ height: '50%', marginTop: 50 }}>
                <View style={[lastEle ? styles.verticalLine : styles.verLineFalse]}></View>
                <View style={styles.verticalWrap}>
                    {data.map((item) => (
                        <View
                            key={item.letter}
                            style={styles.itemWrap}>
                            <View style={styles.pointWrap}>
                                <Text
                                    style={[
                                        styles.markerText,
                                        item.isCurrent ? styles.box : null,
                                    ]}>

                                </Text>
                            </View>
                            <View style={{ marginLeft: 5, flex: 1 }}>
                                <Text style={[item.isCurrent ? styles.currentMarker : styles.blackColor]}>
                                    {item.title}
                                </Text>
                            </View>
                        </View>
                    ))}
                </View>
            </View>
        </View>
    );
};

export default TrackingService

const styles = StyleSheet.create({
    verticalLine: {
        borderRightWidth: 1,
        borderRightColor: 'grey',
        borderLeftWidth: 1,
        borderLeftColor: 'grey',
        width: 5,
        height: '95%',
        position: 'absolute',
        marginLeft: 34,
        marginTop: 20,
    },
    verLineFalse: {
        borderRightWidth: 1,
        borderRightColor: '#fff',
        borderLeftWidth: 1,
        borderLeftColor: '#fff',
        width: 5,
        height: '0%',
        position: 'absolute',
        marginLeft: 34,
        marginTop: 20,
    },
    verticalLineColor: {
        backgroundColor: 'grey',
    },
    verline: {
        color: "white",
    },
    box: {
        marginTop: 4,
        justifyContent: 'center',
        alignItems: 'center',
        height: 10,
        borderWidth: 2,
        width: 10,
        borderColor: 'green',
        backgroundColor: 'green',
        borderRadius: 50
    },
    verticalWrap: {
        justifyContent: 'space-between',
        height: '100%',
    },
    blackColor: {
        color: 'black',
    },
    itemWrap: {
        borderColor: 'grey',
        marginVertical: 5,
        width: 200,
        height: 40,
        borderWidth: 1,
        marginLeft: 20,
        justifyContent: 'center',
        flexDirection: 'row',
        alignItems: 'center',
    },
    pointWrap: {
        borderColor: 'grey',
        borderWidth: 0.5,
        borderRadius: 8,
        backgroundColor: 'white',
        height: 20,
        width: 20,
        marginLeft: 5,
        alignItems: 'center',
    },
    firstPoint: {
        backgroundColor: 'black',
        borderRadius: 20,
        height: 10,
        width: 10,
        marginLeft: 10,
    },
    markerText: { color: '#000' },
    currentMarker: { color: 'green', fontWeight: 'bold', fontSize: 16 },
});