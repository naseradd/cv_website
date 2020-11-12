<template>
  <div><object class="pdf" :data="`${path}`" type="application/pdf"></object></div>
</template>
<script>
export default {
  name: "pdf",
  props: {
    path: {
      type: String,
      default: "",
    }
  }
};
</script>
<style lang="scss" scoped>

[class*="pdf"] {
    display: block;       /* iframes are inline by default */
    border: none;         /* Reset default border */
    height: 100vh;        /* Viewport-relative units */
    width: 100vw;
}

</style>
