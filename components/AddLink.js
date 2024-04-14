import React, { useState } from 'react';

const EntryForm = () => {
  const [name, setName] = useState('');
  const [url, setUrl] = useState('');

  const handleSubmit = async (event) => {
    event.preventDefault(); // Prevent the form from refreshing the page

    // Send a POST request to the server-side API
    const response = await fetch('/api/addEntry/routes.js', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ name, url })
    });

    if (response.ok) {
      alert("Entry added successfully!");
      setName('');
      setUrl('');
    } else {
      alert("Failed to add entry.");
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <div>
        <label htmlFor="name">Name:</label>
        <input
          type="text"
          id="name"
          value={name}
          onChange={e => setName(e.target.value)}
          required
        />
      </div>
      <div>
        <label htmlFor="url">URL:</label>
        <input
          type="text"
          id="url"
          value={url}
          onChange={e => setUrl(e.target.value)}
          required
        />
      </div>
      <button type="submit">Add Entry</button>
    </form>
  );
};

export default EntryForm;
