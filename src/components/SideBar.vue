<script setup>
import { RouterLink } from "vue-router";
</script>

<template>
    <div
        id="hs-application-sidebar"
        class="hs-overlay [--auto-close:lg] hs-overlay-open:translate-x-0 -translate-x-full transition-all duration-300 transform w-[260px] h-full hidden fixed inset-y-0 start-0 z-[60] bg-gray-900 lg:block lg:translate-x-0 lg:end-auto lg:bottom-0 dark:bg-neutral-800 dark:border-neutral-700"
        role="dialog"
        tabindex="-1"
        aria-label="Sidebar"
    >
        <div class="relative flex flex-col h-full max-h-full">
            <div class="px-8 py-12">
                <!-- Logo -->
                <a href="#" class="flex items-center justify-center">
                    <svg
                        class="size-20"
                        version="1.1"
                        id="Layer_1"
                        xmlns="http://www.w3.org/2000/svg"
                        xmlns:xlink="http://www.w3.org/1999/xlink"
                        viewBox="0 0 506 506"
                        xml:space="preserve"
                        fill="#000000"
                    >
                        <g id="SVGRepo_bgCarrier" stroke-width="0"></g>
                        <g
                            id="SVGRepo_tracerCarrier"
                            stroke-linecap="round"
                            stroke-linejoin="round"
                        ></g>
                        <g id="SVGRepo_iconCarrier">
                            <circle
                                style="fill: #212c35"
                                cx="253"
                                cy="253"
                                r="253"
                            ></circle>
                            <path
                                style="fill: #e6e9ee"
                                d="M193.6,205.9v172.4c0,32.8,26.7,59.5,59.5,59.5s59.5-26.7,59.5-59.5V205.9H193.6z"
                            ></path>
                            <g>
                                <rect
                                    x="299.5"
                                    y="221.1"
                                    style="fill: #acb3ba"
                                    width="13.1"
                                    height="7.8"
                                ></rect>
                                <rect
                                    x="299.5"
                                    y="240.4"
                                    style="fill: #acb3ba"
                                    width="13.1"
                                    height="7.8"
                                ></rect>
                                <rect
                                    x="299.5"
                                    y="259.6"
                                    style="fill: #acb3ba"
                                    width="13.1"
                                    height="7.8"
                                ></rect>
                                <rect
                                    x="299.5"
                                    y="278.8"
                                    style="fill: #acb3ba"
                                    width="13.1"
                                    height="7.8"
                                ></rect>
                                <rect
                                    x="299.5"
                                    y="298.1"
                                    style="fill: #acb3ba"
                                    width="13.1"
                                    height="7.8"
                                ></rect>
                                <rect
                                    x="299.5"
                                    y="317.3"
                                    style="fill: #acb3ba"
                                    width="13.1"
                                    height="7.8"
                                ></rect>
                                <rect
                                    x="299.5"
                                    y="336.6"
                                    style="fill: #acb3ba"
                                    width="13.1"
                                    height="7.8"
                                ></rect>
                                <rect
                                    x="299.5"
                                    y="355.8"
                                    style="fill: #acb3ba"
                                    width="13.1"
                                    height="7.8"
                                ></rect>
                                <rect
                                    x="299.5"
                                    y="375"
                                    style="fill: #acb3ba"
                                    width="13.1"
                                    height="7.8"
                                ></rect>
                            </g>
                            <g>
                                <path
                                    style="fill: #54c0eb"
                                    d="M222.5,91.3c-13.4-8.2-30.3-8.9-47.6-2l-1.7,0.7l0.2,1.8c1.6,18.5,9.9,33.3,23.3,41.5 c7.3,4.5,15.6,6.7,24.5,6.7c7.4,0,15.2-1.6,23.1-4.8l1.7-0.7l-0.2-1.8C244.2,114.3,235.9,99.6,222.5,91.3z"
                                ></path>
                                <path
                                    style="fill: #54c0eb"
                                    d="M330,62.1c-20.4-8.3-40.4-7.4-56.3,2.3s-25.7,27.2-27.5,49.1l-0.2,2.1l2,0.8 c9.3,3.8,18.5,5.6,27.3,5.6c10.5,0,20.3-2.7,28.9-8c15.9-9.7,25.7-27.2,27.5-49.1l0.2-2.1L330,62.1z"
                                ></path>
                                <path
                                    style="fill: #54c0eb"
                                    d="M226.7,153.5c-11-6.8-24.9-7.3-39-1.6l-1.7,0.7l0.2,1.8c1.3,15.2,8.1,27.3,19.1,34.1 c6,3.7,12.8,5.5,20.1,5.5c6.1,0,12.5-1.3,18.9-3.9l1.7-0.7l-0.2-1.8C244.5,172.3,237.7,160.2,226.7,153.5z"
                                ></path>
                                <path
                                    style="fill: #54c0eb"
                                    d="M278,138.3c-10.7,6.6-17.3,18.3-18.5,33l-0.2,1.8l1.7,0.7c6.2,2.5,12.4,3.8,18.3,3.8 c7,0,13.7-1.8,19.5-5.4c10.7-6.6,17.3-18.3,18.5-33l0.2-1.8l-1.7-0.7C302.1,131.2,288.7,131.8,278,138.3z"
                                ></path>
                                <rect
                                    x="246"
                                    y="113.6"
                                    style="fill: #54c0eb"
                                    width="14"
                                    height="152"
                                ></rect>
                            </g>
                            <path
                                style="fill: #6838d6"
                                d="M215.3,265.6v112.6c0,20.8,16.9,37.7,37.7,37.7s37.7-16.9,37.7-37.7V265.6H215.3z"
                            ></path>
                        </g>
                    </svg>
                </a>
                <!-- End Logo -->
            </div>

            <!-- Content -->
            <div
                class="h-full overflow-y-auto [&::-webkit-scrollbar]:w-2 [&::-webkit-scrollbar-thumb]:rounded-full [&::-webkit-scrollbar-track]:bg-gray-100 [&::-webkit-scrollbar-thumb]:bg-gray-300 dark:[&::-webkit-scrollbar-track]:bg-neutral-700 dark:[&::-webkit-scrollbar-thumb]:bg-neutral-500"
            >
                <nav
                    class="hs-accordion-group p-3 w-full flex flex-col flex-wrap"
                    data-hs-accordion-always-open
                >
                    <ul class="flex flex-col justify-between mt-6 space-y-1">
                        <li>
                            <RouterLink
                                class="flex items-center gap-x-3.5 py-2 px-2.5 bg-white/10 text-sm text-white rounded-lg hover:bg-white/10 focus:outline-none focus:bg-white/10 dark:bg-neutral-700 dark:text-white"
                                to="/"
                            >
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
                                    <path
                                        d="m3 9 9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"
                                    />
                                    <polyline points="9 22 9 12 15 12 15 22" />
                                </svg>
                                Dashboard
                            </RouterLink>
                        </li>

                        <li>
                            <RouterLink
                                class="w-full flex items-center gap-x-3.5 py-2 px-2.5 text-sm text-white rounded-lg hover:bg-white/10 dark:hover:bg-neutral-700 dark:text-neutral-400 dark:hover:text-neutral-300"
                                to="/editor"
                            >
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    fill="none"
                                    viewBox="0 0 24 24"
                                    stroke-width="1.5"
                                    stroke="currentColor"
                                    class="size-5"
                                >
                                    <path
                                        stroke-linecap="round"
                                        stroke-linejoin="round"
                                        d="m16.862 4.487 1.687-1.688a1.875 1.875 0 1 1 2.652 2.652L10.582 16.07a4.5 4.5 0 0 1-1.897 1.13L6 18l.8-2.685a4.5 4.5 0 0 1 1.13-1.897l8.932-8.931Zm0 0L19.5 7.125M18 14v4.75A2.25 2.25 0 0 1 15.75 21H5.25A2.25 2.25 0 0 1 3 18.75V8.25A2.25 2.25 0 0 1 5.25 6H10"
                                    />
                                </svg>

                                Editor
                            </RouterLink>
                        </li>
                        <li>
                            <RouterLink
                                class="w-full flex items-center gap-x-3.5 py-2 px-2.5 text-sm text-white rounded-lg hover:bg-white/10 dark:hover:bg-neutral-900 dark:text-neutral-400 dark:hover:text-neutral-300"
                                to="/tasks"
                            >
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    fill="none"
                                    viewBox="0 0 24 24"
                                    stroke-width="1.5"
                                    stroke="currentColor"
                                    class="size-5 shrink-0"
                                >
                                    <path
                                        stroke-linecap="round"
                                        stroke-linejoin="round"
                                        d="M15.75 15.75V18m-7.5-6.75h.008v.008H8.25v-.008Zm0 2.25h.008v.008H8.25V13.5Zm0 2.25h.008v.008H8.25v-.008Zm0 2.25h.008v.008H8.25V18Zm2.498-6.75h.007v.008h-.007v-.008Zm0 2.25h.007v.008h-.007V13.5Zm0 2.25h.007v.008h-.007v-.008Zm0 2.25h.007v.008h-.007V18Zm2.504-6.75h.008v.008h-.008v-.008Zm0 2.25h.008v.008h-.008V13.5Zm0 2.25h.008v.008h-.008v-.008Zm0 2.25h.008v.008h-.008V18Zm2.498-6.75h.008v.008h-.008v-.008Zm0 2.25h.008v.008h-.008V13.5ZM8.25 6h7.5v2.25h-7.5V6ZM12 2.25c-1.892 0-3.758.11-5.593.322C5.307 2.7 4.5 3.65 4.5 4.757V19.5a2.25 2.25 0 0 0 2.25 2.25h10.5a2.25 2.25 0 0 0 2.25-2.25V4.757c0-1.108-.806-2.057-1.907-2.185A48.507 48.507 0 0 0 12 2.25Z"
                                    />
                                </svg>

                                Task Managment
                            </RouterLink>
                        </li>
                        <li>
                            <RouterLink
                                class="w-full flex items-center gap-x-3.5 py-2 px-2.5 text-sm text-white rounded-lg hover:bg-white/10 dark:hover:bg-neutral-900 dark:text-neutral-400 dark:hover:text-neutral-300"
                                to="/run"
                            >
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    fill="none"
                                    viewBox="0 0 24 24"
                                    stroke-width="1.5"
                                    stroke="currentColor"
                                    class="size-5"
                                >
                                    <path
                                        stroke-linecap="round"
                                        stroke-linejoin="round"
                                        d="M15.59 14.37a6 6 0 0 1-5.84 7.38v-4.8m5.84-2.58a14.98 14.98 0 0 0 6.16-12.12A14.98 14.98 0 0 0 9.631 8.41m5.96 5.96a14.926 14.926 0 0 1-5.841 2.58m-.119-8.54a6 6 0 0 0-7.381 5.84h4.8m2.581-5.84a14.927 14.927 0 0 0-2.58 5.84m2.699 2.7c-.103.021-.207.041-.311.06a15.09 15.09 0 0 1-2.448-2.448 14.9 14.9 0 0 1 .06-.312m-2.24 2.39a4.493 4.493 0 0 0-1.757 4.306 4.493 4.493 0 0 0 4.306-1.758M16.5 9a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0Z"
                                    />
                                </svg>

                                Task Run
                            </RouterLink>
                        </li>
                        <li>
                            <RouterLink
                                class="w-full flex items-center gap-x-3.5 py-2 px-2.5 text-sm text-white rounded-lg hover:bg-white/10 dark:hover:bg-neutral-900 dark:text-neutral-400 dark:hover:text-neutral-300"
                                to="/results"
                            >
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    fill="none"
                                    viewBox="0 0 24 24"
                                    stroke-width="1.5"
                                    stroke="currentColor"
                                    class="size-5"
                                >
                                    <path
                                        stroke-linecap="round"
                                        stroke-linejoin="round"
                                        d="M3.75 3v11.25A2.25 2.25 0 0 0 6 16.5h2.25M3.75 3h-1.5m1.5 0h16.5m0 0h1.5m-1.5 0v11.25A2.25 2.25 0 0 1 18 16.5h-2.25m-7.5 0h7.5m-7.5 0-1 3m8.5-3 1 3m0 0 .5 1.5m-.5-1.5h-9.5m0 0-.5 1.5M9 11.25v1.5M12 9v3.75m3-6v6"
                                    />
                                </svg>

                                Task Results
                            </RouterLink>
                        </li>

                        <div class="fixed my-2 bottom-1">
                            <li>
                                <a
                                    class="w-full flex items-center gap-x-3.5 py-2 px-2.5 text-sm text-white rounded-lg hover:bg-white/10 dark:hover:bg-neutral-900 dark:text-neutral-400 dark:hover:text-neutral-300"
                                    href="#"
                                >
                                    <svg
                                        xmlns="http://www.w3.org/2000/svg"
                                        fill="none"
                                        viewBox="0 0 24 24"
                                        stroke-width="1.5"
                                        stroke="currentColor"
                                        class="size-5"
                                    >
                                        <path
                                            stroke-linecap="round"
                                            stroke-linejoin="round"
                                            d="m11.25 11.25.041-.02a.75.75 0 0 1 1.063.852l-.708 2.836a.75.75 0 0 0 1.063.853l.041-.021M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Zm-9-3.75h.008v.008H12V8.25Z"
                                        />
                                    </svg>

                                    Info
                                </a>
                            </li>
                            <li>
                                <a
                                    class="w-full flex items-center gap-x-3.5 py-2 px-2.5 text-sm text-white rounded-lg hover:bg-white/10 dark:hover:bg-neutral-900 dark:text-neutral-400 dark:hover:text-neutral-300"
                                    href="#"
                                >
                                    <svg
                                        xmlns="http://www.w3.org/2000/svg"
                                        fill="none"
                                        viewBox="0 0 24 24"
                                        stroke-width="1.5"
                                        stroke="currentColor"
                                        class="size-5"
                                    >
                                        <path
                                            stroke-linecap="round"
                                            stroke-linejoin="round"
                                            d="M4.5 12a7.5 7.5 0 0 0 15 0m-15 0a7.5 7.5 0 1 1 15 0m-15 0H3m16.5 0H21m-1.5 0H12m-8.457 3.077 1.41-.513m14.095-5.13 1.41-.513M5.106 17.785l1.15-.964m11.49-9.642 1.149-.964M7.501 19.795l.75-1.3m7.5-12.99.75-1.3m-6.063 16.658.26-1.477m2.605-14.772.26-1.477m0 17.726-.26-1.477M10.698 4.614l-.26-1.477M16.5 19.794l-.75-1.299M7.5 4.205 12 12m6.894 5.785-1.149-.964M6.256 7.178l-1.15-.964m15.352 8.864-1.41-.513M4.954 9.435l-1.41-.514M12.002 12l-3.75 6.495"
                                        />
                                    </svg>
                                    Settings
                                </a>
                            </li>
                        </div>
                    </ul>
                </nav>
            </div>
            <!-- End Content -->
        </div>
    </div>
</template>
<script setup></script>
