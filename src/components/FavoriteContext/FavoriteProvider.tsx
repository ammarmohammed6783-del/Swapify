import { createContext, useState } from "react";
import type { ReactNode } from "react";

type FavoriteItem = {
    id: string | number;
    [key: string]: unknown;
};

type FavoriteContextType = {
    favorites: FavoriteItem[];
    toggleFavorite: (item: FavoriteItem) => void;
};

const FavoriteContext = createContext<FavoriteContextType | null>(null);

type FavoriteProviderProps = {
    children: ReactNode;
};

function FavoriteProvider({ children }: FavoriteProviderProps) {

    const [favorites, setFavorites] = useState<FavoriteItem[]>([]);

    function toggleFavorite(item: FavoriteItem) {
        const exist = favorites.find(fav => fav.id === item.id);

        if (exist) {
            setFavorites(favorites.filter((fav) => fav.id != item.id));
        } else {
            setFavorites([...favorites, item]);
        }
    }

    return (
        <FavoriteContext.Provider value={{favorites, toggleFavorite}}>
            {children}
        </FavoriteContext.Provider>
    )
}

export default FavoriteProvider