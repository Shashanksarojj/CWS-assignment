import React, { useState } from 'react';
import { StyleSheet, View, Text, Button, TouchableOpacity, TextInput } from 'react-native';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';

const SavePage = ({ setSavePage }) => {



    return (
        <View style={styles.background}>
            <View style={styles.clientList}>
                <FontAwesome name="user-circle" size={40} color={"black"} />
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


            <View style={styles.addBox}>
                <TouchableOpacity style={styles.addButton}>
                    <Text style={{ color: "white", fontSize: 15 }}>Add</Text>
                </TouchableOpacity>
            </View>

            <View style={styles.totalBox}>
                <View style={styles.listBox}>
                    <Text style={styles.text}>Sub Total :</Text>
                    <Text style={styles.text}>$ 00.00</Text>
                </View>
                <View style={styles.listBox}>
                    <Text style={styles.text}>Discount :</Text>
                    <Text style={styles.text}>$ 00.00</Text>
                </View>
                <View style={styles.listBox}>
                    <Text style={styles.text}>Total :</Text>
                    <Text style={styles.text}>$ 00.00</Text>
                </View>

                <View style={{ marginVertical: 50, marginHorizontal: 30, backgroundColor: 'orange', overflow: 'hidden', borderRadius: 10 }}>
                    <TouchableOpacity style={{ borderWidth: 0, padding: 10, justifyContent: 'center', alignItems: 'center', }}>
                        <Text style={[styles.text, { color: 'white' }]}>Add Note & Terms</Text>
                    </TouchableOpacity>
                </View>

            </View>
            <View style={{ justifyContent: 'center', alignItems: 'center', marginTop: 20 }}>
                <Text style={styles.text}>Company : Company Name</Text>
                <Text style={styles.text}>Phone : 8000835503</Text>
            </View>







            <View style={styles.buttonBox}>
                <TouchableOpacity
                    // title="    "
                    onPress={() => { setSavePage(true) }}
                    style={[styles.bottomButton, { backgroundColor: "green" }]}
                ><Text style={{ color: 'white' }}>Save</Text></TouchableOpacity>

                <TouchableOpacity
                    title="Cancel"
                    onPress={() => { setSavePage(false) }}
                    style={[styles.bottomButton, { backgroundColor: 'black' }]}
                ><Text style={{ color: 'white' }}>Cancel</Text></TouchableOpacity>
            </View>
        </View>
    );
};

export default SavePage;

const styles = StyleSheet.create({
    background: {
        flex: 1,
        margin: 5,
        marginBottom: 65,
        borderRadius: 10,
        backgroundColor: 'white',
        padding: 5
    },
    clientList: {
        height: 50,
        paddingTop: 5,
        paddingHorizontal: 5,
        borderBottomWidth: 1,
        flexDirection: "row",
        justifyContent: "space-between",
        backgroundColor: "white",
    },
    textBox: {
        // borderWidth: 1,
        color: "white",
        fontSize: 10,
        padding: 3,
        borderRadius: 10,
        backgroundColor: "orange",
        marginBottom: 5
    },
    addBox: {
        justifyContent: "flex-end",
        alignItems: "flex-end",
        borderBottomWidth: 1,
        borderBottomColor: 'orange'
    },
    addButton: {
        justifyContent: 'center',
        alignItems: 'center',
        padding: 10,
        borderWidth: 0,
        width: 100,
        borderRadius: 10,
        backgroundColor: 'orange',
        marginVertical: 15
    },
    totalBox: {
        borderBottomWidth: 1,
        borderBottomColor: 'orange',
        paddingBottom: 20
    },
    listBox: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center'
    },
    text: {
        fontSize: 20,
        fontWeight: '400'
    },






    buttonBox: {
        position: 'absolute',
        bottom: 0,
        width: '100%',
        // borderWidth: 1,
        // marginTop: "10%",
        justifyContent: 'space-around',
        flexDirection: 'row',
        marginBottom: 10,
    },
    bottomButton: {
        paddingHorizontal: 20,
        paddingVertical: 7,
        // borderWidth: 1,
        borderRadius: 10
    },






});