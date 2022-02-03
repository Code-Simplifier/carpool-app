import React, { useState, useRef } from 'react'
import { Text, ScrollView, StyleSheet, Dimensions, View, Alert } from 'react-native'
import { FontAwesomeIcon } from "@fortawesome/react-native-fontawesome"
import { faMapMarkerAlt } from "@fortawesome/free-solid-svg-icons"
import { FormControl, Input, VStack, NativeBaseProvider } from 'native-base'
import CustomButton from '../../components/CustomButton'
import CustomInput from '../../components/CustomInput'
import KeyboardAvoider from '../../components/KeyboardAvoider'
import { useNavigation } from "@react-navigation/native";
import PhoneInput from "react-native-phone-number-input";
import { useForm, Controller } from 'react-hook-form'
import { Auth } from 'aws-amplify'

const EMAIL_REGEX = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/
const PASSWORD_REGEX = /^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9]).{8,}$/
const PHONE_REGEX = /^[+]*[(]{0,1}[0-9]{1,4}[)]{0,1}[-\s\./0-9]*$/

const RegisterScreen = () => {

    const { control, handleSubmit } =  useForm()
    
    const phoneInput = useRef(null);

    const navigation = useNavigation()

    const [pValue, setpValue] = useState("");

    const onRegisterPressed = async (data) => {
        const {username, password, email, phone} = data
        const formattedPhoneNumber = `+${phoneInput.current?.getCallingCode()}${phone}`
        try {
            await Auth.signUp({
                username,
                password,
                attributes: {
                    email, preferred_username: username, phone_number: formattedPhoneNumber
                }
            })
            navigation.navigate('ConfirmEmail', {username} )
        } catch (e) {Alert.alert('Error', e.message)}
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
                                              pattern: {value: EMAIL_REGEX, message: 'Email is invalid'}
                                            }}
                                        />
                                    </FormControl>
                                    <FormControl style={styles.form}>
                                        <FormControl.Label>Password</FormControl.Label>
                                        <CustomInput 
                                            name="password"
                                            control={control}
                                            secureTextEntry={true} 
                                            size={10} 
                                            rules={{
                                              pattern: {value: PASSWORD_REGEX, message: 'Password must be 8 characters long and have numbers, uppercase and lowercase letters.'},
                                              required: {value: true, message: 'Password was not specified'}
                                            }}
                                        />
                                    </FormControl>
                                    <FormControl style={styles.form}>
                                        <FormControl.Label>Phone Number</FormControl.Label>
                                        <Controller
                                            name='phone'
                                            control={control}
                                            rules={{
                                                required: 'Phone Number was not specified',
                                                pattern: {value: PHONE_REGEX, message: 'Phone number is invalid'}
                                            }}
                                            render={({field: {value, onChange, onBlur}, fieldState: {error}}) => (
                                                <>
                                                    <PhoneInput
                                                        onChangeText={onChange}
                                                        value={value}
                                                        ref={phoneInput}
                                                        defaultValue={pValue}
                                                        defaultCode="IN"
                                                        onChangeFormattedText={(text) => {
                                                            setpValue(text);
                                                        }}
                                                        placeholder=' '
                                                        withDarkTheme
                                                        withShadow
                                                        disableArrowIcon={true}
                                                        textContainerStyle={[ error && {color: '#f74f43', borderColor: '#f74f43'} ]}
                                                        codeTextStyle={{ color: '#27236e' }}
                                                        flagButtonStyle={{ backgroundColor: '#fafafa' }}
                                                        containerStyle={{ marginTop: 10, alignSelf: 'center'}}
                                                    />
                                                    {
                                                        error && <Text style={{ color: '#f74f43', alignSelf: 'stretch' }}>{ error.message || 'Error' }</Text>
                                                    }
                                                </>
                                            )}
                                            
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
