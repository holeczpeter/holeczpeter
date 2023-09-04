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
              :style="{ backgroundImage: 'url(' + imgSrc7 + ')' }"
            ></div>
          </div>
          <!-- End image -->

          <div class="details">
            <h3 class="title" @click="showModal7">
              OEE - teljes eszközhatékonyság
            </h3>
            <p class="date">
              <a href="#">Webalkalmazás</a> <span>.NET</span>
            </p>
          </div>
          <!-- End details -->
        </div>
        <!-- Start Modalbox -->
        <transition name="fade">
          <!-- Modal -->
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
                    alt="cancel-img"
                  />
                </div>
                <!-- End .close -->
                <div class="shane_tm_modalbox_news">
                  <div class="box_inner">
                    <div class="image">
                      <img
                        src="../../assets/img/placeholders/oee.jpg"
                        alt="thumb"
                      />
                      <div
                        class="main"
                        :style="{ backgroundImage: 'url(' + imgSrc7 + ')' }"
                      ></div>
                    </div>
                    <!-- End image -->
                    <div class="details">
                      <h3 class="title">
                        OEE - Teljes eszközhatékonyság
                      </h3>
                      <p class="date">
                        <a href="#">Alkalmazás</a>
                      </p>
                    </div>
                    <!-- End details -->
                    <div class="description">
                      <p class="justify-p">
                         Az OEE segítségével maximalizálhatja gépei hatékonyságát, csökkentheti az állásidőket és optimalizálhatja a termelési folyamatokat. Ha valódi versenyelőnyre vágyik a gyártásban, az OEE program a kulcs a sikerhez!
                      </p>
                    </div>
                    <!-- End description -->
                  </div>
                  <!-- End .box_inner -->
                </div>
                <!-- shane_tm_modalbox_news -->
              </div>
            </div>
          </div>
        </transition>
        <!-- End Modalbox -->
      </li>
    <li>
        <div class="list_inner" v-scroll-reveal="{ delay: 100 }">
          <div class="image">
            <img src="../../assets/img/placeholders/spc.jpg" alt="thumb" />
            <div
              class="main"
              @click="showModal6"
              :style="{ backgroundImage: 'url(' + imgSrc6 + ')' }"
            ></div>
          </div>
          <!-- End image -->

          <div class="details">
            <h3 class="title" @click="showModal6">
              SPC - Statiszikai folyamatszabályozás
            </h3>
            <p class="date">
              <a href="#">Webalkalmazás</a> <span>.NET</span>
            </p>
          </div>
          <!-- End details -->
        </div>
        <!-- Start Modalbox -->
        <transition name="fade">
          <!-- Modal -->
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
                    alt="cancel-img"
                  />
                </div>
                <!-- End .close -->
                <div class="shane_tm_modalbox_news">
                  <div class="box_inner">
                    <div class="image">
                      <img
                        src="../../assets/img/placeholders/spc.jpg"
                        alt="thumb"
                      />
                      <div
                        class="main"
                        :style="{ backgroundImage: 'url(' + imgSrc6 + ')' }"
                      ></div>
                    </div>
                    <!-- End image -->
                    <div class="details">
                      <h3 class="title">
                        SPC - Statisztikai folyamatszabályozás
                      </h3>
                      <p class="date">
                        <a href="#">Alkalmazás</a>
                       
                      </p>
                    </div>
                    <!-- End details -->

                    <div class="description">
                      <p class="justify-p">
                         Bemutatom SPC alkalmazásomat (Statisztikai folyamatszabályozó program), ami forradalmasítja a minőségellenőrzést és a folyamatoptimalizálást. Az SPC segítségével könnyedén monitorozhatja és szabályozhatja a termelési folyamatokat valós időben, minimalizálva a hibák és selejtek számát, így növelve a hatékonyságot és a termékminőséget. Hozza ki a legtöbbet a gyártásából az SPC segítségével!
                      </p>
                    </div>
                    <!-- End description -->
                    
                  </div>
                  <!-- End .box_inner -->
                </div>
                <!-- shane_tm_modalbox_news -->
              </div>
            </div>
          </div>
        </transition>
        <!-- End Modalbox -->
      </li>
      <li>
        <div class="list_inner" v-scroll-reveal="{ delay: 100 }">
          <div class="image">
            <img src="../../assets/img/placeholders/vivenphoto.jpg" alt="thumb" />
            <div
              class="main"
              @click="showModal"
              :style="{ backgroundImage: 'url(' + imgSrc + ')' }"
            ></div>
          </div>
          <!-- End image -->

          <div class="details">
            <h3 class="title" @click="showModal">
              VivienPhoto
            </h3>
            <p class="date">
              <a href="#">Weboldal</a> <span>React</span> <span>HTML</span> <span>CSS</span>
            </p>
          </div>
          <!-- End details -->
        </div>
        <!-- Start Modalbox -->
        <transition name="fade">
          <!-- Modal -->
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
                    alt="cancel-img"
                  />
                </div>
                <!-- End .close -->
                <div class="shane_tm_modalbox_news">
                  <div class="box_inner">
                    <div class="image">
                      <img
                        src="../../assets/img/placeholders/4-3.jpg"
                        alt="thumb"
                      />
                      <div
                        class="main"
                        :style="{ backgroundImage: 'url(' + imgSrc + ')' }"
                      ></div>
                    </div>
                    <!-- End image -->
                    <div class="details">
                      <h3 class="title">
                        Fotós portfólió
                      </h3>
                      <p class="date">
                        <a href="#">VivienPhoto</a>
                      
                      </p>
                    </div>
                    <!-- End details -->

                    <div class="description">
                      <p class="justify-p">
                        Ez a weboldal a kreativitás és technológia művészi összeolvadása, amely a fotózás világába varázsolja Önt. Az elegáns design és a felhasználóbarát felület együttműködése által könnyedén felfedezheti a portfóliót, és mélyen belemélyedhet a képek történeteibe.
                      </p>
                    </div>
                    <!-- End description -->
                    
                  </div>
                  <!-- End .box_inner -->
                </div>
                <!-- shane_tm_modalbox_news -->
              </div>
            </div>
          </div>
        </transition>
        <!-- End Modalbox -->
      </li>
      <li>
        <div class="list_inner" v-scroll-reveal="{ delay: 50 }">
          <div class="image">
            <img src="../../assets/img/placeholders/1-1.jpg" alt="thumb" />
            <div
              class="main"
              @click="showModal2"
              :style="{ backgroundImage: 'url(' + imgSrc2 + ')' }"
            ></div>
          </div>
          <!-- End image -->

          <div class="details">
            <h3 class="title" @click="showModal2">
              Hechinger FSK - Hibagyűjtő és kiértékelő rendszer
            </h3>
            <p class="date">
               <a href="#">Webalkalmazás</a> <span>.NET</span> <span>Angular</span> 
            </p>
          </div>
          <!-- End details -->
        </div>

        <!-- Start Modalbox -->
        <transition name="fade">
          <!-- Modal -->
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
                    alt="cancel-img"
                  />
                </div>
                <!-- End .close -->

                <div class="shane_tm_modalbox_news">
                  <div class="box_inner">
                    <div class="image">
                      <img
                        src="../../assets/img/placeholders/1-1.jpg"
                        alt="thumb"/>
                      <div
                        class="main"
                        :style="{ backgroundImage: 'url(' + imgSrc2 + ')' }"
                      ></div>
                    </div>
                    <!-- End image -->
                    <div class="details">
                      <h3 class="title">
                        Hibaösszesítő és statisztikai alkalmazás
                      </h3>
                      <p class="date">
                        <a href="#"> Hechinger Hungary Kft</a>
                        
                      </p>
                    </div>
                    <!-- End details -->

                    <div class="description">
                       <p class="justify-p">
                        Azt hisszük, hogy minden hiba rejt magában lehetőséget a fejlődésre. Ezért hoztuk létre ezt a kifinomult szoftvert, amely lehetővé teszi, hogy a hibákat ne csak problémaként lássuk, hanem a folyamatos javulás és hatékonyság növelés lehetőségének előfutáraként.
                        Ez az alkalmazás lehetővé teszi, hogy a hibák adatait gyorsan és hatékonyan kezelje, és egyúttal részletes statisztikákat, interaktív grafikonokat és informatív táblázatokat generáljon a hibaelőfordulásokról. Legyen a döntések készítése mostantól adatvezérelt és pontos, amelyek a termelési hatékonyság növelését célozzák.
                        A .Net Core és Angular technológiák összjátéka garantálja a stabil és biztonságos működést, miközben a felhasználóbarát felület révén könnyedén és gyorsan navigálhat az adatok között. Bármikor és bárhonnan elérheti az alkalmazást, így mindig képben lehet a gyártási folyamatokkal.
                      </p>
                    </div>
                    <!-- End description -->

                  
                    <!-- End news share -->
                  </div>
                  <!-- End .box_inner -->
                </div>
                <!-- shane_tm_modalbox_news -->
              </div>
            </div>
          </div>
        </transition>
        <!-- End Modalbox -->
      </li>
      <!-- End li -->
      <li>
        <div class="list_inner" v-scroll-reveal="{ delay: 150 }">
          <div class="image">
            <img src="../../assets/img/placeholders/1-1.jpg" alt="thumb" />
            <div
              class="main"
              @click="showModal3"
              :style="{ backgroundImage: 'url(' + imgSrc3 + ')' }"
            ></div>
          </div>
          <!-- End image -->
          <div class="details">
            <h3 class="title" @click="showModal3">
              Pesti Rajmund
            </h3>
            <p class="date">
             <a href="#">Weboldal</a>  <span>HTML | CSS</span>
            </p>
          </div>
          <!-- End details -->
        </div>
        <!-- Start Modalbox -->
        <transition name="fade">
          <!-- Modal -->
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
                    alt="cancel-img"
                  />
                </div>
                <!-- End .close -->
                <div class="shane_tm_modalbox_news">
                  <div class="box_inner">
                    <div class="image">
                      <img
                        src="../../assets/img/placeholders/4-3.jpg"
                        alt="thumb"
                      />
                      <div
                        class="main"
                        :style="{ backgroundImage: 'url(' + imgSrc3 + ')' }"
                      ></div>
                    </div>
                    <!-- End image -->
                    <div class="details">
                      <h3 class="title">
                        Informatikai rendszerek kiépítése
                      </h3>
                      <p class="date">
                        <a href="#">Pesti Rajmund</a>
                        
                      </p>
                    </div>
                    <!-- End details -->
                    <div class="description">
                      <p class="justify-p">
                        Fedezze fel az exkluzív rendszergazda/informatikus portfólió weboldalt, ahol a digitális rendszerek és az informatikai megoldások mögötti zsenialitás feltárul.
                      </p>
                    </div>
                    <!-- End description -->
                  </div>
                  <!-- End .box_inner -->
                </div>
                <!-- shane_tm_modalbox_news -->
              </div>
            </div>
          </div>
        </transition>
        <!-- End Modalbox -->
      </li>
      <li>
        <div class="list_inner" v-scroll-reveal="{ delay: 50 }">
          <div class="image">
            <img src="../../assets/img/placeholders/hp.jpg" alt="thumb" />
            <div
              class="main"
              @click="showModal4"
              :style="{ backgroundImage: 'url(' + imgSrc4 + ')' }"
            ></div>
          </div>
          <!-- End image -->

          <div class="details">
            <h3 class="title" @click="showModal4">
              Holecz Péter
            </h3>
            <p class="date">
               <a href="#">Weboldal</a> <span>VUE.js | HTML | CSS</span>
            </p>
          </div>
          <!-- End details -->
        </div>

        <!-- Start Modalbox -->
        <transition name="fade">
          <!-- Modal -->
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
                <!-- End .close -->
                <div class="shane_tm_modalbox_news">
                  <div class="box_inner">
                    <div class="image">
                      <img
                        src="../../assets/img/placeholders/hp.jpg"
                        alt="thumb"/>
                      <div
                        class="main"
                        :style="{ backgroundImage: 'url(' + imgSrc4 + ')' }"
                      ></div>
                    </div>
                    <!-- End image -->
                    <div class="details">
                      <h3 class="title">
                        Weboldal 
                      </h3>
                      <p class="date">
                        <a href="#"> Holecz Péter</a>
                      </p>
                    </div>
                    <!-- End details -->
                    <div class="description">
                     <p class="justify-p">
                      Üdvözlöm a személyes portfóliómban! A weboldalam Vue.js technológiával lett létrehozva, így garantáltan modern és interaktív élményt nyújt. Fedezze fel a projekteket, amelyeken dolgoztam, és ismerje meg a különböző készségeimet. Ha szeretne egyedi és hatásos megoldásokat látni, amelyekkel inspirálódhat, akkor a megfelelő helyen jár. Köszönöm, hogy meglátogatta az oldalamat. Egyedi szoftverfejlesztési megoldások miatt lépjen kapcsolatba velem.
                     </p>
                    </div>
                  </div>
                  <!-- End .box_inner -->
                </div>
                <!-- shane_tm_modalbox_news -->
              </div>
            </div>
          </div>
        </transition>
        <!-- End Modalbox -->
      </li>
      <li>
        <div class="list_inner" v-scroll-reveal="{ delay: 50 }">
          <div class="image">
            <img src="../../assets/img/placeholders/idopontfoglalo.jpg" alt="thumb" />
            <div
              class="main"
              @click="showModal5"
              :style="{ backgroundImage: 'url(' + imgSrc5 + ')' }"
            ></div>
          </div>
          <!-- End image -->

          <div class="details">
            <h3 class="title" @click="showModal5">
              Időpontfoglaló
            </h3>
            <p class="date">
               <a href="#">Webalkalmazás</a> <span>VUE.js</span> <span>HTML</span> <span>CSS</span>
            </p>
          </div>
          <!-- End details -->
        </div>

        <!-- Start Modalbox -->
        <transition name="fade">
          <!-- Modal -->
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
                <!-- End .close -->
                <div class="shane_tm_modalbox_news">
                  <div class="box_inner">
                    <div class="image">
                      <img
                        src="../../assets/img/placeholders/idopontfoglalo.jpg"
                        alt="thumb"/>
                      <div
                        class="main"
                        :style="{ backgroundImage: 'url(' + imgSrc5 + ')' }"
                      ></div>
                    </div>
                    <!-- End image -->
                    <div class="details">
                      <h3 class="title">
                        Időpontfoglaló webalkalmazás 
                      </h3>
                      <p class="date">
                        <a href="#"> Holecz Péter</a>
                      </p>
                    </div>
                    <!-- End details -->
                    <div class="description">
                     <p class="justify-p">
                      Bemutatom az időpontfoglaló alkalmazást, amely egyszerű és hatékony módot kínál az idő optimalizálására. Az ügyfelei foglaljanak időpontokat könnyedén és gyorsan, és kövesse nyomon az időbeosztást az alkalmazás segítségével, így  több időt szánhat a fontos dolgokra az életében!
                     </p>
                    </div>
                    <!-- End description -->
                    <!-- End news share -->
                  </div>
                  <!-- End .box_inner -->
                </div>
                <!-- shane_tm_modalbox_news -->
              </div>
            </div>
          </div>
        </transition>
        <!-- End Modalbox -->
      </li>
      <!-- End li -->
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
