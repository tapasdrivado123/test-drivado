import React from "react";

const Modal = ({ cancelOnClick, addOnClick, addButtonLabel, heading }) => {
  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center overflow-x-hidden overflow-y-auto outline-none focus:outline-none">
      <div className="relative w-auto max-w-3xl mx-auto my-6">
        {/*content*/}
        <div className="relative flex flex-col w-full bg-white border-0 rounded-lg shadow-lg outline-none focus:outline-none">
          {/*header*/}
          <div className="flex items-start justify-between p-5 border-b border-solid rounded-t border-slate-200">
            <h3 className="text-xl font-medium text-[#fb4156]">{heading}</h3>
            <button
              className="float-right p-1 ml-auto text-3xl font-semibold leading-none text-black"
              onClick={cancelOnClick}
            >
              <span className="block w-6 h-4 -mt-4 -mr-2 text-2xl text-gray-600">
                ×
              </span>
            </button>
          </div>
          {/*body*/}
          <div className="relative flex-auto p-6"></div>

          <div className="flex items-center justify-end p-6 border-t border-solid rounded-b border-slate-200">
            <button
              className="px-2 py-2 mb-1 mr-2 text-sm font-medium text-black"
              type="button"
              onClick={cancelOnClick}
            >
              Cancel
            </button>
            <button
              className="px-2 py-1.5 mb-1 mr-1 text-sm font-normal text-white bg-[#fb4156] active:bg-[#fb4156] rounded shadow hover:shadow-lg hover:bg-[#fc5669] outline-none focus:outline-none ease-linear transition-all duration-150"
              type="button"
              onClick={addOnClick}
            >
              {addButtonLabel}
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Modal;
