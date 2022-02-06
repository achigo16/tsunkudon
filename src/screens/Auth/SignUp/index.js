import React from 'react'
import { View, Text, Pressable } from 'react-native'

import { TextInput, Button, Logo } from '../../../components'

import { COLOR_PALETTE } from '../../../constants'

import { API } from '../../../utils'

import { input_data as INPUT_DATA } from './config'

import styles from './styles'

const Index = function ({ navigation }) {
  const [inputData, setInputData] = React.useState(INPUT_DATA)

  const handleLoginBtnPress = async () => {
    const data = {
      name: inputData[0].value,
      username: inputData[1].value,
      password: inputData[2].value,
    }

    const is_success = await API.setUser(data)

    if (is_success) {
      navigation.navigate('SignIn')
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
      <View style={styles.container}>
        <Logo />

        <View style={styles.inputsContainer}>
          {inputData.map(renderInput)}

          <Button pressableProps={{ onPress: handleLoginBtnPress }}>
            Sign Up
          </Button>

          <View style={styles.textBtnContainer}>
            <Text style={styles.textBtnText}>Already have an account? </Text>
            <Pressable onPress={navigation.goBack}>
              <Text style={styles.textBtnHighlight}>Sign in</Text>
            </Pressable>
          </View>
        </View>
      </View>
    </View>
  )
}

export default Index
