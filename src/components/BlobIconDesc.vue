<template>
  <div class="cont">
    <svg class="blob" viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg">
      <path
        :fill="iconColor"
        d="M31.3,-45.9C44.1,-40.5,60.5,-37.8,70.9,-28.5C81.2,-19.1,85.5,-3.1,83.7,12.4C82,27.8,74.3,42.8,63.4,54.2C52.4,65.6,38.1,73.5,24,74.2C9.9,74.8,-4.1,68.2,-18.6,63.8C-33.2,59.4,-48.4,57.2,-56.6,48.6C-64.8,39.9,-66,24.8,-63.7,11.8C-61.5,-1.1,-55.7,-12,-52,-25.3C-48.3,-38.6,-46.7,-54.3,-38.3,-61.8C-30,-69.3,-15,-68.4,-2.9,-63.9C9.2,-59.4,18.5,-51.3,31.3,-45.9Z"
        transform="translate(100 100)"
      />
    </svg>
    <component class="icon" :is="icon" :size="size" :color="iconColor" />
    <h3 class="label">{{ label }}</h3>
    <p class="description">{{ description }}</p>
  </div>
</template>

<script setup lang="ts">
defineProps({
  iconColor: {
    type: String,
    default: "#ff8c00",
  },
  icon: {
    type: Object,
    default: () => ({}),
  },
  color: {
    type: String,
    default: "white",
  },
  size: {
    type: String,
    default: "64px",
  },
  label: {
    type: String,
    default: "",
  },
  description: {
    type: String,
    default: "",
  },
});
</script>

<style scoped lang="css">
.description {
  font-size: 1rem;
  font-weight: 600;
  margin-top: 0;
  margin: 0 auto;
  padding: 10px;
  width: 60%;
}
.label {
  font-size: 1.5rem;
  font-weight: 700;
  margin-bottom: 1rem;
}
.cont {
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
}

.blob {
  width: 140px;
  height: 140px;
  z-index: -1;
  transform: translate(-5%, -30%);
  position: absolute;
  opacity: 0.5;
}

.icon {
  z-index: 1;
}
</style>
