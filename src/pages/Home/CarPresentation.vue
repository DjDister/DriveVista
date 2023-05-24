<template>
  <div class="presentationCont">
    <h2 class="subTitle">Car Models</h2>
    <h1 class="title">Our rental fleet</h1>
    <div class="detailsCont">
      <div class="modelsCont">
        <button
          @click="setChosenCar(car)"
          class="modelName"
          v-for="car in carModels"
        >
          {{ car.name }}
        </button>
      </div>
      <img class="carImg" src="https://picsum.photos/200/300" />
      <div class="statsTable">
        <div class="priceTitle">{{ chosenCar.price }}$/ rent per day</div>
        <div class="optionRow" v-for="option in chosenCarOptions">
          <div class="option">{{ option.optionName }}</div>
          <div class="line"></div>
          <div class="option">{{ option.optionValue }}</div>
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts" setup>
import { computed, ref } from "vue";
type CarModelType = {
  name: string;
  mark: string;
  model: string;
  img: string;
  seats: number;
  doors: number;
  transmission: string;
  fuel: string;
  price: number;
  productionYear: number;
};

const carModels: CarModelType[] = [
  {
    name: "Audi A4",
    mark: "Audi",
    model: "A4",
    img: "audiA4",
    seats: 5,
    doors: 4,
    transmission: "Automatic",
    fuel: "Diesel",
    price: 100,
    productionYear: 2019,
  },
  {
    name: "Audi A6",
    mark: "Audi",
    model: "A6",
    img: "audiA6",
    seats: 5,
    doors: 4,
    transmission: "Automatic",

    fuel: "Diesel",
    price: 120,
    productionYear: 2020,
  },
  {
    name: "VW Golf 6",
    mark: "Volkswagen",
    model: "Golf 6",
    img: "golf6",
    seats: 5,
    doors: 4,
    transmission: "Manual",
    fuel: "Diesel",
    price: 80,
    productionYear: 2015,
  },
];
const chosenCar = ref(carModels[0]);
const chosenCarOptions = computed(() => [
  { optionName: "Seats", optionValue: chosenCar.value.seats },
  { optionName: "Doors", optionValue: chosenCar.value.doors },
  { optionName: "Transmission", optionValue: chosenCar.value.transmission },
  { optionName: "Fuel", optionValue: chosenCar.value.fuel },
  { optionName: "Year", optionValue: chosenCar.value.productionYear },
]);
const setChosenCar = (car: CarModelType) => {
  chosenCar.value = car;
};
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
