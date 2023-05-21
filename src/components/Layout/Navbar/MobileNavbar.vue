<script lang="ts">
import { PropType } from "vue";
import { navbarLinksType } from "../../../../types.ts";
import CloseIcon from "../../Icons/CloseIcon.vue";
import AuthButtons from "../../Auth/AuthButtons.vue";
export default {
  name: "MobileNavbar",
  props: {
    navbarLinks: {
      type: Array as PropType<readonly navbarLinksType[]>,
      required: true,
    },
    isShowed: {
      type: Boolean,
      required: true,
    },
    selectedLink: {
      type: String,
      required: true,
    },
  },
  methods: {
    closeMobileNavbar() {
      const closeButton = document.querySelector(".closeBtn") as HTMLElement;
      if (closeButton) {
        closeButton.style.fill = "#FFD60A";
      }
      this.$emit("closeMobileNavbar");
    },
    handleNavigateToPage(item: navbarLinksType) {
      const selectedLinkElem = document.getElementById(
        this.selectedLink
      ) as HTMLElement;
      if (selectedLinkElem) {
        selectedLinkElem.style.color = "black";
      }
      this.$emit("updateSelectedLink", item.name);
      const navLink = document.getElementById(item.name) as HTMLElement;
      if (navLink) {
        navLink.style.color = "#FFD60A";
      }
      this.$emit("closeMobileNavbar");
    },
  },
  components: { CloseIcon, AuthButtons },
};
</script>

<template>
  <Transition>
    <div v-if="isShowed" class="container">
      <CloseIcon
        fill="black"
        class="closeBtn"
        @click="closeMobileNavbar"
        size="32px"
      />
      <div class="centerCont">
        <router-link
          v-for="item in navbarLinks"
          @click="handleNavigateToPage(item)"
          :to="item.path"
          class="navLink"
          :id="item.name"
          :key="item.name"
          :style="{ color: item.name === selectedLink ? '#FFD60A' : 'black' }"
          >{{ item.name }}</router-link
        >
        <AuthButtons class="marginTop" />
      </div>
    </div>
  </Transition>
</template>

<style scoped>
.centerCont {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 40px;
  height: 50%;
  width: 100%;
}
.marginTop {
  margin-top: 40px;
}
.navLink {
  all: unset;
  font-size: x-large;
  font-weight: 600;
  display: flex;
  justify-content: center;
  align-items: center;
  height: 40px;
  width: 100%;
}
.closeBtn {
  position: absolute;
  top: 34px;
  right: 20px;
  background: none;
  border: none;
  cursor: pointer;
}
.container {
  width: 100%;
  height: 100%;
}
.centerCont {
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100%;
}
.v-enter-active,
.v-leave-active {
  transition: all 0.4s linear;
}
.v-enter-from,
.v-leave-to {
  transform: translateX(-100%);
}
.v-enter-to.v-leave-from {
  transform: translateX(0%);
}
</style>
