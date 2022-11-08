import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBriefcase, faCircleCheck, faPencil, faUser } from '@fortawesome/free-solid-svg-icons'



const VehicleSec = (text, icon, carImg, carType, desc, maxUser, maxLuggage) => {
  return (
    <>
      <div className="w-full items-center m-10">
        
        <div className="bg-white-50 shadow-md w-1/3 font-sans text-red-600 p-5 hover:shadow-xl">
          <div className="-translate-y-10">
            <img className="h-auto w-auto object-cover pl-[10%]" src="https://res.cloudinary.com/drivado/image/upload/v1663058576/vehicleImages/mqptugjregzhnwsxjrty.png" alt="car" />
          </div>
          <div className="text-[#fb4156] font-medium text-3xl text-center">PREMIUM VAN/SUV</div>
          <div className="mt-5">
            <div className="text-[#fb4156] font-medium text-sm">Description: <br /><span className="text-xs text-gray-600">Mercedes Viano/V Class, Cadillac Escalade, Toyota Alphard, Chevrolet</span></div>
          </div>
          <div className="flex space-x-16 mt-10">
            <div className="items-center text-center">
                <FontAwesomeIcon icon={faUser} className="text-xl" /><div className="text-lg font-semibold text-black">3 Max</div>
            </div>
            <div className="items-center text-center">
                <FontAwesomeIcon icon={faBriefcase} className="text-xl" /><div className="text-lg font-semibold text-black">2 Max</div>
            </div>
            <div className="items-center text-center">
                <FontAwesomeIcon icon={faCircleCheck} className="text-xl text-green-700" /><div className="text-lg font-semibold text-black">Status</div>
            </div>
            <div className="items-center text-center">
                <FontAwesomeIcon icon={faPencil} className="text-xl" /><div className="text-lg font-semibold text-black">Edit</div>
            </div>
          </div>
        </div>

      </div>
    </>
  );
};

export default VehicleSec;