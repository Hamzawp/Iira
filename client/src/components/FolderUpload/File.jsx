import React, { useEffect, useState } from "react";
import "./File.css";
import { AiFillFolder } from "react-icons/ai";
import { AiFillFile } from "react-icons/ai";

export default function File(props) {
  const { type, name, level } = props;
  const [isImg, setIsImg] = useState(name === "Casio.jpg");
  // useEffect(() => {
  //   if (name === "Casio.jpg") {
  //     setIsImg(true);
  //   } else {
  //     setIsImg(false);
  //   }
  // }, [name]);
  return (
    <div>
      {isImg ? (
        <div class="fileCard">
          <img style={{"height":"7vw"}} src="https://images.unsplash.com/photo-1587145820266-a5951ee6f620?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1780&q=80" alt="" />
          <p>{name}</p>
        </div>
      ) : (
        <div class="fileCard">
          {type == "folder" ? (
            <AiFillFolder style={{ color: "#5b555e", fontSize: "110px" }} />
          ) : (
            <AiFillFile style={{ color: "#5b555e", fontSize: "110px" }} />
          )}
          <p>{name}</p>
        </div>
      )}

    </div>
  );
}
