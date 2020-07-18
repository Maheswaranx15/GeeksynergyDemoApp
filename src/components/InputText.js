import React from 'react';
import {View, Text, TextInput, StyleSheet} from 'react-native';
import Constants from "../Constants";
import { Icon } from 'react-native-elements'


const InputText = ({label, value, onChangeText, placeholder,securetext, IconName, IconType,keyboardType}) => {
  const {Labelstyle, inputStyle, InputContainerStyle} = Styles;
  return (
    <View style={InputContainerStyle}>
        
        <Icon 
        name= {IconName}
        type= {IconType}
        size={25}
        color={Constants.topColor}
        style={{margin:10}}
        />

     
      <TextInput
        secureTextEntry={securetext}
        placeholder={placeholder}
        style={inputStyle}
        value={value}
        keyboardType={keyboardType}
        onChangeText={onChangeText}
      />
    </View>
  );
};
const Styles = StyleSheet.create(
    {
        inputStyle: {
            color: '#000',
            paddingRight: 5,
            paddingLeft: 10,
            fontSize: 18,
            flex: 3,
            
          },
          
          InputContainerStyle: {
            height: 60,
            marginRight:10,
            marginLeft:10,
            marginTop:5,
            marginBottom:5,
            borderRadius:10,
           
            borderColor:Constants.topColor,
            borderWidth:1,
            flexDirection: 'row',
            alignItems: 'center',
          },
    }
  
)


export {InputText};
