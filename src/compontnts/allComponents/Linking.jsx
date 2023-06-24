import { Alert, StyleSheet, Text, TouchableOpacity, View ,Linking} from 'react-native'
import React from 'react'

const mainUrl='https://github.com/Rushibhumkar/Portfoliowebsite';
const mobUrl='+919404006892';
const mapUrl='https://www.google.com/maps/search/?api=1&query=india'
const youtubeUrl='https://www.youtube.com/'
const facebookUrl='https://www.facebook.com/'
const fakeUrl='abcd.abck.abck.com'
const message='Hi this is Rushikesh Bhumkar'
const galleryUrl='content://media/internal/images/media'


const LinkApps = () => {

    const openUrl = async (url) => {
        const isSupported = await Linking.canOpenURL(url);
        if (isSupported) {
            await Linking.openURL(url);
        }else{
            Alert.alert(`Don't know hot to open this url :${url}`)
        }
    }

  return (
    <View style={[styles.cont]}>
        
      <TouchableOpacity style={[styles.btnCont]}
        onPress={()=>{
            Linking.openURL(mainUrl)
        }}
      >
        <Text style={[styles.textCenter,styles.tw,styles.urlbtn]}>URL</Text>
      </TouchableOpacity>

      <TouchableOpacity style={[styles.btnCont]}
        onPress={()=>{
            Linking.openURL(`tel:${mobUrl}`)
        }}
      >
        <Text style={[styles.textCenter,styles.tw,styles.callbtn]}>CALL</Text>
      </TouchableOpacity>

      <TouchableOpacity style={[styles.btnCont]}
        onPress={()=>{
            Linking.openURL(`sms:number=${mobUrl}?body=${message}`)
        }}
      >
        <Text style={[styles.textCenter,styles.tw,styles.smsbtn]}>SMS</Text>
      </TouchableOpacity>

      <TouchableOpacity style={[styles.btnCont]}
        onPress={()=>{
           Linking.openURL(`mailto:rushibhumkar11@gmail.com?subject=testing&body=${message}`)
        }}
      >
        <Text style={[styles.textCenter,styles.tw,styles.mailbtn]}>MAIL</Text>
      </TouchableOpacity>

      <TouchableOpacity style={[styles.btnCont]}
        onPress={()=>{
            Linking.openSettings()
        }}
      >
        <Text style={[styles.textCenter,styles.tw,styles.settingurl]}>SETTINGS</Text>
      </TouchableOpacity>

      <TouchableOpacity style={[styles.btnCont]}
        onPress={()=>{
            Linking.openURL(`whatsapp://send?phone=${mobUrl}&text=${message}`)
        }}
      >
        <Text style={[styles.textCenter,styles.tw,styles.whatsappurl]}>WHATSAPP</Text>
      </TouchableOpacity>

      <TouchableOpacity style={[styles.btnCont]}
        onPress={()=>{
            Linking.openURL(mapUrl)
        }}
      >
        <Text style={[styles.textCenter,styles.tw,,styles.mapurl]}>MAP</Text>
      </TouchableOpacity>

      <TouchableOpacity style={[styles.btnCont]}
        onPress={()=>{
            Linking.openURL(youtubeUrl)
        }}
      >
        <Text style={[styles.textCenter,styles.tw,styles.yturl]}>YOUTUBE</Text>
      </TouchableOpacity>

      <TouchableOpacity style={[styles.btnCont]}
        onPress={()=>{
            Linking.openURL(facebookUrl)
        }}
      >
        <Text style={[styles.textCenter,styles.tw,styles.fburl]}>FACEBOOK</Text>
      </TouchableOpacity>

      <TouchableOpacity style={[styles.btnCont]}
        onPress={()=>{
            Linking.openURL(galleryUrl)
        }}
      >
        <Text style={[styles.textCenter,styles.tw,styles.galleryurl]}>GALLERY</Text>
      </TouchableOpacity>

    </View>
  )
}

export default LinkApps

const styles = StyleSheet.create({
    tw:{
        color:'#fff'
    },
    cont:{
        display:'flex',
        flexDirection:'column',
        justifyContent:'center',
        alignItems:'center'
    },
    textCenter:{
        display:'flex',
        alignItems:'center',
        justifyContent:'center',
        marginVertical:10,
        paddingVertical:5,
        paddingHorizontal:10,
        borderRadius:10,
    },
    btnCont:{
        display:'flex',
    },
    urlbtn:{
        backgroundColor:'blue'
    },
    callbtn:{
        backgroundColor:'yellow',
        color:'black'
    },
    smsbtn:{
        backgroundColor:'cyan'
    },
    mailbtn:{
        backgroundColor:'black'
    },
    settingurl:{
        backgroundColor:'grey'
    },
    whatsappurl:{
        backgroundColor:'pink'
    },
    mapurl:{
        backgroundColor:'red'
    },
    yturl:{
        backgroundColor:'grey'
    },
    fburl:{
        backgroundColor:'brown'
    },
    galleryurl:{
        backgroundColor:'cyan'
    }

})