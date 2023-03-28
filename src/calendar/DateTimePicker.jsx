import React, { useState } from "react";
import { Button, TouchableOpacity, View, StyleSheet, Text, } from "react-native";
import DateTimePickerModal from "react-native-modal-datetime-picker";

const DateTimePicker = () => {
    const [isDatePickerVisible, setDatePickerVisibility] = useState(false);
    const [isDatePickerVisibleSecond, setDatePickerVisibilitySecond] = useState(false);
    const [selectedStartingDate, setSelectedStartingDate] = useState('Starting Date')
    const [selectedEndingDate, setSelectedEndingDate] = useState('Ending Date')

    const showDatePicker = () => {
        setDatePickerVisibility(true);
    };

    const hideDatePicker = () => {
        setDatePickerVisibility(false);
    };
    const showDatePickerSecond = () => {
        setDatePickerVisibilitySecond(true);
    };

    const hideDatePickerSecond = () => {
        setDatePickerVisibilitySecond(false);
    };

    const startDate = (date) => {
        // console.warn("A date has been picked: ", date);
        const dt = new Date(date);
        const x = dt.toISOString().split("T");
        const x1 = x[0].split('-');
        // console.log(x1[2] + '/' + x1[1] + '/' + x1[0])
        setSelectedStartingDate(x1[2] + '/' + x1[1] + '/' + x1[0])
        hideDatePicker();
    };
    const endDate = (date) => {
        // console.warn("A date has been picked: ", date);
        const dt = new Date(date);
        const x = dt.toISOString().split("T");
        const x1 = x[0].split('-');
        // console.log(x1[2] + '/' + x1[1] + '/' + x1[0])
        setSelectedEndingDate(x1[2] + '/' + x1[1] + '/' + x1[0])
        hideDatePickerSecond();
    };

    return (
        <View style={styles.mainCont}>
            <View style={styles.btnContns}>
                <TouchableOpacity onPress={showDatePicker} style={styles.btnStyle}>
                    <Text style={styles.sDateTxt}>Starting Date</Text>
                </TouchableOpacity>
                <TouchableOpacity onPress={showDatePickerSecond} style={styles.btnStyle}>
                    <Text style={styles.eDateTxt}>Ending Date</Text>
                </TouchableOpacity>
            </View>

            <DateTimePickerModal
                isVisible={isDatePickerVisible}
                mode="date"
                onConfirm={startDate}
                onCancel={hideDatePicker}
            />
            <DateTimePickerModal
                isVisible={isDatePickerVisibleSecond}
                mode="date"
                onConfirm={endDate}
                onCancel={hideDatePickerSecond}
            />
            <View style={{ flexDirection: 'row', justifyContent: 'space-evenly' }}>
                <Text style={{ color: "#000", marginVertical: 10, fontSize: 18 }}>{selectedStartingDate}</Text>
                <Text style={{ color: "#000", marginVertical: 10, fontSize: 18 }}>{selectedEndingDate}</Text>
            </View>
        </View>
    );
};
export default DateTimePicker;

const styles = StyleSheet.create({
    mainCont: {
        flex: 1,
        // alignItems: 'center',
        backgroundColor: '#fff',
        paddingTop: 40,
    },
    btnStyle: {
        backgroundColor: 'green',
        marginHorizontal: 10,
        borderRadius: 10,
    },
    btnContns: {
        display: 'flex',
        flexDirection: 'row',
    },
    sDateTxt: {
        color: '#fff',
        fontSize: 18,
        fontWeight: 'bold',
        paddingHorizontal: 20,
        paddingVertical: 10,
    },
    eDateTxt: {
        color: '#fff',
        fontSize: 18,
        fontWeight: 'bold',
        paddingHorizontal: 20,
        paddingVertical: 10,
    }
})
