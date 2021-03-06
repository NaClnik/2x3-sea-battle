export class CellsFactory{
    // Поля класса.
    area;

    constructor(area) {
        this.area = area;
    } // constructor.

    make(){
        let array = [];

        let numberOfAllCells = this.numberOfAllCells();

        for (let i = 1; i <= numberOfAllCells; i++){
            let coord = this.getCoordFromNumber(i);

            array.push({
                coord,
                // У ячейки может быть три состояния:
                // 1. Не тронута — untouched.
                // 2. Промах     — miss.
                // 3. Попадание  — hit.
                state: 'untouched'
            }) // push.
        } // for.

        return array;
    } // make.

    numberOfAllCells(){
        return this.area * this.area;
    }

    getCoordFromNumber(num) {
        let actualNum = num - 1;

        let coordY = Math.floor(actualNum / this.area);
        let coordX = actualNum - coordY * this.area;

        return {x: coordX + 1, y: coordY + 1};
    }
} // CellsFactory.
