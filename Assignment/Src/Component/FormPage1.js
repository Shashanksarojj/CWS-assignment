import React, { useState } from 'react';
import { StyleSheet, View, Text, Button, TouchableOpacity, TextInput } from 'react-native';
// import { useNavigation } from '@react-navigation/native';
import { Picker } from '@react-native-picker/picker';

const FormPage1 = ({ setPage2 }) => {
    // const navigation = useNavigation();

    const [invoiceId, setInvoiceId] = useState('');
    const [client, setClient] = useState('');
    const [invoiceDate, setInvoiceDate] = useState(new Date());
    const [discountType, setDiscountType] = useState('');
    const [discount, setDiscount] = useState('');
    const [dueDate, setDueDate] = useState(new Date());
    const [currency, setCurrencies] = useState('');

    const handleNext = () => {
        if (invoiceId && client && invoiceDate && discountType && discount && dueDate && currency) {
            setPage2(true);
        } else {
            alert('Please fill out all fields.');
        }
    };


    return (
        <View style={styles.background}>
            <View>
                <View style={styles.inputBox}>
                    <Text style={styles.label_text}>InvoiceId :</Text>
                    <TextInput
                        style={styles.textInputbox}
                        placeholder="00000"
                        onChangeText={(text) => setInvoiceId(text)}
                        value={invoiceId.toString()}
                    />
                </View>
                <View>
                    <Text style={styles.label_text}>Client :</Text>
                    <View style={{ borderWidth: 0, borderRadius: 10 }}>
                        <Picker
                            style={[styles.input]}
                            selectedValue={client}
                            onValueChange={(itemValue, itemIndex) => setClient(itemValue)}
                        >
                            <Picker.Item label="Client 1" value="C1" />
                            <Picker.Item label="Client 2" value="C2" />
                        </Picker>
                    </View>
                </View>

                <View>
                    <Text style={styles.label_text}>Invoice Date:</Text>
                    <View style={{ borderWidth: 0, borderRadius: 10 }}>
                        <Picker

                            style={[styles.input]}
                            selectedValue={invoiceDate}
                            onValueChange={(itemValue, itemIndex) => setInvoiceDate(itemValue)}
                        >
                            <Picker.Item label="13/5/2024" value="D1" />
                            <Picker.Item label="15/5/2024" value="D2" />
                        </Picker>
                    </View>
                </View>


                <View>
                    <Text style={styles.label_text}>Discount Type :</Text>
                    <View style={{ borderWidth: 0, borderRadius: 10 }}>
                        <Picker
                            style={[styles.input]}
                            selectedValue={discountType}
                            onValueChange={(itemValue, itemIndex) => setDiscountType(itemValue)}
                        >
                            <Picker.Item label="12%" value="12" />
                            <Picker.Item label="8%" value="8" />
                        </Picker>
                    </View>
                </View>




                <View style={styles.inputBox}>
                    <Text style={styles.label_text}>Discount</Text>
                    <TextInput
                        style={styles.textInputbox}
                        placeholder="0"
                        onChangeText={(text) => setDiscount(text)}
                        value={discount.toString()}
                    />
                </View>
            </View>

            <View>
                <Text style={styles.label_text}>Due Date :</Text>
                <View style={{ borderWidth: 0, borderRadius: 10 }}>
                    <Picker
                        style={[styles.input]}
                        selectedValue={dueDate}
                        onValueChange={(itemValue, itemIndex) => setDueDate(itemValue)}
                    >
                        <Picker.Item label="20/5/2024" value="20" />
                        <Picker.Item label="21/5/2024" value="21" />
                    </Picker>
                </View>
            </View>

            <View>
                <Text style={styles.label_text}>Currency :</Text>
                <View style={{ borderWidth: 0, borderRadius: 10 }}>
                    <Picker
                        style={[styles.input]}
                        selectedValue={currency}
                        onValueChange={(itemValue, itemIndex) => setCurrencies(itemValue)}
                    >
                        <Picker.Item label="Indian Rupee" value="INR" />
                        <Picker.Item label="US Doller" value="USD" />
                    </Picker>
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
                    onPress={() => { }}
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
    }, buttonBox: {
        // position: 'absolute',
        // bottom: 0,
        width: '100%',
        // borderWidth: 1,
        marginTop: 100,
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





});