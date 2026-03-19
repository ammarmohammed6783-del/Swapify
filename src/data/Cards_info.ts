export type Card = {
    imgSrc: string;
    header3: string;
    paragraph: string;
    place: string;
    interests: string[];
};

const Cards: Card[] = [
    {
        imgSrc: "",
        header3: "Vintage Film Camera",
        paragraph: "beautiful Vintage 35mm film camera in excellent working condition",
        place: "Cairo",
        interests: ["electronics", "tools", "toys", "clothing", "music"]
    },
    {
        imgSrc: "",
        header3: "Vintage Film Camera",
        paragraph: "beautiful Vintage 35mm film camera in excellent working condition",
        place: "Cairo",
        interests: ["electronics", "tools", "toys", "clothing", "music"]
    },
    {
        imgSrc: "",
        header3: "glasses",
        paragraph: "very high quality glasses, like new",
        place: "san fransisco",
        interests: ["toys", "clothing", "music", "football"]
    },
    {
        imgSrc: "",
        header3: "glasses",
        paragraph: "very high quality glasses, like new",
        place: "san fransisco",
        interests: ["toys", "clothing", "music", "football"]
    },
];

export default Cards;