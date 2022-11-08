import React, { useState, useEffect } from "react"
import EventDataNew from "./EventDataNew"

function EventNew() {
  const [rowdata, setRowData] = useState([])
  const onAddRowClick = () => {
    setRowData(
      rowdata.concat({ username: "", email: "", gender: "", phone: "" })
    )
  }
  const columns = [
    {
      Header: "Name",
      accessor: "username",
    },
    {
      Header: "Email",
      accessor: "email",
    },
    {
      Header: "Gender",
      accessor: "gender",
    },
    {
      Header: "Phone",
      accessor: "phone",
    },
    {
      Header: "Phone",
      accessor: "phone",
    },
    {
      Header: "Phone",
      accessor: "phone",
    },
    {
      Header: "Phone",
      accessor: "phone",
    },
  ]
  return (
    <div className="container mx-auto">
      <button
        onClick={onAddRowClick}
        className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
      >
        Add Row
      </button>
      <div className="flex justify-center mt-8">
        <EventDataNew columns={columns} data={rowdata} />
      </div>
    </div>
  )
}
export default EventNew