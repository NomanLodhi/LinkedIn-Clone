import React from 'react'

export default function Middlesection() {
  return (
    <div className='w-middle p-2'>
     <div className="rounded-3 bg-light d-flex align-items-center justify-content-center flex-column p-2">
     <div className="d-flex align-items-center justify-content-start w-100">
     <img src="./profile.jpg" alt="" className='rounded-circle mx-3' width={50} />
        <input type="text" className='rounded-pill bg-light w-75 p-2 border border-secondary' placeholder='Start a post' />
     </div>
     <div className=" d-flex align-items-center justify-content-start w-100">
     <div className="row mx-auto my-2">
        <div className="col-4"><p className='d-flex fs-5 px-5'><i class="bi mx-2 bi-card-image color-icon-1"></i>Media</p></div>
        <div className="col-4"><p className='d-flex fs-5 px-5'><i class="bi mx-2 bi-briefcase-fill color-icon-2"></i>Job</p></div>
        <div className="col-4"><p className='d-flex fs-5 px-5'><i class="bi mx-2 bi-list-columns color-icon-3"></i>Article</p></div>
     </div>
     </div>
     </div>
      <hr className="my-3" />
      {/* Posts */}
      <div className="px-3 p-2 my-2 rounded-3 bg-light d-lex align-items-center justify-content-center flex-column">
        <div className="d-flex align-item-center w-100"><div className='position-relative'><img src="user-1.png" alt="" className='rounded-circle' width={60} /><span className="fw-bold px-2">Stephenie Charles</span><p className="p-description text-secondary">CEO A.B.C. Foundation</p></div>
        <div className="w-50 position-relative">
          <p className="text-primary position-absolute end-0 my-3 fs-5 fw-bold"><i class="bi bi-plus"></i>  Follow</p>
        </div>

        </div>
        <p className="my-2">
         Lorem ipsum dolor sit amet consectetur adipisicing elit. Velit ad deserunt minima delectus, quasi accusamus eligendi. Tempore dignissimos nemo porro.
          </p>
          <img src="Post-1.jpg" className='w-100' alt="" />
          <div class=" d-flex align-items-center justify-content-center  w-100"><div class="row  my-2"><div class="col-3"><p class="d-flex text-secondary px-4 py-2"><i class="bi bi-hand-thumbs-up text-secondary mx-1"></i> Like</p></div><div class="col-3"><p class="d-flex text-secondary px-4 py-2"><i class="bi bi-chat-dots text-secondary mx-1"></i> Comment</p></div>
          <div class="col-3"><p class="d-flex text-secondary px-4 py-2"><i class="bi bi-recycle text-secondary mx-1"></i> Repost</p></div>
          <div class="col-3"><p class="d-flex text-secondary px-4 py-2"><i class="bi bi-send-fill text-secondary mx-1"></i>Send</p></div>
          </div></div>
      </div>
      <div className="px-3 p-2 my-2 rounded-3 bg-light d-lex align-items-center justify-content-center flex-column">
        <div className="d-flex align-item-center w-100"><div className='position-relative'><img src="user-2.png" alt="" className='rounded-circle' width={60} /><span className="fw-bold px-2">Morina Phillips</span><p className="p-description text-secondary">Construction Consultant</p></div>
        <div className="w-50 position-relative">
          <p className="text-primary position-absolute end-0 my-3 fs-5 fw-bold"><i class="bi bi-plus"></i>  Follow</p>
        </div>

        </div>
        <p className="my-2">
         Lorem ipsum dolor sit amet consectetur adipisicing elit. Velit ad deserunt minima delectus, quasi accusamus eligendi. Tempore dignissimos nemo porro.
          </p>
          <img src="Post-2.jpg" className='w-100' alt="" />
          <div class=" d-flex align-items-center justify-content-center  w-100"><div class="row  my-2"><div class="col-3"><p class="d-flex text-secondary px-4 py-2"><i class="bi bi-hand-thumbs-up text-secondary mx-1"></i> Like</p></div><div class="col-3"><p class="d-flex text-secondary px-4 py-2"><i class="bi bi-chat-dots text-secondary mx-1"></i> Comment</p></div>
          <div class="col-3"><p class="d-flex text-secondary px-4 py-2"><i class="bi bi-recycle text-secondary mx-1"></i> Repost</p></div>
          <div class="col-3"><p class="d-flex text-secondary px-4 py-2"><i class="bi bi-send-fill text-secondary mx-1"></i>Send</p></div>
          </div></div>
      </div>
        <div className="px-3 p-2 my-2 rounded-3 bg-light d-lex align-items-center justify-content-center flex-column">
          <div className="d-flex align-item-center w-100"><div className='position-relative'><img src="user-3.png" alt="" className='rounded-circle' width={60} /><span className="fw-bold px-2">James Robert</span><p className="p-description text-secondary">Founder Tech Solutions</p></div>
          <div className="w-50 position-relative">
            <p className="text-primary position-absolute end-0 my-3 fs-5 fw-bold"><i class="bi bi-plus"></i>  Follow</p>
          </div>

          </div>
          <p className="my-2">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Velit ad deserunt minima delectus, quasi accusamus eligendi. Tempore dignissimos nemo porro.
            </p>
            <img src="Post-3.jpg" className='w-100' alt="" />
            <div class=" d-flex align-items-center justify-content-center  w-100"><div class="row  my-2"><div class="col-3"><p class="d-flex text-secondary px-4 py-2"><i class="bi bi-hand-thumbs-up text-secondary mx-1"></i> Like</p></div><div class="col-3"><p class="d-flex text-secondary px-4 py-2"><i class="bi bi-chat-dots text-secondary mx-1"></i> Comment</p></div>
            <div class="col-3"><p class="d-flex text-secondary px-4 py-2"><i class="bi bi-recycle text-secondary mx-1"></i> Repost</p></div>
            <div class="col-3"><p class="d-flex text-secondary px-4 py-2"><i class="bi bi-send-fill text-secondary mx-1"></i>Send</p></div>
            </div></div>
        </div>
        <div className="px-3 p-2 my-2 rounded-3 bg-light d-lex align-items-center justify-content-center flex-column">
          <div className="d-flex align-item-center w-100"><div className='position-relative'><img src="user-4.png" alt="" className='rounded-circle' width={60} /><span className="fw-bold px-2">Sara James</span><p className="p-description text-secondary">Co-founder Team Ashes</p></div>
          <div className="w-50 position-relative">
            <p className="text-primary position-absolute end-0 my-3 fs-5 fw-bold"><i class="bi bi-plus"></i>  Follow</p>
          </div>

          </div>
          <p className="my-2">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Velit ad deserunt minima delectus, quasi accusamus eligendi. Tempore dignissimos nemo porro.
            </p>
            <video src="Post-4.mp4" className='w-100' controls></video>
            <div class=" d-flex align-items-center justify-content-center  w-100"><div class="row  my-2"><div class="col-3"><p class="d-flex text-secondary px-4 py-2"><i class="bi bi-hand-thumbs-up text-secondary mx-1"></i> Like</p></div><div class="col-3"><p class="d-flex text-secondary px-4 py-2"><i class="bi bi-chat-dots text-secondary mx-1"></i> Comment</p></div>
            <div class="col-3"><p class="d-flex text-secondary px-4 py-2"><i class="bi bi-recycle text-secondary mx-1"></i> Repost</p></div>
            <div class="col-3"><p class="d-flex text-secondary px-4 py-2"><i class="bi bi-send-fill text-secondary mx-1"></i>Send</p></div>
            </div></div>
        </div>
    </div>
  )
}
