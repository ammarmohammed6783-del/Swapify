import type { CardData } from "../types";

export type Card = CardData;

const Cards: CardData[] = [
    {
        id: 1,
        imgSrc: "",
        header3: "Vintage Film Camera",
        paragraph: "beautiful Vintage 35mm film camera in excellent working condition",
        place: "Cairo",
        interests: ["electronics", "tools", "toys", "clothing", "music"]
    },
    {
        id: 2,
        imgSrc: "",
        header3: "Vintage Film Camera",
        paragraph: "beautiful Vintage 35mm film camera in excellent working condition",
        place: "Cairo",
        interests: ["electronics", "tools", "toys", "clothing", "music"]
    },
    {
        id: 3,
        imgSrc: "",
        header3: "glasses",
        paragraph: "very high quality glasses, like new",
        place: "san fransisco",
        interests: ["toys", "clothing", "music", "football"]
    },
    {
        id: 4,
        imgSrc: "",
        header3: "glasses",
        paragraph: "very high quality glasses, like new",
        place: "san fransisco",
        interests: ["toys", "clothing", "music", "football"]
    },
];

export default Cards;