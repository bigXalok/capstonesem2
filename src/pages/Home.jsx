import { useState } from "react";
import { Link } from "react-router-dom";
import {
  Search,
  MapPin,
  Calendar,
  Users,
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
        "Wherever you go, go the way that suits your spirit",
    },
    {
      icon: <Calendar size={48} />,
      title: "Plan Your Trip",
      description:
        "Everything you need for the perfect trip all in one place",
    },
    {
      icon: <Users size={48} />,
      title: "Local Guides",
      description:
        "Meet local guides who bring culture to life with real, authentic experiences",
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
      <section className="hero">
        <div className="hero-content">
          <h1 className="hero-title">
            Find your next <br/>
            <span className="highlight">Escape</span>
          </h1>
          <p className="hero-subtitle">
            Explore places. Live stories.
          </p>
          <div className="hero-buttons">
            <Link to="/places" className="hero-btn hero-btn-secondary">
              Discover Places
            </Link>
          </div>
        </div>
      </section>


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
