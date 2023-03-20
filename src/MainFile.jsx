import { ScrollView, StyleSheet, Text, View } from 'react-native';
import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import ColorGenerator from './compontnts/ColorGenerator';
import CountDown from './compontnts/CountDown';
import HookEffect from './compontnts/HookEffect';
import HorScroll from './compontnts/HorScroll';
import Linking from './compontnts/Linking';
import Login from './compontnts/Login';
import MapFunction from './compontnts/MapFunction';
import AdvMapFun from './compontnts/AdvMapFun';
import NetflixCard from './compontnts/NetflixCard';
import SignUp from './compontnts/SignUp';
import TopTabNavi from './compontnts/TopTabNavi';
import SimpleForm from './compontnts/SimpleForm';
import SimplePage from './compontnts/SimplePage';
import DrawerNav from './compontnts/DrawerNav';
import ShowMore from './compontnts/ShowMore';
import PopUp from './compontnts/PopUp'
import Location from './compontnts/Location';
import SendLocation from './compontnts/SendLocation';
import FetchApi from './compontnts/FetchApi';
import RohitPackage from './rohitsPackage/RohitPackage';
import TrackingService from './trackingservice/TrackingService';
import OwnPackage from './mypackage/OwnPackage';
import ProgressLine from './mypackage/ProgressLine';

const MainFile = () => {
    // const Tab = createBottomTabNavigator();

    // const Stack = createNativeStackNavigator();

    // const Drawer = createDrawerNavigator();

    return (
        <View style={{ backgroundColor: '#fff', flex: 1 }}>
            {/* <Text style={styles.txt}>MainFile</Text> */}
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
            {/* <RohitPackage /> */}
            {/* <TrackingService /> */}
            {/* <OwnPackage /> */}
            <ProgressLine />
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

export default MainFile;

const styles = StyleSheet.create({
    txt: {
        color: 'red',
        textAlign: 'center',
        fontWeight: 'bold',
        fontSize: 24,
    },
});
