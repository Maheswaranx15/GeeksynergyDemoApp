import React, {Component} from 'react';
import {View, Text, StyleSheet, StatusBar} from 'react-native';
import {HeaderComp, CompanyInfoCard}from "../components"
import {DrawerActions} from 'react-navigation-drawer';
class CompanyInfoScreen extends Component {
  render() {
    return (
        <View style={styles.Container}>
        <StatusBar barStyle="default" backgroundColor="#00ADB5" />
       <HeaderComp
       headerText="Company Info"
       onPress={() =>
         this.props.navigation.dispatch(DrawerActions.toggleDrawer())
       }
       
       />
       <View style={{flex:1, alignItems:"center"}}>
     
   <CompanyInfoCard
   Title= "Company"
   Value="Geeksynergy Technologies Pvt Ltd"
   />
   <CompanyInfoCard
   Title= "Address"
   Value="Sanjaynagar, Bengaluru - 56"
   />
   <CompanyInfoCard
   Title= "Phone"
   Value="XXXXXXXX09"
   />
   <CompanyInfoCard
   Title= "Email"
   Value="XXXXXXXX@gmail.com"
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
export default CompanyInfoScreen;
