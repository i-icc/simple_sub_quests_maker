<template>
  <div class="home">
    <div class="container">
      <h1>サブクエストを<br />生成しますか？</h1>
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
.home {
  margin:  0 auto;
  height: 75vh;
  width: auto;
  max-width: 75vh;
  display: table;
}

.container {
  margin: 0  auto;
  vertical-align: middle;
  display: table-cell;
}
</style>
