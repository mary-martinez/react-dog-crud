import React from 'react';
import './DogList.css';

export default function DogList({ dogs }) {
  return (
    <div className='dogs'>
      {dogs.map((dog) => (
        <div key={dog.id} className='dogCard'>
          <h2>{dog.name}</h2>
          <img src={dog.image} />
          <h3>{`Breed: ${dog.breed}`}</h3>
          <h3>{`Age: ${dog.age}`}</h3>
          <p>{dog.bio}</p>
        </div>
      ))}
    </div>
  );
}
