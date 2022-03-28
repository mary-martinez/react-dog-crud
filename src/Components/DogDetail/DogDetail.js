import React from 'react';

export default function DogDetail({ dog }) {
  const { name, bio, image, breed, age } = { ...dog };
  // console.log(name, bio, img, breed, age);
  return (
    <div>
      <h2>{name}</h2>
      <img src={image} />
      <h3>{`Breed: ${breed}`}</h3>
      <h3>{`Age: ${age}`}</h3>
      <p>{bio}</p>
    </div>
  );
}
