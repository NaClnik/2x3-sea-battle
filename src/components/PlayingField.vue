<template>
  <div class="playing-field-container">
    <div class="cells-container">
      <Cell v-for="(cell, index) in cellsArray"
            :key="index"
            :coord-x="cell.coord.x"
            :coord-y="cell.coord.y"
            :state="cell.state"
            @click="cellClickHandler($event, index)"
            @ship-drop="onShipDrop"
      ></Cell>
    </div>
    <div>
      <Ship
          style="margin: 5px"
          v-for="(ship, index) in shipsArray"
          :key="index"
          :index="index"
          :num-of-decks="ship.numOfDecks"
          :can-toggle="ship.canToggle"
          :position="ship.position"
      ></Ship>
    </div>
  </div>
</template>

<script>
import Cell from "@/components/Cell";
import {CellsFactory} from "@/factories/cells-factory";
import Ship from "@/components/Ship";
import {ShipsFactory} from "@/factories/ships-factory";
export default {
  components: {Ship, Cell},
  computed:{
    numberOfAllCells(){
      return this.area * this.area;
    },
  },

  data(){
    let area = 7;

    return {
      area,
      cellsArray: new CellsFactory(area).make(),
      shipsArray: new ShipsFactory().make()
    } // return.
  }, // data.
  methods:{
    cellClickHandler(_event, index){
      this.cellsArray[index].state = 'miss';
      console.log(index);
    },
    onShipDrop(index){
      console.log(index);
      // this.shipsArray.splice(index, 1);
      // console.log(index);
      // let copyArray = this.shipsArray.slice();
      // copyArray.splice(index, 1);
      // this.shipsArray = copyArray;
      // // copyArray = this.shipsArray.splice(index, 1);
      //
      // console.log(copyArray);
    } // onCustomDrag.

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
    /*margin: 0 auto;*/
  }

  .playing-field-container{
    display: flex;
    justify-content: space-around;
  }
</style>
