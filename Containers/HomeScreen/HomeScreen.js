import React, {Component} from 'react'
import { Text, View} from 'react-native'
import { Button } from 'react-native-elements'
export default class HomeScreen extends Component{
    render(){
        return(
            <View>
                <Text>HomeScreen</Text>
                <Button
                    title='go to the Auth Screen'
                    onPress={()=>this.props.navigation.navigate('AuthLoadScreen')}
                />
            </View>
        )
    }
}