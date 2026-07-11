import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"

import { IoLocationOutline } from "react-icons/io5";
import { CiCalendar } from "react-icons/ci";
import { CiStar } from "react-icons/ci";
import { CiSettings } from "react-icons/ci";
import { Link } from "react-router-dom";
import WideCard from "@/components/WideCard";
import { useItems } from "@/context/ItemsContext";
import { BsThreeDots } from "react-icons/bs";

const Profile = () => {

    let Tages = ["Top Trader", "Fast Responder", "Rated"]
    const { items } = useItems();

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

    const listings: Listing[] = items.map((item) => ({
        title: item.header3,
        tags: item.interests,
        postedAgo: "Just added",
        stats: {
            views: item.stats?.views ?? 120,
            offers: item.stats?.offers ?? 4,
        },
        actions: ["View Offers", "Edit Listing"],
        status: "Active",
        moreOptionsIcon: BsThreeDots,
    }));

    return (
        <div className="mx-auto w-[70%]">
            <div className="h-fit p-6 my-5 border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900 rounded-xl flex gap-6 transition-colors shadow-sm">
                <div className="w-1/12">
                    <div className="rounded-full bg-slate-100 dark:bg-slate-800 text-slate-700 dark:text-slate-300 w-20 h-20 flex items-center justify-center border border-slate-200 dark:border-slate-700">
                        <span className="text-xl font-medium">AM</span>
                    </div>
                </div>
                <div className="w-full">
                    <div className="flex justify-between items-start">
                        <h1 className="text-2xl font-bold text-slate-900 dark:text-slate-100">Ammar Mohammed</h1>
                        <div className="flex gap-3">
                            <Link to="/settings">
                                <button className="bg-slate-900 text-white hover:bg-slate-800 dark:bg-slate-100 dark:text-slate-900 dark:hover:bg-slate-200 px-4 py-2 rounded-lg h-10 flex items-center gap-2 transition-colors font-medium text-sm">
                                    <CiSettings className="text-xl" /> settings
                                </button>
                            </Link>
                            <button className="text-red-600 hover:text-red-700 dark:text-red-400 dark:hover:text-red-300 bg-red-50 hover:bg-red-100 dark:bg-red-950/30 dark:hover:bg-red-900/40 px-4 py-2 rounded-lg h-10 flex items-center gap-2 transition-colors font-medium text-sm border border-red-200 dark:border-red-800/50">
                                Log Out
                            </button>
                        </div>
                    </div>
                    <div className="flex gap-4 mt-2">
                        <p className="flex items-center gap-1.5 text-slate-500 dark:text-slate-400">
                            <IoLocationOutline className="text-lg" />
                            <span>Egypt</span>
                        </p>

                        <p className="flex items-center gap-1.5 text-slate-500 dark:text-slate-400">
                            <CiCalendar className="text-lg" />
                            <span>member since Jan 2020</span>
                        </p>
                    </div>

                    <div className="flex items-center justify-between w-full my-6 bg-slate-50 dark:bg-slate-800/50 p-4 rounded-xl border border-slate-100 dark:border-slate-800 transition-colors">
                        <div className="w-1/4 text-center border-r border-slate-200 dark:border-slate-700">
                            <h3 className="font-bold text-xl text-slate-900 dark:text-slate-100">24</h3>
                            <p className="text-slate-500 dark:text-slate-400 text-sm mt-1">Total Trades</p>
                        </div>
                        <div className="w-1/4 text-center border-r border-slate-200 dark:border-slate-700">
                            <div className="flex items-center justify-center gap-1">
                                <CiStar className="text-amber-400 text-xl" />
                                <h3 className="font-bold text-xl text-slate-900 dark:text-slate-100">4.7</h3>
                            </div>
                            <p className="text-slate-500 dark:text-slate-400 text-sm mt-1">Rating</p>
                        </div>
                        <div className="w-1/4 text-center border-r border-slate-200 dark:border-slate-700">
                            <h3 className="font-bold text-xl text-slate-900 dark:text-slate-100">97%</h3>
                            <p className="text-slate-500 dark:text-slate-400 text-sm mt-1">Success Rate</p>
                        </div>
                        <div className="w-1/4 text-center flex flex-col items-center">
                            <Tag text="Verified" />
                            <p className="text-slate-500 dark:text-slate-400 text-sm mt-1">Status</p>
                        </div>
                    </div>

                    <div className="my-5">
                        <h3 className="font-semibold text-slate-900 dark:text-slate-100 mb-2">About</h3>
                        <p className="text-slate-600 dark:text-slate-400 leading-relaxed">Lorem ipsum dolor sit amet consectetur adipisicing elit. Neque, ipsam cum provident corporis eligendi dicta! Sapiente officiis earum odit facilis, Lorem ipsum dolor sit amet.</p>
                    </div>
                    <div className="flex gap-2">
                        {
                            Tages.map((ele, index) => (
                                <Tag text={ele} key={index} />
                            ))
                        }
                    </div>
                </div>
            </div>

            <Tabs defaultValue="history" className="w-full mt-8">
                <TabsList className="w-full h-14 bg-slate-100/60 dark:bg-slate-900/60 border border-slate-200/60 dark:border-slate-800/60 p-1.5 rounded-2xl mb-8 shadow-inner transition-colors">
                    <TabsTrigger
                        value="history"
                        className="w-full h-full text-[15px] font-semibold rounded-xl text-slate-600 dark:text-slate-400 data-[state=active]:bg-white dark:data-[state=active]:bg-slate-800 data-[state=active]:text-slate-900 dark:data-[state=active]:text-slate-100 data-[state=active]:shadow-sm hover:text-slate-900 dark:hover:text-slate-200 transition-all duration-300"
                    >
                        Trade History
                    </TabsTrigger>
                    <TabsTrigger
                        value="reviews"
                        className="w-full h-full text-[15px] font-semibold rounded-xl text-slate-600 dark:text-slate-400 data-[state=active]:bg-white dark:data-[state=active]:bg-slate-800 data-[state=active]:text-slate-900 dark:data-[state=active]:text-slate-100 data-[state=active]:shadow-sm hover:text-slate-900 dark:hover:text-slate-200 transition-all duration-300"
                    >
                        Reviews <span></span>
                    </TabsTrigger>
                </TabsList>

                <TabsContent value="history" className="space-y-4 focus-visible:outline-none focus-visible:ring-0 animate-in slide-in-from-bottom-4 fade-in-0 duration-500 ease-out">
                    {/* when there are real data make map and put the number of those itemCard in the span that besides reviews */}
                    {listings.map((listing, index) => (
                        <WideCard key={index} listing={listing} />
                    ))}

                </TabsContent>

                <TabsContent value="reviews" className="p-8 text-center border border-slate-200 dark:border-slate-800 rounded-2xl bg-white dark:bg-slate-900 min-h-75 flex flex-col items-center justify-center text-slate-500 dark:text-slate-400 focus-visible:outline-none focus-visible:ring-0 animate-in slide-in-from-bottom-4 fade-in-0 duration-500 ease-out">
                    <CiStar className="text-4xl text-slate-300 dark:text-slate-700 mb-3 animate-pulse" />
                    <p className="text-lg font-medium text-slate-700 dark:text-slate-300">No reviews yet</p>
                    <p className="text-sm mt-1">Complete a trade to start earning reviews.</p>
                </TabsContent>
            </Tabs>
        </div>
    )
}

export default Profile

function Tag({ text }: { text: string }) {
    return (
        <div className="px-2.5 py-1 bg-slate-100 dark:bg-slate-800 text-slate-700 dark:text-slate-300 border border-slate-200 dark:border-slate-700 rounded-lg w-fit text-sm font-medium transition-colors hover:bg-slate-200 dark:hover:bg-slate-700 cursor-default">{text}</div>
    )
}