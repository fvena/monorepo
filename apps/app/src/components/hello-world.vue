<template lang="pug">
.greetings
  h1.green {{ msg }}

  h3 You've successfully created a project with
    a(href="https://vitejs.dev/" target="_blank" rel="noopener")
      | Vite +
    a(href="https://vuejs.org/" target="_blank" rel="noopener")
      | &nbsp;Vue 3.
    | &nbsp;What's next?
</template>

<script setup lang="ts">
  defineProps<{
    msg: string;
  }>();
</script>

<style lang="scss" scoped>
  h1 {
    top: -10px;
    font-size: 2.6rem;
    font-weight: 500;
  }

  h3 {
    font-size: 1.2rem;
  }

  .greetings h1,
  .greetings h3 {
    text-align: center;
  }

  @media (min-width: 1024px) {
    .greetings h1,
    .greetings h3 {
      text-align: left;
    }
  }
</style>
