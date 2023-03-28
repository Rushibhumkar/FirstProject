import { StyleSheet, Text, TextInput, Alert, TouchableOpacity, ScrollView, View } from 'react-native'
import React, { useState } from 'react'
// import { CheckBox } from 'react-native-elements'
// import CheckBox from '@react-native-community/checkbox';


const Login = ({ navigation, route }) => {
  const [isSelected, setSelection] = useState(false)
  const [userName, setUserName] = useState("")
  const [password, setPassword] = useState("")

  const submit = () => {
    if (userName === 'Rushikesh' && password === "gopalbh@11") {
      Alert.alert(`Thank You ${userName}`)
      navigation.navigate("Home", { myName: `${userName}` });
    } else {
      Alert.alert(`Invalid UserName or Password`)
    }
  }


  return (
    <ScrollView style={{ flex: 1 }}>
      <View style={[styles.mainCont]}>
        <Text style={[styles.txt, styles.lfStyle]}>Login Form</Text>
        <Text style={[styles.gtxt, styles.textStyle]}>You can reach us anytime via rushibhumkar11@gmail.com</Text>

      </View>
      <View style={[styles.inputCont, styles.mainCont]} >
        <View style={[styles.col, styles.ipSection]} >
          <Text style={[styles.ipText, styles.gtxt]} >Enter Your Username</Text>
          <TextInput
            style={[styles.ipStyle, styles.emailInput]}
            autoCapitalize="none"
            autoCorrect={false}
            placeholder="Username"
            placeholderTextColor='grey'
            value={userName}
            onChangeText={(actualData) => setUserName(actualData)}
          />

        </View>
        <View style={[styles.col, styles.ipSection]}>
          <Text style={[styles.ipText, styles.gtxt]} >Enter Your Password</Text>
          <TextInput
            style={[styles.ipStyle, styles.passwordStyle]}
            autoCapitalize="none"
            autoCorrect={false}
            placeholder="Password"
            secureTextEntry={true}
            placeholderTextColor='grey'
            value={password}
            onChangeText={(actualData) => setPassword(actualData)}
          />

        </View>
        <View style={[styles.row, styles.checkboxCont]}>
          <CheckBox
            style={[styles.checkbox]}
            value={isSelected}
            onValueChange={setSelection}
            tintColors={{ true: '#5ECB95', false: 'black' }}
          />
          <Text style={styles.txt} >I have read and agreed with the Tc.</Text>
        </View>
      </View>
      <View style={[styles.col, styles.center]}>
        <TouchableOpacity style={[styles.loginbtn,
        {
          backgroundColor: isSelected ? '#5ECB95' : '#B5EECA'
        }]}
          disabled={!isSelected}
          onPress={() => submit()}
        >
          <Text style={[styles.btnText]}>Log in</Text>
        </TouchableOpacity>
        <View style={[styles.row, styles.mTop]}>
          <Text style={[styles.gtxt]}>Doesn't have an account yet?</Text>
          <TouchableOpacity onPress={() => navigation.navigate('SignUp', {})}>
            <Text style={[styles.signUpText]}>Sign Up</Text>
          </TouchableOpacity>
        </View>
      </View>


    </ScrollView>
  )
}

export default Login

const styles = StyleSheet.create({
  txt: {
    color: 'black'
  },
  col: {
    display: "flex",
    flexDirection: "column",
  },
  gtxt: {
    color: '#737373'
  },
  btnText: {
    color: 'white',
    fontSize: 22,
    paddingHorizontal: 40,
    paddingVertical: 10,

  },
  row: {
    display: 'flex',
    flexDirection: "row"
  },
  checkboxCont: {
    alignItems: 'center',
    marginVertical: 10
  },
  textStyle: {
    marginVertical: 15,
    fontSize: 16
  },
  checkbox: {
    paddingVertical: 15,
    paddingHorizontal: 15
  },
  lfStyle: {
    fontWeight: 'bold',
    fontSize: 25,
    color: '#504A4B'
  },
  signUpText: {
    color: '#5ECB95',

  },
  mTop: {
    marginTop: 20,
  },
  center: {
    alignItems: 'center',
    marginVertical: 10
  },
  ipText: {
    marginBottom: 10,
    fontSize: 14
  },
  mainCont: {
    marginHorizontal: 25,
    marginVertical: 20
  },
  ipStyle: {
    color: '#737373',
    height: 40,
    borderBottomWidth: 2,
    borderColor: 'none',
    backgroundColor: '#DEF3E8',
    borderBottomColor: '#b3d9ff',
    borderRadius: 8,
    placeholderTextColor: '#333',
    paddingHorizontal: 10
  },
  loginbtn: {
    borderRadius: 50
  },
  ipSection: {
    marginVertical: 15
  }

})