import { StyleSheet } from 'react-native'

import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs"
import { NavigationContainer } from "@react-navigation/native"

import Ionicons from 'react-native-vector-icons/Ionicons'

import Login from './src/screens/Login'
import Register from './src/screens/Register'
import Home from './src/screens/Home'
import Profile from './src/screens/Profile'
import ForgotPassword from './src/screens/ForgotPassword'
import NewPassword from './src/screens/NewPassword'
import ConfirmEmail from './src/screens/ConfirmEmail';

import Amplify, { Auth } from 'aws-amplify'
import awsconfig from './src/aws-exports'
import DestinationSearch from './src/screens/DestinationSearch';


const Tab = createBottomTabNavigator()
const Stack = createNativeStackNavigator()

Amplify.configure(awsconfig)

const HomeTabs = () => {
  return (
    <Tab.Navigator
      screenOptions={{
        headerShown: false,
        tabBarShowLabel: false,
        tabBarInactiveTintColor: 'grey',
        tabBarActiveTintColor: '#27236e'
      }}
    >
      {/* <Tab.Screen name='Login' component={Login} /> */}
      <Tab.Screen name='Home1' component={Home} options={{
        tabBarIcon: ({ color, size }) => (<Ionicons name='home' color={color} size={size} />)
      }} />
      {/* <Tab.Screen name='Register' component={Register} /> */}
      <Tab.Screen name='Profile' component={Profile} options={{
        tabBarIcon: ({ color, size }) => (<Ionicons name='person' color={color} size={size} />)
      }} />
    </Tab.Navigator>
  )
}

const App = () => {
  return (
    <NavigationContainer >
      <Stack.Navigator screenOptions={{ headerShown: false }}>
        <Stack.Screen name='Login' component={Login} />
        <Stack.Screen name='Home' component={HomeTabs} />
        <Stack.Screen name='Destination' component={DestinationSearch} />
        <Stack.Screen name='Register' component={Register} />
        <Stack.Screen name='ForgotPass' component={ForgotPassword} />
        <Stack.Screen name='NewPass' component={NewPassword} />
        <Stack.Screen name='ConfirmEmail' component={ConfirmEmail} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
// const signUpConfig = {
//   header: ' ',
//   hideAllDefault: true,
//   signUpFields: [
//     {
//       label: 'User',
//       key: 'preferred_username',
//       required: true,
//       displayOrder: 1,
//       type: 'string'
//     },
//     {
//       label: 'Email',
//       key: 'email',
//       required: true,
//       displayOrder: 2,
//       type: 'string'
//     },
//     {
//       label: 'Password',
//       key: 'password',
//       required: true,
//       displayOrder: 3,
//       type: 'password'
//     },
//     {
//       label: 'Phone Number',
//       key: 'phone_number',
//       required: true,
//       displayOrder: 4,
//       type: 'string'
//     },
//   ]
// }

export default App

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',

  },
});
