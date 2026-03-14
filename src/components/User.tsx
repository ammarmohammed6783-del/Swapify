/*
    you can make element: {photoName, userName, message}
*/

interface probs {
    element: {
        photoName: string;
        userName: string;
        message: string;
    }
}

function User({ element }: probs) {
    return (
        <div className="rounded-xl p-3 hover:bg-slate-100 dark:hover:bg-slate-800/50 flex gap-3 cursor-pointer transition-colors border border-transparent hover:border-slate-200 dark:hover:border-slate-700">
            <div className="flex-shrink-0">
                <div className="rounded-full flex justify-center items-center bg-slate-100 dark:bg-slate-800 text-slate-700 dark:text-slate-300 border border-slate-200 dark:border-slate-700 w-12 h-12 text-sm font-medium">
                    {element.photoName}
                </div>
            </div>
            <div className="overflow-hidden flex flex-col justify-center">
                <h3 className="font-medium text-slate-900 dark:text-slate-100 truncate">{element.userName}</h3>
                <p className="text-sm text-slate-500 dark:text-slate-400 truncate">{element.message}</p>
            </div>
        </div>
    )
}

export default User