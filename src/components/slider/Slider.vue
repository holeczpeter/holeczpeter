<template>
  <div class="slider-two ">
    <div class="shane_tm_hero" id="home" data-style="one">
      <div class="background">
        <div
          class="image"
          :style="{ backgroundImage: 'url(' + sliderHero + ')' }"></div>
      </div>

      <div class="container">
        <div class="content home-four ">
          <div class="name_wrap">
            <h3><span>Holecz</span> Péter<span class="overlay_effect"></span></h3>
          </div>
          <div class="job_wrap">
            <span class="job">
              Full Stack developer
              <span class="overlay_effect"></span>
            </span>
          </div>
          <Social />
        </div>
        <div class="shane_tm_down loaded">
          <div class="line_wrapper">
            <div class="line"></div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import Social from "../SocialTwo.vue";
export default {
  components: {
    Social,
  },
  data() {
    return {
      sliderHero: require("../../assets/img/slider/1.jpg"),
    };
  },
};
</script>

<style lang="scss" scoped></style>
