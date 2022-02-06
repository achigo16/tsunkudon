import { StyleSheet } from 'react-native'

export default StyleSheet.create({
  container: {
    paddingTop: 60,
    paddingBottom: 30,
    flex: 1,
  },

  header: {
    paddingHorizontal: 30,
    marginBottom: 10,
  },

  itemsContainer: {
    paddingHorizontal: 30,
  },
  itemContainer: {
    flexDirection: 'row',
    marginBottom: 10,
  },
  itemTextNumber: {
    fontSize: 16,
    marginRight: 10,
    flex: 0.2,
  },
  itemTextName: {
    fontSize: 16,
    flex: 1,
  },
  itemTextPrice: {
    fontSize: 16,
    flex: 0.5,
  },

  footer: {
    paddingHorizontal: 30,
    paddingTop: 20,
  },
})
