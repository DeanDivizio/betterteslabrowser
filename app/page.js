"use client";
import React, { useState } from 'react';
import styles from "./page.module.css";
import EntryForm from "../components/AddLink";

const redirectBase = "http://www.youtube.com/redirect?q=";

export default function Home() {
  const [showForm, setShowForm] = useState(false);

  const handleClick = () => {
    setShowForm(!showForm);
  };

  return (
    <div className={styles.container}>
      <div className={styles.linkSection}>
        <button className={styles.linkButton}><a href={`${redirectBase}link.net`}>link name</a></button>
        <button className={styles.linkButton}><a href={`${redirectBase}link.net`}>link name</a></button>
      </div>
      <div className={styles.addLinkSection}>
        <button className={styles.addLinkButton} onClick={handleClick}>Add Link</button>
        {showForm && <EntryForm />}
      </div>
    </div>
  );
}