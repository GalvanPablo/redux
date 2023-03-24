import { StyleSheet, Text, View } from 'react-native'

import React from 'react'

const DetalleProducto = () => {
    return (
        <View style={styles.screen}>
            <Text>DetalleProducto</Text>
        </View>
    )
}

export default DetalleProducto

const styles = StyleSheet.create({
    screen: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
    },
})