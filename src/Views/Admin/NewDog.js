import React from 'react';
import { useHistory } from 'react-router-dom';
import { useState } from 'react';
import DogForm from '../../Components/DogForm/DogForm';
import { addANewDog } from '../../services/dogs';
import './NewDog.css';

export default function NewDog() {
  const [dog, setDog] = useState({ name: '', age: '', breed: '', bio: '', image: '' });
  const [error, setError] = useState('');
  const [success, setSuccess] = useState('');
  const history = useHistory();
  // useEffect(() => {
  //   const fetchData = async () => {
  //     const data = await addANewDog(dog);
  //     console.log('adding a dog', data);
  //   };
  //   fetchData();
  // }, [dog]);

  // setTimeout(() => {

  // }, 2000); 
  const handleSubmit = async () => {
    try {
      await addANewDog(dog);
      setSuccess(true);
      setTimeout(() => {
        history.push('/');
      }, 2000);
    } catch (e) {
      setError('something went wrong');
      setTimeout(() => {
        setError('');
      }, 2000);
    }
  };

  return (
    <div>
      {error && <p className='error'>{error}</p>}
      {success && <h3 className='success'>{`Success adding ${dog.name}!`}</h3>}
      <h1>Add a Dog!</h1>
      <DogForm {...{ dog, setDog, handleSubmit }} />
    </div>
  );
}
