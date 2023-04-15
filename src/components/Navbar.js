import React from 'react'
import { BiSearch } from 'react-icons/bi'
import {AiOutlineMenu} from 'react-icons/ai'

export default function Navbar() {
  return (
    <div>
      <div className=" fixed w-full bg-white z-10 shadow-sm">
        <div className=" py-4 border-b-[2px] bg-green-800"></div>
        <div
          className="
         max-w-[2560px]
         mx-auto 
          xl:px-20
          md:px-10
          sm:px-2
          px-4"
        >
          <div
            className="
                     flex
                     flex-row
                     item-center
                      justify-between
                       md:gap-3
                       gap-3"
          >
            <img
              alt="Logo"
              className=" hidden md:block cursor-pointer"
              height="100"
              width="100"
              src="jogo.png"
            ></img>
            <div
              className="
         border-[2px]
         w-full
         md:w-auto
         py-2
         shadow-sm
         hover:shadow-md
         transition
         cursor-point"
            >
              <div
                className="
            flex
            flex-row
             items-center
              justify-between 
               rounded-full "
              >
                <div
                  className="text-sm
                  font-semibold
                   px-6"
                >
                  Anywhere
                </div>
                <hr></hr>
                <div
                  className="
                hidden
                sm:block
                text-sm
                font-semibold
                px-6
                border-x-[1px]
                 border-grey
                text-center
                flex-1"
                >
                  Why chose us?
                </div>
                <div
                  className="
                text-sm
                font-semibold
                flex
                flex-row
                px-6
                 text-gray-500
                 border-gray
                items-center
                gap-3"
                >
                  <div className=" hidden sm:block">Location</div>
                  <div className="p-2 bg-green-500 rounded-full text-white">
                    <BiSearch size={18} />
                  </div>
                  <div className="relative">
            <div className="flex flex-row items-center gap-3">
                <div
                className="
                hidden
                md:block
                text-sm
                font-semibold
                py-3
                px-4
               ">
                    Trash is cash
                </div>
                <div
                className="
                p-4
                md:py-1
                md:px-2
                items-center
                gap-3
                flex
                flex-row
                border-1px
                rounded-full
                ">
                    <AiOutlineMenu/>
                    <div className='hidden md:block'>
                       
                    </div>
                </div>
            </div>
            </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
