/*
    This file contains the main API of the Game
*/


import * as ultils from "./ultils";
import * as player from "./player";
import * as card_gen from "./card_generator";

export class Game{
    turn: number;
    players: player.Player[];

    constructor(){
        // Current turn count
        this.turn = 0;

        // Two players in a game
        this.players = [new player.Player(), new player.Player()];
        

    }

    public next_turn(): void { this.turn++; }
    
    public is_end(): number {
        if(this.players[0].current_hp() == 0) return 0;
        if(this.players[1].current_hp() == 0) return 1;
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