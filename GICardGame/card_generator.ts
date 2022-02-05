/*
    This file contains function to generate cards on demand.
*/


const ultils = require("./ultils.js");
const Card = require("./cards.js");
const Element = require("./element.js");

var id_counter = 1;

let card_list = [
    () => new Card.RangedCharacter({
        id: 1,
        element: Element.PYRO,
        assets: "",
        info: "Amber",
        max_hp: 2,
        atk: 3,
        skill_cd: 3,
        skill_cost: 40,
        skill: (opponent_line, this_char) => { // Skill's implementation
            let element_to_string = Element.TO_STRING[this_char.element];
            let dmg = this_char.atk * (1 + this_char.dmg_bonus[element_to_string])
            opponent_line.forEach(opponent_char => {
                if(opponent_char != null){
                    opponent_char.hp -= dmg;
                }
            });
        }
    }),
    
    () => new Card.MeleeCharacter({
        id: 2,
        element: Element.CRYO,
        assets: "",
        info: "Kaeya",
        max_hp: 5,
        atk: 2,
        skill_cd: 3,
        skill_cost: 40,
        skill: () => 1
    }),
    
    () => new Card.RangedCharacter({
        id: 3,
        element: Element.ELECTRO,
        assets: "",
        info: "Lisa",
        max_hp: 1,
        atk: 4,
        skill_cd: 3,
        skill_cost: 40,
        skill: () => 1
    }),
    
    () => new Card.MeleeCharacter({
        id: 4,
        element: Element.GEO,
        assets: "",
        info: "Noelle",
        max_hp: 8,
        atk: 1,
        skill_cd: 3,
        skill_cost: 40,
        skill: () => 1
    }),
    
    () => new Card.RangedCharacter({
        id: 5,
        element: Element.GEO,
        assets: "",
        info: "Barbara",
        max_hp: 4,
        atk: 1,
        skill_cd: 3,
        skill_cost: 40,
        skill: () => 1
    }),
    
    () => new Card.MeleeCharacter({
        id: 6,
        element: Element.PYRO,
        assets: "",
        info: "Xiangling",
        max_hp: 4,
        atk: 3,
        skill_cd: 3,
        skill_cost: 40,
        skill: () => 1
    })
];

let get_random_card = () => {
    let n = card_list.length;
    return card_list[ultils.get_random_integer(0, n - 1)]();
}

module.exports = {
    card_list: card_list,
    get_random_card: get_random_card
}