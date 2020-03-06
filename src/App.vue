<template>
    <quill-vue-mobile ref="editor" @upload-img="uploadImg"   @title-change="titleChange" @content-change="contentChange"/>
</template>

<script>
export default {
  data () {
    return {
      title: ''
    }
  },
  methods: {
    uploadImg () {
      this.$refs.editor.renderImg(
        'https://dss0.bdstatic.com/5aV1bjqh_Q23odCf/static/superman/img/logo_top-e3b63a0b1b.png'
      )
    },
    contentChange (w) {
      console.log('TCL: contentChange -> w', w)
    },
    titleChange (w) {
      console.log('TCL: titleChange -> w', w)
    }
  }
}
</script>

<style scoped>
</style>
