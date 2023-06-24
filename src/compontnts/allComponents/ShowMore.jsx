import { StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React, {useState} from 'react'
import { Icon } from 'react-native-vector-icons/AntDesign'

const ShowMore = () => {
    const [textShown, setTextShown] = useState(false)
  return (
    <View>
      <Text style={styles.titleTxt}>ShowMore Screen</Text>
      <View style={styles.descCont}>
        <Text  style={styles.descTxt}>
        {textShown ?
            `Lorem ipsum dolor sit amet consectetur adipisicing elit. Ea, atque. Ad a officia unde libero quasi, odit dolor nesciunt ut, repellendus laboriosam doloremque debitis minus illo, expedita perferendis dolore autem!`
         : ''}
         </Text>
       
      </View>
      <TouchableOpacity style={styles.btn}
        onPress={()=>{setTextShown(!textShown)}}
      >
            {/* {textShown ? 
            <View>
                <Text style={styles.btnText}>show more</Text> 
                <Icon name="up" size={20} color='black' />
            </View>
                       : 
            <View>
                <Text style={styles.btnText}>show less</Text> 
                <Icon name="down" size={20} color='black' />
            </View>
            
            } */}
      </TouchableOpacity>

    </View>
  )
}

export default ShowMore

const styles = StyleSheet.create({
    titleTxt:{
        color:'black',
        fontSize:25,
        fontWeight:'bold',
        textAlign:'center',
        marginVertical:10
    },
    descTxt:{
        color:'black',
        marginHorizontal:10,
        marginVertical:5

    },
    btnText:{
        color:'black',

    },
    btn:{
        // justifyContent:'center'
        alignItems:'center',
        padding:15,
        backgroundColor:'cyan',
        marginHorizontal:130,
        marginVertical:5,
        borderRadius:10,
        borderWidth:0.5,

    }

    
})