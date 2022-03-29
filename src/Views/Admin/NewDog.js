import React from 'react';
import { useEffect, useState } from 'react/cjs/react.development';
import DogForm from '../../Components/DogForm/DogForm';
import { addANewDog } from '../../services/dogs';

export default function NewDog() {
  const [dog, setDog] = useState({ name: '', age: null, breed: '', bio: '', image: '' });

  useEffect(() => {
    const fetchData = async () => {
      const data = await addANewDog(dog);
      console.log('adding a dog', data);
    };
    fetchData();
  }, [dog]);

  return (
    <div>
      <h1>Add a Dog!</h1>
      <DogForm {...{ dog, setDog }} />
    </div>
  );
}
