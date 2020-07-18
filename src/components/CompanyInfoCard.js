import React from 'react';
import {
  View,
  TouchableOpacity,
  Dimensions,
  StyleSheet,
  Text,
} from 'react-native';
import Constants from '../Constants';

const height = Dimensions.get('window').height;
const width = Dimensions.get('window').width;

const CompanyInfoCard = (props) => {
  return (
    <View style={Styles.buttonstyle}>
        <View style={Styles.titleContainer}>
      <Text style={Styles.TitleStyle}>{props.Title}</Text>
      </View>
      <Text style={Styles.ValueText}>{props.Value}</Text>
    </View>
  );
};

const Styles = StyleSheet.create({
  buttonstyle: {
    height: height / 10,
    width: width * 0.95,
    shadowColor: '#000',
    shadowOffset: {width: 0, height: 1},
    shadowOpacity: 0.8,
    shadowRadius: 1,
    elevation: 5,

    marginTop: 15,
    margin: 10,

    borderRadius: 10,
    alignItems: "flex-start",
    backgroundColor: 'white',
    justifyContent: "center",
    flexDirection: 'column',
  },
  titleContainer:{
backgroundColor: Constants.topColor,
marginLeft:10,
borderRadius:10
  },
  TitleStyle: {
   margin:10,
   marginTop:5,
   marginBottom:5,
    color: "white",
    fontSize: 16,
    fontWeight: 'bold',
  },
  ValueText: {
    margin:10,
    marginTop:5,
    marginBottom:5,
     color: Constants.topColor,
     fontSize: 16,
     fontWeight: 'bold',
   },
});
export {CompanyInfoCard};
