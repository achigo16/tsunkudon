import { StyleSheet } from 'react-native'
import { COLOR_PALETTE } from '../../constants'

export default StyleSheet.create({
  container: {
    // paddingHorizontal: 30,
    paddingTop: 60,
    flex: 1,
  },

  header: {
    marginBottom: 10,
    marginHorizontal: 30,
  },
  profileBtn: {
    height: 36,
    width: 36,
    borderRadius: 15,
  },

  search: {
    marginHorizontal: 30,
    marginBottom: 30,
  },

  title: {
    fontSize: 14,
    fontWeight: '500',
    marginHorizontal: 30,
  },

  booksContainer: {
    paddingHorizontal: 30,
    paddingBottom: 30,
  },
  bookContainer0: {
    flex: 1,
    aspectRatio: 0.7,
    padding: 5,
    paddingLeft: 0,
  },
  bookContainer1: {
    flex: 1,
    aspectRatio: 0.7,
    padding: 5,
    paddingRight: 0,
  },
  book: {
    width: '100%',
    backgroundColor: COLOR_PALETTE.gray,
    flex: 1,
    borderRadius: 5,
    overflow: 'hidden',
    alignItems: 'center',
    justifyContent: 'center',
  },
  bookText: {
    fontSize: 20,
    paddingHorizontal: 10,
    textAlign: 'center',
  },
})
