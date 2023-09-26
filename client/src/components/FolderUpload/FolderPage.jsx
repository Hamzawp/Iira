import React, { useState } from "react";
import "./FolderPage.css";
import File from "./File";
import { BiArrowBack } from "react-icons/bi";
import { AiOutlineFolderAdd } from "react-icons/ai";
import { AiOutlinePlus } from "react-icons/ai";

export default function FolderPage() {
  const folder = {
    name: "root",
    level: 0,
    address: [0],
    files: [
      {
        fileName: "Calculator.py",
      },
      {
        fileName: "Casio.jpg",
      },
    ],
    folders: [
      {
        id: "0",
        name: "Description",
        level: 1,
        address: [0, 0],
        files: [
          {
            fileName: "Calculator.py",
          },
          {
            fileName: "file2.pdf",
          },
        ],
        folders: [
          {
            id: "1",
            name: "Assets",
            level: 1,
            address: [0, 0, 0],
            files: [
              {
                id: 0,
                fileName: "photo.jpg",
              },
              {
                id: 1,
                fileName: "file.pdf",
              },
            ],
            folders: [],
          },
          {
            id: "2",
            name: "Client",
            level: 1,
            address: [0, 0, 1],
            files: [
              {
                id: 0,
                fileName: "photo.jpg",
              },
              {
                id: 1,
                fileName: "file.pdf",
              },
            ],
            folders: [],
          },
          {
            id: "3",
            name: "Server",
            level: 1,
            address: [0, 0, 2],
            files: [
              {
                id: 0,
                fileName: "photo.jpg",
              },
              {
                id: 1,
                fileName: "file.pdf",
              },
            ],
            folders: [],
          },
        ],
      },
      {
        id: "1",
        name: "Assets",
        level: 1,
        address: [0, 1],
        files: [
          {
            id: 0,
            fileName: "photo.jpg",
          },
          {
            id: 1,
            fileName: "file.pdf",
          },
        ],
        folders: [],
      },
      {
        id: "2",
        name: "Client",
        level: 1,
        address: [0, 2],
        files: [
          {
            id: 0,
            fileName: "photo.jpg",
          },
          {
            id: 1,
            fileName: "file.pdf",
          },
        ],
        folders: [],
      },
      {
        id: "3",
        name: "Server",
        level: 1,
        address: [0, 3],
        files: [
          {
            id: 0,
            fileName: "photo.jpg",
          },
          {
            id: 1,
            fileName: "file.pdf",
          },
        ],
        folders: [],
      },
      {
        id: "4",
        name: "Code",
        level: 1,
        address: [0, 3],
        files: [
          {
            id: 0,
            fileName: "photssso.jpg",
          },
          {
            id: 1,
            fileName: "file.pdf",
          },
        ],
        folders: [],
      },
    ],
  };
  console.log(folder);
  const [folders, setFolders] = useState([]);
  const [folderStruct, setFolderStruct] = useState(folder);
  const [files, setFiles] = useState([]);
  const [level, setLevel] = useState(0);
  const [folderInput, setFolderInput] = useState(false);
  const [folderName, setFolderName] = useState("");

  function handleNestedFolder(folderId, folderLevel) {
    const clickedFolder = folder.folders.find(
      (folder) => folder.id === folderId
    );
    if (clickedFolder) {
      setFolders(folder.folders[folderId].folders);
      setLevel(level + 1);
    }
    console.log(folderId);
  }

  function handleLevel() {
    setLevel(0);
    setFolders(folder.folders);
  }

  function addFolder() {
    setFolderInput(!folderInput);
  }

  function createFolder() {
    const folderObj = {
      id: "4",
      name: folderName,
      level: 1,
      address: [0, 4],
      files: [
        {
          id: 0,
          fileName: "photo.jpg",
        },
      ],
      folders: [],
    };
    folder.folders.push(folderObj);
    setFolders((prevFolder) => [...prevFolder, folderObj]);
    // folder.folders[4].id = 5
    // setFolders(folder.folders)
    console.log(folders);
  }

  function handleFolderName(event) {
    setFolderName(event.target.value);
  }

  console.log(folder.files);
  //   const folders = folder.folders;
  function handlePyUpload() {
    setFolders(folder.folders);
    setFiles(folder.files);
  }

  return (
    <div className="folderPagediv">
      <div className="folderBtnDiv">
        <div className="folderBtns">
          <input
            type="file"
            style={{ display: "none" }}
            onChange={handlePyUpload}
            id="fileUpload"
            multiple
          />
          <label htmlFor="fileUpload">
            <button
              className="fileBtn"
              onClick={() => document.getElementById("fileUpload").click()}
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke-width="2"
                stroke="currentColor"
                aria-hidden="true"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  d="M13.5 3H12H8C6.34315 3 5 4.34315 5 6V18C5 19.6569 6.34315 21 8 21H11M13.5 3L19 8.625M13.5 3V7.625C13.5 8.17728 13.9477 8.625 14.5 8.625H19M19 8.625V11.8125"
                  stroke="#fffffff"
                  stroke-width="2"
                ></path>
                <path
                  d="M17 15V18M17 21V18M17 18H14M17 18H20"
                  stroke="#fffffff"
                  stroke-width="2"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                ></path>
              </svg>
              ADD FILE
            </button>
          </label>
          <button
            className="fileBtn"
            onClick={() => document.getElementById("fileUpload").click()}
          >
            <AiOutlineFolderAdd />
            ADD FOLDER
          </button>
          {folderInput && (
            <>
              <div
                style={{ marginBottom: "none !important" }}
                className="inp-container"
              >
                <div style={{ margin: "0px" }} className="inp-inpanddiv">
                  <input
                    className="inp-input"
                    style={{ marginTop: "30px" }}
                    onChange={handleFolderName}
                    value={folderName}
                    name="text"
                    type="text"
                  />
                </div>
              </div>
              <button class="createBtn" onClick={createFolder}>
                <AiOutlinePlus style={{ color: "var(--light)" }} />
                <span class="tooltip">Create</span>
              </button>
            </>
          )}
        </div>
        <div>
          {level != 0 && (
            <button id="bottone5" onClick={handleLevel}>
              <BiArrowBack />
              Back
            </button>
          )}
        </div>
      </div>

      {/* <h4>Directory</h4> */}
      <div className="folderDatadiv">
        {/* <File type="folder" name="Photos" level="1" /> */}
        {folders.map((folder) => (
          <div onClick={() => handleNestedFolder(folder.id, folder.level)}>
            <File
              key={folder.id}
              name={folder.name}
              type="folder"
              level={folder.level}
            />
          </div>
        ))}
        {files.map((file) => (
          <>
            <File key={file.id} name={file.fileName} type="file" />
          </>
        ))}
      </div>
    </div>
  );
}
