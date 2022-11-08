import React, { useState } from "react";
import useStickyHeader from "./useStickyHeader.js";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
// import { faTrash } from "@fortawesome/fontawesome-free-solid";
import { faTrash } from "@fortawesome/free-solid-svg-icons";
import Modal from "../components/Modal.jsx";

export default function Table({ headers = [], data = [] }) {
  const { tableRef, isSticky } = useStickyHeader();

  const renderHeader = () => (
    <thead>
      <tr>
        {headers.map((item) => (
          <th key={item}>{item}</th>
        ))}
      </tr>
    </thead>
  );

  const [showModal, setShowModal] = React.useState(false);

  return (
    <div>
      {isSticky && (
        <table
          className="sticky"
          style={{
            position: "fixed",
            top: 0,
            left: 0,
            right: 0,
          }}
        >
          {renderHeader()}
        </table>
      )}
      <table ref={tableRef}>
        {renderHeader()}
        <tbody>
          {data.map((item) => (
            <tr key={item.code}>
              <td class="eventName">{item.eventName}</td>
              <td>{item.startDate}</td>
              <td>{item.endDate}</td>
              <td>{item.region}</td>
              <td>{item.markup}</td>
              <td>
                <button className="text-center" type="button" onClick={() => setShowModal(true)}>
                  <FontAwesomeIcon icon={faTrash} className="w-3 text-center hover:text-[#fb4156]" />
                </button>

                {/* Start of Main modal */}

              {showModal && (
                <>
                  <Modal
                    heading="Are you Sure?"
                    cancelOnClick={() => {
                      setShowModal(false);
                    }}
                    addOnClick={() => {
                      setShowModal(false);
                    }}
                    addButtonLabel="Delete"
                  />
                  <div
                    className="fixed bg-black opacity-25"
                    onClick={() => {
                      setShowModal(false);
                    }}
                  ></div>
                </>
              )}
              {/* End of Main modal */}

              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
