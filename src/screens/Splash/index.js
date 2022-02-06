import React from 'react'
import { Image, View } from 'react-native'

import IMG from '../../assets'
import { COLOR_PALETTE } from '../../constants'
import { STYLES } from '../../style'
import { API } from '../../utils'

import { Context } from '../../model'

import styles from './styles'

const Index = function () {
  const { action } = React.useContext(Context)

  React.useEffect(() => {
    const checkAdminExist = users => {
      if (!users) {
        return true
      }

      return users.findIndex(({ username }) => username === 'admin') < 0
    }

    const checkAdmin = () => {
      setTimeout(async () => {
        const localUser = await action.setUser()

        const users = await API.getUsers()

        if (users === null && checkAdminExist(users)) {
          await API.setUser({
            name: 'Admin',
            username: 'admin',
            password: 'admin123',
          })
        }

        if (localUser) {
          if (localUser.username === 'admin') {
            action.switchNavigate('Admin')
          } else {
            action.switchNavigate('Main')
          }
        } else {
          action.switchNavigate('Auth')
        }
      }, 1000)
    }

    checkAdmin()

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  const { width, height } = Image.resolveAssetSource(IMG.logo)

  return (
    <View
      style={{
        flex: 1,
        backgroundColor: COLOR_PALETTE.black,
        alignItems: 'center',
        justifyContent: 'center',
      }}
    >
      <View style={[styles.logo, { aspectRatio: width / height }]}>
        <Image style={STYLES.img} source={IMG.logo} />
      </View>
    </View>
  )
}

export default Index
