import React, { useState } from "react";
import Layout from "@/components/layout";

export default function AddPage() {
    const [type, setType] = useState("");
    const [title, setTitle] = useState("");
    const [description, setDescription] = useState("");
    const [features, setFeatures] = useState("");
    const [uploadedFiles, setUploadedFiles] = useState([]);

    const handleTypeChange = (event) => {
        setType(event.target.value);
    }

    const handleTitleChange = (event) => {
        setTitle(event.target.value);
    };

    const handleDescriptionChange = (event) => {
        setDescription(event.target.value);
    };

    const handleFeaturesChange = (event) => {
        setFeatures(event.target.value);
    };

    const handleFileUpload = (event) => {
        const newFiles = [...uploadedFiles, event.target.files[0]];
        setUploadedFiles(newFiles);
    };

    return (
        <Layout>
            <div className="flex items-center justify-center p-12">
                <div className="mx-auto w-full max-w-[550px] bg-white">
                    <form
                        className="py-32 px-3"
                        action="https://formbold.com/s/FORM_ID"
                        method="POST"
                    >   
                        <div className="mb-5">
                            <label
                                htmlFor="type"
                                className="mb-3 block text-base font-medium text-[#07074D]"
                            >
                                Type
                            </label>
                            <select
                                name="type"
                                value={type}
                                onChange={handleTypeChange}
                                className="bg-orange-50 border border-orange-300 text-orange-900 text-sm rounded-lg focus:ring-orange-500 focus:border-orange-500 block w-full p-2.5 dark:bg-orange-700 dark:border-orange-600 dark:placeholder-orange-400 dark:text-white dark:focus:ring-orange-500 dark:focus:border-orange-500"
                            >
                                <option value="">Select Apartment type</option>
                                <option value="1 Bedroom Apartment">1 Bedroom Apartment</option>
                                <option value="Studio Apartment">Studio Apartment</option>
                                <option value="2 Bedroom Apartment">2 Bedroom Apartment</option>
                                <option value="Loft Apartment">Loft Apartment</option>
                                <option value="3 Bedroom Apartment">3 Bedroom Apartment</option>
                                <option value="Penthouse Apartment">Penthouse Apartment</option>
                                <option value="Serviced Apartment">Serviced Apartment</option>
                                <option value="Duplex Apartment">Duplex Apartment</option>
                                <option value="Garden Apartment">Garden Apartment</option>
                                <option value="Vintage Apartment">Vintage Apartment</option>
                                <option value="Beachfront Apartment">Beachfront Apartment</option>
                            </select>
                        </div>

                        <div className="mb-5">
                            <label
                                htmlFor="title"
                                className="mb-3 block text-base font-medium text-[#07074D]"
                            >
                                Title
                            </label>
                            <input
                                type="text"
                                name="text"
                                placeholder="Cozy 1 Bedroom Apartment"
                                value={title}
                                onChange={handleTitleChange}
                                className="w-full rounded-md border border-[#e0e0e0] bg-white py-3 px-3 text-base font-medium text-[#6B7280] outline-none focus:border-orange-600 focus:shadow-md"
                            />
                        </div>

                        <div className="mb-5">
                            <label
                                htmlFor="text"
                                className="mb-3 block text-base font-medium text-[#07074D]"
                            >
                                Description
                            </label>
                            <input
                                type="text"
                                name="description"
                                placeholder="Experience contemporary living in this modern exquisite apartment"
                                value={description}
                                onChange={handleDescriptionChange}
                                className="w-full rounded-md border border-[#e0e0e0] bg-white py-3 px-3 text-base font-medium text-[#6B7280] outline-none focus:border-orange-600 focus:shadow-md"
                            />
                        </div>

                        <div className="mb-6 pt-4">
                            <label className="mb-5 block text-xl font-semibold text-[#07074D]">
                                Upload Property
                            </label>

                            <div class="mb-8">
                                <input type="file"
                                    name="file"
                                    id="file"
                                    className="sr-only"
                                    onChange={handleFileUpload} 
                                    class="sr-only" />
                                <label
                                    for="file"
                                    class="relative flex min-h-[200px] items-center justify-center rounded-md border border-dashed border-[#e0e0e0] p-12 text-center"
                                >
                                    <div>
                                    <span class="mb-2 block text-xl font-semibold text-[#07074D]">
                                        Drop files here
                                    </span>
                                    <span class="mb-2 block text-base font-medium text-[#6B7280]">
                                        Or
                                    </span>
                                    <span class="inline-flex rounded border border-[#e0e0e0] py-2 px-3 text-base font-medium text-[#07074D]">
                                        Browse
                                    </span>
                                    </div>
                                </label>
                            </div>

                            {uploadedFiles.map((file, index) => (
                                <div key={index} className="mb-5 rounded-md bg-[#F5F7FB] py-4 px-3">
                                    <div className="flex items-center justify-between">
                                        <span className="truncate pr-3 text-base font-medium text-[#07074D]">
                                            {file.name}
                                        </span>
                                        <button className="text-[#07074D]">
                                        <svg
                                            width="10"
                                            height="10"
                                            viewBox="0 0 10 10"
                                            fill="none"
                                            xmlns="http://www.w3.org/2000/svg"
                                        >
                                            <path
                                            fill-rule="evenodd"
                                            clip-rule="evenodd"
                                            d="M0.279337 0.279338C0.651787 -0.0931121 1.25565 -0.0931121 1.6281 0.279338L9.72066 8.3719C10.0931 8.74435 10.0931 9.34821 9.72066 9.72066C9.34821 10.0931 8.74435 10.0931 8.3719 9.72066L0.279337 1.6281C-0.0931125 1.25565 -0.0931125 0.651788 0.279337 0.279338Z"
                                            fill="currentColor"
                                            />
                                            <path
                                            fill-rule="evenodd"
                                            clip-rule="evenodd"
                                            d="M0.279337 9.72066C-0.0931125 9.34821 -0.0931125 8.74435 0.279337 8.3719L8.3719 0.279338C8.74435 -0.0931127 9.34821 -0.0931123 9.72066 0.279338C10.0931 0.651787 10.0931 1.25565 9.72066 1.6281L1.6281 9.72066C1.25565 10.0931 0.651787 10.0931 0.279337 9.72066Z"
                                            fill="currentColor"
                                            />
                                        </svg>
                                        </button>
                                    </div>
                                <div class="relative mt-5 h-[6px] w-full rounded-lg bg-[#E2E5EF]">
                                    <div class="absolute left-0 right-0 h-full w-[75%] rounded-lg bg-orange-600"></div>
                                </div>
                            </div>
                            ))}

                        <div className="mb-5">
                            <label
                                htmlFor="features"
                                className="mb-3 block text-base font-medium text-[#07074D]"
                            >
                                Features
                            </label>
                            <input
                                type="text"
                                name="features"
                                placeholder="Spacious garden patio with seating and dining areas. Sunlit living room with garden views."
                                value={features}
                                onChange={handleFeaturesChange}
                                className="w-full rounded-md border border-[#e0e0e0] bg-white py-3 px-3 text-base font-medium text-[#6B7280] outline-none focus:border-orange-600 focus:shadow-md"
                            />
                        </div>

                            <div>
                                <button className="hover:shadow-form w-full rounded-md bg-orange-600  py-3 px-3 text-center text-base font-semibold text-white outline-none">
                                    Add property
                                </button>
                            </div>
                        </div>
                    </form>
                </div>
            </div>
        </Layout>
    );
}
