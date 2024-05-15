import React, { useState } from 'react';
import { View, StyleSheet, Text } from 'react-native';
import { ViewPager } from 'react-native-screens';
import FormPage1 from './FormPage1';
import FormPage2 from './FormPage2';
import SavePage from './SavePage';


const ViewPagerComponent = ({ }) => {
    const [page2, setPage2] = useState(false);
    const [savePage, setSavePage] = useState(false);

    return (
        <View style={styles.viewPager}>

            {/* <View> */}
            {/* <Text>hii</Text> */}
            {!savePage && !page2 && <FormPage1 setPage2={setPage2} />}
            {!savePage && page2 && <FormPage2 setPage2={setPage2} setSavePage={setSavePage} />}
            {savePage && <SavePage setSavePage={setSavePage} />}

        </View>
    );
};

const styles = StyleSheet.create({
    viewPager: {
        flex: 1,
    },
});

export default ViewPagerComponent;