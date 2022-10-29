<template lang="pug">
button.btn(:class="[{ primary }, type]")
  slot
</template>

<script setup lang="ts">
  import { reactive } from 'vue';

  export interface Props {
    primary?: boolean;
    type?: string;
  }

  const props = withDefaults(defineProps<Props>(), {
    primary: false,
    type: 'brand'
  });

  const { primary, type } = reactive(props);
</script>

<style scoped lang="scss">
  $color: hsl(207, 93%, 48%);

  .btn {
    padding: 0.5rem 1rem;
  }

  .btn.primary {
    color: #fff;
    background: $color;
  }
</style>
