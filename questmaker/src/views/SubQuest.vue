<template>
  <div class="home">
    <div class="container">
      <QuestBoard :quest="quests[$route.params.id]" />
      <CreateSubQuests msg="再生成" :id="quests[$route.params.id]"></CreateSubQuests>
    </div>
  </div>
</template>

<script>
import CreateSubQuests from "../components/CreateSubQuests.vue";
import QuestBoard from "../components/QuestBoard.vue";

import quests from "@/assets/quests.json";

export default {
  name: "SubQuest",
  components: { CreateSubQuests, QuestBoard },
  data() {
    return {
      quests: quests,
    };
  },
};
</script>

<style scoped>
.home {
  margin: 0 auto;
  height: 75vh;
  width: auto;
  max-width: 75vh;
  display: table;
}

.container {
  margin: 0 auto;
  vertical-align: middle;
  display: table-cell;
}
</style>
