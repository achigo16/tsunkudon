import React from 'react'
import { createNativeStackNavigator } from '@react-navigation/native-stack'

import SignInScreen from '../screens/Auth/SignIn'
import SignUpScreen from '../screens/Auth/SignUp'

const { Navigator, Screen } = createNativeStackNavigator()

const Auth = () => (
  <Navigator
    initialRouteName="SignIn"
    screenOptions={{ headerShown: false, animation: 'none' }}
  >
    <Screen name="SignIn" component={SignInScreen} />
    <Screen name="SignUp" component={SignUpScreen} />
  </Navigator>
)

export default Auth
