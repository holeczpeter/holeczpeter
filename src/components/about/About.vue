<template>
  <div class="about_inner">
    <div class="left">
      <div class="image">
        <img src="../../assets/img/placeholders/1-1.jpg" alt="placeholder" />
        <div
          class="main"
          v-scroll-reveal="{ delay: 20 }"
          :style="{ backgroundImage: 'url(' + aboutImg + ')' }">
        </div>
      </div>
    </div>
    <div class="right">
      <div class="shane_tm_title">
        <span v-scroll-reveal="{ delay: 20 }">
          {{ $t('about') }}
        </span>
        <h3 v-scroll-reveal="{ delay: 40 }">
          Full-stack Developer
        </h3>
      </div>
      <div class="text" v-scroll-reveal="{ delay: 60 }">
        <p class="justify-p">
         {{ $t('about_detail') }}  </p>
      </div>
      <div class="shane_tm_button" v-scroll-reveal="{ delay: 80 }" >
        <a :href="cv_eng" download>
         {{ $t('cv_download') }} 
        </a>
      </div>
     
    </div>
  </div>  
</template>
<script>
export default {
  
  data() {
    return {
      lang: sessionStorage.getItem("locale") ? sessionStorage.getItem("locale") : 'en',
      aboutImg: require("../../assets/img/about/2.jpg"),
      cv_eng: require("../../assets/img/about/CV_Holecz_Peter_Eng.jpg"),
    };
  },
 
};
</script>
