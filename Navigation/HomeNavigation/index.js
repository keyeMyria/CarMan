import { createSwitchNavigator } from 'react-navigation';
import HomeScreen from '../../Containers/HomeScreen';
import AuthLoadScreen from '../../Containers/AuthLoadScreen'

const HomeNav = createSwitchNavigator(
    {
        HomeScreen: {
            screen: HomeScreen,
            path: '',
            navigationOptions: () => ({
                title: 'HomeScreen',
                header: null,
            }),
        },
        AuthLoadScreen: {
            screen: AuthLoadScreen,
            path: '',
            navigationOptions: () => ({
                title: 'AuthLoadScreen',
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