import React from 'react';
import { useParams } from 'react-router-dom';
import { useEffect, useState } from 'react/cjs/react.development';
import DogDetail from '../../Components/DogDetail/DogDetail';
import { fetchDogById } from '../../services/dogs';

export default function DogDetailView() {
  const params = useParams();
  const dogId = params.id;
  const [dog, setDog] = useState({});
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    const fetchData = async () => {
      const data = await fetchDogById(dogId);
      setDog(data);
      setLoading(false);
    };
    fetchData();
  }, [dogId]);

  if (loading) return (<h3>loading...</h3>);
  return (
    <div>
      <DogDetail {...{ dog }} />
    </div>
  );
}
