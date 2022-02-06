export const input_data = [
  {
    title: 'Name',
    value: '',
    error: { isError: false, msg: undefined },
    rules: ['required'],
  },
  {
    title: 'Username',
    value: '',
    autoCapitalize: 'none',
    error: { isError: false, msg: undefined },
    rules: ['required'],
  },
  {
    title: 'Password',
    value: '',
    autoCapitalize: 'none',
    secureTextEntry: true,
    error: { isError: false, msg: undefined },
    rules: ['required'],
  },
  {
    title: 'Confirm Password',
    value: '',
    autoCapitalize: 'none',
    secureTextEntry: true,
    error: { isError: false, msg: undefined },
    rules: ['required', 'same-2'],
  },
]
