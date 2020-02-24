<template>
  <div>
    <div id="toolbar">
      <button class="ql-bold">
        <i class="iconfont icon-cuti"></i>
      </button>
      <button class="ql-italic">
        <i class="iconfont icon--xieti"></i>
      </button>
      <button class="ql-header">
        <i class="iconfont icon-biaotizhengwenqiehuan"></i>
      </button>
      <button class="ql-list" value="ordered">
        <i class="iconfont icon-youxuliebiao"></i>
      </button>
      <button class="ql-list" value="bullet">
        <i class="iconfont icon-wuxuliebiao"></i>
      </button>
      <button @click="uploadImg">
        <i class="iconfont icon-tupian"></i>
      </button>
      <button @click="hr">
        <i class="iconfont icon-jianxianxing"></i>
      </button>

      <button @click="undo" :disabled="!undoBool">
        <i class="iconfont icon-7chexiao"></i>
      </button>
      <button @click="redo" :disabled="!redoBool">
        <i class="iconfont icon-fanchexiao"></i>
      </button>
    </div>
    <div id="editor"></div>
  </div>
</template>
<script>
import Quill from 'quill'
export default {
  name: 'quill-vue-mobile',
  data () {
    return {
      quill: null,
      undoBool: false,
      redoBool: false
    }
  },
  methods: {
    renderImg (url) {
      const range = this.quill.getSelection(true)
      // this.quill.insertText(range.index, '\n', Quill.sources.USER)
      this.quill.insertEmbed(
        range.index,
        'image',
        url,
        Quill.sources.USER
      )
      this.quill.setSelection(range.index + 2, Quill.sources.SILENT)
    },
    fn3 () {
      const BlockEmbed = Quill.import('blots/block/embed')

      class DividerBlot extends BlockEmbed {}
      DividerBlot.blotName = 'divider'
      DividerBlot.tagName = 'hr'
      Quill.register(DividerBlot)
      this.quill = new Quill('#editor', {
        debug: 'info',
        placeholder: '请输入正文',
        modules: {
          toolbar: '#toolbar'
        }
      })
      this.quill.on('editor-change', (eventName, ...args) => {
        this.undoBool = this.quill.history.stack.undo.length > 0
        this.redoBool = this.quill.history.stack.redo.length > 0
      })
    },
    undo () {
      this.quill.history.undo()
    },
    redo () {
      this.quill.history.redo()
    },
    hr () {
      const range = this.quill.getSelection(true)
      this.quill.insertText(range.index, '\n', Quill.sources.USER)
      this.quill.insertEmbed(
        range.index + 1,
        'divider',
        true,
        Quill.sources.USER
      )
      this.quill.setSelection(range.index + 2, Quill.sources.SILENT)
    },
    uploadImg () {
      this.$emit('upload-img')
    }
  },
  mounted () {
    this.fn3()
  }
}
</script>

<style lang="less">
@import "//at.alicdn.com/t/font_1652649_9s3rpkcmup.css";
.ql-active {
  .iconfont {
    color: #3fbdf0;
  }
}
#toolbar {
  display: flex;
  position: fixed;
  bottom: 0;
  left: 0;
  right: 0;
  background: #f9f9f9;
  button {
    flex: 1;
  }
}
#editor {
  border: 1px solid #f9f9f9;
  min-height: 100vh;
  .ql-editor {
    min-height: 100vh;
  }
}
button {
  background: transparent;
  border: 1px solid #f9f9f9;
  cursor: pointer;
  display: inline-block;
  font-size: 18px;
  padding: 0;
  height: 32px;
  text-align: center;
  .iconfont {
    color: #444;
  }
}
button[disabled] {
  .iconfont {
    color: #bbb;
  }
}
button:active,
button:focus {
  outline: none;
}
</style>
