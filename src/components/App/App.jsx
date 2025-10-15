import React, { useState } from 'react';
import Sidebar from '../Sidebar/Sidebar.jsx';
import ChartBuilder from '../ChartBuilder/ChartBuilder.jsx';
import styles from './App.module.css';

function App() {
  return (
    <div className={styles.appContainer}>
      <div className={styles.sideBarContainer}>
        <Sidebar/>
      </div>
      <div className={styles.chartContainer}>
        <ChartBuilder/>
      </div>
    </div>
  );
};

export default App;
