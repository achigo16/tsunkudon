import React from 'react'
import { Pressable, Text } from 'react-native'

import styles from './styles'

const Index = function ({ pressableProps, textProps, children }) {
  return (
    <Pressable
      {...pressableProps}
      style={[styles.inputBtn, pressableProps?.style ?? {}]}
    >
      <Text
        {...textProps}
        style={[styles.inputBtnText, textProps?.style ?? {}]}
      >
        {children}
      </Text>
    </Pressable>
  )
}

export default Index
