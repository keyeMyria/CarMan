import React from 'react';
import {createBottomTabNavigator} from 'react-navigation';
import {Icon} from 'react-native-elements'

import HomeNavigation from '../HomeNavigation';
import AuthNavigation from '../AuthNavigation';
import HomeScreen from "../../Containers/HomeScreen/HomeScreen";

const MenuNav = createBottomTabNavigator(
    {
        AuthLoadScreen: {
            screen: AuthNavigation,
            /*navigationOptions: () => ({
                tabBarLabel: 'Авторизация',
                tabBarIcon: ({tintColor}) => (
                    <Icon
                        name="home"
                        color={tintColor}
                    />
                )

            })*/
        },
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
    }
);
export default MenuNav;