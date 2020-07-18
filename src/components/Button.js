import React from 'react';
import {
  View,
  TouchableOpacity,
  Dimensions,
  StyleSheet,
  Text,
} from 'react-native';
import Constants from "../Constants";

const height = Dimensions.get('window').height;
const width = Dimensions.get('window').width;

const Button = (props) => {
  return (
    <View style={{margin: 5}}>
      <TouchableOpacity onPress={props.onPress}>
        <View style={Styles.buttonstyle}>
          <Text style={Styles.buttontext}>{props.label}</Text>
        </View>
      </TouchableOpacity>
    </View>
  );
};

const Styles = StyleSheet.create({
  buttonstyle: {
    height: height / 14,
    width: width *0.95,

    borderRadius: 10,
    alignItems: 'center',
    backgroundColor: Constants.topColor,
    justifyContent: 'center',
  },
  buttontext: {
    alignSelf: 'center',
    color: 'white',
    fontSize: 16,
    fontWeight: 'bold',
  },
});
export {Button};
