import { SwitchNavigator } from 'react-navigation';
import HomeScreen from '../../Containers/HomeScreen';
import AuthScreen from '../../Containers/AuthScreen'

const HomeNav = SwitchNavigator(
    {
        HomeScreen: {
            screen: HomeScreen,
            path: '',
            navigationOptions: () => ({
                title: 'HomeScreen',
                header: null,
            }),
        },
        AuthScreen: {
            screen: AuthScreen,
            path: '',
            navigationOptions: () => ({
                title: 'AuthScreen',
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

export default HomeNav;