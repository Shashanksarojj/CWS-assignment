import { StyleSheet, Text, View } from 'react-native'
import React from 'react'

const MainPage = () => {
    return (
        <View style={styles.center}>
            <Text>MainPage</Text>
        </View>
    )
}

export default MainPage

const styles = StyleSheet.create({
    center: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',

    }
})