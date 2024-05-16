import React, { useState } from 'react';
import { StyleSheet, View, Text, TouchableOpacity, TextInput, Alert } from 'react-native';
import { Picker } from '@react-native-picker/picker';
// import { useNavigation } from '@react-navigation/native';

const FormPage1 = ({ setPage2, setSavePage }) => {
    // const navigation = useNavigation();

    const [Id, setId] = useState('');
    const [product, setProduct] = useState('');
    const [Qty, setQty] = useState('');
    const [unitPrice, setUnitPrice] = useState('');
    const [tax, setTax] = useState('');
    const [amount, setAmount] = useState('');


    const validateForm = () => {
        return Id && product && Qty && unitPrice && tax && amount;
    };

    const handleNext = () => {
        if (validateForm()) {
            setSavePage(true);
        } else {
            Alert.alert('Validation Error', 'Please fill out all fields.');
        }
    };


    return (
        <View style={styles.background}>
            <View>
                <View style={styles.inputBox}>
                    <Text style={styles.label_text}>#</Text>
                    <TextInput
                        style={styles.textInputbox}
                        placeholder="1"
                        onChangeText={(text) => setId(text)}
                        value={Id.toString()}
                    />
                </View>
                <View>
                    <Text style={styles.label_text}>Product :</Text>
                    <View style={{ borderWidth: 0, borderRadius: 10 }}>
                        <Picker
                            style={[styles.input]}
                            selectedValue={product}
                            onValueChange={(itemValue, itemIndex) => setProduct(itemValue)}
                        >
                            <Picker.Item label="Product 1" value="P1" />
                            <Picker.Item label="Product 2" value="P2" />
                        </Picker>
                    </View>
                </View>

                <View>
                    <Text style={styles.label_text}>Qty:</Text>
                    <View style={{ borderWidth: 0, borderRadius: 10 }}>
                        <Picker

                            style={[styles.input]}
                            selectedValue={Qty}
                            onValueChange={(itemValue, itemIndex) => setQty(itemValue)}
                        >
                            <Picker.Item label="1" value="1" />
                            <Picker.Item label="2" value="2" />
                        </Picker>
                    </View>
                </View>


                <View style={styles.inputBox}>
                    <Text style={styles.label_text}>Unit Price : </Text>
                    <TextInput
                        style={styles.textInputbox}
                        placeholder="Unit Price"
                        onChangeText={(text) => setUnitPrice(text)}
                        value={unitPrice.toString()}
                    />
                </View>

                <View style={styles.inputBox}>
                    <Text style={styles.label_text}>Tax : </Text>
                    <TextInput
                        style={styles.textInputbox}
                        placeholder="Tax"
                        onChangeText={(text) => setTax(text)}
                        value={tax.toString()}
                    />
                </View>

                <View style={styles.inputBox}>
                    <Text style={styles.label_text}>Amount : </Text>
                    <TextInput
                        style={styles.textInputbox}
                        placeholder="amount"
                        onChangeText={(text) => setAmount(text)}
                        value={amount.toString()}
                    />
                </View>


            </View>

            <View style={styles.calcBox}>
                <View style={styles.flexRow}>
                    <Text style={styles.totaltext}>Sub Total : </Text>
                    <Text style={styles.totaltext}>$00000.0</Text>
                </View>
                <View style={styles.flexRow}>
                    <Text style={styles.totaltext}>Discount : </Text>
                    <Text style={styles.totaltext}>$00000.0</Text>
                </View>
                <View style={styles.flexRow}>
                    <Text style={styles.totaltext}>Tax : </Text>
                    <Text style={styles.totaltext}>$00000.0</Text>
                </View>
                <View style={styles.flexRow}>
                    <Text style={styles.totaltext}>Total : </Text>
                    <Text style={styles.totaltext}>$00000.0</Text>
                </View>
            </View>







            <View style={styles.buttonBox}>
                <TouchableOpacity
                    // title="    "
                    onPress={handleNext}
                    style={[styles.bottomButton, { backgroundColor: "green" }]}
                ><Text style={{ color: 'white' }}>Next</Text></TouchableOpacity>

                <TouchableOpacity
                    title="Cancel"
                    onPress={() => { setPage2(false) }}
                    style={[styles.bottomButton, { backgroundColor: 'black' }]}
                ><Text style={{ color: 'white' }}>Cancel</Text></TouchableOpacity>
            </View>
        </View>
    );
};

export default FormPage1;

const styles = StyleSheet.create({
    background: {
        flex: 1,
        margin: 5,
        marginBottom: 65,
        borderRadius: 10,
        backgroundColor: 'white',
        padding: 5
    }, buttonBox: {
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
    textInputbox: {
        borderRadius: 10,
        marginHorizontal: 10,
        backgroundColor: "#ebf2fc",
        paddingHorizontal: 10,
        height: 40,
    },
    inputBox: {
        // borderWidth: 1
    },
    label_text: {
        fontSize: 18,
        fontWeight: 'bold',
    },
    input: {
        // borderWidth: 1,
        // flex: 1
        // height: '100%'
        borderRadius: 10,
        marginHorizontal: 10,
        backgroundColor: "#ebf2fc",
        paddingHorizontal: 10,
        // height: 30

        // height:
    }
    , calcBox: {
        marginTop: 10,
        borderTopWidth: 1,
        borderColor: 'orange'
    },
    flexRow: {
        flexDirection: 'row',
        justifyContent: 'space-between'
    },
    totaltext: {
        fontSize: 18,
        fontWeight: 'bold',
    }





});