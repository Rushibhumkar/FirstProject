import { StyleSheet, Text, View, TouchableOpacity } from 'react-native'
import React from 'react'

const OtpScreen = ({ navigation }) => {
    return (
        <View>
            <Text style={{ color: '#000', textAlign: 'center' }}>OtpScreen</Text>
            <TouchableOpacity
                style={styles.submitBtn}
                onPress={() => navigation.navigate('HomeScreen')}
            >
                <Text style={styles.submitBtnTxt}>Verify & Continue</Text>
            </TouchableOpacity>
        </View>
    )
}

export default OtpScreen

const styles = StyleSheet.create({
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