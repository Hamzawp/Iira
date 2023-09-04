import React from 'react'
import './UniversityDashboard.css'
import Sidebar from '../../components/Sidebar/Sidebar'
import Navbar from '../../components/Navbar/Navbar'

export default function UniversityDashboard() {
  // TOGGLE SIDEBAR
// const menuBar = document.querySelector('#content nav .bx.bx-menu');
// const sidebar = document.getElementById('sidebar');


// const searchButton = document.querySelector('#content nav form .form-input button');
// const searchButtonIcon = document.querySelector('#content nav form .form-input button .bx');
// const searchForm = document.querySelector('#content nav form');

// searchButton.addEventListener('click', function (e) {
// 	if(window.innerWidth < 576) {
// 		e.preventDefault();
// 		searchForm.classNameList.toggle('show');
// 		if(searchForm.classNameList.contains('show')) {
// 			searchButtonIcon.classNameList.replace('bx-search', 'bx-x');
// 		} else {
// 			searchButtonIcon.classNameList.replace('bx-x', 'bx-search');
// 		}
// 	}
// })


// if(window.innerWidth < 768) {
// 	sidebar.classNameList.add('hide');
// } else if(window.innerWidth > 576) {
// 	searchButtonIcon.classNameList.replace('bx-x', 'bx-search');
// 	searchForm.classNameList.remove('show');
// }

// window.addEventListener('resize', function () {
// 	if(this.innerWidth > 576) {
// 		searchButtonIcon.classNameList.replace('bx-x', 'bx-search');
// 		searchForm.classNameList.remove('show');
// 	}
// })

// const switchMode = document.getElementById('switch-mode');

// switchMode.addEventListener('change', function () {
// 	if(this.checked) {
// 		document.body.classNameList.add('dark');
// 	} else {
// 		document.body.classNameList.remove('dark');
// 	}
// })
// menuBar.addEventListener('click', function () {
// 	sidebar.classNameList.toggle('hide');
// }
  return (
    <div>
    <Sidebar />
    <section id="content">
    <Navbar />
     {/* MAIN  */}
      <main>
        <div className="head-title">
          <div className="left">
            <h1>Dashboard</h1>
            <ul className="breadcrumb">
              <li>
                <a href="#">Dashboard</a>
              </li>
              <li>{/*<i className="bx bx-chevron-right"></i> */}</li>
              <li>
                <a className="active" href="#">Home</a>
              </li>
            </ul>
          </div>
          <a href="#" className="btn-download">
            {/*<i className="bx bxs-cloud-download"></i> */}
             <span className="text">Download PDF</span> 
          </a>
        </div>

        <ul className="box-info">
          <li>
            {/*<i className="bx bxs-calendar-check"></i> */}
            <span className="text">
              <h3>75505</h3>
              <p>Reports</p>
            </span>
          </li>
          <li>
            {/*<i className="bx bxs-group"></i> */}
            <span className="text">
              <h3>55236</h3>
              <p>Safe Links</p>
            </span>
          </li>
          <li>
            {/*<i className="bx bxs-dollar-circle"></i> */}
            <span className="text">
              <h3>20269</h3>
              <p>Malicious Links</p>
            </span>
          </li>
        </ul>

        <div className="table-data">
          <div className="order">
            <div className="head">
              <h3>Past History</h3>
              {/*<i className="bx bx-search"></i> */}
              {/*<i className="bx bx-filter"></i> */}
            </div>
            <table>
              <thead>
                <tr>
                  <th>Link</th>
                  <th>Date Order</th>
                  <th>Status</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>
                     <img src="img/people.png" /> 
                    <p>url#1</p>
                  </td>
                  <td>19-10-2022</td>
                  <td><span className="status process">Safe</span></td>
                </tr>
                <tr>
                  <td>
                     <img src="img/people.png" /> 
                    <p>url#2</p>
                  </td>
                  <td>27-03-2023</td>
                  <td><span className="status pending">Unsafe</span></td>
                </tr>
                <tr>
                  <td>
                     <img src="img/people.png" /> 
                    <p>url#3</p>
                  </td>
                  <td>05-04-2023</td>
                  <td><span className="status process">Safe</span></td>
                </tr>
                <tr>
                  <td>
                     <img src="img/people.png" /> 
                    <p>url#4</p>
                  </td>
                  <td>15-02-2023</td>
                  <td><span className="status pending">Unsafe</span></td>
                </tr>
                <tr>
                  <td>
                     <img src="img/people.png" /> 
                    <p>url#5</p>
                  </td>
                  <td>01-10-2021</td>
                  <td><span className="status process">Safe</span></td>
                </tr>
              </tbody>
            </table>
          </div>
          <div className="todo">
            <div className="head">
              <h3>Todos</h3>
              {/*<i className="bx bx-plus"></i> */}
              {/*<i className="bx bx-filter"></i> */}
            </div>
            <ul className="todo-list">
              <li className="completed">
                <p>Todo List</p>
                {/*<i className="bx bx-dots-vertical-rounded"></i> */}
              </li>
              <li className="completed">
                <p>Todo List</p>
                {/*<i className="bx bx-dots-vertical-rounded"></i> */}
              </li>
              <li className="not-completed">
                <p>Todo List</p>
                {/*<i className="bx bx-dots-vertical-rounded"></i> */}
              </li>
              <li className="completed">
                <p>Todo List</p>
                {/*<i className="bx bx-dots-vertical-rounded"></i> */}
              </li>
              <li className="not-completed">
                <p>Todo List</p>
                {/*<i className="bx bx-dots-vertical-rounded"></i> */}
              </li>
            </ul>
          </div>
        </div>
      </main>
      {/*  MAIN  */}
    </section>
    </div>
  )
}
