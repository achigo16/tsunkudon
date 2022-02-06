import React from 'react'
import { View, Text, Image, TouchableOpacity, Alert } from 'react-native'

import { Header, Button } from '../../../components'

import IMG from '../../../assets'
import { COLOR_PALETTE } from '../../../constants'
import { STYLES } from '../../../style'
import { Context } from '../../../model'

import styles from './styles'

const Index = function ({ navigation, route }) {
  const { action } = React.useContext(Context)

  const { data } = route?.params ?? {}

  const handleAddToCart = () => {
    action.addCart(data.id)

    Alert.alert('Success', 'Book success add to cart', [
      {
        text: 'OK',
        onPress: () => {
          navigation.goBack()
        },
      },
    ])
  }

  return (
    <View style={{ flex: 1, backgroundColor: COLOR_PALETTE.black }}>
      <TouchableOpacity style={styles.backBtn} onPress={navigation.goBack}>
        <Image style={STYLES.img} source={IMG.icon.back} />
      </TouchableOpacity>

      <View style={styles.container}>
        <Header sub="Product" viewProps={{ style: styles.header }}>
          {data?.title ?? 'Name Book'}
        </Header>

        <View style={styles.detailContainer}>
          <View style={styles.bookContainer}>
            <View style={styles.book}>
              <Image
                style={[STYLES.img, { resizeMode: 'cover' }]}
                source={{ uri: data?.image ?? null }}
              />
            </View>
          </View>

          <View style={{ flex: 1 }}>
            <View style={styles.detailTextContainer}>
              <Text style={styles.detailTextName}>Price</Text>
              <Text style={styles.detailTextValue}>Rp. {data?.price ?? 0}</Text>
            </View>
            <View style={styles.detailTextContainer}>
              <Text style={styles.detailTextName}>Quantity</Text>
              <Text style={styles.detailTextValue}>{data?.quantity ?? 0}</Text>
            </View>
          </View>
        </View>

        <View style={{ flex: 1 }}>
          <Text style={styles.title}>Sinopsis</Text>
          <Text style={styles.sinopsis}>{data?.sinopsis ?? 'Sinopsis'}</Text>
        </View>
        <Button pressableProps={{ onPress: handleAddToCart }}>
          Add to cart
        </Button>
      </View>
    </View>
  )
}

export default Index
