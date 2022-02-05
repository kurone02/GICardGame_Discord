/*
    This file contains the main API of the Game
*/


const ultils = require("./ultils.js");
const player = require("./player.js");
const card_gen = require("./card_generator.js");

class Game{

    constructor(){
        // Current turn count
        this.turn = 0;

        // Two players in a game
        this.players = [new player(), new player()];
        

    }

    next_turn = () => { this.turn++; }

    is_end = () => {
        if(this.players[0].current_hp == 0) return 0;
        if(this.players[1].current_hp == 0) return 1;
        return -1;
    }

    










    /*
    reaction = (ele1, ele2) => {
        switch(ele1.type){
            case element.PYRO:
                switch(ele2.type){
                    case element.HYDRO:
                        ele1.dmg = ele1.dmg * element.REVERSE_VAPORIZE_MULTIPLIER;
                        return ele1;
                    case element.CRYO:
                        ele1.dmg = ele1.dmg * element.MELT_MULTIPLIER;
                        return ele1;
                    case element.ELECTRO:
                        
                }
                break;
            case element.HYDRO:
                break;
            case element.ELECTRO:
                break;
            case element.CRYO:
                break;
            case element.ANEMO:
                break;
            case element.GEO:
                break;
        }
    }
    */

}

module.exports = Game;