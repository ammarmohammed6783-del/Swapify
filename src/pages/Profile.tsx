import Nav from "../components/Nav"
import Navigation from "../components/Navigation"
import { IoLocationOutline } from "react-icons/io5";
import { CiCalendar } from "react-icons/ci";
import { CiStar } from "react-icons/ci";
import { CiSettings } from "react-icons/ci";

const Profile = () => {

    let Tages = ["Top Trader", "Fast Responder", "Rated"]

    return (
        <div>
            <Nav />
            <div className='flex mt-14'>
                <Navigation />
                <div className="mx-auto w-[70%]">
                    <div className="h-fit p-5 my-5 border border-gray-200 rounded-lg flex gap-5">
                        <div className="w-1/12">
                            <div className="rounded-full bg-gray-200 w-20 h-20 flex items-center justify-center">
                                <span className="text-lg">AM</span>
                            </div>
                        </div>
                        <div className="w-full">
                            <div className="flex justify-between">
                                <h1 className="text-2xl font-semibold">Ammar Mohammed</h1>
                                <button className="bg-black text-white px-3 py-1 rounded-lg h-10 flex items-center gap-1">
                                    <CiSettings size={20} /> Add New Item
                                </button>
                            </div>
                            <p className="flex items-center gap-2">
                                <IoLocationOutline />
                                <span className="text-gray-500">Spain</span>
                            </p>

                            <p className="flex items-center gap-2">
                                <CiCalendar />
                                <span className="text-gray-500">member since jan 2020</span>
                            </p>
                            <div className="flex items-center justify-between w-full my-3">
                                <div className="w-1/4">
                                    <h3 className="font-bold text-lg">24</h3>
                                    <p className="text-gray-500 text-sm">Total Trades</p>
                                </div>
                                <div className="w-1/4">
                                    <div className="flex items-center gap-1 text-center">
                                        <CiStar color="#fbbf24" size={24} />
                                        <h3 className="font-bold text-lg">4.7</h3>
                                    </div>
                                    <p className="text-gray-500 text-sm">Rating</p>
                                </div>
                                <div className="w-1/4">
                                    <h3 className="font-bold text-lg">97%</h3>
                                    <p className="text-gray-500 text-sm">Success Rate</p>
                                </div>
                                <div className="w-1/4">
                                    <Tag text="Verified" />
                                    <p className="text-gray-500 text-sm">Status</p>
                                </div>
                            </div>
                            <div className="my-3">
                                <h3 className="font-semibold my-2">About</h3>
                                <p className="text-sm text-gray-500">Lorem ipsum dolor sit amet consectetur adipisicing elit. Neque, ipsam cum provident corporis eligendi dicta! Sapiente officiis earum odit facilis, Lorem ipsum dolor sit amet.</p>
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
                    <p>add navigation here for the cards that you'll add</p>
                    <ItemCard />
                </div>
            </div>
        </div>
    )
}

export default Profile

function Tag({ text }: { text: string }) {
    return (
        <div className="p-1 px-2 bg-gray-200 rounded-lg w-fit text-sm font-semibold">{text}</div>
    )
}

function ItemCard() {
    return (
        <div className="border border-gray-200 p-5 my-3 rounded-lg flex items-center justify-between gap-4 h-30">
            <div className="flex gap-4 items-center">
                <div className="w-20 h-20 rounded-lg bg-black"></div>
                <div>
                    <h3 className="font-semibold">vintage film camera</h3>
                    <p className="text-gray-600">traded with sarah chen</p>
                    <p className="text-gray-600">traded for: <span className="font-semibold">professional camera lens</span></p>
                    <p className="text-gray-600">2 weeks ago</p>
                </div>
            </div>
            <div className="flex flex-col justify-between h-full">
                <div className="border border-gray-300 px-1 rounded-lg">completed</div>
                <div className="flex">
                    <CiStar className="text-yellow-400" />
                    <CiStar className="text-yellow-400" />
                    <CiStar className="text-yellow-400" />
                    <CiStar className="text-yellow-400" />
                    <CiStar className="text-yellow-400" />
                    <CiStar className="text-yellow-400" />
                </div>
            </div>
        </div>
    )
}
