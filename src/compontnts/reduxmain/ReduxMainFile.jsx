import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import ProductWrapper from './reduxSecond/ProductWrapper';
import UserList from './UserList';

const Stack = createNativeStackNavigator();


const ReduxMainFile = () => {
    return (
        <NavigationContainer>
            <Stack.Navigator
                screenOptions={{
                    // headerStyle: { backgroundColor: '#5D5FEF' },
                    // headerTitleStyle: { color: '#fff' },
                    // headerTitleAlign: 'center',
                    headerShown: false

                }}
                initialRouteName="productWrapper"
            >
                <Stack.Screen name='ProductWrapper' component={ProductWrapper} />
                <Stack.Screen name='UserList' component={UserList} />
            </Stack.Navigator>
        </NavigationContainer>
    )
}

export default ReduxMainFile

const styles = StyleSheet.create({})