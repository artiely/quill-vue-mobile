import quillVueMobile from './quill-vue-mobile'
import _Vue from 'vue'
quillVueMobile.install = Vue => {
  if (!Vue) {
    window.Vue = Vue = _Vue
  }
  Vue.component(quillVueMobile.name, quillVueMobile)
}
export default quillVueMobile
