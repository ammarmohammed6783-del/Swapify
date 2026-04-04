import { useRef } from "react";

function AddItem() {
    const fileInputRef = useRef<HTMLInputElement>(null);

    const handleDrop = (e: React.DragEvent<HTMLDivElement>) => {
        e.preventDefault();

        const file = e.dataTransfer.files[0];
        console.log(file);
    };

    const handleDragOver = (e: React.DragEvent<HTMLDivElement>) => {
        e.preventDefault();
    };

    const handleClick = () => {
        fileInputRef.current?.click();
    };

    const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const file = e.target.files?.[0];
        console.log(file);
    };

    return (
        <div className="w-full h-full flex justify-center items-center">
            <form className="border rounded-md p-10 flex flex-col gap-2">
                <input
                    type="text"
                    placeholder="Enter the title"
                    className="rounded-md border-2 px-2 py-1"
                />

                <input
                    type="text"
                    placeholder="Enter the description"
                    className="rounded-md border-2 px-2 py-1"
                />

                <div className="flex gap-2">
                    <input
                        type="text"
                        placeholder="Enter the category"
                        className="rounded-md border-2 px-2 py-1"
                    />
                    <select className="border rounded-md px-2 py-1">
                        <option value="">Choose condition</option>
                        <option value="new">New</option>
                        <option value="like-new">Like New</option>
                        <option value="good">Good</option>
                        <option value="fair">Fair</option>
                        <option value="used">Used</option>
                        <option value="old">Old</option>
                    </select>
                </div>

                <div
                    onDrop={handleDrop}
                    onDragOver={handleDragOver}
                    onClick={handleClick}
                    className="border-2 border-dashed p-6 text-center rounded-xl cursor-pointer"
                >
                    Drag image here or click
                </div>

                <input
                    type="file"
                    accept="image/*"
                    ref={fileInputRef}
                    onChange={handleFileChange}
                    className="hidden"
                />
            </form>
        </div>
    );
}

export default AddItem;