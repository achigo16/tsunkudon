import React from 'react'

import { createNativeStackNavigator } from '@react-navigation/native-stack'

const { Navigator, Screen } = createNativeStackNavigator()

import RootContext, { Context } from '../model'

import { SCREENS } from '../constants'

import AuthNavigator from './AuthNavigator'
import MainNavigator from './MainNavigator'
import AdminNavigator from './AdminNavigator'

import SplashScreen from '../screens/Splash'

const Content = () => {
  const { state } = React.useContext(Context)

  const getScreen = index => {
    switch (index) {
      case 0:
        return <Screen name={SCREENS[index]} component={SplashScreen} />
      case 1:
        return <Screen name={SCREENS[index]} component={AuthNavigator} />
      case 2:
        return <Screen name={SCREENS[index]} component={MainNavigator} />
      case 3:
        return <Screen name={SCREENS[index]} component={AdminNavigator} />
    }
  }

  return (
    <Navigator
      initialRouteName={SCREENS[0]}
      screenOptions={{ headerShown: false }}
    >
      {getScreen(state.screen)}
    </Navigator>
  )
}

function Root() {
  return (
    <RootContext>
      <Content />
    </RootContext>
  )
}

export default Root
