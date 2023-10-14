import React from 'react'

export default function Secondsection() {
  return (
   <>
   <div className="w-2nd p-2">
   <div className="bg-light p-2 rounded-3 d-flex align-item-center flex-column">
    <p className="text-dark position-relative w-100 fw-bold">Add to your feed <i class="bi bi-1-circle-fill position-absolute end-0"></i></p>

    <div className="d-flex">
<div className="col-3">
<img src="user-1.png" alt=""  width={40}/>
</div>
        <div className='col-9'>
            <p className="text-dark fw-bold mx-1 p-side">Serena</p>
            <p className="text-secondary mx-1 p-side">Sales Executive | Good.. </p>
            <p className="text-secondary mx-1 p-side">Sales Executive | Good..</p>
            <button className='btn btn-outline-dark rounded-pill px-4 my-2'><i class="bi bi-plus"></i> Follow</button>
        </div>
        </div>
    <div className="d-flex">
<div className="col-3">
<img src="user-2.png" alt=""  width={40}/>
</div>
        <div className='col-9'>
            <p className="text-dark fw-bold mx-1 p-side">Dania</p>
            <p className="text-secondary mx-1 p-side">Construction | Engin.. </p>
            <p className="text-secondary mx-1 p-side">Construction | Engin..</p>
            <button className='btn btn-outline-dark rounded-pill px-4 my-2'><i class="bi bi-plus"></i> Follow</button>
        </div>
        </div>
    <div className="d-flex">
<div className="col-3">
<img src="user-3.png" alt=""  width={40}/>
</div>
        <div className='col-9'>
            <p className="text-dark fw-bold mx-1 p-side">David</p>
            <p className="text-secondary mx-1 p-side">Ceo at Abc | Comp.. </p>
            <p className="text-secondary mx-1 p-side">Ceo at Abc | Comp..</p>
            <button className='btn btn-outline-dark rounded-pill px-4 my-2'><i class="bi bi-plus"></i> Follow</button>
        </div>
        </div>
   </div>
<div className="d-flex flex-column position-sticky top-0">  
 <img src="Side-post.png" alt="" className="w-100 rounded-3 my-2" />
 <div className="d-flex text-secondary justify-content-center mt-2"><span className="mx-2 p-sp">About</span><span className="mx-2 p-sp">Accessability</span><span className="mx-2 p-sp">Help center</span></div>
 <div className="d-flex text-secondary justify-content-center mt-1"><span className="mx-2 p-sp">Privacy & terms</span><span className="mx-2 p-sp">Ad Choices</span></div>
 <div className="d-flex text-secondary justify-content-center mt-1"><span className="mx-2 p-sp">Advertising</span><span className="mx-2 p-sp">Business Services</span></div>
 <div className="d-flex text-secondary justify-content-center mt-1"><span className="mx-2 p-sp">Get the LinkdIn app</span><span className="mx-2 p-sp">More</span></div>
 <span className='p-sp mx-auto my-3'><img src="linked-logo.png" alt=""  width={20} /> LinkedIn Corporation&copy; 2018</span>
 </div>
   </div>
   </>
  )
}
