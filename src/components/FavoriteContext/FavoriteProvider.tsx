import { createContext, useContext, useState } from "react";
import type { ReactNode } from "react";

type FavoriteItem = {
    id: string | number;
    [key: string]: unknown;
};

type FavoriteContextType = {
    favorites: FavoriteItem[];
    toggleFavorite: (item: FavoriteItem) => void;
};

export const FavoriteContext = createContext<FavoriteContextType | null>(null);

export function useFavorites() {
    const context = useContext(FavoriteContext);
    if (!context) {
        throw new Error("useFavorites must be used within FavoriteProvider");
    }
    return context;
}

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