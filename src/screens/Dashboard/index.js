import React from 'react'
import {
  View,
  Text,
  FlatList,
  TouchableOpacity,
  Image,
  ImageBackground,
} from 'react-native'

import { Header, TextInput, BottomNav } from '../../components'

import IMG from '../../assets'
import { COLOR_PALETTE } from '../../constants'
import { STYLES } from '../../style'
import { API } from '../../utils'
import { Context } from '../../model'

import styles from './styles'

const Index = function ({ navigation }) {
  const { state } = React.useContext(Context)
  const { username } = state.profile

  const [products, setProducts] = React.useState([])
  const [q, setQ] = React.useState('')

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

  const handleBookPress = item => () => {
    navigation.navigate('ProductDetail', { data: item })
  }

  const handleProfileBtnPress = () => {
    navigation.navigate('ProfileDetail')
  }

  const renderBook = ({ item, index }) => {
    if (typeof item === 'number') {
      return <View style={{ flex: 1 }} />
    }

    return (
      <TouchableOpacity
        onPress={handleBookPress(item)}
        style={styles[`bookContainer${index % 2}`]}
      >
        <ImageBackground source={{ uri: item.image }} style={styles.book}>
          <View
            style={[STYLES.overlay, { backgroundColor: 'rgba(0,0,0,0.5)' }]}
          />
          <Text style={styles.bookText}>{item.title}</Text>
        </ImageBackground>
      </TouchableOpacity>
    )
  }

  const renderProfileBtn = (
    <TouchableOpacity style={styles.profileBtn} onPress={handleProfileBtnPress}>
      <Image style={STYLES.img} source={IMG.icon.profile} />
    </TouchableOpacity>
  )

  const renderEmptyData = (
    <Text style={{ textAlign: 'center', paddingVertical: 10 }}>
      There is no data...
    </Text>
  )

  const filterProducts = products.filter(
    e => e.title.toLowerCase().indexOf(q.toLowerCase()) > -1,
  )

  return (
    <View style={{ flex: 1, backgroundColor: COLOR_PALETTE.black }}>
      <View style={styles.container}>
        <Header
          sub={`Hi, ${username}`}
          viewProps={{ style: styles.header }}
          rightComponent={renderProfileBtn}
        >
          Welcome back!
        </Header>
        <TextInput
          viewProps={{ style: styles.search }}
          inputProps={{
            placeholder: 'Search...',
            value: q,
            onChangeText: setQ,
          }}
        />
        <Text style={styles.title}>Sale Book</Text>
        <View style={{ flex: 1 }}>
          <FlatList
            data={
              filterProducts.length % 2
                ? [...filterProducts, 0]
                : filterProducts
            }
            keyExtractor={(_, idx) => `item-${idx}`}
            renderItem={renderBook}
            numColumns={2}
            contentContainerStyle={styles.booksContainer}
            ListEmptyComponent={renderEmptyData}
          />
        </View>
      </View>

      <BottomNav active={0} />
    </View>
  )
}

export default Index
