import React, { useState ,useContext  } from 'react'
import { useLocation } from 'react-router-dom';
import { Link } from 'react-router-dom'
import { SearchContext } from './Search';


const Navbar = () => {
  const { pathname } = useLocation();
  let [input, setInput] = useState("");
 let {q}= useContext(SearchContext);
 let {setQuery} = q;
  console.log(pathname)

  let handleClick = () => {
    setQuery(input);
    setInput("");
  }

  let withsearch = 'form-control flex flex-row justify-end bg-base-100  border-none';
  let withOutSearch = 'hidden'
    console.log("Navbar")
  return (

    <div>
      <div className="navbar bg-base-100 text-white">
        <div className="flex-1">
          <Link className="btn btn-ghost text-xl text-white" to="/" >Movie App </Link>
          <Link className="btn btn-ghost text-xl text-white" to="/favourite"> Favourite  </Link>
        </div>
        <div className="flex gap-2 w-2/5">
          <div className={pathname=='/' ? withsearch : withOutSearch}  >
            <input onChange={(e) => setInput(e.target.value)} value={input} type="text" className="input input-bordered w-2/5  text-2xl bg-white" />
            <button onClick={handleClick} className="btn btn-active btn-primary w-1/6 ml-3 text-xl">Search</button>
          </div>

        </div>
      </div>

    </div>
  )
}

export default Navbar