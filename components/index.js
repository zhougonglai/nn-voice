import Vue from 'vue'
import { upperFirst, camelCase } from 'lodash'

const requireComponent = require.context('./wc', false, /[A-Z]\w+\.(vue|js)$/)

requireComponent.keys().forEach((fileName) => {
  const componentConfig = requireComponent(fileName)
  const componentName = upperFirst(
    camelCase(
      fileName
        .split('/')
        .pop()
        .replace(/\.\w+$/, '')
    )
  )

  // 全局注册组件
  Vue.component(componentName, componentConfig.default || componentConfig)
})
