const ValidasiMsg = {
  required: text => `${text} must be filled in`,
  min: (text, limit) => `minimum ${limit} characters required`,
  max: (text, limit) => `maximum ${limit} characters required`,
  email: () => 'incorrect email format',
  same: text => `${text} is not the same`,
  notSame: (text, text2) => `${text} cannot be the same as ${text2}`,
  incorrect: text => `incorrect ${text}`,
  phone: () => 'Invalid phone format',
  opt: () => 'Invalid code. Please try again.',
  network: () => 'failed to connect to the internet',
  taken: text => `The ${text} has already been taken`,
  notFound: text => `${text} not found`,
  server: () => 'sorry, something went wrong',
  verify: () => 'Please verified your email account',
}

const ValidasiLogic = {
  required: (val, param, obj) => {
    return val.length > 0 ? false : ValidasiMsg.required(obj.title)
  },
  min: (val, param) => {
    return val.length >= param ? false : ValidasiMsg.min(null, param)
  },
  max: (val, param) => {
    return val.length <= param ? false : ValidasiMsg.max(null, param)
  },
  email: val => {
    var re =
      // eslint-disable-next-line no-useless-escape
      /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
    return re.test(val) ? false : ValidasiMsg.email(val)
  },
  phone: val => {
    var re = /^8[1-9][0-9]{6,11}$/
    return re.test(val.replace(/^(\+62|62|0)/g, ''))
      ? false
      : ValidasiMsg.phone(val)
  },
  same: (val, param, obj, data) => {
    return val === data[param].value ? false : ValidasiMsg.same(obj.title)
  },
  notSame: (val, param, obj, data) => {
    return val !== data[param].value
      ? false
      : ValidasiMsg.notSame(obj.title, data[param].title)
  },
  requiredOTP: (val, param, obj) => {
    return val === obj?.otpCode ? false : ValidasiMsg.opt()
  },
}

const Validasi = {
  validate: (thisData, data) => {
    let selectedData = thisData

    // Checking Property Rules
    if (!Object.keys(selectedData).find(i => i === 'rules')) {
      selectedData = { ...selectedData, rules: [] }
    }

    const rules = selectedData.rules

    for (let idx = 0; idx < rules.length; idx++) {
      const arrRule = rules[idx].split('-')
      const rule = arrRule[0]
      const optParam = arrRule[1]

      const isValid = ValidasiLogic[rule](
        selectedData.value,
        optParam,
        selectedData,
        data,
      )

      if (isValid) {
        return isValid
      }
    }

    return false
  },
  getErrorMsg: (type, text, opt) => {
    return ValidasiMsg[type](text, opt)
  },
}

export default Validasi
