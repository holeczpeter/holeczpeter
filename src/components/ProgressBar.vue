
<template>
    <div class="progress-bar">
      <div class="info">
        <label>{{label}}</label>
        <label class="percentage">{{percentage}}%   </label>
      </div>
      <div class="background-bar"></div>
      <transition appear @before-appear="beforeEnter" @after-appear="enter">
        <div class="tracker-bar"></div>
      </transition>
   </div>
</template>

<script>
    export default {
     props: {
          percentage: Number,
          label: String,
        },
     methods: {
      beforeEnter (el) {
        el.style.width = 0
      },
      enter (el) {
        el.style.width = `${this.percentage}%`
        el.style.transition = `width 1s linear`
      }
    }
  };
</script>