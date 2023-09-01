<template>
  <div class="shane_tm_section">
    <div class="shane_tm_skills">
      <div class="container">
        <div class="skills_inner">
          <div
            class="left"
            v-scroll-reveal="{ delay: 50, distance: '50px', duration: 1000 }">
            <div class="shane_tm_title">
              <h3>Magas szintű fejlesztési és programozási képességekkel rendelkezem</h3>
            </div>
            <div class="text">
              <p class="justify-p">
               Az évek során megszerzett tapasztalatom és tudásom révén olyan projekteken dolgoztam, amelyekben az innováció és a funkcionalitás egyesítése volt a fő cél.
                A frontend tervezéstől kezdve a felhasználói élmény kialakításán át egészen a sziklaszilárd backend architektúráig mindent megteszek azért, 
                hogy a digitális térben otthonosan mozoghasson. Az éleslátásom és a részletek iránti maximalizmusom segítségével olyan webalkalmazásokat hozok létre, 
                amelyek nem csak esztétikusak és felhasználóbarátok, de a magas színvonalú kódolás révén rendkívül hatékonyak és skálázhatóak is.
              </p>
            </div>
          </div>
          <!-- End .left -->

          <div class="right">
            <div class="tokyo_progress">
              <div
                class="progress_inner"
                v-scroll-reveal="{
                  delay: 50,
                  distance: '20px',
                  duration: 1000,
                }"
              >
                <span>
                  <span class="label">Webfejlesztés</span>
                  <span class="number">20%</span>
                </span>
                <div class="background">
                  <div class="bar">
                    <div class="bar_in" style="width:20%"></div>
                  </div>
                </div>
              </div>
              <!-- End .progress_inner -->

              <div
                class="progress_inner"
                v-scroll-reveal="{
                  delay: 100,
                  distance: '20px',
                  duration: 1200,
                }"
              >
                <span>
                  <span class="label">Webalkalmazások</span>
                  <span class="number">70%</span>
                </span>
                <div class="background">
                  <div class="bar">
                    <div class="bar_in" style="width:70%"></div>
                  </div>
                </div>
              </div>
              <!-- End .progress_inner -->

              <div
                class="progress_inner"
                v-scroll-reveal="{
                  delay: 150,
                  distance: '20px',
                  duration: 1300,
                }"
              >
                <span>
                  <span class="label">Asztali alkalmazások</span>
                  <span class="number">10%</span>
                </span>
                <div class="background">
                  <div class="bar">
                    <div class="bar_in" style="width:10%"></div>
                  </div>
                </div>
              </div>
              <!-- End .progress_inner -->
            </div>
          </div>
          <!-- End .right -->
        </div>
      </div>
      <!-- End .conainer -->
    </div>
  </div>
</template>

<script>
export default {};
</script>

<style lang="scss" scoped></style>
