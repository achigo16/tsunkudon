import { StyleSheet } from 'react-native'

export default StyleSheet.create({
  container: {
    paddingTop: 60,
    flex: 1,
  },

  header: {
    marginBottom: 10,
    marginHorizontal: 30,
  },
  profileBtn: {
    height: 30,
    width: 30,
  },
  smallIconBtn: {
    height: 20,
    width: 20,
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
    flex: 0.15,
  },
  itemTextName: {
    fontSize: 16,
    flex: 1,
    marginRight: 5,
  },
})
