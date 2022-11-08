import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";

const InputField = ({ placeholder, Icon, label, type, id, isFontawesome, name, fontawesomeIcon,onChange }) => {
  return (
    <div>
      {/* INPUT FIELD */}
      <div className="flex px-4 py-2 font-serif text-[#9E9E9E] bg-gray-600 rounded-md space-x-2 items-center lg:px-2 lg:py-[10px] lg:w-full lg:h-full">
        {isFontawesome ? (
          <FontAwesomeIcon icon={fontawesomeIcon} className="text-xl" />
        ) : (
          <Icon className="w-5 h-5 mr-3 text-blue-100 lg:h-5 lg:w-10 lg:mr-3" />
        )}
        {/* PLACEHOLDER */}
        <div className="w-full">
          <div className="font-sans text-sm font-semibold text-gray-400 md:text-sm">
            {label}
          </div>
          <input
            className="w-full h-full font-sans bg-gray-600 border-none focus:outline-none lg:w-full text-md lg:text-base"
            placeholder={placeholder}
            onChange={onChange}
            label={label}
            type={type}
            id={id}
            name={name}
          />
        </div>
      </div>
    </div>
  );
};

export default InputField;
