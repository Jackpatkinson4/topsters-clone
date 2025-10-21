import React, { useState } from 'react';
import Tabs from '../Tabs/Tabs';
import Search from '../Search/Search';
import Options from '../Options/Options';
import styles from './Sidebar.module.css';

function Sidebar({numRows, numCols, gap, chartTitle, handleSetNumRows, handleSetNumCols, handleSetGap, handleSetChartTitle, selectedIndex, addAlbum, searchResults, setSearchResults, showAlbumTitles, setShowAlbumTitles, backgroundType, setBackgroundType, backgroundColor, setBackgroundColor, openMenuPopUp, handleOpenPopUp, fontStyle, setFontStyle, initDrag}) {
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
                        handleSetNumRows={handleSetNumRows} 
                        handleSetNumCols={handleSetNumCols} 
                        handleSetGap={handleSetGap} 
                        handleSetChartTitle={handleSetChartTitle}
                        showAlbumTitles={showAlbumTitles} 
                        setShowAlbumTitles={setShowAlbumTitles}
                        backgroundType={backgroundType}
                        setBackgroundType={setBackgroundType}
                        backgroundColor={backgroundColor}
                        setBackgroundColor={setBackgroundColor}
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