<template>
  <div class="presentationCont">
    <h2 class="subTitle">Car Models</h2>
    <h1 class="title">Our rental fleet</h1>
    <div class="detailsCont" v-if="chosenCar">
      <div class="modelsCont">
        <button
          @click="setChosenCar(car)"
          class="modelName"
          v-for="car in carModels"
          :key="car.id"
        >
          {{ car.name }}
        </button>
      </div>
      <img class="carImg" :src="chosenCar.image" />
      <div class="statsTable">
        <div class="priceTitle">{{ chosenCar.price }}$/ rent per day</div>
        <div
          class="optionRow"
          v-for="option in chosenCarOptions"
          :key="option.optionName"
        >
          <div class="option">{{ option.optionName }}</div>
          <div class="line"></div>
          <div class="option">{{ option.optionValue }}</div>
        </div>
      </div>
    </div>
    <div v-else>Loading...</div>
  </div>
</template>

<script lang="ts" setup>
import { PropType, computed, ref, watchEffect } from "vue";
import { Car } from "../../../types";

const props = defineProps({
  cars: {
    type: Array as PropType<Car[]>,
    required: true,
  },
});

const chosenCar = ref<Car | null>(null);
const carModels = computed(() => {
  return props.cars;
});

const chosenCarOptions = computed(() => {
  if (chosenCar.value) {
    return [
      { optionName: "Seats", optionValue: chosenCar.value.seats },
      { optionName: "Doors", optionValue: chosenCar.value.doors },
      { optionName: "Transmission", optionValue: chosenCar.value.transmission },
      { optionName: "Fuel", optionValue: chosenCar.value.fuel },
      { optionName: "Year", optionValue: chosenCar.value.productionYear },
    ];
  }
  return [];
});

const setChosenCar = (car: Car): void => {
  chosenCar.value = car;
};

watchEffect(() => {
  if (props.cars.length > 0 && !chosenCar.value) {
    chosenCar.value = props.cars[0];
  }
});
</script>

<style scoped lang="css">
.priceTitle {
  font-size: 1.5rem;
  font-weight: 600;
  margin-bottom: 0;
  color: white;
  background-color: #ff8c00;
  text-align: center;
  box-sizing: border-box;
  width: 100%;
  padding: 5px;
}
.option {
  width: 50%;
}
.line {
  align-self: center;
  justify-self: center;
  width: 2px;
  height: 10px;
  background-color: black;
}
.optionRow {
  display: flex;
  justify-content: space-between;
  border-top: 2px solid black;
  padding: 10px;
  align-items: center;
  font-weight: 500;
}
.statsTable {
  align-self: center;
  display: flex;
  flex-direction: column;
  width: 250px;
  box-sizing: border-box;
  border: 2px solid black;
  border-radius: 10px;
  overflow: hidden;
}
.carImg {
  width: 100%;
  aspect-ratio: 3/2;
  object-fit: cover;
}
.modelName {
  font-size: 1.5rem;
  font-weight: 600;
  margin-bottom: 0;
  background-color: rgb(223, 223, 223);
  text-align: left;
  padding: 15px;
  box-sizing: border-box;
  width: 100%;
  cursor: pointer;
  border: none;
}
.modelsCont {
  display: flex;
  flex-direction: column;
  gap: 8px;
}
.detailsCont {
  display: flex;
  flex-direction: column;
  gap: 2rem;
  width: 100%;
}
.presentationCont {
  display: flex;
  flex-direction: column;
  text-align: center;
  margin-top: 5rem;
  width: 90%;
  min-height: 530.7px;
}
.subTitle {
  font-size: 1.5rem;
  font-weight: 700;
  margin-bottom: 0;
}

.title {
  font-size: 2.5rem;
  font-weight: 700;
  margin-top: 0;
}
@media screen and (min-width: 1000px) {
  .presentationCont {
    align-items: center;
  }
  .detailsCont {
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
  }

  .carImg {
    align-self: center;
    width: 40%;
  }
  .statsTable,
  .modelsCont {
    width: 25%;
    max-width: 300px;
  }
}
</style>
