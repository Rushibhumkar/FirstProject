import { StyleSheet, Text, View, ScrollView, Image, TouchableOpacity } from 'react-native'
import React, { useEffect, useState } from 'react'
import StatusBarScreen from '../allComponents/StatusBarScreen';
import { useDispatch, useSelector } from 'react-redux';
import { addToCart, removeFromCart } from './reduxSecond/action';

const Product = (props) => {
    const item = props.item;
    const dispatch = useDispatch();

    const cartItems = useSelector((state) => state.reducer)
    const [isAdded, setIsAdded] = useState(false)

    const handleAddToCart = (item) => {
        // console.log(item)
        dispatch(addToCart(item))
    }
    const handleRemoveFromCart = (item) => {
        // console.warn(item)
        dispatch(removeFromCart(item.name))
    }

    useEffect(() => {
        let result = cartItems.filter((element) => {
            return element.name == item.name;
        })
        if (result.length) {
            setIsAdded(true)
        } else {
            setIsAdded(false)
        }
    }, [cartItems])

    return (
        <View>
            <StatusBarScreen />
            <View style={styles.innerCont}>
                <View style={{ paddingLeft: 20, }}>
                    <Text style={[styles.txtStyle, styles.nameTxt]}>Name : {item.name}</Text>
                    <Text style={[styles.txtStyle, styles.pricetxt]}>Price : &#8377;{item.price}</Text>
                    <Text style={[styles.txtStyle, styles.colorTxt]}>Color : {item.color}</Text>
                </View>
                <Image style={styles.imgStyle} source={{ uri: item.image }} />
                {
                    isAdded ?
                        <TouchableOpacity style={[styles.addToCartStyle, { marginRight: 8 }]} onPress={() => handleRemoveFromCart(item)}>
                            <Text style={[styles.txtStyle, styles.addToCartTxt]}>Remove From Cart</Text>
                        </TouchableOpacity>
                        :
                        <TouchableOpacity style={styles.addToCartStyle} onPress={() => handleAddToCart(item)}>
                            <Text style={[styles.txtStyle, styles.addToCartTxt]}>Add To Cart</Text>
                        </TouchableOpacity>
                }
            </View>
        </View >
    )
}

export default Product

const styles = StyleSheet.create({
    txtStyle: {
        color: "#0A1339",
        lineHeight: 24,
    },
    addToCartStyle: {
        backgroundColor: "#5D5FEF",
        borderRadius: 10,
        paddingHorizontal: 8,
        paddingVertical: 6,
        alignSelf: 'center'

    },
    addToCartTxt: {
        color: "white",
        alignSelf: 'center'
    },
    pricetxt: {
        fontSize: 16
    },
    colorTxt: {
        fontSize: 16
    },
    imgStyle: {
        padding: 20,
        backgroundColor: '#BCBDC0',
        borderRadius: 8,
        // borderColor: 'grey',
        // borderWidth: 0.8,
        width: 200,
        height: undefined,
        aspectRatio: 1,
        margin: 20,
        alignSelf: 'center'
    },
    // outerCont: {
    //     backgroundColor: "#fff"
    // },
    innerCont: {
        marginHorizontal: 20,
        marginVertical: 10,
        borderBottomColor: 'grey',
        borderBottomWidth: 0.5,
        paddingBottom: 10,
    },
    nameTxt: {
        fontSize: 18,
        fontWeight: 'bold'
    }
})