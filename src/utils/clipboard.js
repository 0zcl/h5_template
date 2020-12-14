import Clipboard from 'clipboard'
import { Toast } from 'vant'

// 复制文本
export function handleClipboardCopy(text, event) {
  const clipboard = new Clipboard(event.target, {
    text: () => text
  })
  clipboard.on('success', () => {
    Toast('复制成功，去粘贴吧')
    clipboard.off('error')
    clipboard.off('success')
    clipboard.destroy()
  })
  clipboard.on('error', () => {
    Toast('复制失败，请重新复制')
    clipboard.off('error')
    clipboard.off('success')
    clipboard.destroy()
  })
  clipboard.onClick(event)
}
