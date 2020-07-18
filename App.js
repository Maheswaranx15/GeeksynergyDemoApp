/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, { Component } from 'react';
import {
  SafeAreaView,
  StyleSheet,
  ScrollView,
  View,
  Text,
  StatusBar,
} from 'react-native';
import {createStackNavigator} from 'react-navigation-stack';
import {createAppContainer} from 'react-navigation';
import SignupScreen from "./src/screens/SignUpScreen";
import LoginScreen from "./src/screens/LoginPage";
import MovieListScreen from "./src/screens/MovieList";
import CompanyInfoScreen from "./src/screens/CompanyInfo";
import HobListScreen from "./src/screens/HobListScreen"
import {createDrawerNavigator, DrawerItems} from 'react-navigation-drawer';
import Constants from "./src/Constants";
import PushNotification from "react-native-push-notification"


class App extends Component{
  async componentDidMount(){
    PushNotification.configure({
     
     
     onNotification: function(notification){
      console.log("NOTIFICATION:", notification);
     },
     
     
     
    });
  }
  render(){
    return(
      <AppContainer/>
    )
  }
}


const CustomDrawerContentComponent = (props) => (
  <ScrollView>
    <SafeAreaView forceInset={{top: 'always', horizontal: 'never'}}>
      <DrawerItems {...props} />
    </SafeAreaView>
  </ScrollView>
);

const MyDrawerNavigator = createDrawerNavigator(
  {
    MovieListScreen: {
      screen: MovieListScreen,
      navigationOptions: {
        drawerLabel: 'Movie List',
      
       
        headerMode: 'screen',
      },
    },
    CompanyInfoScreen: {
      screen: CompanyInfoScreen,
      navigationOptions: {
        drawerLabel: 'Company Info',
      
        headerMode: 'screen',
      },
    },
    HobListScreen: {
      screen: HobListScreen,
      navigationOptions: {
        drawerLabel: 'Hob List',
       
        headerMode: 'screen',
      },
    },
  },
  {
    contentOptions: {
      
      
      activeTintcolor: Constants.topColor,
      activeLabelStyle: {
        color: Constants.topColor,
      },
    },
    contentComponent: CustomDrawerContentComponent,
    backBehavior:"none"
  },
  
);
const StackNav = createStackNavigator(
  {
    SignupScreen: {
      screen: SignupScreen,
      navigationOptions: () => ({
        headerShown: false,
      }),
    },
    LoginScreen: {
      screen: LoginScreen,
      navigationOptions: () => ({
        headerShown: false,
      }),
    },
    HomeScreen:{
      screen: MyDrawerNavigator,
      navigationOptions: () => ({
        headerShown: false,
      }),

    }
    // ResultScreen: {
    //   screen: ResultScreen,
    //   navigationOptions: () => ({
    //     headerShown: false,
    //   }),
    // },
    // GenerateQR: {
    //   screen: MyDrawerNavigator,
    //   navigationOptions: () => ({
    //     headerShown: false,
    //   }),
    // },
    // MyQrScreen: {
    //   screen: MyDrawerNavigator,
    //   navigationOptions: () => ({
    //     headerShown: false,
    //   }),
    // },
  },
  {
    initialRouteName: 'SignupScreen',
  },
);

const AppContainer = createAppContainer(StackNav);

export default App;
