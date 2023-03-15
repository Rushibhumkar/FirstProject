import { FlatList, StyleSheet, Text, View } from 'react-native'
import React from 'react'

const HorScroll = () => {
const crickterNames=[{
    name:"Rushikesh Bhumkar",
    dob:2002,
    address:"Pune",
    phone:7972755589
},
{
    name:"Rohit Sharma",
    dob:1983,
    address:"Kolkata",
    phone:9038392837
},
{
    name:"Virat Kohli",
    dob:1983,
    address:"Ahmadnagar",
    phone:9837463920
},
{
    name:"Hardik Pandya",
    dob:1945,
    address:"Aurangabad",
    phone:9173847269
},
{
    name:"Ramdas Thakur",
    dob:1976,
    address:"Amravati",
    phone:8372649058
},
{
    name:"Kedar Jadhav",
    dob:1947,
    address:"Jalna",
    phone:9283755589
}]

  return (
    <View>
        <Text style={[styles.txt,styles.headText]}>Top 10 Players in India</Text>
   <FlatList
   style={[styles.listStyle]}
   keyExtractor={(key)=>{
    return key.name;
   }}
   showsHorizontalScrollIndicator={true}

   horizontal
   data={crickterNames}
   renderItem={({item})=>{
    return (

       <View style={[styles.col,styles.center]}>
      <Text style={[styles.textStyle]}>Name :{item.name}</Text>
      <Text style={[styles.textStyle]}>Date of Birth :{item.dob}</Text>
      <Text style={[styles.textStyle]}>Address :{item.address}</Text>
      <Text style={[styles.textStyle]}>Mobile Number :{item.phone}</Text>
    </View>

    )
   }}
   />
   </View>
  )
}

export default HorScroll;

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
    listStyle:{
      backgroundColor:'pink'
    },
    headText:{
        textAlign:'center',
        paddingVertical:10,
        fontSize:25,
        fontWeight:'bold'

    },
    center:{
        display:'flex',
        alignItems:'center',
        justifyContent:"center",
        borderWidth:0.5,
        borderColor:'black',
        marginVertical:10,
        marginHorizontal:10,
        borderRadius:10,
        backgroundColor:'cyan',
        height:150,
        width:200
    },
    textStyle:{
        fontWeight:'bold',
        fontSize:16,
        color:'black'
    }
})