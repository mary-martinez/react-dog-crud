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

  useEffect(() => {
    try {
      const fetchData = async () => {
        const data = await fetchDogById(params.id);
        setDog(data);
      };
      fetchData();
    } catch (e) {
      setError(e);
    }
  }, [params.id]);

  const handleSubmit = async () => {
    await editDogById(dog, params.id);
    history.push(`/dogs/${params.id}`);
  };

  return (
    <div>
      {error && <p>{`We're experiencing an error with ${error}`}</p>}
      <DogForm {...{ dog, setDog, handleSubmit }} />
    </div>
  );
}
