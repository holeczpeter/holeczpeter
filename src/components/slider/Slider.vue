
<template>
  <div class="shane_tm_hero" id="home" data-style="one">
    <div class="background">
      <div
        class="image"
        :style="{ backgroundImage: 'url(' + sliderHero + ')' }"
      ></div>
    </div>
    <div class="container">
      <div class="content">
        <div class="name_wrap">
          <h3><span>Holecz</span>Peter<span class="overlay_effect"></span></h3>
        </div>
        <div class="job_wrap">
          <span class="job">
             Full-stack Developer
            <span class="overlay_effect"></span>
          </span>
        </div>
      </div>
      <div class="shane_tm_down loaded">
        <div class="line_wrapper">
          <div class="line"></div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  data() {
    return {
      sliderHero: require("../../assets/img/slider/1.jpg"),
    };
  },
};
</script>

<style lang="scss" scoped></style>
