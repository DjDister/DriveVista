<script lang="ts">
import Logo from "../Navbar/Logo.vue";
import AuthButtons from "../../Auth/AuthButtons.vue";
import MobileNavbar from "./MobileNavbar.vue";
import BurgerIcon from "../../Icons/BurgerIcon.vue";
import { navbarLinksType } from "../../../../types.ts";
export default {
  components: {
    Logo,
    AuthButtons,
    MobileNavbar,
    BurgerIcon,
  },
  setup() {
    const navbarLinks: navbarLinksType[] = [
      {
        name: "Home",
        path: "/",
      },
      {
        name: "About",
        path: "/about",
      },
      {
        name: "Contact",
        path: "/contact",
      },
      {
        name: "Models",
        path: "/models",
      },
    ];
    return { navbarLinks };
  },
  data() {
    return {
      showMobileNavbar: false,
      animationStarted: false,
      selectedLink: "Home",
    };
  },
  methods: {
    openMobileNavbar() {
      this.showMobileNavbar = true;
    },
    closeMobileNavbar() {
      this.showMobileNavbar = false;
    },
    updateSelectedLink(link: string) {
      this.selectedLink = link;
    },
  },
};
</script>

<template>
  <div class="navbarContainer">
    <Logo class="logo" @click="updateSelectedLink('Home')" />
    <div class="hideMobile linksCont">
      <router-link
        @click="updateSelectedLink(item.name)"
        :to="item.path"
        class="navLink"
        v-for="item in navbarLinks"
        :key="item.name"
        :style="selectedLink === item.name ? { color: '#FFD60A' } : {}"
      >
        {{ item.name }}
      </router-link>
    </div>
    <AuthButtons class="hideMobile authCont" />
    <BurgerIcon
      size="32px"
      @click="openMobileNavbar"
      class="showMobile burgerIcon"
      :color="showMobileNavbar ? '#FFD60A' : '#000000'"
    />
    <MobileNavbar
      :navbarLinks="navbarLinks"
      @closeMobileNavbar="closeMobileNavbar"
      :selectedLink="selectedLink"
      class="mobileNavbar"
      :isShowed="showMobileNavbar"
      @updateSelectedLink="updateSelectedLink"
    />
  </div>
</template>

<style scoped>
.authCont {
  margin-right: 20px;
}
.linksCont {
  display: flex;
  justify-content: space-around;
  flex: 0.6;
  height: 100%;
  align-items: center;
}
.navLink {
  all: unset;
  cursor: pointer;
  font-size: 18px;
  font-weight: 500;
}
.navLink:hover {
  color: #ffd60a;
}
.logo {
  margin-left: 20px;
}
.navbarContainer {
  max-width: 1400px;
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  height: 100px;
  position: relative;
  z-index: 10;
}
.hideMobile {
  display: none;
}

.burgerIcon {
  cursor: pointer;
  margin-right: 20px;
}
.mobileNavbar {
  left: 0;
  top: 0;
  position: absolute;
  width: 100%;
  height: 100vh;
  background-color: white;
}

@media screen and (min-width: 1000px) {
  .hideMobile {
    display: flex;
  }
  .showMobile {
    display: none;
  }
}
</style>
