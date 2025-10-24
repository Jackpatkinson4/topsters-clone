import React, { useState } from 'react';
import {emptyChart, defaultChart} from '../../assets/emptyCharts.jsx'
import Sidebar from '../Sidebar/Sidebar.jsx';
import ChartBuilder from '../ChartBuilder/ChartBuilder.jsx';
import styles from './App.module.css';

function App() {
  // chart options
  const [chartNumRows, setChartNumRows] = useState(defaultChart.numRows);
  const [chartNumCols, setChartNumCols] = useState(defaultChart.numCols);

  const handleSetNumRows = (e) => {
    const currNumRows = chartNumRows;
    const nextNumRows = e.target.value;

    let numNewRows = 0;
    let newChart = chartData;
    if (currNumRows > nextNumRows) {
      numNewRows = currNumRows - nextNumRows;
      for (let i = 0; i < numNewRows; i++) {
        newChart.pop();
      }
    } else {
      numNewRows = nextNumRows - currNumRows;
      for (let i = 0; i < numNewRows; i++) {
        const row = [];
        for (let j = 0; j < chartNumCols; j++) {
          row.push({});
        }
        newChart.push(row);
      }
    }

    setChartNumRows(parseInt(nextNumRows));
    setChartData(newChart);
  };

  const handleSetNumCols = (e) => {
    const currNumCols = chartNumCols;
    const nextNumCols = e.target.value;

    let numNewCols = 0;
    let newChart = chartData;
    if (currNumCols > nextNumCols) {
      numNewCols = currNumCols - nextNumCols;
      for (let i = 0; i < chartNumRows; i++) {
        const row = newChart[i];
        for (let j = 0; j < numNewCols; j++) {
          row.pop();
        }
        newChart[i] = row;
      }
    } else {
      numNewCols = nextNumCols - currNumCols;
      for (let i = 0; i < chartNumRows; i++) {
        const row = newChart[i];
        for (let j = 0; j < numNewCols; j++) {
          row.push({});
        }
        newChart[i] = row;
      }
    }
    setChartNumCols(parseInt(nextNumCols));
    setChartData(newChart);
  };

  const [chartGap, setChartGap] = useState(defaultChart.gap);
  const handleSetChartGap = (e) => {
    setChartGap(parseInt(e.target.value));
  }

  // chart data
  const [chartData, setChartData] = useState(emptyChart);
  const handleSetChartData = (data) => {
    console.log(data);
    setChartData(data);
  }

  // chart title
  const [chartTitle, setChartTitle] = useState(defaultChart.chartTitle);
  const handleSetChartTitle = (e) => {
    setChartTitle(e.target.value);
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

    const colIndex = index % chartNumCols;
    const rowIndex = (index - colIndex) / chartNumCols;

    let updatedArr = chartData;
    updatedArr[rowIndex][colIndex] = album;
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
    setLoadingImage(index);

    const colIndex = index % chartNumCols;
    const rowIndex = (index - colIndex) / chartNumCols;

     console.log(`Removing album ${chartData[rowIndex][colIndex].name} by ${chartData[rowIndex][colIndex].artist} at ${index} from chart`);

    let updatedArr = chartData;
    updatedArr[rowIndex][colIndex] = {};
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
    setShowAlbumTitles(e.target.checked);
  }

  // title numbers
  const [showTitleNumbers, setShowTitleNumbers] = useState(false);
  const handleSetShowTitleNumbers = (e) => {
    setShowTitleNumbers(e.target.checked);
  }

  // background type
  const [backgroundType, setBackgroundType] = useState("color");
  const handleSetBackgroundType = (e) => {
    console.log(e.target.value);
    setBackgroundType(e.target.value);
  }

  //background color
  const [backgroundColor, setBackgroundColor] = useState("black");
  const handleSetBackgroundColor = (color) => {
    console.log(color);
    setBackgroundColor(color);
  }

  const [openPopUp, setOpenPopUp] = useState("");
  const handleOpenPopUp = (selectedPopUp) => {
    if (selectedPopUp !== "") {
      openPopUp !== selectedPopUp ? setOpenPopUp(selectedPopUp) : setOpenPopUp("");
    } else {
      setOpenPopUp("");
    }
  }

  //background image
  const [backgroundImageURL, setBackgroundImageURL] = useState("");
  const handleSetBackgroundImageURL = (e) => {
    setBackgroundImageURL(e.target.value);
  }

  // round corners
  const [roundCorners, setRoundCorners] = useState(false);
  const handleSetRoundCorners = (e) => {
    console.log(e.target.checked);
    setRoundCorners(e.target.checked);
  }

  // font style
  const [fontStyle, setFontStyle] = useState("monospace");
  const handleSetFontStyle = (e) => {
    console.log(e.target.value);
    setFontStyle(e.target.value);
  }

  // chart text color
  const [chartTextColor, setChartTextColor] = useState("white");
  const handleSetChartTextColor = (color) => {
    console.log(color);
    setChartTextColor(color);
  }

  // drop shadow
  const [enableDropShadow, setEnableDropShadow] = useState(true);
  const handleSetEnableDropShadow = (e) => {
    setEnableDropShadow(e.target.checked);
  }

  // drag and drop
  const [draggingItem, setDraggingItem] = useState({
    item: {title: "", artist: "", cover: ""},
    index: -1,
    origin: ""
  });

  const initDrag = (e, album) => {
    console.log("drag");
    const dragData = {
      item: album,
      index: -1
    }
    
    if (e.dataTransfer) {
      e.dataTransfer.setData('dragData', dragData);
      setDraggingItem(dragData);
    }
  }

  const allowDrop = (e) => {
    console.log("hover");
    e.preventDefault();
  }

  const handleDragStart = (e, album, index) => {
    if (!album) {
      return null;
    }

    const dragData = {
      item: album,
      index: index,
    }

    if (e.dataTransfer) {
      const dragImage = <img className="dnd-img" src={album.image[2]["#text"]}></img>;
      const container = <div className="dnd-container">{dragImage}</div>;
      
      e.dataTransfer.effectAllowed = "move";
      e.dataTransfer.setData('dragData', dragData);
      setDraggingItem(dragData);
    }
  }

  const handleDrop = (e, index) => {
    console.log("drop");
    e.preventDefault();

    const dragData = draggingItem

    if (dragData) {
      if (dragData.index != -1) {
        removeAlbum(dragData.index);
        addAlbum(index, dragData.item);
      } else {
        addAlbum(index, dragData.item);
      }
      setDraggingItem({
        item: {title: "", artist: "", cover: ""},
        index: -1,
        origin: ""
      });
    }
  }

  return (
    <div className={styles.appContainer}>
      <div className={styles.sideBarContainer}>
        <Sidebar 
          numRows={chartNumRows} 
          numCols={chartNumCols} 
          gap={chartGap} 
          chartTitle={chartTitle}
          roundCorners={roundCorners}
          handleSetNumRows={handleSetNumRows} 
          handleSetNumCols={handleSetNumCols} 
          handleSetGap={handleSetChartGap}
          handleSetChartTitle={handleSetChartTitle}
          setRoundCorners={handleSetRoundCorners}
          selectedIndex={selectedIndex} 
          addAlbum={addAlbum} 
          searchResults={searchResults} 
          setSearchResults={handleSetSearchResults} 
          showAlbumTitles={showAlbumTitles} 
          setShowAlbumTitles={handleSetShowAlbumTitles}
          showTitleNumbers={showTitleNumbers}
          handleSetShowTitleNumbers={handleSetShowTitleNumbers}
          chartTextColor={chartTextColor}
          setChartTextColor={handleSetChartTextColor}
          enableDropShadow={enableDropShadow}
          handleSetEnableDropShadow={handleSetEnableDropShadow}
          backgroundType={backgroundType}
          setBackgroundType={handleSetBackgroundType}
          backgroundColor={backgroundColor}
          setBackgroundColor={handleSetBackgroundColor}
          backgroundImageURL={backgroundImageURL}
          setBackgroundImageURL={handleSetBackgroundImageURL}
          openMenuPopUp={openPopUp}
          handleOpenPopUp={handleOpenPopUp}
          fontStyle={fontStyle}
          setFontStyle={handleSetFontStyle}
          initDrag={initDrag}
        />
      </div>
      <div className={styles.chartBuilderContainer}>
        <ChartBuilder 
          numRows={chartNumRows} 
          numCols={chartNumCols} 
          chartTitle={chartTitle}
          gap={chartGap} 
          roundCorners={roundCorners}
          chartData={chartData}
          setChartData={handleSetChartData}
          selectedIndex={selectedIndex}
          changeIndex={changeIndex} 
          addAlbum = {addAlbum}
          removeAlbum={removeAlbum}
          showAlbumTitles={showAlbumTitles}
          showTitleNumbers={showTitleNumbers}
          chartTextColor={chartTextColor}
          enableDropShadow={enableDropShadow}
          backgroundType={backgroundType}
          backgroundColor={backgroundColor}
          backgroundImageURL={backgroundImageURL}
          fontStyle={fontStyle}
          handleDragStart={handleDragStart}
          allowDrop={allowDrop}
          handleDrop={handleDrop}
        />
      </div>
    </div>
  );
};

export default App;
