import { StyleSheet, Text, View } from 'react-native'

import { Cart } from '../screens'
import { FontAwesome } from '@expo/vector-icons';
import HomeStack from './HomeStack'
import React from 'react'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'

const Tab = createBottomTabNavigator()

const TabNav = () => {
    return (
        <Tab.Navigator
            initialRouteName="Home"
            screenOptions={{
                headerShown: false,
                tabBarShowLabel: false,
                tabBarActiveTintColor: 'blue',
                tabBarInactiveTintColor: 'gray',
            }}
        >
            <Tab.Screen name="Home" component={HomeStack}
                options={{
                    tabBarIcon: ({ color, size }) => (
                        <View style={styles.item}>
                            <FontAwesome name="home" color={color} size={size} />
                            <Text style={[styles.text, {color: color}]}>Inicio</Text>
                        </View>
                    ),
                }}
            />
            <Tab.Screen name="Cart" component={Cart}
                options={{
                    tabBarIcon: ({ color, size }) => (
                        <View style={styles.item}>
                            <FontAwesome name="shopping-cart" color={color} size={size} />
                            <Text style={[styles.text, {color: color}]}>Carrito</Text>
                        </View>
                    ),
                }}
            />
        </Tab.Navigator>
    )
}

export default TabNav

const styles = StyleSheet.create({
    tabBar: {
        backgroundColor: '#fff',
        borderTopColor: 'transparent',
        height: 60,
    },
    item: {
        alignItems: 'center',
        justifyContent: 'center',
    },
    text: {
        fontSize: 10,
    },
})