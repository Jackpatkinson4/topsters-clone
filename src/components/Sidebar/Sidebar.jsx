import React, { useState } from 'react';
import Tabs from '../Tabs/Tabs';
import Search from '../Search/Search';
import Options from '../Options/Options';
import styles from './Sidebar.module.css';

function Sidebar({numRows, numCols, gap, chartTitle, roundCorners, handleSetNumRows, handleSetNumCols, handleSetGap, handleSetChartTitle, setRoundCorners, selectedIndex, addAlbum, searchResults, setSearchResults, showAlbumTitles, setShowAlbumTitles, showTitleNumbers, handleSetShowTitleNumbers, chartTextColor, setChartTextColor, enableDropShadow, handleSetEnableDropShadow, backgroundType, setBackgroundType, backgroundColor, setBackgroundColor, backgroundImageURL, setBackgroundImageURL, openMenuPopUp, handleOpenPopUp, fontStyle, setFontStyle, initDrag}) {
    const tabs = [
        {
            label: 'Add Items',
            content: <Search 
                        selectedIndex={selectedIndex} 
                        addAlbum={addAlbum} 
                        searchResults={searchResults} 
                        setSearchResults={setSearchResults}
                        initDrag={initDrag}
                    />
        },
        {
            label: 'Options',
            content: <Options 
                        numRows={numRows} 
                        numCols={numCols} 
                        gap={gap} 
                        chartTitle={chartTitle}
                        roundCorners={roundCorners}
                        handleSetNumRows={handleSetNumRows} 
                        handleSetNumCols={handleSetNumCols} 
                        handleSetGap={handleSetGap} 
                        handleSetChartTitle={handleSetChartTitle}
                        setRoundCorners={setRoundCorners}
                        showAlbumTitles={showAlbumTitles} 
                        setShowAlbumTitles={setShowAlbumTitles}
                        showTitleNumbers={showTitleNumbers}
                        handleSetShowTitleNumbers={handleSetShowTitleNumbers}
                        chartTextColor={chartTextColor}
                        setChartTextColor={setChartTextColor}
                        enableDropShadow={enableDropShadow}
                        handleSetEnableDropShadow={handleSetEnableDropShadow}
                        backgroundType={backgroundType}
                        setBackgroundType={setBackgroundType}
                        backgroundColor={backgroundColor}
                        setBackgroundColor={setBackgroundColor}
                        backgroundImageURL={backgroundImageURL}
                        setBackgroundImageURL={setBackgroundImageURL}
                        openMenuPopUp={openMenuPopUp}
                        handleOpenPopUp={handleOpenPopUp}
                        fontStyle={fontStyle}
                        setFontStyle={setFontStyle}
                    />
        },
        {
            label: 'Import/Export',
            content: <span>TBA</span>
        },
        {
            label: 'Info',
            content: <span>TBA</span>
        }
    ];

    function handleTabChange(currentTabIndex) {
        console.log(currentTabIndex);
    };

    return (
        <div className={styles.sideBar}>
            <div className={styles.title}>
                <h1>Flopsters</h1>
                <p>A Topsters Clone</p>
            </div>
            <Tabs tabsContent={tabs} onChange={handleTabChange}/>
            <span>Album data credited to Last.FM</span>
        </div>
    );
};

export default Sidebar;