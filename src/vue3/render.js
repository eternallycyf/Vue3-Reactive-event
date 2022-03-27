import { eventFormat, stateFormat, bindEvent } from './index.js'

export function useDom({ template, state, methods }, DOM) {
  DOM.innerHTML = render(template, state)
  bindEvent(methods)
}

export function render(template, state) {
  template = eventFormat(template)
  template = stateFormat(template, state)
  return template
}

export function update(statePool, key, value) {
  const allElements = document.getElementsByTagName('*');
  let oItem = null;

  statePool.forEach(item => {
    if (item.state[item.state.length - 1] === key) {

      for (let i = 0; i < allElements.length; i++) {
        oItem = allElements[i]
        const _flag = parseInt(oItem.dataset.dom)
        if (item.flag === _flag) {
          oItem.innerHTML = value
        }
      }

    }
  })
}