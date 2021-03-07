<template>
  <div class="ship"
       draggable="true"
       @dragstart="onDragStart"
       @click="onClick"
       :style="flow"
  >
    <div class="deck"
         v-for="i in numOfDecks"
         :key="i"
    ></div>
  </div>
</template>

<script>
export default {
  name: "Ship",
  props: {
    canToggle: {
      type: Boolean,
      required: true
    },
    numOfDecks: {
      type: Number,
      required: true
    }, // numOfDecks
    position: {
      type: String,
      required: true
    } // position.
  }, // props.
  data(){
    return {
      isHorizontal: true,
      flow: {
        gridAutoFlow: 'column',
        width: 50 * this.numOfDecks + 'px',
        height: "50px"
      }
    } // return.
  }, // data.
  methods: {
    onDragStart(event){
      event.dataTransfer.dropEffect = 'move'
      event.dataTransfer.effectAllowed = 'move'
      event.dataTransfer.setData('numOfDecks', this.numOfDecks.toString());
    }, // onDragStart.
    onClick(){
      if(!this.canToggle)
        return;

      let size1 = "50px";
      let size2 = 50 * this.numOfDecks + "px";

      this.flow.gridAutoFlow = this.isHorizontal? 'row' : 'column';
      this.flow.width = this.isHorizontal ? size1 : size2;
      this.flow.height = this.isHorizontal ? size2 : size1;

      this.isHorizontal = !this.isHorizontal;
    }
  } // methods.
}
</script>

<style scoped>
  .ship{
    display: grid;
    grid-auto-flow: row;
  }

  .deck{
    /*width: 100%;*/
    /*height: 100%;*/

    width: 50px;
    height: 50px;

    background: #F50290;
    z-index: 99;
  }
</style>
