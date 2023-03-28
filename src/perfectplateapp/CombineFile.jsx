import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import LoginPage from './LoginPage';
import PersonalDetails from './PersonalDetails';
import HomeScreen from './HomeScreen';
import OtpScreen from './OtpScreen';

const Stack = createNativeStackNavigator();

const CombineFile = () => {
    return (
        <Stack.Navigator>
            <Stack.Screen name="LoginPage" component={LoginPage}
                options={{
                    headerShown: false,
                }}
            />
            <Stack.Screen name="PersonalDetails" component={PersonalDetails}
                options={{
                    headerShown: true,
                    headerTitleAlign: 'center',
                    headerTintColor: '#fff',
                    headerStyle: { backgroundColor: '#42A652' }
                }}
            />
            <Stack.Screen name="HomeScreen" component={HomeScreen}
                options={{
                    headerShown: false,
                }}
            />
            <Stack.Screen name="OtpScreen" component={OtpScreen}
                options={{
                    headerShown: false,
                }}
            />
        </Stack.Navigator>
    )
}

export default CombineFile

const styles = StyleSheet.create({})