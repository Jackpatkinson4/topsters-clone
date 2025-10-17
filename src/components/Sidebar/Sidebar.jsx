import React, { useState } from 'react';
import Tabs from '../Tabs/Tabs';
import Search from '../Search/Search';
import styles from './Sidebar.module.css';

function Sidebar() {
    const tabs = [
        {
            label: 'Add Items',
            content: <Search/>
        },
        {
            label: 'Options',
            content: <span>TBA</span>
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