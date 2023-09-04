<template>
  <hooper :settings="hooperSettings">
    <slide v-for="(tesimonial, i) in testimonialContent" :key="i">
      <ul>
        <li class="item">
          <div class="texts">
            <p class="justify-p">
              {{ tesimonial.desc }}
            </p>
            <div class="author">
              <div class="image">
                <div
                  class="main"
                  :style="{ backgroundImage: 'url(' + tesimonial.imgSrc + ')' }"
                ></div>
              </div>
              <div class="short">
                <h3 class="author">
                  <span>{{ tesimonial.name }}</span>
                </h3>
                <h3 class="job">
                  <span>{{ tesimonial.designation }}</span>
                </h3>
              </div>
            </div>
          </div>
        </li>
      </ul>
    </slide>
  </hooper>
</template>

<script>
import { Hooper, Slide } from "hooper";
import "hooper/dist/hooper.css";
export default {
  components: {
    Hooper,
    Slide,
  },
  data() {
    return {
      testimonialContent: [
        {
          name: "Vivien Vincze",
          designation: "Photographer",
          imgSrc: require("../../assets/img/testimotional/1.jpg"),
          desc: `Az együttműködésünk során Peti mindig türelmes volt, és mindent megtett annak érdekében, hogy a weboldalam olyan legyen, amilyennek elképzeltem. A végeredmény olyan lett, amely tükrözi a munkám lényegét és szépségét.`,
        },
        {
          name: "Pesti Rajmund",
          designation: "Informatikus",
          imgSrc: require("../../assets/img/testimotional/2.jpg"),
          desc: `A weboldal, amit számomra készített, egyszerűen lenyűgöző. Péter rendkívül tehetséges full-stack fejlesztés terén.  Ha valóban kiváló minőségű webfejlesztőt keresel, aki nem csak érti a technológiát, hanem a problémáidat is, Peti az ember, akit keresel. `,
        },
        {
          name: "Pálfia Ádám",
          designation: "Minőségirányítási vezető",
          imgSrc: require("../../assets/img/testimotional/3.jpg"),
          desc: `A hibaösszesítő alkalmazás olyan egyszerűséget és hatékonyságot hozott a mindennapi munkánkba, amit korábban elképzelni sem mertünk. Holecz Péter figyelme a részletekre és az ügyfelek igényeinek megértése valóban megkülönbözteti őt a szakmában. A közös munka során mindig rugalmas volt, könnyen együtt tudtunk dolgozni és megértette, hogy pontosan mire van szükségünk.`,
        },
      ],
      hooperSettings: {
        infiniteScroll: true,
        wheelControl: false,
        autoPlay: true,
        mouseDrag: false,
        transition: 600,
        playSpeed: 3500,
        itemsToShow: 1,
      },
    };
  },
};
</script>

<style lang="scss" scoped></style>
