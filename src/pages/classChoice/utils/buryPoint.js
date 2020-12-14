export function setBuryPoint(initEvent, label, sourceObj) {
  try {
    window.TDAPP.onEvent(initEvent, label, sourceObj)
  } catch (err) {
    console.log('err', err)
  }
}
