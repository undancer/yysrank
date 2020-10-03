<template>
  <Page :contents="tools"/>
</template>

<script>
import tools from "@/modules/more-tools";
import Page from "@/modules/page/components/Page";

export default {
  name: "MoreTools",
  components: {
    Page: Page
  },
  data() {
    return {
      tools
    };
  }
};
</script>

<style scoped></style>
