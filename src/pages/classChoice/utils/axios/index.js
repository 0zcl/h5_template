import createAxios from './createAxios'
import { baseUrl } from '../../env'
// h5的业务axios
export const baseAxios = createAxios({
  baseURL: baseUrl,
  timeout: 10000
})
