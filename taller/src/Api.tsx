import React from 'react';
import { useEffect } from 'react';
import { useState} from 'react';
import './Api.css';

interface Props {
    name: string;
    house: string;
    ancestry: string;
    image: string;
}

const Api: React.FC = () => {
const [potter, setPotter] = useState<Props[]>([]);

useEffect(() => {
    fetch('https://hp-api.onrender.com/api/characters')
      .then(res => res.json())
      .then(data => {
        const selectedIndexes = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9]; 
        
        const selectedCharacters = selectedIndexes.map(index => ({
          name: data[index].name,
          house: data[index].house,
          image: data[index].image,
          ancestry: data[index].ancestry,
        }));

        setPotter(selectedCharacters);
      });
  }, []);

    


    return (
        <div>
<h1>Api de Harry Potter</h1>
        <div className="cards-container" >
         

            {potter.map((potte) => (
                <div className="card">
            <h1>{potte.name}</h1>
            <img src={potte.image} alt={potte.name} />
            <p>{potte.house}</p>
            <p>{potte.ancestry}</p>
            </div>
            ))}
     
    </div>
    </div>
    );




}

export default Api;