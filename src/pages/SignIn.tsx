import { Link } from "react-router-dom";

function SignIn() {
    return (
        <div>
            <div className="h-[calc(100vh-3.5rem)] py-8 flex items-center justify-center -mt-8">
                <div className="w-[90%] max-w-105 h-auto p-10 m-auto flex flex-col items-center gap-6 border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900 shadow-xl shadow-slate-200/50 dark:shadow-slate-900/50 rounded-2xl transition-all">
                    <div className="text-center space-y-2">
                        <p className="text-slate-500 dark:text-slate-400 text-sm">Join Trade Hub and start swapping today</p>
                    </div>

                    <form className="w-full flex flex-col gap-5 mt-2">
                        <div className="space-y-4">
                            <div>
                                <label className="block text-sm font-medium text-slate-700 dark:text-slate-300 mb-1.5" htmlFor="name">Full Name</label>
                                <input
                                    id="name"
                                    type="text"
                                    className="w-full px-4 py-2.5 rounded-lg bg-slate-50 dark:bg-slate-950 border border-slate-200 dark:border-slate-800 focus:outline-none focus:ring-2 focus:ring-slate-900 dark:focus:ring-slate-100 transition-all text-slate-900 dark:text-slate-100 placeholder-slate-400 dark:placeholder-slate-500"
                                    placeholder="John Doe"
                                />
                            </div>

                            <div>
                                <label className="block text-sm font-medium text-slate-700 dark:text-slate-300 mb-1.5" htmlFor="email">Email</label>
                                <input
                                    id="email"
                                    type="email"
                                    className="w-full px-4 py-2.5 rounded-lg bg-slate-50 dark:bg-slate-950 border border-slate-200 dark:border-slate-800 focus:outline-none focus:ring-2 focus:ring-slate-900 dark:focus:ring-slate-100 transition-all text-slate-900 dark:text-slate-100 placeholder-slate-400 dark:placeholder-slate-500"
                                    placeholder="name@example.com"
                                />
                            </div>

                            <div>
                                <label className="block text-sm font-medium text-slate-700 dark:text-slate-300 mb-1.5" htmlFor="password">Password</label>
                                <input
                                    id="password"
                                    type="password"
                                    className="w-full px-4 py-2.5 rounded-lg bg-slate-50 dark:bg-slate-950 border border-slate-200 dark:border-slate-800 focus:outline-none focus:ring-2 focus:ring-slate-900 dark:focus:ring-slate-100 transition-all text-slate-900 dark:text-slate-100 placeholder-slate-400 dark:placeholder-slate-500"
                                    placeholder="••••••••"
                                />
                                <p className="text-xs text-slate-500 mt-2">Must be at least 8 characters long.</p>
                            </div>
                        </div>

                        <button type="submit" className="w-full mt-2 py-3 px-4 bg-slate-900 hover:bg-slate-800 dark:bg-slate-100 dark:hover:bg-slate-200 text-white dark:text-slate-900 rounded-xl font-semibold shadow-md transition-all active:scale-[0.98]">
                            Create Account
                        </button>
                    </form>

                    <div className="w-full mt-2 text-center text-sm text-slate-600 dark:text-slate-400">
                        Already have an account?{" "}
                        <Link to="/login" className="font-semibold text-slate-900 dark:text-slate-100 hover:underline transition-all">
                            Log in
                        </Link>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default SignIn