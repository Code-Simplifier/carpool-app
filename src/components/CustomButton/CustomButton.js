import React from 'react';
import {View, Text, StyleSheet, Pressable} from 'react-native';

const CustomButton = ({onPress, text, type='PRIMARY', bgColor, fgColor}) => {
  return (
    <View style={styles.view}>
      <Pressable
        onPress={onPress}
        style={[
          styles.container,
          styles[`container_${type}`],
          // bgColor ? {backgroundColor: bgColor} : {},
        ]}>
        <Text
          style={[
            styles.text,
            styles[`text_${type}`],
            // fgColor ? {color: fgColor} : {},
          ]}>
          {text}
        </Text>
      </Pressable>
    </View>
    
  );
};

const styles = StyleSheet.create({
  view: {
    // alignSelf: 'center'
    alignItems: 'center'
  },
  container: {
    width: '90%',

    padding: 15,
    marginVertical: 20,
    margin: 5,

    alignItems: 'center',
    borderRadius: 5,
  },

  container_PRIMARY: {
    backgroundColor: '#27236e',
    marginBottom: 100,

  },

  container_SECONDARY: {
    borderColor: '#27236e',
    borderWidth: 2,
  },

  container_TERTIARY: {
    padding: 15,
    marginVertical: 1,
    margin: 5,
  },

  text: {
    // fontWeight: 'bold',
    color: 'white',
  },

  text_SECONDARY: {
    color: '#27236e',
  },

  text_TERTIARY: {
    color: '#999',
    alignSelf: 'flex-start'
  },
  text_DANGER: {
    color:'#e63d0e'
  },
});

export default CustomButton;
