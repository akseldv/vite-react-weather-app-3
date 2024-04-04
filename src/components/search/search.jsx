import React, { useState, useEffect } from "react";
import AsyncSelect from 'react-select/async'

import { GEO_API_URL, geoApiOptions } from '../../apis/api1';

const Search = ({ onSearchChange }) => {

    // const options = [
    //     { value: 'chocolate', label: 'Chocolate' },
    //     { value: 'strawberry', label: 'Strawberry' },
    //     { value: 'vanilla', label: 'Vanilla' }
    //     ]


        const [search, setSearch] = useState(null);

        // useEffect(() => { console.log(search) }, [search])

        const handleChange = (selectedOption) => {

            setSearch(selectedOption);
            onSearchChange(selectedOption);

            // console.log("handleChange", selectedOption);

        }

        const loadOptions = (searchValue, callback) => {

        // console.log(searchValue);

        // setTimeout(() => {

        return fetch(`${GEO_API_URL}/cities?minPopulation=1000000&namePrefix=${searchValue}`, geoApiOptions
    
        ).then((response) => response.json())
         .then((response) => {

            let options = response.data.map((city) => {
    
              return {
    
                  value : `${city.latitude} ${city.longitude}`,
                  label : `${city.name}  ${city.countryCode}`
    
                  }
            })

            // console.log(response);
            callback(options)
          
    
         }).catch((err) => console.log(err))

        
        // }, 2000)
        }

        



  return (
    
    <AsyncSelect 
    
    loadOptions={loadOptions} 
    onChange={handleChange}
    
    />

  )
}

export default Search