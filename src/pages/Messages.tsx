import Nav from "../components/Nav"
import Navigation from "../components/Navigation"

import { IoSearchOutline } from "react-icons/io5";


const Messages = () => {
    return (
        <div>
            <Nav />
            <div className='flex mt-14 h-[calc(100vh-3.5rem)]'>
                <Navigation />
                <div className="w-[70%] h-11/12 m-auto flex border border-gray-300 rounded-lg">
                    <div className="p-5 border-r border-gray-300 w-1/3">
                        <div className="mb-5">
                            <h3 className="font-semibold my-2">Messages</h3>
                            <form className="flex items-center gap-2 bg-gray-100 rounded-lg px-3 py-2 w-full max-w-md">
                                <IoSearchOutline className="text-gray-500 text-lg" />
                                <input
                                    type="text"
                                    placeholder="Search messages..."
                                    className="bg-gray-100 focus:outline-none w-full text-gray-700 placeholder-gray-400"
                                />
                            </form>
                        </div>
                        <div>
                            <User />
                        </div>
                    </div>
                    <div className="h-full flex justify-center items-center flex-col p-5 text-center w-2/3">
                        <h3 className="font-semibold">Download Swapify for Windows</h3>
                        <p className="text-gray-300">use the app for easier useage</p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Messages


function User() {
    return (
        <div className="border-t border-gray-300 -mx-5 pt-5">
            <div className="px-5 flex gap-3">
                <div className="w-13">
                    <div className="rounded-full flex justify-center items-center bg-gray-300 w-10 h-10 text-sm">MM</div>
                </div>
                <div className="overflow-auto">
                    <h3>Ali Mohammed</h3>
                    <p className="text-sm text-gray-500">yes brother there are aloooot out there...</p>
                </div>
            </div>
        </div>
    )
}