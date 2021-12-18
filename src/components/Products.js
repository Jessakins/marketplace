import React from 'react'

export default function Products() {
    return (
        <div class="font-montserrat grid grid-cols-4 gap-8 justify-items-end ml-16 mt-10 mr-28 pb-10">
            <div>
                <img src="img/1.jpg" alt="ytuna" class="w-32 h-30 sm:h-45 rounded-xl pb-1"/>
                <div>
                    <span class="font-bold text-blue">Yellowfin Tuna </span>
                    <span class="block font-semibold text-xs text-gray">₱380.00/kilo</span>
                </div>
            </div>

            <div class="relative">
                <img src="img/2.jpg" alt="stuna" class="w-32 h-30 sm:h-45 rounded-xl pb-1"/>
                <div>
                    <span class="font-bold text-blue">Skipjack Tuna </span>
                    <span class="block font-semibold text-xs text-gray">₱603.50/kilo</span>
                </div>
                <div class="bg-yellow text-black text-xs font-bold rounded p-0.5 absolute -top-2 ml-2">
                    <span> 15% off </span>
                </div>
            </div>

            <div>
                <img src="img/3.jpg" alt="ytuna" class="w-32 h-30 sm:h-45 rounded-xl pb-1"/>
                <div>
                    <span class="font-bold text-blue">Yellowfin Tuna </span>
                    <span class="block font-semibold text-xs text-gray">₱380.00/kilo</span>
                </div>
            </div>

            <div>
                <img src="img/4.jpg" alt="stuna" class="w-32 h-30 sm:h-45 rounded-xl pb-1"/>
                <div>
                    <span class="font-bold text-blue">Skipjack Tuna </span>
                    <span class="block font-semibold text-xs text-gray">₱710.00/kilo</span>
                </div>
            </div>

            <div>
                <img src="img/1.jpg" alt="ytuna" class="w-32 h-30 sm:h-45 rounded-xl pb-1"/>
                <div>
                    <span class="font-bold text-blue">Yellowfin Tuna </span>
                    <span class="block font-semibold text-xs text-gray">₱380.00/kilo</span>
                </div>
            </div>

            <div>
                <img src="img/2.jpg" alt="stuna" class="w-32 h-30 sm:h-45 rounded-xl pb-1"/>
                <div>
                    <span class="font-bold text-blue">Skipjack Tuna </span>
                    <span class="block font-semibold text-xs text-gray">₱710.00/kilo</span>
                </div>
            </div>

            <div>
                <img src="img/3.jpg" alt="ytuna" class="w-32 h-30 sm:h-45 rounded-xl pb-1"/>
                <div>
                    <span class="font-bold text-blue">Yellowfin Tuna </span>
                    <span class="block font-semibold text-xs text-gray">₱380.00/kilo</span>
                </div>
            </div>

            <div>
                <img src="img/4.jpg" alt="stuna" class="w-32 h-30 sm:h-45 rounded-xl pb-1"/>
                <div>
                    <span class="font-bold text-blue text-sm">Skipjack Tuna </span>
                    <span class="block font-semibold text-xs text-gray">₱710.00/kilo</span>
                </div>
            </div>
        </div>
    )
}