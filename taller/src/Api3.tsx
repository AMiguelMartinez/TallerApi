import React from 'react';
import { useEffect } from 'react';
import { useState} from 'react';
import './Api.css';

interface DB {
    name: string;
    region: string;
    population: number;
    flags: string;
}

const Api2: React.FC = () => {
const [country, setCountry] = useState<DB[]>([]);

useEffect(() => {
    fetch('https://restcountries.com/v3.1/all')
      .then(res => res.json())
      .then(data => {
        const selectedIndexes = [0, 1, 2, 3, 4, 5]; 
        
        const selectedCharacters2 = selectedIndexes.map(index => ({
          name: data[index].name.common,
          region: data[index].region,
          population: data[index].population,
          flags: data[index].flags.png,

        }));

        setCountry(selectedCharacters2);
      });
  }, []);

    


    return (
        <div>
<h1>Api de paises</h1>
        <div className="cards-container" >
         

            {country.map((Country) => (
                <div className="card">
            <h1>{Country.name}</h1>
            <img src={Country.flags} alt={Country.name} />
            <p>{Country.region}</p>
            <p>Población: {Country.population}</p>

            </div>
            ))}
     
    </div>
    </div>
    );




}

export default Api2;