import { useState } from "react";
import { useThemeContext } from '../theme/ThemeContext'; // import your hook

import { LuMoon } from "react-icons/lu";
import { TbBrightnessUp } from "react-icons/tb";
import { IoMdAdd, IoIosSearch } from "react-icons/io";
import { Link } from "react-router-dom";

function Nav() {
    const { theme, setTheme } = useThemeContext();

    const toggleTheme = () => {
        setTheme(theme === 'light' ? 'dark' : 'light');
    };

    const [searchTerm, setSearchTerm] = useState("");

    // This function runs when the user submits the form
    const handleSearch = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault(); // prevent page reload
        console.log("Searching for:", searchTerm);
        // Here you can call a function to filter items, make API call, etc.
    };

    return (
        <div className="fixed top-0 left-0 w-full h-14 shadow-sm border-b border-slate-200 dark:border-slate-800 px-4 flex justify-between items-center z-10 bg-white dark:bg-slate-950 transition-colors duration-300">
            <div className="flex gap-3 items-center">
                <p className="font-medium text-lg text-slate-900 dark:text-slate-100">Trade Hub</p>
                <Link to="/signin">
                    <button className="bg-slate-900 text-white hover:bg-slate-800 dark:bg-slate-100 dark:text-slate-900 dark:hover:bg-slate-200 flex items-center gap-2 rounded-lg py-1 px-3 transition-colors">Sign up</button>
                </Link>
            </div>
            <form
                onSubmit={handleSearch}
                className="flex items-center bg-slate-100 dark:bg-slate-900 rounded-lg px-3 py-1.5 gap-2 w-1/2 border border-transparent focus-within:border-slate-300 dark:focus-within:border-slate-700 transition-colors"
            >
                <IoIosSearch className="text-slate-500 dark:text-slate-400" />
                <input
                    type="text"
                    className="bg-transparent outline-none flex-1 text-slate-900 dark:text-slate-100 placeholder-slate-500 dark:placeholder-slate-400" // <-- flex-1 makes it take remaining space
                    placeholder="Search Item..."
                    value={searchTerm}
                    onChange={(e) => setSearchTerm(e.target.value)}
                />
            </form>

            <div className="flex items-center gap-4">
                {
                    theme === 'light' ? <LuMoon className="text-xl cursor-pointer text-slate-600 hover:text-slate-900 dark:text-slate-400" onClick={toggleTheme} /> : <TbBrightnessUp className="text-xl cursor-pointer text-slate-400 hover:text-slate-100" onClick={toggleTheme}/>
                }
                <Link to="/items">
                    <button className="bg-slate-900 text-white hover:bg-slate-800 dark:bg-slate-100 dark:text-slate-900 dark:hover:bg-slate-200 flex items-center gap-2 rounded-lg py-1.5 px-3 transition-colors">
                        <IoMdAdd className="text-current" />
                        List Item
                    </button>
                </Link>
            </div>
        </div>
    );
}

export default Nav;