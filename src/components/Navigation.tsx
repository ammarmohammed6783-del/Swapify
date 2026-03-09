import { AiFillHome } from "react-icons/ai";
import { MdOutlineExplore } from "react-icons/md";
import { FiBox } from "react-icons/fi";
import { FiMessageCircle } from "react-icons/fi";
import { IoPersonSharp } from "react-icons/io5";

function Navigation() {
    return (
        <div className="w-fit h-[calc(100vh-3.5rem)] p-3 flex flex-col gap-3 border-r-2 border-r-gray-100 bg-white sticky top-14">
            <button className="flex items-center gap-2 rounded-lg w-full h-10 p-3 text-white bg-black"><AiFillHome /> Home</button>
            <button className="flex items-center gap-2 rounded-lg w-full h-10 p-3 bg-white"><MdOutlineExplore /> Explore</button>
            <button className="flex items-center gap-2 rounded-lg w-full h-10 p-3 bg-white"><FiBox /> My Items</button>
            <button className="flex items-center gap-2 rounded-lg w-full h-10 p-3 bg-white"><FiMessageCircle /> Messages</button>
            <button className="flex items-center gap-2 rounded-lg w-full h-10 p-3 bg-white"><IoPersonSharp /> Profile</button>
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