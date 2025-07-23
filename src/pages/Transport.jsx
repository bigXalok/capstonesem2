
import { Plane, Train, Car, Ship, MapPin, Clock, DollarSign, Users, Calendar } from 'lucide-react';
import './transport.css';
import trainImg from '../assets/train1.jpg';
import airImg from '../assets/airport.jpg';
import carImg from '../assets/taxii.jpg';

const Transport = () => {

  const transportOptions = [
    {
      id: 1,
      type: 'flight',
      name: 'Premium Airlines',
      route: 'World Tour',
      image: airImg,
      schedule: 'Book Anytime'
    },
    {
      id: 2,
      type: 'train',
      name: 'High-Speed Rail',
      route: 'In Country',
      amenities: ['WiFi', 'Dining Car', 'Comfortable Seating', 'Scenic Views'],
      image: trainImg,
      schedule: 'Book Anytime'
    },
    {
      id: 3,
      type: 'car',
      name: 'Luxury Car Rental',
      route: 'In Country',
      image: carImg,
      schedule: 'Book Anytime'
    },
  ];

  return (
    <div className="transport-page">
      <div className="container">

        <div className="page-header">
          <h1>Transport Options</h1>
          <p>Choose from various transportation modes for your journey</p>
        </div>

        <div className="transport-grid">
          {transportOptions.map(option => (
            <div key={option.id} className="transport-card">
              <div className="transport-image">
                <img src={option.image} alt={option.name} />
              </div>
              
              <div className="transport-content">
                <h3 className="transport-name">{option.name}</h3>
                <div className="transport-route">
                  <MapPin size={16} />
                  <span>{option.route}</span>
                </div>

                <div className="transport-schedule">
                  <Calendar size={16} />
                  <span>{option.schedule}</span>
                </div>

                <div className="transport-footer">
                  <button className="btn btn-primary">Book Now</button>
                  <button className="btn btn-secondary">View Details</button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Transport;