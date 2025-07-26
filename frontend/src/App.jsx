import { useState } from 'react';

function App() {
  const [items, setItems] = useState([]);
  const [newItem, setNewItem] = useState('');

  const handleAdd = () => {
    if (newItem.trim()) {
      setItems([...items, newItem]);
      setNewItem('');
    }
  };

  return (
    <div style={{
      minHeight: '100vh',
      background: 'linear-gradient(to right, #e0eafc, #cfdef3)',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      padding: '2rem',
      fontFamily: 'Arial, sans-serif'
    }}>
      <div style={{
        background: 'white',
        padding: '2rem',
        borderRadius: '1rem',
        boxShadow: '0 8px 20px rgba(0,0,0,0.1)',
        maxWidth: '500px',
        width: '100%'
      }}>
        <h1 style={{ fontSize: '2rem', marginBottom: '1.5rem', textAlign: 'center' }}>
          🛒 My Grocery List
        </h1>

        <div style={{ display: 'flex', gap: '0.5rem', marginBottom: '1rem' }}>
          <input
            type="text"
            placeholder="Add a grocery item..."
            value={newItem}
            onChange={(e) => setNewItem(e.target.value)}
            style={{
              flex: 1,
              padding: '0.75rem',
              border: '1px solid #ccc',
              borderRadius: '0.5rem',
              fontSize: '1rem'
            }}
          />
          <button
            onClick={handleAdd}
            style={{
              padding: '0.75rem 1.5rem',
              background: '#4CAF50',
              color: 'white',
              border: 'none',
              borderRadius: '0.5rem',
              fontSize: '1rem',
              cursor: 'pointer'
            }}
          >
            Add
          </button>
        </div>

        <ul style={{ listStyle: 'none', padding: 0, marginTop: '1rem' }}>
          {items.map((item, index) => (
            <li key={index} style={{
              padding: '0.5rem 1rem',
              marginBottom: '0.5rem',
              background: '#f9f9f9',
              borderRadius: '0.5rem',
              borderLeft: '5px solid #4CAF50',
              fontSize: '1.1rem'
            }}>
              ✅ {item}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}

export default App;

