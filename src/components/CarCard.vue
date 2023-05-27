<template>
  <div class="carCard">
    <img class="carCardImg" :src="image" alt="car image" />

    <div class="carCardInfo">
      <h3 class="carCardTitle">{{ name?.toUpperCase() }}</h3>
      <div class="carPrice">
        <div>{{ "$" + price }}</div>
        <div
          style="
             {
              font-weight: 700;
              color: #ffc300;
            }
          "
        >
          /DAY
        </div>
      </div>
    </div>
    <div class="iconsDetailsCont">
      <p class="iconDetail"><Fuel />{{ fuel }}</p>
      <p class="iconDetail"><Transmission /> {{ transmission }}</p>
      <p class="iconDetail"><Seats /> {{ seats }}</p>
    </div>
    <div class="btnsCont">
      <button class="carRentBtn">Rent</button>
      <button class="carDetailsBtn">Details</button>
    </div>
  </div>
</template>

<script setup lang="ts">
import Transmission from "./Icons/Transmission.vue";
import Seats from "./Icons/Seats.vue";
import Fuel from "./Icons/Fuel.vue";
defineProps({
  name: String,
  price: String,
  image: String,
  year: String,
  transmission: String,
  seats: String,
  fuel: String,
});
</script>

<style scoped>
.iconDetail {
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: small;
  font-weight: 500;
  letter-spacing: 1px;
  margin: 0;
  padding: 0;
  color: grey;
  padding: 4px;
  gap: 2px;
}
.iconsDetailsCont {
  display: flex;
  justify-content: space-between;
  width: 100%;
  align-items: center;
  margin-bottom: 4px;
}
.carCardInfo {
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 0px;
}
.carCardTitle {
  margin-top: 8px;
  margin-bottom: 0px;
  text-transform: uppercase;
  font-weight: 600;
  letter-spacing: 1px;
  font-size: x-large;
  padding: 0px;
  color: black;
}
button {
  all: unset;
}
.carPrice {
  display: flex;
  align-items: center;
  justify-content: center;
  letter-spacing: 1px;
  font-size: large;
  font-weight: 600;
  margin-top: 2px;
  margin-bottom: 4px;
}
.btnsCont {
  display: flex;
  justify-content: space-between;
  width: 100%;
}
.carRentBtn {
  background-color: black;
  color: white;
}
.carDetailsBtn {
  background-color: #ffc300;
}
.carDetailsBtn::after {
  width: 0;
  height: 0;
  position: absolute;
  right: calc(100% - 20px);
  top: 0;
  border-left: 40px solid transparent;
  border-top: 40px solid #ffc300;
  content: "";
}
.carRentBtn::after {
  width: 0;
  height: 0;
  position: absolute;
  left: calc(100% - 20px);
  top: 0;
  border-right: 40px solid transparent;
  border-bottom: 40px solid black;
  content: "";
  z-index: 1;
}
.carRentBtn,
.carDetailsBtn {
  width: 50%;
  height: 40px;
  border: none;
  cursor: pointer;
  font-weight: 500;
  position: relative;
}
.carCardImg {
  width: 100%;
  aspect-ratio: 1/1;
  object-fit: cover;
}
.carCard {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 10px;
  width: 275px;
  text-align: center;
  border: 1px solid grey;
  box-shadow: 0 0 6px rgba(0, 0, 0, 0.5);
}
</style>
