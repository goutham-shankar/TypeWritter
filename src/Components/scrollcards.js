import React from 'react'

function Scrollcards() {
    return (
        <div>
            <div className="flex flex-col bg-transparent m-auto p-auto overflow-hidden scrollbar-hide">
                <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white ml-10">Categories</h5>
                <div
                    className="flex overflow-x-scroll pb-10 hide-scroll-bar scrollbar-hide"
                >

                    <div
                        className="flex flex-nowrap lg:ml-40 md:ml-20 ml-10  scrollbar-hidden "
                    >
                        <div className="inline-block px-3">
                            <div
                                className=" w-auto h-auto  overflow-hidden rounded-lg shadow-md bg-white hover:shadow-xl transition-shadow duration-300 ease-in-out shadow-white"
                            ></div>
                        </div>


                    </div>
                    <div className="inline-block px-3">

                        <div
                            className="w-64 h-64 max-w-xs overflow-hidden rounded-lg shadow-md bg-white hover:shadow-xl transition-shadow duration-300 ease-in-out"
                        ></div>
                    </div>
                    <div className="inline-block px-3">

                        <div
                            className="w-64 h-64 max-w-xs overflow-hidden rounded-lg shadow-md bg-white hover:shadow-xl transition-shadow duration-300 ease-in-out"
                        ></div>
                    </div>
                    <div className="inline-block px-3">

                        <div
                            className="w-64 h-64 max-w-xs overflow-hidden rounded-lg shadow-md bg-white hover:shadow-xl transition-shadow duration-300 ease-in-out"
                        ></div>
                    </div>
                    <div className="inline-block px-3">
                        <div
                            className="w-64 h-64 max-w-xs overflow-hidden rounded-lg shadow-md bg-white hover:shadow-xl transition-shadow duration-300 ease-in-out"
                        ></div>
                    </div>
                </div>
            </div>

        </div>
    )
}

export default Scrollcards
