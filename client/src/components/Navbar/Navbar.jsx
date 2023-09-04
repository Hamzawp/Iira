import React from 'react'
import './Navbar.css'

export default function Navbar() {
  return (
    //  NAVBAR 
    <nav>
    <i class="bx bx-menu"></i>
     <a href="#" class="nav-link">Categories</a> 
    <form action="#">
      <div class="form-input">
        <input type="search" placeholder="Search..." />
        <button type="submit" class="search-btn">
          <i class="bx bx-search"></i>
        </button>
      </div>
    </form>
    <input type="checkbox" id="switch-mode" hidden />
    <label for="switch-mode" class="switch-mode"></label>
    <a href="#" class="notification">
      <i class="bx bxs-bell"></i>
      <span class="num">5</span>
    </a>
    <a href="#" class="profile">
      <img src="img/people.png" />
    </a>
  </nav>
//    NAVBAR 
  )
}
