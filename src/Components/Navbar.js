import React, { useState } from "react";


function Navbar() {

    return (
        <div className="">
            <nav className=" bg-transparent fixed top-0  w-full   shadow-xl ">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="  h-16 flex flex-col justify-center items-center">
                    <img src="https://flowbite.com/docs/images/logo.svg" class="h-6 mr-3 sm:h-10" alt="Flowbite Logo" />
                        




                    </div>
                </div>


                <hr className="h-px bg-gray-200 border-0 dark:bg-gray-700"></hr>
            </nav>



        </div>

    );
}

export default Navbar;
