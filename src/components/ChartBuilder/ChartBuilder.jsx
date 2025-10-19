import React, { useState } from 'react';
import Chart from '../Chart/Chart';
import styles from './ChartBuilder.module.css';

function ChartBuilder({numRows, numCols, gap, chartData, setChartData, changeIndex, removeAlbum, showAlbumTitles}) {
    return (
        <div className={styles.chartBuilder}>
            <Chart 
                numRows={numRows} 
                numCols={numCols} 
                gap={gap} 
                chartData={chartData} 
                setChartData={setChartData}
                changeIndex={changeIndex} 
                removeAlbum={removeAlbum}
                showAlbumTitles={showAlbumTitles} 
            />
        </div>
    );
};

export default ChartBuilder;