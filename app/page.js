"use client";
import React, { useState, useEffect } from 'react';
import styles from "./page.module.css";
import EntryForm from "../components/AddLink";
import { getLinks } from "../app/actions";

const redirectBase = "http://www.youtube.com/redirect?q=";

export default function Home() {
  const [showForm, setShowForm] = useState(false);
  const [links, setLinks] = useState([]);

  useEffect(() => {
    getLinks().then(setLinks);
  }, []);

  const handleClick = () => {
    setShowForm(!showForm);
  };

  return (
    <div className={styles.container}>
      <div className={styles.titleSection}>
        <h1>Welcome</h1>
      </div>
      <div className={styles.linkSection}>
        {links.map((link, index) => (
          <button key={index} className={styles.linkButton}>
            <a href={`${redirectBase}${link.url}`}>{link.displayName}</a>
          </button>
        ))}
      </div>
      <button className={styles.addLinkButton} onClick={handleClick}>Add Link</button>
      <div className={styles.addLinkSection}>
        {showForm && <EntryForm formState={showForm} formStateToggle={setShowForm} links={links} setLinks={setLinks} />}
      </div>
    </div>
  );
}