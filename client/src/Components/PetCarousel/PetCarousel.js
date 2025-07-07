import React, { useEffect, useState } from 'react';
import './PetCarousel.css';

const PetCarousel = () => {
  const [pets, setPets] = useState([]);

  useEffect(() => {
    const fetchPets = async () => {
      try {
        const response = await fetch("http://localhost:4000/approvedPets");
        const data = await response.json();
        setPets(data);
      } catch (err) {
        console.error("Failed to fetch pets", err);
      }
    };

    fetchPets();
  }, []);

  if (pets.length === 0) return null;

  return (
    <div className="carousel-wrapper">
      <h2 style={{ marginLeft: '1rem' }}>🐾 Recently Approved Pets</h2>
      <div className="horizontal-scroll-container">
        {pets.map((pet, index) => (
          <div key={index} className="carousel-card">
            <img
              src={`http://localhost:4000/images/${pet.filename}`}
              alt={pet.name}
              className="carousel-pet-img"
            />
            <div className="carousel-card-details">
              <h3>{pet.name}</h3>
              <p><b>Type:</b> {pet.type}</p>
              <p><b>Age:</b> {pet.age}</p>
              <p><b>Location:</b> {pet.area}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default PetCarousel;
