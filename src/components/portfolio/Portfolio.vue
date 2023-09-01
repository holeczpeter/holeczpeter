<template>
  <div class="news_list">
    <ul>
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
              <a href="#">Weboldal</a><span>Apr 2020</span> <span>React | HTML | CSS</span>
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
                        <span>07 April 2020</span>
                      </p>
                    </div>
                    <!-- End details -->

                    <div class="description">
                      <p class="justify-p">
                        Ez a weboldal a kreativitás és technológia művészi összeolvadása, amely a fotózás világába varázsolja Önt. Az elegáns design és a felhasználóbarát felület együttműködése által könnyedén felfedezheti a portfóliót, és mélyen belemélyedhet a képek történeteibe.
                      </p>
                    </div>
                    <!-- End description -->
                    <div class="news_share">
                      <Social />
                    </div>
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
              Hechinger FSK
            </h3>
            <p class="date">
               <a href="#">Webalkalmazás</a> <span>01 Jan 2023</span>
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
                        <span>01 Jan 2023</span>
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

                    <div class="news_share">
                      <Social />
                    </div>
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
             <a href="#">Weboldal</a> <span>Jun 2023</span> <span>HTML | CSS</span>
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
                        <span>02 Jun 2023</span>
                      </p>
                    </div>
                    <!-- End details -->
                    <div class="description">
                      <p class="justify-p">
                        Fedezze fel az exkluzív rendszergazda/informatikus portfólió weboldalt, ahol a digitális rendszerek és az informatikai megoldások mögötti zsenialitás feltárul.
                      </p>
                    </div>
                    <!-- End description -->
                    <div class="news_share">
                      <Social />
                    </div>
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
               <a href="#">Weboldal</a> <span>Aug 2023</span> <span>VUE.js | HTML | CSS</span>
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
                        <span>Aug 2023</span>
                      </p>
                    </div>
                    <!-- End details -->

                    <div class="description">
                     <p class="justify-p">
                      Üdvözöllek a személyes portfóliómban! A weboldalam Vue.js technológiával lett létrehozva, így garantáltan modern és interaktív élményt nyújt. Fedezd fel a projekteket, amelyeken dolgoztam, és ismerd meg a különböző készségeimet. Ha szeretnél egyedi és hatásos megoldásokat látni, amelyekkel inspirálódhatsz, akkor a helyes helyen jársz. Köszönöm, hogy meglátogattad az oldalamat, remélem, hogy élvezni fogod a tartalmat és az alkotásaimat!
                     </p>
                    </div>
                    <!-- End description -->

                    <div class="news_share">
                      <Social />
                    </div>
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
import Social from "../Social.vue";
export default {
  components: {
    Social,
  },
  data() {
    return {
      isActive: false,
      isActive2: false,
      isActive3: false,
       isActive4: false,
      isVisible: false,
      isVisible2: false,
      isVisible3: false,
      isVisible4: false,
      imgSrc: require("../../assets/img/news/1.jpg"),
      imgSrc2: require("../../assets/img/news/2.jpg"),
      imgSrc3: require("../../assets/img/news/3.jpg"),
      imgSrc4: require("../../assets/img/news/4.jpg"),
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
  },
};
</script>

<style lang="scss" scoped></style>
