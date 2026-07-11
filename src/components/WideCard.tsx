import { useState } from "react";
import { IoEyeOutline } from "react-icons/io5";

type Listing = {
    title: string;
    tags: string[];
    postedAgo: string;
    stats: {
        views: number;
        offers: number;
    };
    actions: string[];
    status: string;
    moreOptionsIcon: React.ComponentType<{ className?: string }>;
};

// Props for WideCard
type WideCardProps = {
    listing: Listing;
};

// ---------------------- WIDE CARD COMPONENT ----------------------
function WideCard({ listing }: WideCardProps) {
    const Icon = listing.moreOptionsIcon;
    const [showDescription, setShowDescription] = useState(false);

    return (
        <div className="p-5 flex flex-col md:flex-row items-start md:items-center justify-between border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900 rounded-xl transition-colors gap-4">
            <div className="flex gap-5 items-start md:items-center flex-1">
                {/* IMAGE PLACEHOLDER */}
                <div className="w-24 h-24 rounded-lg bg-slate-200 dark:bg-slate-800 shrink-0"></div>

                <div className="flex-1">
                    <h3 className="font-medium text-lg text-slate-900 dark:text-slate-100">
                        {listing.title}
                    </h3>

                    <div className="flex flex-wrap gap-3 my-2 text-sm items-center">
                        {listing.tags.map((tag, i) => (
                            <div
                                key={i}
                                className="border border-slate-200 dark:border-slate-700 bg-slate-50 dark:bg-slate-800 text-slate-700 dark:text-slate-300 rounded-lg px-2 py-0.5 w-fit"
                            >
                                {tag}
                            </div>
                        ))}

                        <p className="text-slate-500 dark:text-slate-400 text-sm">
                            {listing.postedAgo}
                        </p>
                    </div>

                    <div className="flex gap-4 items-center my-3 text-slate-600 dark:text-slate-400 text-sm">
                        <p className="flex items-center gap-1.5">
                            <IoEyeOutline className="text-lg" />
                            <span className="font-bold text-slate-900 dark:text-slate-100">
                                {listing.stats.views}
                            </span>{" "}
                            views
                        </p>

                        <p>
                            <span className="font-bold text-slate-900 dark:text-slate-100">
                                {listing.stats.offers}
                            </span>{" "}
                            offers
                        </p>
                    </div>

                    {/* Collapsible description */}
                    {showDescription && (
                        <p className="text-sm text-slate-600 dark:text-slate-400 mt-2">
                            Detailed description about the listing goes here. You can expand
                            or collapse this section.
                        </p>
                    )}

                    <button
                        onClick={() => setShowDescription(!showDescription)}
                        className="mt-2 text-xs text-blue-600 dark:text-blue-400 hover:underline"
                    >
                        {showDescription ? "Hide Details" : "Show Details"}
                    </button>

                    <div className="flex gap-2 flex-wrap mt-3">
                        {listing.actions.map((action, i) => (
                            <button
                                key={i}
                                className="px-3 py-1.5 border border-slate-200 dark:border-slate-700 text-slate-700 dark:text-slate-300 hover:bg-slate-50 dark:hover:bg-slate-800 rounded-lg font-medium text-sm transition-colors"
                            >
                                {action}
                            </button>
                        ))}
                    </div>
                </div>
            </div>

            {/* STATUS & MORE */}
            <div className="flex items-center gap-3 mt-3 md:mt-0">
                <button className="px-3 py-1.5 bg-emerald-100 text-emerald-700 dark:bg-emerald-900/30 dark:text-emerald-400 font-medium text-sm rounded-lg">
                    {listing.status}
                </button>

                <button className="p-2 text-slate-400 hover:text-slate-600 dark:hover:text-slate-300 transition-colors">
                    <Icon className="text-xl" />
                </button>
            </div>
        </div>
    );
}

export default WideCard