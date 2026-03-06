import { useState } from "react";
import { TbBrightnessUp } from "react-icons/tb";
import { IoMdAdd, IoIosSearch } from "react-icons/io";

function Nav() {
    const [searchTerm, setSearchTerm] = useState("");

    // This function runs when the user submits the form
    const handleSearch = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault(); // prevent page reload
        console.log("Searching for:", searchTerm);
        // Here you can call a function to filter items, make API call, etc.
    };

    return (
        <div className="flex justify-evenly items-center h-14 shadow px-4">
            {/* Logo / Title */}
            <p className="font-medium text-lg">Trade Hub</p>

            {/* Search Form */}
            <form
                onSubmit={handleSearch}
                className="flex items-center bg-gray-100 rounded px-2 py-1 gap-2 w-1/2"
            >
                <IoIosSearch className="text-gray-400" />
                <input
                    type="text"
                    className="bg-transparent outline-none flex-1" // <-- flex-1 makes it take remaining space
                    placeholder="Search Item..."
                    value={searchTerm}
                    onChange={(e) => setSearchTerm(e.target.value)}
                />
            </form>

            {/* Icons & Button */}
            <div className="flex items-center gap-4">
                <TbBrightnessUp className="text-xl cursor-pointer" />
                <button className="bg-black text-white flex items-center gap-2 rounded py-1 px-2">
                    <IoMdAdd className="text-white" />
                    List Item
                </button>
            </div>
        </div>
    );
}

export default Nav;