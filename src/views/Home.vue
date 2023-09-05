<template>
  <div class="home-two">
    <Header />
    <Slider />
    <div class="shane_tm_section" id="about">
      <div class="shane_tm_about">
        <div class="container">
          <About />
        </div>
      </div>
    </div>
    <div class="shane_tm_section" id="experience">
      <div class="shane_tm_experience">
        <div class="container">
          <div class="shane_tm_title">
            <span>{{ $t('experience') }}</span>
            <h3>{{ $t('professional_experience') }}</h3>
          </div>
          <Experience />
        </div>
      </div>
    </div>
    <div class="shane_tm_section" id="portfolio">
      <div class="shane_tm_news">
        <div class="container">
          <div class="shane_tm_title">
            <span>{{ $t('works') }}</span>
            <h3>{{ $t('public_works') }}</h3>
          </div>
          <Portfolio />
        </div>
      </div>
    </div>
   <div class="shane_tm_section" id="skills">
      <div class="shane_tm_portfolio">
         <Works />
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
                <span>{{ $t('testimonial') }}</span>
                <h3>{{ $t('client_testimonials') }}</h3>
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
import Brand from "../components/Brand";
import Experience from "../components/experience/Experience";
import Testimonial from "../components/testimonial/Testimonial";
import CallToActions from "../components/calltoactions/CallToActions";
import Works from "../components/works/Works";
import Footer from "../components/Footer";
export default {
  components: {
    Header,
    Slider,
    About,
    Portfolio,
    Brand,
    Experience,
    Testimonial,
    CallToActions,
    Works,
    Footer,
  },
 
};
</script>

<style lang="scss" scoped></style>
