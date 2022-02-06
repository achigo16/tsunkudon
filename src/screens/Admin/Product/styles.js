import { StyleSheet } from 'react-native'
import { COLOR_PALETTE } from '../../../constants'

export default StyleSheet.create({
  container: {
    paddingHorizontal: 30,
    paddingBottom: 30,
    flex: 1,
  },

  backBtn: {
    width: 36,
    height: 36,
    borderRadius: 15,
    marginBottom: 20,
    marginTop: 30,
    marginLeft: 18,
  },
  header: {
    marginBottom: 10,
  },
  profileBtn: {
    height: 30,
    width: 30,
    backgroundColor: COLOR_PALETTE.gray,
    borderRadius: 15,
  },

  search: {
    marginBottom: 30,
  },
})
