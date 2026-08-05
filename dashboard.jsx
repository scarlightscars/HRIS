import React from 'react';

const Dashboard = ({ setActiveTab, metrics }) => {
  const cards = [
    {
      title: 'Total Employees',
      count: metrics.totalEmployees,
      targetTab: 'employees',
      icon: '👥',
      color: '#4F46E5'
    },
    {
      title: 'Pending Documents',
      count: metrics.pendingDocs,
      targetTab: 'documents',
      icon: '📁',
      color: '#F59E0B'
    }
  ];

  return (
    <div className="dashboard-grid">
      {cards.map((card, index) => (
        <div 
          key={index} 
          className="dashboard-card"
          onClick={() => setActiveTab(card.targetTab)}
          style={{ borderLeft: `4px solid ${card.color}` }}
        >
          <div className="card-icon">{card.icon}</div>
          <div className="card-info">
            <h3>{card.title}</h3>
            <p className="card-count">{card.count}</p>
          </div>
          <span className="view-details">View Details &rarr;</span>
        </div>
      ))}
    </div>
  );
};

export default Dashboard;
