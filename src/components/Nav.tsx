import { useState } from "react";
import { useThemeContext } from '../theme/ThemeContext'; // import your hook

import { LuMoon } from "react-icons/lu";
import { TbBrightnessUp } from "react-icons/tb";
import { IoMdAdd, IoIosSearch } from "react-icons/io";
import { Link } from "react-router-dom";

import { Categories } from "@/data/Cards_info";

function Nav() {
    const { theme, setTheme } = useThemeContext();

    const toggleTheme = () => {
        const newTheme = theme === 'light' ? 'dark' : 'light';
        setTheme(newTheme);
    };

    const [searchTerm, setSearchTerm] = useState("");

    const handleSearch = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        // navigate to the searched word if exist
        console.log("Searching for:", searchTerm);
    };

    const [isSearchFocused, setIsSearchFocused] = useState(false);

    return (
        <div className="sticky top-0 left-0 w-full h-14 shadow-sm border-b border-slate-200 dark:border-slate-800 px-4 flex justify-between items-center z-50 bg-white dark:bg-slate-950 transition-colors duration-300">
            <div className="flex gap-4 items-center">
                <p className="font-bold text-xl tracking-tight text-slate-900 dark:text-slate-100">Trade Hub</p>
                <div className="flex items-center gap-1 ml-4 border-l pl-4 border-slate-200 dark:border-slate-800">
                    <Link to="/login">
                        <button className="text-sm font-medium text-slate-600 hover:text-slate-900 dark:text-slate-400 dark:hover:text-slate-100 py-1.5 px-3 rounded-lg hover:bg-slate-100 dark:hover:bg-slate-800 transition-colors">Log In</button>
                    </Link>
                    <Link to="/signin">
                        <button className="text-sm font-medium bg-slate-900 text-white hover:bg-slate-800 dark:bg-slate-100 dark:text-slate-900 dark:hover:bg-slate-200 flex items-center gap-2 rounded-lg py-1.5 px-4 transition-colors">Sign In</button>
                    </Link>
                </div>
            </div>
            <form
                onSubmit={handleSearch}
                className="relative flex items-center bg-slate-100 dark:bg-slate-900 rounded-lg px-3 py-1.5 gap-2 w-1/2 border border-transparent focus-within:border-slate-300 dark:focus-within:border-slate-700 transition-colors"
            >
                <IoIosSearch className="text-slate-500 dark:text-slate-400" />
                <input
                    type="text"
                    className="bg-transparent outline-none flex-1 text-slate-900 dark:text-slate-100 placeholder-slate-500 dark:placeholder-slate-400" // <-- flex-1 makes it take remaining space
                    placeholder="Search Item..."
                    value={searchTerm}
                    onFocus={() => setIsSearchFocused(true)}
                    onBlur={() => setIsSearchFocused(false)}
                    onChange={(e) => setSearchTerm(e.target.value)}
                />

                {isSearchFocused && (
                    <div className="absolute top-[120%] left-0 w-full bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-xl shadow-xl overflow-hidden py-2 z-50">
                        <div className="px-4 py-2 text-xs font-semibold uppercase tracking-wider text-slate-500 dark:text-slate-400">
                            Try searching for
                        </div>
                        <ul className="flex flex-col">
                            {Categories.map((category) => (
                                <li key={category}>
                                    <button
                                        type="button"
                                        onMouseDown={(e) => {
                                            // Use onMouseDown to fire before the input's onBlur event
                                            e.preventDefault();
                                            setSearchTerm(category);
                                            setIsSearchFocused(false);
                                        }}
                                        className="w-full text-left px-4 py-2 hover:bg-slate-100 dark:hover:bg-slate-800 text-slate-700 dark:text-slate-300 transition-colors flex items-center gap-3"
                                    >
                                        <IoIosSearch className="text-slate-400 text-lg" />
                                        <span className="capitalize">{category}</span>
                                    </button>
                                </li>
                            ))}
                        </ul>
                    </div>
                )}
            </form>

            <div className="flex items-center gap-4">
                {
                    theme === 'light' ? <LuMoon className="text-xl cursor-pointer text-slate-600 hover:text-slate-900 dark:text-slate-400" onClick={toggleTheme} /> : <TbBrightnessUp className="text-xl cursor-pointer text-slate-400 hover:text-slate-100" onClick={toggleTheme} />
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