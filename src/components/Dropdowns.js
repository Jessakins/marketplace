import React from 'react'

export default function Dropdowns() {
    return (
        <div className="font-montserrat ml-60 mt-10">
            
            <h1 class="text-sm text-gray font-bold pb-2">Type</h1>
            <div class="relative inline-flex pb-3">
              <svg 
              class="w-3 h-3 absolute top-0 right-0 m-3 pointer-events-none" 
              xmlns="http://www.w3.org/2000/svg" viewBox="0 0 412 232">
              <path d="M206 171.144L42.678 7.822c-9.763-9.763-25.592-9.763-35.355 0-9.763 9.764-9.763 25.592 0 35.355l181 181c4.88 4.882 11.279 7.323 17.677 7.323s12.796-2.441 17.678-7.322l181-181c9.763-9.764 9.763-25.592 0-35.355-9.763-9.763-25.592-9.763-35.355 0L206 171.144z" fill="blue" fill-rule="nonzero"/></svg>
              <select class="border border-blue rounded-lg text-skyblue text-xs font-bold h-9 w-48 pl-3 focus:outline-none appearance-none">
                <option>Choose Type</option>
                <option>Yellowfin Tuna</option>
                <option>Skipjack Tuna</option>
                <option>Albacore Tuna</option>
                <option>Bluefin Tuna</option>
              </select>
            </div>

            <h1 class="text-sm text-gray font-bold pb-2">Location</h1>
            <div class="relative inline-flex pb-3">
              <svg 
              class="w-3 h-3 absolute top-0 right-0 m-3 pointer-events-none" 
              xmlns="http://www.w3.org/2000/svg" viewBox="0 0 412 232">
              <path d="M206 171.144L42.678 7.822c-9.763-9.763-25.592-9.763-35.355 0-9.763 9.764-9.763 25.592 0 35.355l181 181c4.88 4.882 11.279 7.323 17.677 7.323s12.796-2.441 17.678-7.322l181-181c9.763-9.764 9.763-25.592 0-35.355-9.763-9.763-25.592-9.763-35.355 0L206 171.144z" fill="blue" fill-rule="nonzero"/></svg>
              <select class="border border-blue rounded-lg text-skyblue text-xs font-bold h-9 w-48 pl-3 pr-10 focus:outline-none appearance-none">
                <option>Choose Location</option>
                <option>Nueva Ecija</option>
                <option>Quezon City</option>
                <option>Muntinlupa</option>
                <option>Bacolod City</option>
              </select>
            </div>

            <h1 class="text-sm text-gray font-bold pb-2">Distributor</h1>
            <div class="relative inline-flex pb-8">
              <svg 
              class="w-3 h-3 absolute top-0 right-0 m-3 pointer-events-none" 
              xmlns="http://www.w3.org/2000/svg" viewBox="0 0 412 232">
              <path d="M206 171.144L42.678 7.822c-9.763-9.763-25.592-9.763-35.355 0-9.763 9.764-9.763 25.592 0 35.355l181 181c4.88 4.882 11.279 7.323 17.677 7.323s12.796-2.441 17.678-7.322l181-181c9.763-9.764 9.763-25.592 0-35.355-9.763-9.763-25.592-9.763-35.355 0L206 171.144z" fill="blue" fill-rule="nonzero"/></svg>
              <select class="border border-blue rounded-lg text-skyblue text-xs font-bold h-9 w-48 pl-3 pr-10 focus:outline-none appearance-none">
                <option>Choose Distributor</option>
                <option>ABC Company</option>
                <option> - </option>
                <option> - </option>
                <option> - </option>
              </select>
            </div>

            <h1 class="text-sm text-gray font-bold">Price Range</h1>
            <h2 class="text-xs text-skyblue font-bold">400
                    <span class="text-lightgray text-xs font-bold ml-2.5"> Pesos/kilo</span>
                </h2>
        </div>
    )
}
