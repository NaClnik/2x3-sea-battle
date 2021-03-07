<template>
  <div
      class="cell"
      @drop="onDrop"
      @dragover.prevent
      @dragenter.prevent
  >
    <Ship
        v-if="ship"
        :can-toggle="ship.canToggle"
        :num-of-decks="ship.numOfDecks"
        :position="ship.position"
    ></Ship>
  </div>
</template>

<script>
import Ship from "@/components/Ship";
export default {
  name: "Cell",
  components: {Ship},
  props: {
    coordX: {
      type: Number,
      required: true
    }, // coordX.
    coordY: {
      type: Number,
      required: true
    }, // coordY.
    state: {
      type: String,
      required: true
    } // state.
  }, // props.
  data(){
    return{
      ship: null
    } // return.
  }, // data.
  methods: {
    onDrop(event){
      let position = 'absolute';
      let canToggle = true;
      let numOfDecks = parseInt(event.dataTransfer.getData('numOfDecks'));

      this.ship = {
        position,
        canToggle,
        numOfDecks
      } // ship.
    } // onDrop.
  } // methods.
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
