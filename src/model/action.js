import { SCREENS } from '../constants'

import { ASM } from '../utils'

import * as types from './types'

const action = dispatch => ({
  switchNavigate: async screen => {
    dispatch({
      type: types.SWITCH_NAVIGATE,
      screen: SCREENS.findIndex(i => i === screen),
    })
  },
  setUser: async profile => {
    const storeProfile = await ASM[profile ? 'setData' : 'getData'](
      '@profile_data',
      profile,
    )

    dispatch({
      type: types.SET_USER_PROFILE,
      profile: profile ? profile : storeProfile,
    })

    return profile ? profile : storeProfile
  },
  deleteUser: async () => {
    ASM.deleteData('@profile_data')

    dispatch({
      type: types.SET_USER_PROFILE,
      profile: null,
    })
  },
  addCart: async (id_book) => {
    dispatch({
      type: types.SET_USER_CART,
      cart: id_book,
    })
  },
  deleteCart: async () => {
    dispatch({
      type: types.DELETE_USER_CART,
    })
  },
})

export default action
