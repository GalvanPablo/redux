import { Button, StyleSheet, Text, View } from 'react-native'

import React from 'react'

const ListadoCategorias = ({ navigation }) => {
    return (
        <View style={styles.screen}>
            <Text>ListadoCategorias</Text>
            <Button title="X Categoría" onPress={() => navigation.navigate('Categoria')} />
        </View>
    )
}

export default ListadoCategorias

const styles = StyleSheet.create({
    screen: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
    },
})