import React from 'react';
import { useEffect, useState } from 'react/cjs/react.development';
import DogList from '../../Components/DogList/DogList';
import { fetchDogs } from '../../services/dogs';

export default function Home() {
  // dogs object
  const [dogs, setDogs] = useState([]);
  const [loading, setLoading] = useState(true);
  //useEffect hook to fetch dogs
  useEffect(() => {
    try {
      const fetchData = async () => {
        const data = await fetchDogs();
        setDogs(data);
        setLoading(false);
      };
      fetchData();
    } catch (e) {
      console.error(e);
    }
  }, []);
  // console.log('dogs', dogs);
  if (loading) return (<h3>loading...</h3>);
  return (
    <div>
      <h1>Checkout Our Dogs</h1>
      <h3>Click an image to learn more about that dog.</h3>
      <DogList {...{ dogs }} />
    </div>
  );
}
