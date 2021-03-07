<template>
  <div class="cells-container">
    <Cell v-for="(cell, index) in cellsArray"
          :key="index"
          :coord-x="cell.coord.x"
          :coord-y="cell.coord.y"
          :state="cell.state"
          @click="cellClickHandler($event, index)"
    ></Cell>
  </div>
</template>

<script>
import Cell from "@/components/Cell";
import {CellsFactory} from "@/factories/cells-factory";
export default {
  components: {Cell},
  computed:{
    numberOfAllCells(){
      return this.area * this.area;
    },
  },

  data(){
    let area = 7;

    return {
      area,
      cellsArray: new CellsFactory(area).make()
    } // return.
  }, // data.
  methods:{
    cellClickHandler(_event, index){
      this.cellsArray[index].state = 'miss';
      console.log(index);
    }
  },

  name: "PlayingField"
} // default.
</script>

<style scoped>
  :root{
    --col-size:50px;
  }

  /* TODO */
  .cells-container{
    max-width: 350px;
    /*min-width: 100%;*/
    display: grid;
    /*grid-template-columns: repeat(7, var(--col-size));*/
    /*grid-template-rows: repeat(7, var(--col-size));*/
    grid-template-columns: repeat(7, 50px);
    grid-template-rows: repeat(7, 50px);
    margin: 0 auto;
  }
</style>
