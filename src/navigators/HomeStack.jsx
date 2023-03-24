import { Categoria, DetalleProducto, ListadoCategorias } from '../screens';

import React from 'react'
import { createNativeStackNavigator } from '@react-navigation/native-stack'

const Stack = createNativeStackNavigator();

const HomeStack = () => {
    return (
        <Stack.Navigator
            initialRouteName="Categorias"
        >
            <Stack.Screen name="Categorias" component={ListadoCategorias} />
            <Stack.Screen name="Categoria" component={Categoria} />
            <Stack.Screen name="Producto" component={DetalleProducto} />
        </Stack.Navigator>
    )
}

export default HomeStack