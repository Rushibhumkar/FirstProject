import { ScrollView, StyleSheet, Text, View } from 'react-native'
import React, { useState, useEffect } from 'react'
import drivers from '../../../data/DataFile'

const AdvMapFun = () => {

    const [bookings, setBookings] = useState([])

    useEffect(() => {
        setBookings(drivers.filter((item) => {
            return item.status === 'cancelled' || item.status === 'completed'
        }))

    }, [])

    return (
        <ScrollView>
            {bookings.map((item) =>
                <View style={[styles.mainCont]}>
                    <View style={styles.dataCont}>
                        <View style={styles.imgCont}>
                            {/* <Image source={item.img} style={styles.img}/> */}
                        </View>
                        <View style={styles.nameCont}>
                            <Text style={styles.name}>{item.name}</Text>
                            <Text style={styles.date}>10 Nov , 2022</Text>
                            <Text style={styles.time}>2 hr 30 min</Text>
                        </View>
                        <View style={styles.lastCont}>
                            <Text style={styles.charge}>&#8377;{item.charge}</Text>
                            <Text style={styles.option}>{item.status}</Text>
                        </View>
                    </View>

                </View>
            )}

        </ScrollView>
    )
}

export default AdvMapFun;

const styles = StyleSheet.create({
    dataCont: {
        backgroundColor: '#F0F0F9',
        display: 'flex',
        flexDirection: 'row',
        marginHorizontal: 20,
        marginVertical: 10,
        borderWidth: 0.5,
        borderColor: 'grey',
        paddingHorizontal: 15,
        paddingVertical: 10,
        justifyContent: 'space-between',
        borderRadius: 8,
    },
    nameCont: {
        display: 'flex',
        flexDirection: "column",
        justifyContent: 'space-between',
        marginRight: 20,
    },
    imgCont: {
        display: 'flex',
        justifyContent: "center",
        alignItems: 'center',
    },
    lastCont: {
        justifyContent: "space-between",
    },
    name: {
        color: 'black',
        fontSize: 18,
        fontWeight: 'bold'
    },
    date: {
        color: 'black'

    },
    time: {
        color: 'black'

    },
    charge: {
        color: 'black'

    },
    option: {
        backgroundColor: '#EB2525',
        paddingHorizontal: 6,
        paddingVertical: 3,
        borderRadius: 8,
        color: 'black'

    },
    img: {
        height: 60,
        width: 60,
        borderRadius: 50
    }
})