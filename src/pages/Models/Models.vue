<template>
  <div class="pageCont">
    <h1>Models</h1>
    <div class="modelsCont">
      <LoadingStatus class="loadingSpinner" v-if="cars.length === 0" />
      <CarCard
        loadingIndicator
        v-for="car in cars"
        :key="car.id"
        :name="car.name"
        :price="car.price"
        :transmission="car.transmission"
        :fuel="car.fuel"
        :image="car.image"
        :seats="car.seats"
      />
    </div>
  </div>
</template>

<script lang="ts" setup>
import CarCard from "../../components/CarCard.vue";
import { onMounted, ref } from "vue";
import getCars from "../../utils/getCars";
import { Car } from "../../../types";
import LoadingStatus from "../../components/LoadingStatus.vue";

const cars = ref<Car[]>([]);

const fetchCars = async () => {
  await getCars(6).then((res) => {
    cars.value = res;
  });
};

onMounted(() => {
  fetchCars();
});
</script>

<style scoped lang="css">
.loadingSpinner {
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
}
.modelsCont {
  display: flex;
  flex-wrap: wrap;
  height: 100%;
  justify-content: center;
  gap: 40px;
  padding: 20px;
  padding-left: 30px;
  padding-right: 30px;
  min-width: 100%;
}
.pageCont {
  display: flex;
  flex-direction: column;
  min-height: 100vh;
  width: 100%;
  align-items: center;
  margin-bottom: 20px;
}
@media screen and (min-width: 1000px) {
  .modelsCont {
    justify-content: flex-start;
    margin-left: auto;
    margin-right: auto;
  }
}
</style>
