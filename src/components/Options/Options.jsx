import React, { useState } from 'react';
import styles from './Options.module.css';
import { HexColorPicker } from "react-colorful";

function Options({numRows, numCols, gap, chartTitle, handleSetNumRows, handleSetNumCols, handleSetGap, handleSetChartTitle, showAlbumTitles, setShowAlbumTitles, backgroundType, setBackgroundType, backgroundColor, setBackgroundColor, openMenuPopUp, handleOpenPopUp, fontStyle, setFontStyle}) {
    return (
        <div className={styles.optionsList}>
            <div className={styles.textInputContainer}>
                <label htmlFor="title">Title:</label>
                <div className={styles.textContainer}>
                    <input className={styles.textInput} id="title" placeHolder="Type your title here!" name="title" type="text" value={chartTitle} onChange={handleSetChartTitle}/>
                </div>
            </div>
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
            <div className={styles.selectTypeContainer}>
                <label htmlFor="backgroundType">Background Type:</label>
                <div className={styles.selectContainer}>
                    <select id="backgroundType" name="backgroundType" value={backgroundType} onChange={setBackgroundType}>
                        <option value="color">Color</option>
                        <option value="image">Image</option>
                    </select>
                </div>
            </div>
            {backgroundType == "color" ? (
                <div className={styles.colorInputContainer}>
                    <label htmlFor="colorButton">Background Color:</label>
                    <div className={styles.colorPickerContainer} style={{backgroundColor: `${backgroundColor}`}}>
                        {openMenuPopUp === "backgroundColor" && (
                            <div className={styles.colorPickerPopUp}>
                                <button className={styles.closePopUp} id="closePopUp" onClick={() => handleOpenPopUp("")}>X</button>
                                <HexColorPicker
                                    className={styles.colorPicker}
                                    color={backgroundColor}
                                    onChange={setBackgroundColor}
                                />
                            </div>
                        )}
                        <div className={styles.colorButton} id="colorButton" onClick={() => handleOpenPopUp("backgroundColor")}></div>
                    </div>
                </div>
            ) : (
                <span>TBA</span>
            )}
            <div className={styles.rangeInputContainer}>
                <label htmlFor="gapSlider">Gap:</label>
                <div className={styles.sliderContainer}>
                    <input className={styles.slider} id="gapSlider" name="gapSlider" type="range" min="1" max="150" value={gap} onChange={handleSetGap}/>
                    <span className={styles.valueDisplay}>{gap}</span>
                </div>
            </div>
            <div className={styles.selectTypeContainer}>
                <label htmlFor="fontStyle">Font Style:</label>
                <div className={styles.selectContainer}>
                    <select id="fontStyle" name="fontStyle" value={fontStyle} onChange={setFontStyle} style={{fontFamily:`${fontStyle}`}}>
                        <option value="serif" style={{fontFamily:"serif"}}>Serif</option>
                        <option value="sans-serif" style={{fontFamily:"sans-serif"}}>Sans-Serif</option>
                        <option value="monospace" style={{fontFamily:"monospace"}}>Monospace</option>
                    </select>
                </div>
            </div>
        </div>
    );
}

export default Options;