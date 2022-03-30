import React from 'react';
import { Link } from 'react-router-dom';
import { useState } from 'react';
import { deleteDogById } from '../../services/dogs';
import { useHistory } from 'react-router-dom';

export default function DogDetail({ dog }) {
  const { name, bio, image, breed, age, id } = { ...dog };
  const [error, setError] = useState('');

  const history = useHistory();

  const handleDelete = async () => {
    try {
      await deleteDogById(id);
      history.push('/');
    } catch {
      setError('There was an error removing this dog.');
    }

  };
  return (
    <div>
      {error && <p>{error}</p>}
      <h2>{name}</h2>
      <img src={image} />
      <h3>{`Breed: ${breed}`}</h3>
      <h3>{`Age: ${age}`}</h3>
      <p>{bio}</p>
      <div className='buttons'>
        <Link to={`/dogs/${id}/edit`}>Edit</Link>
        <p onClick={() => handleDelete()}>Delete</p>
      </div>
    </div>
  );
}
