import { StyleSheet, Text, View, TextInput, TouchableOpacity } from 'react-native'
import React, { useState } from 'react'
import Icon from 'react-native-vector-icons/AntDesign'

const DatePicker = () => {
    const addresses = [
        {
            name: "Pune",
        },
        {
            name: "Akurdi",
        },
        {
            name: "Lonavala",
        },
    ];

    const [dropdown, setDropdown] = useState(false)

    const listFunction = () => {
        setDropdown(!dropdown)
    }

    const [select, setSelect] = useState('')

    return (
        <View style={styles.mainCont}>
            <View style={styles.addressCont}>
                <Text style={styles.addressTxt}>Address Type :</Text>
                <View style={styles.iconAndInputCont}>
                    <TextInput
                        style={[styles.addressInputStyle]}
                        placeholder="Select address..."
                        placeholderTextColor={'grey'}
                        onChangeText={(item) => setSelect(item)}
                        value={select}

                    />
                    <TouchableOpacity
                        style={styles.IconBtn}
                        onPress={() => { listFunction() }}
                    >
                        <Icon name='down' size={24} color={'#000'} style={styles.dropDownIcon} />
                    </TouchableOpacity>

                </View>

                <View>
                    {
                        dropdown ? addresses.map((item) => {
                            return (
                                <View style={styles.listStyle} key={item.name}>
                                    <TouchableOpacity
                                        onPress={() => { setSelect(item.name), listFunction() }}
                                    >
                                        <Text style={styles.addressTxt}>{item.name}</Text>
                                    </TouchableOpacity>
                                </View>
                            )
                        })
                            : null
                    }
                </View>
            </View>
        </View>
    )
}

export default DatePicker

const styles = StyleSheet.create({
    mainCont: {
        flex: 1,
        backgroundColor: '#fff',
        paddingVertical: 20,
        paddingHorizontal: 20,
    },
    listStyle: {
        display: 'flex',
        flexDirection: 'column',
        borderColor: 'grey',
        borderWidth: 0.5,
        borderRadius: 2,
        backgroundColor: '#D9D9D9',
    },
    addressTxt: {
        color: '#13005A',
        paddingLeft: 5,
        fontSize: 16,
        paddingLeft: 10,
        paddingVertical: 5,
        fontWeight: 'bold',
    },
    addressInputStyle: {
        paddingLeft: 10,
        color: '#000',
    },
    iconAndInputCont: {
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'space-between',
        backgroundColor: '#D9D9D9',
        borderTopLeftRadius: 2,
        borderTopRightRadius: 2,
        paddingLeft: 10,
        marginTop: 10,
        shadowColor: '#42A652',
        shadowOffset: { width: 2, height: 2 },
        shadowOpacity: 0.5,
        shadowRadius: 10,
        elevation: 8,
    },
    IconBtn: {
        width: '15%',
        justifyContent: 'center',
        alignItems: 'center',
    },
})