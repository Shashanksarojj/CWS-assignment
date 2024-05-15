import { StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native'
import React from 'react'
import MaterialIcons from 'react-native-vector-icons/MaterialIcons'
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';

const CardList = ({ setInvoice }) => {


    return (
        <View style={styles.background}>
            {/* <Text>CardList</Text> */}
            <View style={styles.topBar}>
                <View style={styles.textInputWrapper}>
                    <MaterialIcons name={"search"} size={25} />
                    <TextInput width="100%"
                        placeholder='Search...'
                    />
                </View>
                <TouchableOpacity onPress={() => { setInvoice(() => false) }} style={styles.button}><Text style={styles.buttonText}>New Invoice</Text></TouchableOpacity>
            </View>


            <View style={styles.centralBox}>
                <View style={styles.innerHeader}>
                    <Text style={styles.innerHeading}>Client</Text>
                    <Text style={styles.innerHeading} >Amount</Text>
                </View>

                <View style={styles.clientList}>
                    <FontAwesome name="user-circle" size={40} color={"white"} />
                    <View >
                        <Text style={{ fontSize: 12 }}>Client Name</Text>
                        <Text style={{ fontSize: 12 }}>Client@Email.com</Text>
                    </View>
                    <View style={{ alignItems: "center", justifyContent: "center" }}>
                        <Text style={styles.textBox}>13-05-2024</Text>
                        <Text style={styles.textBox}>13-05-2024</Text>
                    </View>
                    <View style={{ alignItems: "center", justifyContent: "center" }}>
                        <Text>$16,893.00</Text>
                    </View>
                    <TouchableOpacity style={{ alignItems: "center", justifyContent: "center" }}>
                        <MaterialCommunityIcons name="dots-vertical" size={25} />
                    </TouchableOpacity>
                </View>

            </View>



            <View style={styles.bottomBox}>
                <TouchableOpacity style={[styles.bottomButton, { backgroundColor: 'orange' }]}>
                    <MaterialCommunityIcons name="import" size={25} color={"white"} />
                    <Text style={{ color: 'white' }}>Export</Text>
                </TouchableOpacity>
                <TouchableOpacity style={[styles.bottomButton, { backgroundColor: 'green' }]}>
                    <MaterialCommunityIcons name="plus" size={25} color={"white"} />
                    <Text style={{ color: 'white' }}>Invoice</Text>
                </TouchableOpacity>
            </View>
        </View >
    )
}

export default CardList

const styles = StyleSheet.create({
    background: {
        flex: 1,
        // borderWidth: 1
    }, topBar: {
        height: 40,
        // borderWidth: 1,
        flexDirection: 'row',
        justifyContent: 'space-around'
    }, textInputWrapper: {
        borderWidth: 1,
        width: '55%',
        justifyContent: "center",
        alignItems: 'center',
        borderRadius: 10,
        flexDirection: "row",
        paddingHorizontal: 25,
        backgroundColor: "white"
    },
    textInput: {
        paddingHorizontal: 10,
    },
    button: {
        // borderWidth: 1,
        width: '35%',
        justifyContent: "center",
        alignItems: 'center',
        borderRadius: 10,
        backgroundColor: "green"
    },
    buttonText: {
        color: "white",
    },
    centralBox: {
        // borderWidth: 1,
        marginTop: 10,
        height: "75%",
        borderRadius: 10,
        backgroundColor: "white",
        overflow: "hidden"

    },
    innerHeader: {
        flexDirection: "row",
        justifyContent: 'space-between',
        backgroundColor: "green",
        height: 30,
        paddingHorizontal: 5
    },
    innerHeading: {
        fontSize: 20,
        fontWeight: "bold",
        color: "white",
    },
    clientList: {
        height: 50,
        paddingTop: 5,
        paddingHorizontal: 5,
        borderBottomWidth: 1,
        flexDirection: "row",
        justifyContent: "space-between",
        backgroundColor: "pink",
    },
    textBox: {
        // borderWidth: 1,
        color: "white",
        fontSize: 10,
        padding: 3,
        borderRadius: 10,
        backgroundColor: "#a86832",
    },



    bottomBox: {
        // zIndex: 1,
        // position: 'absolute',
        // bottom: 10,
        // height: "10%",
        // borderWidth: 1,
        marginTop: 25,
        flexDirection: 'row',
        justifyContent: "space-between"
    },
    bottomButton: {
        alignItems: "center",
        justifyContent: "space-around",
        flexDirection: 'row',
        // borderWidth: 1,
        width: 110,
        height: 40,
        borderRadius: 10,
        // justifyContent
        // color: "white",
    }
})