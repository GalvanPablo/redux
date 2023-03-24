import React from 'react'
import { Button, FlatList, StyleSheet, Text, View } from 'react-native'
import { Prod } from '../components'

import { PRODUCTOS } from '../data/productos'


const Categoria = ({ navigation }) => {
    return (
        <View style={styles.screen}>
            <FlatList
                data={PRODUCTOS}
                renderItem={({ item }) => <Prod item={item} onPress={() => navigation.navigate('Producto')} />}
                keyExtractor={item => item.id}
            />
        </View>
    )
}

export default Categoria

const styles = StyleSheet.create({
    screen: {
        padding: 15,
    },
})