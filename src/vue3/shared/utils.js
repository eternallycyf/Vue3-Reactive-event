const reg_check_str = /^['|"].+?['|"]$/;
const reg_str = /['|"]/g

function isObject(value) {
  return typeof value === 'object' && value !== null;
}

function hasOwnProperty(target, key) {
  return Object.prototype.hasOwnProperty.call(target, key);
}

function isEqual(newValue, oldValue) {
  return newValue === oldValue;
}

function randomNum(params) {
  return new Date().getTime() + parseInt(Math.random() * 10000)
}

function checkType(str) {
  if (reg_check_str.test(str)) {
    return str.replace(reg_str, '')
  }

  switch (str) {
    case 'true':
      return true
      break;
    case 'false':
      return false
      break;
    default:
      break;
  }
  return Number(str);
}

export {
  isObject,
  hasOwnProperty,
  isEqual,
  randomNum,
  checkType
}
