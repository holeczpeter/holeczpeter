<template>
<div class="container">
<div class="flex-container">
   <progress-bar
      :percentage="90"
      :label="`.NET`"></progress-bar>
   <progress-bar
      :percentage="87"
      :label="`Angular`"
      :class="'active'"></progress-bar>
    <progress-bar
      :percentage="70"
      :label="`VUE.JS`"
      :class="'active'"></progress-bar>
  </div>
    </div>
</template>

<script>
import ProgressBar from "../ProgressBar";
export default {
  components: {
    ProgressBar,
  },
 
};
</script>

<style lang="scss" scoped></style>