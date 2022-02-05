/*
    This file contains the class Player which has the player stats
*/

import * as card from "./cards";
import * as ultils from "./ultils";

export class Player{
    hp: number;
    energy: number;
    deck: card.Card[];
    field : ultils.PlayerField;
    
    constructor(){
        this.hp = 100;
        this.energy = 0;
        this.deck = [];
        this.field = new ultils.PlayerField();
    }

    public current_hp(): number { return this.hp; }

    public current_energy(): number { return this.energy; }

    public get_deck(): card.Card[] { return this.deck; }

    current_field(): ultils.PlayerField { return this.field; }

    is_dead(): boolean { return this.hp <= 0; }

    take_dmg(dmg: number): void { this.hp -= dmg; }

}