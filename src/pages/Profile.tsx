import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"

import { IoLocationOutline } from "react-icons/io5";
import { CiCalendar } from "react-icons/ci";
import { CiStar } from "react-icons/ci";
import { CiSettings } from "react-icons/ci";

const Profile = () => {

    let Tages = ["Top Trader", "Fast Responder", "Rated"]

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
                            <button className="bg-slate-900 text-white hover:bg-slate-800 dark:bg-slate-100 dark:text-slate-900 dark:hover:bg-slate-200 px-4 py-2 rounded-lg h-10 flex items-center gap-2 transition-colors font-medium text-sm">
                                <CiSettings className="text-xl" /> Edit Profile
                            </button>
                            <button className="text-red-600 hover:text-red-700 dark:text-red-400 dark:hover:text-red-300 bg-red-50 hover:bg-red-100 dark:bg-red-950/30 dark:hover:bg-red-900/40 px-4 py-2 rounded-lg h-10 flex items-center gap-2 transition-colors font-medium text-sm border border-red-200 dark:border-red-800/50">
                                Log Out
                            </button>
                        </div>
                    </div>
                    <div className="flex gap-4 mt-2">
                        <p className="flex items-center gap-1.5 text-slate-500 dark:text-slate-400">
                            <IoLocationOutline className="text-lg" />
                            <span>Spain</span>
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
            <Tabs defaultValue="account" className="w-[400px]">
                <TabsList>
                    <TabsTrigger value="account">Account</TabsTrigger>
                    <TabsTrigger value="password">Password</TabsTrigger>
                </TabsList>
                <TabsContent value="account">Make changes to your account here.</TabsContent>
                <TabsContent value="password">Change your password here.</TabsContent>
            </Tabs>
            <ItemCard />
        </div>
    )
}

export default Profile

function Tag({ text }: { text: string }) {
    return (
        <div className="px-2.5 py-1 bg-slate-100 dark:bg-slate-800 text-slate-700 dark:text-slate-300 border border-slate-200 dark:border-slate-700 rounded-lg w-fit text-sm font-medium transition-colors">{text}</div>
    )
}

function ItemCard() {
    return (
        <div className="border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900 p-5 my-4 rounded-xl flex items-center justify-between gap-4 transition-colors">
            <div className="flex gap-5 items-center">
                <div className="w-24 h-24 rounded-lg bg-slate-100 dark:bg-slate-800 border border-slate-200 dark:border-slate-700 flex-shrink-0"></div>
                <div>
                    <h3 className="font-bold text-slate-900 dark:text-slate-100 text-lg">vintage film camera</h3>
                    <div className="space-y-1 mt-1">
                        <p className="text-slate-500 dark:text-slate-400 text-sm flex items-center gap-2">
                            <span>Traded with</span>
                            <span className="font-medium text-slate-700 dark:text-slate-300">Sarah Chen</span>
                        </p>
                        <p className="text-slate-500 dark:text-slate-400 text-sm flex items-center gap-2">
                            <span>Traded for</span>
                            <span className="bg-slate-100 dark:bg-slate-800 px-2 py-0.5 rounded text-slate-700 dark:text-slate-300 font-medium">professional camera lens</span>
                        </p>
                        <p className="text-slate-400 dark:text-slate-500 text-xs mt-2">2 weeks ago</p>
                    </div>
                </div>
            </div>
            <div className="flex flex-col justify-between items-end h-full gap-6">
                <div className="border border-emerald-200 dark:border-emerald-800 bg-emerald-50 dark:bg-emerald-900/20 text-emerald-600 dark:text-emerald-400 px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wider">completed</div>
                <div className="flex gap-1">
                    <CiStar className="text-amber-400 text-xl" />
                    <CiStar className="text-amber-400 text-xl" />
                    <CiStar className="text-amber-400 text-xl" />
                    <CiStar className="text-amber-400 text-xl" />
                    <CiStar className="text-amber-400 text-xl" />
                </div>
            </div>
        </div>
    )
}
