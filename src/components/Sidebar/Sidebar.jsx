import React, { useState } from 'react';
import Tabs from '../Tabs/Tabs';
import Search from '../Search/Search';
import Options from '../Options/Options';
import styles from './Sidebar.module.css';

function Sidebar({numRows, numCols, gap, handleSetNumRows, handleSetNumCols, handleSetGap, selectedIndex, addAlbum, searchResults, setSearchResults, showAlbumTitles, setShowAlbumTitles}) {
    const tabs = [
        {
            label: 'Add Items',
            content: <Search 
                        selectedIndex={selectedIndex} 
                        addAlbum={addAlbum} 
                        searchResults={searchResults} 
                        setSearchResults={setSearchResults}
                    />
        },
        {
            label: 'Options',
            content: <Options 
                        numRows={numRows} 
                        numCols={numCols} 
                        gap={gap} 
                        handleSetNumRows={handleSetNumRows} 
                        handleSetNumCols={handleSetNumCols} 
                        handleSetGap={handleSetGap} 
                        showAlbumTitles={showAlbumTitles} 
                        setShowAlbumTitles={setShowAlbumTitles}
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