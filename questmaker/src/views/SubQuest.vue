<template>
  <div class="home">
    <QuestBoard :quest="quests[$route.params.id]" />
    <CreateSubQuests msg="再生成" :id="quests[$route.params.id]"></CreateSubQuests>
  </div>
</template>

<script>
import CreateSubQuests from "@/components/CreateSubQuests.vue";
import QuestBoard from "@/components/QuestBoard.vue";

import quests from "@/assets/quests.json";

export default {
  name: "SubQuest",
  components: { CreateSubQuests, QuestBoard },
  data() {
    return {
      quests: quests,
    };
  },
  // watch: {
  //   $route() {
  //     location.reload();
  //   },
  // },
};
</script>
