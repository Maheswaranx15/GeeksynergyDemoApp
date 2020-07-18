import React from 'react';
import {
  View,
  TouchableOpacity,
  Dimensions,
  StyleSheet,
  Text,
  Image
} from 'react-native';
import Constants from '../Constants';

const height = Dimensions.get('window').height;
const width = Dimensions.get('window').width;

const MovieCard = (props) => {
  return (
    <View style={Styles.buttonstyle}>
      <View style={Styles.firstCol}>
         
          <Image source={{uri: props.thumbnail_image}}  style={Styles.imageStyles}/>
         
      </View>
      <View style={Styles.secondcol}>
        <Text style={Styles.TitleStyle}>{props.title}</Text>
        <View style={Styles.detailsContainer}>
          <Text style={Styles.TopicStyle}>Genre : </Text>
          <Text style={Styles.detailsStyle}>{props.genre}</Text>
        </View>
        <View style={Styles.detailsContainer}>
          <Text style={Styles.TopicStyle}>Director : </Text>
          <Text style={Styles.detailsStyle}>{props.director}</Text>
        </View>
        <View style={Styles.detailsContainer}>
          <Text style={Styles.TopicStyle}>Starring : </Text>
          <Text
            numberOfLines={1}
            ellipsizeMode="tail"
            style={Styles.detailsStyle}>
            {props.star}
          </Text>
        </View>
        <View style={Styles.detailsContainer}>
          <Text style={Styles.TopicStyle}>Languages : </Text>
          <Text numberOfLines={1}
            ellipsizeMode="tail" style={Styles.detailsStyle}>{props.lang}</Text>
        </View>
        <View style={Styles.detailsContainer}>
          <Text style={Styles.TopicStyle}>Run Time : </Text>
          <Text style={Styles.detailsStyle}>{props.runtime}</Text>
        </View>
        <View style={Styles.detailsContainer}>
          <Text style={Styles.TopicStyle}>Views : </Text>
          <Text style={Styles.detailsStyle}>{props.views}</Text>
        </View>
      </View>
    </View>
  );
};

const Styles = StyleSheet.create({
  buttonstyle: {
    height: height / 3.5,
    width: width * 0.95,
    shadowColor: '#000',
    shadowOffset: {width: 0, height: 1},
    shadowOpacity: 0.8,
    shadowRadius: 1,
    elevation: 5,

    marginTop: 15,
    margin: 10,

    borderRadius: 10,
    alignItems: 'center',
    backgroundColor: 'white',
    justifyContent: 'center',
    flexDirection: 'row',
  },
  imageStyles:{
      height:height/3.8,
      width:width/3,
      borderRadius:20

  },
  
  detailsStyle: {
    color: 'black',
    fontSize: 14,
  },
  detailsContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'flex-start',
    width:width/3
  },
  TitleStyle: {
    color: 'black',
    fontSize: 22,
  },
  secondcol: {
    flexDirection: 'column',
  
    flex:3,
    paddingLeft:10
   
    
  
  },
  firstCol: {
   flex:2,
   justifyContent:"center",
   alignItems:"center",
    
   
   
  },
  TopicStyle: {
    color: 'black',
    fontSize: 16,
    fontWeight: 'bold',
    color: Constants.topColor,
  },
});
export {MovieCard};
