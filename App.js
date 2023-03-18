import {ScrollView, StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';

import ColorGenerator from './src/compontnts/ColorGenerator';
import CountDown from './src/compontnts/CountDown';
import HookEffect from './src/compontnts/HookEffect';
import HorScroll from './src/compontnts/HorScroll';
import Linking from './src/compontnts/Linking';
import Login from './src/compontnts/Login';
import MapFunction from './src/compontnts/MapFunction';
import AdvMapFun from './src/compontnts/AdvMapFun';
import NetflixCard from './src/compontnts/NetflixCard';
import SignUp from './src/compontnts/SignUp';
import TopTabNavi from './src/TopTabNavi';
import SimpleForm from './src/compontnts/SimpleForm';
import SimplePage from './src/compontnts/SimplePage';
import DrawerNav from './src/compontnts/DrawerNav';
import ShowMore from './src/compontnts/ShowMore';
import PopUp from './src/compontnts/PopUp';
import Location from './src/compontnts/Location';
import SendLocation from './src/compontnts/SendLocation';
import FetchApi from './src/compontnts/FetchApi';
import TrackingService from './src/trackingservice/TrackingService';

const App = () => {
  // const Tab = createBottomTabNavigator();

  // const Stack = createNativeStackNavigator();

  // const Drawer = createDrawerNavigator();

  return (
    <View style={{backgroundColor: '#fff', flex: 1}}>
      <Text style={styles.txt}>App File</Text>
      {/* <ColorGenerator /> */}
      {/* <CountDown /> */}
      {/* <HookEffect /> */}
      {/* <HorScroll /> */}
      {/* <Linking /> */}
      {/* <Login /> */}
      {/* <MapFunction /> */}
      {/* <AdvMapFun /> */}
      {/* <NetflixCard /> */}
      {/* <SignUp /> */}
      {/* <SimpleForm /> */}
      {/* <SimplePage /> */}
      {/* <DrawerNav /> */}
      {/* <ShowMore /> */}
      {/* <Location /> */}
      {/* <PopUp /> */}
      {/* <SendLocation /> */}
      {/* <FetchApi /> */}
      <TrackingService />
    </View>

    // <NavigationContainer>
    //   <DrawerNav/>
    // </NavigationContainer>

    // <NavigationContainer>
    //   <Stack.Navigator
    //     screenOptions={{
    //       headerStyle: {backgroundColor: '#5D5FEF'},
    //       headerTitleStyle: {color: '#fff'},
    //       headerTitleAlign: 'center',
    //     }}
    //     initialRouteName="Payment">
    //     {/* <Stack.Screen name="PopUp" component={PopUp} /> */}
    //     <Stack.Screen name="Payment" component={Payment} />
    //     <Stack.Screen name="PaymentMethods" component={PaymentSecond} />
    //     <Stack.Screen name="NetBanking" component={NetBanking} />
    //     <Stack.Screen name="UPI" component={UPI} />
    //     <Stack.Screen name="CrDbCard" component={CrDbCard} />
    //     <Stack.Screen name="PayOnService" component={PayOnService} />
    //     <Stack.Screen name="ConfirmPayment" component={ConfirmPayment} />
    //   </Stack.Navigator>
    // </NavigationContainer>
  );
};

export default App;

const styles = StyleSheet.create({
  txt: {
    color: 'red',
    textAlign: 'center',
    fontWeight: 'bold',
    fontSize: 24,
  },
});
