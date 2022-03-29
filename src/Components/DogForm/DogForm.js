import React from 'react';
import { useState } from 'react/cjs/react.development';

export default function DogForm({ dog, setDog }) {
  const [tempDog, setTempDog] = useState({ 'name': dog.name, 'age': dog.age, 'bio': dog.bio, 'breed': dog.breed, 'image': dog.image });
  const updateDog = (attribute, value) => {
    const modDog = { ...tempDog, [attribute]: value };
    setTempDog(modDog);
  };

  return (
    <div>
      <label>
        Name:
        <input value={dog.name} type='text' onChange={(e) => updateDog('name', e.target.value)}></input>
      </label>
      <label>
        Breed:
        <input type='text' onChange={(e) => updateDog('breed', e.target.value)}></input>
      </label>
      <label>
        Bio:
        <input type='text' onChange={(e) => updateDog('bio', e.target.value)}></input>
      </label>
      <label>
        Image Location:
        <input type='text' onChange={(e) => updateDog('image', e.target.value)}></input>
      </label>
      <label>
        Age:
        <input type='number' onChange={(e) => updateDog('age', e.target.value)}></input>
      </label>
      <button onClick={setDog(tempDog)}>Save</button>

    </div>
  );
}
