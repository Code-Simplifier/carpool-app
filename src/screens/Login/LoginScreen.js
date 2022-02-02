import React from 'react'
import { Text, ScrollView, StyleSheet, Dimensions, View, TextInput } from 'react-native'
import { FontAwesomeIcon } from "@fortawesome/react-native-fontawesome"
import { faMapMarkerAlt } from "@fortawesome/free-solid-svg-icons"
import { FormControl, VStack, NativeBaseProvider } from 'native-base'
import CustomButton from '../../components/CustomButton'
import CustomInput from '../../components/CustomInput'
import KeyboardAvoider from '../../components/KeyboardAvoider'
import { useNavigation } from "@react-navigation/native"
import { useForm } from 'react-hook-form'
// import { Auth } from 'aws-amplify'


const LoginScreen = () => {

    const { control, handleSubmit, formState: {errors} } = useForm()
    // console.log(errors)
    const navigation = useNavigation()
    const onLoginPressed = () => {
        // const response = await Auth.signIn(data.username, data.password)
        // console.log(data)
        navigation.navigate('Home')
    } 
    const onRegisterPressed = () => {
        navigation.navigate('Register')
    }
    const onForgotPasswordPressed = () => {
        navigation.navigate('ForgotPass')
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
                        <Text style={styles.text}>Welcome</Text>
                        <Text>Don't have an account? <Text style={{ color:'#27236e' }} onPress={onRegisterPressed}>Register now</Text></Text>
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
                                                    message: 'Password must be 8 characters long.'
                                                }
                                            }}
                                        />
                                    </FormControl>
                                    <Text style={{ color:'#27236e', alignSelf: 'center' }} onPress={onForgotPasswordPressed}>Forgot Password?</Text>
                                    <CustomButton text="Login" onPress={handleSubmit(onLoginPressed)}  />
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

export default LoginScreen
