/*
    This file contains classes relate to Cards object.
*/

import * as element from "./element";
import * as ultils from "./ultils";

// General card object
export abstract class Card{
    id: any;
    assets: string;
    info: string
    max_hp: number;
    hp: number;
    atk: number;
    dmg_bonus: any;

    constructor(dict: any){
        this.id = dict["id"];
        this.assets = dict["assets"];
        this.info = dict["info"];
        this.max_hp = dict["max_hp"];
        this.hp = this.max_hp;
        this.atk = dict["atk"];
        this.dmg_bonus = {
            pyro: 0,
            hydro: 0,
            electro: 0,
            cryo: 0,
            anemo: 0,
            geo: 0,
            dendro: 0,
            physical: 0
        };
    }
}


// General skill class
export class Skill{
    apply: Function;
    cd: number;
    current_cd: number;

    constructor(apply: Function, cd: number){
        this.apply = apply;
        this.cd = cd;
        this.current_cd = 0;
    }
}


// General Character object
export class Character extends Card{
    element: number;
    skill: Function;
    skill_cd: number;
    element_applied: number | null;
    elemental_skill: Skill;

    constructor(dict: any){
        super(dict);
        this.element = dict["element"];
        this.skill = dict["skill"];
        this.skill_cd = dict["skill_cd"];
        this.element_applied = null;
        // General elemental skill
        this.elemental_skill = new Skill((opponent_line: ultils.PlayerField) => {
            this.skill(opponent_line, this);
        }, this.skill_cd)
    }

    is_dead = () => { return this.hp <= 0; }
    
}


// Melee character object
export class MeleeCharacter extends Character{
    atk_CD: number;
    attack: Skill;

    constructor(dict: any){
        super(dict);
        this.atk_CD = 1;
        // General attack skill
        this.attack = new Skill((target: Character) => { 
            let dmg = this.atk;
            target.hp -= dmg;
            return dmg;
        }, this.atk_CD);
    }
    
}


// Ranged character object
export class RangedCharacter extends Character{
    atk_CD: number;
    attack: Skill;

    constructor(dict: any){
        super(dict);
        this.atk_CD = 2;
        // General attack skill
        this.attack =  new Skill((target: Character) => {
            let dmg = this.atk;
            target.hp -= dmg;
            target.element_applied = this.element;
            return dmg;
        }, this.atk_CD);
    }

    
}