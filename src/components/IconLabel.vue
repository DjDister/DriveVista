<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({
  name: "IconLabel",
  props: {
    label: {
      type: String,
      required: true,
    },
  },
});
</script>

<template>
  <div class="iconLabelCont">
    <slot></slot>
    <div class="label">{{ label }}</div>
  </div>
</template>

<style scoped>
.iconLabelCont {
  display: flex;
  align-items: center;
  color: #000;
  gap: 8px;
  align-items: center;
}
.label {
  font-size: medium;
  font-weight: 500;
}
</style>
