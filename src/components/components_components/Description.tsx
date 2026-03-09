import { LuSparkles } from "react-icons/lu";
import { FaArrowRightLong } from "react-icons/fa6";

function Description() {
    return (
        <div className="bg-gray-200 p-10 rounded-lg my-4 w-188 h-fit">
            <p className="flex items-center gap-2"><LuSparkles /> Welcome to TradeHub</p>
            <h1 className="text-4xl font-bold my-2">Trade What You Have For <br /> What You Need</h1>
            <p className="text-gray-600 max-w-2xl">join our community of traders. Exchange items without money, build connections and find what your're lokking for.</p>
            <div className="flex gap-2 my-2">
                <button className="py-1 px-3 bg-black rounded text-white flex items-center gap-2">Start Trading <FaArrowRightLong className="size-3"/></button>
                <button className="py-1 px-3 bg-white rounded">How It Works</button>
            </div>
        </div>
    )
}

export default Description