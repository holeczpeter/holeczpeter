<template>
  <div>
    <scroll-fixed-header :fixed.sync="fixed" :threshold="56">
      <div class="shane_tm_topbar">
        <div class="topbar_inner">
          <div class="logo">
          <img src="../assets/img/logo/new/dark.png" alt="partners brand" />
          </div>
          <div class="menu">
            <scrollactive
              class="anchor_nav"
              bezier-easing-value=".5,0,.35,1"
              :offset="95"
              :duration="100"
              :alwaysTrack="true">
              <a href="#home" class="scrollactive-item">{{ $t('home') }}</a>
              <a href="#about" class="scrollactive-item">{{ $t('about') }}</a>
              <a href="#portfolio" class="scrollactive-item">{{ $t('works') }}</a>
              <a href="#skills" class="scrollactive-item">{{ $t('portfolio') }}</a>
              <a href="#brand" class="scrollactive-item">{{ $t('partners') }}</a>
              <a href="#testimonial" class="scrollactive-item">{{ $t('testimonial') }}</a>
              <a href="#contact" class="scrollactive-item">{{ $t('contact') }}</a>
              <Language></Language><br/><br/>
            </scrollactive>
          </div>
          
        </div>
      </div>
    </scroll-fixed-header>
    <!-- Start shane mobile menu -->
    <div class="shane_tm_mobile_menu">
      <div class="topbar_inner">
        <div class="container bigger">
          <div class="topbar_in">
            <div class="logo">
              <img
                  src="../assets/img/logo/new/dark.png"
                  alt="partners brand"/>
            </div>
            <div class="my_trigger">
              <div
                class="hamburger hamburger--collapse-r"
                :class="{ 'is-active': active }">
                <div
                  class="hamburger-box"
                  @click="active = !active"
                  :aria-pressed="active ? 'true' : 'false'">
                  <div class="hamburger-inner"></div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div class="dropdown" :class="{ active: active }">
        <div class="container">
          <span
            class="close_menu"
            @click="active = !active"
            :aria-pressed="active ? 'true' : 'false'">
             {{ $t('close') }}
          </span>
          <div class="dropdown_inner">
            <ul class="anchor_nav">
              <li class="current">
                <a href="#home" @click="active = !active">
                  {{ $t('home') }}
                </a>
              </li>
              <li>
                <a href="#about" @click="active = !active">
                  {{ $t('about') }}
                </a>
              </li>
              <li>
                <a href="#portfolio" @click="active = !active">
                 {{ $t('works') }}
                </a>
              </li>
             <li>
                <a href="#skills" @click="active = !active">
                   {{ $t('portfolio') }}
                </a>
              </li>
              <li>
                <a href="#brand" @click="active = !active">
                  {{ $t('partners') }}
                </a>
              </li>
               <li>
                <a href="#testimonial" @click="active = !active">
                  {{ $t('testimonial') }}
                </a>
              </li>
              <li>
                <a href="#contact" @click="active = !active">
                  {{ $t('contact') }}
                </a>
              </li>
              <li>
              
              </li>
            </ul>
            
            <div class="social-menu">
              <Social />
            </div>
            <!-- End social share -->
          </div>
        </div>
        <!-- End container -->
      </div>
    </div>
    <!-- End shane mobile menu -->
  </div>
</template>

<script>
import Social from "../components/SocialTwo.vue";
import Language from "../components/language/Language.vue";
export default {
  components: {
    Social,
    Language,
  },
  data() {
    return {
      active: false,
      fixed: false,
    };
  },
};
</script>

<style lang="scss" scoped></style>
