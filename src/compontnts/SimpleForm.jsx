import { StyleSheet, Text, TextInput, View, TouchableOpacity, Alert } from 'react-native'
import React, { useState } from 'react'

const SimpleForm = () => {

    const [name, setName] = useState(false)
    const [email, setEmail] = useState(false)
    const [password, setPassword] = useState(false)
    const submit = () => {
        return Alert.alert('Form Submitted Successfully!')
    }

    return (
        <View style={styles.cont}>
            <View style={styles.innCont}>
                <TextInput
                    style={styles.input}
                    placeholderTextColor={'grey'}
                    placeholder="Enter Your Name"
                    value={name}
                    onChangeText={setName}
                >
                </TextInput>
                <Text style={{ color: 'black' }}>This is my Name :{name}</Text>
            </View>
            <View style={styles.innCont}>
                <TextInput
                    style={styles.input}
                    placeholder="Enter Your Email"
                    placeholderTextColor={'grey'}
                    value={email}
                    onChangeText={setEmail}
                >
                </TextInput>
                <Text style={{ color: 'black' }}>This is my Email :{email}</Text>
            </View>
            <View style={styles.innCont}>
                <TextInput
                    style={styles.input}
                    placeholder="Enter Your Password"
                    secureTextEntry={true}
                    placeholderTextColor={'grey'}
                    value={password}
                    onChangeText={setPassword}
                >
                </TextInput>
                <Text style={{ color: 'black' }}>This is my Email :{password} </Text>
            </View>
            <View style={styles.innCont}>
                <TextInput
                    style={styles.input}
                    placeholder="Enter Your Mobile"
                    placeholderTextColor={'grey'}
                // value={data}
                // onChangeText={setData}
                >
                </TextInput>
            </View>
            <TouchableOpacity style={[styles.btnCont]}
                onPress={submit}
            >
                <Text style={[styles.btnTxt]}>Click Me</Text>
            </TouchableOpacity>
        </View>
    )
}

export default SimpleForm

const styles = StyleSheet.create({
    btnTxt: {
        color: 'red'
    },
    input: {
        color: 'black'
    },
    cont: {
        display: 'flex',
        flexDirection: 'column',
    },
    innCont: {
        marginHorizontal: 20,
        marginVertical: 5
    },
    btnCont: {
        marginHorizontal: 20,
        marginVertical: 5,
    }
})