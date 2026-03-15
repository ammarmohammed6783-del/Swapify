
function SignIn() {
    return (
        <div>
            <div className="h-[calc(100vh-3.5rem)] pt-5 flex items-center justify-center">
                <div className="w-[80%] max-w-md h-auto p-8 m-auto flex flex-col items-center gap-6 border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900 shadow-sm rounded-xl transition-colors">
                    <h1 className="text-3xl font-bold text-slate-900 dark:text-slate-100">Welcome</h1>
                    <p className="text-slate-500 dark:text-slate-400 text-center text-sm">Sign in or create an account to start swapping</p>
                    
                    <div className="w-full flex flex-col gap-4 mt-4">
                        <button className="w-full py-2.5 px-4 bg-slate-900 hover:bg-slate-800 dark:bg-slate-100 dark:hover:bg-slate-200 text-white dark:text-slate-900 rounded-lg font-medium transition-colors">
                            Log In
                        </button>
                        
                        <div className="relative flex items-center py-2">
                            <div className="flex-grow border-t border-slate-200 dark:border-slate-800"></div>
                            <span className="flex-shrink-0 mx-4 text-slate-400 dark:text-slate-500 text-sm">or</span>
                            <div className="flex-grow border-t border-slate-200 dark:border-slate-800"></div>
                        </div>

                        <button className="w-full py-2.5 px-4 bg-white dark:bg-slate-900 border border-slate-300 dark:border-slate-700 hover:bg-slate-50 dark:hover:bg-slate-800 text-slate-900 dark:text-slate-100 rounded-lg font-medium transition-colors">
                            Create Account
                        </button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default SignIn