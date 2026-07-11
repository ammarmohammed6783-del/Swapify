export type CardData = {
    id: number;
    imgSrc: string;
    header3: string;
    paragraph: string;
    place: string;
    interests: string[];
    stats?: {
        views: number;
        offers: number;
    };
};

export type FavoriteItem = CardData;
