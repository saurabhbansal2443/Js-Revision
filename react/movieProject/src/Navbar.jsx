import React from 'react'

const Navbar = () => {
  return (
   <div>
   <div className="navbar bg-base-100 text-white">
  <div className="flex-1">
    <a className="btn btn-ghost text-xl text-white">Movie App </a>
    <a className="btn btn-ghost text-xl text-white"> Favourite  </a>
  </div>
  <div className="flex gap-2 w-1/5">
    <div className="form-control flex flex-row "  >
      <input type="text" placeholder="Search" className="input input-bordered w-2/3 " />
      <button className="btn btn-active btn-primary w-1/4 mx-3">Primary</button>
    </div>
   
  </div>
</div>

    </div>
  )
}

export default Navbar