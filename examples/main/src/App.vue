<template>
  <div>
    <router-link :to="{ name: 'primary' }" tag="button">Primary应用一</router-link>
    <router-link :to="{ name: 'secondary' }" tag="button">Secondary应用</router-link>
    <router-view :content="content" :loading="loading" />
  </div>
</template>

<script>
export default {
  name: 'root-view',
  props: {
    loading: {
      type: Boolean,
      default: false
    },
    content: {
      type: String,
      default: ''
    }
  }
}
</script>
