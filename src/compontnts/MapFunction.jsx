import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import drivers from '../../data/DataFile'

const MapFunction = () => {


  return (
    <View>
      <Text style={{color:'black'}} >MapFunction</Text>
      {
        drivers.map((item)=>{
          return  <Text style={{color:'black'}}>{item.name}</Text>
        })
      }
    </View>
  )
}

export default MapFunction

const styles = StyleSheet.create({})