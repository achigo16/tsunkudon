import React from 'react'
import { View, Text, TouchableOpacity, Image } from 'react-native'

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

  const handleLogOut = () => {
    action.deleteUser()
    action.deleteCart()
    action.switchNavigate('Auth')
  }

  const handleEditProfile = () => {
    navigation.navigate('ProfileEdit')
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
      <View key={`input-${index}`}>
        <Text style={{ marginBottom: 5 }}>{title}</Text>
        <TextInput
          inputProps={{
            ...inputProps,
            style: inputProps?.style ?? {},
            onChangeText: handleChangeText(index),
            editable: false,
          }}
        />
      </View>
    )
  }

  const renderProfileBtn = (
    <TouchableOpacity style={styles.profileBtn} onPress={handleLogOut}>
      <Image style={STYLES.img} source={IMG.icon.logout} />
    </TouchableOpacity>
  )

  return (
    <View style={{ flex: 1, backgroundColor: COLOR_PALETTE.black }}>
      <TouchableOpacity style={styles.backBtn} onPress={navigation.goBack}>
        <Image style={STYLES.img} source={IMG.icon.back} />
      </TouchableOpacity>

      <View style={styles.container}>
        <Header
          sub="Account"
          viewProps={{ style: styles.header }}
          rightComponent={renderProfileBtn}
        >
          Detail Account
        </Header>
        <View style={{ flex: 1, marginTop: 30 }}>
          {inputData.map(renderInput)}
        </View>

        <Button pressableProps={{ onPress: handleEditProfile }}>
          Edit Profile
        </Button>
      </View>
    </View>
  )
}

export default Index
