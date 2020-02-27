<template>
    <quill-vue-mobile ref="editor" @upload-img="uploadImg" />
</template>

<script>
export default {
  methods: {
    uploadImg () {
      alert('uploadimg')
      this.$refs.editor.renderImg(
        'https://dss0.bdstatic.com/5aV1bjqh_Q23odCf/static/superman/img/logo_top-e3b63a0b1b.png'
      )
    }
  }
}
</script>

<style scoped>
</style>
