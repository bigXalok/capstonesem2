import React, { useState } from 'react';
import { MapPin, Star, Search } from 'lucide-react';
import tajImg from '../assets/taj1.jpg';
import keralaImg from '../assets/kerala1.jpg';
import rishi1Img from '../assets/Rishi1.jpg';
import obera1Img from '../assets/oberoi1.jpg';
import himalImg from '../assets/Himalayan1.jpg';
import hostelImg from '../assets/hosteller1.jpg';
import './Stay.css';

const Stay = () => {
  const [searchTerm, setSearchTerm] = useState('');

  const accommodations = [
    {
    id: 1,
    type: 'hotel',
    name: 'The Taj Mahal Palace',
    location: 'Mumbai, India',
    rating: 4.9,
    reviews: 1890,
    price: '₹ 320',
    priceRange: 'luxury',
    image: tajImg,
    description: 'Iconic 5-star hotel overlooking the Gateway of India with majestic architecture and premium services.',
    roomTypes: ['Luxury Room', 'Sea View Suite', 'Presidential Suite'],
    },
    
    {
    id: 2,
    type: 'homestay',
    name: 'Kerala Backwater Heritage Villa',
    location: 'Alleppey, India',
    rating: 4.7,
    reviews: 430,
    price: '₹ 85',
    priceRange: 'mid-range',
    image: keralaImg,
    description: 'Tranquil villa stay surrounded by lush greenery and backwaters, ideal for cultural immersion.',
    roomTypes: ['Traditional Room', 'Lake View Room'],
    },
    {
    id: 3,
        type: 'hostel',
        name: 'Zostel Rishikesh',
        location: 'Rishikesh, India',
        rating: 4.5,
        reviews: 760,
        price: '₹ 20',
        priceRange: 'budget',
        image:rishi1Img,
        description: 'Lively backpacker hostel with views of the Ganges and yoga sessions.',
        roomTypes: ['Mixed Dorm', 'Female Dorm', 'Private Room'],
    },
    {
      id: 4,
      type: 'hotel',
      name: 'The Oberoi Udaivilas',
      location: 'Udaipur, India',
      rating: 4.8,
      reviews: 1123,
      price: '₹ 410',
      priceRange: 'luxury',
      image: obera1Img,
      description: 'Palatial lakeside hotel with grand architecture, boat rides, and royal hospitality.',
      roomTypes: ['Premier Room', 'Luxury Suite', 'Kohinoor Suite'],
      },
    {
      id: 5,
      type: 'homestay',
      name: 'Himalayan Wooden Cottage',
      location: 'Manali, India',
      rating: 4.6,
      reviews: 389,
      price: '₹ 70',
      priceRange: 'mid-range',
      image: himalImg,
      description: 'Rustic wooden cottage with panoramic mountain views and peaceful surroundings.',
      roomTypes: ['Cottage Room', 'Attic Room'],
    },
    {
      id: 6,
      type: 'hostel',
      name: 'The Hosteller Jaipur',
      location: 'Jaipur, India',
      rating: 4.4,
      reviews: 645,
      price: '₹ 18',
      priceRange: 'budget',
      image: hostelImg,
      description: 'A vibrant hostel in the Pink City with rooftop views and colorful Rajasthani decor.',
      roomTypes: ['Mixed Dorm', 'Female Dorm', 'Private Room'],
    }
  ];

  const filteredAccommodations = accommodations.filter(acc => 
    acc.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
    acc.location.toLowerCase().includes(searchTerm.toLowerCase())
  );


  return (
    <div className="stay-page">
      <div className="container">

        <div className="page-header">
          <h1>Stay Options</h1>
          <p>Find the perfect accommodation for your journey</p>
        </div>


        <div className="search-section">
          <div className="search-container">
            <div className="search-input-group">
              <Search className="search-icon" size={20} />
              <input
                type="text"
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                placeholder="Search accommodations by name, location, type, or description..."
                className="search-input"
              />
            </div>
          </div>
        </div>

        <div className="accommodations-grid">
          {filteredAccommodations.map(acc => (
            <div key={acc.id} className="accommodation-card">
              <div className="accommodation-image">
                <img src={acc.image} alt={acc.name} />
              </div>
              
              <div className="accommodation-content">
                <h3 className="accommodation-name">{acc.name}</h3>
                
                <div className="accommodation-location">
                  <MapPin size={16} />
                  <span>{acc.location}</span>
                </div>

                <div className="accommodation-rating">
                  <Star size={16} fill="currentColor" />
                  <span>{acc.rating}</span>
                  <span className="reviews">({acc.reviews} reviews)</span>
                </div>

                <p className="accommodation-description">{acc.description}</p>

                <div className="room-types">
                  <h4>Room Types:</h4>
                  <div className="room-list">
                    {acc.roomTypes.map((room, index) => (
                      <span key={index} className="room-tag">{room}</span>
                    ))}
                  </div>
                </div>

                <div className="accommodation-footer">
                  <div className="price">
                    <span className="price-amount">{acc.price}</span>
                    <span className="price-period">per night</span>
                  </div>
                  <div className="action-buttons">
                    <button className="btn btn-secondary">View Details</button>
                    <button className="btn btn-primary">Book Now</button>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Stay;