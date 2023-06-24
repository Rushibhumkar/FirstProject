import { StyleSheet, Text, TextInput, TouchableOpacity,ScrollView, View } from 'react-native'
import React from 'react'

const SignUp = ({navigation,route}) => {
  return (
    <ScrollView style={{flex:1}}>
      <View style={[styles.mainCont]}>
        <Text style={[styles.txt,styles.lfStyle]}>SignUp Form</Text>
        <Text style={[styles.gtxt,styles.textStyle]}>You can reach us anytime via rushibhumkar11@gmail.com</Text>
        
      </View>
      <View style={[styles.inputCont,styles.mainCont]} >
        <View style={[styles.col,styles.ipSection]} >
            <Text style={[styles.ipText,styles.gtxt]} >Enter Your Email</Text>
            <TextInput 
            style={[styles.ipStyle,styles.emailInput]} 
            autoCapitalize="none"
            autoCorrect={false}
            placeholder="Email"
            placeholderTextColor='grey'
            />
            
        </View>
        <View style={[styles.col,styles.ipSection]}>
            <Text style={[styles.ipText,styles.gtxt]} >Enter Your Username</Text>
            <TextInput  
            style={[styles.ipStyle,styles.passwordStyle]} 
            autoCapitalize="none"
            autoCorrect={false}
            placeholder="Username"
            placeholderTextColor='grey'

            />
        </View>
        <View style={[styles.col,styles.ipSection]}>
            <Text style={[styles.ipText,styles.gtxt]} >Enter Your Password</Text>
            <TextInput  
            style={[styles.ipStyle,styles.passwordStyle]} 
            autoCapitalize="none"
            autoCorrect={false}
            placeholder="Password"
            secureTextEntry={true}

            placeholderTextColor='grey'

            />
        </View>
      </View>
      <View style={[styles.col,styles.center]}>
      <TouchableOpacity style={[styles.SignUpbtn]}>
        <Text style={[styles.btnText]}>Log in</Text>
      </TouchableOpacity>
      <View style={[styles.row,styles.mTop]}>
        <Text style={[styles.gtxt]}>Already have an account yet? </Text>
        <TouchableOpacity
           onPress={()=>navigation.navigate('Login')}
        >
          <Text style={[styles.signUpText]}>Login</Text>
        </TouchableOpacity>
      </View>
      </View>
    

    </ScrollView>
  )
}

export default SignUp

const styles = StyleSheet.create({
    txt:{
        color:'black'
    },
    col:{
        display:"flex",
        flexDirection: "column"
    },
    gtxt:{
       color:'#737373'
    },
    btnText:{
        color:'white',
        fontSize:22,
        paddingHorizontal:40,
        paddingVertical:10,
        
    },
    row:{
        display:'flex',
        flexDirection:"row"
    },
    textStyle:{
        marginVertical:15,
        fontSize:16
    },
    lfStyle:{
        fontWeight:'2000',
        fontSize:25,
        color:'#504A4B'
    },
    signUpText:{
        color:'#5ECB95',

    },
    mTop:{
        marginTop:20,
    },
    center:{
        alignItems:'center',
    },
    ipText:{
        marginBottom:10,
        fontSize:14
    },
    mainCont:{
        marginHorizontal:25,
        marginVertical:20
    },
    ipStyle:{
        color:'#737373',
        height:40,
        borderBottomWidth:2,
        borderColor:'none',
        backgroundColor:'#DEF3E8',
        borderBottomColor:'#b3d9ff',
        borderRadius:8,
        placeholderTextColor:'#333',
        paddingHorizontal:10
      },
      SignUpbtn:{
        backgroundColor:'#5ECB95',
        borderRadius:50
      },
      ipSection:{
        marginVertical:15
      }
    
})