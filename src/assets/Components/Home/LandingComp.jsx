import React from 'react'

const LandingComp = () => {
  return (
    <div>

    <div class="px-4 mx-auto max-w-7xl sm:px-6 lg:px-8 mt-[7%]">
        <div class="grid grid-cols-1 text-center sm:grid-cols-2 gap-y-8 lg:grid-cols-4 sm:gap-12">
            <div>
                <div class="flex items-center justify-center w-10 h-10 mx-auto bg-blue-100 rounded-full">
                    <svg class="text-blue-600 w-9 h-9" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path
                            stroke-linecap="round"
                            stroke-linejoin="round"
                            stroke-width="1.5"
                            d="M12 11c0 3.517-1.009 6.799-2.753 9.571m-3.44-2.04l.054-.09A13.916 13.916 0 008 11a4 4 0 118 0c0 1.017-.07 2.019-.203 3m-2.118 6.844A21.88 21.88 0 0015.171 17m3.839 1.132c.645-2.266.99-4.659.99-7.132A8 8 0 008 4.07M3 15.364c.64-1.319 1-2.8 1-4.364 0-1.457.39-2.823 1.07-4"
                        />
                    </svg>
                </div>
                <h3 class="mt-8 text-lg font-semibold text-black">Secured Payments</h3>
                <p class="mt-4 text-sm text-gray-600">We deliver fast, reliable and safe real-time trasactions hand in hand with latest security features with PSPs</p>
            </div>

            <div>
                <div class="flex items-center justify-center w-10 h-10 mx-auto bg-orange-100 rounded-full">
                    <svg class="text-orange-600 w-9 h-9" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M13 10V3L4 14h7v7l9-11h-7z" />
                    </svg>
                </div>
                <h3 class="mt-8 text-lg font-semibold text-black">Fast & Easy</h3>
                <p class="mt-4 text-sm text-gray-600">Ready to go software that lets you look at your business from a glance all in one touch from any device.</p>
            </div>

            <div>
                <div class="flex items-center justify-center w-10 h-10 mx-auto bg-green-100 rounded-full">
                    <svg class="text-green-600 w-9 h-9" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M20.354 15.354A9 9 0 018.646 3.646 9.003 9.003 0 0012 21a9.003 9.003 0 008.354-5.646z" />
                    </svg>
                </div>
                <h3 class="mt-8 text-lg font-semibold text-black">Dynamic UI</h3>
                <p class="mt-4 text-sm text-gray-600">Tailor-made dynamic UI that changes based on your preference and gives you a personal feel and touch.</p>
            </div>

            <div>
                <div class="flex items-center justify-center w-10 h-10 mx-auto bg-red-100 rounded-full">
                    <svg class="text-red-600 w-9 h-9" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M3 4a1 1 0 011-1h16a1 1 0 011 1v2.586a1 1 0 01-.293.707l-6.414 6.414a1 1 0 00-.293.707V17l-4 4v-6.586a1 1 0 00-.293-.707L3.293 7.293A1 1 0 013 6.586V4z" />
                    </svg>
                </div>
                <h3 class="mt-8 text-lg font-semibold text-black">Analytics & Reporting</h3>
                <p class="mt-4 text-sm text-gray-600">Detailed analyics and reporting offering actionable insights to optimize operations and drive growth.</p>
            </div>
        </div>
    </div>


      
    </div>
  )
}

export default LandingComp
