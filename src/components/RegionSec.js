import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPencil } from '@fortawesome/free-solid-svg-icons';
import Map from '../assets/map.jpg'



const RegionSec = () => {
  return (
    <>
      <div className="w-full items-center m-10">
        
        <div className="bg-white-50 shadow-md w-1/3 font-sans text-red-600 hover:shadow-xl">
            <div className="">
                <img src={Map} alt="Region map" className="object-cover w-auto h-auto" />
            </div>
            <div className="flex justify-between items-center mt-3 mb-3">
              <div className="text-[#fb4156] font-medium text-xl text-left ml-5">London</div>
              <div className="text-right mr-5"><FontAwesomeIcon icon={faPencil} className="cursor-pointer hover:bg-[#fb4156] w-6 h-6 rounded-full" /></div>
            </div>
        </div>
      </div>
    </>
  );
};

export default RegionSec;