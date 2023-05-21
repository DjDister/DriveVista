<template>
  <div class="footerCont">
    <div class="firmDescriptionCont">
      <div class="title">Renting Cars</div>
      <div class="description">
        We provide an extensive selection of automobiles for all your driving
        requirements. We possess the ideal vehicle to fulfill your demands.
      </div>
      <div class="contactDetailsCont">
        <IconLabel label="+48 798 510 462"><PhoneIcon /></IconLabel>
        <a class="emailLink" href="mailto:porebskifilip@wp.pl">
          <IconLabel label="porebskifilip@wp.pl"><EmailIcon /></IconLabel>
        </a>
      </div>
    </div>
    <div>
      <div class="title">Drive Vista</div>
      <div class="footerLinks">
        <router-link class="footerLink" to="/">About us</router-link>
        <router-link class="footerLink" to="/">Contact</router-link>
        <router-link class="footerLink" to="/">FAQ</router-link>
      </div>
    </div>
    <div>
      <div class="title">Working hours</div>
      <div class="footerLinks">
        <div>Mon - Fri: 9:00AM - 9:00PM</div>
        <div>Sat: 9:00AM - 19:00PM</div>
        <div>Sun: Closed</div>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import IconLabel from "../../IconLabel.vue";
import PhoneIcon from "../../Icons/PhoneIcon.vue";
import EmailIcon from "../../Icons/EmailIcon.vue";

export default defineComponent({
  name: "Footer",
  components: { IconLabel, PhoneIcon, EmailIcon },
});
</script>

<style scoped>
.footerLinks {
  display: flex;
  flex-direction: column;
  gap: 8px;
  font-size: large;
}
.footerLink {
  text-decoration: none;
  color: inherit;
}
.footerLink:hover {
  color: #ff8c00;
}

.emailLink {
  text-decoration: none;
  color: inherit;
}
.contactDetailsCont {
  display: flex;
  flex-direction: column;
  gap: 8px;
  margin-top: 24px;
  align-items: center;
  width: 100%;
}
.description {
  width: 80%;
  margin: 0 auto;
  color: grey;
  font-weight: 400;
}
.footerCont {
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  text-align: center;
  gap: 40px;
}
.title {
  font-size: x-large;
  font-weight: bold;
  margin-bottom: 12px;
}
@media screen and (min-width: 768px) {
  .contactDetailsCont {
    align-items: flex-start;
  }
  .firmDescriptionCont {
    flex: 0.4;
  }
  .description {
    margin: 0;
  }
  .footerCont {
    flex-direction: row;
    justify-content: space-around;
    text-align: left;
    align-items: flex-start;
  }
}
</style>
