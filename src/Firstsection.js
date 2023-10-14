import React from 'react'

export default function Firstsection() {
  return (
    <div className="w-1st">
      <div className='bg-light  rounded-3 m-2 pb-3'>
<div className="d-flex flex-column align-item-center justify-content-center bg-light position-relative ">
 
  <img src="slide2.jpeg" alt="" className="w-100 rounded-top-3 h-cover" />
  <img src="profile.jpg" alt="" className="position-absolute rounded-circle border border-light border-3 p-pro" width={60} />

<h5 className='text-center mt-5'>noman lodhi</h5>
<p className="text-center text-secondary border border-secondary border-top-0 border-end-0 border-start-0 border-bottom-1 pb-3  ">Attended Govt. degree boys college karachi</p>
<div className='position-relative p-2'>
<span className="text-secondary">Connections</span>
<p>Grow your network</p>
<span className="position-absolute px-2 text-primary end-0 top-0">50</span>
</div>
<div className='position-relative p-2'>
<span className="text-secondary">Who's viewed your profile</span>
<span className="position-absolute px-2 text-primary end-0 top-10">24</span>
</div>
</div>
    </div>
    <div className='bg-light py-3 rounded-3 m-2 pb-3'>
     <div className="border border-secondary border-top-0 border-end-0 border-start-0 ">
     <p className="text-primary fw-bold p-2">Groups</p>
     <p className="text-dark p-2"><i class="bi bi-people-fill"></i> Front-end Development React </p>
     <p className="text-dark p-2"><i class="bi bi-people-fill"></i> Coding Journies </p>
     <p className="text-dark p-2"><i class="bi bi-people-fill"></i> Job Communities </p>
     <p className="text-secondary p-2">Recent</p>
     <p className="text-dark p-2"><i class="bi bi-people-fill"></i> Front-end Development React </p>
     <p className="text-dark p-2"><i class="bi bi-people-fill"></i> Coding Journies </p>
     <p className="text-dark p-2"><i class="bi bi-people-fill"></i> Job Communities </p>
     <p className="text-secondary p-2">Show more <i class="bi bi-caret-down-fill"></i> </p>
    
    <p className="text-primary fw-bold p-2 position-relative">Events <i class="bi bi-plus text-dark position-absolute end-0 fs-4 pb-5 px-2"></i></p>
    <p className="text-primary fw-bold p-2 position-relative">Followed Hashtags</p>
     </div>
      <div className="text-center text-secondary fw-bold p-3">Dicover More</div>

    </div>
    </div>
  )
}
