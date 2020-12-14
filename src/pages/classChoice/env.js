let baseUrl = '' // 后端业务接口
let ENV = '' // 统一登录传入的回调env
console.log('env', process.env)
const env = process.env.NODE_ENV ? process.env.NODE_ENV : 'dev'

switch (env) {
  case 'dev':
    ENV = 'dev'
    baseUrl = ''
    // 172.16.82.68:8080'
    break
  case 'test':
    ENV = 'test'
    baseUrl = '' // 这里是测试环境中的url
    break
  case 'preprod':
    ENV = 'pre'
    baseUrl = ''
    break
  case 'production':
    ENV = 'prod'
    baseUrl = ''
    break
}

console.log('baseUrl, env', baseUrl, ENV)

export {
  baseUrl,
  ENV
}
