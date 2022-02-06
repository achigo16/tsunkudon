import React from 'react'
import { View, Text } from 'react-native'

import styles from './styles'

const Index = function ({
  viewProps,
  sub,
  children,
  rightComponent,
  leftComponent,
}) {
  return (
    <View
      {...viewProps}
      style={[
        { flexDirection: 'row', alignItems: 'center' },
        viewProps?.style ?? {},
      ]}
    >
      {leftComponent}

      <View style={{ flex: 1 }}>
        <Text style={styles.subText}>{sub}</Text>
        <Text style={styles.title}>{children}</Text>
      </View>

      {rightComponent}
    </View>
  )
}

export default Index
