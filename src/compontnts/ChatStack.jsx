import { View, Text, FlatList } from 'react-native';
import Icon from "react-native-vector-icons/Feather";
import { useDispatch, useSelector } from "react-redux";
import React, { useState, useEffect } from 'react';
import WebView from 'react-native-webview';
import { addItem, deleteItem } from '../redux/actions';
import Cart from '../screens/serviceScreens/Cart';




const ChatStack = () => {
  const dispatch = useDispatch()

  const [addedItems, setAddedItems] = useState([])

  const items = useSelector(state => { return state })

  useEffect(() => {
    setAddedItems(items)
    console.log(addedItems)
  }, [items])


  return (
    // <WebView
    //   source={{ uri: 'https://github.com' }}
    //   allowsBackForwardNavigationGestures="true"
    //   bounces="true"

    // />
    <View style={{ flex: 1 }}>
      <Cart />
    </View>
  );
};

export default ChatStack;
