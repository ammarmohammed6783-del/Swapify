import { useState } from "react";
import { useThemeContext } from '../ThemeContext'; // import your hook

import { LuMoon } from "react-icons/lu";
import { TbBrightnessUp } from "react-icons/tb";
import { IoMdAdd, IoIosSearch } from "react-icons/io";
import { Link } from "react-router-dom";

function Nav() {
    const [light, setLight] = useState(true);
    const { theme, setTheme } = useThemeContext();

    const toggleTheme = () => {
        setTheme(theme === 'light' ? 'dark' : 'light');
        setLight(!light);
    };

    const [searchTerm, setSearchTerm] = useState("");

    // This function runs when the user submits the form
    const handleSearch = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault(); // prevent page reload
        console.log("Searching for:", searchTerm);
        // Here you can call a function to filter items, make API call, etc.
    };

    return (
        <div className="fixed top-0 left-0 w-full h-14 shadow px-4 flex justify-between items-center z-10 bg-white text-black">
            <div className="flex gap-3 items-center">
                <p className="font-medium text-lg">Trade Hub</p>
                <Link to="/signin">
                    <button className="bg-black text-white flex items-center gap-2 rounded py-1 px-2">Sign up</button>
                </Link>
            </div>
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

            <div className="flex items-center gap-4">
                {
                    light ? <LuMoon className="text-xl cursor-pointer" onClick={toggleTheme} /> : <TbBrightnessUp className="text-xl cursor-pointer" onClick={toggleTheme}/>
                }
                <Link to="/items">
                    <button className="bg-black text-white flex items-center gap-2 rounded py-1 px-2">
                        <IoMdAdd className="text-white" />
                        List Item
                    </button>
                </Link>
            </div>
        </div>
    );
}

export default Nav;