import { reactive } from './index.js'
import { isObject, hasOwnProperty, isEqual } from '../shared/utils.js'
import { statePool } from "../compiler/state.js";
import { update } from "../render.js";

const get = createGetter();
const set = createSetter();

function createGetter() {
  return function get(target, property, receiver) {
    const res = Reflect.get(target, property, receiver);
    if (isObject(res)) {
      return reactive(res)
    }

    console.log('#Reactive get the Property： ' + target[property]);
    return res;
  }
}

function createSetter() {
  return function set(target, property, value, receiver) {
    const isKeyExist = hasOwnProperty(target, property);
    const oldValue = target[property];
    const res = Reflect.set(target, property, value, receiver);
    if (!isKeyExist) {
      console.log('#Reactive add the Property： ' + property + '-----to---->' + value);
    } else if (!isEqual(value, oldValue)) {
      console.log('#Reactive set the Property： ' + property + '-----to---->' + value);

      update(statePool, property, value)
    }

    return res;
  }
}

const mutableHandle = {
  get,
  set
}

export {
  mutableHandle
}
