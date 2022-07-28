// 整个包的入口
import Button from './button'

const components = [
  Button
]

// 定义 install 方法，接收 Vue 作为参数，如果使用 use 注册插件，则所有的组件都将被注册
const install = function (Vue) {
  // 遍历注册全局组件
  components.forEach(component => {
    Vue.component(component.name, component)
  })
}

export default install
