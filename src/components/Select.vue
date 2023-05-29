<script setup lang="ts">
import { ref, watch } from "vue";

export interface Option {
  id: number;
  name: string;
  value: string;
}
const props = defineProps({
  type: {
    type: String,
    default: "text",
  },
  placeholder: {
    type: String,
    default: "Search",
  },
  value: {
    type: String,
    default: "",
  },
  options: {
    type: Array as () => Option[],
    default: [],
  },
  label: {
    type: String,
    default: "",
  },
  isNeeded: {
    type: Boolean,
    default: false,
  },
});

const selectedValue = ref(props.value);
watch(
  () => props.value,
  (newValue) => {
    selectedValue.value = newValue;
  }
);
</script>

<template>
  <div class="">
    <div class="selectLabel">
      <slot name="iconLeft"></slot>{{ label }}
      <div v-if="isNeeded" class="isNeeded">{{ " *" }}</div>
    </div>
    <select class="selectCont" v-model="selectedValue">
      <option value="">Please select one</option>
      <option
        v-for="option in options"
        :key="option.value"
        :value="option.value"
      >
        {{ option.name }}
      </option>
    </select>
  </div>
</template>

<style scoped>
.isNeeded {
  color: red;
  margin-left: 2px;
}

.selectLabel {
  font-size: 16px;
  font-weight: 600;
  display: flex;
  align-items: center;
  letter-spacing: 0.5px;
  height: 30px;
}
.selectCont {
  width: 100%;
  height: 50px;
  border: 1px solid #e5e5e5;
  padding: 0 20px;
  font-size: 16px;
  color: #a0a0a0;
  outline: none;
}
</style>
