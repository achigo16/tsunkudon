/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React from 'react'
import { StatusBar } from 'react-native'

import Orientation from 'react-native-orientation-locker'
import { NavigationContainer } from '@react-navigation/native'

import AppNavigation from './src/navigation'

function App() {
  const navigationRef = React.createRef()

  React.useEffect(() => {
    Orientation.lockToPortrait()
  }, [])

  return (
    <>
      <StatusBar barStyle={'dark-content'} />

      <NavigationContainer ref={navigationRef}>
        <AppNavigation />
      </NavigationContainer>
    </>
  )
}

export default App
