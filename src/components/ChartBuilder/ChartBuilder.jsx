import React, { useState } from 'react';
import Chart from '../Chart/Chart';
import styles from './ChartBuilder.module.css';

function ChartBuilder({numRows, numCols, gap, chartData, setChartData, selectedIndex, changeIndex, addAlbum, removeAlbum, showAlbumTitles, backgroundColor, fontStyle, handleDragStart, allowDrop, handleDrop}) {
    return (
        <div className={styles.chartBuilder}>
            <Chart 
                numRows={numRows} 
                numCols={numCols} 
                gap={gap} 
                chartData={chartData} 
                setChartData={setChartData}
                selectedIndex={selectedIndex}
                changeIndex={changeIndex} 
                addAlbum={addAlbum}
                removeAlbum={removeAlbum}
                showAlbumTitles={showAlbumTitles} 
                backgroundColor={backgroundColor}
                fontStyle={fontStyle}
                handleDragStart={handleDragStart}
                allowDrop={allowDrop}
                handleDrop={handleDrop}
            />
        </div>
    );
};

export default ChartBuilder;