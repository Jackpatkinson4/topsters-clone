import React, { useState, useEffect } from 'react';
import DeleteButton from '../DeleteButton/DeleteButton';
import styles from './Chart.module.css'

function Chart({numRows, numCols, gap, chartData, setChartData, changeIndex, removeAlbum, showAlbumTitles, backgroundColor}) {
    return (
        <div className={styles.chartContainer} style={{backgroundColor: `${backgroundColor}`}}>
            <div className={styles.chartGrid} style={{gap: `${gap}px`, padding: `${gap}px`}}>
                {chartData.map((row, rowIndex) => {
                    return (
                        <div
                            className={styles.chartRow}
                            style={{gap:`${gap}px`, gridTemplateColumns: `repeat(${numCols}, 1fr)`}}
                            key={rowIndex}
                        >
                            {row.map((album, colIndex) => {
                                return (
                                    <div 
                                        className={styles.albumCard}
                                        key={colIndex}
                                        index = {(rowIndex * numCols) + colIndex}
                                        onClick={()=>{
                                            const index = (rowIndex * numCols) + colIndex;
                                            changeIndex(index);
                                        }}
                                        draggable
                                    >
                                        {album.hasOwnProperty("image") ? (
                                            album.image[1]["#text"] && (
                                                <>
                                                    <img 
                                                        src={`${album.image[2]["#text"]}`}
                                                    />
                                                    <DeleteButton index={(rowIndex*numCols)+colIndex} removeAlbum={removeAlbum}/>
                                                </>
                                            )
                                        ) : (
                                            <div className={styles.albumPlaceholder}></div>
                                        )}
                                    </div>
                                );
                            })}
                            {showAlbumTitles && (
                                <div className={styles.titleList}>
                                    {row.map((album, index) => {
                                        return (
                                            <div
                                                className={styles.albumTitle}
                                                key={index}
                                            >
                                                {album.artist ? (
                                                    <span>
                                                        {album.artist} - {album.name}
                                                    </span>
                                                ) : (
                                                    <span></span>
                                                )}
                                            </div>
                                        );
                                    })}
                                </div>
                            )}
                        </div>
                    );
                })}
            </div>
        </div>
    );
};

export default Chart;