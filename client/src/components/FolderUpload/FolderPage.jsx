import React, { useState } from "react";
import "./FolderPage.css";
import File from "./File";
import { BiArrowBack } from "react-icons/bi";
import { AiOutlineFolderAdd } from "react-icons/ai";

export default function FolderPage() {
  const folder = {
    name: "root",
    level: 0,
    address: [0],
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
    folders: [
      {
        id: "0",
        name: "Description",
        level: 1,
        address: [0, 0],
        files: [
          {
            fileName: "photo2.jpg",
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
    ],
  };
  const [folders, setFolders] = useState(folder.folders);
  const [files, setFiles] = useState(folder.files);
  const [level, setLevel] = useState(0);
  const [folderInput,setFolderInput] = useState(false)

  function handleNestedFolder(folderId, folderLevel) {
    const folderString = "";
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

  function addFolder(){
    setFolderInput(!folderInput)
    // const folderObj = {
    //   id: "0",
    //   name: "Description",
    //   level: 1,
    //   address: [0, 0],
    //   files: [
    //     {
    //       fileName: "photo2.jpg",
    //     },
    //     {
    //       fileName: "file2.pdf",
    //     },
    //   ],
    //   folders: [
    //     {
    //       id: "1",
    //       name: "Assets",
    //       level: 1,
    //       address: [0, 0, 0],
    //       files: [
    //         {
    //           id: 0,
    //           fileName: "photo.jpg",
    //         },
    //         {
    //           id: 1,
    //           fileName: "file.pdf",
    //         },
    //       ],
    //       folders: [],
    //     },
    //     {
    //       id: "2",
    //       name: "Client",
    //       level: 1,
    //       address: [0, 0, 1],
    //       files: [
    //         {
    //           id: 0,
    //           fileName: "photo.jpg",
    //         },
    //         {
    //           id: 1,
    //           fileName: "file.pdf",
    //         },
    //       ],
    //       folders: [],
    //     },
    //     {
    //       id: "3",
    //       name: "Server",
    //       level: 1,
    //       address: [0, 0, 2],
    //       files: [
    //         {
    //           id: 0,
    //           fileName: "photo.jpg",
    //         },
    //         {
    //           id: 1,
    //           fileName: "file.pdf",
    //         },
    //       ],
    //       folders: [],
    //     },
    //   ],
    // };
  }

  console.log(folder.files);
  //   const folders = folder.folders;

  return (
    <div className="folderPagediv">
      <div className="folderBtnDiv">
        <div className="folderBtns">
          <button className="fileBtn">
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
          <button className="fileBtn" onClick={addFolder}>
            <AiOutlineFolderAdd />
            ADD FOLDER
          </button>
          {folderInput && 
          <>
          <div style={{"marginBottom":"none !important"}} className="inp-container">
              <div className="inp-inpanddiv">
                <input className="inp-input" name="text" type="text" />
              </div>
            </div>
            <button class="animated-button">
  <span>Hover me</span>
  <span></span>
</button>

            </>}
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
