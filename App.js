import React from 'react';
import {StyleSheet, Text, View} from 'react-native';
import {Constants} from 'expo';
import {ThemeProvider} from 'react-native-material-ui'
import uiTheme from './Theme/uiTheme'
import Root from './Containers/RootContainer';

export default class App extends React.Component {
    render() {
        return (
            <View style={{flex: 1}}>
                <View style={{height: Constants.statusBarHeight, backgroundColor: '#067c40', zIndex: 99999}}/>
                <ThemeProvider uiTheme={uiTheme}>
                    <Root/>
                </ThemeProvider>
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
    textStyle: {
        padding: 10,
        borderRadius: 20,
        backgroundColor: '#4eac1d'
    }
});
