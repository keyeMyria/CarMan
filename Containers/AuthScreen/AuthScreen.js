import React, {Component} from 'react';
import { Text, View} from 'react-native';
import { Button } from 'react-native-elements';

class AuthScreen extends Component{
    render(){
        return(
            <View style={{backgroundColor:'#123321', height:'100%', width:'100%'}}>
                <Text>AuthScreen</Text>
                <Button
                title='go to the Home Screen'
                onPress={()=>this.props.navigation.navigate('HomeScreen')}
                />
            </View>
        )
    }
}
export default AuthScreen;