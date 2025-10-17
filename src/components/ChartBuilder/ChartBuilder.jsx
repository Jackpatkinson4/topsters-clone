import React, { useState } from 'react';
import Chart from '../Chart/Chart';
import styles from './ChartBuilder.module.css';

function ChartBuilder({numRows, numCols, chartData, changeIndex}) {
    return (
        <div className={styles.chartBuilder}>
            <Chart numRows={numRows} numCols={numCols} chartData={chartData} changeIndex={changeIndex}/>
        </div>
    );
};

export default ChartBuilder;