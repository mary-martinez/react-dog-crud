import React from 'react';
import { useHistory } from 'react-router-dom';
import { useState } from 'react/cjs/react.development';
import DogForm from '../../Components/DogForm/DogForm';
import { addANewDog } from '../../services/dogs';

export default function NewDog() {
  const [dog, setDog] = useState({ name: '', age: null, breed: '', bio: '', image: '' });
  const [error, setError] = useState('');
  const history = useHistory();
  // useEffect(() => {
  //   const fetchData = async () => {
  //     const data = await addANewDog(dog);
  //     console.log('adding a dog', data);
  //   };
  //   fetchData();
  // }, [dog]);

  const handleSubmit = async () => {
    try {
      await addANewDog(dog);
      history.push('/');
    } catch (e) {
      setError('something went wrong');
    }
  };

  return (
    <div>
      {error && <p>{error}</p>}
      <h1>Add a Dog!</h1>
      <DogForm {...{ dog, setDog, handleSubmit }} />
    </div>
  );
}
