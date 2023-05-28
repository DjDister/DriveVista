<template>
  <div class="bookCont">
    <Select
      class="selectContainer"
      v-for="option in bookOptions"
      isNeeded
      :label="option.label"
      :options="option.options"
      @input="
        updateFormValue(option.value as keyof CarFormData, $event.target.value)
      "
      ><template v-slot:iconLeft>
        <component :is="option.icon" size="24px" color="red" /></template
    ></Select>
    <Input
      v-model:value="form.pickUpDate"
      isNeeded
      id="pickupDate"
      class="selectContainer"
      label="Pick-up"
      type="date"
    >
      <template v-slot:iconLeft><Date size="24px" color="red" /> </template>
    </Input>
    <Input
      v-model:value="form.dropOffDate"
      isNeeded
      id="dropoffDate"
      class="selectContainer"
      type="date"
      label="Drop-off"
    >
      <template v-slot:iconLeft><Date size="24px" color="red" /> </template
    ></Input>
    <div class="submitErrorCont selectContainer">
      <div class="errorLabel" :style="{ color: formSuccess ? 'green' : 'red' }">
        {{ formError || formSuccess }}
      </div>
      <button @click="submitForm" class="btnForm">Book</button>
    </div>
  </div>
</template>

<script lang="ts" setup>
import { PropType, ref, computed } from "vue";
import Select from "../Select.vue";
import Input from "../Input.vue";
import Localization from "../Icons/Localization.vue";
import Date from "../Icons/Date.vue";
import Car from "../Icons/Car.vue";
import { CarFormData, Car as CarType } from "../../../types";
import validCarForm from "../../utils/validCarForm";
import isCarAvaliable from "../../utils/isCarAvaliable";
import { useStore } from "../../store/store";
import bookCar from "../../utils/bookCar";
const props = defineProps({
  carTypes: {
    type: Array as PropType<CarType[]>,
    required: true,
  },
});

const form = ref<CarFormData>({
  pickUpDate: "",
  dropOffDate: "",
  carId: "",
  pickUpLocation: "",
  dropOffLocation: "",
});

const updateFormValue = (key: keyof CarFormData, value: string) => {
  form.value[key] = value;
};

const formError = ref("");
const formSuccess = ref("");
const store = useStore();

const submitForm = async () => {
  formError.value = "";
  formSuccess.value = "";

  formError.value = validCarForm(form.value);
  const avaliableStatus = await isCarAvaliable(form.value);
  if (formError.value === "") {
    if (avaliableStatus) {
      if (store.state.isLoggedIn) {
        await bookCar(form.value, store.state.uid).then(() => {
          formSuccess.value = "Car booked successfully";
          form.value = {
            pickUpDate: "",
            dropOffDate: "",
            carId: "",
            pickUpLocation: "",
            dropOffLocation: "",
          };
        });
      } else {
      }
    } else {
      formError.value = "Car is not avaliable in this time";
    }
  }
};

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

const bookOptions = computed(() => {
  return [
    {
      value: "carId",
      label: "Choose car type",
      options: props.carTypes.map((car) => ({
        id: parseInt(car.id),
        name: car.name,
        value: car.id,
      })),
      icon: Car,
    },
    {
      value: "pickUpLocation",
      label: "Pick-up location",
      options: pickUpLocations,
      icon: Localization,
    },
    {
      value: "dropOffLocation",
      label: "Drop-off location",
      options: pickUpLocations,
      icon: Localization,
    },
  ];
});
</script>

<style scoped>
.errorLabel {
  font-size: 16px;
  font-weight: 600;
  text-align: left;
  letter-spacing: 0.5px;
  height: 30px;
  color: red;
}
.submitErrorCont {
  display: flex;
  flex-direction: column;
  justify-content: center;
  height: 100%;
}
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
  width: 100%;
  cursor: pointer;
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
