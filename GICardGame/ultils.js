/*
    This file contains some utilities such as classes and functions
    to make our life easier.
*/

let get_random_integer = (min, max) => {
    return Math.floor(Math.random() * (max - min + 1) ) + min;
}


// Instance of a card line of player's field
class CardLine{
    constructor(){
        this.line = [null, null, null, null];
    }
}

// Player's entire field
class PlayerField{
    constructor(){
        this.front = new CardLine();
        this.back = new CardLine();
    }
}

module.exports = {
    get_random_integer: get_random_integer,
    CardLine: CardLine,
    PlayerField: PlayerField
}
