// 时间格式化
export function parseTime(time, cFormat) {
  const format = cFormat || '{y}-{m}-{d} {h}:{i}:{s}'
  let date
  if (typeof time === 'object') {
    date = time
  } else {
    date = new Date(time)
  }
  const formatObj = {
    y: date.getFullYear(),
    m: date.getMonth() + 1,
    d: date.getDate(),
    h: date.getHours(),
    i: date.getMinutes(),
    s: date.getSeconds()
  }
  return format.replace(/{(y|m|d|h|i|s)+}/g, (result, key) => {
    let value = formatObj[key]
    if (result.length > 0 && value < 10) {
      value = '0' + value
    }
    return value || 0
  })
}

// 两个时间相差天数
export function diffTime(beginTime, endTime) {
  if (typeof beginTime === 'object') {
    beginTime = new Date(beginTime).getTime()
  }
  if (typeof endTime === 'object') {
    endTime = new Date(endTime).getTime()
  }
  const dateDiff = Math.abs(endTime - beginTime)
  return Math.floor(dateDiff / (24 * 3600 * 1000))
}

export function weekFilter(week) {
  const map = {
    1: '一',
    2: '二',
    3: '三',
    4: '四',
    5: '五',
    6: '六',
    7: '日'
  }
  return map[week] || '-'
}
export function throttle(func, delay = 4000, immediate = false) {
  let timeout = null
  const context = this
  return function() {
    const args = arguments
    timeout && clearTimeout(timeout)
    // 是否立即执行
    if (immediate) {
      // 已执行，则delay秒后才执行，清除timeout
      const callNow = !timeout
      timeout = setTimeout(function() {
        timeout = null
      }, delay)
      callNow && func.apply(context, args)
    } else {
      timeout = setTimeout(function() {
        func.apply(context, args)
      }, delay)
    }
  }
}
