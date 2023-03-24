import { StyleSheet, Text, View } from 'react-native'

import React from 'react'

const DetalleProducto = () => {

    return (
        <View style={styles.screen}>
            <Text style={styles.title}>Titulo del producto</Text>
            <Text style={styles.price}>$1000</Text>
        </View>
    )
}

export default DetalleProducto

const styles = StyleSheet.create({
    screen: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        gap: 10,
    },
    title: {
        fontSize: 24,
        fontWeight: 'bold',
    },
    price: {
        fontSize: 20,
        fontWeight: 'regular',
    },
})