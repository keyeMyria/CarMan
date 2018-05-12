import { SwitchNavigator } from 'react-navigation';
import Main from '../MainNavigationDrawer';
import HomeScreen from '../../Containers/HomeScreen';
import AuthScreen from '../../Containers/AuthScreen'

const HomeNav = SwitchNavigator(
    {
        HomeScreen,
        AuthScreen,
        MainScreen: Main,
    },
    {
        headerMode: 'none',
        navigationOptions: ({navigation})=>({
            title: navigation.state && navigation.state.params && navigation.state.params.title,
        })
    }
);

export default HomeNav;