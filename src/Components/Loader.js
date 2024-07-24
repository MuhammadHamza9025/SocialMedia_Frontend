import React from 'react'

const Loader = () => {
    return (
        <div class="bg-gray-100">
            <div class="flex items-center justify-center min-h-screen">
                <div class="space-y-5 rounded-2xl p-6 w-full max-w-4xl mx-4">

                    <div class="h-12 bg-rose-100/10 rounded-lg"></div>

                    <div class="space-y-4">
                        <div class="h-6 bg-gray-200 rounded-lg w-3/4"></div>
                        <div class="h-6 bg-gray-200 rounded-lg w-1/2"></div>
                        <div class="h-6 bg-gray-200 rounded-lg w-5/6"></div>
                        <div class="h-6 bg-gray-200 rounded-lg w-2/3"></div>
                    </div>

                    <div class="h-48 bg-gray-200 rounded-lg"></div>

                    <div class="space-y-3">
                        <div class="h-4 bg-rose-100/20 rounded-lg w-1/4"></div>
                        <div class="h-4 bg-rose-100/20 rounded-lg w-1/3"></div>
                        <div class="h-4 bg-rose-100/20 rounded-lg w-1/5"></div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Loader
