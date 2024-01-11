import React from 'react'
import { createContext , useState } from 'react';

export const SearchContext = createContext();

const Search = ({children}) => {
  let [query , setQuery] = useState("");
  return (
   <SearchContext.Provider value={{query , setQuery}}>{children}</SearchContext.Provider>
  )
}

export default Search