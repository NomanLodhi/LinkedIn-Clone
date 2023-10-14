import React from 'react'

export default function Navbar() {
  return (
    <>
      <nav className="navbar navbar-expand-lg bg-body-tertiary h-auto sticky-top">
  <div className="container">
    <a className="navbar-brand" href="#">  <img src="/linked-logo.png" alt="Logo" width="30" height="30"/></a>
    <form className="d-flex" role="search">
        <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search"/>
      </form>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse position-relative w-75" id="navbarSupportedContent">
    <ul className="nav nav-underline position-absolute end-0 bg-light">
  <li className="nav-item mx-2">
    <a className="nav-link active d-flex flex-column align-item-center justify-content-center" aria-current="page" href="#"><i class="bi bi-house-door-fill text-center"></i>Home</a>
  </li>
  <li className="nav-item mx-2">
    <a className="nav-link d-flex flex-column align-item-center justify-content-center text-secondary " href="#"><i class="bi bi-people-fill text-center"></i>My Network</a>
  </li>
  <li className="nav-item mx-2">
    <a className="nav-link d-flex flex-column text-secondary align-item-center justify-content-center" href="#"><i class="bi bi-briefcase-fill text-center "></i>Jobs</a>
  </li>
  <li className="nav-item mx-2">
    <a className="nav-link text-secondary d-flex flex-column align-item-center justify-content-center"><i class="bi bi-chat-left-dots-fill text-center"></i>Messages</a>
  </li>
  <li className="nav-item mx-2">
    <a className="nav-link text-secondary d-flex flex-column align-item-center justify-content-center"><i class="bi bi-bell-fill text-center"></i>Notifications</a>
  </li>
  <li className="nav-item mx-2">
    <a className="nav-link d-flex flex-column align-item-center justify-content-center text-secondary">
      <img src="profile.jpg" alt="" className="rounded-circle" width={25} />
      <span>Me<i class="bi bi-caret-down-fill"></i></span></a>
  </li>
</ul>
    </div>
    <ul class="nav w-2 justify-content-end border border-secondary border-top-0 border-end-0 border-bottom-0">
  <li class="nav-item text-center">
    <a class="nav-link p-0 mx-2 link-clr d-flex flex-column align-item-center justify-content-center" aria-current="page" href="#"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" data-supported-dps="24x24" fill="currentColor" class="mercado-match" width="24" height="24" focusable="false">
      <path d="M3 3h4v4H3zm7 4h4V3h-4zm7-4v4h4V3zM3 14h4v-4H3zm7 0h4v-4h-4zm7 0h4v-4h-4zM3 21h4v-4H3zm7 0h4v-4h-4zm7 0h4v-4h-4z"></path>
    </svg><span className='p-span'>Business<i class="bi bi-caret-down-fill"></i></span></a>
  </li>
  <li class="nav-item text-center">
    <a class="nav-link p-0 mx-2 link-clr d-flex flex-column align-item-center justify-content-center" href="#"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" data-supported-dps="24x24" fill="currentColor" width="24" height="24" focusable="false">
      <circle cx="12" cy="4" r="2"  opacity=".75"></circle>
      <path d="M21 10H3a1 1 0 00-1 1v10a1 1 0 001 1h18a1 1 0 001-1V11a1 1 0 00-1-1zm-5 9H8v-2h8v2zm2-4H6v-2h12v2z"></path>
      <g opacity=".6">
        <path d="M9.57 5.75l-2.41 4.83 1.68.84 2.28-4.57a3 3 0 01-1.55-1.1zM14.43 5.75a3 3 0 01-1.55 1.1l2.28 4.57 1.68-.84z"  opacity=".55"></path>
      </g>
    </svg><span className="p-span">Post a job for free</span></a>
  </li>
  
</ul>
       
  </div>
</nav>
    </>
  )
}
