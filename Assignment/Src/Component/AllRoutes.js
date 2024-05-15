import React from "react";
import { View, SafeAreaView, StyleSheet } from "react-native";
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import Icon from 'react-native-vector-icons/FontAwesome';

import MainPage from "../Screens/MainPage";
import Profile from "../Screens/Profile";
import Setting from "../Screens/Setting";
import Invoice from "../Screens/Invoice";

const AllRoutes = () => {
    const Tab = createBottomTabNavigator();

    return (
        <NavigationContainer>
            <Tab.Navigator
                id="tabNavigator"
                initialRouteName="Invoice"
                screenOptions={({ route }) => ({
                    headerShown: false,
                    tabBarShowLabel: false,
                    lazy: true,
                    tabBarIcon: ({ focused, color, size }) => {
                        let iconName;
                        let circleColor = 'transparent';
                        let iconColor = color;
                        let iconSize = 20;

                        if (focused) {
                            circleColor = 'orange'; // Change to the color you want for the circle
                            iconColor = 'white';
                            iconSize = 22;
                        }

                        if (route.name === 'MainPage') {
                            iconName = focused ? 'th-large' : 'th-large'; // Specify your icon name here
                        } else if (route.name === 'Invoice') {
                            iconName = focused ? 'file-o' : 'file-o';
                        } else if (route.name === 'Setting') {
                            iconName = focused ? 'cog' : 'cog';
                        } else if (route.name === 'Profile') {
                            iconName = focused ? 'user' : 'user';
                        }

                        return (
                            <View style={styles.tabBarIconContainer}>
                                <View style={[styles.circle, { backgroundColor: circleColor }]}>
                                    <Icon name={iconName} size={iconSize} color={iconColor} />
                                </View>
                            </View>
                        );
                    },
                    tabBarStyle: {
                        height: 55,
                        position: "absolute",
                    },
                })}
            >
                <Tab.Screen name="MainPage" component={MainPage} />
                <Tab.Screen name="Invoice" component={Invoice} />
                <Tab.Screen name="Setting" component={Setting} />
                <Tab.Screen name="Profile" component={Profile} />
            </Tab.Navigator>
        </NavigationContainer>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    tabBarIconContainer: {
        alignItems: 'center',
        justifyContent: 'center',
    },
    circle: {
        width: 44, // Adjust based on your icon size
        height: 44, // Adjust based on your icon size
        borderRadius: 22, // Half of width and height to make it a circle
        alignItems: 'center',
        justifyContent: 'center',
    },
});

export default AllRoutes;
