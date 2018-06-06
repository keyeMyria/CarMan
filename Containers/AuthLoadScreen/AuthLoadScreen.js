import React, {Component} from 'react';
import {Text, View} from 'react-native';
import {Button} from 'react-native-elements';

import api from '../../Service/FirebaseApi'

class AuthLoadScreen extends Component {

    componentDidMount() {
        api.onAuthStateChanged((user) => {
            if (user) {
                console.log('batya v zdanii');
                this.props.navigation.navigate('HomeScreen');

            } else {
                this.props.navigation.navigate('LoginScreen');
                //console.log('не вошёл');
            }
        });
        }

    render() {
        return (
            <View style={{backgroundColor: '#2521a1', flex: 1, justifyContent: 'space-around', alignItems: 'center'}}>
                <Text>AuthScreen</Text>
                <Button
                    title='go to the Home Screen'
                    onPress={() => this.props.navigation.navigate('HomeScreen')}
                />
            </View>
        )
    }
}

export default AuthLoadScreen;