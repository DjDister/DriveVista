<script lang="ts" setup>
import Button from "../../components/Button.vue";
import ArrowRight from "../../components/Icons/ArrowRight.vue";
import BookCarForm from "../../components/Forms/BookCarForm.vue";
import InstructionsElem from "./InstructionsElem.vue";
import CarPresentation from "./CarPresentation.vue";
</script>

<template>
  <div class="circleBg hideMobile"></div>
  <div class="homeCont">
    <div class="welcomeCont">
      <text class="semiTitle">Plan your trip now</text>
      <h1 class="title">
        Save
        <text class="yellowText">big</text>
        with our car rental
      </h1>
      <div class="descCont">
        Lease the vehicle of your fantasies. Unmatched rates, boundless mileage,
        adaptable collection choices, and numerous additional benefits.
      </div>
      <div class="btnsCont">
        <button class="btn shadow">
          Book Car
          <ArrowRight color="white" size="18px" />
        </button>
        <button class="btn morebtn">
          More info
          <ArrowRight color="white" size="18px" />
        </button>
      </div>
    </div>
    <div class="welcomeCarImgCont">
      <img
        class="welcomeImg"
        src="../../assets/images/welcomeCar.png"
        alt="car"
      />
      <img class="bgCityImg" src="../../assets/images/cityBg2.png" alt="city" />
    </div>
  </div>
  <BookCarForm />
  <InstructionsElem />
  <CarPresentation />
</template>

<style scoped>
.hideMobile {
  display: none;
}
.pageCont {
  display: flex;
  flex-direction: column;
  position: relative;
  overflow: hidden;
}
.bgCityImg {
  position: absolute;
  width: 100%;
  aspect-ratio: 1/1;
  right: 0;
  opacity: 0.6;
  transform: translate(20%, -25%);
  z-index: -2;
}
.circleBg {
  position: absolute;
  width: 100%;
  aspect-ratio: 1/1;
  background-color: #ff8c00;
  border-radius: 50%;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  opacity: 0.1;
  z-index: 2;
  transform: translate(50%, -25%);
}
.welcomeImg {
  width: 100%;
  height: 100%;
  object-fit: scale-down;
  border-radius: 10px;
}
.welcomeCarImgCont {
  position: relative;
  width: 50%;
  aspect-ratio: 1/1;
  z-index: 6;
}
.morebtn {
  background-color: black;
}
.shadow {
  background-color: #ff8c00;
  box-shadow: 0 2px 4px 0 #ff8c00;
}
.btnsCont {
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-top: 20px;
  gap: 20px;
}
.btn {
  border: none;
  color: white;
  gap: 8px;
  text-align: center;
  text-decoration: none;
  height: 60px;
  font-size: 16px;
  cursor: pointer;
  border-radius: 10px;
  width: 80%;
  display: flex;
  align-items: center;
  justify-content: center;
  font-weight: 600;
}
.descCont {
  color: gray;
  font-size: 1rem;
  margin-top: 20px;
}
.yellowText {
  color: #ff8c00;
}
.title {
  font-size: 3rem;
  flex: 0.2;
  font-weight: 700;
  margin-top: 0;
  margin-bottom: 0;
  line-height: normal;
  word-spacing: 4px;
}
.semiTitle {
  font-size: x-large;
  font-weight: 700;
}
.welcomeCont {
  text-align: center;
  width: 75%;
  z-index: 2;
}
.homeCont {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin-top: 60px;
  z-index: 2;
  position: relative;
  overflow-x: hidden;
}
.welcomeCarImgCont {
  display: none;
}

@media screen and (min-width: 1000px) {
  .hideMobile {
    display: block;
  }
  .welcomeCarImgCont {
    display: block;
  }
  .homeCont {
    flex-direction: row;
    justify-content: center;
    align-items: center;
    margin-top: 10px;
  }
  .welcomeCont {
    text-align: left;
    overflow: hidden;
    width: 40%;
  }
  .btnsCont {
    flex-direction: row;
    width: 100%;
  }
  .title {
    font-size: 3rem;
  }
  .descCont {
    font-size: 0.9rem;
  }
  .btn {
    width: 100%;
  }
}
</style>
