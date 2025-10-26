import React, { useState } from 'react';
import './Country.css'

const Country = ({country, handleVisitedCountries, handleVisitedFlag}) => {
    // console.log(country.area.area)
    
    const [visited, setVisited] = useState(false)
    const handleVisited = () =>{

        // ---conditional way-----
        // if(visited){
        //     setVisited(false)
        // }else{
        //     setVisited(true)
        // }

        // ------ternary way------
        // setVisited(visited ? false : true);

        // ----toggle way------
        setVisited(!visited);
        handleVisitedCountries(country)
    }
    return (

        // --------1st way--------
        // <div className={`country ${visited ? 'country-visited' : 'country-not-visited'}`}>

        // ---------2nd way---------
        <div className={`country ${visited && 'country-visited'}`}>
            <img src={country.flags.flags.png} alt={country.flags.flags.alt} />
            <h3>Name: {country.name.common}</h3>
            <p>Capital: {country.capital.capital}</p>
            <p>Population: {country.population.population}</p>
            <p>Region: {country.region.region}</p>
            <p>Area: {country.area.area} {country.area.area > 300000 ? "Big Country" : "Small Country"}</p>
            <button onClick={handleVisited}> {visited ? "Visited" : "Not Visited"}</button>
            <button onClick={() => {handleVisitedFlag(country.flags.flags.png)}}>Add Visited Country Flag</button>
        </div>
    );
};

export default Country;