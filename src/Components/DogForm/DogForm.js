import React from 'react';
import { useState } from 'react/cjs/react.development';

export default function DogForm({ dog, setDog, handleSubmit }) {
  const updateDog = (attribute, value) => {
    const modDog = { ...dog, [attribute]: value };
    setDog(modDog);
  };

  return (
    <div>
      <label>
        Name:
        <input value={dog.name} type='text' onChange={(e) => updateDog('name', e.target.value)}></input>
      </label>
      <label>
        Breed:
        <input value={dog.breed} type='text' onChange={(e) => updateDog('breed', e.target.value)}></input>
      </label>
      <label>
        Bio:
        <input value={dog.bio} type='text' onChange={(e) => updateDog('bio', e.target.value)}></input>
      </label>
      <label>
        Image Location:
        <input value={dog.image} type='text' onChange={(e) => updateDog('image', e.target.value)}></input>
      </label>
      <label>
        Age:
        <input value={dog.age} type='number' onChange={(e) => updateDog('age', e.target.value)}></input>
      </label>
      <button onClick={handleSubmit}>Save</button>

    </div>
  );
}
