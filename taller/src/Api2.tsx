import React from 'react';
import { useEffect } from 'react';
import { useState} from 'react';
import './Api.css';

interface DB {
    name: string;
    affiliation: string;
    race: string;
    image: string;
}

const Api2: React.FC = () => {
const [db, setDb] = useState<DB[]>([]);

useEffect(() => {
    fetch('https://dragonball-api.com/api/characters')
      .then(res => res.json())
      .then(data => {
        const selectedIndexes = [0, 1, 2, 3, 4, 5]; 
        
        const selectedCharacters2 = selectedIndexes.map(index => ({
          name: data.items[index].name,
          affiliation: data.items[index].affiliation,
          race: data.items[index].race,
          image: data.items[index].image,
        }));

        setDb(selectedCharacters2);
      });
  }, []);

    


    return (
        <div>
<h1>Api de Dragon Ball</h1>
        <div className="cards-container" >
         

            {db.map((DragonB) => (
                <div className="card">
            <h1>{DragonB.name}</h1>
            <img src={DragonB.image} alt={DragonB.name} width="200" height="200"/>
            <p>{DragonB.affiliation}</p>
            <p>{DragonB.race}</p>
            </div>
            ))}
     
    </div>
    </div>
    );




}

export default Api2;