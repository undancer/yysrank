<template>
  <div>
    <a-collapse v-model="activeKey">
      <a-collapse-panel
        v-for="({ attributes, html }, index) in tools"
        :key="`${index}`"
        :header="attributes.title"
      >
        <div v-html="html" />
      </a-collapse-panel>
    </a-collapse>
  </div>
</template>

<script>
export default {
  name: "Page",
  props: {
    tools: Array
  },
  data() {
    return {
      activeKey: "0",
      tools: this.tools
    };
  }
};
</script>

<style scoped></style>
