/*
    This file contains classes relate to Cards object.
*/

// General card object
class Card{
    constructor(dict){
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
class Skill{
    constructor(apply, cd){
        this.apply = apply;
        this.cd = cd;
        this.current_cd = 0;
    }
}


// General Character object
class Character extends Card{
    constructor(dict){
        super(dict);
        this.element = dict["element"];
        this.skill = dict["skill"];
        this.skill_cd = dict["skill_cd"];
        this.element_applied = null;
        // General elemental skill
        this.elemental_skill = new Skill((opponent_line) => {
            this.skill(opponent_line, this);
        }, this.skill_cd)
    }

    is_dead = () => { return this.hp <= 0; }
    
}


// Melee character object
class MeleeCharacter extends Character{
    constructor(dict){
        super(dict);
        this.atk_CD = 1;
        // General attack skill
        this.attack = new Skill((target) => { 
            let dmg = this.atk;
            target.hp -= dmg;
            return dmg;
        }, this.atk_CD);
    }
    
}


// Ranged character object
class RangedCharacter extends Character{
    constructor(dict){
        super(dict);
        this.atk_CD = 2;
        // General attack skill
        this.attack =  new Skill((target) => {
            let dmg = this.atk;
            target.hp -= dmg;
            target.element_applied = this.element;
            return dmg;
        }, this.atk_CD);
    }

    
}

module.exports = {
    Skill: Skill,
    Character: Character,
    MeleeCharacter: MeleeCharacter,
    RangedCharacter: RangedCharacter
}