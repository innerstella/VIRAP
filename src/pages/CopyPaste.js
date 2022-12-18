import { useState } from "react";
import { useNavigate } from "react-router-dom";

const CopyPaste = (props) => {
  const navigate = useNavigate();

  let output = [];

  // 표 출력
  let bodyRows = [];

  let data = props.data;
  let rawRows = data.split("\n");

  rawRows.forEach((rawRows, idx) => {
    let rawRowArray = rawRows.split("\t");
    output.push(rawRowArray);
    bodyRows.push(`<tr><td>${rawRowArray.join("</td><td>")}</td></tr>`);
  });

  bodyRows = bodyRows.join("");

  // json
  output = output.splice(0, 10);
  let jsonString = JSON.stringify(output);
  console.log(jsonString);

  return (
    <>
      <table dangerouslySetInnerHTML={{ __html: bodyRows }}></table>
    </>
  );
};

export default CopyPaste;
