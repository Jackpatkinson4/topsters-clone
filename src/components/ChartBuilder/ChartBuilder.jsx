import React, { useState } from 'react';
import Chart from '../Chart/Chart';
import styles from './ChartBuilder.module.css';

function ChartBuilder({numRows, numCols, chartTitle, gap, roundCorners, chartData, setChartData, selectedIndex, changeIndex, addAlbum, removeAlbum, showAlbumTitles, showTitleNumbers, chartTextColor, enableDropShadow, backgroundType, backgroundColor, backgroundImageURL, fontStyle, handleDragStart, allowDrop, handleDrop, resetChart}) {
    return (
        <div className={styles.chartBuilder}>
            <div className={styles.chartBuilderMenu}>
                <button type="reset" onClick={resetChart}>Reset Chart </button>
            </div>
            <Chart 
                numRows={numRows} 
                numCols={numCols} 
                chartTitle={chartTitle}
                gap={gap} 
                roundCorners={roundCorners}
                chartData={chartData} 
                setChartData={setChartData}
                selectedIndex={selectedIndex}
                changeIndex={changeIndex} 
                addAlbum={addAlbum}
                removeAlbum={removeAlbum}
                showAlbumTitles={showAlbumTitles}
                showTitleNumbers={showTitleNumbers}
                chartTextColor={chartTextColor}
                enableDropShadow={enableDropShadow}
                backgroundType = {backgroundType}
                backgroundColor={backgroundColor}
                backgroundImageURL={backgroundImageURL}
                fontStyle={fontStyle}
                handleDragStart={handleDragStart}
                allowDrop={allowDrop}
                handleDrop={handleDrop}
            />
        </div>
    );
};

export default ChartBuilder;