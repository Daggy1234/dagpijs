/** Reprsents a Dagpi toke */
export interface joke {
    id: number;
    joke: string;
}

/** Reprsents a Subpart of WTP object */
interface mondata {
    abilities: Array<string>;
    ascii: string;
    height: number;
    id: number;
    link: string;
    name: string;
    Type: Array<string>;
    weight: number;
}

/** Represents a dagpi wtp interface */
export interface wtp {
    Data: mondata;
    question: string;
    answer: string;
}


/** Dagpi puckupline object */
export interface pickupline {
    category: string;
    joke: string;
}

/** Represents a dagpi yomama object */
export interface yomama {
    joke: string;
}

/** Dagpi 8ball response */
export interface Eightball {
    response: string;
}

/** Dagpi Fact */
export interface fact {
    fact: string;
}
/** Dagpi Headline */
export interface headline {
    headline: string;
    fake: boolean;
}


/** represents a dagpi roast */
export interface roast {
    roast: string;
}

/** Represents a dagpi roast object */
export interface logo {
    question: string;
    answer: string;
    brand: string;
    clue: string;
    easy: boolean;
    hint: string;
    wiki_url: string;
}

/** Object that represents the Parametrs passed to image_rpocess
 *  
 */
export interface image_props {
    /** URL of the imagw */
    url: string;

    /** Text for image (certain endpoint) */
    text? : string;

    /** Second Image URl (certain endpoints) */
    url2? : string;

    /** Username of User (certain Endpoints) */
    username? : string;

    /** Wether or not to use Dark theme */
    dark?: boolean;
} 

/** Available Image features for DAGPI */
export type ImageFeature =
    | "pixel"
    | "colors"
    | "wanted"
    | "triggered"
    | "wasted"
    | "5g1g"
    | "whyareyougay"
    | "invert"
    | "sobel"
    | "triangle"
    | "hog"
    | "blur"
    | "rgb"
    | "angel"
    | "satan"
    | "hitler"
    | "obama"
    | "bad"
    | "sith"
    | "jail"
    | "gay"
    | "trash"
    | "deepfry"
    | "ascii"
    | "carcoal"
    | "poster"
    | "sepia"
    | "polaroid"
    | "swirl"
    | "paint"
    | "night"
    | "magik"
    | "rainbow"
    | "solar"
    | "thoughtimage"
    | "tweet"
    | "discord"
    | "modernmeme"
    | "yt"
    | "rainbow"
    | "shatter"
    | "captcha"
    | "pride"
    | "fedora"

/** Image formats returned by dagpi */
export type format = 
    | "png"
    | "gif"
