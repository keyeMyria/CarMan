import React, {Component} from 'react';
import { Text, View} from 'react-native';
import { Button } from 'react-native-elements';

class AuthLoadScreen extends Component{

    componentDidMount(){
        this.props.navigation.navigate('LoginScreen');
    }

    render(){
        return(
            <View style={{backgroundColor:'#2521a1', flex:1, justifyContent:'space-around', alignItems:'center'}}>
                <Text>AuthScreen</Text>
                <Button
                title='go to the Home Screen'
                onPress={()=>this.props.navigation.navigate('HomeScreen')}
                />
            </View>
        )
    }
}
export default AuthLoadScreen;