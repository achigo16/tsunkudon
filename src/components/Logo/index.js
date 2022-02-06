import React from 'react'
import { View, Image } from 'react-native'

import IMG from '../../assets'
import { STYLES } from '../../style'

import styles from './styles'

const Index = function ({ imageProps = {}, viewProps = {} }) {
  const logoSize = Image.resolveAssetSource(IMG.logo)

  return (
    <View
      {...viewProps}
      style={[
        styles.logo,
        { aspectRatio: logoSize.width / logoSize.height },
        viewProps?.style ?? {},
      ]}
    >
      <Image
        {...imageProps}
        source={IMG.logo}
        style={[STYLES.img, imageProps?.style ?? {}]}
      />
    </View>
  )
}

export default Index
