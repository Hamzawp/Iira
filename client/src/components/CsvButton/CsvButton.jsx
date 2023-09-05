import React, { useState } from "react";
import "./CsvButton.css";
import { Importer, ImporterField } from "react-csv-importer";

export default function CsvButton(props) {
  const [isFileselected, setFileselected] = useState(false);
  const data = [];
  let {onDataReceived} = props;

  const handleFileUpload = (event) => {
    setFileselected(!isFileselected);
    const file = event.target.files[0];
    if (file) {
      parseCSV(file);
    }
  };

  const parseCSV = (file) => {
    const reader = new FileReader();
    reader.onload = (event) => {
      const text = event.target.result;
      const rows = text.split("\n").map((row) => row.split(","));
      // console.log('Parsed Rows:', rows);
      const headers = rows[0].map((header) => header.trim());

      for (let i = 1; i < rows.length; i++) {
        const row = rows[i];
        if (row.length === headers.length) {
          const obj = {};
          for (let j = 0; j < headers.length; j++) {
            obj[headers[j]] = row[j].trim();
          }
          data.push(obj);
          // console.log(data);
        }
      }
      onDataReceived(data);
      // setCSVData(data);
      // console.log(csvData)
    };
    reader.readAsText(file);
    // console.log(data);

  };

  return (
    <div>
      {/* {isFileselected ? (
        <p>hi</p>
      ) : ( */}
        <>
          <input
            type={"file"}
            id={"file-input"}
            accept={".csv"}
            onChange={handleFileUpload}
            style={{ display: "none" }}
          />
          <button
            className="csvBtn"
            onClick={() => document.getElementById("file-input").click()}
          >
            <span>Upload</span>
          </button>
        </>
      {/* )} */}
    </div>
  );
}
