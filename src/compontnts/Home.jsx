import { StyleSheet, Text, View,ScrollView, TouchableOpacity } from 'react-native'
import React from 'react'

const Home = ({navigation,route}) => {
  const {myName}=route.params;

  return (
    <ScrollView>
      <View style={styles.container}>
        <Text style={[styles.txt]} >Hello {myName} 😘 </Text>
        <TouchableOpacity style={[styles.goBackBtn]}
        onPress={()=>navigation.goBack()}
        // onPress={()=>navigation.navigate('Login')}
        >
          <Text style={[styles.goBackText]}>Go Back</Text>
        </TouchableOpacity>
      </View>
    </ScrollView>
  )
}

export default Home

const styles = StyleSheet.create({
    txt:{
        color:'black'
    },
    col:{
        display:"flex",
        flexDirection: "column"
    },
    row:{
        display:'flex',
        flexDirection:"row"
    },
    container:{
      display:'flex',
      flexDirection: "column",
      alignItems:'center',
      justifyContent:'center',
      marginVertical:20,
      marginHorizontal:15
    },
    goBackBtn:{
     display:'flex',
     paddingHorizontal:20,
     paddingVertical:10,
     backgroundColor:'cyan',
     borderRadius:50,
     marginTop:10

    },
    goBackText:{
      color:'black'
    }
})