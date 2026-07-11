interface Props {
    element?: {
        photoName?: string;
        userName?: string;
        message?: string;
    };
    onClick?: () => void;
}

function Messages({ element, onClick }: Props) {
    const user = element ?? {
        photoName: "ME",
        userName: "Messages",
        message: "No conversations yet",
    };

    return (
        <div
            onClick={onClick}
            className="
                rounded-2xl
                p-4
                flex
                gap-4
                cursor-pointer
                transition-all
                duration-200
                hover:bg-slate-100
                dark:hover:bg-slate-800/50
                border
                border-transparent
                hover:border-slate-200
                dark:hover:border-slate-700
            "
        >
            <div className="shrink-0">
                <div
                    className="
                        rounded-full
                        flex
                        justify-center
                        items-center
                        bg-slate-100
                        dark:bg-slate-800
                        text-slate-700
                        dark:text-slate-300
                        border
                        border-slate-200
                        dark:border-slate-700
                        w-14
                        h-14
                        text-sm
                        font-semibold
                    "
                >
                    {user.photoName}
                </div>
            </div>

            <div className="overflow-hidden flex flex-col justify-center gap-1">
                <h3 className="font-semibold text-slate-900 dark:text-slate-100 truncate">
                    {user.userName}
                </h3>

                <p className="text-sm text-slate-500 dark:text-slate-400 truncate leading-relaxed">
                    {user.message}
                </p>
            </div>
        </div>
    );
}

export default Messages;