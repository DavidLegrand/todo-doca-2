import React from "react";

const Line = ({ data, label, datatype }) => {
  let dataDisplay = null

  switch (datatype) {
    case 'date':
      dataDisplay = data.toLocaleDateString()
      break
    case 'string':
    default:
      dataDisplay = data
      break
  }

  return <>
    {data &&
      <tr><td>{label}</td><td>{dataDisplay}</td></tr>}
  </>;
};

export default Line;
