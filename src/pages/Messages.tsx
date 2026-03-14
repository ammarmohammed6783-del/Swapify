import { useState } from "react";

import { IoSearchOutline } from "react-icons/io5";
import User from "../components/User";


const Messages = () => {

    let users = [
        {
            photoName: "MM",
            userName: "Ammar Mohammed",
            message: "yes brother there are aloooot out there..."
        },
        {
            photoName: "IS",
            userName: "Ingi Sami",
            message: "yes brother there are aloooot out there..."
        },
        {
            photoName: "MA",
            userName: "Mohammed Ali",
            message: "yes brother there are aloooot out there..."
        },
    ]

    const [searchedName, setSearchedName] = useState("");

    return (
        <div className="h-[calc(100vh-3.5rem)] pt-5">
            <div className="w-[70%] h-[90%] m-auto flex border border-gray-300 rounded-lg overflow-hidden">
                    <div className="px-5 border-r border-gray-300 w-1/3">
                        <div className="border-b border-gray-300 -mx-5">
                            <div className="p-5">
                                <h3 className="font-semibold mb-2">Messages</h3>
                                <form className="flex items-center gap-2 bg-gray-100 rounded-lg px-3 py-2 w-full max-w-md">
                                    <IoSearchOutline className="text-gray-500 text-lg" />
                                    <input
                                        onChange={(e) => { setSearchedName(e.target.value) }}
                                        type="text"
                                        placeholder="Search messages..."
                                        className="bg-gray-100 focus:outline-none w-full text-gray-700 placeholder-gray-400"
                                    />
                                </form>
                            </div>
                        </div>
                        <div className="my-3">
                            {
                                users.map((ele, index) => {
                                    if (ele.userName.toLowerCase().includes(searchedName.toLowerCase())) {
                                        return <User element={ele} key={index} />
                                    }
                                })
                            }
                        </div>
                    </div>
                    <div className="h-full flex justify-center items-center flex-col p-5 text-center w-2/3">
                        <h3 className="font-bold text-slate-900 dark:text-slate-100 mb-2">Download Swapify for Windows</h3>
                        <p className="text-slate-500 dark:text-slate-400">use the app for easier usage</p>
                    </div>
                </div>
            </div>
    )
}

export default Messages