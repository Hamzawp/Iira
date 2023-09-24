import React from 'react'
import './File.css'
import {AiFillFolder} from 'react-icons/ai'
import {AiFillFile} from 'react-icons/ai'

export default function File(props){
  const {type,name,level} = props;
  return (
    <div>
<div class="fileCard">
{type == "folder" ? <AiFillFolder style={{"color":"#5b555e","fontSize":"110px"}}/>:<AiFillFile style={{"color":"#5b555e","fontSize":"110px"}}/>}
  
  <p>{name}</p>
</div>
    </div>
  )
}
