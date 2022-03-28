import React from 'react';
import { useParams } from 'react-router-dom';
import { useEffect, useState } from 'react/cjs/react.development';
import DogDetail from '../../Components/DogDetail/DogDetail';
import { fetchDogById } from '../../services/dogs';

export default function DogDetailView() {
  const params = useParams();
  const dogId = params.id;
  const [dog, setDog] = useState({});

  //useEffect to fetchDogById when the dogId changes
  useEffect(() => {
    const fetchData = async () => {
      const data = await fetchDogById(dogId);
      setDog(data);
    };
    fetchData();
  }, [dogId]);

  return (
    <div>
      <DogDetail {...{ dog }} />
    </div>
  );
}
