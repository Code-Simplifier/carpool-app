import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome';
import React from 'react';
import { View, Text, TextInput, StyleSheet } from 'react-native';
import { Controller } from 'react-hook-form';

const CustomInput = (
  { 
    name, 
    control, 
    rules = {}, 
    secureTextEntry, 
    size, 
    bgColor, 
    placeholder 
  }) => {
  return (
    <Controller
        control={control}
        name={name}
        rules={rules}
        render={({ field: { value, onChange, onBlur }, fieldState: {error} }) => (
          <>
            <View style={[styles.container, { borderColor: error ? '#f74f43' : '#fafafa'}]}>
              <TextInput
                value={value}
                onChangeText={onChange}
                onBlur={onBlur}
                placeholder={placeholder}
                style={styles.input}
                secureTextEntry={secureTextEntry}
                style={[
                  size ? { marginVertical: size } : {},
                  bgColor ? { backgroundColor: bgColor } : {}
                ]}
                />
            </View>
            {
              error && <Text style={{ color: '#f74f43', alignSelf: 'stretch' }}>{ error.message || 'Error' }</Text>
            }
          </>
        )}
      />
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
