import { createSwitchNavigator } from 'react-navigation';
import HomeScreen from '../../Containers/HomeScreen';
import AuthLoadScreen from '../../Containers/AuthLoadScreen'
import ProfileScreen from "../../Containers/ProfileScreen/ProfileScreen";

const ProfileNav = createSwitchNavigator(
    {
        ProfileScreen: {
            screen: ProfileScreen,
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

export default ProfileNav;