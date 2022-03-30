import React from 'react';
import { Link } from 'react-router-dom';

export default function DogDetail({ dog }) {
  const { name, bio, image, breed, age, id } = { ...dog };
  return (
    <div>
      <h2>{name}</h2>
      <img src={image} />
      <h3>{`Breed: ${breed}`}</h3>
      <h3>{`Age: ${age}`}</h3>
      <p>{bio}</p>
      <div className='buttons'>
        <Link to={`/dogs/${id}/edit`}>Edit</Link>
      </div>
    </div>
  );
}
