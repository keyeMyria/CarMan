import { SwitchNavigator } from 'react-navigation';
import Main from '../MainNavigationDrawer';
import HomeScreen from '../../Containers/HomeScreen';
import AuthScreen from '../../Containers/AuthScreen'

const AuthNav = SwitchNavigator(
    {
        AuthScreen,
        MainScreen: Main,
        HomeScreen,
    },
    {
        headerMode: 'none',
        navigationOptions: ({navigation})=>({
            title: navigation.state && navigation.state.params && navigation.state.params.title,
        })
    }
);

export default AuthNav;