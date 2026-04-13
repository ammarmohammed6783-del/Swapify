import { LuSparkles } from "react-icons/lu";
import { FaArrowRightLong } from "react-icons/fa6";
import { Link } from "react-router-dom";

function Description() {
    return (
        <div className="bg-slate-100 dark:bg-slate-900 p-10 rounded-2xl my-10 w-full h-fit transition-colors border border-transparent dark:border-slate-800">
            <p className="flex items-center gap-2 text-slate-600 dark:text-slate-400 font-medium"><LuSparkles className="text-amber-500" /> Welcome to TradeHub</p>
            <h1 className="text-4xl font-extrabold my-4 text-slate-900 dark:text-slate-100">Trade What You Have For <br /> What You Need</h1>
            <p className="text-slate-600 dark:text-slate-400 max-w-2xl text-lg leading-relaxed">Join our community of traders. Exchange items without money, build connections and find what you're looking for.</p>
            <div className="flex gap-4 mt-8">
                <Link to="/explore">
                    <button className="py-2.5 px-5 bg-slate-900 text-white hover:bg-slate-800 dark:bg-slate-100 dark:text-slate-900 dark:hover:bg-slate-200 rounded-lg flex items-center gap-2 font-medium transition-colors">Start Trading <FaArrowRightLong className="size-4" /></button>
                </Link>
                <Link to="/description">
                    <button className="py-2.5 px-5 bg-white dark:bg-slate-800 text-slate-900 dark:text-slate-100 border border-slate-200 dark:border-slate-700 hover:bg-slate-50 dark:hover:bg-slate-700 rounded-lg font-medium transition-colors">How It Works</button>
                </Link>
            </div>
        </div>
    )
}

export default Description