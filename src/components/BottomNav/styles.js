import { StyleSheet } from 'react-native'
import { COLOR_PALETTE } from '../../constants'

export default StyleSheet.create({
  container: {
    flexDirection: 'row',
    paddingHorizontal: 30,
    borderTopWidth: 0.5,
    borderTopColor: COLOR_PALETTE.gray,
  },
  button: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    paddingVertical: 12,
  },
  buttonImage: {
    width: 25,
    height: 25,
    borderRadius: 15,
  },
  buttonText: {
    marginTop: 2,
    fontSize: 12,
  },
  buttonTextActive: {
    color: COLOR_PALETTE.color1,
    fontWeight: 'bold',
  },
})
