<template>
<div>
    <h3>{{ $store.state.todos }}</h3>
</div>
</template>

<script>
export default {
  props: {
    todo: {},
  },
};
</script>

<style>

</style>