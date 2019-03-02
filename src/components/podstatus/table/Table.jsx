import React from "react";
import "./Table.css";

const Table = props => {
  let tableElements = props.data.map((t, key) => <div>{t.podName}</div>);

  return <div>{tableElements}</div>;
};
export default Table;
