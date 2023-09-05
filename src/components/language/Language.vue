<template>
    <select v-model="$i18n.locale" @change="updateLanguage">
        <option value="en">English</option>
        <option value="hu">Hungarian</option>
    </select>
</template>

<script>
export default {
   methods: {
    updateLanguage() {
      sessionStorage.setItem("locale", this.$i18n.locale);
    },
  },
  mounted() {
    if (sessionStorage.getItem("locale")) {
      this.$i18n.locale = sessionStorage.getItem("locale");
    } else {
      sessionStorage.setItem("locale", this.$i18n.locale);
    }
  },
}
</script>