import { useFavorites } from "../components/FavoriteContext/FavoriteProvider";

function Favourites() {
    const { favorites } = useFavorites();

    return (
        <div className="mx-auto max-w-6xl px-4 py-8">
            <h1 className="text-3xl font-bold mb-4">Favourites</h1>

            {favorites.length === 0 ? (
                <div className="rounded-2xl border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-950 p-8 text-center text-slate-600 dark:text-slate-300">
                    <p className="text-lg">No favourites yet.</p>
                    <p className="text-sm mt-2">Tap the star icon on any card to save it here.</p>
                </div>
            ) : (
                <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6">
                    {favorites.map((item) => (
                        <div key={item.id} className="rounded-2xl border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-950 p-5 shadow-sm">
                            <h2 className="text-xl font-semibold text-slate-900 dark:text-slate-100">
                                {item.header3 as string}
                            </h2>
                            <p className="mt-2 text-slate-600 dark:text-slate-300">{item.paragraph as string}</p>
                            <p className="mt-3 text-sm text-slate-500 dark:text-slate-400">Location: {item.place as string}</p>
                            <div className="mt-4 flex flex-wrap gap-2">
                                {(item.interests as string[]).map((interest, index) => (
                                    <span key={index} className="rounded-full bg-slate-100 dark:bg-slate-800 px-3 py-1 text-xs text-slate-700 dark:text-slate-200">
                                        {interest}
                                    </span>
                                ))}
                            </div>
                        </div>
                    ))}
                </div>
            )}
        </div>
    )
}

export default Favourites