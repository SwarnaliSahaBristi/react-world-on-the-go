import React, { use, useState } from 'react';
import Country from '../Country/Country';
import './Countries.css'

const Countries = ({countryPromise}) => {
    const [visitedCountries, setVisitedCountries] = useState([])
    const [visitedFlag, setVisitedFlag] = useState([])
    const handleVisitedCountries = (country) =>{
        console.log("visited country clicked", country)
        const newVisitedCountries = [...visitedCountries, country]
        setVisitedCountries(newVisitedCountries)
    }
    const handleVisitedFlag = (flag) =>{
        const newVisitedFlag = [...visitedFlag, flag]
        setVisitedFlag(newVisitedFlag)
    }

    const countriesData = use(countryPromise)
    const countries = countriesData.countries
    // console.log(countries)
    return (
        <div>
             <h1>Our Visited countries: {countries.length}</h1>  
             <h2>Total Visited Country: {visitedCountries.length}</h2>
             <h2>Total Visited Flag: {visitedFlag.length}</h2>
             
             <ol>
                {
                    visitedCountries.map(country => <li
                    key={country.cca3.cca3}>{country.name.common}</li>)
                }
             </ol>
             <div className='visited-flag-container'>
                {
                    visitedFlag.map((flag, index)=> <img key={index} src={flag}></img>)
                }
             </div>
             <div className='countries'>
                {
               countries.map(country => <Country 
                key={country.cca3.cca3}
                country={country}
                handleVisitedCountries={handleVisitedCountries}
                handleVisitedFlag={handleVisitedFlag}
                ></Country>)
             } 
             </div>
        </div>
    );
};

export default Countries;