import React from 'react'
import { View, TextInput } from 'react-native'

import { COLOR_PALETTE } from '../../constants'

import styles from './styles'

const Index = function ({ viewProps = {}, inputProps = {} }) {
  return (
    <View
      {...viewProps}
      style={[styles.inputContainer, viewProps?.style ?? {}]}
    >
      <TextInput
        {...inputProps}
        style={[styles.input, inputProps?.style ?? {}]}
        placeholderTextColor={COLOR_PALETTE.black}
      />
    </View>
  )
}

export default Index
