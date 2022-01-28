import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome';
import React from 'react';
import {View, Text, TextInput, StyleSheet} from 'react-native';

const CustomInput = ({value, setValue, secureTextEntry, placeholder, size, bgColor}) => {
  return (
    <View style={styles.container}>
      {/* <FontAwesomeIcon icon={icon} size={10} /> */}
      <TextInput
        value={value}
        onChangeText={setValue}
        placeholder={placeholder}
        style={styles.input}
        secureTextEntry={secureTextEntry}
        style={[
          size ? { marginVertical: size } : {},
          // brColor ? { borderColor: brColor } : {},
          bgColor ? { backgroundColor: bgColor } : {}
        ]}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#fafafa',
    width: '100%',

    borderWidth: 1,
    borderRadius: 10,
    borderColor: '#fafafa',

    paddingHorizontal: 20,
    marginVertical: 6,
  },
  input: {},
});

export default CustomInput;
