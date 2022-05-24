import React from 'react';
import { useHistory } from 'react-router-dom';
import { useParams } from 'react-router-dom';
import { useEffect, useState } from 'react';
import DogForm from '../../Components/DogForm/DogForm';
import { editDogById, fetchDogById } from '../../services/dogs';

export default function EditDog() {
  const [dog, setDog] = useState({ name: '', age: '', breed: '', bio: '', image: '', id: '' });
  const params = useParams();
  const history = useHistory();
  const [error, setError] = useState('');
  const [success, setSuccess] = useState(false);

  useEffect(() => {
    try {
      const fetchData = async () => {
        const data = await fetchDogById(params.id);
        setDog(data);
      };
      fetchData();
    } catch (e) {
      setError(`We're experiencing an error with ${e.message}`);
    }
  }, [params.id]);

  const handleSubmit = async () => {
    try {
      await editDogById(dog, params.id);
      setSuccess(true);
      setTimeout(() => {
        history.push(`/dogs/${params.id}`);
      }, 2000);
    } catch {
      setError(`There was an error editing this info for ${dog.name}. Please try again.`);
      setTimeout(() => {
        setError('');
      }, 2000);
    }
  };

  return (
    <div>
      {error && <p className='error'>{error}</p>}
      {success && <h3 className='success'>{`Success editing ${dog.name}!`}</h3>}
      <DogForm {...{ dog, setDog, handleSubmit }} />
    </div>
  );
}
