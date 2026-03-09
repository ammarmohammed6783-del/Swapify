import { AiFillHome } from "react-icons/ai";
import { MdOutlineExplore } from "react-icons/md";
import { FiBox } from "react-icons/fi";
import { FiMessageCircle } from "react-icons/fi";
import { IoPersonSharp } from "react-icons/io5";
import { NavLink } from "react-router-dom";

function Navigation() {
    return (
        <div className="w-fit h-[calc(100vh-3.5rem)] p-3 flex flex-col gap-3 border-r-2 border-r-gray-100 bg-white sticky top-14">
            <NavLink
                to="/"
                end
                className={({ isActive }) =>
                    `flex items-center gap-2 rounded-lg w-full h-10 p-3 ${isActive ? "text-white bg-black" : "bg-white"
                    }`
                }
            >
                <AiFillHome /> Home
            </NavLink>

            <NavLink
                to="/explore"
                className={({ isActive }) =>
                    `flex items-center gap-2 rounded-lg w-full h-10 p-3 ${isActive ? "text-white bg-black" : "bg-white"
                    }`
                }
            >
                <MdOutlineExplore /> Explore
            </NavLink>

            <NavLink
                to="/items"
                className={({ isActive }) =>
                    `flex items-center gap-2 rounded-lg w-full h-10 p-3 ${isActive ? "text-white bg-black" : "bg-white"
                    }`
                }
            >
                <FiBox /> My Items
            </NavLink>

            <NavLink
                to="/messages"
                className={({ isActive }) =>
                    `flex items-center gap-2 rounded-lg w-full h-10 p-3 ${isActive ? "text-white bg-black" : "bg-white"
                    }`
                }
            >
                <FiMessageCircle /> Messages
            </NavLink>

            <NavLink
                to="/profile"
                className={({ isActive }) =>
                    `flex items-center gap-2 rounded-lg w-full h-10 p-3 ${isActive ? "text-white bg-black" : "bg-white"
                    }`
                }
            >
                <IoPersonSharp /> Profile
            </NavLink>
            <div className="bg-gray-200 w-full h-fit p-3 rounded-lg flex flex-col gap-3 my-15">
                <h3 className="font-bold">Popular Categories</h3>
                <div className="flex">
                    <div>
                        <p className="w-20">Electronics</p>
                        <p className="w-20">Books</p>
                        <p className="w-20">Furniture</p>

                    </div>
                    <div>
                        <p className="w-20">Clothing</p>
                        <p className="w-20">Sports</p>
                        <p className="w-20">Tools</p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Navigation