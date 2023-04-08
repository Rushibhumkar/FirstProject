import { StyleSheet, Text, View } from 'react-native'
import React, { useEffect } from 'react'
import axios from 'axios'

const ApiRequest = () => {

    // first method for api request basic with axios method
    // overview : axios.<method>{url,data object ,{Headers:...,method:...,}}.then(res=>{})
    useEffect(() => {
        // getNewProduct();
        // putData();
        Data();
    }, [])
    // first way 
    // const getData = () => {
    //     axios.get('https://fakestoreapi.com/products/categories', {
    //         headers: {
    //             'Content-Type': 'application/json',
    //             'Authorization': 'Gopal'
    //         }
    //     }).then(res => {
    //         console.log(res.data)
    //     })
    // }
    // second way
    // const getData = async () => {
    //     const res = await axios.get('https://fakestoreapi.com/products/categories')
    //     console.log(res.data)
    // }

    // end basic api request

    // second method for api request basic
    // const getNewProduct = () => {
    //     const data = {
    //         title: 'test product',
    //         price: 13.5,
    //         description: 'lorem ipsum set',
    //         image: 'https://i.pravatar.cc',
    //         category: 'electronic'
    //     }
    //     // First way
    //     // const res = await axios.post('https://fakestoreapi.com/products', data)
    //     // console.log("data", res.data)

    //     // second way
    //     axios.post('https://fakestoreapi.com/products', data).then((res) => {

    //         console.log("data", res.data)
    //     })
    // };
    // Third method for api request basic {patch,delete,get,post Data}

    // const putData = () => {
    //     const data = {
    //         title: 'New Name',
    //         price: 13.5,
    //         description: 'lorem ipsum set',
    //         image: 'https://i.pravatar.cc',
    //         category: 'electronic'
    //     }
    //     axios.delete('https://fakestoreapi.com/products/6', data,).then(res => {
    //         console.log(res.data)
    //     })
    // }

    const Data = () => {
        const data = new FormData();
        data.append('Name', 'gaurav');
        data.append('Email', 'gops@gmail.com');
        data.append('Phone', 7972755589);
        axios.get('https://fakestoreapi.com/products/6', { method: 'DELETE', data }).
            then(res => {
                console.log(res.status)
            })
    }
    return (
        <View>
            <Text>ApiRequest</Text>
        </View>
    )
}

export default ApiRequest

const styles = StyleSheet.create({})