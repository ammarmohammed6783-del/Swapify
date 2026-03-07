import { AiFillHome } from "react-icons/ai";
import { MdOutlineExplore } from "react-icons/md";
import { FiBox } from "react-icons/fi";
import { FiMessageCircle } from "react-icons/fi";
import { IoPersonSharp } from "react-icons/io5";

function Navigation() {
    return (
        <div className="w-2/12 h-[calc(100vh-3.5rem)] p-3 flex flex-col gap-3 shadow bg-white sticky top-14">
            <button className="flex items-center gap-2 rounded-lg w-full h-10 p-3 text-white bg-black"><AiFillHome/> Home</button>
            <button className="flex items-center gap-2 rounded-lg w-full h-10 p-3 bg-white"><MdOutlineExplore/> Explore</button>
            <button className="flex items-center gap-2 rounded-lg w-full h-10 p-3 bg-white"><FiBox/> My Items</button>
            <button className="flex items-center gap-2 rounded-lg w-full h-10 p-3 bg-white"><FiMessageCircle/> Messages</button>
            <button className="flex items-center gap-2 rounded-lg w-full h-10 p-3 bg-white"><IoPersonSharp/> Profile</button>
        </div>
    )
}

export default Navigation