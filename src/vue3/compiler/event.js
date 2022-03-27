import { randomNum, checkType } from '../shared/utils.js'

const reg_onClick = /onClick\=\"(.*?)\"/g;
const reg_fnName = /^(.*?)\(/;
const reg_arg = /\((.*?)\)/;

const eventPool = []

/**
 * exentPool = []
 * {
 *   flag: 随机数
 *   handler: 事件处理函数的字符串
 *   type: click
 * }
 */
export function eventFormat(template) {
  return template.replace(reg_onClick, function (node, key) {
    const _flag = randomNum()
    eventPool.push({
      flag: _flag,
      handler: key.trim(),
      type: "click"
    })
    return `data-dom="${_flag}"`;
  })
}

export function bindEvent(methods) {
  const allElements = document.getElementsByTagName('*')
  let oIem = null;
  let _flag = 0;

  eventPool.forEach(event => {
    for (let i = 0; i < allElements.length; i++) {
      oIem = allElements[i]
      _flag = parseInt(oIem.dataset.dom)

      if (event.flag === _flag) {
        oIem.addEventListener(event.type, function () {
          const fnName = event.handler.match(reg_fnName)[1]
          const arg = checkType(event.handler.match(reg_arg)[1])
          methods[fnName](arg)
        }, false)
      }
    }
  })
}