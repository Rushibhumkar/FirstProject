import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { getUserList } from './reduxSecond/action'

const UserList = () => {

    const dispatch = useDispatch();
    const userList = useSelector(state => state.reducer)
    useEffect(() => {
        dispatch(getUserList())
    }, [])


    return (
        <View>
            <Text>UserList</Text>
            {
                userList.length ?
                    userList.map((item) => (
                        <Text style={{ fontSize: 20 }}>{item.firstName}</Text>
                    ))
                    : null
            }
        </View>
    )
}

export default UserList

const styles = StyleSheet.create({})