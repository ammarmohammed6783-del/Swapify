import { IoLocationOutline } from "react-icons/io5";

const Card = () => {

    let intrests = ["electronics", "tools", "toys", "clothing", "music"]

    return (
        <div className="w-3/12 border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900 rounded-xl overflow-hidden transition-colors shadow-sm">
            <img src="" alt="" className="bg-slate-200 dark:bg-slate-800 w-full h-50 object-cover" />
            <div className="p-4">
                <h3 className="font-bold text-slate-900 dark:text-slate-100 text-lg">Vintage Film Camera</h3>
                <p className="text-slate-600 dark:text-slate-400 text-sm mt-1">beautiful Vintage 35mm film camera in excellent working condition</p>
                <p className="flex items-center gap-1.5 py-3 text-slate-500 dark:text-slate-400 text-sm"><IoLocationOutline className="text-lg" /> Cairo</p>
                <p className="text-sm font-medium text-slate-700 dark:text-slate-300 mb-2">Interested in:</p>
                <div className="flex flex-wrap gap-1">
                    {
                        intrests.map((ele, index) => (
                            <Intersted text={ele}/>
                        ))
                    }
                </div>
                <button className="w-full justify-center bg-slate-900 text-white hover:bg-slate-800 dark:bg-slate-100 dark:text-slate-900 dark:hover:bg-slate-200 flex items-center gap-2 rounded-lg py-2 px-3 mt-4 transition-colors font-medium">Propose Trade</button>
            </div>
        </div>
    )
}


function Intersted({text} : {text: string}) {
    return (
        <div className="bg-slate-100 dark:bg-slate-800 text-slate-700 dark:text-slate-300 font-medium px-2 py-0.5 border border-slate-200 dark:border-slate-700 rounded-md w-fit text-xs transition-colors">
            {text}
        </div>
    )
}

export default Card
