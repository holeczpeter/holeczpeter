<template>
  <div class="shane_tm_section">
    <div class="shane_tm_skills">
      <div class="container">
        <div class="skills_inner">
          <div
            class="left"
            v-scroll-reveal="{ delay: 50, distance: '50px', duration: 1000 }">
            <div class="shane_tm_title">
              <h3> {{$t('skills_desc')}}</h3>
            </div>
            <div class="text">
              <p class="justify-p">
                {{$t('skills_details')}}     
               </p>
            </div>
          </div>
          <div class="right">
            <div class="tokyo_progress">
              <div
                class="progress_inner"
                v-scroll-reveal="{
                  delay: 50,
                  distance: '20px',
                  duration: 1000,
                }">
                <span>
                  <span class="label">{{$t('web_pages')}}</span>
                  <span class="number">20%</span>
                </span>
                <div class="background">
                  <div class="bar">
                    <div class="bar_in" style="width:20%"></div>
                  </div>
                </div>
              </div>
              <div
                class="progress_inner"
                v-scroll-reveal="{
                  delay: 100,
                  distance: '20px',
                  duration: 1200,
                }">
                <span>
                  <span class="label">{{$t('web_apps')}}</span>
                  <span class="number">70%</span>
                </span>
                <div class="background">
                  <div class="bar">
                    <div class="bar_in" style="width:70%"></div>
                  </div>
                </div>
              </div>
              <div
                class="progress_inner"
                v-scroll-reveal="{
                  delay: 150,
                  distance: '20px',
                  duration: 1300,
                }">
                <span>
                  <span class="label">{{$t('desktop_apps')}}</span>
                  <span class="number">10%</span>
                </span>
                <div class="background">
                  <div class="bar">
                    <div class="bar_in" style="width:10%"></div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {};
</script>

<style lang="scss" scoped></style>