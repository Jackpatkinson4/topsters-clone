import React, { useState } from 'react';
import Sidebar from '../Sidebar/Sidebar.jsx';
import Chart from '../Chart/Chart.jsx';
import styles from './App.module.css';

function App() {
  return (
    <div className={styles.appContainer}>
      <div className={styles.sideBarContainer}>
        <Sidebar/>
      </div>
      <div className={styles.chartContainer}>
        <Chart/>
      </div>
    </div>
  );
};

export default App;
