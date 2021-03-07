export class ShipsFactory {
    make(){
        let array = [];

        let canToggle = false;
        let position = 'fixed';

        array.push({numOfDecks: 4, canToggle, position})

        array.push({numOfDecks: 3, canToggle, position})
        array.push({numOfDecks: 3, canToggle, position})

        array.push({numOfDecks: 2, canToggle, position})
        array.push({numOfDecks: 2, canToggle, position})

        array.push({numOfDecks: 1, canToggle, position})
        array.push({numOfDecks: 1, canToggle, position})

        return array;
    } // make.
} // ShopsFactory.
