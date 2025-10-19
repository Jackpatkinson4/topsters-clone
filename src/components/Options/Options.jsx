import React, { useState } from 'react';
import styles from './Options.module.css';

function Options({numRows, numCols, gap, handleSetNumRows, handleSetNumCols, handleSetGap, showAlbumTitles, setShowAlbumTitles}) {
    return (
        <div className={styles.optionsList}>
            <div className={styles.switchInputContainer}>
                <label htmlFor="showTitlesSwitch">Show Titles:</label>
                <div className={styles.switchContainer}>
                    <input className={styles.switch} id="showTitlesSwitch" type="checkbox" checked={showAlbumTitles} onChange={setShowAlbumTitles}/>
                    <label className={styles.switchLabel} style={{background: showAlbumTitles && 'blue'}}htmlFor="showTitlesSwitch">
                        <span className={styles.switchButton}/>
                    </label>
                </div>
            </div>
            <div className={styles.rangeInputContainer}>
                <label htmlFor="numRowsSlider">Rows:</label>
                <div className={styles.sliderContainer}>
                    <input className={styles.slider} id="numRowsSlider" name="numRowsSlider" type="range" min="1" max="12" value={numRows} onChange={handleSetNumRows}/>
                    <span className={styles.valueDisplay}>{numRows}</span>
                </div>
            </div>
            <div className={styles.rangeInputContainer}>
                <label htmlFor="numColsSlider">Columns:</label>
                <div className={styles.sliderContainer}>
                    <input className={styles.slider} id="numColsSlider" name="numColsSlider" type="range" min="1" max="12" value={numCols} onChange={handleSetNumCols}/>
                    <span className={styles.valueDisplay}>{numCols}</span>
                </div>
            </div>
            <div className={styles.rangeInputContainer}>
                <label htmlFor="gapSlider">Gap:</label>
                <div className={styles.sliderContainer}>
                    <input className={styles.slider} id="gapSlider" name="gapSlider" type="range" min="1" max="150" value={gap} onChange={handleSetGap}/>
                    <span className={styles.valueDisplay}>{gap}</span>
                </div>
            </div>
        </div>
    );
}

export default Options;