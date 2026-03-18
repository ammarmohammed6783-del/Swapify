function HowItWork() {
    const steps = [
        {
            title: "1. Browse & Discover",
            description: "Explore curated items and collections with smart filters. Find swaps that fit your interests in seconds.",
            icon: "🔍"
        },
        {
            title: "2. Request or List",
            description: "Send swap requests or post your own items with clear descriptions, images, and preferences.",
            icon: "📝"
        },
        {
            title: "3. Connect & Trade",
            description: "Chat safely, agree on terms, and complete swaps effortlessly with trusted members.",
            icon: "🤝"
        }
    ]

    return (
        <div className="mx-auto max-w-5xl px-3 py-4 sm:px-5 lg:px-8 min-h-[calc(100vh-3.5rem)] overflow-hidden">
            <div className="h-full rounded-2xl border border-slate-200 bg-white p-4 shadow-sm dark:border-slate-800 dark:bg-slate-900 sm:p-6 lg:p-8 overflow-hidden">
                <div className="grid gap-5 lg:grid-cols-[1.1fr_0.9fr] items-start">
                    <div>
                        <p className="inline-flex rounded-full bg-indigo-100 px-3 py-1 text-xs font-semibold uppercase tracking-[0.16em] text-indigo-700 dark:bg-indigo-900/30 dark:text-indigo-300">How Swapify Works</p>
                        <h1 className="mt-4 text-3xl font-extrabold tracking-tight text-slate-900 dark:text-white sm:text-4xl">Swap products faster with simple steps</h1>
                        <p className="mt-3 text-slate-600 dark:text-slate-300">This page shows exactly how you can trade items, connect with buyers, and manage your listings easily. Keep your swaps smooth, transparent, and safe.</p>

                        <div className="mt-6 rounded-2xl bg-slate-50 p-4 text-sm text-slate-700 dark:bg-slate-800 dark:text-slate-200">
                            <p className="font-semibold">Quick tips</p>
                            <ul className="mt-2 list-disc space-y-1 pl-5 text-slate-600 dark:text-slate-300">
                                <li>Use clear photos and details in your item listings.</li>
                                <li>Respond quickly to offers to close trades sooner.</li>
                                <li>Leave feedback after each successful swap.</li>
                            </ul>
                        </div>
                    </div>

                    <div className="rounded-2xl bg-gradient-to-br from-slate-800 via-slate-700 to-slate-900 p-4 text-white shadow-lg">
                        <p className="text-xs font-semibold uppercase tracking-[0.2em] text-slate-200">Ready to trade?</p>
                        <h2 className="mt-2 text-2xl font-bold">Start your first swap today</h2>
                        <p className="mt-3 text-sm text-slate-100/90">Create a listing in minutes and connect with members with secure chat and clear swap terms.</p>
                        <div className="mt-4 inline-flex items-center gap-2 rounded-full bg-white/10 px-3 py-2 text-xs font-medium text-slate-100">
                            💡 Good swaps are clear swaps
                        </div>
                    </div>
                </div>

                <div className="mt-8">
                    <h3 className="text-lg font-semibold text-slate-900 dark:text-white">Step-by-step process</h3>
                    <div className="mt-4 grid gap-3 md:grid-cols-3">
                        {steps.map((step) => (
                            <div key={step.title} className="rounded-xl border border-slate-200 bg-white p-4 shadow-sm transition hover:-translate-y-1 hover:border-indigo-300 dark:border-slate-700 dark:bg-slate-800">
                                <div className="flex h-10 w-10 items-center justify-center rounded-full bg-indigo-100 text-xl dark:bg-indigo-800">{step.icon}</div>
                                <p className="mt-3 text-sm font-semibold text-slate-900 dark:text-white">{step.title}</p>
                                <p className="mt-1 text-sm text-slate-600 dark:text-slate-300">{step.description}</p>
                            </div>
                        ))}
                    </div>
                </div>

                <div className="mt-10 rounded-2xl border border-indigo-100 bg-indigo-50 p-4 text-slate-700 dark:border-indigo-900/50 dark:bg-indigo-950/40 dark:text-indigo-100">
                    <p className="font-semibold">Need help?</p>
                    <p className="mt-1 text-sm">Visit the Items page to add your first listing, and use Messages to reply to interested members directly.</p>
                </div>
            </div>
        </div>
    )
}

export default HowItWork