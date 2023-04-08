import { Alert, StyleSheet, Text, View, ScrollView, SafeAreaView } from 'react-native'
import React, { useState } from 'react'
import { Calendar } from 'react-native-calendario';
import { TouchableOpacity } from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';

const MyCalendar = () => {

    const date = new Date();
    const year = date.getFullYear();
    const month = (date.getMonth() + 1).toString().padStart(2, '0');
    const day = date.getDate().toString().padStart(2, '0');
    const formattedDate = `${year}-${month}-${day}`;

    const finalDate = new Date(date.setDate(date.getDate() + 29));
    const finalYear = finalDate.getFullYear();
    const finalMonth = (finalDate.getMonth() + 1).toString().padStart(2, '0');
    const finalDay = finalDate.getDate().toString().padStart(2, '0');
    const modifiedFinalDate = `${finalYear}-${finalMonth}-${finalDay}`

    const extendedDate = new Date(date.setDate(date.getDate() + 3));
    const extendedYear = extendedDate.getFullYear();
    const extendedMonth = (extendedDate.getMonth() + 1).toString().padStart(2, '0');
    const extendedDay = extendedDate.getDate().toString().padStart(2, '0');
    const modifiedExtendedDate = `${extendedYear}-${extendedMonth}-${extendedDay}`

    const startingDate = new Date(formattedDate)
    const endingDate = new Date(modifiedFinalDate)
    const pospondedDate = new Date(modifiedExtendedDate)

    const [selectedDate, setSelectedDate] = useState(null);
    const [selectedPopUp, setselectedPopUp] = useState(false)

    const handlePress = (date) => {
        const year = date.getFullYear();
        const month = (date.getMonth() + 1).toString().padStart(2, '0');
        const day = date.getDate().toString().padStart(2, '0');
        const lastFinalDate = `${year}-${month}-${day}`;
        setSelectedDate(lastFinalDate);
        setselectedPopUp(!selectedPopUp);
        // console.log(date.getDate())
    };

    return (
        <View style={{ backgroundColor: '#fff', flex: 1 }}>
            <View style={styles.calCont}>
                <Calendar
                    // minDate={new Date(2023, 2, 18)}
                    startDate={startingDate}
                    endDate={endingDate}
                    maxDate={pospondedDate}
                    onPress={handlePress}
                    showsVerticalScrollIndicator={true}
                    theme={{
                        activeDayColor: {
                            backgroundColor: '#f5f5f5',
                        },
                        monthTitleTextStyle: {
                            // marginTop: 10,
                            color: 'blue',
                            fontWeight: 'bold',
                            fontSize: 18,
                        },
                        emptyMonthContainerStyle: {

                        },
                        emptyMonthTextStyle: {
                            fontWeight: '200',
                            color: '#000',
                        },
                        weekColumnsContainerStyle: {
                            borderBottomColor: '#000',
                            borderBottomWidth: 1
                        },
                        weekColumnStyle: {
                            // paddingVertical: 10,
                        },
                        weekColumnTextStyle: {
                            color: '#000',
                            fontSize: 13,
                        },
                        nonTouchableDayContainerStyle: {
                            backgroundColor: 'grey',
                        },
                        nonTouchableDayTextStyle: {
                            color: '#000',
                        },
                        startDateContainerStyle: {
                        },
                        endDateContainerStyle: {
                        },
                        dayContainerStyle: {},
                        dayTextStyle: {
                            color: '#2d4150',
                            fontWeight: '200',
                        },
                        dayOutOfRangeContainerStyle: {
                        },
                        dayOutOfRangeTextStyle: {
                        },
                        todayContainerStyle: {
                        },
                        todayTextStyle: {
                        },
                        activeDayContainerStyle: {
                            backgroundColor: '#007CC4',
                        },
                        activeDayTextStyle: {
                            color: '#fff',
                        },
                        nonTouchableLastMonthDayTextStyle: {
                        },
                    }}
                />
            </View>
            <View style={{ display: 'flex', flexDirection: 'row', justifyContent: 'space-between', borderColor: '#000', borderWidth: 0.5, borderRadius: 10, marginHorizontal: 10, paddingHorizontal: 8, paddingVertical: 4 }}>
                <View style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', paddingHorizontal: 8, width: '50%' }}>
                    <View style={{ width: 20, height: 20, backgroundColor: '#007CC4', borderColor: 'grey', borderWidth: 0.5, alignItems: 'center', justifyContent: 'center' }}><Text style={{ color: '#fff', textAlign: 'center' }}>A</Text></View>
                    <Text style={{ color: '#000', fontSize: 12 }}>Active Date</Text>
                </View>
                <View style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', paddingHorizontal: 8, width: '50%' }}>
                    <View style={{ display: 'flex', flexDirection: 'row', justifyContent: 'space-between' }}>
                        <View style={{ width: 20, height: 20, backgroundColor: 'grey', borderColor: 'grey', borderWidth: 0.5, alignItems: 'center', justifyContent: 'center' }}><Text style={{ color: '#000', textAlign: 'center' }}>A</Text></View>
                        <View style={{ width: 20, height: 20, backgroundColor: '#fff', borderColor: 'grey', borderWidth: 0.5, alignItems: 'center', justifyContent: 'center' }}><Text style={{ color: '#000', textAlign: 'center' }}>A</Text></View>
                        <View style={{ width: 20, height: 20, backgroundColor: '#007CC4', borderColor: 'grey', borderWidth: 0.5, alignItems: 'center', justifyContent: 'center' }}><Text style={{ color: '#000', textAlign: 'center' }}>A</Text></View>
                    </View>
                    <Text style={{ color: '#000', fontSize: 12 }}>Inactive Dates</Text>
                </View>
            </View>
            {
                selectedPopUp ?
                    <View style={{ backgroundColor: '#fff', marginHorizontal: 10, marginVertical: 20, paddingHorizontal: 10, paddingVertical: 8, borderColor: 'grey', borderWidth: 0.5, borderRadius: 10, shadowColor: 'green', shadowOffset: { width: 2, height: 2 }, shadowOpacity: 10, shadowRadius: 2, elevation: 10 }}>
                        <View style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
                            <View style={{ width: '92%' }}>
                                <Text style={{ textAlign: 'center', fontSize: 16, color: '#000' }}>Your Status</Text>
                                <Text style={{ color: '#000', textAlign: 'center', fontSize: 14 }}>Selected Date is :{selectedDate}</Text>
                            </View>
                            <TouchableOpacity style={{ width: '8%' }}
                                onPress={() => setselectedPopUp(!selectedPopUp)}
                            >
                                <Icon name="cancel" size={30} color='red' />
                            </TouchableOpacity>
                        </View>
                        <View style={{ display: 'flex', flexDirection: 'row', justifyContent: 'space-between' }}>
                            <View style={{ borderWidth: 0.5, borderColor: 'grey', marginTop: 10, width: '50%' }}>
                                <View style={{ paddingHorizontal: 10, paddingVertical: 2, marginHorizontal: 10, marginVertical: 6, borderRadius: 6 }}>
                                    <Text style={{ color: '#000', textAlign: 'center', fontSize: 16, fontWeight: 'bold' }}>Lunch</Text>
                                </View>
                                <TouchableOpacity style={{ backgroundColor: 'red', paddingHorizontal: 10, paddingVertical: 4, marginHorizontal: 10, marginVertical: 8, borderRadius: 6 }}>
                                    <Text style={{ color: '#fff', textAlign: 'center' }}>Cancle Tiffin</Text>
                                </TouchableOpacity>
                                <TouchableOpacity style={{ backgroundColor: 'green', paddingHorizontal: 10, paddingVertical: 4, marginHorizontal: 10, marginVertical: 8, borderRadius: 6 }}>
                                    <Text style={{ color: '#fff', fontSize: 12, textAlign: 'center' }}>Change Address</Text>
                                </TouchableOpacity>
                            </View>
                            <View style={{ borderWidth: 0.5, borderColor: 'grey', marginTop: 10, width: '50%' }}>
                                <View style={{ paddingHorizontal: 10, paddingVertical: 2, marginHorizontal: 10, marginVertical: 6, borderRadius: 6 }}>
                                    <Text style={{ color: '#000', textAlign: 'center', fontSize: 16, fontWeight: 'bold' }}>Dinner</Text>
                                </View>
                                <TouchableOpacity style={{ backgroundColor: 'red', paddingHorizontal: 10, paddingVertical: 4, marginHorizontal: 10, marginVertical: 8, borderRadius: 6 }}>
                                    <Text style={{ color: '#fff', textAlign: 'center' }}>Cancle Tiffin</Text>
                                </TouchableOpacity>
                                <TouchableOpacity style={{ backgroundColor: 'green', paddingHorizontal: 10, paddingVertical: 4, marginHorizontal: 10, marginVertical: 8, borderRadius: 6 }}>
                                    <Text style={{ color: '#fff', fontSize: 12, textAlign: 'center' }}>Change Address</Text>
                                </TouchableOpacity>
                            </View>
                        </View>
                    </View>
                    : null
            }
        </View>

    )
}

export default MyCalendar

const styles = StyleSheet.create({
    calCont: {
        margin: 10,
        paddingHorizontal: 10,
        borderRadius: 10,
        borderColor: 'grey',
        borderWidth: 0.5,
        height: 350,
        shadowColor: 'green',
        backgroundColor: '#fff',
        shadowOffset: { width: 2, height: 2 },
        shadowOpacity: 1,
        shadowRadius: 8,
        elevation: 8,
    },

})