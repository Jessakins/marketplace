import React from 'react'

export default function Header () {
    return (
        <div>
            <h1 class="text-gray text-center border-b font-montserrat font-bold text-base p-1.5 bg-yellow
                border-gray">SUMMER SALE: <span class="text-black font-bold">15% OFF SKIPJACK TUNA</span>
            </h1>

            <div class="border-b border-blue p-5">
                <div className="flex">
                    <img src="/img/logo_small.png" alt="trace_ai_logo" class= "w-27 h-16 ml-20 mt-2"/>
               
                    <button class="text-blue text-xl font-extrabold rounded-full border-blue border-2 hover:text-white 
                        hover:bg-blue hover:border-transparent font-montserrat px-6 ml-auto my-2.5 mr-4">Log In</button>
 
                    <button class="border-blue border-2 rounded-full w-15 px-3 my-2.5 mr-3">
                        <svg xmlns="http://www.w3.org/2000/svg" class="h-7 w-7" fill="none" viewBox="0 0 24 24" stroke="blue">
                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="1" d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z" />
                        </svg>
                    </button>
                </div>
            </div>
        </div>
    )
}

