import React, { useEffect, useState } from 'react';
import { PermissionsAndroid, Platform, Text, StyleSheet } from 'react-native';
import Geolocation from '@react-native-community/geolocation';
import { TouchableOpacity, View } from 'react-native';

const Location = () => {
    const [latitude, setLatitude] = useState(null);
    const [longitude, setLongitude] = useState(null);

    useEffect(() => {
        const requestLocationPermission = async () => {
            if (Platform.OS === 'android') {
                try {
                    const granted = await PermissionsAndroid.request(
                        PermissionsAndroid.PERMISSIONS.ACCESS_FINE_LOCATION,
                        {
                            title: 'Location Permission Required',
                            message:
                                'This app needs access to your location to know where you are.',
                            buttonNeutral: 'Ask Me Later',
                            buttonNegative: 'Cancel',
                            buttonPositive: 'OK',
                        },
                    );
                    if (granted === PermissionsAndroid.RESULTS.GRANTED) {
                        Geolocation.getCurrentPosition(
                            position => {
                                setLatitude(position.coords.latitude);
                                setLongitude(position.coords.longitude);
                            },
                            error => {
                                console.error(error);
                            },
                            {
                                enableHighAccuracy: false,
                                timeout: 20000,
                                maximumAge: 1000,
                            },
                        );
                    } else {
                        console.log('Location permission denied');
                    }
                } catch (err) {
                    console.warn(err);
                }
            } else {
                Geolocation.getCurrentPosition(
                    position => {
                        setLatitude(position.coords.latitude);
                        setLongitude(position.coords.longitude);
                    },
                    error => {
                        console.error(error);
                    },
                    {
                        enableHighAccuracy: true,
                        timeout: 20000,
                        maximumAge: 1000,
                    },
                );
            }
        };
        requestLocationPermission();
    }, []);

    return (
        <>
            {latitude && (
                <View>
                    <Text style={styles.text}>
                        Latitude: {latitude}, Longitude: {longitude}
                    </Text>
                    <TouchableOpacity
                        onPress={() => Linking.openURL(`https://www.google.com/maps/search/?api=1&query=latitude${latitude}${lognitude}`)}
                    >
                        <Text>Google maps link</Text>
                    </TouchableOpacity>
                </View>
            )}

        </>
    );
};

export default Location;
const styles = StyleSheet.create({
    text: {
        color: 'black'
    }
})
