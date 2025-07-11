import { useState } from "react";
import { Link } from "react-router-dom";
import {
  Search,
  MapPin,
  Calendar,
  Users,
  ArrowRight,
  Star,
  Award,
  Globe,
} from "lucide-react";
import "./Home.css";

const Home = () => {
  const [searchData, setSearchData] = useState({
    destination: "",
    startDate: "",
    endDate: "",
    travelers: 1,
  });

  const handleSearch = (e) => {
    e.preventDefault();
    console.log("Search data:", searchData);
  };

  const features = [
    {
      icon: <MapPin size={48} />,
      title: "Discover Places",
      description:
        "Find the best travel routes tailored to your adventure style and preferences",
    },
    {
      icon: <Calendar size={48} />,
      title: "Plan Your Trip",
      description:
        "Comprehensive planning tools for the perfect getaway with detailed itineraries",
    },
    {
      icon: <Users size={48} />,
      title: "Local Guides",
      description:
        "Connect with experienced local guides for authentic cultural experiences",
    },
  ];

  const stats = [
    { number: "10K+", label: "Happy Travelers", icon: <Users size={32} /> },
    { number: "500+", label: "Destinations", icon: <Globe size={32} /> },
    { number: "4.9", label: "Average Rating", icon: <Star size={32} /> },
    { number: "15+", label: "Years Experience", icon: <Award size={32} /> },
  ];

  return (
    <div>
      {/* Hero Section */}
      <section className="hero">
        <div className="hero-content">
          <h1 className="hero-title">
            Your Next Adventure
            <span className="highlight"> Awaits</span>
          </h1>
          <p className="hero-subtitle">
            Discover breathtaking destinations, plan unforgettable journeys, and create memories that last a lifetime.
          </p>
          <div className="hero-buttons">
            <Link to="/places" className="hero-btn hero-btn-secondary">
              Discover Places
            </Link>
          </div>
        </div>
      </section>

      {/* Search Section */}
      <section className="search-section">
        <div className="search-container">
          <div className="search-header">
            <h2>Plan Your Perfect Trip</h2>
            <p>Start your adventure by telling us where you want to go</p>
          </div>

          <form onSubmit={handleSearch} className="search-form">
            <div className="search-grid">
              <div className="form-group">
                <label className="form-label">Destination</label>
                <div className="search-input-group">
                  <MapPin className="search-input-icon" size={20} />
                  <input
                    type="text"
                    value={searchData.destination}
                    onChange={(e) => setSearchData({...searchData, destination: e.target.value})}
                    placeholder="Where to?"
                    className="search-input"
                  />
                </div>
              </div>
              
              <div className="form-group">
                <label className="form-label">Start Date</label>
                <input
                  type="date"
                  value={searchData.startDate}
                  onChange={(e) => setSearchData({...searchData, startDate: e.target.value})}
                  className="form-input"
                />
              </div>
              
              <div className="form-group">
                <label className="form-label">End Date</label>
                <input
                  type="date"
                  value={searchData.endDate}
                  onChange={(e) => setSearchData({...searchData, endDate: e.target.value})}
                  className="form-input"
                />
              </div>
              
              <div className="form-group">
                <label className="form-label">Travelers</label>
                <select
                  value={searchData.travelers}
                  onChange={(e) => setSearchData({...searchData, travelers: parseInt(e.target.value)})}
                  className="form-select"
                >
                  <option value={1}>1 Traveler</option>
                  <option value={2}>2 Travelers</option>
                  <option value={3}>3 Travelers</option>
                  <option value={4}>4 Travelers</option>
                  <option value={5}>5+ Travelers</option>
                </select>
              </div>
              
              <button type="submit" className="search-btn">
                <Search size={20} />
                Search
              </button>
            </div>
          </form>
        </div>
      </section>

      {/* Features Section */}
      <section className="features-section">
        <div className="features-container">
          <div className="features-header">
            <h2>Why Choose WanderQuest?</h2>
          </div>
          <div className="features-grid">
            {features.map((feature, index) => (
              <div key={index} className="feature-card">
                <div className="feature-icon" style={{ color: index === 0 ? '#1e40af' : index === 1 ? '#059669' : '#ea580c' }}>
                  {feature.icon}
                </div>
                <h3 className="feature-title">{feature.title}</h3>
                <p className="feature-description">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="stats-section">
        <div className="stats-container">
          <div className="stats-grid">
            {stats.map((stat, index) => (
              <div key={index} className="stat-card">
                <div className="stat-icon">
                  {stat.icon}
                </div>
                <div className="stat-number">{stat.number}</div>
                <div className="stat-label">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );

};
export default Home;
