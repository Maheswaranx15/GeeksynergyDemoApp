import React from 'react';
import {View, Text, TextInput, StyleSheet, Picker, Dimensions} from 'react-native';
import Constants from "../Constants";
import { Icon } from 'react-native-elements'
const height = Dimensions.get('window').height;
const width = Dimensions.get('window').width;

const PickerComp =(props)=>{
    return(
        <View style={styles.PickerContainer}>
        <Picker
        mode="dropdown"
        selectedValue={props.selectedValue}
        style={styles.PickerStyle}
        onValueChange={(itemValue, itemIndex) =>
         
          props.onChangeValue(itemValue)
        }>
           { props.pickItems.map(
                temp=>
                <Picker.Item label={temp.label} value={temp.value} />

            )}
        
       
      </Picker>
      </View>

    )
}
const styles= StyleSheet.create ({
    PickerStyle:{
        height: 60, width: width*0.9

    },
    PickerContainer:{
        alignItems:"center",
        justifyContent:"center",
        marginRight:10,
            marginLeft:10,
            marginTop:5,
            marginBottom:5,
            borderRadius:10,
           
            borderColor:Constants.topColor,
            borderWidth:1,
    }
})

export {PickerComp}