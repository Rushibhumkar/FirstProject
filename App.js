import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import MainFile from './src/MainFile';

const App = () => {
  return (
    <View style={{flex: 1}}>
      {/* <Text style={{color: 'red'}}>App</Text> */}
      <MainFile />
    </View>
  );
};

export default App;

const styles = StyleSheet.create({});
