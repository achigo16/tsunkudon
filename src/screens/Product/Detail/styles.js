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
    marginBottom: 20,
  },

  detailContainer: {
    flexDirection: 'row',
    marginBottom: 20,
  },

  bookContainer: {
    flex: 0.75,
    aspectRatio: 0.7,
    marginRight: 15,
  },
  book: {
    width: '100%',
    backgroundColor: COLOR_PALETTE.gray,
    flex: 1,
    borderRadius: 5,
  },

  detailTextContainer: {
    marginBottom: 20,
  },
  detailTextName: {
    fontWeight: '300',
  },
  detailTextValue: {
    fontWeight: '500',
  },

  title: {
    fontSize: 14,
    fontWeight: '500',
    marginBottom: 10,
  },
  sinopsis: {
    fontSize: 14,
  },
})
