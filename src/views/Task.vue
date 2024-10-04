<template>
    <h3 class="text-3xl">Tasks Managment</h3>
    <div class="flex flex-col justify-baseline mt-3">
        <div
            class="p-6 border h-32 rounded-lg border-indigo-600 max-w-sm"
        >
            <form class="max-w-sm mx-auto">
                <label
                    for="functions"
                    class="block mb-2 text-sm font-medium text-white"
                    >Select an funcion</label
                >
                <select
                    id="functions"
                    class="bg-gray-50 px-2 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                >
                    <option selected>Choose a function</option>
                    <option value="US">Addition</option>
                    <option value="CA">Substraction</option>
                    <option value="FR">Mulitplication</option>
                    <option value="DE">Division</option>
                </select>
            </form>
        </div>
        <div
            class="py-3 px-5 mt-6 border rounded-lg border-indigo-600 w-full max-w-sm"
        >
            <h2 class="text-2xl font-semibold text-gray-100 mb-6">Test Case</h2>

            <label class="block text-gray-400 mb-2" for="input1"
                >Input 1 (a):</label
            >
            <input
                id="input1"
                type="text"
                placeholder="Enter value for a"
                class="w-full p-2 mb-4 bg-gray-700 text-gray-300 rounded-lg border border-gray-600 focus:outline-none focus:ring-2 focus:ring-indigo-500"
            />

            <label class="block text-gray-400 mb-2" for="input2"
                >Input 2 (b):</label
            >
            <input
                id="input2"
                type="text"
                placeholder="Enter value for b"
                class="w-full p-2 mb-4 bg-gray-700 text-gray-300 rounded-lg border border-gray-600 focus:outline-none focus:ring-2 focus:ring-indigo-500"
            />

            <label class="block text-gray-400 mb-2" for="expectedOutput"
                >Expected Output:</label
            >
            <input
                id="expectedOutput"
                type="text"
                placeholder="Enter expected output"
                class="w-full p-2 mb-4 bg-gray-700 text-gray-300 rounded-lg border border-gray-600 focus:outline-none focus:ring-2 focus:ring-indigo-500"
            />

              <button
            class="flex items-center justify-center max-w-lg uppercase mt-8 px-4 py-2 text-sm border border-indigo-500 rounded-md font-medium transition-colors duration-200 sm:text-base sm:px-6 :hover:bg-gray-800 text-gray-300 gap-x-3 hover:bg-gray-100 hover:text-gray-800"
        >
         <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="size-5">
             <path stroke-linecap="round" stroke-linejoin="round" d="M12 9v6m3-3H9m12 0a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z" />
        </svg>


            <span>Add Test</span>
        </button>
        </div>
    </div>
</template>
