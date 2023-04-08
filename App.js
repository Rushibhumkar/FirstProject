import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import MainFile from './src/MainFile';
import {Provider} from 'react-redux';
import DemoApp from './src/redux/DemoApp';
import {Store} from './src/redux/Store';
import DatePicker from './src/perfectplateapp/DatePicker';
import DateTimePicker from './src/calendar/DateTimePicker';
import MyCalendar from './src/calendar/MyCalendar';
import ApiRequest from './src/apirequest/ApiRequest';
const App = () => {
  return (
    <View style={{flex: 1}}>
      {/* <Text style={{color: 'red'}}>App</Text> */}
      {/* <MainFile /> */}
      {/* <DatePicker /> */}
      <ApiRequest />
    </View>
    // <Provider store={Store}>
    //   <DemoApp />
    // </Provider>
  );
};

export default App;

const styles = StyleSheet.create({});
