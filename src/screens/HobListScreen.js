import React, {Component} from 'react';
import {View, Text, StyleSheet, StatusBar} from 'react-native';
import {HeaderComp}from "../components"
import {DrawerActions} from 'react-navigation-drawer';
import {WebView} from "react-native-webview";

class HobListScreen extends Component {
  render() {
    return (
        <View style={styles.Container}>
        <StatusBar barStyle="default" backgroundColor="#00ADB5" />
       <HeaderComp
       headerText="Hob List"
       onPress={() =>
         this.props.navigation.dispatch(DrawerActions.toggleDrawer())
       }
       
       />
       <View style={{flex:1}}>
     
       <WebView
        source={{
          uri: "https://hoblist.com/"
        }}
       
      />
     </View>
   </View>
    );
  }
}

const styles = StyleSheet.create({
  Container: {
    flex: 1,
    
  },
  titlestyle: {
    fontSize: 20,
    fontWeight: 'bold',
    color: 'white',
  },
});
export default HobListScreen;
