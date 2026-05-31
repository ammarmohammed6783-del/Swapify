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

    
    const [clicked, setClicked] = useState(false)

    function handleClickedUser() {
        setClicked(!clicked);
    }

    return (
        <div className="h-[calc(100vh-3.5rem)] pt-5">
            <div className="w-[70%] h-[90%] m-auto flex border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900 shadow-sm rounded-xl overflow-hidden transition-colors">

                {/* Left Sidebar: Conversations List */}
                <div className="border-r border-slate-200 dark:border-slate-800 w-1/3 flex flex-col">
                    <div className="border-b border-slate-200 dark:border-slate-800">
                        <div className="p-5">
                            <h3 className="font-bold text-slate-900 dark:text-slate-100 mb-3 text-lg">Messages</h3>
                            <form className="flex items-center gap-2 bg-slate-100 dark:bg-slate-800/50 rounded-lg px-3 py-2 w-full border border-transparent focus-within:border-slate-300 dark:focus-within:border-slate-700 transition-colors">
                                <IoSearchOutline className="text-slate-500 dark:text-slate-400 text-lg" />
                                <input
                                    onChange={(e) => { setSearchedName(e.target.value) }}
                                    type="text"
                                    placeholder="Search messages..."
                                    className="bg-transparent focus:outline-none w-full text-slate-900 dark:text-slate-100 placeholder-slate-500 dark:placeholder-slate-400"
                                />
                            </form>
                        </div>
                    </div>

                    <div className="overflow-y-auto flex-1 p-2 no-scrollbar">
                        {
                            users.map((ele, index) => {
                                if (ele.userName.toLowerCase().includes(searchedName.toLowerCase())) {
                                    return <User onClick={handleClickedUser} element={ele} key={index} />
                                }
                            })
                        }
                    </div>
                </div>

                {/* Right Area: Empty State */}
                <div className="h-full flex justify-center items-center flex-col p-5 text-center w-2/3 bg-slate-50/50 dark:bg-slate-900/50">
                    {
                        clicked ?
                            <div>
                                <div className="bg-slate-100 dark:bg-slate-800 w-16 h-16 rounded-full flex items-center justify-center mb-4 border border-slate-200 dark:border-slate-700">
                                    <IoSearchOutline className="text-3xl text-slate-400 dark:text-slate-500" />
                                </div>
                                <h3 className="font-bold text-slate-900 dark:text-slate-100 mb-2 text-xl">Download Swapify for Windows</h3>
                                <p className="text-slate-500 dark:text-slate-400 max-w-sm">Use the desktop application for faster chatting and trade notifications.</p>
                            </div>
                            :
                            <div>hello</div>
                    }
                </div>

            </div>
        </div>
    )
}

export default Messages