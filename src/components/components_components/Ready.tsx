import { FaArrowRightLong } from "react-icons/fa6";
import { Link } from "react-router-dom";

const Ready = () => {
    return (
        <div className="bg-slate-100 dark:bg-slate-900 p-12 rounded-2xl my-10 w-full h-fit flex flex-col items-center text-center transition-colors border border-transparent dark:border-slate-800">
            <h1 className="text-4xl font-extrabold my-4 text-slate-900 dark:text-slate-100">Ready To Start Trading?</h1>
            <p className="text-slate-600 dark:text-slate-400 max-w-2xl text-lg mb-2">List your items, browse what others have to offer, and make trades that work for both parties.</p>
            <p className="text-slate-500 dark:text-slate-500 font-medium py-1">No money involved, just honest exchange</p>
            <div className="flex gap-2 mt-8">
                <Link to="/profile">
                    <button className="py-3 px-6 bg-slate-900 text-white hover:bg-slate-800 dark:bg-slate-100 dark:text-slate-900 dark:hover:bg-slate-200 rounded-lg flex items-center gap-2 font-medium transition-colors">List Your First Item <FaArrowRightLong className="size-4" /></button>
                </Link>
            </div>
        </div>
    )
}

export default Ready
