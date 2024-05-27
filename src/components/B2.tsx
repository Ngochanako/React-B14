import React from 'react'
import './style.css'
export default function B2() {
  return (
    <div className=''>
      {/* Bắt đầu nav */}
        <nav className='flex justify-between w-[100%] bg-black text-white py-2  px-[50px]'>
          <ul className='flex gap-3'>
            <li className='flex gap-1 items-center p-[5px]'>
            <i className='bx bxs-home-alt-2'></i>
            <div>Home</div>
            </li>
            <li className='flex gap-1 items-center p-[5px]'>
            <i className='bx bx-menu'></i>
            <div>Content</div>
            </li>
            <li className='flex gap-1 items-center p-[5px]'>
            <i className='bx bx-menu'></i>
            <div>Categories</div>
            </li>
            <li className='flex gap-1 items-center p-[5px]'>
            <i className='bx bxs-cog'></i>
            <div>Settings</div>
            </li>
          </ul>
          <ul>
            <li className='bg-white rounded-2xl p-1 text-black'>Admin</li>
          </ul>
        </nav>
        {/* Kết thúc nav */}

       <div className='flex'>
          {/* Start Header-Left */}
          <header className='w-[20%] bg-slate-950 text-white'>
              <div className='flex justify-between p-1 items-center'>
                  <div className='flex gap-1 items-center' >
                  <i className='bx bxs-dashboard'></i>
                   <p>Dasboard</p>
                  </div>
                  <div><i className='bx bx-chevron-down bx-sm bx-fade-down-hover'></i></div>
              </div>
              <div className='flex justify-between p-1 items-center'>
                  <div className='flex gap-1 items-center' >
                  <i className='bx bxs-dashboard'></i>
                   <p>Dasboard</p>
                  </div>
                  <div><i className='bx bx-chevron-down bx-sm bx-fade-down-hover'></i></div>
              </div>
              <div className='flex justify-between p-1 items-center'>
                  <div className='flex gap-1 items-center' >
                  <i className='bx bxs-dashboard'></i>
                   <p>Dasboard</p>
                  </div>
                  <div><i className='bx bx-chevron-down bx-sm bx-fade-down-hover'></i></div>
              </div>
              <div className='flex justify-between p-1 items-center'>
                  <div className='flex gap-1 items-center' >
                  <i className='bx bxs-dashboard'></i>
                   <p>Dasboard</p>
                  </div>
                  <div><i className='bx bx-chevron-down bx-sm bx-fade-down-hover'></i></div>
              </div>
              <div className='flex justify-between p-1 items-center'>
                  <div className='flex gap-1 items-center' >
                  <i className='bx bxs-dashboard'></i>
                   <p>Dasboard</p>
                  </div>
                  <div><i className='bx bx-chevron-down bx-sm bx-fade-down-hover'></i></div>
              </div>
              <div className='flex justify-between p-1 items-center'>
                  <div className='flex gap-1 items-center' >
                  <i className='bx bxs-dashboard'></i>
                   <p>Dasboard</p>
                  </div>
                  <div><i className='bx bx-chevron-down bx-sm bx-fade-down-hover'></i></div>
              </div>
          </header>
          {/* dgg */}
        </div> 
    </div>
  )
}
