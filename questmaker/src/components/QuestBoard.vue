<template>
  <div class="board">
    <span>{{ quest }}</span>
  </div>
</template>

<script>
export default {
  name: "QuestBoard",
  props: {
    quest: String,
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>
