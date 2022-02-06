import React from 'react'
import { createNativeStackNavigator } from '@react-navigation/native-stack'

import DashboardScreen from '../screens/Admin/Dashboard'
import ProductScreen from '../screens/Admin/Product'
import AboutScreen from '../screens/About'

const { Navigator, Screen } = createNativeStackNavigator()

const Admin = () => (
  <Navigator
    initialRouteName="Dashboard"
    screenOptions={{ headerShown: false, animation: 'none' }}
  >
    <Screen name="Dashboard" component={DashboardScreen} />
    <Screen name="Product" component={ProductScreen} />
    <Screen name="About" component={AboutScreen} />
  </Navigator>
)

export default Admin
