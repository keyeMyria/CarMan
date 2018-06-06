import React, {Component} from 'react';
import {Text, View} from 'react-native';
import {Button} from 'react-native-elements';
import api from '../../Service/FirebaseApi';
import PropTypes from 'prop-types'

import {FormLabel, FormInput, FormValidationMessage} from 'react-native-elements'

class LoginScreen extends Component {
    constructor(props) {
        super(props);
        this.props = props;
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
        api.signInWithEmailAndPassword(email, password)
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
        api.signUpWithEmailAndPassword(email, password)
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

    onSignOutPress = () => {
        api.signOut()
            .then(()=>{
                console.log('вышел');
            })
            .catch(()=>{
                console.log('не вышел');
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
        //const {canvasColor} = this.context.uiTheme.palette;
        return (
            <View style={{backgroundColor: '#d0cd9e', flex: 1, justifyContent: 'flex-start', alignItems: 'stretch'}}>
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
                <Button
                    title='Sign out'
                    onPress={this.onSignOutPress}
                />
            </View>
        )
    }
}

LoginScreen.contextType={
    uiTheme: PropTypes.object.isRequired,
};

export default LoginScreen;