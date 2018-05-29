import React, {Component} from 'react';
import {Text, View} from 'react-native';
import {Button} from 'react-native-elements';

import * as firebase from 'firebase'
import {FormLabel, FormInput, FormValidationMessage} from 'react-native-elements'

firebase.initializeApp({
    apiKey: "AIzaSyB-qx6oFxXPJb4wzUdK0iweuSgFf8uHEw4",
    authDomain: "carman-faa18.firebaseapp.com",
    databaseURL: "https://carman-faa18.firebaseio.com",
    projectId: "carman-faa18",
    storageBucket: "carman-faa18.appspot.com",
    messagingSenderId: "1051365856529",
});

class LoginScreen extends Component {
    constructor(props) {
        super(props);
        this.state = {
            password: '',
            email: '',
            error: '',
            loading: 'false',
        }
    }

    onLoginPress = () => {
        const {email, password} = this.state;
        this.setState({
            error: '',
            loading: true,
        });
        firebase.auth().signInWithEmailAndPassword(email, password)
            .then(() => {
                console.log("SUCCES!!!!!!");
            })
            .catch(() => {
                console.log("auth error");
            })
    };

    onSignUpPress = () =>{
        const{email, password} = this.state;
        this.setState({
            error: '',
            loading: true,
        });
        firebase.auth().createUserWithEmailAndPassword(email, password)
            .then(() => {
                this.setState({
                    loading: false,
                });
                console.log("SUCCES!!!!!!");
            })
            .catch(() => {
                console.log("auth error");
            })
    };

    onPasswordChange = (text) => {
        this.setState({
            password: text,
        })
    };

    onEmailChange = (text) => {
        this.setState({
            email: text,
        })
    };

    render() {
        return (
            <View style={{backgroundColor: '#2521a1', flex: 1, justifyContent: 'flex-start', alignItems: 'stretch'}}>
                <Text>Login screen</Text>
                <Button
                    title='go to the Home Screen'
                    onPress={() => this.props.navigation.navigate('HomeScreen')}
                />
                <FormLabel>Mail</FormLabel>
                <FormInput onChangeText={this.onEmailChange}/>
                <FormValidationMessage>Error message</FormValidationMessage>

                <FormLabel>Password</FormLabel>
                <FormInput onChangeText={this.onPasswordChange}/>
                <FormValidationMessage>Error message</FormValidationMessage>
                <Button
                    title='Sign Up'
                    onPress={this.onSignUpPress}
                />
                <Button
                    title='Log In'
                    onPress={this.onLoginPress}
                />
            </View>
        )
    }
}

export default LoginScreen;