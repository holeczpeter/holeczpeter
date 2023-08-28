<template>
  <ul class="social social-default position-relative">
    <li v-for="(social, i) in socialList" :key="i">
      <a :href="social.link" target="_blank" rel="noreferrer"
        ><img class="svg" :src="social.src" alt="social"
      /></a>
    </li>
  </ul>
  <!-- End. social -->
</template>

<script>
export default {
  data() {
    return {
      socialList: [
        {
          link: "https://www.facebook.com/holecz.peter1",
          src: require("../assets/img/svg/social/facebook.svg"),
        },
        {
          link: "https://www.linkedin.com/in/holecz-péter-90006b146/",
          src: require("../assets/img/svg/social/linkedin.svg"),
        },
        {
          link: "https://www.instagram.com/holeczpeter/",
          src: require("../assets/img/svg/social/instagram.svg"),
        },
      ],
    };
  },
};
</script>

<style lang="scss" scoped></style>
