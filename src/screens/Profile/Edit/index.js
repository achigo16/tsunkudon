import React from 'react'
import { View, TouchableOpacity, Image } from 'react-native'

import { Header, TextInput, Button } from '../../../components'

import IMG from '../../../assets'
import { COLOR_PALETTE } from '../../../constants'
import { STYLES } from '../../../style'
import { Context } from '../../../model'

import { input_data as INPUT_DATA } from './config'

import styles from './styles'
import { API } from '../../../utils'

const Index = function ({ navigation }) {
  const { action, state } = React.useContext(Context)
  const { profile } = state

  const [inputData, setInputData] = React.useState(INPUT_DATA)

  React.useEffect(() => {
    const getUserDetail = async () => {
      const detailUser = await API.getUser(profile)

      const { name, username } = detailUser
      const newData = [name, username]

      setInputData(prev =>
        prev.map((prevItem, prevIndex) => ({
          ...prevItem,
          value: newData[prevIndex],
        })),
      )
    }

    getUserDetail()
  }, [profile])

  const handleSubmit = async () => {
    const password =
      inputData[2].value === '' ? profile.password : inputData[2].value
    const input = {
      name: inputData[0].value,
      username: inputData[1].value,
      password,
    }

    await API.updateUser(profile, input)
    await action.setUser({ username: inputData[1].value, password })

    navigation.goBack()
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
        <Header sub="Account" viewProps={{ style: styles.header }}>
          Edit Account
        </Header>
        <View style={{ flex: 1, marginTop: 30 }}>
          {inputData.map(renderInput)}
        </View>

        <Button pressableProps={{ onPress: handleSubmit }}>Submit</Button>
      </View>
    </View>
  )
}

export default Index
