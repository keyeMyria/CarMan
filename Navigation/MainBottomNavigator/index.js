import React from 'react';
import {createBottomTabNavigator} from 'react-navigation';
import {Icon} from 'react-native-elements'

import HomeScreen from "../../Containers/HomeScreen/HomeScreen";
import ProfileNavigation from "../ProfileNavigation";
import AddExpenceScreen from "../../Containers/AddExpenseScreen/AddExpenseScreen";

const MenuNav = createBottomTabNavigator(
    {
        HomeScreen: {
            screen: HomeScreen,
            /*navigationOptions: () => ({
                tabBarLabel: 'Домашний экран',
                tabBarIcon: ({tintColor}) => (
                    <Icon
                        name="home"
                        color={tintColor}
                    />
                )

            })*/
        },
        ProfileScreen: {
            screen: ProfileNavigation,
            /*navigationOptions: () => ({
                tabBarLabel: 'Домашний экран',
                tabBarIcon: ({tintColor}) => (
                    <Icon
                        name="home"
                        color={tintColor}
                    />
                )

            })*/
        },
        AddExpenceScreen: {
            screen: AddExpenceScreen,
            /*navigationOptions: () => ({
                tabBarLabel: 'Домашний экран',
                tabBarIcon: ({tintColor}) => (
                    <Icon
                        name="home"
                        color={tintColor}
                    />
                )

            })*/
        },
    }
);
export default MenuNav;