<template>
  <div class="board">
    <span class="und">Quest</span>
    <div class="quest">{{ quest }}</div>
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
.board {
  border: 3px dashed;
  margin: 3vw;
  padding: 2vw;
}
.und {
  border-bottom: solid 1px gray;
  font-size: 8vw;
}
.quest {
  font-size: 5vw;
  margin-top: 3vw;
}
</style>
