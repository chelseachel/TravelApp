// 当用户关闭了本地存储功能或采用隐身模式时，使用localStorage浏览器可能抛出异常，通过 try catch 保证正常运行
let defaultCity = '北京'
try {
  if (localStorage.city) {
    defaultCity = localStorage.city
  }
} catch (e) {}

export default {
  city: defaultCity
}
