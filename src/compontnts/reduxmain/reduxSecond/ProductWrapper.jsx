import { StyleSheet, Text, View, Image, ScrollView, TouchableOpacity } from 'react-native'
import React from 'react'
import Product from '../Product'
import Header from '../Header'

const ProductWrapper = () => {


    const Products = [
        {
            name: 'Samsung Mobile',
            color: 'white',
            price: 30000,
            image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRPpdhqTcMmmBhWSTY01ytIan8y4JKVR3C6YQ&usqp=CAU'
        },
        {
            name: 'Nokia Mobile',
            color: 'black',
            price: 18000,
            image: 'https://vlebazaar.in/image/cache/catalog/B07HGLBZ9J/OPPO-K3-Aurora-Blue-8GB-RAM-AMOLED-Display-128GB-Storage-3765mAH-Battery-B07HGLBZ9J-1100x1100.jpg'
        },
        {
            name: 'Apple Mobile',
            color: 'green',
            price: 50000,
            image: 'https://vlebazaar.in/image/cache/catalog/B07HGLBZ9J/OPPO-K3-Aurora-Blue-8GB-RAM-AMOLED-Display-128GB-Storage-3765mAH-Battery-B07HGLBZ9J-1100x1100.jpg'
        }
    ]

    return (

        <View style={styles.outerCont}>
            <Header />
            <ScrollView style={{ flex: 1 }}>
                {
                    Products.map((item) => {
                        return (

                            <Product item={item} key={item.name} />
                        )
                    })
                }
            </ScrollView>
        </View>
    )
}

export default ProductWrapper;

const styles = StyleSheet.create({
    outerCont: {
        flex: 1,
        backgroundColor: "#fff",
        // marginBottom: 40,
        // paddingBottom: 10,
    },
})