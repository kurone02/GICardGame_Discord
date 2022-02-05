/*
    This file contains ultilities about the element mechanics.
*/

const PYRO = 0;
const HYDRO = 1;
const ELECTRO = 2;
const CRYO = 3;
const ANEMO = 4;
const GEO = 5;
const PHYSICAL = 6;

const TO_STRING = [
    "pyro",
    "hydro",
    "electro",
    "cryo",
    "anemo",
    "geo",
    "physical"
];

const PYRO_TO_STRING = "pyro";
const HYDRO_TO_STRING = "hydro";
const ELECTRO_TO_STRING = "electro";
const CRYO_TO_STRING = "cryo";
const ANEMO_TO_STRING = "anemo";
const GEO_TO_STRING = "geo";
const PHYSICAL_TO_STRING = "physical";

const MELT_MULTIPLIER = 2;
const REVERSE_MELT_MULTIPLIER = 1.5;
const VAPORIZE_MULTIPLIER = 2;
const REVERSE_VAPORIZE_MULTIPLIER = 1.5;
const OVERLOAD_DMG = 2;
const ELECTRO_CHARGED_DMG = 2;
const SUPERCONDUCT_DMG = 4;
const SWIRL_DMG = 1;


class Element{

    constructor(type, duration){
        this.type = type;
        this.duration = duration;
        this.to_string = TO_STRING[this.type];
    }
}

class Damage{

    constructor(ele, dmg){
        this.element = ele;
        this.dmg = dmg;
    }
}

module.exports = {
    PYRO: PYRO,
    HYDRO: HYDRO,
    ELECTRO: ELECTRO,
    CRYO: CRYO,
    ANEMO: ANEMO,
    GEO: GEO,
    PHYSICAL: PHYSICAL,

    PYRO_TO_STRING: PYRO_TO_STRING,
    HYDRO_TO_STRING: HYDRO_TO_STRING,
    ELECTRO_TO_STRING: ELECTRO_TO_STRING,
    CRYO_TO_STRING: CRYO_TO_STRING,
    ANEMO_TO_STRING: ANEMO_TO_STRING,
    GEO_TO_STRING: GEO_TO_STRING,
    PHYSICAL_TO_STRING: PHYSICAL_TO_STRING,

    MELT_MULTIPLIER: MELT_MULTIPLIER,
    REVERSE_MELT_MULTIPLIER: REVERSE_MELT_MULTIPLIER,
    VAPORIZE_MULTIPLIER: VAPORIZE_MULTIPLIER,
    REVERSE_VAPORIZE_MULTIPLIER: REVERSE_VAPORIZE_MULTIPLIER,
    OVERLOAD_DMG: OVERLOAD_DMG,
    ELECTRO_CHARGED_DMG: ELECTRO_CHARGED_DMG,
    SUPERCONDUCT_DMG: SUPERCONDUCT_DMG,
    SWIRL_DMG: SWIRL_DMG,

    Element: Element,
    Damage: Damage
}