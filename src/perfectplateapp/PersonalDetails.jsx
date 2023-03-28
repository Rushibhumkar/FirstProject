import { ScrollView, StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native'
import React from 'react'
import Icon from 'react-native-vector-icons/AntDesign'

const PersonalDetails = ({ navigation }) => {
    return (
        <ScrollView>
            <View style={styles.mainCont}>
                {/* name container */}
                <View style={styles.nameCont}>
                    <Text style={styles.nameTxt}>Name :</Text>
                    <TextInput
                        style={[styles.TextInputStyle, styles.nameInput]}
                        placeholder="Name..."
                        placeholderTextColor={'grey'}
                    />
                </View>
                {/* password container */}
                <View style={styles.nameCont}>
                    <Text style={styles.nameTxt}>Name :</Text>
                    <TextInput
                        style={[styles.TextInputStyle, styles.nameInput]}
                        placeholder="Password..."
                        placeholderTextColor={'grey'}
                        secureTextEntry={true}
                    />
                </View>
                {/* select address */}
                <View style={styles.addressCont}>
                    <Text style={styles.addressTxt}>Address Type :</Text>
                    <View style={styles.iconAndInputCont}>
                        <TextInput
                            style={[styles.addressInputStyle]}
                            placeholder="Select address..."
                            placeholderTextColor={'grey'}
                        />
                        <TouchableOpacity
                            style={styles.IconBtn}
                        >
                            <Icon name='down' size={24} color={'#000'} style={styles.dropDownIcon} />
                        </TouchableOpacity>
                    </View>
                </View>
                {/* flat number and building name */}
                <View style={styles.nameCont}>
                    <Text style={styles.nameTxt}>Flat Number /Building Name :</Text>
                    <TextInput
                        style={[styles.TextInputStyle, styles.nameInput]}
                        placeholder="Flat Number /Building Name..."
                        placeholderTextColor={'grey'}
                    />
                </View>
                {/* street or landmark */}
                <View style={styles.nameCont}>
                    <Text style={styles.nameTxt}>Street/Landmark :</Text>
                    <TextInput
                        style={[styles.TextInputStyle, styles.nameInput]}
                        placeholder="Street/Landmark..."
                        placeholderTextColor={'grey'}
                    />
                </View>
                {/* city */}
                <View style={styles.nameCont}>
                    <Text style={styles.nameTxt}>City :</Text>
                    <TextInput
                        style={[styles.TextInputStyle, styles.nameInput]}
                        placeholder="City..."
                        placeholderTextColor={'grey'}
                    />
                </View>
                {/* state */}
                <View style={styles.nameCont}>
                    <Text style={styles.nameTxt}>State :</Text>
                    <TextInput
                        style={[styles.TextInputStyle, styles.nameInput]}
                        placeholder="State..."
                        placeholderTextColor={'grey'}
                    />
                </View>
                {/* pincode */}
                <View style={styles.nameCont}>
                    <Text style={styles.nameTxt}>Pincode :</Text>
                    <TextInput
                        style={[styles.TextInputStyle, styles.nameInput]}
                        placeholder="Pincode..."
                        placeholderTextColor={'grey'}
                    />
                </View>
                <TouchableOpacity
                    style={styles.submitBtn}
                    onPress={() => navigation.navigate('OtpScreen')}
                >
                    <Text style={styles.submitBtnTxt}>Create Account</Text>
                </TouchableOpacity>
            </View>
        </ScrollView>
    )
}

export default PersonalDetails

const styles = StyleSheet.create({
    mainCont: {
        paddingVertical: 20,
        paddingHorizontal: 20,
    },
    nameTxt: {
        color: '#13005A',
        paddingLeft: 5,
    },
    TextInputStyle: {
        color: '#000',
        backgroundColor: '#D9D9D9',
        borderRadius: 10,
        paddingLeft: 10,
        marginVertical: 10,
        shadowColor: '#42A652',
        shadowOffset: { width: 2, height: 2 },
        shadowOpacity: 0.5,
        shadowRadius: 10,
        elevation: 8,
    },
    IdentityInputStyle: {
        paddingLeft: 10,
    },
    iconAndInputCont: {
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'space-between',
        backgroundColor: '#D9D9D9',
        borderRadius: 10,
        paddingLeft: 10,
        marginVertical: 10,
        shadowColor: '#42A652',
        shadowOffset: { width: 2, height: 2 },
        shadowOpacity: 0.5,
        shadowRadius: 10,
        elevation: 8,
    },
    IdentityTxt: {
        color: '#13005A',
        paddingLeft: 5,
    },
    IdentityInputStyle: {
        width: '85%',
    },
    IconBtn: {
        width: '15%',
        justifyContent: 'center',
        alignItems: 'center',
    },

    addressTxt: {
        color: '#13005A',
        paddingLeft: 5,

    },
    addressInputStyle: {
        paddingLeft: 10,
        color: '#000',
    },
    submitBtn: {
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        marginTop: 20,
        backgroundColor: '#42A652',
        borderRadius: 10,
        marginHorizontal: 20,

    },
    submitBtnTxt: {
        color: '#fff',
        fontSize: 18,
        paddingVertical: 10,
    }

})