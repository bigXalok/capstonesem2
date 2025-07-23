import React, { useState } from 'react';
import { Calculator, DollarSign, MapPin, Calendar, Users } from 'lucide-react';
import './ExpensePlan.css';

const ExpensePlan = () => {
  const [destination, setDestination] = useState('');
  const [duration, setDuration] = useState(7);
  const [travelers, setTravelers] = useState(2);
  const [budget, setBudget] = useState('medium');
  
  const [expenses, setExpenses] = useState([
    { id: 1, category: 'Transport', amount: 0, description: 'Flights, trains, local transport' },
    { id: 2, category: 'Accommodation', amount: 0, description: 'Hotels, hostels, homestays' },
    { id: 3, category: 'Food & Dining', amount: 0, description: 'Meals, snacks, drinks' },
    { id: 4, category: 'Activities', amount: 0, description: 'Tours, attractions, experiences' },
    { id: 5, category: 'Shopping', amount: 0, description: 'Souvenirs, local products' },
    { id: 6, category: 'Miscellaneous', amount: 0, description: 'Emergency fund, other expenses' }
  ]);

  const updateExpense = (id, amount) => {
    setExpenses(expenses.map(expense => 
      expense.id === id ? { ...expense, amount } : expense
    ));
  };

  const getTotalExpenses = () => {
    return expenses.reduce((sum, expense) => sum + expense.amount, 0);
  };

  const getPerPersonCost = () => {
    return getTotalExpenses() / travelers;
  };

  const getPerDayCost = () => {
    return getTotalExpenses() / duration;
  };

  const getBudgetRecommendations = () => {
    const baseRecommendations = {
      budget: {
        transport: 200,
        accommodation: 50 * duration,
        food: 30 * duration,
        activities: 20 * duration,
        shopping: 100,
        miscellaneous: 150
      },
      medium: {
        transport: 500,
        accommodation: 100 * duration,
        food: 60 * duration,
        activities: 50 * duration,
        shopping: 200,
        miscellaneous: 300
      },
      luxury: {
        transport: 1000,
        accommodation: 250 * duration,
        food: 120 * duration,
        activities: 100 * duration,
        shopping: 500,
        miscellaneous: 500
      }
    };

    return baseRecommendations[budget];
  };

  const applyRecommendations = () => {
    const recommendations = getBudgetRecommendations();
    const updatedExpenses = expenses.map(expense => {
      let categoryKey = expense.category.toLowerCase().replace(/\s+/g, '').replace('&', '');
      
      if (categoryKey === 'fooddining') {
        categoryKey = 'food';
      }
      
      const recommendedAmount = recommendations[categoryKey] || 0;
      return { ...expense, amount: recommendedAmount };
    });
    setExpenses(updatedExpenses);
  };

  return (
    <div className="expense-plan-page">
      <div className="container">
        <div className="page-header">
          <h1>Expense Planner</h1>
          <p>Plan and track your travel expenses</p>
        </div>

        <div className="trip-details-section">
          <h2>Trip Details</h2>
          <div className="trip-details-grid">
            <div className="detail-group">
              <label>
                <MapPin size={20} />
                Destination
              </label>
              <input
                type="text"
                value={destination}
                onChange={(e) => setDestination(e.target.value)}
                placeholder="Enter destination"
                className="form-input"
              />
            </div>

            <div className="detail-group">
              <label>
                <Calendar size={20} />
                Duration (days)
              </label>
              <input
                type="number"
                value={duration}
                onChange={(e) => setDuration(parseInt(e.target.value))}
                min="1"
                className="form-input"
              />
            </div>

            <div className="detail-group">
              <label>
                <Users size={20} />
                Travelers
              </label>
              <input
                type="number"
                value={travelers}
                onChange={(e) => setTravelers(parseInt(e.target.value))}
                min="1"
                className="form-input"
              />
            </div>

            <div className="detail-group">
              <label>
                Budget Style
              </label>
              <select
                value={budget}
                onChange={(e) => setBudget(e.target.value)}
                className="form-select"
              >
                <option value="budget">Budget Travel</option>
                <option value="medium">Mid-range</option>
                <option value="luxury">Luxury</option>
              </select>
            </div>
          </div>

          <div className="recommendations-section">
            <button onClick={applyRecommendations} className="btn btn-accent">
              <Calculator size={20} />
              Apply Budget Recommendations
            </button>
          </div>
        </div>

        <div className="expenses-section">
          <h2>Expense Categories</h2>
          <div className="expenses-grid">
            {expenses.map(expense => (
              <div key={expense.id} className="expense-card">
                <div className="expense-header">
                  <h3>{expense.category}</h3>
                  <p className="expense-description">{expense.description}</p>
                </div>
                <div className="expense-amount">
                  <span className="currency">₹</span>
                  <input
                    type="number"
                    value={expense.amount}
                    onChange={(e) => updateExpense(expense.id, parseFloat(e.target.value) || 0)}
                    className="amount-input"
                    placeholder="0"
                  />
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="summary-section">
          <h2>Expense Summary</h2>
          <div className="summary-cards">
            <div className="summary-card total">
              <div className="summary-icon">
                <DollarSign size={32} />
              </div>
              <div className="summary-content">
                <h3>Total Trip Cost</h3>
                <p className="amount">${getTotalExpenses().toFixed(2)}</p>
              </div>
            </div>

            <div className="summary-card">
              <div className="summary-icon">
                <Users size={32} />
              </div>
              <div className="summary-content">
                <h3>Cost per Person</h3>
                <p className="amount">${getPerPersonCost().toFixed(2)}</p>
              </div>
            </div>

            <div className="summary-card">
              <div className="summary-icon">
                <Calendar size={32} />
              </div>
              <div className="summary-content">
                <h3>Cost per Day</h3>
                <p className="amount">${getPerDayCost().toFixed(2)}</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ExpensePlan;