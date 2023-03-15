import { StyleSheet, Text, View ,Image, ScrollView, TouchableOpacity,Linking} from 'react-native'
import React from 'react'

const FlatList = () => {
  return (
    <ScrollView>
    <View style={[styles.cont]} >
      <Text style={styles.txt}>My Portfolio Website</Text>
      <View style={[styles.imgCont]}>
        
        <Image style={[styles.img]} source={{uri:"https://rushibhumkar.github.io/Portfoliowebsite/myprofile.jpeg.jpg"}} />
        <Text style={[styles.txt2]}>This is my personal protfolio website . Lorem ipsum dolor sit amet consectetur adipisicing elit. Sint labore dolor ducimus laborum cumque alias nostrum, mollitia non inventore vel.</Text>
      </View>
      <TouchableOpacity style={[styles.click]}>
        <Text style={[styles.btnText]} onPress={()=> Linking.openURL('https://rushibhumkar.github.io/Portfoliowebsite/') } >Website Link</Text>
      </TouchableOpacity>
     </View>
    <View style={[styles.cont]} >
      <Text style={styles.txt}>My Portfolio Website</Text>
      <View style={[styles.imgCont]}>
        <Image style={[styles.img]} source={{uri:"https://rushibhumkar.github.io/Portfoliowebsite/myprofile.jpeg.jpg"}} />
        <Text style={[styles.txt2]}>This is my personal protfolio website . Lorem ipsum dolor sit amet consectetur adipisicing elit. Sint labore dolor ducimus laborum cumque alias nostrum, mollitia non inventore vel.</Text>
      </View>
      <TouchableOpacity style={[styles.click]}>
        <Text style={[styles.btnText]} onPress={()=> Linking.openURL('https://rushibhumkar.github.io/Portfoliowebsite/') } >Website Link</Text>
      </TouchableOpacity>
     </View>
    <View style={[styles.cont]} >
      <Text style={styles.txt}>My Portfolio Website</Text>
      <View style={[styles.imgCont]}>
        <Image style={[styles.img]} source={{uri:"https://rushibhumkar.github.io/Portfoliowebsite/myprofile.jpeg.jpg"}} />
        <Text style={[styles.txt2]}>This is my personal protfolio website . Lorem ipsum dolor sit amet consectetur adipisicing elit. Sint labore dolor ducimus laborum cumque alias nostrum, mollitia non inventore vel.</Text>
      </View>
      <TouchableOpacity style={[styles.click]}>
        <Text style={[styles.btnText]} onPress={()=> Linking.openURL('https://rushibhumkar.github.io/Portfoliowebsite/') }  >Website Link</Text>
      </TouchableOpacity>
     </View>
    </ScrollView>
  )
}

export default FlatList

const styles = StyleSheet.create({
    txt:{
        color:'black',
        fontSize:16,
        // fontVariant:['small-caps'],
        fontWeight: 'bold',
        marginBottom:10,
        
    },
    txt2:{
        color:'grey',
        fontSize:13,
        marginTop:10
    },
    cont:{
        display:'flex',
        flexDirection: "column",
        alignItems:"center",
        borderWidth:0.5,
        borderColor:'black',
        marginVertical:10,
        marginHorizontal:40,
        borderRadius:10,
        paddingVertical:15,
        
    },
    img:{
        width:250,
        height:250,
        aspectRatio:1
    },
    imgCont:{
        alignItems:'center',
        paddingHorizontal:25
    },
    click:{
        backgroundColor:'cyan',
        justifyContent:'center',
        paddingHorizontal:30,
        paddingVertical:15,
        borderRadius:15,
        marginTop:10
    },
    btnText:{
        color:'black'
    }
})