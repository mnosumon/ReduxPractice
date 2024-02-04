import React from 'react'
import { NavLink } from 'react-router-dom'

const Navbar = () => {
  return (
    <section>
      <div className="max-w-container mx-auto">
        <div className="flex justify-between bg-slate-400 items-center">
          <div className="">
            <h2 className='text-[48px] '>Nuruddin</h2>
          </div>
          <div className="">
            <ul className='flex gap-5'>
              <li>
                <NavLink className="py-4 px-6 inline-block" to="/">home</NavLink>
              </li>
              <li>
                <NavLink className="py-4 px-6 inline-block" to="/contact">Contact</NavLink>
              </li>
              <li>
                <NavLink className="py-4 px-6 inline-block" to="/about">about</NavLink>
              </li>
              <li>
                <NavLink className="py-4 px-6 inline-block" to="/learn">learn</NavLink>
              </li>
              <li>
                <NavLink className="py-4 px-6 inline-block" to="/adds">adds</NavLink>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Navbar