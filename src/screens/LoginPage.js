import React, {Component} from 'react';
import {
  View,
  Text,
  AsyncStorage,
  TouchableOpacity,
  StyleSheet,
  Dimensions,
  StatusBar,
  Alert,
} from 'react-native';

import {InputText, Button, PickerComp} from '../components';
import Constants from '../Constants';
import {Value} from 'react-native-reanimated';

export default class LoginScreen extends Component {
  constructor(props) {
    super(props);
    this.state = {
      userData: null,
      LoginName: null,
      LoginPassword: null,
    };
  }
  _validatedata = () => {
    if (this.state.LoginName == null || this.state.LoginPassword == null) {
      Alert.alert('Please Enter Correct Details');
    } else {
      if (
        this.state.LoginName === this.state.userData.UserName &&
        this.state.LoginPassword === this.state.userData.UserPassword
      ) {
        Alert.alert('Login Successful');
        this.props.navigation.navigate('HomeScreen')
      } else {
        Alert.alert('bad Credentials');
      }
    }
  };

  _retrieveData = async () => {
    try {
      const value = await AsyncStorage.getItem('UserDetails');
      if (value !== null) {
        // We have data!!

        this.setState({
          userData: JSON.parse(value),
        });
        console.log(this.state.userData.UserPassword);

        this._validatedata();
      }
    } catch (error) {
      // Error retrieving data
      console.log('error');
    }
  };

  render() {
    return (
      <View style={styles.SingupContainer}>
        <StatusBar barStyle="default" backgroundColor="#00ADB5" />
        <View style={{alignItems: 'center', flex: 1, justifyContent: 'center'}}>
          <Text style={{fontSize: 30, color: Constants.topColor}}>Login</Text>
        </View>
        <View style={{flex: 1}}>
          <InputText
            label="Name"
            placeholder="Enter Name"
            IconName="account"
            IconType="material-community"
            value={this.state.LoginName}
            onChangeText={(val) => this.setState({LoginName: val})}
          />
          <InputText
            label="Password"
            placeholder="Enter Password"
            securetext={true}
            IconName="lock"
            IconType="material-community"
            value={this.state.LoginPassword}
            onChangeText={(val) => this.setState({LoginPassword: val})}
          />

          <View style={{alignItems: 'center', marginTop: 30}}>
            <Button label="Login" onPress={this._retrieveData} />
          </View>
        </View>
      </View>
    );
  }
}
const styles = StyleSheet.create({
  SingupContainer: {
    flex: 1,
    backgroundColor: 'white',
  },
});
