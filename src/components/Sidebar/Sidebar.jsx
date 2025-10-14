import React, { useState } from 'react';
import Search from '../Search/Search';
import styles from './Sidebar.module.css';

function Sidebar() {

    return (
        <div className={styles.sideBar}>
            <div className={styles.title}>
                <h1>Flopsters</h1>
                <p>A Topsters Clone</p>
            </div>
            <Search />
        </div>
    );
};

export default Sidebar;