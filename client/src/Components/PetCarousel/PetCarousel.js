import React, { useEffect, useState } from 'react';
import './PetCarousel.css';

const PetCarousel = () => {
  const [pets, setPets] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchPets = async () => {
      try {
        const response = await fetch('http://localhost:4000/approvedPets');
        const data = await response.json();

        if (Array.isArray(data)) {
          setPets(data);
        } else if (Array.isArray(data.pets)) {
          setPets(data.pets);
        } else {
          console.error('Unexpected API response format:', data);
          setPets([]);
        }
      } catch (err) {
        console.error('Failed to fetch pets:', err);
        setPets([]);
      } finally {
        setLoading(false);
      }
    };

    fetchPets();
  }, []);

  if (loading) return <p style={{ textAlign: 'center' }}>Loading pets...</p>;
  if (!pets.length) return <p style={{ textAlign: 'center' }}>No approved pets available.</p>;

  return (
    <div className="carousel-wrapper">
      <h2 className="carousel-heading">🐾 Recently Approved Pets</h2>
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
              <p><strong>Type:</strong> {pet.type}</p>
              <p><strong>Age:</strong> {pet.age}</p>
              <p><strong>Location:</strong> {pet.area}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default PetCarousel;