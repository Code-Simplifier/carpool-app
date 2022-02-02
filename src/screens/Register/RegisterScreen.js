import React, { useState, useRef } from 'react'
import { Text, ScrollView, StyleSheet, Dimensions, View } from 'react-native'
import { FontAwesomeIcon } from "@fortawesome/react-native-fontawesome"
import { faMapMarkerAlt } from "@fortawesome/free-solid-svg-icons"
import { FormControl, Input, VStack, NativeBaseProvider } from 'native-base'
import CustomButton from '../../components/CustomButton'
import CustomInput from '../../components/CustomInput'
import KeyboardAvoider from '../../components/KeyboardAvoider'
import { useNavigation } from "@react-navigation/native";
import PhoneInput from "react-native-phone-number-input";
import { useForm } from 'react-hook-form'

const RegisterScreen = () => {

    const { control, handleSubmit } =  useForm()

    const phoneInput = useRef(null);

    const navigation = useNavigation()

    const [value, setValue] = useState("");

    const onRegisterPressed = () => { 
        navigation.navigate('ConfirmEmail')
    }
    return (
        <KeyboardAvoider>
            <ScrollView style={styles.container} showsVerticalScrollIndicator={false}>
                <View style={styles.topView}>
                    <FontAwesomeIcon icon={faMapMarkerAlt} size={60} color='white' />
                    <Text style={styles.appName}>Carpool App</Text>
                </View>
                <View style={styles.bottomView}>
                    <View style={{ padding: 40 }}>
                        <Text style={styles.text}>Hello there</Text>
                        <Text>Already have an account? <Text style={{ color: '#27236e' }} onPress={() => navigation.navigate('Login')}>Login now</Text></Text>
                        <View style={{ marginTop: 10 }}>
                            <NativeBaseProvider>
                                <VStack>
                                    <FormControl style={styles.form}>
                                        <FormControl.Label>Username</FormControl.Label>
                                        <CustomInput 
                                            name="username"
                                            control={control}
                                            secureTextEntry={false} 
                                            size={10} 
                                            rules={{
                                              required: 'Username was not specified',
                                              minLength: {
                                                value: 5,
                                                message: 'Username must be 5 characters long'
                                              }  
                                            }}
                                        />
                                        {/* <CustomInput secureTextEntry={false} size={10} /> */}
                                    </FormControl>
                                    <FormControl style={styles.form}>
                                        <FormControl.Label>Email</FormControl.Label>
                                        <CustomInput 
                                            name="email"
                                            control={control}
                                            secureTextEntry={false} 
                                            size={10} 
                                            rules={{
                                              required: 'Email was not specified',
                                            }}
                                        />
                                        {/* <CustomInput secureTextEntry={false} size={10} /> */}
                                    </FormControl>
                                    <FormControl style={styles.form}>
                                        <FormControl.Label>Password</FormControl.Label>
                                        <CustomInput 
                                            name="password"
                                            control={control}
                                            secureTextEntry={true} 
                                            size={10} 
                                            rules={{
                                              required: 'Password was not specified',
                                              minLength: {
                                                value: 8,
                                                message: 'Username must be 8 characters long'
                                              }  
                                            }}
                                        />
                                        {/* <CustomInput secureTextEntry={true} size={10} /> */}
                                    </FormControl>
                                    <FormControl style={styles.form}>
                                        <FormControl.Label>Phone Number</FormControl.Label>
                                        <PhoneInput
                                            ref={phoneInput}
                                            defaultValue={value}
                                            defaultCode="IN"
                                            onChangeFormattedText={(text) => {
                                                setValue(text);
                                            }}
                                            placeholder=' '
                                            withDarkTheme
                                            withShadow
                                            disableArrowIcon={true}
                                            textContainerStyle={{ color: '#27236e' }}
                                            codeTextStyle={{ color: '#27236e' }}
                                            flagButtonStyle={{ backgroundColor: '#fafafa' }}
                                            containerStyle={{ marginTop: 10, alignSelf: 'center'}}
                                        />
                                    </FormControl>
                                    <CustomButton text="Register" onPress={handleSubmit(onRegisterPressed)} />
                                </VStack>
                            </NativeBaseProvider>
                        </View>
                    </View>
                </View>
            </ScrollView>
        </KeyboardAvoider>
    )
}

const styles = StyleSheet.create({
    text: {
        color: '#27236e',
        fontSize: 34,
    },
    topView: {
        backgroundColor: '#27236e',
        height: Dimensions.get('window').height / 2.5,
        alignItems: 'center',
        justifyContent: 'center'
    },
    bottomView: {
        flex: 1.5,
        backgroundColor: 'white',
        bottom: 50,
        borderTopStartRadius: 60,
        borderTopEndRadius: 60,
    },
    appName: {
        color: 'white',
        fontSize: 40,
        fontWeight: 'bold',
    },
    form: { marginVertical: 5 },
    input: { borderRadius: 10, borderColor: '#27236e' },
    container: {
        backgroundColor: '#fff'
    }
})

export default RegisterScreen
