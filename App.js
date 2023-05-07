import {StyleSheet, Text, View, PermissionsAndroid} from 'react-native';
import React, {useEffect} from 'react';
import MainFile from './src/MainFile';
import {Provider} from 'react-redux';
import DemoApp from './src/redux/DemoApp';
import {Store} from './src/redux/Store';
import CountDown from './src/compontnts/CountDown';
import ColorGenerator from './src/compontnts/ColorGenerator';
import FetchApi from './src/compontnts/FetchApi';
import Home from './src/compontnts/Home';
import ReduxMainFile from './src/compontnts/reduxmain/ReduxMainFile';

const App = () => {
  // useEffect(() => {
  //   const requestCameraPermission = async () => {
  //     try {
  //       const granted = await PermissionsAndroid.request(
  //         PermissionsAndroid.PERMISSIONS.ACCESS_FINE_LOCATION,
  //         {
  //           title: 'Cool Photo App Camera Permission',
  //           message:
  //             'Cool Photo App needs access to your camera ' +
  //             'so you can take awesome pictures.',
  //           buttonNeutral: 'Ask Me Later',
  //           buttonNegative: 'Cancel',
  //           buttonPositive: 'OK',
  //         },
  //       );
  //       if (granted === PermissionsAndroid.RESULTS.GRANTED) {
  //         console.log('You can use the camera');
  //       } else {
  //         console.log('Camera permission denied');
  //       }
  //     } catch (err) {
  //       console.warn(err);
  //     }
  //   };
  //   requestCameraPermission();
  // }, []);

  return (
    <View style={{flex: 1}}>
      {/* <Text style={{color: 'red'}}>App</Text> */}
      {/* <MainFile /> */}
      {/* <DatePicker /> */}
      <ReduxMainFile />
    </View>
    // <Provider store={Store}>
    //   <DemoApp />
    // </Provider>
  );
};

export default App;

const styles = StyleSheet.create({});
