/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, { Component } from 'react';
import {
  Dimensions,
  TouchableOpacity,
  View,
  Text,
  StatusBar,
} from 'react-native';
import Constants from "../Constants"
import Icon from 'react-native-vector-icons/MaterialIcons';

const height = Dimensions.get('screen').height;
const width= Dimensions.get("window").width

const HeaderComp =(props)=>{
    return(
      <View style={{width:"100%", alignItems:"center", flexDirection:"row", height:height/12, backgroundColor:Constants.topColor}}> 
      <View style={{flex:1,  position:"absolute", margin:20}}>
       <TouchableOpacity onPress={props.onPress}>
          <Icon name={'dehaze'} size={35} color={'white'} />
          </TouchableOpacity>
          </View>
          <View style={{flex:5, alignItems:"center", justifyContent:"center", }}>
        <Text style={ {color:"white", fontSize:20}}>
          {props.headerText}
          </Text>
          </View>
        </View>
    )
  }


export { HeaderComp};
