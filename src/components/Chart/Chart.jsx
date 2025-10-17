import React, { useState, useEffect } from 'react';
import styles from './Chart.module.css'

function Chart({numRows, numCols, gap, chartData, changeIndex}) {
    return (
        <div className={styles.chartContainer}>
            <div className={styles.chartGrid} style={{gridTemplateColumns: `repeat(${numCols}, 1fr)`, gridTemplateRows: `repeat(${numRows}, 1fr)`, gap: `${gap}px`, padding: `${gap}px`}}>
                {chartData.slice(0, numRows*numCols).map((album,index) => {
                    return (
                        <div 
                            className={styles.albumCard}
                            key={index}
                            index={index}
                            onClick={()=>{
                                changeIndex(index);
                            }}
                        >
                            {album.hasOwnProperty("image") ? (
                                album.image[1]["#text"] && (
                                <img 
                                    src={`${album.image[2]["#text"]}`}
                                />
                                )
                            ) : (
                                <div className={styles.albumPlaceholder}></div>
                            )}
                        </div>
                    );
                })}
            </div>
        </div>
    );
};

export default Chart;