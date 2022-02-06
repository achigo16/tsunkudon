import { StyleSheet } from 'react-native'

import { COLOR_PALETTE } from '../../constants'

export default StyleSheet.create({
  inputContainer: {
    backgroundColor: COLOR_PALETTE.gray,
    marginBottom: 25,
    borderRadius: 5,
  },
  input: {
    fontSize: 16,
    paddingHorizontal: 15,
    paddingVertical: 12,
    fontWeight: '300',
    color: COLOR_PALETTE.black,
  },
})
