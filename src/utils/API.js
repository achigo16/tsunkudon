import ASM from './ASM'

export default {
  getUsers: async () => {
    const users = await ASM.getData('@users')

    return users
  },
  getUser: async data => {
    const users = await ASM.getData('@users')

    return users.find(
      ({ username, password }) =>
        username === data.username && password === data.password,
    )
  },
  setUser: async data => {
    const users = await ASM.getData('@users')
    const setUser = await ASM.setData(
      '@users',
      users !== null ? [...users, data] : [data],
    )

    return setUser
  },
  updateUser: async (oldData, data) => {
    const products = await ASM.getData('@users')
    const updateProduct = await ASM.setData(
      '@users',
      products.map(item =>
        item.username === oldData.username && item.password === oldData.password
          ? { ...item, ...data }
          : item,
      ),
    )

    return updateProduct
  },

  getProducts: async () => {
    const users = await ASM.getData('@products')

    return users
  },
  getProduct: async data => {
    const products = await ASM.getData('@products')

    return products.find(({ id }) => data.id === id)
  },
  setProduct: async data => {
    const products = await ASM.getData('@products')
    const setProduct = await ASM.setData(
      '@products',
      products !== null
        ? [...products, { id: products.length, ...data }]
        : [{ id: 0, ...data }],
    )

    return setProduct
  },
  updateProduct: async (id, data) => {
    const products = await ASM.getData('@products')
    const updateProduct = await ASM.setData(
      '@products',
      products.map(item => (item.id === id ? { ...item, ...data } : item)),
    )

    return updateProduct
  },
  deleteProduct: async id => {
    const products = await ASM.getData('@products')
    const deleteProduct = await ASM.setData(
      '@products',
      products.filter(data => data.id !== id),
    )

    return deleteProduct
  },
}
