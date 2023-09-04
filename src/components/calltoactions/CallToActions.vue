<template>
  <div
    class="shane_tm_talk bg_image_props"
    :style="{ backgroundImage: 'url(' + imgSrc + ')' }"
    id="contact">
    <div class="shape">
      <img
        class="svg"
        src="../../assets/img/svg/paper.svg"
        alt="partners brand"/>
    </div>
    <div class="background" id="talk">
      <a class="player"></a>
      <div class="overlay"></div>
    </div>
    <div class="talk_inner">
      <div class="text" v-scroll-reveal="{ delay: 100 }">
        <h3>{{$t('work_together')}}</h3>
      </div>
      <div class="button" v-scroll-reveal="{ delay: 200 }">
        <button class="white-fill-bg" @click="showModal">
          {{$t('open_contact')}}
        </button>
      </div>
    </div>
    <transition name="fade">
      <div
        :class="{ 'modal-mask': isActive }"
        id="modal"
        @click="closeModal"
        v-if="isVisible">
        <div class="modal-dialog modal-dialog-centered " @click.stop>
          <div class="modal-content calltoactions-content">
            <div class="close" @click="closeModal">
              <img
                class="svg"
                src="../../assets/img/svg/cancel.svg"
                alt="cancel-img" />
            </div>
            <div class="shane_tm_mobalbox_contact">
              <div class="box_inner">
                <div class="title">
                  <h3>{{$t('contact_me')}}</h3>
                </div>
                <div class="wrapper">
                  <div class="left">
                    <div class="fields">
                      <Contact/>
                    </div>
                  </div>
                  <div class="right">
                    <div class="map_wrap">
                      <Map />
                    </div>
                  </div>
                </div>
                <div class="short_info">
                  <ul>
                    <li>
                      <div class="list_inner">
                        <img
                          class="svg"
                          src="../../assets/img/svg/location.svg"
                          alt="location"/>
                        <p>6060, Tiszakécske Ady E. 79</p>
                      </div>
                    </li>
                    <li>
                      <div class="list_inner">
                        <img
                          class="svg"
                          src="../../assets/img/svg/phone.svg"
                          alt="phone" />
                        <p>
                          <a href="tel:+36 30 555 83 93">+36 30 555 83 93</a>
                        </p>
                      </div>
                    </li>
                    <li>
                      <div class="list_inner">
                        <img
                          class="svg"
                          src="../../assets/img/svg/share.svg"
                          alt="share"/>
                        <Social />
                      </div>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </transition>
  </div>
</template>

<script>
import Contact from "../Contact.vue";
import Map from "../Map.vue";
import Social from "../Social.vue";
export default {
  components: {
    Contact,
    Map,
    Social,
  },
  data() {
    return {
      imgSrc: require("../../assets/img/callto-action/2.jpg"),
      isActive: false,
      isVisible: false,
    };
  },
  methods: {
    showModal: function() {
      this.isActive = true;
      this.isVisible = true;
    },
    closeModal: function() {
      this.isActive = false;
      this.isVisible = false;
    },
  },
};
</script>

<style lang="scss" scoped></style>
