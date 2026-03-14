import { useState } from "react";
import Nav from "../components/Nav"
import Navigation from "../components/Navigation"

import { IoEyeOutline } from "react-icons/io5";
import { IoMdAdd } from "react-icons/io";
import { BsThreeDots } from "react-icons/bs";

const Items = () => {

    // let Descrip = false;   then add this to feed showDescription={Descrip} 

    /* 
        you can add children inside your feed


        <button className="bg-black text-white px-4 py-2 rounded h-10">
            Add New Item
        </button>
        

        <Feed infos={info} showDescription={Descrip} >
            <button className="bg-black text-white px-4 py-2 rounded h-10">
                Add New Item
            </button>
        </Feed>
    */

    const [total, setTotal] = useState(0);
    const [active, setActive] = useState(10);
    const [views, setViews] = useState(0);
    const [tradeOffers, setTradeOffers] = useState(0);

    let cards = [
        {
            value: total,
            text: "Total Items"
        },
        {
            value: active,
            text: "Active Listings"
        },
        {
            value: views,
            text: "Total Views"
        },
        {
            value: tradeOffers,
            text: "Trade Offers"
        },
    ];

    let objs = [
        {
            listing: {
                title: "professional camera lens",
                tags: ["tag"],
                postedAgo: "4 days ago",
                stats: {
                    views: 156,
                    offers: 12
                },
                actions: ["View Offers", "Edit Listing"],
                status: "Active",
                moreOptionsIcon: "BsThreeDots"
            }
        },
        {
            "listing": {
                "title": "red premium wine bottle",
                "tags": ["organic", "limited edition"],
                "postedAgo": "2 days ago",
                "stats": {
                    "views": 98,
                    "offers": 5
                },
                "actions": ["View Offers", "Edit Listing"],
                "status": "Active",
                "moreOptionsIcon": "BsThreeDots"
            }
        }
    ]

    return (
        <div>
            <Nav />
            <div className='flex mt-14'>
                <Navigation />
                <div className="mx-auto w-7/10">
                    <div className="flex justify-between items-center my-5">
                        <div>
                            <h2 className="text-3xl font-bold my-2 text-slate-900 dark:text-slate-100">My Items</h2>
                            <p className="text-slate-500 dark:text-slate-400">Manage your Listed items</p>
                        </div>
                        <button className="bg-slate-900 text-white hover:bg-slate-800 dark:bg-slate-100 dark:text-slate-900 dark:hover:bg-slate-200 px-4 py-2 rounded-lg h-10 flex items-center gap-2 transition-colors">
                            <IoMdAdd className="text-current" /> Add New Item
                        </button>
                    </div>
                    <div className="flex">
                        {
                            cards.map((ele, index) => (
                                <Card key={index} info={ele} />
                            ))
                        }
                    </div>
                    <h1>navigation here</h1>
                    <div>
                        {
                            objs.map((ele, index) => (
                                <WideCard info={ele} key={index}/>
                            ))
                        }
                    </div>
                </div>
            </div>
        </div>
    )
}
export default Items;


type CardInfo = {
    value: number;
    text: string;
};

function Card({ info }: { info: CardInfo }) {
    return (
        <div className="rounded-xl p-5 m-1 border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900 w-full transition-colors">
            <p className="font-bold text-2xl text-slate-900 dark:text-slate-100">{info.value}</p>
            <p className="text-slate-600 dark:text-slate-400">{info.text}</p>
        </div>
    )
}




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
    moreOptionsIcon: string; // or React component type if you want dynamic icons
};

type WideCardInfo = {
    info: {
        listing: Listing;
    };
};

function WideCard({ info }: WideCardInfo) {
    const { listing } = info;

    return (
        <div className="p-5 flex items-center justify-between border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900 rounded-xl my-4 transition-colors">
            <div className="flex gap-5 items-center">
                <div className="w-35 h-35 rounded-lg bg-slate-200 dark:bg-slate-800 flex-shrink-0"></div>
                <div>
                    <h3 className="font-medium text-lg text-slate-900 dark:text-slate-100">{listing.title}</h3>
                    <div className="flex gap-3 my-2 text-sm">
                        {listing.tags.map((tag, index) => (
                            <div key={index} className="border border-slate-200 dark:border-slate-700 bg-slate-50 dark:bg-slate-800 text-slate-700 dark:text-slate-300 rounded-lg w-fit px-2 py-0.5">
                                {tag}
                            </div>
                        ))}
                        <p className="text-slate-500 dark:text-slate-400 flex items-center">{listing.postedAgo}</p>
                    </div>
                    <div className="flex gap-4 items-center my-3 text-slate-600 dark:text-slate-400">
                        <p className="flex items-center gap-1.5 text-sm">
                            <IoEyeOutline className="text-lg" />
                            <span className="font-bold text-slate-900 dark:text-slate-100">{listing.stats.views}</span>
                            <span>views</span>
                        </p>
                        <p className="text-sm">
                            <span className="font-bold text-slate-900 dark:text-slate-100">{listing.stats.offers}</span>{" "}
                            <span>offers</span>
                        </p>
                    </div>
                    <div className="flex gap-2">
                        {listing.actions.map((action, index) => (
                            <button key={index} className="px-3 py-1.5 border border-slate-200 dark:border-slate-700 text-slate-700 dark:text-slate-300 hover:bg-slate-50 dark:hover:bg-slate-800 rounded-lg font-medium text-sm transition-colors">
                                {action}
                            </button>
                        ))}
                    </div>
                </div>
            </div>
            <div className="flex items-center gap-3 self-center">
                <button className="px-3 py-1.5 bg-emerald-100 text-emerald-700 dark:bg-emerald-900/30 dark:text-emerald-400 font-medium text-sm rounded-lg">{listing.status}</button>
                <button className="p-2 text-slate-400 hover:text-slate-600 dark:hover:text-slate-300 transition-colors">
                    <BsThreeDots className="text-xl" />
                </button>
            </div>
        </div>
    );
}