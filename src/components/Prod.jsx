import { Pressable, StyleSheet, Text, View } from 'react-native'

import React from 'react'

const Prod = ({item, onPress}) => {
    return (
        <Pressable onPress={onPress} style={styles.container}>
            <Text style={styles.title}>{item.titulo}</Text>
            <Text style={styles.price}>${item.precio}</Text>
        </Pressable>
    )
}

export default Prod

const styles = StyleSheet.create({
    container: {
        width: '100%',
        flexDirection: 'row',
        justifyContent: 'space-between',
        backgroundColor: 'lightgray',
        padding: 15,
        borderRadius: 10,
        marginVertical: 5,
    },
    title: {
        fontSize: 18,
        fontWeight: 'bold',
    },
    price: {
        fontSize: 16,
        fontWeight: 'regular',
    },
})