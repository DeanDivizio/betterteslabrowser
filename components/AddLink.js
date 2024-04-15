"use client";
import React, { useState } from 'react';
import { addLink, getLinks } from '../app/actions';

const EntryForm = ({links, setLinks}) => {
  const [name, setName] = useState('');
  const [url, setUrl] = useState('');

  const handleSubmit = async (event) => {
    event.preventDefault(); // Prevent the form from refreshing the page
    await addLink( name, url );
    const newLink = {displayName: name, url: url};
    setLinks([...links, newLink]);
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
