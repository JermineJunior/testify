<template>
<div class="container my-10">
            <h2 class="text-3xl font-medium">Dashboard</h2>
            <div
                class="p-6 mt-6 border border-gray-200 rounded-lg dark:border-neutral-700">

                <h3 class="mb-1 text-gray-200">Upload Code</h3>
                <div class="flex  justify-between  space-x-4">
                    <!-- File Input -->
                    <div>
                        <label
                            for="dropzone-file"
                            class="flex flex-col items-center w-full max-w-lg p-4 mx-auto mt-2 text-center bg-white border-2 border-gray-300 border-dashed cursor-pointer dark:bg-gray-900 dark:border-gray-700 rounded-xl"
                        >
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                fill="none"
                                viewBox="0 0 24 24"
                                stroke-width="1.5"
                                stroke="currentColor"
                                class="w-4 h-4 text-gray-500 dark:text-gray-400"
                            >
                                <path
                                    stroke-linecap="round"
                                    stroke-linejoin="round"
                                    d="M12 16.5V9.75m0 0l3 3m-3-3l-3 3M6.75 19.5a4.5 4.5 0 01-1.41-8.775 5.25 5.25 0 0110.233-2.33 3 3 0 013.758 3.848A3.752 3.752 0 0118 19.5H6.75z"
                                />
                            </svg>

                            <h2
                                class="mt-1 font-medium tracking-wide text-gray-700 dark:text-gray-200"
                            >
                                Upload File
                            </h2>

                            <p
                                class="mt-2 text-xs tracking-wide text-gray-500 dark:text-gray-400"
                            >
                                Upload or darg & drop your file.
                            </p>

                            <input
                                id="dropzone-file"
                                type="file"
                                class="hidden"
                            />
                        </label>
                            <!-- import button -->
                    <button
                        class="flex items-center justify-center w-full uppercase  mt-8 px-4 py-2 text-sm border border-indigo-500 rounded-md font-medium transition-colors duration-200 sm:text-base sm:px-6 :hover:bg-gray-800 text-gray-300 gap-x-3 hover:bg-gray-100 hover:text-gray-800"
                    >
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            fill="none"
                            viewBox="0 0 24 24"
                            stroke-width="1.5"
                            stroke="currentColor"
                            class="w-5 h-5 sm:w-6 sm:h-6"
                        >
                            <path
                                stroke-linecap="round"
                                stroke-linejoin="round"
                                d="M12 16.5V9.75m0 0l3 3m-3-3l-3 3M6.75 19.5a4.5 4.5 0 01-1.41-8.775 5.25 5.25 0 0110.233-2.33 3 3 0 013.758 3.848A3.752 3.752 0 0118 19.5H6.75z"
                            />
                        </svg>

                        <span>Upload</span>
                    </button>
                    </div>
                    <div class="my-16">
                       <p class="text-3xl font-bold">OR</p>
                    </div>
                <!-- upload sample -->
                <div class="pt-4">
                    <p class="mt-2 text-xs tracking-wide text-gray-200">
                        Import Simple Code Example
                    </p>
                    <input
                        type="file"
                        class="block max-w-4xl px-3 py-2 mt-2 text-sm text-gray-600 bg-white border border-gray-200 rounded-lg file:bg-gray-200 file:text-gray-700 file:text-sm file:px-4 file:py-1 file:border-none file:rounded-full dark:file:bg-gray-800 dark:file:text-gray-200 dark:text-gray-300 placeholder-gray-400/70 dark:placeholder-gray-500 focus:border-blue-400 focus:outline-none focus:ring focus:ring-blue-300 focus:ring-opacity-40 dark:border-gray-600 dark:bg-gray-900 dark:focus:border-blue-300"
                    />
                </div>
              </div>
            </div>
        </div>
</template>
<script setup>


</script>