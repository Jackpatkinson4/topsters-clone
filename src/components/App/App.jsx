import React, { useState } from 'react';
import {emptyChart, defaultChart} from '../../assets/emptyCharts.jsx'
import Sidebar from '../Sidebar/Sidebar.jsx';
import ChartBuilder from '../ChartBuilder/ChartBuilder.jsx';
import styles from './App.module.css';

function App() {
  // chart options
  const [chartNumRows, setChartNumRows] = useState(defaultChart.numRows);
  const handleSetNumRows = (number) => {
    setChartNumRows(number);
  };
  const [chartNumCols, setChartNumCols] = useState(defaultChart.numCols);
  const handleSetChartNumCols = (number) => {
    setChartNumCols(number);
  };

  // chart data
  const [chartData, setChartData] = useState(emptyChart);

  // chart title
  const [chartTitle, setChartTitle] = useState(defaultChart.chartTitle);
  const handleSetChartTitle = (title) => {
    setChartTitle(title);
  };

  // insert image onto canvas
  const [selectedIndex, setSelectedIndex] = useState(0);
  const changeIndex = (index) => {
    setSelectedIndex(index);
  };
  const [loadingImage, setLoadingImage] = useState(999);
  const handleImageLoaded = () => setLoadingImage(999);
  const [chartDirty, setChartDirty] = useState(true);
  const [refresh, setRefresh] = useState(false);
  const addAlbum = (album, index) => {
    setLoadingImage(index)

    let updatedArr = chartData;
    updatedArr[index] = album;
    setChartData(updatedArr);
    if (selectedIndex < numCols * numRows - 1) {
      setSelectedIndex(selectedIndex + 1);
    } else {
      setSelectedIndex(0);
    }

    setRefresh(true);
    setRefresh(!refresh);
    setChartDirty(true);
  };

  return (
    <div className={styles.appContainer}>
      <div className={styles.sideBarContainer}>
        <Sidebar/>
      </div>
      <div className={styles.chartBuilderContainer}>
        <ChartBuilder numRows={chartNumRows} numCols={chartNumCols} chartData={chartData} changeIndex={changeIndex}/>
      </div>
    </div>
  );
};

export default App;
