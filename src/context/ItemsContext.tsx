import { createContext, useContext } from "react";
import Cards from "../data/Cards_info";
import type { CardData } from "../types";

type ItemsContextType = {
    items: CardData[];
};

const itemsWithStats: CardData[] = Cards.map((item, index) => ({
    ...item,
    stats: {
        views: 120 + index * 15,
        offers: 4 + index,
    },
}));

const ItemsContext = createContext<ItemsContextType>({ items: itemsWithStats });

export function useItems() {
    return useContext(ItemsContext);
}
