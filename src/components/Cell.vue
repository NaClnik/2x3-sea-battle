<template>
  <div class="cell">
  </div>
</template>

<script>
export default {
  name: "Cell",
  props: {
    coordX: {
      type: Number,
      required: true
    }, // coordX.
    coordY: {
      type: Number,
      required: true
    }, // coordY.
  } // props.
} // default.
</script>

<style scoped>
  .cell{
    width: 100%;
    height: 100%;

    background: #05CBFA;
    border: #FFB90D solid 2px;
    position: relative;
  }
</style>
