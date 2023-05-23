<script setup lang="ts">
defineProps({
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
  label: {
    type: String,
    default: "",
  },
  isNeeded: {
    type: Boolean,
    default: false,
  },
  inputId: {
    type: String,
    optional: true,
  },
  maxlength: {
    type: Number,
    default: 255,
  },
});
const emit = defineEmits(["update:value"]);
const handleInput = (event: Event) => {
  emit("update:value", (event.target as HTMLInputElement).value);
};
</script>

<template>
  <div class="">
    <div class="inputLabel">
      <slot name="iconLeft"></slot>{{ label }}
      <div v-if="isNeeded" class="isNeeded">{{ " *" }}</div>
    </div>
    <input
      :id="inputId"
      :type="type"
      :value="value"
      @input="handleInput"
      :maxlength="maxlength"
      class="inputCont"
      max="2999-12-31"
      placeholder="Search"
    />
  </div>
</template>

<style scoped>
input {
  /* all: unset; */
  padding: unset;
  height: 100%;
  border: none;
  outline: none;
  font-size: 16px;
  color: #a0a0a0;
  font-weight: 600;
}
.isNeeded {
  color: red;
  margin-left: 2px;
}

.inputLabel {
  font-size: 16px;
  font-weight: 600;
  display: flex;
  align-items: center;
  letter-spacing: 0.5px;
  height: 30px;
}
.inputCont {
  width: calc(100% - 12px);
  height: 50px;
  border: 1px solid #e5e5e5;
  padding: 0 5px;
  font-size: 16px;
  color: #a0a0a0;
  outline: none;
}
</style>
