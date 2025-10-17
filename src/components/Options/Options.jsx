import React, { useState } from 'react';
import styles from './Options.module.css';

function Options({numRows, numCols, gap, handleSetNumRows, handleSetNumCols, handleSetGap}) {
    return (
        <div className={styles.optionsList}>
            <div className={styles.rangeInputContainer}>
                <label htmlFor="numRowsSlider">Rows:</label>
                <div className={styles.sliderContainer}>
                    <input className={styles.input} id="numRowsSlider" name="numRowsSlider" type="range" min="1" max="12" value={numRows} onChange={handleSetNumRows}/>
                    <span className={styles.valueDisplay}>{numRows}</span>
                </div>
            </div>
            <div className={styles.rangeInputContainer}>
                <label htmlFor="numColsSlider">Columns:</label>
                <div className={styles.sliderContainer}>
                    <input className={styles.input} id="numColsSlider" name="numColsSlider" type="range" min="1" max="12" value={numCols} onChange={handleSetNumCols}/>
                    <span className={styles.valueDisplay}>{numCols}</span>
                </div>
            </div>
            <div className={styles.rangeInputContainer}>
                <label htmlFor="gapSlider">Gap:</label>
                <div className={styles.sliderContainer}>
                    <input className={styles.input} id="gapSlider" name="gapSlider" type="range" min="1" max="150" value={gap} onChange={handleSetGap}/>
                    <span className={styles.valueDisplay}>{gap}</span>
                </div>
            </div>
        </div>
    );
}

export default Options;