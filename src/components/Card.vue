<template>
  <div class="card" :class="['card', `poker-${ poker }`]"></div>
</template>

<script>
export default { props: { poker: { type: String, required: true } } };
</script>
