function HowItWork() {
    return (
        <div className="h-screen w-screen flex justify-center items-center">
            <div className="m-auto max-w-3xl rounded-2xl border border-slate-200 bg-white p-6 shadow-sm dark:border-slate-700 dark:bg-slate-900 sm:p-8">
                <div className="text-center">
                    <p className="text-xs font-semibold uppercase tracking-[0.2em] text-indigo-600 dark:text-indigo-300">How it works</p>
                    <h1 className="mt-3 text-2xl font-bold text-slate-900 dark:text-white">Swapify in 3 simple steps</h1>
                    <p className="mt-2 text-sm text-slate-500 dark:text-slate-300">A focused, user-friendly experience for listing, connecting, and swapping products.</p>
                </div>

                <div className="mt-6 space-y-3 text-sm text-slate-600 dark:text-slate-300">
                    <p>1. Explore items on the clean homepage where categories and cards are easy to browse.</p>
                    <p>2. Select an item, request a swap, and communicate through Messages to agree on details.</p>
                    <p>3. Complete your swap by confirming and rating the transaction to build trust.</p>
                </div>

                <div className="mt-6 rounded-xl border border-indigo-100 bg-indigo-50 p-3 text-sm text-indigo-700 dark:border-indigo-900/50 dark:bg-indigo-950/40 dark:text-indigo-200">
                    <p className="font-medium">Tip: Keep your item details clear and respond quickly to join more successful swaps.</p>
                </div>
            </div>
        </div>
    )
}

export default HowItWork