import { FaArrowRightLong } from "react-icons/fa6";
import { Link } from "react-router-dom";

const Ready = () => {
    return (
        <div className="bg-gray-200 p-10 rounded-lg my-10 w-full h-fit flex flex-col items-center">
            <h1 className="text-4xl font-bold my-4">Ready To Start Trading?</h1>
            <p className="text-gray-600 max-w-2xl">List your items, browse what others have to offer, and make trades that work for both parties.</p>
            <p className="text-gray-600 py-1">No money involved, just honest exchange</p>
            <div className="flex gap-2 my-2">
                <Link to="/profile">
                    <button className="py-2 px-3 bg-black rounded-lg text-white flex items-center gap-2">List Your First Item <FaArrowRightLong className="size-3" /></button>
                </Link>
            </div>
        </div>
    )
}

export default Ready
