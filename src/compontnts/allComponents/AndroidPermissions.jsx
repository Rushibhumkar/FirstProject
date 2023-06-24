import { StyleSheet, Text, View, StatusBar, PermissionsAndroid, Button } from 'react-native'
import React, { useEffect } from 'react'


const AndroidPermissions = () => {
    useEffect(() => {
        const requestPermissions = async () => {
            try {
                const granted = await PermissionsAndroid.request(
                    PermissionsAndroid.PERMISSIONS.ACCESS_MEDIA_LOCATION,
                );
                if (granted === PermissionsAndroid.RESULTS.GRANTED) {
                    console.log('You can use the permissions')
                } else {
                    console.log('Permission is denied')
                }
            } catch (err) {
                console.log(err)
            }
        }
        requestPermissions()
    }, [])
    return (
        <View style={styles.container}>
            <Text style={styles.item}>Try permissions</Text>
            {/* <Button title="request permissions" onPress={requestPermissions} /> */}
        </View>
    )
}

export default AndroidPermissions

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        // paddingTop: StatusBar.currentHeight,
        paddingTop: 30,
        backgroundColor: '#ecf0f1',
        padding: 8,
    },
    item: {
        color: '#000',
        margin: 24,
        fontSize: 18,
        fontWeight: 'bold',
        textAlign: 'center',
    },
});
