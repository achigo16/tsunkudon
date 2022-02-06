import React from 'react'
import { View, TouchableOpacity, Image } from 'react-native'

import { Header, TextInput, Button } from '../../../components'

import IMG from '../../../assets'
import { COLOR_PALETTE } from '../../../constants'
import { STYLES } from '../../../style'
import { API } from '../../../utils'

import { input_data as INPUT_DATA } from './config'

import styles from './styles'

const Index = function ({ navigation, route }) {
  const [inputData, setInputData] = React.useState(INPUT_DATA)
  const { data } = route?.params ?? {}

  React.useEffect(() => {
    if (data) {
      const { title, image, price, quantity, sinopsis } = data
      const newData = [title, image, price, quantity, sinopsis]

      setInputData(prev =>
        prev.map((prevItem, prevIndex) => ({
          ...prevItem,
          value: newData[prevIndex],
        })),
      )
    }
  }, [data])

  const handleSubmit = async () => {
    const input = {
      title: inputData[0].value,
      image: inputData[1].value,
      price: inputData[2].value,
      quantity: inputData[3].value,
      sinopsis: inputData[4].value,
    }

    let is_success = false

    if (data) {
      is_success = await API.updateProduct(data.id, input)
    } else {
      is_success = await API.setProduct(input)
    }

    if (is_success) {
      navigation.goBack()
    }
  }

  const handleChangeText = index => text => {
    setInputData(prev =>
      prev.map((prevItem, prevIndex) => ({
        ...prevItem,
        value: prevIndex === index ? text : prevItem.value,
        error:
          prevIndex === index
            ? { isError: false, msg: undefined }
            : prevItem.error,
      })),
    )
  }

  const renderInput = (item, index) => {
    const { title, ...inputProps } = item

    return (
      <TextInput
        key={`input-${index}`}
        inputProps={{
          ...inputProps,
          placeholder: title,
          style: inputProps?.style ?? {},
          onChangeText: handleChangeText(index),
        }}
      />
    )
  }

  return (
    <View style={{ flex: 1, backgroundColor: COLOR_PALETTE.black }}>
      <TouchableOpacity style={styles.backBtn} onPress={navigation.goBack}>
        <Image style={STYLES.img} source={IMG.icon.back} />
      </TouchableOpacity>

      <View style={styles.container}>
        <Header sub="Product" viewProps={{ style: styles.header }}>
          {data ? 'Edit' : 'Add'} Product
        </Header>
        <View style={{ flex: 1, marginTop: 30 }}>
          {inputData.map(renderInput)}

          <Button
            pressableProps={{ onPress: handleSubmit, style: { marginTop: 40 } }}
          >
            Submit
          </Button>
        </View>
      </View>
    </View>
  )
}

export default Index
