import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
import HorScroll from './compontnts/HorScroll'
import MapFunction from './compontnts/MapFunction'
import NetflixCard from './compontnts/NetflixCard'

const TopTabNavi = () => {

    const Tab = createMaterialTopTabNavigator();

  return (
    <Tab.Navigator>
      <Tab.Screen name="HorScroll" component={HorScroll} />
      {/* <Tab.Screen name="MapFunction" component={MapFunction} /> */}
      <Tab.Screen name="NetflixCard" component={NetflixCard} />
    </Tab.Navigator>

  )
}

export default TopTabNavi

const styles = StyleSheet.create({})