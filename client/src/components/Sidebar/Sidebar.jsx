import React from 'react'
import './Sidebar.css'
import {BiSolidDashboard,BiSolidReport,BiHistory,BiMessageAltDetail,BiLogOut} from 'react-icons/bi'
import {AiOutlineTeam} from 'react-icons/ai'
import {FiSettings} from 'react-icons/fi'

export default function Sidebar(props) {
  
    const allSideMenu = document.querySelectorAll('#sidebar .side-menu.top li a');

allSideMenu.forEach(item=> {
	const li = item.parentElement;

	item.addEventListener('click', function () {
		allSideMenu.forEach(i=> {
			i.parentElement.classList.remove('active');
		})
		li.classList.add('active');
	})
});


  return (
    // {isSdbropen?}
    <section id="sidebar" className={props.isSdbropen?"":"hide"}>
      <a href="#" className="brand">
        <i className="bx bxs-smile"></i>
        <span className="text">Aztec</span>
      </a>
      <ul className="side-menu top">
        <li className="active">
          <a href="#">
            {/* <i className="bx bxs-dashboard"></i> */}
            <BiSolidDashboard className = "custom-icons"/>
            <span className="text">{props.isSdbropen?"Dashboard":""}</span>
          </a>
        </li>
        <li>
          <a href="#">
            {/* <i className="bx bxs-shopping-bag-alt"></i> */}
            <BiSolidReport className = "custom-icons"/>
            <span className="text">{props.isSdbropen?"Report Link":""}</span>
          </a>
        </li>
        <li>
          <a href="#">
            {/* <i className="bx bxs-doughnut-chart"></i> */}
            <BiHistory className = "custom-icons"/>
            <span className="text">{props.isSdbropen?"Report History":""}</span>
          </a>
        </li>
        <li>
          <a href="#">
            {/* <i className="bx bxs-message-dots"></i> */}
            <BiMessageAltDetail className = "custom-icons"/>
            <span className="text">{props.isSdbropen?"Message":""}</span>
          </a>
        </li>
        <li>
          <a href="#">
            {/* <i className="bx bxs-group"></i> */}
            <AiOutlineTeam className = "custom-icons"/>
            <span className="text">{props.isSdbropen?"Team":""}</span>
          </a>
        </li>
      </ul>
      <ul className="side-menu">
        <li>
          <a href="#">
            {/* <i className="bx bxs-cog"></i> */}
            <FiSettings className = "custom-icons"/>
            <span className="text">{props.isSdbropen?"Settings":""}</span>
          </a>
        </li>
        <li>
          <a href="#" className="logout">
            {/* <i className="bx bxs-log-out-circle"></i> */}
            <BiLogOut className = "custom-icons"/>
            <span className="text">{props.isSdbropen?"Logout":""}</span>
          </a>
        </li>
      </ul>
    </section>
  )
}
