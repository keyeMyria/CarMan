import { createSwitchNavigator } from 'react-navigation';
import AuthLoadScreen from '../../Containers/AuthLoadScreen'
import LoginScreen from '../../Containers/LoginScreen'
import MainBottomNavigator from '../MainBottomNavigator'
const AuthNav = createSwitchNavigator(
    {

        AuthLoadScreen,
        LoginScreen,
        MainBottomNavigator,

    },
    {
        headerMode: 'none',
        navigationOptions: ({navigation})=>({
            title: navigation.state && navigation.state.params && navigation.state.params.title,
        })
    }
);

export default AuthNav;