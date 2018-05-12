import { SwitchNavigator } from 'react-navigation';
import HomeScreen from '../../Containers/HomeScreen';
import AuthScreen from '../../Containers/AuthScreen'

const AuthNav = SwitchNavigator(
    {
        AuthScreen: {
            screen: AuthScreen,
            path: '',
            navigationOptions: () => ({
                title: 'AuthScreen',
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
    },
    {
        headerMode: 'none',
        navigationOptions: ({navigation})=>({
            title: navigation.state && navigation.state.params && navigation.state.params.title,
        })
    }
);

export default AuthNav;