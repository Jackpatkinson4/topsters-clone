import React, { useState, useEffect } from 'react';
import {emptyChart} from '../../assets/emptyCharts.jsx';
import DeleteButton from '../DeleteButton/DeleteButton';
import styles from './Chart.module.css'

function Chart({numRows, numCols, chartTitle, gap, chartData, setChartData, selectedIndex, changeIndex, addAlbum, removeAlbum, showAlbumTitles, backgroundColor, fontStyle, handleDragStart, allowDrop, handleDrop}) {
    return (
        <div className={styles.chartContainer} style={{backgroundColor: `${backgroundColor}`}}>
            <div className={styles.chartTitle} style={{fontFamily:`${fontStyle}`}}>
                <h1>{chartTitle}</h1>
            </div>
            <div className={styles.chartGrid} style={{gap: `${gap}px`, padding: `${gap}px`, paddingTop: chartTitle ? `${gap / 2}px` : `${gap}px`}}>
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
                                            const index = (rowIndex * numCols) + colIndex
                                            changeIndex(index);
                                        }}
                                        draggable
                                        onDragStart={(e) => handleDragStart(e, album, (rowIndex * numCols) + colIndex)}
                                        onDragOver={allowDrop}
                                        onDrop={(e) => handleDrop(e, (rowIndex * numCols) + colIndex)}
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
                            {showAlbumTitles && row.some(album=>album.name) && (
                                <div className={styles.titleList} style={{fontFamily:`${fontStyle}`}}>
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