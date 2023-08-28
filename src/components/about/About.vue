<template>
  <div class="about_inner">
    <div class="left">
      <div class="image">
        <img src="../../assets/img/placeholders/1-1.jpg" alt="placeholder" />
        <div
          class="main"
          v-scroll-reveal="{ delay: 20 }"
          :style="{ backgroundImage: 'url(' + aboutImg + ')' }"
        ></div>
      </div>
      <!-- End image  -->
    </div>
    <!-- End left -->

    <div class="right">
      <div class="shane_tm_title">
        <span v-scroll-reveal="{ delay: 20 }">Rólam</span>
        <h3 v-scroll-reveal="{ delay: 40 }">
          Full-stack Developer
        </h3>
      </div>
      <div class="text" v-scroll-reveal="{ delay: 60 }">
        <p>
         Üdvözöllek a weboldalamon! Örülök, hogy ellátogattál hozzám. Engedd meg, hogy bemutatkozzam: Holecz Péter vagyok, egy szenvedélyes és elkötelezett full-stack fejlesztő 10 éves tapasztalattal a háromlábú világban - a frontend, backend és adatbázis rétegek összehangolásában.
         Hiszek abban, hogy a fejlődés sosem áll meg. Mindig éberen figyelem a legújabb trendeket és technológiákat, hogy mindig a legfrissebb eszközökkel és megoldásokkal rendelkezzek a következő kihívásokhoz. Az együttműködés, a kreativitás és a problémamegoldás iránti szenvedélyem mindig jelen van minden projektem során.
        Ha szeretnél együtt dolgozni egy lenyűgöző webalkalmazás vagy honlap létrehozásán, vagy csak egyszerűen megosztanád ötleteidet és gondolataidat, ne habozz kapcsolatba lépni velem. Az innováció és a minőség iránti elkötelezettségemmel garantálom, hogy közös munkánk során valódi értéket teremtünk.
        </p>
      </div>
      <div class="shane_tm_button" v-scroll-reveal="{ delay: 80 }">
        <a :href="cv" download>
          Download CV
        </a>
      </div>
    </div>
    <!-- End right -->
    
  </div>
  
                            <!-- End Single Tab  -->

                            
</template>

<script>
export default {
  data() {
    return {
      aboutImg: require("../../assets/img/about/2.jpg"),
      cv: require("../../assets/img/resume/resume.jpg"),
    };
  },
};
</script>
