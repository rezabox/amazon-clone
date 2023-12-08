import React from "react";
import { BiSearch } from 'react-icons/bi';

const Search = ({ value, onChange }) => {
   return(
      <>
        <div className="search flex grow p-3">
          <BiSearch size={40} className="bg-red-300 cursor-pointer" />
          <input type="text" className="text-black w-[100%] p-5" placeholder="Search by name" value={value} onChange={onChange}/>
        </div>
      </>
   )
}
export default Search;