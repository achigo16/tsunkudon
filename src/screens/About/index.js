import React from 'react'
import { View, Text } from 'react-native'

import { BottomNav, Logo } from '../../components'

import { COLOR_PALETTE } from '../../constants'
import { Context } from '../../model'

import styles from './styles'

const Index = function ({ navigation }) {
  const { state } = React.useContext(Context)

  return (
    <View style={{ flex: 1, backgroundColor: COLOR_PALETTE.black }}>
      <View style={styles.container}>
        <Logo />

        <Text style={styles.topText}>
          Tsunkudon is an application created to facilitate book buying and
          selling.
        </Text>
        <Text style={styles.bottomText}>
          Created by Adityawan Chandra with love ❤️
        </Text>
        <Text style={styles.copyright}>
          Copyright by Adityawan Chandra_19552011236
        </Text>
      </View>

      <BottomNav active={2} isAdmin={state?.profile?.username === 'admin'} />
    </View>
  )
}

export default Index
