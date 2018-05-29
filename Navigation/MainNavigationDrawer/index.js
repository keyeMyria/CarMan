import React from 'react';
import {DrawerNavigator} from 'react-navigation';
import {Icon} from 'react-native-elements'

import HomeNavigation from '../HomeNavigation';
import AuthNavigation from '../AuthNavigation';
import HomeScreen from "../../Containers/HomeScreen/HomeScreen";

const MenuNav = DrawerNavigator(
    {
        AuthLoadScreen: {
            screen: AuthNavigation,
            navigationOptions: () => ({
                drawerLabel: 'Авторизация',
                header: {
                    style: {
                        shadowOpacity: 0,
                        shadowOffset: {
                            height: 0,
                        },
                        shadowRadius: 0,

                    },
                    drawerIcon: ({ tintColor }) =>(
                        <Icon
                            name="home"
                            color={tintColor}
                        />
                    )
                }
            })
        },
        HomeScreen: {
            screen: HomeScreen,
            navigationOptions: () => ({
                drawerLabel: 'Домашний экран',
                header: {
                    style: {
                        shadowOpacity: 0,
                        shadowOffset: {
                            height: 0,
                        },
                        shadowRadius: 0,

                    },
                    drawerIcon: ({ tintColor }) =>(
                        <Icon
                            name="home"
                            color={tintColor}
                        />
                    )
                }
            })
        },
    }
);
export default MenuNav;