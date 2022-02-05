/*
    This file contains some utilities such as classes and functions
    to make our life easier.
*/

import * as cards from "./cards";

export let get_random_integer = (min: number, max: number) => {
    return Math.floor(Math.random() * (max - min + 1) ) + min;
}


// Instance of a card line of player's field
export class CardLine{
    line: (cards.Card | null)[]

    constructor(){
        this.line = [null, null, null, null];
    }
}

// Player's entire field
export class PlayerField{
    front: CardLine;
    back: CardLine;

    constructor(){
        this.front = new CardLine();
        this.back = new CardLine();
    }
}