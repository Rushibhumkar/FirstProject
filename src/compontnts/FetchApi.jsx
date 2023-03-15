import { StyleSheet, SafeAreaView, Text, View } from 'react-native'
import React, { useEffect, useState } from 'react'

const FetchApi = () => {

    useEffect(() => {
        getListStudent();
    }, [])

    const getListStudent = () => {
        fetch("", {
            method: 'GET',
            headers: {
                "Content-Type": "application/json"
            }
        }).then(res => {
            return res.json()
        }).then(res => {
            var data = res.list_student
        }).catch(err => {
            console.log(err)
        })
    }

    return (
        <SafeAreaView>
            <View style={styles.container}>
                <Text style={{ color: "black" }}>Hello ReactNative</Text>
            </View>
        </SafeAreaView>
    )
}

export default FetchApi

const styles = StyleSheet.create({})