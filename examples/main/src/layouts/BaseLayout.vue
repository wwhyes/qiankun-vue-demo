<script>
export default {
  name: 'BaseLayout',
  props: {
    loading: {
      type: Boolean,
      default: false
    },
    content: {
      type: String,
      default: ''
    }
  },
  render (h) {
    const { content } = this.$props

    return h('div', { domProps: { id: 'app-view-box', innerHTML: content } })
  }
}
</script>
