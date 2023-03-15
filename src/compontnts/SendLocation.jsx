import React, { useState, useEffect } from 'react';
import { StyleSheet, View, Text, Button, PermissionsAndroid, Linking, TouchableOpacity } from 'react-native';
// Function to get permission for location
import Geolocation from 'react-native-geolocation-service'

const requestLocationPermission = async () => {
    try {
        const granted = await PermissionsAndroid.request(
            PermissionsAndroid.PERMISSIONS.ACCESS_FINE_LOCATION,
            {
                title: 'Geolocation Permission',
                message: 'Can we access your location?',
                buttonNeutral: 'Ask Me Later',
                buttonNegative: 'Cancel',
                buttonPositive: 'OK',
            },
        );
        console.log('granted', granted);
        if (granted === 'granted') {
            console.log('You can use Geolocation');
            return true;
        } else {
            console.log('You cannot use Geolocation');
            return false;
        }
    } catch (err) {
        return false;
    }
};
const App = () => {


    // state to hold location
    const [location, setLocation] = useState(false);
    // function to check permissions and get Location
    const getLocation = () => {
        const result = requestLocationPermission();
        result.then(res => {
            console.log('res is:', res);
            if (res) {
                Geolocation.getCurrentPosition(
                    position => {
                        console.log(position);
                        setLocation(position);
                    },
                    error => {
                        // See error code charts below.
                        console.log(error.code, error.message);
                        setLocation(false);
                    },
                    { enableHighAccuracy: true, timeout: 15000, maximumAge: 10000 },
                );
            }
        });
        // console.log(location);
        // console.log(location.coords.latitude);
        const mobUrl = '+917972755589';
        // const locLink = `https://www.google.com/maps/search/?api=1&query=@${location.coords.latitude},${location.coords.longitude}`
    };
    return (
        <View style={styles.container}>
            <Text style={{ color: 'black' }}>Welcome!</Text>
            <View
                style={{ marginTop: 10, padding: 10, borderRadius: 10, width: '40%' }}>
                <Button title="Get Location" onPress={getLocation} />
            </View>
            <Text style={{ color: 'black' }}>Latitude: {location ? location.coords.latitude : null}</Text>
            <Text style={{ color: 'black' }}>Longitude: {location ? location.coords.longitude : null}</Text>
            <View
                style={{ marginTop: 10, padding: 10, borderRadius: 10, width: '40%' }}>
                <Button title="Send Current Location"
                    onPress={() => {
                        Linking.openURL(`sms:number=${+917972755589}?body=https://www.google.com/maps/search/?api=1&query=${location.coords.latitude},${location.coords.longitude}`)
                    }}
                />
            </View>
            <View
                style={{ marginTop: 10, padding: 10, borderRadius: 10, width: '40%' }}>
                <Button title="See Location"
                    onPress={() => {
                        Linking.openURL(`https://www.google.com/maps/search/?api=1&query=${location.coords.latitude},${location.coords.longitude}`)
                    }}
                />
            </View>
        </View>
    );
};
const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center',
    },
});
export default App;