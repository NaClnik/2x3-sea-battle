<template>
  <div class="cells-container">
    <!--
      Нашёл, как сделать локальную переменную в шаблоне здесь.
      https://coderoad.ru/53732201/Vue-js-%D0%BB%D0%BE%D0%BA%D0%B0%D0%BB%D1%8C%D0%BD%D1%8B%D0%B5-%D0%BF%D0%B5%D1%80%D0%B5%D0%BC%D0%B5%D0%BD%D0%BD%D1%8B%D0%B5-%D1%88%D0%B0%D0%B1%D0%BB%D0%BE%D0%BD%D0%B0
    -->
    <Cell v-for="i in numberOfAllCells"
          :key="i"
          :set="coords = getCoordFromNumber(i)"
          :coord-x="coords.coordX"
          :coord-y="coords.coordY"
          @click="cellClickHandler"
    ></Cell>

<!--    <Cell v-for="cell in cellsArray"-->
<!--          :key="cell.coord.x"-->
<!--          :coord-x="cell.coord.x"-->
<!--          :coord-y="cell.coord.y"-->
<!--          @click="cellClickHandler"-->
<!--    ></Cell>-->
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
    return {
      area: 7,
      cellsArray: new CellsFactory(this.area).make()
    } // return.
  }, // data.
  methods:{
    // Получить координаты из числа.
    getCoordFromNumber(num) {
      let actualNum = num - 1;

      let coordY = Math.floor(actualNum / this.area);
      let coordX = actualNum - coordY * this.area;

      return {coordX: coordX + 1, coordY: coordY + 1};
    },
    cellClickHandler(){
      this.cellsArray = new CellsFactory(this.area).make();

      console.log(this.cellsArray[0].coord.x);
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
