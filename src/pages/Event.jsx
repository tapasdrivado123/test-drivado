import React from "react";
import Table from "./Table";
import { tableHeaders, tableData } from "./EventData";
import "./eventStyle.css";

const Event = () => {
  return (
    <div>
      <Table headers={tableHeaders} data={tableData} />
    </div>
  );
}

export default Event