import { useState, useEffect } from "react";
import { json, useNavigate } from "react-router-dom";

const CopyPaste = () => {
  const navigate = useNavigate();
  const [visibleBtn, setVisibleBtn] = useState("none");
  const [sizeCheck, setSizeCheck] = useState("");
  const [jsonString, setJSONString] = useState();

  const [data, setData] = useState("");
  const constructTableFromPasetedInput = (input) => {
    setData(input.target.value);
  };

  let output = [];

  // 엑셀 데이터 받기
  const getData = () => {
    let bodyRows = [];

    let rawRows = data.split("\n");
    let numOfRows = rawRows.length - 1;
    let columnList = [];

    rawRows.forEach((rawRows, idx) => {
      let rawRowArray = rawRows.split("\t");
      columnList.push(rawRowArray.length);
      output.push(rawRowArray);
      bodyRows.push(`<tr><td>${rawRowArray.join("</td><td>")}</td></tr>`);
    });

    bodyRows = bodyRows.join("");
    let numOfColumns = Math.max(...columnList);

    if (numOfRows > 0 && numOfColumns > 0) {
      setSizeCheck(`입력된 데이터 크기 : ${numOfRows} X ${numOfColumns} `);
      setVisibleBtn("inline-block");
    }
    makeJSON(numOfRows);
  };

  // json
  const makeJSON = (numOfRows) => {
    output = output.splice(0, numOfRows);
    setJSONString(JSON.stringify(output));
  };

  // json 새 창
  let openJSON;
  const openData = () => {
    openJSON = window.open("/inputdata", "", "_blank");
    openJSON.document.title = `test`;
  };

  useEffect(() => {
    getData();
  });

  return (
    <>
      <h4>엑셀에서 데이터를 붙여넣으세요.</h4>
      <textarea
        id="myDemoTextArea"
        onChange={constructTableFromPasetedInput}
        value={data}
      ></textarea>

      {/* <table dangerouslySetInnerHTML={{ __html: bodyRows }}></table> */}
      <p dangerouslySetInnerHTML={{ __html: sizeCheck }}></p>
      <br />
      <button onClick={openData} style={{ display: visibleBtn }}>
        데이터 세부 확인
      </button>
    </>
  );
};

export default CopyPaste;
