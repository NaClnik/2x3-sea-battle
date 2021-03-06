<template>
  <div class="cells-container">
    <!--
      Нашёл, как сделать локальную переменную в шаблоне здесь.
      https://coderoad.ru/53732201/Vue-js-%D0%BB%D0%BE%D0%BA%D0%B0%D0%BB%D1%8C%D0%BD%D1%8B%D0%B5-%D0%BF%D0%B5%D1%80%D0%B5%D0%BC%D0%B5%D0%BD%D0%BD%D1%8B%D0%B5-%D1%88%D0%B0%D0%B1%D0%BB%D0%BE%D0%BD%D0%B0
    -->
    <Cell v-for="(cell, index) in cellsArray"
          :key="index"
          :coord-x="cell.coord.x"
          :coord-y="cell.coord.y"
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
