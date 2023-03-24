import { Button, StyleSheet, Text, View } from 'react-native'

import React from 'react'

const Categoria = ({ navigation }) => {
    return (
        <View style={styles.screen}>
            <Text>Categoria</Text>
            <Button title="X Producto" onPress={() => navigation.navigate('Producto')} />
        </View>
    )
}

export default Categoria

const styles = StyleSheet.create({
    screen: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
    },
})