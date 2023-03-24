import React from 'react'
import { FlatList, StyleSheet, View } from 'react-native'
import { Cat } from '../components'

import { CATEGORIAS } from '../data/categorias'


const ListadoCategorias = ({ navigation }) => {
    return (
        <View style={styles.screen}>
            <FlatList
                data={CATEGORIAS}
                renderItem={({ item }) => <Cat item={item} onPress={() => navigation.navigate('Categoria')} />}
                keyExtractor={item => item.id}
                numColumns={2}
            />
            
            {/* <Button title="X Categoría" onPress={() => navigation.navigate('Categoria')} /> */}
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