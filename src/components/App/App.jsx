import React, { useState } from 'react';
import {emptyChart, defaultChart} from '../../assets/emptyCharts.jsx'
import Sidebar from '../Sidebar/Sidebar.jsx';
import ChartBuilder from '../ChartBuilder/ChartBuilder.jsx';
import styles from './App.module.css';

function App() {
  // chart options
  const [chartNumRows, setChartNumRows] = useState(defaultChart.numRows);
  const handleSetNumRows = (e) => {
    setChartNumRows(parseInt(e.target.value));
  };
  const [chartNumCols, setChartNumCols] = useState(defaultChart.numCols);
  const handleSetNumCols = (e) => {
    setChartNumCols(parseInt(e.target.value));
  };
  const [chartGap, setChartGap] = useState(defaultChart.gap);
  const handleSetChartGap = (e) => {
    setChartGap(parseInt(e.target.value));
  }

  // chart data
  const [chartData, setChartData] = useState(emptyChart);

  // chart title
  const [chartTitle, setChartTitle] = useState(defaultChart.chartTitle);
  const handleSetChartTitle = (title) => {
    setChartTitle(title);
  };

  // add album to chart
  const [selectedIndex, setSelectedIndex] = useState(0);
  const changeIndex = (index) => {
    setSelectedIndex(index);
  };
  const [loadingImage, setLoadingImage] = useState(999);
  const handleImageLoaded = () => setLoadingImage(999);
  const [chartDirty, setChartDirty] = useState(true);
  const [refresh, setRefresh] = useState(false);
  const addAlbum = (index, album) => {
    console.log(`Adding album ${album.name} by ${album.artist} to chart at index ${index}`);
    setLoadingImage(index);

    let updatedArr = chartData;
    updatedArr[index] = album;
    setChartData(updatedArr);
    console.log(chartData);
    if (selectedIndex < chartNumCols * chartNumRows - 1) {
      setSelectedIndex(selectedIndex + 1);
    } else {
      setSelectedIndex(0);
    }

    setRefresh(true);
    setRefresh(!refresh);
    setChartDirty(true);
  };

  // remove album from chart
  const removeAlbum = (index) => {
    console.log(`Removing album ${chartData[index].name} by ${chartData[index].artist} at ${index} from chart`);
    setLoadingImage(index);

    let updatedArr = chartData;
    updatedArr[index] = {};
    setChartData(updatedArr);
    console.log(chartData);
    if (selectedIndex < chartNumCols * chartNumRows - 1) {
      setSelectedIndex(selectedIndex + 1);
    } else {
      setSelectedIndex(0);
    }

    setRefresh(true);
    setRefresh(!refresh);
    setChartDirty(true);
  }

  // search data
  const [searchResults, setSearchResults] = useState(null);
  const handleSetSearchResults = (results) => {
    setSearchResults(results)
  }

  // album titles
  const [showAlbumTitles, setShowAlbumTitles] = useState(false);
  const handleSetShowAlbumTitles = (e) => {
    console.log(e.target.checked)
    setShowAlbumTitles(e.target.checked);
  }

  return (
    <div className={styles.appContainer}>
      <div className={styles.sideBarContainer}>
        <Sidebar 
          numRows={chartNumRows} 
          numCols={chartNumCols} 
          gap={chartGap} 
          handleSetNumRows={handleSetNumRows} 
          handleSetNumCols={handleSetNumCols} 
          handleSetGap={handleSetChartGap} 
          selectedIndex={selectedIndex} 
          addAlbum={addAlbum} 
          searchResults={searchResults} 
          setSearchResults={handleSetSearchResults} 
          showAlbumTitles={showAlbumTitles} 
          setShowAlbumTitles={handleSetShowAlbumTitles}
        />
      </div>
      <div className={styles.chartBuilderContainer}>
        <ChartBuilder 
          numRows={chartNumRows} 
          numCols={chartNumCols} 
          gap={chartGap} 
          chartData={chartData} 
          changeIndex={changeIndex} 
          removeAlbum={removeAlbum}
          showAlbumTitles={showAlbumTitles} 
        />
      </div>
    </div>
  );
};

export default App;
