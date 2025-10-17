import React, { useState, useEffect } from 'react';
import AlbumCard from '../AlbumCard/AlbumCard';
import styles from './Chart.module.css'

function Chart({numRows, numCols, gap, chartData, changeIndex}) {
    let chartArray = [];
    if (chartData.length < numRows*numCols) {
        const numExtra = (numRows*numCols) - chartData.length;
        let extraSlots = [];
        for (let i = 0; i < numExtra; i++) {
            extraSlots.push({});
        };
        chartArray = [...chartData, ...extraSlots];
    } else if (chartData.length > numRows*numCols) {
        chartArray = chartData.slice(0, numRows*numCols);
    } else {
        chartArray = chartData;
    }
    return (
        <div className={styles.chartContainer}>
            <div className={styles.chartGrid} style={{gridTemplateColumns: `repeat(${numCols}, 1fr)`, gridTemplateRows: `repeat(${numRows}, 1fr)`, gap: `${gap}px`, padding: `${gap}px`}}>
                {chartArray.map((album,index) => {
                    return (
                        <>
                            {album.hasOwnProperty("image") ? (
                                <AlbumCard 
                                    key={index}
                                    albumData={album}
                                    index={index}
                                    onClick={()=>{
                                        changeIndex(index);
                                    }}
                                />
                            ) : (
                                <AlbumCard
                                    key={index}
                                    index={index}
                                    onClick={()=>{
                                        changeIndex(index);
                                    }}
                                />
                            )}
                        </>
                    );
                })}
            </div>
        </div>
    );
};

export default Chart;