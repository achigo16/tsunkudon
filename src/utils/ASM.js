import AsyncStorage from '@react-native-async-storage/async-storage'

const AsyncStorageManagement = {
  setData: async (key, data) => {
    try {
      await AsyncStorage.setItem(key, JSON.stringify(data))
      return true
    } catch (error) {
      return { status: false, msg: error }
    }
  },

  getData: async key => {
    try {
      const value = await AsyncStorage.getItem(key)
      return value !== null ? JSON.parse(value) : null
    } catch (error) {
      return { status: false, msg: error }
    }
  },

  deleteData: async key => {
    try {
      await AsyncStorage.removeItem(key)
      return true
    } catch (error) {
      return { status: false, msg: error }
    }
  },

  multiGet: async (key = []) => {
    try {
      let value = await AsyncStorage.multiGet(key)
      return value
    } catch (error) {
      return { status: false, msg: error }
    }
  },

  multiSet: async key => {
    try {
      const parseData = Object.keys(key).map(item => [item, key[item]])
      await AsyncStorage.multiGet(parseData)
      return true
    } catch (error) {
      return { status: false, msg: error }
    }
  },

  multiDelete: async (key = []) => {
    try {
      let value = await AsyncStorage.multiRemove(key)
      return value
    } catch (error) {
      return { status: false, msg: error }
    }
  },

  getAllKeys: async () => {
    try {
      let value = await AsyncStorage.getAllKeys()
      return value
    } catch (error) {
      return { status: false, msg: error }
    }
  },

  clearAll: async () => {
    try {
      await AsyncStorage.clear()
    } catch (error) {
      return { status: false, msg: error }
    }
  },
}

export default AsyncStorageManagement
