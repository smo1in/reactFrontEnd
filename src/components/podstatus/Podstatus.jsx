import React from "react";
import "./Podstatus.css";
import "./table/Table";
import Table from "./table/Table";

const Podstatus = props => {
  return (
    <div>
      <Table data={props.data} />
    </div>
  );
};
export default Podstatus;
