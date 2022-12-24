import styled from "styled-components";

const Table = styled.table`
  border: 1px solid black;
`;
const SizeCheck = () => {
  console.log(document);
  let data = window.opener.document.getElementById("myDemoTextArea").value;
  let output = [];
  let bodyRows = [];

  let rawRows = data.split("\n");
  let columnList = [];

  rawRows.forEach((rawRows, idx) => {
    let rawRowArray = rawRows.split("\t");
    columnList.push(rawRowArray.length);
    output.push(rawRowArray);
    bodyRows.push(
      `<tr><td style = 'border: 1px solid black'>${rawRowArray.join(
        "</td><td style = 'border: 1px solid black'>"
      )}</td></tr>`
    );
  });

  bodyRows = bodyRows.join("");

  return (
    <>
      <p>확인 창</p>
      <Table dangerouslySetInnerHTML={{ __html: bodyRows }}></Table>
    </>
  );
};

export default SizeCheck;
