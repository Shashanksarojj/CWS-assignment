import { StyleSheet, Text, View, TouchableOpacity } from 'react-native'
import React from 'react'
import Icon from 'react-native-vector-icons/FontAwesome';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons'

// Custom Header Component
const CustomHeader = ({ title, onPressBack, onPressFilter, invoice }) => {
    return (
        <View style={styles.header}>
            <TouchableOpacity
                style={styles.backButton}
                onPress={onPressBack}
            >
                <MaterialIcons
                    name="keyboard-backspace"
                    size={26}
                    color={"white"}
                />
            </TouchableOpacity>

            <Text style={styles.headingText}>{title}</Text>

            <TouchableOpacity
                style={styles.filterButton}
                onPress={onPressFilter}
            >
                {invoice &&
                    <Icon
                        name="filter"
                        size={26}
                        color={"white"}
                    />
                }
            </TouchableOpacity>
        </View>
    );
}



export default CustomHeader

const styles = StyleSheet.create({
    header: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        height: 60,
        alignItems: "center",
        backgroundColor: "#ebf2fc",
        paddingHorizontal: 10,
        marginTop: 5
    },
    backButton: {
        backgroundColor: "#00af50",
        padding: 3,
        borderRadius: 5,
    },
    filterButton: {
        backgroundColor: "orange",
        padding: 3,
        borderRadius: 5,
    },
    headingText: {
        fontSize: 20,
        fontWeight: "bold",
    }
})
