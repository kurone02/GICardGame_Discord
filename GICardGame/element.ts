/*
    This file contains ultilities about the element mechanics.
*/

export const PYRO: number = 0;
export const HYDRO: number = 1;
export const ELECTRO: number = 2;
export const CRYO: number = 3;
export const ANEMO: number = 4;
export const GEO: number = 5;
export const PHYSICAL: number = 6;

export const TO_STRING: string[] = [
    "pyro",
    "hydro",
    "electro",
    "cryo",
    "anemo",
    "geo",
    "physical"
];

export const PYRO_TO_STRING: string = "pyro";
export const HYDRO_TO_STRING: string = "hydro";
export const ELECTRO_TO_STRING: string = "electro";
export const CRYO_TO_STRING: string = "cryo";
export const ANEMO_TO_STRING: string = "anemo";
export const GEO_TO_STRING: string = "geo";
export const PHYSICAL_TO_STRING: string = "physical";

export const MELT_MULTIPLIER: number = 2;
export const REVERSE_MELT_MULTIPLIER: number = 1.5;
export const VAPORIZE_MULTIPLIER: number = 2;
export const REVERSE_VAPORIZE_MULTIPLIER: number = 1.5;
export const OVERLOAD_DMG: number = 2;
export const ELECTRO_CHARGED_DMG: number = 2;
export const SUPERCONDUCT_DMG: number = 4;
export const SWIRL_DMG: number = 1;


export class Element{
    type: number;
    duration: number;
    to_string: string;

    constructor(type: number, duration: number){
        this.type = type;
        this.duration = duration;
        this.to_string = TO_STRING[this.type];
    }
}

export class Damage{
    element: Element;
    dmg: number;

    constructor(ele: Element, dmg: number){
        this.element = ele;
        this.dmg = dmg;
    }
}