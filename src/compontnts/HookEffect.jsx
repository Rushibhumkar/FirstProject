import { FlatList, StyleSheet, Text, View ,Image, ActivityIndicator} from 'react-native'
import React ,{useEffect,useState} from 'react'


const HookEffect = () => {
    const [myUserData,setMyUserData] = useState()
    const [isLoaded,setIsLoaded] = useState(true)

    const getUserData = async () =>{
        try {
        const response = await fetch('https://thapatechnical.github.io/userapi/users.json')
        const myData = await response.json();
        setMyUserData(myData)
        setIsLoaded(false)
            console.log(myData)
        } catch (error) {
            console.log(error)
        }
    }

    useEffect(()=>{
        getUserData();
    },[]);


  return (
    <View style={[styles.col,styles.outCont]}>
        { isLoaded ? 
        (
        <View style={[styles.loader]}>
            <ActivityIndicator size='large' color="#0000ff" />
        </View>
        )
        : (
        <View>
            <View style={[styles.bgColor]}>
                <Text style={[styles.headerText]}>List Of Students</Text>
            </View>      
            <FlatList
            key={()=>key}
            data={myUserData}
            renderItem={({item})=>{
                return(
                    <View style={[styles.card]}>
                        <View style={[styles.center]}>
                            <Image
                            style={[styles.imgStyle]}
                            // resizeMethod="cover"
                            source={{uri:item.image}}
                            />
                        </View>
                        <View style={[styles.row,styles.bdCont]}>
                            <Text style={[styles.txt,styles.bdText]}>Bio-Data</Text>
                            <Text style={[styles.txt,{fontSize:16,fontWeight:'bold'}]}>
                            {item.id < 10 ? `#0${item.id}` : `#${item.id}`}    
                            </Text> 
                        </View>
                        <Text style={[styles.txt,{fontSize:16,fontWeight:'bold'}]}>Name: {item.name}</Text> 
                        <Text style={[styles.txt,{fontSize:16,fontWeight:'bold'}]}>Email: {item.email}</Text> 
                        <Text style={[styles.txt,{fontSize:16,fontWeight:'bold'}]}>Mobile: {item.mobile}</Text> 
                        {/* <Text style={[styles.txt,{fontSize:16,fontWeight:'bold'}]}>{item.image}</Text>  */}
                    </View>

        )
     }}
     />
      </View>
        )}
    </View>
  )
}

export default HookEffect

const styles = StyleSheet.create({
    txt:{
        color:'black',

    },
    col:{
        display:"flex",
        flexDirection: "column"
    },
    row:{
        display:'flex',
        flexDirection:"row"
    },
    imgStyle:{
        width:100 ,
        height:120,
        marginBottom:10,
        borderWidth:2,
        borderColor:'white',
    },
    loader:{
        display:'flex',
        justifyContent:"center",
        alignItems:'center',
        minHeight:'100%'
    },
    bdText:{
        fontSize:25,
        fontWeight:'bold',
        fontFamily:"JosefinSans_200ExtraLight",
    },
    bdCont:{
        justifyContent:'space-between',
        alignItems:'center',
        marginBottom:10
    },
    headerText:{
        color:'white',
        fontFamily:'JosefinSans_300Light',
        fontSize:25,
        fontWeight:'bold',
        textAlign:'center',
        marginTop:10,
        paddingBottom:10,
        borderBottomColor:'black',
        borderBottomWidth:0.5
    },
    outCont:{
        backgroundColor:'#6B9CE5'
    },
    card:{
        backgroundColor:'#5ECB95',
        paddingVertical:10,
        paddingHorizontal:20,
        marginVertical:20,
        borderColor:'white',
        borderRadius:5,
        borderWidth:4,
        marginVertical:10,
        marginHorizontal:50
    },
    center:{
        display:'flex',
        justifyContent:'center',
        alignItems:'center',
    },
    bgColor:{
        backgroundColor:'#5ECB74'
    }
})