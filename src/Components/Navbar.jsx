import React from 'react'
import { NavLink , Link } from 'react-router-dom'

export default function Navbar() {
  return (
    <>
    <header className="bg-white ">
<div className="mx-auto max-w-screen-xl px-4 sm:px-6 lg:px-8 ">
  <div className="flex h-16 w-full ">

    <div className=" md:gap-12 w-full">

      <div className="flex w-full jusify-end gap-4">
        <div className="sm:flex sm:gap-4 w-full justify-end flex">
          <NavLink
             className={({isActive}) => `rounded-md   px-5 py-2.5 text-sm font-medium ${isActive?`bg-teal-600 text-white`:`bg-gray-100 text-teal-600`}`}
            to="dashboard"
          >
            Dashboard
          </NavLink>

          <div className="hidden sm:flex">
            <NavLink
              className={({isActive}) => `rounded-md   px-5 py-2.5 text-sm font-medium ${isActive?`bg-teal-600 text-white`:`bg-gray-100 text-teal-600`}`}
              to="orders"
            >
              Orders
            </NavLink>
          </div>
          <div className="hidden sm:flex">
            <NavLink
              className={({isActive}) => `rounded-md   px-5 py-2.5 text-sm font-medium ${isActive?`bg-teal-600 text-white`:`bg-gray-100 text-teal-600`}`}
              to="products"
            >
              Products
            </NavLink>
          </div>
        </div>

        <div className="block md:hidden">
          <button className="rounded bg-gray-100 p-2 text-gray-600 transition hover:text-gray-600/75">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              stroke-width="2"
            >
              <path stroke-linecap="round" stroke-linejoin="round" d="M4 6h16M4 12h16M4 18h16" />
            </svg>
          </button>
        </div>
      </div>
    </div>
  </div>
</div>
</header>
  </>
  )
}
