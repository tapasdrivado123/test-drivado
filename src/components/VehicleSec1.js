import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
// import { BriefcaseIcon, UserIcon } from "@fortawesome/free-solid-svg-icons";

const VehicleSec = (text, icon, carImg, carType, desc, maxUser, maxLuggage) => {
  return (
    <>
      <div className="items-center">
        <div className="bg-white-50 w-1/3 font-sans  text-red-600">
          <div>
            <img src={carImg} alt={text} />
          </div>
          <div className="text-[#fb4156] font-medium text-lg">{carType}</div>
          <div>
            <div className="text-[#fb4156] font-medium text-xs">Description: <br />{desc}</div>
          </div>
          <div className="flex">
            <div className="space-x-2 items-center">
            <FontAwesomeIcon icon={icon} />
              <div className="text-sm">{maxUser} Max</div>
            </div>
            <div className="space-x-2 items-center">
            <FontAwesomeIcon icon={icon} />
              <div className="text-sm">{maxLuggage} Max</div>
            </div>
          </div>

        </div>
      </div>
    </>
  );
};

export default VehicleSec;