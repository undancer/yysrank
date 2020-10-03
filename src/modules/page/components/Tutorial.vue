<template>
  <Page :contents="tutorials"/>
</template>

<script>
import tutorials from "@/modules/tutorials";
import Page from "@/modules/page/components/Page";

export default {
  name: "Tutorial",
  components: {
    Page: Page
  },
  data() {
    return {
      tutorials
    };
  }
};
</script>

<style scoped></style>
