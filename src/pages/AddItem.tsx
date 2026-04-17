import { useState, useRef } from "react";
import { IoMdAdd, IoMdClose, IoMdImages } from "react-icons/io";
import { Button } from "@/components/ui/button";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

function AddItem() {
    const [formData, setFormData] = useState({
        title: "",
        description: "",
        category: "",
        condition: "",
        location: "",
        swapPreferences: ""
    });
    const [images, setImages] = useState<File[]>([]);
    const [imagePreviews, setImagePreviews] = useState<string[]>([]);
    const fileInputRef = useRef<HTMLInputElement>(null);

    const categories = [
        "Electronics", "Books", "Furniture", "Clothing", "Sports", "Tools",
        "Gaming", "Cameras", "Music", "Photography", "Others"
    ];

    const conditions = ["New", "Like New", "Good", "Fair", "Poor"];

    const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
        const { name, value } = e.target;
        setFormData(prev => ({ ...prev, [name]: value }));
    };

    const handleDrop = (e: React.DragEvent<HTMLDivElement>) => {
        e.preventDefault();
        const files = Array.from(e.dataTransfer.files);
        handleFiles(files);
    };

    const handleDragOver = (e: React.DragEvent<HTMLDivElement>) => {
        e.preventDefault();
    };

    const handleClick = () => {
        fileInputRef.current?.click();
    };

    const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const files = Array.from(e.target.files || []);
        handleFiles(files);
    };

    const handleFiles = (files: File[]) => {
        const imageFiles = files.filter(file => file.type.startsWith('image/'));
        if (imageFiles.length + images.length > 5) {
            alert("Maximum 5 images allowed");
            return;
        }

        setImages(prev => [...prev, ...imageFiles]);

        // Create previews
        imageFiles.forEach(file => {
            const reader = new FileReader();
            reader.onload = (e) => {
                setImagePreviews(prev => [...prev, e.target?.result as string]);
            };
            reader.readAsDataURL(file);
        });
    };

    const removeImage = (index: number) => {
        setImages(prev => prev.filter((_, i) => i !== index));
        setImagePreviews(prev => prev.filter((_, i) => i !== index));
    };

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        // Here you would typically send the data to your backend
        console.log("Form Data:", formData);
        console.log("Images:", images);

        toast.success("Added successfully");

        // Reset form
        setFormData({
            title: "",
            description: "",
            category: "",
            condition: "",
            location: "",
            swapPreferences: ""
        });
        setImages([]);
        setImagePreviews([]);
    };

    return (
        <div className="min-h-screen bg-slate-50 dark:bg-slate-950 py-8 px-4 transition-colors">
            <div className="max-w-2xl mx-auto">
                <div className="mb-8">
                    <h1 className="text-3xl font-bold text-slate-900 dark:text-slate-100 mb-2">Add New Item</h1>
                    <p className="text-slate-600 dark:text-slate-400">List your item for swapping with the community</p>
                </div>

                <form onSubmit={handleSubmit} className="space-y-6">
                    {/* Title */}
                    <div>
                        <label className="block text-sm font-medium text-slate-700 dark:text-slate-300 mb-2">
                            Title *
                        </label>
                        <input
                            type="text"
                            name="title"
                            value={formData.title}
                            onChange={handleInputChange}
                            required
                            className="w-full px-4 py-3 rounded-lg bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-700 focus:outline-none focus:ring-2 focus:ring-slate-900 dark:focus:ring-slate-100 transition-all text-slate-900 dark:text-slate-100 placeholder-slate-400 dark:placeholder-slate-500"
                            placeholder="e.g., Professional Camera Lens"
                        />
                    </div>

                    {/* Description */}
                    <div>
                        <label className="block text-sm font-medium text-slate-700 dark:text-slate-300 mb-2">
                            Description *
                        </label>
                        <textarea
                            name="description"
                            value={formData.description}
                            onChange={handleInputChange}
                            required
                            rows={4}
                            className="w-full px-4 py-3 rounded-lg bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-700 focus:outline-none focus:ring-2 focus:ring-slate-900 dark:focus:ring-slate-100 transition-all text-slate-900 dark:text-slate-100 placeholder-slate-400 dark:placeholder-slate-500 resize-none"
                            placeholder="Describe your item in detail, including condition, features, and what you're looking to swap for..."
                        />
                    </div>

                    {/* Category and Condition */}
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        <div>
                            <label className="block text-sm font-medium text-slate-700 dark:text-slate-300 mb-2">
                                Category *
                            </label>
                            <select
                                name="category"
                                value={formData.category}
                                onChange={handleInputChange}
                                required
                                className="w-full px-4 py-3 rounded-lg bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-700 focus:outline-none focus:ring-2 focus:ring-slate-900 dark:focus:ring-slate-100 transition-all text-slate-900 dark:text-slate-100"
                            >
                                <option value="">Select a category</option>
                                {categories.map(cat => (
                                    <option key={cat} value={cat.toLowerCase()}>{cat}</option>
                                ))}
                            </select>
                        </div>

                        <div>
                            <label className="block text-sm font-medium text-slate-700 dark:text-slate-300 mb-2">
                                Condition *
                            </label>
                            <select
                                name="condition"
                                value={formData.condition}
                                onChange={handleInputChange}
                                required
                                className="w-full px-4 py-3 rounded-lg bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-700 focus:outline-none focus:ring-2 focus:ring-slate-900 dark:focus:ring-slate-100 transition-all text-slate-900 dark:text-slate-100"
                            >
                                <option value="">Select condition</option>
                                {conditions.map(cond => (
                                    <option key={cond} value={cond.toLowerCase()}>{cond}</option>
                                ))}
                            </select>
                        </div>
                    </div>

                    {/* Location */}
                    <div>
                        <label className="block text-sm font-medium text-slate-700 dark:text-slate-300 mb-2">
                            Location
                        </label>
                        <input
                            type="text"
                            name="location"
                            value={formData.location}
                            onChange={handleInputChange}
                            className="w-full px-4 py-3 rounded-lg bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-700 focus:outline-none focus:ring-2 focus:ring-slate-900 dark:focus:ring-slate-100 transition-all text-slate-900 dark:text-slate-100 placeholder-slate-400 dark:placeholder-slate-500"
                            placeholder="e.g., Cairo, Egypt"
                        />
                    </div>

                    {/* Swap Preferences */}
                    <div>
                        <label className="block text-sm font-medium text-slate-700 dark:text-slate-300 mb-2">
                            Swap Preferences
                        </label>
                        <textarea
                            name="swapPreferences"
                            value={formData.swapPreferences}
                            onChange={handleInputChange}
                            rows={3}
                            className="w-full px-4 py-3 rounded-lg bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-700 focus:outline-none focus:ring-2 focus:ring-slate-900 dark:focus:ring-slate-100 transition-all text-slate-900 dark:text-slate-100 placeholder-slate-400 dark:placeholder-slate-500 resize-none"
                            placeholder="What are you looking to swap for? Specific items, categories, or general preferences..."
                        />
                    </div>

                    {/* Image Upload */}
                    <div>
                        <label className="block text-sm font-medium text-slate-700 dark:text-slate-300 mb-2">
                            Images ({images.length}/5)
                        </label>

                        {/* Image Previews */}
                        {imagePreviews.length > 0 && (
                            <div className="grid grid-cols-2 md:grid-cols-3 gap-4 mb-4">
                                {imagePreviews.map((preview, index) => (
                                    <div key={index} className="relative group">
                                        <img
                                            src={preview}
                                            alt={`Preview ${index + 1}`}
                                            className="w-full h-32 object-cover rounded-lg border border-slate-200 dark:border-slate-700"
                                        />
                                        <button
                                            type="button"
                                            onClick={() => removeImage(index)}
                                            className="absolute top-2 right-2 bg-red-500 text-white rounded-full p-1 opacity-0 group-hover:opacity-100 transition-opacity"
                                        >
                                            <IoMdClose size={16} />
                                        </button>
                                    </div>
                                ))}
                            </div>
                        )}

                        {/* Upload Area */}
                        {images.length < 5 && (
                            <div
                                onDrop={handleDrop}
                                onDragOver={handleDragOver}
                                onClick={handleClick}
                                className="border-2 border-dashed border-slate-300 dark:border-slate-600 rounded-lg p-8 text-center cursor-pointer hover:border-slate-400 dark:hover:border-slate-500 transition-colors bg-slate-50 dark:bg-slate-900/50"
                            >
                                <IoMdImages className="mx-auto text-slate-400 dark:text-slate-500 mb-2" size={48} />
                                <p className="text-slate-600 dark:text-slate-400 mb-1">
                                    Drag & drop images here or click to browse
                                </p>
                                <p className="text-sm text-slate-500 dark:text-slate-500">
                                    PNG, JPG up to 10MB each
                                </p>
                            </div>
                        )}

                        <input
                            type="file"
                            accept="image/*"
                            multiple
                            ref={fileInputRef}
                            onChange={handleFileChange}
                            className="hidden"
                        />
                    </div>

                    {/* Submit Button */}
                    <div className="flex gap-4 pt-4">
                        <Button
                            type="submit"
                            className="flex-1 bg-slate-900 hover:bg-slate-800 dark:bg-slate-100 dark:hover:bg-slate-200 text-white dark:text-slate-900 py-3 text-lg font-semibold"
                        >
                            <IoMdAdd className="mr-2" />
                            List Item
                        </Button>
                        <Button
                            type="button"
                            variant="outline"
                            className="px-8 py-3"
                            onClick={() => window.history.back()}
                        >
                            Cancel
                        </Button>
                    </div>
                    <ToastContainer position="top-center" />
                </form>
            </div>
        </div>
    );
}

export default AddItem;