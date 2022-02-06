import { StyleSheet } from 'react-native'

import { COLOR_PALETTE } from '../../constants'

export default StyleSheet.create({
  inputBtn: {
    backgroundColor: COLOR_PALETTE.color1,
    borderRadius: 5,
    paddingVertical: 12,
  },
  inputBtnText: {
    textAlign: 'center',
    fontSize: 18,
    textTransform: 'uppercase',
    fontWeight: 'bold',
  },
})
