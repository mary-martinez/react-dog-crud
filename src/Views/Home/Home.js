import React from 'react';
import { useEffect, useState } from 'react';
import DogList from '../../Components/DogList/DogList';
import { fetchDogs } from '../../services/dogs';

export default function Home() {
  const [dogs, setDogs] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState('');
  useEffect(() => {
    try {
      const fetchData = async () => {
        const data = await fetchDogs();
        setDogs(data);
        setLoading(false);
      };
      fetchData();
    } catch (e) {
      setError('there was an error');
    }
  }, []);
  if (loading) return (<h3>loading...</h3>);
  return (
    <div>
      {error && <p>{error}</p>}
      <h1>Checkout Our Dogs</h1>
      <h3>Click an image to learn more about that dog.</h3>
      <DogList {...{ dogs }} />
    </div>
  );
}
