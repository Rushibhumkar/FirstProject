import { StyleSheet, Text, View, Image, TextInput, ScrollView, TouchableOpacity } from 'react-native'
import React, { useState } from 'react'
import mainData from './MainData'
import PhoneNoIcon from 'react-native-vector-icons/Entypo'
import PassIcon from 'react-native-vector-icons/Entypo'

const LoginPage = ({ navigation }) => {
    // const [securityTextShown,setSecurityTextShown] = useState(true)
    return (
        <ScrollView>
            <View style={[styles.mainCont, { flex: 1 }]}>
                <View style={styles.logoCont}>
                    <Image style={styles.imgStyle} source={mainData.image} />
                    <Text style={styles.welcomeTxt}>Welcome Back</Text>
                </View>
                <Text style={styles.loginTxt}>Login to your account</Text>
                <View style={styles.dataCont}>
                    <View style={styles.phoneNoCont}>
                        <TextInput
                            style={styles.phoneNoStyle}
                            placeholder="Phone Number..."
                            placeholderTextColor='grey'
                        />
                        <View style={styles.IconStyle}>
                            <PhoneNoIcon name="phone" size={30} color="#000" />
                        </View>
                    </View>
                    <View style={styles.passCont}>
                        <TextInput
                            style={styles.passStyle}
                            placeholder="Password..."
                            placeholderTextColor='grey'
                            secureTextEntry={true}
                        />
                        <View style={styles.IconStyle}>
                            <PassIcon name="key" size={30} color="#000" />
                        </View>
                    </View>
                </View>
                <View style={styles.signupForgetCont}>
                    <TouchableOpacity>
                        <Text style={styles.signupTxt}>SignUp?</Text>
                    </TouchableOpacity>
                    <TouchableOpacity>
                        <Text style={styles.forgetPassTxt}>Forget Password?</Text>
                    </TouchableOpacity>
                </View>
                <View style={styles.loginBtnCont}>
                    <TouchableOpacity
                        onPress={() => navigation.navigate('PersonalDetails')}
                    >
                        <Text style={styles.loginBtnTxt}>Login</Text>
                    </TouchableOpacity>
                </View>
            </View>
        </ScrollView>
    )
}

export default LoginPage

const styles = StyleSheet.create({
    mainCont: {
        paddingTop: 60,
        paddingHorizontal: 20,

    },
    imgStyle: {
        width: 120,
        height: 120,
    },
    logoCont: {
        justifyContent: 'center',
        alignItems: 'center',
    },
    welcomeTxt: {
        color: '#13005A',
        fontSize: 20,
        fontWeight: 'bold',
        textAlign: 'center',
        letterSpacing: 1,
        marginTop: 10,
    },
    loginTxt: {
        color: '#13005A',
        marginTop: 50,
        paddingLeft: 10,
        fontSize: 16,
        letterSpacing: 0.8,
    },
    phoneNoStyle: {
        paddingLeft: 8,
        width: '85%',
        color: '#13005A'
    },
    passStyle: {
        paddingLeft: 8,
        width: '85%',
        color: '#13005A',
    },
    phoneNoCont: {
        display: 'flex',
        backgroundColor: '#fff',
        flexDirection: 'row',
        justifyContent: 'space-between',
        borderColor: '#000',
        borderWidth: 1,
        borderRadius: 8,
        marginVertical: 20,
        shadowColor: '#42A652',
        shadowOffset: { width: 2, height: 2 },
        shadowOpacity: 1,
        shadowRadius: 10,
        elevation: 10,
    },
    passCont: {
        display: 'flex',
        backgroundColor: '#fff',
        flexDirection: 'row',
        justifyContent: 'space-between',
        borderColor: '#000',
        borderWidth: 1,
        borderRadius: 8,
        marginVertical: 20,
        shadowColor: '#42A652',
        shadowOffset: { width: 2, height: 2 },
        shadowOpacity: 1,
        shadowRadius: 10,
        elevation: 10,
    },
    forgetPassTxt: {
        color: '#13005A',
        marginRight: 10,
    },
    signupTxt: {
        color: 'blue',
        fontSize: 16,
        marginLeft: 10,
    },
    signupForgetCont: {
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'space-between',
    },
    loginBtnCont: {
        backgroundColor: '#42A652',
        marginVertical: 50,
        borderRadius: 10,
        marginHorizontal: 20,
        paddingVertical: 10,
        shadowColor: 'black',
        shadowOffset: { width: 2, height: 4 },
        shadowOpacity: 1,
        shadowRadius: 30,
        elevation: 8,
    },
    loginBtnTxt: {
        color: '#fff',
        textAlign: 'center',
        fontSize: 18,
    },
    IconStyle: {
        width: '15%',
        borderLeftColor: 'grey',
        borderLeftWidth: 0.4,
        justifyContent: 'center',
        alignItems: 'center',
    }

})