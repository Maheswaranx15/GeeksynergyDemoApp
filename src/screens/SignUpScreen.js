import React, {Component} from 'react';
import {View, Text, StatusBar, Picker, AsyncStorage } from 'react-native';
import {StyleSheet, Dimensions} from 'react-native';
import {InputText, Button, PickerComp} from '../components';
import Constants from '../Constants';
import PushNotification from "react-native-push-notification"


const height = Dimensions.get('window').height;
const width = Dimensions.get('window').width;

export default class SignupScreen extends Component {
  constructor(props) {
    super(props);
    this.state = {
      profession: '',
      name:"",
      Password:"",
      Email:"",
      PhoneNumber:""
    };
  }
  _storeData = async () => {

    try {
        let UserData={
            UserName:this.state.name,
            UserPassword:this.state.Password,
            UserEmail:this.state.Email,
            UserPhoneNumber:this.state.PhoneNumber,
            UserProfession : this.state.profession
        }
        console.log(UserData)
      await AsyncStorage.setItem(
        'UserDetails',
        JSON.stringify(UserData)
      );
      this.props.navigation.navigate('LoginScreen')
    } catch (error) {
      // Error saving data
    }
  };
  async componentDidMount(){
    PushNotification.configure({
     
     
     onNotification: function(notification){
      console.log("NOTIFICATION:", notification);
     },
     
     
     
    });
  }

  render() {
    return (
      <View style={styles.SingupContainer}>
        <StatusBar barStyle="default" backgroundColor="#00ADB5" />
        <View style={{alignItems: 'center', flex: 1, justifyContent: 'center'}}>
          <Text style={{fontSize: 30, color: Constants.topColor}}>
            Geeksynergy Task Demo
          </Text>
          <Text style={{fontSize: 20, color: Constants.topColor}}>
            Powered By React-Native
          </Text>
        </View>
        <View style={{flex: 2}}>
          <InputText
            label="Name"
            placeholder="Enter Name"
            IconName="account"
            IconType="material-community"
            value={this.state.name}
            onChangeText={(val)=>this.setState({name:val})}
          />
          <InputText
            label="Password"
            placeholder="Enter Password"
            securetext={true}
            IconName="lock"
            IconType="material-community"
            value={this.state.Password}
            onChangeText={(val)=>this.setState({Password:val})}
          />
          <InputText
            label="Email"
            placeholder="Enter Email"
            IconName="email"
            IconType="material-community"
            keyboardType="email-address"
            value={this.state.Email}
            onChangeText={(val)=>this.setState({Email:val})}
          />
          <InputText
            label="Phone Number"
            placeholder="Enter Phone Number"
            IconName="phone"
            IconType="material-community"
            keyboardType="phone-pad"
            value={this.state.PhoneNumber}
            onChangeText={(val)=>this.setState({PhoneNumber:val})}
          />
          <PickerComp
            selectedValue={this.state.profession}
            onChangeValue={(value) =>
              this.setState({
                profession: value,
              })
            }
            pickItems={[
              {label: 'Engineer', value: 'Engineer'},
              {label: 'Doctor', value: 'Doctor'},
              {label: 'ArmyMan', value: 'ArmyMan'},
            ]}
          />

          <View style={{alignItems: 'center', marginTop: 30}}>
            <Button label="Signup"
           onPress={this._storeData}
            />
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
