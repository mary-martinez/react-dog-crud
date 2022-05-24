import React from 'react';
import { Link } from 'react-router-dom';
import './DogList.css';

export default function DogList({ dogs }) {
  return (
    <div className='dogs'>
      {dogs.map((dog) => (
        <div key={dog.id} className='dogCard'>
          <h2>{dog.name}</h2>
          <Link to={`/dogs/${dog.id}`}><img src={dog.image} /></Link>
          {/* <h3>{`Breed: ${dog.breed}`}</h3>
          <h3>{`Age: ${dog.age}`}</h3>
          <p>{dog.bio}</p> */}
          {/* <NavLink to={`/dogs/${dog.id}`}>{`Learn more about ${dog.name}`}</NavLink> */}
        </div>
      ))}
    </div>
  );
}
