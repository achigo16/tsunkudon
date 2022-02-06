import React from 'react'
import {
  View,
  TouchableOpacity,
  Image,
  FlatList,
  Text,
  Alert,
} from 'react-native'

import { Header, BottomNav } from '../../../components'

import IMG from '../../../assets'
import { COLOR_PALETTE } from '../../../constants'
import { STYLES } from '../../../style'
import { Context } from '../../../model'
import { API } from '../../../utils'

import styles from './styles'

const Index = function ({ navigation }) {
  const { action, state } = React.useContext(Context)
  const { username } = state.profile

  const [products, setProducts] = React.useState([])

  const getProducts = async () => {
    const resProducts = await API.getProducts()

    if (resProducts) {
      setProducts(resProducts)
    }
  }

  React.useEffect(() => {
    getProducts()
  }, [])

  React.useEffect(() => {
    const unsubscribe = navigation.addListener('transitionEnd', e => {
      if (!e.data.closing) {
        getProducts()
      }
    })

    return unsubscribe
  }, [navigation])

  const handleLogoutBtnPress = () => {
    action.deleteUser()
    action.switchNavigate('Auth')
  }

  const handleNavigateToAddProduct = () => {
    navigation.navigate('Product')
  }

  const handleEditData = id => async () => {
    const resProducts = await API.getProduct({ id })

    navigation.navigate('Product', { data: resProducts })
  }

  const handleDeleteData = id => () => {
    Alert.alert('Warning', 'Are you sure to delete data?', [
      { text: 'Cancel', style: 'cancel' },
      {
        text: 'OK',
        onPress: async () => {
          await API.deleteProduct(id)
          getProducts()
        },
      },
    ])
  }

  const renderData = ({ item, index }) => {
    return (
      <View style={styles.itemContainer}>
        <Text style={styles.itemTextNumber}>{index + 1}.</Text>
        <Text style={styles.itemTextName}>{item?.title ?? ''}</Text>
        <View style={styles.itemAction}>
          <View style={{ flexDirection: 'row' }}>
            <TouchableOpacity
              style={[styles.smallIconBtn, { marginRight: 10 }]}
              onPress={handleEditData(item.id)}
            >
              <Image style={STYLES.img} source={IMG.icon.edit} />
            </TouchableOpacity>
            <TouchableOpacity
              style={styles.smallIconBtn}
              onPress={handleDeleteData(item.id)}
            >
              <Image style={STYLES.img} source={IMG.icon.trash} />
            </TouchableOpacity>
          </View>
        </View>
      </View>
    )
  }

  const renderLogoutBtn = (
    <View style={{ flexDirection: 'row' }}>
      <TouchableOpacity
        style={[styles.profileBtn, { marginRight: 10 }]}
        onPress={handleNavigateToAddProduct}
      >
        <Image style={STYLES.img} source={IMG.icon.add} />
      </TouchableOpacity>
      <TouchableOpacity
        style={styles.profileBtn}
        onPress={handleLogoutBtnPress}
      >
        <Image style={STYLES.img} source={IMG.icon.logout} />
      </TouchableOpacity>
    </View>
  )

  const renderEmptyData = (
    <Text style={{ textAlign: 'center', paddingVertical: 10 }}>
      There is no data...
    </Text>
  )

  return (
    <View style={{ flex: 1, backgroundColor: COLOR_PALETTE.black }}>
      <View style={styles.container}>
        <Header
          sub={`Hi, ${username}`}
          viewProps={{ style: styles.header }}
          rightComponent={renderLogoutBtn}
        >
          Welcome back!
        </Header>

        <View style={{ flex: 1, marginTop: 20 }}>
          <View style={[styles.itemContainer, { paddingHorizontal: 30 }]}>
            <Text style={[styles.itemTextNumber, { fontWeight: 'bold' }]}>
              No.
            </Text>
            <Text style={[styles.itemTextName, { fontWeight: 'bold' }]}>
              Product Name
            </Text>
            <Text style={[styles.itemAction, { fontWeight: 'bold' }]}>
              Action
            </Text>
          </View>

          <FlatList
            data={products}
            keyExtractor={(_, idx) => `item-${idx}`}
            renderItem={renderData}
            contentContainerStyle={styles.itemsContainer}
            ListEmptyComponent={renderEmptyData}
          />
        </View>
      </View>

      <BottomNav active={0} isAdmin={true} />
    </View>
  )
}

export default Index
