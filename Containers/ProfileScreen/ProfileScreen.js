import React, {Component} from 'react';
import { Text, View} from 'react-native';
import { Button } from 'react-native-elements';
import api from "../../Service/FirebaseApi";


export default class ProfileScreen extends Component{

    onSignOutPress = () => {
        api.signOut()
            .then(()=>{
                // todo освободить хранилище
                console.log('вышел');
            })
            .catch(()=>{
                console.log('не вышел');
            })
    };
    render(){
        return(
            <View>
                <Text>Profile Screen</Text>
                <Button
                    title='Log out'
                    onPress={this.onSignOutPress}
                />
            </View>
        )
    }
}