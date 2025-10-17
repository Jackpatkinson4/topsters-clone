import React, { useState } from 'react';
import Chart from '../Chart/Chart';
import styles from './ChartBuilder.module.css';

function ChartBuilder({numRows, numCols, gap, chartData, changeIndex}) {
    return (
        <div className={styles.chartBuilder}>
            <Chart numRows={numRows} numCols={numCols} gap={gap} chartData={chartData} changeIndex={changeIndex}/>
        </div>
    );
};

export default ChartBuilder;