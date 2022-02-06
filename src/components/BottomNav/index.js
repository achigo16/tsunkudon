import React from 'react'
import { View, Pressable, Image, Text } from 'react-native'

import { useNavigation } from '@react-navigation/native'

import IMG from '../../assets'
import { STYLES } from '../../style'

import styles from './styles'

const Index = function ({ active = 0, isAdmin }) {
  const navigation = useNavigation()

  const handleNavigateToHome = () => {
    navigation.navigate('Dashboard')
  }

  const handleNavigateToCart = () => {
    navigation.navigate('ProductCart')
  }

  const handleNavigateToAbout = () => {
    navigation.navigate('About')
  }

  return (
    <View style={styles.container}>
      <Pressable onPress={handleNavigateToHome} style={styles.button}>
        <View style={styles.buttonImage}>
          <Image style={STYLES.img} source={IMG.icon.dashboard} />
        </View>
        <Text
          style={[styles.buttonText, active === 0 && styles.buttonTextActive]}
        >
          Dashboard
        </Text>
      </Pressable>
      {!isAdmin && (
        <Pressable onPress={handleNavigateToCart} style={styles.button}>
          <View style={styles.buttonImage}>
            <Image style={STYLES.img} source={IMG.icon.cart} />
          </View>
          <Text
            style={[styles.buttonText, active === 1 && styles.buttonTextActive]}
          >
            Cart
          </Text>
        </Pressable>
      )}
      <Pressable onPress={handleNavigateToAbout} style={styles.button}>
        <View style={styles.buttonImage}>
          <Image style={STYLES.img} source={IMG.icon.about} />
        </View>
        <Text
          style={[styles.buttonText, active === 2 && styles.buttonTextActive]}
        >
          About
        </Text>
      </Pressable>
    </View>
  )
}

export default Index
