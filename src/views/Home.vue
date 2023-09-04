<template>
  <div class="home-two">
    <Header />
    <!-- End Header Section -->
    <Slider />
    <!-- End Slider Section -->
    <div class="shane_tm_section" id="about">
      <div class="shane_tm_about">
        <div class="container">
          <About />
        </div>
        <!--  End container -->
      </div>
    </div>
    <div class="shane_tm_section" id="experience">
      <div class="shane_tm_experience">
        <div class="container">
          <div class="shane_tm_title">
            <span>Tapasztalat</span>
            <h3>Szakmai tapasztalat</h3>
          </div>
          <!-- End shane_tm_title -->
          <Experience />
          <!-- End news  -->
        </div>
      </div>
    </div>
    
    <!-- End About Section -->
    <div class="shane_tm_section" id="portfolio">
      <div class="shane_tm_news">
        <div class="container">
          <div class="shane_tm_title">
            <span>Munkáim</span>
            <h3>Publikus munkáim</h3>
          </div>
          <!-- End shane_tm_title -->
          <Portfolio />
          <!-- End news  -->
        </div>
      </div>
    </div>
    <!-- End Portfolio Section -->
   <div class="shane_tm_section" id="skills">
      <div class="shane_tm_portfolio">
         <Skills />
      </div>
    </div>
    <!-- End Skills Section -->

    <div class="shane_tm_section" id="brand">
      <div class="shane_tm_partners">
        <div class="container">
          <div class="partners_inner">
            <Brand />
          </div>
        </div>
      </div>
    </div>
    <!-- End shane_tm_partners -->
    
    <div class="shane_tm_section" id="testimonial">
      <div class="shane_tm_testimonials">
        <div class="container">
          <div class="testimonials_inner">
            <div class="left" v-scroll-reveal="{ delay: 50 }">
              <div class="shane_tm_title">
                <span>Rólam mondták</span>
                <h3>Ügyfeleim véleménye</h3>
              </div>
            </div>
            <div class="right" v-scroll-reveal="{ delay: 150 }">
              <Testimonial />
            </div>
          </div>
        </div>
      </div>
    </div>
    <!-- End  shane_tm_testimonials -->
    
    <div class="shane_tm_section" id="contact">
       <CallToActions />
    </div>
    <!-- End  call to actions -->

    <Footer />
    <!-- End  footer  -->
  </div>
</template>

<script>
import Header from "../components/Header";
import Slider from "../components/slider/Slider";
import About from "../components/about/About";
import Portfolio from "../components/portfolio/Portfolio";
import Skills from "../components/skills/Skills";
import Brand from "../components/Brand";
import Experience from "../components/experience/Experience";
import Testimonial from "../components/testimonial/Testimonial";
import CallToActions from "../components/calltoactions/CallToActions";
import Footer from "../components/Footer";
export default {
  components: {
    Header,
    Slider,
    About,
    Portfolio,
    Skills,
    Brand,
    Experience,
    Testimonial,
    CallToActions,
    Footer,
  },
};
</script>

<style lang="scss" scoped></style>
