import React from 'react';
import {StyleSheet, Text, View} from 'react-native';

export default class App extends React.Component {
    render() {
        return (
            <View style={styles.container}>
                <Text style ={styles.textStyle}>7.05.2018</Text>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#ff3e36',
        alignItems: 'center',
        justifyContent: 'center',
    },
    textStyle : {
        padding:10,
        borderRadius: 20,
        backgroundColor:'#4eac1d'
    }
});
