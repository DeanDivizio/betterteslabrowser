"use client";
import React, { useState } from 'react';
import { addLink, getLinks } from '../app/actions';
import styles from './addLink.module.css';

const EntryForm = ({links, setLinks, formStateToggle}) => {
  const [name, setName] = useState('');
  const [url, setUrl] = useState('');

  const handleSubmit = async (event) => {
    event.preventDefault(); // Prevent the form from refreshing the page
    await addLink( name, url );
    const newLink = {displayName: name, url: url};
    setLinks([...links, newLink]);
    formStateToggle(false);
  };

  return (
    <form className={styles.formContainer} onSubmit={handleSubmit}>
      <h2>Add a Link</h2>
      <div className={styles.inputDiv}>
        <label htmlFor="name">Name:</label>
        <input
          type="text"
          id="name"
          value={name}
          onChange={e => setName(e.target.value)}
          required
        />
      </div>
      <div id={styles.urlDiv} className={styles.inputDiv}>
        <label htmlFor="url">URL:</label>
        <input
          type="text"
          id="url"
          value={url}
          onChange={e => setUrl(e.target.value)}
          required
        />
      </div>
      <button className={styles.addButton} type="submit">Add Entry</button>
      <button className={styles.closeButton} type="button" onClick={() => formStateToggle(false)}>Cancel</button>
    </form>
  );
};

export default EntryForm;
