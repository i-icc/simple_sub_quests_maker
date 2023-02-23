<template>
  <div class="home">
    <div class="container">
      <div class="title">サブクエストを<br />生成しますか？</div>
      <div class="main">
        <CreateSubQuests msg="生成"></CreateSubQuests>
      </div>
    </div>
  </div>
</template>

<script>
import CreateSubQuests from "@/components/CreateSubQuests.vue";

export default {
  name: "HomeView",
  components: { CreateSubQuests },
};
</script>

<style scoped>
.title {
  font-size: 10vw;
  margin-bottom:4vh;
}

.home {
  margin:  0 auto;
  height: 75vh;
  width: auto;
  max-width: 75vh;
  display: table;
}

.container {
  margin: 1rem  auto;
  vertical-align: middle;
  display: table-cell;
}
</style>
