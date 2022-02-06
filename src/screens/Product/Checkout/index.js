import React from 'react'
import { View, FlatList, Text } from 'react-native'

import { Header, Button } from '../../../components'

import { COLOR_PALETTE } from '../../../constants'

import styles from './styles'

const Index = function ({ navigation }) {
  const handleCheckoutBtnPress = () => {
    navigation.navigate('ProductCheckout')
  }

  const renderBook = ({ item, index }) => {
    return (
      <View style={styles.itemContainer}>
        <Text style={styles.itemTextNumber}>{index + 1}.</Text>
        <Text style={styles.itemTextName}>{item}</Text>
        <Text style={styles.itemTextPrice}>Rp. {item}</Text>
      </View>
    )
  }

  return (
    <View style={{ flex: 1, backgroundColor: COLOR_PALETTE.black }}>
      <View style={styles.container}>
        <Header sub="Product" viewProps={{ style: styles.header }}>
          Checkout
        </Header>

        <View style={{ flex: 1, marginTop: 20 }}>
          <View style={[styles.itemContainer, { paddingHorizontal: 30 }]}>
            <Text style={[styles.itemTextNumber, { fontWeight: 'bold' }]}>
              No.
            </Text>
            <Text style={[styles.itemTextName, { fontWeight: 'bold' }]}>
              Product Name
            </Text>
            <Text style={[styles.itemTextPrice, { fontWeight: 'bold' }]}>
              Price
            </Text>
          </View>

          <FlatList
            data={[0, 1, 2, 3]}
            keyExtractor={(_, idx) => `item-${idx}`}
            renderItem={renderBook}
            contentContainerStyle={styles.itemsContainer}
          />
        </View>

        <View style={styles.footer}>
          <View style={styles.itemContainer}>
            <Text style={styles.itemTextName}>Total</Text>
            <Text style={styles.itemTextPrice}>Rp. {0}</Text>
          </View>
          <Button
            pressableProps={{
              onPress: handleCheckoutBtnPress,
            }}
          >
            Checkout
          </Button>
        </View>
      </View>
    </View>
  )
}

export default Index
