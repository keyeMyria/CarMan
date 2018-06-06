import React, {Component} from 'react'
import { Text, View} from 'react-native'
import { Button } from 'react-native-elements'
import api from "../../Service/FirebaseApi";

export default class HomeScreen extends Component{

    onSignOutPress = () => {
        api.signOut()
            .then(()=>{
                console.log('вышел');
            })
            .catch(()=>{
                console.log('не вышел');
            })
    };

    render(){
        return(
            <View>
                <Text>HomeScreen</Text>
                <Button
                    title='go to the Auth Screen'
                    onPress={()=>this.props.navigation.navigate('AuthLoadScreen')}
                />
                <Button
                    title='Log out'
                    onPress={this.onSignOutPress}
                />
            </View>
        )
    }
}