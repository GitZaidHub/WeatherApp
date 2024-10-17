import React, { useState } from "react";
import { AsyncPaginate } from "react-select-async-paginate";
import { GEO_API_URL, Geooption } from "../api/api";

const Search = ({ onSearchChange }) => {
  const [search, setSearch] = useState(null);

  const handleChange = (searchData) => {
    setSearch(searchData);
    onSearchChange(searchData);
  };

  const loadOptions = async (inputs) => {
    try {
      const response = await fetch(
        `${GEO_API_URL}/cities?namePrefix=${inputs}`,
        Geooption
      );
      const result = await response.json();
      return {
       options:result.data.map((city)=>({
        value:`${city.latitude} ${city.longitude}`,
        label:`${city.name} ${city.countryCode}`
       }))
      }
    } catch (error) {
      console.error(error);
    }
  };
  

  return (
    <>
    <div className="max-w-[1080px] mx-auto text-black ">
    <AsyncPaginate 
      placeholder="Enter city"
      debounceTimeout={600}
      value={search}
      loadOptions={loadOptions}
      onChange={handleChange}
    />
    </div>
    </>
  );
};

export default Search;
