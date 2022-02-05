/*
    This file contains the class Player which has the player stats
*/

const ultils = require("./ultils.js");

class Player{
    
    constructor(){
        this.hp = 100;
        this.energy = 0;
        this.deck = [];
        this.field = new ultils.PlayerField();
    }

    current_hp = () => { return this.hp; }

    current_energy = () => { return this.energy; }

    get_deck = () => { return this.deck; }

    current_field = () => { return this.field; }

    is_dead = () => { return this.hp <= 0; }

    take_dmg = (dmg) => { this.hp -= dmg; }

}

module.exports = Player