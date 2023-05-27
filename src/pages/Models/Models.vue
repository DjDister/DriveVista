<template>
  <div class="pageCont">
    <h1>Models</h1>
    <div class="modelsCont">
      <CarCard
        name="BMW"
        price="100"
        image="https://via.placeholder.com/150"
        year="2020"
        transmission="Automatic"
        seats="4"
        fuel="Gasoline"
      />
      <CarCard
        name="BMW"
        price="100"
        image="https://via.placeholder.com/150"
        year="2020"
        transmission="Automatic"
        seats="4"
        fuel="Gasoline"
      />
      <CarCard
        name="BMW"
        price="100"
        image="https://via.placeholder.com/150"
        year="2020"
        transmission="Automatic"
        seats="4"
        fuel="Gasoline"
      />
      <CarCard
        name="BMW"
        price="100"
        image="https://via.placeholder.com/150"
        year="2020"
        transmission="Automatic"
        seats="4"
        fuel="Gasoline"
      />
      <CarCard
        name="BMW"
        price="100"
        image="https://via.placeholder.com/150"
        year="2020"
        transmission="Automatic"
        seats="4"
        fuel="Gasoline"
      />
    </div>
  </div>
</template>

<script lang="ts" setup>
import CarCard from "../../components/CarCard.vue";
</script>

<style scoped lang="css">
.modelsCont {
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  align-items: center;
  height: 100%;
  gap: 20px;
}
.pageCont {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  min-height: 100vh;
  margin-bottom: 20px;
}
</style>
