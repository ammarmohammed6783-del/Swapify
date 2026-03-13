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
        <div className="rounded-lg py-3 hover:bg-gray-100 px-5 flex gap-3">
            <div className="w-13">
                <div className="rounded-full flex justify-center items-center bg-gray-300 w-10 h-10 text-sm">{element.photoName}</div>
            </div>
            <div className="overflow-auto">
                <h3>{element.userName}</h3>
                <p className="text-sm text-gray-500">{element.message}</p>
            </div>
        </div>
    )
}

export default User