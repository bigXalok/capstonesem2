import React, { useState } from 'react';
import { MapPin, Star, Clock, DollarSign, Search } from 'lucide-react';
import './Places.css';

const Places = () => {
  const [searchTerm, setSearchTerm] = useState('');

  const places = [
    {
      id: 1,
      name: 'Machu Picchu',
      location: 'Cusco, Peru',
      region: 'south-america',
      rating: 4.9,
      reviews: 2847,
      entryFee: '$45',
      duration: '4-6 hours',
      image: 'https://images.pexels.com/photos/259967/pexels-photo-259967.jpeg?auto=compress&cs=tinysrgb&w=800',
      description: 'Ancient Incan citadel set high in the Andes Mountains, one of the New Seven Wonders of the World.'
    },
    {
      id: 2,
      name: 'Santorini Sunset',
      location: 'Santorini, Greece',
      region: 'europe',
      rating: 4.8,
      reviews: 1923,
      entryFee: 'Free',
      duration: '2-3 hours',
      image: 'https://images.pexels.com/photos/1285625/pexels-photo-1285625.jpeg?auto=compress&cs=tinysrgb&w=800',
      description: 'Breathtaking sunsets over the Aegean Sea with iconic blue-domed churches and white-washed buildings.'
    },
    {
      id: 3,
      name: 'Tokyo Senso-ji Temple',
      location: 'Tokyo, Japan',
      region: 'asia',
      rating: 4.7,
      reviews: 3456,
      entryFee: 'Free',
      duration: '2-3 hours',
      image: 'https://images.pexels.com/photos/2070033/pexels-photo-2070033.jpeg?auto=compress&cs=tinysrgb&w=800',
      description: 'Ancient Buddhist temple in the heart of Tokyo, offering traditional Japanese culture and architecture.'
    },
    {
      id: 4,
      name: 'Grand Canyon South Rim',
      location: 'Arizona, USA',
      region: 'north-america',
      rating: 4.9,
      reviews: 4521,
      entryFee: '$35',
      duration: 'Full day',
      image: 'https://images.pexels.com/photos/1320684/pexels-photo-1320684.jpeg?auto=compress&cs=tinysrgb&w=800',
      description: 'Iconic natural wonder with breathtaking canyon views, hiking trails, and geological formations.'
    },
    {
      id: 5,
      name: 'Victoria Falls',
      location: 'Zambia/Zimbabwe',
      region: 'africa',
      rating: 4.8,
      reviews: 1678,
      entryFee: '$30',
      duration: '3-4 hours',
      image: 'https://images.pexels.com/photos/2166559/pexels-photo-2166559.jpeg?auto=compress&cs=tinysrgb&w=800',
      description: 'One of the largest waterfalls in the world, known as "The Smoke That Thunders".'
    },
    {
      id: 6,
      name: 'Angkor Wat',
      location: 'Siem Reap, Cambodia',
      region: 'asia',
      rating: 4.9,
      reviews: 2134,
      entryFee: '$62',
      duration: '6-8 hours',
      image: 'https://images.pexels.com/photos/1519088/pexels-photo-1519088.jpeg?auto=compress&cs=tinysrgb&w=800',
      description: 'Magnificent temple complex and largest religious monument in the world, dating back to the 12th century.'
    },
    {
      id: 7,
      name: 'Sydney Opera House',
      location: 'Sydney, Australia',
      region: 'oceania',
      rating: 4.6,
      reviews: 2897,
      entryFee: '$43',
      duration: '2-3 hours',
      image: 'https://images.pexels.com/photos/1878293/pexels-photo-1878293.jpeg?auto=compress&cs=tinysrgb&w=800',
      description: 'Iconic performing arts venue with distinctive architectural design and world-class performances.'
    },
    {
      id: 8,
      name: 'Banff National Park',
      location: 'Alberta, Canada',
      region: 'north-america',
      rating: 4.8,
      reviews: 3421,
      entryFee: '$21',
      duration: 'Full day',
      image: 'https://images.pexels.com/photos/417074/pexels-photo-417074.jpeg?auto=compress&cs=tinysrgb&w=800',
      description: 'Stunning mountain scenery with pristine lakes, glaciers, and abundant wildlife in the Canadian Rockies.'
    }
  ];

  const filteredPlaces = places.filter(place => 
    place.name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="places-page">
      <div className="container">
        {/* Header */}
        <div className="page-header">
          <h1>Tourist Places</h1>
          <p>Discover amazing destinations around the world</p>
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
                placeholder="Search places by name"
                className="search-input"
              />
            </div>
          </div>
        </div>

        {/* Places Grid */}
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
                    <DollarSign size={16} />
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