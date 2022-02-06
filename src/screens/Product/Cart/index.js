import React from 'react'
import { View, FlatList, Text } from 'react-native'

import { Header, Button, BottomNav } from '../../../components'

import { COLOR_PALETTE } from '../../../constants'
import { Context } from '../../../model'
import { API } from '../../../utils'

import styles from './styles'

const Index = function ({ navigation }) {
  const { state, action } = React.useContext(Context)
  const { cart } = state

  const [products, setProducts] = React.useState([])

  React.useEffect(() => {
    const getProducts = async () => {
      const resProducts = await API.getProducts()

      if (resProducts) {
        setProducts(cart.map(item => resProducts.find(({ id }) => item === id)))
      }
    }

    getProducts()
  }, [cart])

  const handleCheckoutBtnPress = async () => {
    for (let index = 0; index < cart.length; index++) {
      API.deleteProduct(cart[index])
    }

    action.deleteCart()
  }

  const renderBook = ({ item, index }) => {
    return (
      <View style={styles.itemContainer}>
        <Text style={styles.itemTextNumber}>{index + 1}.</Text>
        <Text style={styles.itemTextName}>{item.title}</Text>
        <Text style={styles.itemTextPrice}>Rp. {item.price}</Text>
      </View>
    )
  }

  const renderEmptyData = (
    <Text style={{ textAlign: 'center', paddingVertical: 10 }}>
      There is no data...
    </Text>
  )

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
            data={products}
            keyExtractor={(_, idx) => `item-${idx}`}
            renderItem={renderBook}
            contentContainerStyle={styles.itemsContainer}
            ListEmptyComponent={renderEmptyData}
          />
        </View>

        {products.length > 0 && (
          <View style={styles.footer}>
            <View style={styles.itemContainer}>
              <Text style={styles.itemTextName}>Total</Text>
              <Text style={styles.itemTextPrice}>
                Rp.{' '}
                {products.reduce((accu, item) => {
                  return Number(item.price) + accu
                }, 0)}
              </Text>
            </View>
            <Button
              pressableProps={{
                onPress: handleCheckoutBtnPress,
              }}
            >
              Checkout
            </Button>
          </View>
        )}
      </View>

      <BottomNav active={1} />
    </View>
  )
}

export default Index
