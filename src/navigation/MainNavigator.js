import React from 'react'
import { createNativeStackNavigator } from '@react-navigation/native-stack'

import DashboardScreen from '../screens/Dashboard'

import AboutScreen from '../screens/About'

import ProductCartScreen from '../screens/Product/Cart'
import ProductDetailScreen from '../screens/Product/Detail'
import ProductCheckoutScreen from '../screens/Product/Checkout'

import ProfileDetailScreen from '../screens/Profile/Detail'
import ProfileEditScreen from '../screens/Profile/Edit'

const { Navigator, Screen } = createNativeStackNavigator()

const Main = () => (
  <Navigator
    initialRouteName="Dashboard"
    screenOptions={{ headerShown: false, animation: 'none' }}
  >
    <Screen name="Dashboard" component={DashboardScreen} />

    <Screen name="About" component={AboutScreen} />

    <Screen name="ProductCart" component={ProductCartScreen} />
    <Screen name="ProductDetail" component={ProductDetailScreen} />
    <Screen name="ProductCheckout" component={ProductCheckoutScreen} />

    <Screen name="ProfileDetail" component={ProfileDetailScreen} />
    <Screen name="ProfileEdit" component={ProfileEditScreen} />
  </Navigator>
)

export default Main
