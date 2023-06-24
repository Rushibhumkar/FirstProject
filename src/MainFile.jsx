import { ScrollView, StyleSheet, Text, View } from 'react-native';
import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import ColorGenerator from './compontnts/allComponents/ColorGenerator';
import CountDown from './compontnts/allComponents/CountDown';
import HookEffect from './compontnts/allComponents/HookEffect';
import HorScroll from './compontnts/allComponents/HorScroll';
import Linking from './compontnts/allComponents/Linking';
import Login from './compontnts/allComponents/Login';
import MapFunction from './compontnts/allComponents/MapFunction';
import AdvMapFun from './compontnts/allComponents/AdvMapFun';
import NetflixCard from './compontnts/allComponents/NetflixCard';
import SignUp from './compontnts/allComponents/SignUp';
import TopTabNavi from './compontnts/allComponents/TopTabNavi';
import SimpleForm from './compontnts/allComponents/SimpleForm';
import SimplePage from './compontnts/allComponents/SimplePage';
import DrawerNav from './compontnts/allComponents/DrawerNav';
import ShowMore from './compontnts/allComponents/ShowMore';
import PopUp from './compontnts/allComponents/PopUp'
import Location from './compontnts/allComponents/Location';
import SendLocation from './compontnts/allComponents/SendLocation';
import FetchApi from './compontnts/allComponents/FetchApi';
import RohitPackage from './rohitsPackage/RohitPackage';
import TrackingService from './trackingservice/TrackingService';
import OwnPackage from './mypackage/OwnPackage';
import ProgressLine from './mypackage/ProgressLine';
import LoginPage from './perfectplateapp/LoginPage';
import CombineFile from './perfectplateapp/CombineFile';
import Home from './compontnts/allComponents/Home';
import AndroidPermissions from './compontnts/allComponents/AndroidPermissions';
import ReduxMainFile from './compontnts/reduxmain/ReduxMainFile';


const MainFile = () => {
    // const Tab = createBottomTabNavigator();

    const Stack = createNativeStackNavigator();

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
            <ReduxMainFile />
            {/* <LoginPage /> */}
        </View>

        // <NavigationContainer>
        //     <CombineFile />
        // </NavigationContainer>

        // <NavigationContainer>
        //     <Stack.Navigator
        //         screenOptions={{
        //             headerStyle: { backgroundColor: '#5D5FEF' },
        //             headerTitleStyle: { color: '#fff' },
        //             headerTitleAlign: 'center',
        //         }}
        //     // initialRouteName="AndroidPermissions"
        //     >
        //         <Stack.Screen name='ReduxMainFile' component={ReduxMainFile} />
        //         {/* <Stack.Screen name='Home' component={Home} /> */}
        //         {/* <Stack.Screen name="PopUp" component={PopUp} /> */}
        //         {/* <Stack.Screen name="Payment" component={Payment} />
        //     <Stack.Screen name="PaymentMethods" component={PaymentSecond} />
        //     <Stack.Screen name="NetBanking" component={NetBanking} />
        //     <Stack.Screen name="UPI" component={UPI} />
        //     <Stack.Screen name="CrDbCard" component={CrDbCard} />
        //     <Stack.Screen name="PayOnService" component={PayOnService} />
        //     <Stack.Screen name="ConfirmPayment" component={ConfirmPayment} /> */}
        //     </Stack.Navigator>
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
