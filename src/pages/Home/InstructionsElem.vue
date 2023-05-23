<template>
  <div class="instructionsCont">
    <h2 class="subTitle">Plan it now</h2>
    <h1 class="title">Quick, easy and affordable</h1>
    <div class="blobsCont">
      <BlobIconDesc
        label="Choose a Car"
        description="We provide an extensive array of automobiles for all your driving requirements. We possess the ideal vehicle to fulfill your needs."
        color="#FFD60A"
        size="64px"
        :icon="Car"
      />
      <BlobIconDesc
        label="Call from Operator"
        description="Contact our skilled and amiable operators who are perpetually prepared to assist with any inquiries or apprehensions."
        color="#FFD60A"
        size="58px"
        :icon="Operator"
      />
      <BlobIconDesc
        label="Drive anywhere"
        description="Whether you're embarking on a journey, we've got you covered with our extensive selection of vehicles."
        color="#FFD60A"
        size="64px"
        :icon="DrivingCar"
      />
    </div>
  </div>
</template>
<script setup lang="ts">
import Car from "../../components/Icons/Car.vue";
import BlobIconDesc from "../../components/BlobIconDesc.vue";
import Operator from "../../components/Icons/Operator.vue";
import DrivingCar from "../../components/Icons/DrivingCar.vue";
</script>

<style scoped lang="css">
.subTitle {
  font-size: 1.5rem;
  font-weight: 700;
  margin-bottom: 0;
}
.blobsCont {
  display: flex;
  flex-direction: column;
  gap: 2rem;
}
.title {
  font-size: 2.5rem;
  font-weight: 700;
  margin-top: 0;
}
.instructionsCont {
  display: flex;
  flex-direction: column;
  text-align: center;
  z-index: 4;
  margin-top: 100px;
}
@media screen and (min-width: 1000px) {
  .blobsCont {
    flex-direction: row;
    justify-content: center;
    align-items: center;
    margin-top: 40px;
  }
}
</style>
