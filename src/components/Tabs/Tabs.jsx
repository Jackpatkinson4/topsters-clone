import React, { useState } from 'react';
import styles from './Tabs.module.css';

function Tabs({tabsContent, onChange}) {

    const [currentTabIndex, setCurrentTabIndex] = useState(0);

    function handleOnClick(getCurrentIndex) {
        setCurrentTabIndex(getCurrentIndex);
        onChange(getCurrentIndex);
    }
    
    return (
        <div className={styles.tabWrapper}>
            <div className={styles.tabHeading}>
                {tabsContent.map((tabItem, index) => (
                    <div onClick={()=> handleOnClick(index)} key={tabItem.label}>
                        <span className={styles.tabLabel}>{tabItem.label}</span>
                    </div>
                ))}
            </div>
            <div className={styles.tabContent}>
                {tabsContent[currentTabIndex] && tabsContent[currentTabIndex].content}
            </div>
        </div>
    );
}

export default Tabs;