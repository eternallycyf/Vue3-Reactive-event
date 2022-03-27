import { isObject } from '../shared/utils.js'
import { mutableHandle } from './mutableHandle.js'

function reactive(target) {
  return createReactiveObject(target, mutableHandle);
}

function createReactiveObject(target, baseHandle) {

  if (!isObject(target)) return target

  const observe = new Proxy(target, baseHandle);
  return observe;
}

export {
  reactive
}
