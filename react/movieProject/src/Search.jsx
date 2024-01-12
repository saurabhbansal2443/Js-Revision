import React from 'react'
import { createContext , useState } from 'react';

export const SearchContext = createContext();

const Search = ({children}) => {
  let [query , setQuery] = useState("");
  let [ogData ,setOgData] = useState([]);
  let [fav ,setFav] = useState([]);
  
  return (
   <SearchContext.Provider value={{q:{query, setQuery} , o :{ogData,setOgData} , f:{fav,setFav}}}>{children}</SearchContext.Provider>
  )
}

export default Search