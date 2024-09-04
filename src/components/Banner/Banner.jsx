import React from 'react';
import img1 from '../Images/searchJob.jpg'

const Banner = () => {
    return (
        <div>
            <section class="sm:mt-6 lg:mt-8 mt-12 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

                <div
                    class="my-10 mx-auto max-w-7xl px-4 sm:mt-12 sm:px-6 md:mt-16 lg:mt-20 lg:px-8 xl:mt-28 flex gap-3 lg:flex-justify lg:flex flex-col lg:flex-row">
                    <div class="sm:text-center lg:text-left">
                        <h1 class="text-4xl tracking-tight font-extrabold text-gray-800 sm:text-5xl md:text-6xl">
                            <span class="block xl:inline">One Step Closer To Your</span>
                            <span class="block text-indigo-600 xl:inline"> Dream Job</span>
                        </h1>
                        <p
                            class="mt-3 text-base text-gray-500 sm:mt-5 sm:text-lg sm:max-w-xl sm:mx-auto md:mt-5 md:text-xl lg:mx-0">
                            Anim aute id magna aliqua ad ad non deserunt sunt. Qui irure qui lorem cupidatat commodo. Elit sunt amet
                            fugiat veniam occaecat fugiat aliqua.
                        </p>

                        <div class="mt-5 sm:mt-8 sm:flex sm:justify-center lg:justify-start">
                            <div class="rounded-md shadow">
                                <a href="#"
                                    class="w-full flex items-center justify-center px-8 py-3 border border-transparent text-base font-medium rounded-md text-white bg-gray-800 hover:bg-gray-600 md:py-4 md:text-lg md:px-10">
                                    Get started
                                </a>
                            </div>

                        </div>

                    </div>


                    <div class="lg:inset-y-0 lg:right-0 lg:w-1/2 my-4">
                        <img class="h-56 w-full object-cover sm:h-72 md:h-96 lg:w-full lg:h-full" src={img1} alt=''></img>
                    </div>

                </div>

            </section>


        </div>
    );
};

export default Banner;