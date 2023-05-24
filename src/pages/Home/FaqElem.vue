<template>
  <div class="faqCont">
    <h2 class="subTitle">FAQ</h2>
    <h1 class="title">Frequently Asked Questions</h1>
    <div class="questionsCont">
      <div class="questionCont" v-for="(question, index) in questions">
        <a :href="`#faq-${index}`" :key="index" @click="toggleAnswer(index)">
          <div
            class="questionText"
            :class="{ selected: selectedQuestion === index }"
            :style="{
              backgroundColor: selectedQuestion === index ? '#fc9d2a' : 'white',
            }"
          >
            {{ index + 1 + ". " + question.question }}
          </div>
          <div
            :id="`faq-${index}`"
            v-if="selectedQuestion === index"
            class="answer"
          >
            {{ question.answer }}
          </div>
        </a>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref } from "vue";

const questions = [
  {
    question: "How do I book a car?",
    answer:
      "Comparing rental car deals is important as it helps find the best deal that fits your budget and requirements, ensuring you get the most value for your money. By comparing various options, you can find deals that offer lower prices, additional services, or better car models. You can find car rental deals by researching online and comparing prices from different rental companies.",
  },
  {
    question: "How do I cancel my booking?",
    answer:
      "Comparing rental car deals is important as it helps find the best deal that fits your budget and requirements, ensuring you get the most value for your money. By comparing various options, you can find deals that offer lower prices, additional services, or better car models. You can find car rental deals by researching online and comparing prices from different rental companies.",
  },
  {
    question: "How do I change my booking?",
    answer:
      "Comparing rental car deals is important as it helps find the best deal that fits your budget and requirements, ensuring you get the most value for your money. By comparing various options, you can find deals that offer lower prices, additional services, or better car models. You can find car rental deals by researching online and comparing prices from different rental companies.",
  },
];

const selectedQuestion = ref(-1);

const toggleAnswer = (index: number) => {
  selectedQuestion.value = selectedQuestion.value === index ? -1 : index;
};
</script>

<style scoped>
a {
  all: unset;
}

.selected {
  box-shadow: 0 4px 6px 0 #ff920c;
}
.questionText {
  font-size: 1.2rem;
  font-weight: 700;
  padding: 0 1em;
  padding-top: 10px;
  padding-bottom: 10px;
}

.answer:target {
  max-height: 500px;
  color: black;
}

.answer {
  margin-top: 30px;
  color: grey;
  font-weight: 500;
  margin-bottom: 30px;
  overflow: hidden;
  max-height: 0;
  transition: max-height 0.5s ease-in-out;
  padding: 0 1em;
}

.questionsCont {
  width: 90%;
  box-shadow: 0 2px 10px rgba(0, 0, 0, 0.2);
}

.questionCont {
  background-color: white;
  border-bottom: 2px solid #e0e0e0;
  cursor: pointer;
}

.faqCont {
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-top: 100px;
  width: 90%;
  padding: 10px;
  padding-top: 40px;
  padding-bottom: 40px;
  background-color: white;
  box-shadow: 0 2px 10px rgba(0, 0, 0, 0.2);
  margin-bottom: 40px;
}

.subTitle {
  font-size: 1.5rem;
  font-weight: 700;
  margin-bottom: 0;
  margin-top: 0;
}

.title {
  font-size: 2.5rem;
  font-weight: 700;
  margin-top: 0;
}
</style>
