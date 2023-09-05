<template>
  <hooper :settings="hooperSettings">
    <slide v-for="(tesimonial, i) in testimonialContent" :key="i">
      <ul>
        <li class="item">
          <div class="texts">
            <p class="justify-p">
               {{$t(tesimonial.desc)}}
            </p>
            <div class="author">
              <div class="image">
                <div
                  class="main"
                  :style="{ backgroundImage: 'url(' + tesimonial.imgSrc + ')' }" ></div>
              </div>
              <div class="short">
                <h3 class="author">
                  <span>{{ tesimonial.name }}</span>
                </h3>
                <h3 class="job">
                  <span> {{$t(tesimonial.designation)}} </span>
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
          designation: `vivienphoto_designation`,
          imgSrc: require("../../assets/img/testimotional/1.jpg"),
          desc: `vivienphoto_testimonial`,
        },
        {
          name: "Pesti Rajmund",
          designation: `pesti_rajmund_designation`,
          imgSrc: require("../../assets/img/testimotional/2.jpg"),
          desc: `pesti_rajmund_testimonial`,
        },
        {
          name: "Pálfia Ádám",
          designation: `hechinger_designation`,
          imgSrc: require("../../assets/img/testimotional/3.jpg"),
          desc: `hechinger_testimonial`,
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
