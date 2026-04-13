import { useMemo } from "react";
import { CiStar } from "react-icons/ci";
import { FaStar } from "react-icons/fa";
import { IoLocationOutline } from "react-icons/io5";

import { useFavorites } from "../FavoriteContext/FavoriteProvider";

type CardType = {
    id: string | number;
    imgSrc: string;
    header3: string;
    paragraph: string;
    place: string;
    interests: string[];
};

const Card = ({ data }: { data: CardType }) => {

    const { favorites, toggleFavorite } = useFavorites();

    const isFavourite = useMemo(
        () => favorites.some((fav) => fav.id === data.id),
        [favorites, data.id]
    );

    return (
        <div className="h-125 w-3/12 border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900 rounded-xl overflow-hidden transition-colors shadow-sm relative">
            {
                isFavourite ? (
                    <FaStar
                        className="absolute text-amber-400 text-xl top-2 right-2 cursor-pointer"
                        onClick={() => toggleFavorite(data)}
                    />
                ) : (
                    <CiStar
                        className="absolute text-amber-400 text-xl top-2 right-2 cursor-pointer"
                        onClick={() => toggleFavorite(data)}
                    />
                )
            }
            <img
                src={data.imgSrc}
                alt=""
                className="bg-slate-200 dark:bg-slate-800 w-full h-1/3 object-cover"
            />

            <div className="p-4 flex flex-col justify-between h-2/3">
                <div>
                    <h3 className="font-bold text-slate-900 dark:text-slate-100 text-lg">
                        {data.header3}
                    </h3>

                    <p className="text-slate-600 dark:text-slate-400 text-sm mt-1">
                        {data.paragraph}
                    </p>

                    <p className="flex items-center gap-1.5 py-3 text-slate-500 dark:text-slate-400 text-sm">
                        <IoLocationOutline className="text-lg" />
                        {data.place}
                    </p>

                    <p className="text-sm font-medium text-slate-700 dark:text-slate-300 mb-2">
                        Interested in:
                    </p>

                    <div className="flex flex-wrap gap-1">
                        {data.interests.map((item, i) => (
                            <Intersted key={i} text={item} />
                        ))}
                    </div>
                </div>

                <button
                    type="button"
                    aria-label="Propose a trade with this user"
                    className="w-full text-center mt-4 bg-slate-900 text-white hover:bg-slate-800 dark:bg-slate-100 dark:text-slate-900 dark:hover:bg-slate-200 rounded-lg py-2 px-3 transition-colors font-medium"
                >
                    Propose Trade
                </button>
            </div>
        </div>
    );
};

function Intersted({ text }: { text: string }) {
    return (
        <div className="bg-slate-100 dark:bg-slate-800 text-slate-700 dark:text-slate-300 font-medium px-2 py-0.5 border border-slate-200 dark:border-slate-700 rounded-md w-fit text-xs transition-colors">
            {text}
        </div>
    );
}

export default Card;