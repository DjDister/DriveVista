<template>
  <div class="bookCont">
    <Select
      class="selectContainer"
      v-for="option in bookOptions"
      isNeeded
      :label="option.label"
      :options="option.options"
      ><template v-slot:iconLeft>
        <component :is="option.icon" size="24px" color="red" /></template
    ></Select>
    <Input
      v-model:value="selectedDate"
      isNeeded
      class="selectContainer"
      label="Pick-up"
      type="date"
    >
      <template v-slot:iconLeft><Date size="24px" color="red" /> </template>
    </Input>
    <Input
      v-model:value="selectedDate"
      isNeeded
      class="selectContainer"
      type="date"
      label="Pick-off"
    >
      <template v-slot:iconLeft><Date size="24px" color="red" /> </template
    ></Input>
    <button @click="submitForm" class="selectContainer btnForm">Book</button>
  </div>
</template>

<script lang="ts" setup>
import Select from "../Select.vue";
import Input from "../Input.vue";
import { ref } from "vue";
import Localization from "../Icons/Localization.vue";
import Date from "../Icons/Date.vue";
import Car from "../Icons/Car.vue";

const selectedDate = ref("");

const submitForm = () => {
  //validate form and submit
};

const carTypes = [
  {
    id: 1,
    name: "Option 1",
    value: "option1",
  },
  {
    id: 2,
    name: "Option 2",
    value: "option2",
  },
  {
    id: 3,
    name: "Option 3",
    value: "option3",
  },
];

const pickUpLocations = [
  {
    id: 1,
    name: "Warsaw",
    value: "warsaw",
  },
  {
    id: 2,
    name: "Cracow",
    value: "cracow",
  },
  {
    id: 3,
    name: "Gdansk",
    value: "gdansk",
  },
];

const dropOffLocations = [
  {
    id: 1,
    name: "Warsaw",
    value: "warsaw",
  },
  {
    id: 2,
    name: "Cracow",
    value: "cracow",
  },
  {
    id: 3,
    name: "Gdansk",
    value: "gdansk",
  },
];

const bookOptions = [
  { label: "Choose car type", options: carTypes, icon: Car },
  { label: "Pick up location", options: pickUpLocations, icon: Localization },
  { label: "Drop off location", options: dropOffLocations, icon: Localization },
];
</script>

<style scoped>
.datePicker {
  display: flex;
  justify-content: space-between;
  padding: 0 10px;
  height: 40px;
}
.btnForm {
  all: unset;
  background-color: #ffd60a;
  color: #000;
  text-align: center;
  height: 52px;
  align-self: flex-end;
  font-weight: 600;
}
.selectContainer {
  width: 100%;
}
.bookCont {
  z-index: 2;
  column-gap: 20px;
  row-gap: 15px;
  width: 85%;
  background-color: white;
  position: relative;
  padding: 20px;
  display: flex;
  flex-wrap: wrap;
  box-shadow: 0 2px 10px rgba(0, 0, 0, 0.2);
  margin-top: 40px;
}

@media screen and (min-width: 1000px) {
  .bookCont {
    padding: 30px;
  }
  .selectContainer {
    min-width: 300px;
    flex: 1;
  }
}
</style>
