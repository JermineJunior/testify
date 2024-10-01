<template>
    <!-- ========== MAIN CONTENT ========== -->
    <!-- Breadcrumb -->
    <div
        class="sticky top-0 inset-x-0 z-20 bg-white border-y px-4 sm:px-6 lg:px-8 lg:hidden dark:bg-neutral-800 dark:border-neutral-700"
    >
        <div class="flex items-center py-2">
            <!-- Navigation Toggle -->
            <button
                type="button"
                class="size-8 flex justify-center items-center gap-x-2 border border-gray-200 text-gray-800 hover:text-gray-500 rounded-lg focus:outline-none focus:text-gray-500 disabled:opacity-50 disabled:pointer-events-none dark:border-neutral-700 dark:text-neutral-200 dark:hover:text-neutral-500 dark:focus:text-neutral-500"
                aria-haspopup="dialog"
                aria-expanded="false"
                aria-controls="hs-application-sidebar"
                aria-label="Toggle navigation"
                data-hs-overlay="#hs-application-sidebar"
            >
                <span class="sr-only">Toggle Navigation</span>
                <svg
                    class="shrink-0 size-4"
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    stroke-width="2"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                >
                    <rect width="18" height="18" x="3" y="3" rx="2" />
                    <path d="M15 3v18" />
                    <path d="m8 9 3 3-3 3" />
                </svg>
            </button>
            <!-- End Navigation Toggle -->

            <!-- Breadcrumb -->
            <ol class="ms-3 flex items-center whitespace-nowrap">
                <li
                    class="flex items-center text-sm text-gray-800 dark:text-neutral-400"
                >
                    Testify Layout
                    <svg
                        class="shrink-0 mx-3 overflow-visible size-2.5 text-gray-400 dark:text-neutral-500"
                        width="16"
                        height="16"
                        viewBox="0 0 16 16"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                    >
                        <path
                            d="M5 1L10.6869 7.16086C10.8637 7.35239 10.8637 7.64761 10.6869 7.83914L5 14"
                            stroke="currentColor"
                            stroke-width="2"
                            stroke-linecap="round"
                        />
                    </svg>
                </li>
                <li
                    class="text-sm font-semibold text-gray-800 truncate dark:text-neutral-400"
                    aria-current="page"
                >
                    Main
                </li>
            </ol>
            <!-- End Breadcrumb -->
        </div>
    </div>
    <!-- End Breadcrumb -->

    <!-- Sidebar -->
    <SideBar />
    <!-- End Sidebar -->

    <!-- Content -->
    <div
        class="w-full h-screen pt-12 px-4 sm:px-6 md:px-8 lg:ps-72 bg-gray-700 text-gray-100"
    >
        <!-- your content goes here ... -->
        <div class="container my-10">
            <h2 class="text-3xl font-medium">Dashboard</h2>
            <div
                class="p-6 mt-6 border border-gray-200 rounded-lg dark:border-neutral-700"
            
                <h3 class="mb-1 text-gray-200">Upload Code</h3>
                <div class="flex items-end  space-x-4">
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
                    </div>
                    <!-- import button -->
                    <button
                        class="flex items-center mt-8 px-4 py-2 text-sm border border-indigo-500 rounded-md font-medium transition-colors duration-200 sm:text-base sm:px-6 :hover:bg-gray-800 text-gray-300 gap-x-3 hover:bg-gray-100 hover:text-gray-800"
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
                <!-- upload sample -->
                <div class="pt-4">
                    <p class="mt-2 text-xs tracking-wide text-gray-200">
                        Import Simple Code Example
                    </p>
                    <input
                        type="file"
                        class="block w-full px-3 py-2 mt-2 text-sm text-gray-600 bg-white border border-gray-200 rounded-lg file:bg-gray-200 file:text-gray-700 file:text-sm file:px-4 file:py-1 file:border-none file:rounded-full dark:file:bg-gray-800 dark:file:text-gray-200 dark:text-gray-300 placeholder-gray-400/70 dark:placeholder-gray-500 focus:border-blue-400 focus:outline-none focus:ring focus:ring-blue-300 focus:ring-opacity-40 dark:border-gray-600 dark:bg-gray-900 dark:focus:border-blue-300"
                    />
                </div>
            </div>
        </div>
    </div>
    <!-- End Content -->
    <!-- ========== END MAIN CONTENT ========== -->
</template>
<script setup>
import SideBar from "@/components/SideBar.vue";
</script>
