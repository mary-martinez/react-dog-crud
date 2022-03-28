import React from 'react';
import { useEffect, useState } from 'react/cjs/react.development';
import DogList from '../../Components/DogList/DogList';
import { fetchDogs } from '../../services/dogs';

export default function Home() {
  // dogs object
  const [dogs, setDogs] = useState([]);
  //useEffect hook to fetch dogs
  useEffect(() => {
    try {
      const fetchData = async () => {
        const data = await fetchDogs();
        setDogs(data);
      };
      fetchData();
    } catch (e) {
      console.error(e);
    }
  }, []);
  console.log('dogs', dogs);
  return (
    <div>
      <h1>Checkout Our Dogs</h1>
      <h3>Click an image to learn more about that dog.</h3>
      <DogList {...{ dogs }} />
    </div>
  );
}
