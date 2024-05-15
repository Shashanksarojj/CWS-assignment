import { StyleSheet, Text, View, TouchableOpacity } from 'react-native'
import React, { useState } from 'react'
// import { Icon } from 'react-native-vector-icons/Icon'
import Icon from 'react-native-vector-icons/FontAwesome';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons'
import CustomHeader from '../Component/CustomeHeader';
import CardList from '../Component/CardList';
import FormPagerComponent from '../Component/FormPagerComponent';

const Invoice = () => {

    const [invoice, setInvoice] = useState(true);
    // const [showForm, setShowForm] = useState(false);

    const handleBackPress = () => {
        // Handle back button press
        setInvoice(true);
    }

    const handleFilterPress = () => {
        // Handle filter button press
    }
    return (
        <View style={styles.background}>
            <View
            // style={{ borderWidth: 1 }}
            >
                <CustomHeader
                    title={invoice ? "Invoice" : "New Invoice"}
                    onPressBack={handleBackPress}
                    onPressFilter={handleFilterPress}
                    invoice={invoice}
                />
            </View>
            {invoice && <View style={styles.background}>
                <CardList setInvoice={setInvoice} />
            </View>}
            {!invoice && <View style={styles.background}>
                {/* <Text>hii</Text> */}
                <FormPagerComponent />
            </View>}



        </View>
    )
}

export default Invoice

const styles = StyleSheet.create({
    background: {
        flex: 1,
        backgroundColor: "#ebf2fc",
        paddingHorizontal: 5
        // alignItems: 'center',
        // justifyContent: 'center',

    }
})