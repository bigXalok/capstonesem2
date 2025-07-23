import React, { useState } from 'react';
import { MapPin, Star, Clock, Search } from 'lucide-react';
import mahalImg from '../assets/mahal1.jpg';
import gateImg from '../assets/gate1.jpg';
import minarImg from '../assets/minar1.jpg';
import palaceImg from '../assets/palace.jpg';
import gatewayImg from '../assets/gateway.jpg';
import chaarImg from '../assets/chaar.jpg';

import './Places.css';

const Places = () => {
  const [searchTerm, setSearchTerm] = useState('');

  const places = [
    {
    id: 1,
    name: 'Taj Mahal',
    location: 'Agra, Uttar Pradesh',
    region: 'asia',
    rating: 4.9,
    reviews: 8921,
    entryFee: '₹50',
    duration: '2-3 hours',
    image: mahalImg,
    description: 'A symbol of eternal love, the white marble mausoleum is a UNESCO World Heritage Site and one of the Seven Wonders of the World.'
    },
    {
    id: 2,
    name: 'India Gate',
    location: 'New Delhi',
    region: 'asia',
    rating: 4.6,
    reviews: 7564,
    entryFee: 'Free',
    duration: '1-2 hours',
    image: gateImg,
    description: 'A war memorial and iconic landmark in the heart of the capital, surrounded by gardens and fountains.'
    },
    {
    id: 3,
    name: 'Qutub Minar',
    location: 'Delhi',
    region: 'asia',
    rating: 4.7,
    reviews: 4821,
    entryFee: '₹40',
    duration: '1-2 hours',
    image: minarImg,
    description: 'The tallest brick minaret in the world, showcasing Indo-Islamic architecture and intricate carvings.'
    },
    {
    id: 4,
    name: 'Mysore Palace',
    location: 'Mysuru, Karnataka',
    region: 'asia',
    rating: 4.8,
    reviews: 3647,
    entryFee: '₹70',
    duration: '2-3 hours',
    image: palaceImg,
    description: 'A grand royal residence with stunning Indo-Saracenic architecture, illuminated beautifully at night.'
  },
  {
    id: 5,
    name: 'Gateway of India',
    location: 'Mumbai, Maharashtra',
    region: 'asia',
    rating: 4.5,
    reviews: 5298,
    entryFee: 'Free',
    duration: '1-2 hours',
    image: gatewayImg,
    description: 'A waterfront arch monument built during the British Raj, popular for photography and sea views.'
  },
  {
    id: 6,
    name: 'Charminar',
    location: 'Hyderabad, Telangana',
    region: 'asia',
    rating: 4.6,
    reviews: 3120,
    entryFee: '₹25',
    duration: '1 hour',
    image: chaarImg,
    description: 'A historic monument and mosque built in 1591, known for its four grand arches and bustling bazaars.'
  }
  ];

  const filteredPlaces = places.filter(place => 
    place.name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="places-page">
      <div className="container">

        <div className="page-header">
          <h1>Tourist Places</h1>
          <p>Discover amazing destinations around the world</p>
        </div>


        <div className="search-section">
          <div className="search-container">
            <div className="search-input-group">
              <Search className="search-icon" size={20} />
              <input
                type="text"
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                placeholder="Search places by name"
                className="search-input"
              />
            </div>
          </div>
        </div>


        <div className="places-grid">
          {filteredPlaces.map(place => (
            <div key={place.id} className="place-card">
              <div className="place-image">
                <img src={place.image} alt={place.name} />
                <div className="place-category">
                  <span>{place.category}</span>
                </div>
              </div>
              
              <div className="place-content">
                <h3 className="place-name">{place.name}</h3>
                
                <div className="place-location">
                  <MapPin size={16} />
                  <span>{place.location}</span>
                </div>

                <div className="place-rating">
                  <Star size={16} fill="currentColor" />
                  <span>{place.rating}</span>
                  <span className="reviews">({place.reviews} reviews)</span>
                </div>

                <p className="place-description">{place.description}</p>

                <div className="place-details">
                  <div className="detail-item">
                    <span>Entry: {place.entryFee}</span>
                  </div>
                  <div className="detail-item">
                    <Clock size={16} />
                    <span>Duration: {place.duration}</span>
                  </div>
                </div>

                <div className="place-footer">
                  <button className="btn btn-secondary">View Details</button>
                  <button className="btn btn-primary">Add to Trip</button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Places;