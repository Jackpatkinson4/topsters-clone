import React, { useState, useEffect } from 'react';
import styles from "./DeleteButton.module.css";

function DeleteButton({index, removeAlbum}) {
    const [isHovering, setIsHovering] = useState(false);

    return (
        <div 
            className={styles.hoverContainer}
            onMouseEnter={() => setIsHovering(true)}
            onMouseLeave={() => setIsHovering(false)}
        >
            {isHovering && (
                <button 
                    className={styles.deleteButton}
                    onClick={()=>{
                        removeAlbum(index);
                    }}
                >
                    X
                </button>
            )}
        </div>
    );
}

export default DeleteButton