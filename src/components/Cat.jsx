import { Pressable, StyleSheet, Text, View } from 'react-native'

import React from 'react'

const Cat = ({item, onPress}) => {
    return (
        <Pressable onPress={onPress} style={[styles.container, {backgroundColor: item.color}]}>
            <Text style={styles.text}>{item.title}</Text>
        </Pressable>
    )
}

export default Cat

const styles = StyleSheet.create({
    container: {
        width: 150,
        height: 150,
        borderRadius: 10,
        justifyContent: 'center',
        alignItems: 'center',
        margin: 10
    },
})