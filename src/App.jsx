
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navigation from './components/Navigation';
import Footer from './components/Footer';
import Home from './pages/Home';
import Transport from './pages/Transport';
import Stay from './pages/Stay';
import Places from './pages/Places';
import ExpensePlan from './pages/ExpensePlan';
import "./index.css";
function App() {
  return (
    <Router> 
      <div className="App">
        <Navigation />
        <main>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/transport" element={<Transport />} />
            <Route path="/stay" element={<Stay />} />
            <Route path="/places" element={<Places />} />
            <Route path="/expense-plan" element={<ExpensePlan />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  );
}

export default App;

