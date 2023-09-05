<template>
  <div class="news_list">
    <ul>
    <li>
        <div class="list_inner" v-scroll-reveal="{ delay: 100 }">
          <div class="image">
            <img src="../../assets/img/placeholders/oee.jpg" alt="thumb" />
            <div
              class="main"
              @click="showModal7"
              :style="{ backgroundImage: 'url(' + imgSrc7 + ')' }">
            </div>
          </div>
          <div class="details">
            <h3 class="title" @click="showModal7">
              OEE - {{$t('oee')}}
            </h3>
            <p class="date">
              <a href="#">{{$t('multilanguage')}} {{$t('web_app')}}</a> 
            </p>
            <p class="date">
              .NET
            </p>
          </div>
        </div>
        <transition name="fade">
          <div
            :class="{ 'modal-mask': isActive7 }"
            id="modal"
            @click="closeModal7"
            v-if="isVisible7">
            <div class="modal-dialog modal-dialog-centered " @click.stop>
              <div class="modal-content">
                <div class="close" @click="closeModal7">
                  <img
                    class="svg"
                    src="../../assets/img/svg/cancel.svg"
                    alt="cancel-img"/>
                </div>
                <div class="shane_tm_modalbox_news">
                  <div class="box_inner">
                    <div class="image">
                      <img
                        src="../../assets/img/placeholders/oee.jpg"
                        alt="thumb"/>
                      <div
                        class="main"
                        :style="{ backgroundImage: 'url(' + imgSrc7 + ')' }">
                      </div>
                    </div>
                    <div class="details">
                      <h3 class="title">
                        OEE -  {{$t('oee')}}
                      </h3>
                      <p class="date">
                        <a href="#">{{$t('multilanguage')}}  {{$t('web_app')}}</a>
                      </p>
                    </div>
                    <div class="description">
                      <p class="justify-p">
                        {{$t('oee_detail')}}
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </transition>
      </li>
    <li>
        <div class="list_inner" v-scroll-reveal="{ delay: 100 }">
          <div class="image">
            <img src="../../assets/img/placeholders/spc.jpg" alt="thumb" />
            <div
              class="main"
              @click="showModal6"
              :style="{ backgroundImage: 'url(' + imgSrc6 + ')' }">
            </div>
          </div>
          <div class="details">
            <h3 class="title" @click="showModal6">
              SPC -  {{$t('spc')}}
            </h3>
            <p class="date">
              <a href="#">{{$t('multilanguage')}}  {{$t('web_app')}}</a> 
            </p>
             <p class="date">
              .NET
            </p>
          </div>
        </div>
        <transition name="fade">
          <div
            :class="{ 'modal-mask': isActive6 }"
            id="modal"
            @click="closeModal6"
            v-if="isVisible6">
            <div class="modal-dialog modal-dialog-centered " @click.stop>
              <div class="modal-content">
                <div class="close" @click="closeModal6">
                  <img
                    class="svg"
                    src="../../assets/img/svg/cancel.svg"
                    alt="cancel-img" />
                </div>
                <div class="shane_tm_modalbox_news">
                  <div class="box_inner">
                    <div class="image">
                      <img
                        src="../../assets/img/placeholders/spc.jpg"
                        alt="thumb"/>
                      <div
                        class="main"
                        :style="{ backgroundImage: 'url(' + imgSrc6 + ')' }">
                      </div>
                    </div>
                    <div class="details">
                      <h3 class="title">
                        SPC - {{$t('spc')}}
                      </h3>
                      <p class="date">
                        <a href="#">{{$t('multilanguage')}}  {{$t('web_app')}}</a>
                      </p>
                      
                    </div>
                    <div class="description">
                      <p class="justify-p">
                         {{$t('spc_detail')}}    
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </transition>
      </li>
      <li>
        <div class="list_inner" v-scroll-reveal="{ delay: 100 }">
          <div class="image">
            <img src="../../assets/img/placeholders/vivenphoto.jpg" alt="thumb" />
            <div
              class="main"
              @click="showModal"
              :style="{ backgroundImage: 'url(' + imgSrc + ')' }">
            </div>
          </div>
          <div class="details">
            <h3 class="title" @click="showModal">
              VivienPhoto
            </h3>
            <p class="date">
              <a href="#">{{$t('multilanguage')}} {{$t('web_page')}} </a> 
            </p>
             <p class="date">
              React <span>HTML</span> <span>CSS</span>
            </p>
          </div>
        </div>
        <transition name="fade">
          <div
            :class="{ 'modal-mask': isActive }"
            id="modal"
            @click="closeModal"
            v-if="isVisible">
            <div class="modal-dialog modal-dialog-centered " @click.stop>
              <div class="modal-content">
                <div class="close" @click="closeModal">
                  <img
                    class="svg"
                    src="../../assets/img/svg/cancel.svg"
                    alt="cancel-img" />
                </div>
                <div class="shane_tm_modalbox_news">
                  <div class="box_inner">
                    <div class="image">
                      <img
                        src="../../assets/img/placeholders/4-3.jpg"
                        alt="thumb"/>
                      <div
                        class="main"
                        :style="{ backgroundImage: 'url(' + imgSrc + ')' }">
                      </div>
                    </div>
                    <div class="details">
                      <h3 class="title">
                        {{$t('photography_portfolio')}}
                      </h3>
                      <p class="date">
                        <a href="https://vivienphoto.com">VivienPhoto</a>
                      </p>
                    </div>
                    <div class="description">
                      <p class="justify-p">
                       {{$t('vivienphoto_detail')}}
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </transition>
      </li>
      <li>
        <div class="list_inner" v-scroll-reveal="{ delay: 50 }">
          <div class="image">
            <img src="../../assets/img/placeholders/1-1.jpg" alt="thumb" />
            <div
              class="main"
              @click="showModal2"
              :style="{ backgroundImage: 'url(' + imgSrc2 + ')' }">
            </div>
          </div>
          <div class="details">
            <h3 class="title" @click="showModal2">
              Hechinger FSK - {{$t('fsk')}}
            </h3>
            <p class="date">
              <a href="#">{{$t('multilanguage')}}  {{$t('web_app')}}</a>
            </p>
            <p class="date">
             .NET <span>Angular</span>
            </p>
          </div>
        </div>
        <transition name="fade">
          <div
            :class="{ 'modal-mask': isActive2 }"
            id="modal"
            @click="closeModal2"
            v-if="isVisible2">
            <div class="modal-dialog modal-dialog-centered " @click.stop>
              <div class="modal-content">
                <div class="close" @click="closeModal2">
                  <img
                    class="svg"
                    src="../../assets/img/svg/cancel.svg"
                    alt="cancel-img"/>
                </div>
                <div class="shane_tm_modalbox_news">
                  <div class="box_inner">
                    <div class="image">
                      <img
                        src="../../assets/img/placeholders/1-1.jpg"
                        alt="thumb"/>
                      <div
                        class="main"
                        :style="{ backgroundImage: 'url(' + imgSrc2 + ')' }">
                      </div>
                    </div>
                    <div class="details">
                      <h3 class="title">
                        {{$t('fsk')}} 
                      </h3>
                      <p class="date">
                        <a href="#"> Hechinger Hungary Kft</a>
                      </p>
                    </div>
                    <div class="description">
                       <p class="justify-p">
                         {{$t('fsk_details')}}</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </transition>
      </li>
      <li>
        <div class="list_inner" v-scroll-reveal="{ delay: 150 }">
          <div class="image">
            <img src="../../assets/img/placeholders/1-1.jpg" alt="thumb" />
            <div
              class="main"
              @click="showModal3"
              :style="{ backgroundImage: 'url(' + imgSrc3 + ')' }">
            </div>
          </div>
          <div class="details">
            <h3 class="title" @click="showModal3">
              PRIT
            </h3>
            <p class="date">
               <a href="#">{{$t('web_page')}}</a> 
            </p>
            <p class="date">
              HTML <span>CSS</span> 
            </p>
          </div>
        </div>
        <transition name="fade">
          <div
            :class="{ 'modal-mask': isActive3 }"
            id="modal"
            @click="closeModal3"
            v-if="isVisible3">
            <div class="modal-dialog modal-dialog-centered " @click.stop>
              <div class="modal-content">
                <div class="close" @click="closeModal3">
                  <img
                    class="svg"
                    src="../../assets/img/svg/cancel.svg"
                    alt="cancel-img" />
                </div>
                <div class="shane_tm_modalbox_news">
                  <div class="box_inner">
                    <div class="image">
                      <img
                        src="../../assets/img/placeholders/4-3.jpg"
                        alt="thumb"/>
                      <div
                        class="main"
                        :style="{ backgroundImage: 'url(' + imgSrc3 + ')' }" >
                      </div>
                    </div>
                    <div class="details">
                      <h3 class="title">
                      {{$t('prithu')}}
                      </h3>
                      <p class="date">
                        <a href="https://prit.hu">PRIT.HU</a>
                      </p>
                    </div>
                    <div class="description">
                      <p class="justify-p">
                       {{$t('prithu_details')}}
                      </p>  
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </transition>
      </li>
      <li>
        <div class="list_inner" v-scroll-reveal="{ delay: 50 }">
          <div class="image">
            <img src="../../assets/img/placeholders/hp.jpg" alt="thumb" />
            <div
              class="main"
              @click="showModal4"
              :style="{ backgroundImage: 'url(' + imgSrc4 + ')' }">
            </div>
          </div>
          <div class="details">
            <h3 class="title" @click="showModal4">
              Holecz Péter
            </h3>
            <p class="date">
               <a href="#"> {{$t('multilanguage')}}   {{$t('web_page')}}</a> 
            </p>
            <p class="date">
               VUE.js <span> HTML</span> <span>CSS</span>
            </p>
          </div>
        </div>
        <transition name="fade">
          <div
            :class="{ 'modal-mask': isActive4 }"
            id="modal"
            @click="closeModal4"
            v-if="isVisible4">
            <div class="modal-dialog modal-dialog-centered " @click.stop>
              <div class="modal-content">
                <div class="close" @click="closeModal4">
                  <img
                    class="svg"
                    src="../../assets/img/svg/cancel.svg"
                    alt="cancel-img"/>
                </div>
                <div class="shane_tm_modalbox_news">
                  <div class="box_inner">
                    <div class="image">
                      <img
                        src="../../assets/img/placeholders/hp.jpg"
                        alt="thumb"/>
                      <div
                        class="main"
                        :style="{ backgroundImage: 'url(' + imgSrc4 + ')' }">
                      </div>
                    </div>
                    <div class="details">
                      <h3 class="title">
                        {{$t('web_pages')}} 
                      </h3>
                      <p class="date">
                        <a href="#"> Holecz Péter</a>
                      </p>
                    </div>
                    <div class="description">
                     <p class="justify-p">
                      {{$t('hp_details')}}  
                     </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </transition>
      </li>
      <li>
        <div class="list_inner" v-scroll-reveal="{ delay: 50 }">
          <div class="image">
            <img src="../../assets/img/placeholders/idopontfoglalo.jpg" alt="thumb" />
            <div
              class="main"
              @click="showModal5"
              :style="{ backgroundImage: 'url(' + imgSrc5 + ')' }">
            </div>
          </div>
          <div class="details">
            <h3 class="title" @click="showModal5">
              {{$t('scheduler_web_application')}}  
            </h3>
            <p class="date">
               <a href="#">{{$t('multilanguage')}} {{$t('web_app')}}</a> 
            </p>
            <p class="date">
               VUE.js <span>HTML</span> <span>CSS</span>
            </p>
          </div>
        </div>
        <transition name="fade">
          <div
            :class="{ 'modal-mask': isActive5 }"
            id="modal"
            @click="closeModal5"
            v-if="isVisible5">
            <div class="modal-dialog modal-dialog-centered " @click.stop>
              <div class="modal-content">
                <div class="close" @click="closeModal5">
                  <img
                    class="svg"
                    src="../../assets/img/svg/cancel.svg"
                    alt="cancel-img"/>
                </div>
                <div class="shane_tm_modalbox_news">
                  <div class="box_inner">
                    <div class="image">
                      <img
                        src="../../assets/img/placeholders/idopontfoglalo.jpg"
                        alt="thumb"/>
                      <div
                        class="main"
                        :style="{ backgroundImage: 'url(' + imgSrc5 + ')' }">
                      </div>
                    </div>
                    <div class="details">
                      <h3 class="title">
                         {{$t('scheduler_web_application')}}  
                      </h3>
                      <p class="date">
                        <a href="#"> Holecz Péter</a>
                      </p>
                    </div>
                    <div class="description">
                      <p class="justify-p">
                        {{$t('scheduler_web_application_details')}}      
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </transition>
      </li>
    </ul>
  </div>
</template>

<script>

export default {
  components: {
  },
  data() {
    return {
      isActive: false,
      isActive2: false,
      isActive3: false,
      isActive4: false,
      isActive5: false,
      isActive6: false,
      isActive7: false,
      isVisible: false,
      isVisible2: false,
      isVisible3: false,
      isVisible4: false,
      isVisible5: false,
      isVisible6: false,
      isVisible7: false,
      imgSrc: require("../../assets/img/works/1.jpg"),
      imgSrc2: require("../../assets/img/works/2.jpg"),
      imgSrc3: require("../../assets/img/works/3.jpg"),
      imgSrc4: require("../../assets/img/works/4.jpg"),
      imgSrc5: require("../../assets/img/works/5.jpg"),
      imgSrc6: require("../../assets/img/works/6.jpg"),
      imgSrc7: require("../../assets/img/works/7.jpg"),
    };
  },
  methods: {
    showModal: function() {
      this.isActive = true;
      this.isVisible = true;
    },
    showModal2: function() {
      this.isActive2 = true;
      this.isVisible2 = true;
    },
    showModal3: function() {
      this.isActive3 = true;
      this.isVisible3 = true;
    },
    showModal4: function() {
      this.isActive4 = true;
      this.isVisible4 = true;
    },
     showModal5: function() {
      this.isActive5 = true;
      this.isVisible5 = true;
    },
     showModal6: function() {
      this.isActive6 = true;
      this.isVisible6 = true;
    },
     showModal7: function() {
      this.isActive7 = true;
      this.isVisible7 = true;
    },
    closeModal: function() {
      this.isActive = false;
      this.isVisible = false;
    },
    closeModal2: function() {
      this.isActive2 = false;
      this.isVisible2 = false;
    },
    closeModal3: function() {
      this.isActive3 = false;
      this.isVisible3 = false;
    },
    closeModal4: function() {
      this.isActive4 = false;
      this.isVisible4 = false;
    },
    closeModal5: function() {
      this.isActive5 = false;
      this.isVisible5 = false;
    },
     closeModal6: function() {
      this.isActive6 = false;
      this.isVisible6 = false;
    },
     closeModal7: function() {
      this.isActive7 = false;
      this.isVisible7 = false;
    },
  },
};
</script>

<style lang="scss" scoped></style>
