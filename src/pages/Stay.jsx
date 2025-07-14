import React, { useState } from 'react';
import { MapPin, Star, Wifi, Car, Coffee, Utensils, Waves, Dumbbell, Users, Calendar, DollarSign, Search } from 'lucide-react';
import './Stay.css';

const Stay = () => {
  const [searchTerm, setSearchTerm] = useState('');

  const accommodations = [
    {
      id: 1,
      type: 'hotel',
      name: 'Grand Plaza Hotel',
      location: 'New York City, USA',
      rating: 4.8,
      reviews: 1247,
      price: '$299',
      priceRange: 'luxury',
      image: 'https://images.pexels.com/photos/258154/pexels-photo-258154.jpeg?auto=compress&cs=tinysrgb&w=800',
      description: 'Luxurious 5-star hotel in the heart of Manhattan with world-class amenities.',
      roomTypes: ['Standard Room', 'Suite', 'Presidential Suite'],
      checkInOut: 'Check-in: 3:00 PM | Check-out: 12:00 PM'
    },
    {
      id: 2,
      type: 'hostel',
      name: 'Backpackers Paradise',
      location: 'Amsterdam, Netherlands',
      rating: 4.3,
      reviews: 890,
      price: '$45',
      priceRange: 'budget',
      image: 'https://images.pexels.com/photos/271619/pexels-photo-271619.jpeg?auto=compress&cs=tinysrgb&w=800',
      description: 'Modern hostel with vibrant atmosphere, perfect for young travelers.',
      roomTypes: ['Dormitory', 'Private Room', 'Female-only Dorm'],
      checkInOut: 'Check-in: 2:00 PM | Check-out: 11:00 AM'
    },
    {
      id: 3,
      type: 'homestay',
      name: 'Traditional Japanese House',
      location: 'Kyoto, Japan',
      rating: 4.9,
      reviews: 234,
      price: '$120',
      priceRange: 'mid-range',
      image: 'https://images.pexels.com/photos/2506923/pexels-photo-2506923.jpeg?auto=compress&cs=tinysrgb&w=800',
      description: 'Authentic Japanese home experience with traditional architecture and customs.',
      roomTypes: ['Tatami Room', 'Private Room with Futon'],
      checkInOut: 'Check-in: 4:00 PM | Check-out: 10:00 AM'
    },
    {
      id: 4,
      type: 'hotel',
      name: 'Beachfront Resort',
      location: 'Maldives',
      rating: 4.7,
      reviews: 678,
      price: '$899',
      priceRange: 'luxury',
      image: 'https://images.pexels.com/photos/1449729/pexels-photo-1449729.jpeg?auto=compress&cs=tinysrgb&w=800',
      description: 'Exclusive overwater villas with pristine beaches and crystal-clear waters.',
      roomTypes: ['Beach Villa', 'Overwater Villa', 'Sunset Villa'],
      checkInOut: 'Check-in: 3:00 PM | Check-out: 12:00 PM'
    },
    {
      id: 5,
      type: 'homestay',
      name: 'Mountain Cabin Retreat',
      location: 'Swiss Alps, Switzerland',
      rating: 4.6,
      reviews: 345,
      price: '$180',
      priceRange: 'mid-range',
      image: 'https://images.pexels.com/photos/618612/pexels-photo-618612.jpeg?auto=compress&cs=tinysrgb&w=800',
      description: 'Cozy mountain cabin with breathtaking Alpine views and hiking access.',
      roomTypes: ['Cabin Room', 'Loft Room'],
      checkInOut: 'Check-in: 4:00 PM | Check-out: 11:00 AM'
    },
    {
      id: 6,
      type: 'hostel',
      name: 'Surf Camp Hostel',
      location: 'Bali, Indonesia',
      rating: 4.4,
      reviews: 567,
      price: '$35',
      priceRange: 'budget',
      image: 'https://images.pexels.com/photos/2373201/pexels-photo-2373201.jpeg?auto=compress&cs=tinysrgb&w=800',
      description: 'Laid-back surf hostel just steps from the beach with surf lessons included.',
      roomTypes: ['Shared Dorm', 'Private Room', 'Beach Bungalow'],
      checkInOut: 'Check-in: 2:00 PM | Check-out: 11:00 AM'
    }
  ];

  const filteredAccommodations = accommodations.filter(acc => 
    acc.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
    acc.location.toLowerCase().includes(searchTerm.toLowerCase())
  );


  return (
    <div className="stay-page">
      <div className="container">
        {/* Header */}
        <div className="page-header">
          <h1>Stay Options</h1>
          <p>Find the perfect accommodation for your journey</p>
        </div>

        {/* Search Bar */}
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

        {/* Accommodations Grid */}
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

                <div className="accommodation-details">
                  <div className="detail-item">
                    <Calendar size={16} />
                    <span>{acc.checkInOut}</span>
                  </div>
                </div>

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
                    <DollarSign size={20} />
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