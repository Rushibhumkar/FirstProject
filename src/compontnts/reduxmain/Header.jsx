import { StyleSheet, Text, View } from 'react-native'
import React, { useState, useEffect } from 'react'
import { useSelector } from 'react-redux'
import CartIcon from 'react-native-vector-icons/AntDesign'

const Header = () => {
    const cartData = useSelector((state) => state.reducer)
    const [cartItems, setCartItems] = useState(0)
    // console.log(cartData)

    useEffect(() => {
        setCartItems(cartData.length)
    }, [cartData])
    // console.log(cartData.length)

    return (
        <View style={styles.cartIconCont}>
            {/* <CartIcon name="shoppingcart" size={28} color={'#fff'} style={styles.cartIconStyle} /> */}
            <Text style={{ color: 'red', textAlign: 'right', fontSize: 24, paddingRight: 12 }}>{cartItems}</Text>
        </View>
    )
}

export default Header

const styles = StyleSheet.create({
    cartIconCont: {
        backgroundColor: "#5D5FEF",
        height: 60,
        justifyContent: 'center',
        // alignItems: 'center',
    },
    cartIconStyle: {
        textAlign: 'right',
        marginRight: 20
    }
})