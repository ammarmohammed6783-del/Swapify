import { IoMdAdd } from "react-icons/io";
import { BsThreeDots } from "react-icons/bs";
import { Link } from "react-router-dom";
import { useItems } from "../context/ItemsContext";
import WideCard from "../components/WideCard";

// ---------------------- TYPES ----------------------
type CardInfo = {
    value: number;
    text: string;
};

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

// ---------------------- MAIN COMPONENT ----------------------
const Items = () => {
    const { items } = useItems();
    const total = items.length;
    const active = items.length;
    const views = items.reduce((sum, item) => sum + (item.id % 10), 0);
    const tradeOffers = items.length + 2;

    const cards: CardInfo[] = [
        { value: total, text: "Total Items" },
        { value: active, text: "Active Listings" },
        { value: views, text: "Total Views" },
        { value: tradeOffers, text: "Trade Offers" },
    ];

    const listings: Listing[] = items.map((item) => ({
        title: item.header3,
        tags: item.interests,
        postedAgo: "Just added",
        stats: { views: item.id * 12, offers: item.id + 1 },
        actions: ["View Offers", "Edit Listing"],
        status: "Active",
        moreOptionsIcon: BsThreeDots,
    }));

    return (
        <div className="mx-auto max-w-7xl px-4 w-[90%]">
            <div className="flex justify-between items-center my-5">
                <div>
                    <Link to="/addItem">
                        <h2 className="text-3xl font-bold my-2 text-slate-900 dark:text-slate-100">
                            My Items
                        </h2>
                    </Link>
                    <p className="text-slate-500 dark:text-slate-400">
                        Manage your listed items
                    </p>
                </div>

                <Link to="/addItem">
                    <button className="bg-slate-900 text-white hover:bg-slate-800 dark:bg-slate-100 dark:text-slate-900 dark:hover:bg-slate-200 px-4 py-2 rounded-lg h-10 flex items-center gap-2 transition-colors">
                        <IoMdAdd /> Add New Item
                    </button>
                </Link>
            </div>

            {/* STATS CARDS */}
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4 my-4">
                {cards.map((ele, index) => (
                    <Card key={index} info={ele} />
                ))}
            </div>

            {/* WIDE CARDS */}
            <div className="my-6 space-y-4">
                {listings.map((listing, index) => (
                    <WideCard key={index} listing={listing} />
                ))}
            </div>
        </div>
    );
};

export default Items;

// ---------------------- CARD COMPONENT ----------------------
function Card({ info }: { info: CardInfo }) {
    return (
        <div className="rounded-xl p-5 border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900 transition-colors flex flex-col items-start">
            <p className="font-bold text-2xl text-slate-900 dark:text-slate-100">
                {info.value}
            </p>
            <p className="text-slate-600 dark:text-slate-400 mt-1">{info.text}</p>
        </div>
    );
}
