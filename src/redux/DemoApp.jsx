import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { fetchProduct } from './ProductSlice';

const DemoApp = () => {
    const dispatch = useDispatch();
    const products = useSelector(state => state);
    console.log(JSON.stringify(products));
    return (
        <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center', backgroundColor: '#fff' }}>
            <Text style={{ color: 'black', padding: 20, borderWidth: 0.5, borderRadius: 10, fontSize: 18 }} onPress={() => { dispatch(fetchProduct()) }} >Call Api</Text>
        </View>
    )
}

export default DemoApp

const styles = StyleSheet.create({})