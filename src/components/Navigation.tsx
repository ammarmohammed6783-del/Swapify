import { AiFillHome } from "react-icons/ai";
import { MdOutlineExplore } from "react-icons/md";
import { FiBox } from "react-icons/fi";
import { FiMessageCircle } from "react-icons/fi";
import { IoPersonOutline } from "react-icons/io5";
import { NavLink } from "react-router-dom";
import { CiSettings } from "react-icons/ci";
import { FaRegHeart } from "react-icons/fa6";

function Navigation() {
    return (
        <div className="w-fit h-[calc(100vh-3.5rem)] p-3 flex flex-col gap-3 border-r border-r-slate-200 dark:border-r-slate-800 bg-white dark:bg-slate-950 sticky top-14 transition-colors duration-300">
            <NavLink
                to="/"
                end
                className={({ isActive }) =>
                    `flex items-center gap-2 rounded-lg w-full h-10 p-3 transition-colors ${isActive
                        ? "bg-slate-900 text-white dark:bg-slate-800 dark:text-white font-medium"
                        : "text-slate-700 hover:bg-slate-100 dark:text-slate-300 dark:hover:bg-slate-900"
                    }`
                }
            >
                <AiFillHome /> Home
            </NavLink>

            <NavLink
                to="/favourites"
                className={({ isActive }) =>
                    `flex items-center gap-2 rounded-lg w-full h-10 p-3 transition-colors ${isActive
                        ? "bg-slate-900 text-white dark:bg-slate-800 dark:text-white font-medium"
                        : "text-slate-700 hover:bg-slate-100 dark:text-slate-300 dark:hover:bg-slate-900"
                    }`
                }
            >
                <FaRegHeart /> Favourites
            </NavLink>

            <NavLink
                to="/items"
                className={({ isActive }) =>
                    `flex items-center gap-2 rounded-lg w-full h-10 p-3 transition-colors ${isActive
                        ? "bg-slate-900 text-white dark:bg-slate-800 dark:text-white font-medium"
                        : "text-slate-700 hover:bg-slate-100 dark:text-slate-300 dark:hover:bg-slate-900"
                    }`
                }
            >
                <FiBox /> My Items
            </NavLink>

            <NavLink
                to="/messages"
                className={({ isActive }) =>
                    `flex items-center gap-2 rounded-lg w-full h-10 p-3 transition-colors ${isActive
                        ? "bg-slate-900 text-white dark:bg-slate-800 dark:text-white font-medium"
                        : "text-slate-700 hover:bg-slate-100 dark:text-slate-300 dark:hover:bg-slate-900"
                    }`
                }
            >
                <FiMessageCircle /> Messages
            </NavLink>

            <NavLink
                to="/profile"
                className={({ isActive }) =>
                    `flex items-center gap-2 rounded-lg w-full h-10 p-3 transition-colors ${isActive
                        ? "bg-slate-900 text-white dark:bg-slate-800 dark:text-white font-medium"
                        : "text-slate-700 hover:bg-slate-100 dark:text-slate-300 dark:hover:bg-slate-900"
                    }`
                }
            >
                <IoPersonOutline /> Profile
            </NavLink>
            <NavLink
                to="/settings"
                className={({ isActive }) =>
                    `flex items-center gap-2 rounded-lg w-full h-10 p-3 transition-colors ${isActive
                        ? "bg-slate-900 text-white dark:bg-slate-800 dark:text-white font-medium"
                        : "text-slate-700 hover:bg-slate-100 dark:text-slate-300 dark:hover:bg-slate-900"
                    }`
                }
            >
                <CiSettings /> settings
            </NavLink>
            <div className="bg-slate-100 dark:bg-slate-900 w-full h-fit p-4 rounded-xl flex flex-col gap-3 my-15 transition-colors">
                <h3 className="font-bold text-slate-900 dark:text-slate-100">Popular Categories</h3>
                <div className="flex text-sm text-slate-600 dark:text-slate-400 gap-4">
                    <div className="flex flex-col gap-2">
                        <p className="w-20 hover:text-slate-900 dark:hover:text-slate-200 cursor-pointer transition-colors">Electronics</p>
                        <p className="w-20 hover:text-slate-900 dark:hover:text-slate-200 cursor-pointer transition-colors">Books</p>
                        <p className="w-20 hover:text-slate-900 dark:hover:text-slate-200 cursor-pointer transition-colors">Furniture</p>
                    </div>
                    <div className="flex flex-col gap-2">
                        <p className="w-20 hover:text-slate-900 dark:hover:text-slate-200 cursor-pointer transition-colors">Clothing</p>
                        <p className="w-20 hover:text-slate-900 dark:hover:text-slate-200 cursor-pointer transition-colors">Sports</p>
                        <p className="w-20 hover:text-slate-900 dark:hover:text-slate-200 cursor-pointer transition-colors">Tools</p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Navigation