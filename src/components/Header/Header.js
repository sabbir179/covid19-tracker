import React, { useState, useEffect } from 'react';
import { MenuItem, FormControl, Select } from '@material-ui/core';
import './Header.css'
const Header = () => {
    const [countries, setCountries] = useState([]);
    const [country, setCountry] = useState('worldwide');

useEffect(() => {
   
    const getCountriesData = async () => {
        await fetch("https://disease.sh/v3/covid-19/countries")
        .then(res => res.json())
        .then(data => {
          const countries = data.map((country) => (
              {
                  name: country.country,
                  value: country.countryInfo.iso2 // UK, Bangladesh, Canada
              }
          ));
              setCountries(countries);
        });
    };
    getCountriesData();
}, []);


const onCountryChange = (event) => {
    const countryCode = event.target.value;

    // console.log("yessee", countryCode);
    setCountry(countryCode);
}

    return (
        <div className="app_header">
            <h1>Covid - 19 tracker</h1>
      
            <FormControl className="app_dropdown">
                <Select variant="outlined" onChange={onCountryChange} value ={country} >
                   
                <MenuItem value="worldwide" > Worldwide </MenuItem>

                    {
                        countries.map(country => (
                            <MenuItem value={country.value} >{country.name} </MenuItem>
                        ))
                    }
                    
                </Select>

            </FormControl>
        </div>
    );
};

export default Header;