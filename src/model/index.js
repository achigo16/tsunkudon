import React from 'react'

import ACTION from './action'
import * as types from './types'
import INITIAL_STATE from './state'

export const Context = React.createContext(null)

function RootContext({ children }) {
  const [state, dispatch] = React.useReducer((prevState, action) => {
    switch (action.type) {
      case types.SWITCH_NAVIGATE:
        return {
          ...prevState,
          screen: action.screen,
        }
      case types.SET_USER_PROFILE:
        return {
          ...prevState,
          profile: action.profile,
        }
      case types.SET_USER_CART:
        return {
          ...prevState,
          cart: [
            ...prevState.cart.filter(item => item !== action.cart),
            action.cart,
          ],
        }
      case types.DELETE_USER_CART:
        return {
          ...prevState,
          cart: [],
        }
    }
  }, INITIAL_STATE)

  const action = React.useMemo(() => ACTION(dispatch), [])

  return (
    <Context.Provider value={{ state, action }}>{children}</Context.Provider>
  )
}

export default RootContext
