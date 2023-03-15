import { StyleSheet, Text, View, TouchableOpacity } from 'react-native'
import React, { useState } from 'react'
import Icon from 'react-native-vector-icons/Feather'
import { useDispatch } from 'react-redux'
import { deleteItem } from '../../redux/actions'
import DateTimePickerModal from "react-native-modal-datetime-picker";

const Cart = (props) => {
    // const dispatch = useDispatch()

    // const item = props.item
    // return (
    //     <View key={item.id} style={{ height: 50, display: 'flex', alignItems: 'center', flexDirection: 'row', justifyContent: 'space-between', width: '100%' }} >
    //         <Text style={{ color: '#000' }} >{item.serviceName}</Text>
    //         <Icon name="trash-2" size={24} color={'#ff0000'} onPress={() => dispatch(deleteItem(item))} />
    //     </View>
    // )
    const [isSelected, setSelection] = useState(0);
    const [isDatePickerVisible, setDatePickerVisibility] = useState(false);

    const showDatePicker = () => {
        setDatePickerVisibility(true);
    };

    const hideDatePicker = () => {
        setDatePickerVisibility(false);
    };

    const handleDateConfirm = (date) => {
        console.warn("A date has been picked: ", date);
        hideDatePicker();
    };

    const [date, setDate] = useState('')
    return (
        <View style={{ flex: 1 }}>
            <View style={{ justifyContent: 'center', alignItems: 'center' }}>
                <TouchableOpacity
                    onPress={() => showDatePicker()}
                    style={{ width: '50%', height: 50, borderRadius: 20, justifyContent: 'center', alignItems: 'center', backgroundColor: '#5E5FEF', marginVertical: 20 }}
                >
                    <Text style={{ color: 'black' }}>Select Date</Text>
                </TouchableOpacity>
                <DateTimePickerModal
                    isVisible={isDatePickerVisible}
                    mode="date"
                    onConfirm={handleDateConfirm}
                    onCancel={hideDatePicker}
                />
            </View>
            <View style={{ alignItems: 'center', justifyContent: 'center' }}>
                <Text style={{ fontSize: 18, marginVertical: 10, color: '#000' }}>Selected date:{date}</Text>
            </View>

            <View style={{ marginLeft: 10 }}>
                <View style={{ marginBottom: 10 }}>
                    <Text style={{ color: 'black', flexDirection: 'row', alignItems: 'flex-start', fontSize: 16 }}>Available slots</Text>
                </View>
                <View style={styles.col}>
                    <View style={styles.row}>
                        <TouchableOpacity
                            onPress={() => setSelection(1)}
                            style={{ backgroundColor: isSelected === 1 ? '#5E5FEF' : '#fff', borderRadius: 10 }}
                        >
                            <Text style={{ color: isSelected === 1 ? '#fff' : '#000', paddingVertical: 6, paddingHorizontal: 12 }}>06:00 AM - 11:00 AM</Text>
                        </TouchableOpacity>
                        <TouchableOpacity
                            onPress={() => setSelection(2)}

                            style={{ backgroundColor: isSelected === 2 ? '#5E5FEF' : '#fff', borderRadius: 10 }}
                        >
                            <Text style={{ color: isSelected === 2 ? '#fff' : '#000', paddingVertical: 6, paddingHorizontal: 12 }}>06:00 AM - 11:00 AM</Text>
                        </TouchableOpacity>
                    </View>
                    <View style={styles.row}>
                        <TouchableOpacity
                            onPress={() => setSelection(3)}

                            style={{ backgroundColor: isSelected === 3 ? '#5E5FEF' : '#fff', borderRadius: 10 }}
                        >
                            <Text style={{ color: isSelected === 3 ? '#fff' : '#000', paddingVertical: 6, paddingHorizontal: 12 }}>06:00 AM - 11:00 AM</Text>
                        </TouchableOpacity>
                        <TouchableOpacity
                            onPress={() => setSelection(4)}

                            style={{ backgroundColor: isSelected === 4 ? '#5E5FEF' : '#fff', borderRadius: 10 }}
                        >
                            <Text style={{ color: isSelected === 4 ? '#fff' : '#000', paddingVertical: 6, paddingHorizontal: 12 }}>06:00 AM - 11:00 AM</Text>
                        </TouchableOpacity>
                    </View>
                </View>
            </View>
            <View style={{ justifyContent: 'center', alignItems: 'center', marginVertical: 50, }}>
                <Text style={{ color: '#5E5FEF', borderWidth: 1, borderColor: '#5E5FEF', fontSize: 20, paddingHorizontal: 40, paddingVertical: 8, borderRadius: 20 }}>Continue</Text>
            </View>
        </View>
    )

}

export default Cart

const styles = StyleSheet.create({
    col: {
        display: 'flex',
        flexDirection: 'column'
    },
    row: {
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'space-evenly',
        marginVertical: 10
    }
})