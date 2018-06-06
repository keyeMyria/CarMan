import { createSwitchNavigator } from 'react-navigation';
import HomeScreen from '../../Containers/HomeScreen';
import AuthLoadScreen from '../../Containers/AuthLoadScreen'
import LoginScreen from '../../Containers/LoginScreen'

const AuthNav = createSwitchNavigator(
    {

        AuthLoadScreen,
        HomeScreen,
        LoginScreen,
/*        AuthLoadScreen: {
            screen: AuthLoadScreen,
            path: '',
            navigationOptions: () => ({
                title: 'AuthLoadScreen',
                header: null,
            }),
        },
        HomeScreen: {
            screen: HomeScreen,
            path: '',
            navigationOptions: () => ({
                title: 'HomeScreen',
                header: null,
            }),
        },
        LoginScreen: {
            screen: LoginScreen,
            path: '',
            navigationOptions: () => ({
                title: 'LoginScreen',
                header: null,
            }),
        },*/
    },
    {
        headerMode: 'none',
        navigationOptions: ({navigation})=>({
            title: navigation.state && navigation.state.params && navigation.state.params.title,
        })
    }
);

export default AuthNav;