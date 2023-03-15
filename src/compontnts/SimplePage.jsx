import { ScrollView, StyleSheet, Text, View ,TouchableOpacity} from 'react-native'
import React from 'react'

const SimplePage = () => {
  return (
    // <ScrollView>
    <View style={{flex:1}}>
        <View style={[styles.cont1]}>
            <Text style={styles.Text}>SimplePage</Text>
        </View>
        <View style={[styles.cont2]}>
            <Text style={styles.Text}>SimplePage2</Text>
        </View>
        <View style={[styles.cont3]}>
            <Text style={styles.Text}>Inner3.1</Text>
            <Text style={styles.Text}>Inner3.2</Text>
            <Text style={styles.Text}>Inner3.3</Text>
        </View>
    </View>
    // </ScrollView>
  )
}

export default SimplePage

const styles = StyleSheet.create({
    cont1:{
        backgroundColor: 'pink',

    },
    cont2:{
        backgroundColor: 'yellow',

    },
    cont3:{
        flex:1,
        backgroundColor: 'grey',
        flexDirection:'row',
        // alignItems:'center',
        justifyContent:'center'

    },
    Text:{
        color:'black',
        fontSize:24,
        fontWeight:'bold'
    },
    outCont:{
        backgroundColor:'#5ECB95'
    },
    card:{
        marginVertical:20,
        alignItems:'center',
    }
})