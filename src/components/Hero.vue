<template>
  <div>
    <a-avatar :size="size" :src="this.$data.icon" shape="square"/>
    <span v-if="showName">
      {{ this.$data.name }}
    </span>
  </div>
</template>

<script>

import {HeroTable} from "@/data";

export default {
  name: "Hero",
  props: {
    id: {
      type: Number,
      required: true
    },
    size: {
      type: Number,
      default: 48
    },
    showName: {
      type: Boolean,
      default: true
    }
  },
  data() {
    const heroTable = HeroTable();
    const hero = {...heroTable[this.id], id: undefined};
    delete hero.id;
    return hero;
  }
}
</script>

<style scoped>

</style>
