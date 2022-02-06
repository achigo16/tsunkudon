import React from 'react'
import { View, Pressable, Text } from 'react-native'

import { TextInput, Button, Logo } from '../../../components'

import { COLOR_PALETTE } from '../../../constants'

import { Context } from '../../../model'
import { API } from '../../../utils'

import { input_data as INPUT_DATA } from './config'

import styles from './styles'

const Index = function ({ navigation }) {
  const { action } = React.useContext(Context)

  const [inputData, setInputData] = React.useState(INPUT_DATA)

  const handleLoginBtnPress = async () => {
    const data = {
      username: inputData[0].value,
      password: inputData[1].value,
    }
    const is_exist = await API.getUser(data)

    if (is_exist) {
      await action.setUser(data)
      action.switchNavigate(data.username === 'admin' ? 'Admin' : 'Main')
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

  const handleOnSignUp = () => {
    navigation.navigate('SignUp')
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
      <View style={styles.container}>
        <Logo />

        <View style={styles.inputsContainer}>
          {inputData.map(renderInput)}

          <Button pressableProps={{ onPress: handleLoginBtnPress }}>
            Sign In
          </Button>

          <View style={styles.textBtnContainer}>
            <Text style={styles.textBtnText}>Don't have an account? </Text>
            <Pressable onPress={handleOnSignUp}>
              <Text style={styles.textBtnHighlight}>Sign up</Text>
            </Pressable>
          </View>
        </View>
      </View>
    </View>
  )
}

export default Index
