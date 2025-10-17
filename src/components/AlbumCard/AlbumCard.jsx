import React, { useState, useEffect } from 'react';
import styles from './AlbumCard.module.css';

export const defaultAlbumObject = {
    name: "",
    artist: "",
}

function AlbumCard({albumData=defaultAlbumObject, index=0}) {
    return (
        <div className={styles.albumCard}>
            {albumData.hasOwnProperty("image") ? (
                albumData.image[1]["text"] && (
                    <img 
                        src={`${albumData.image[2]["text"]}`}
                    />
                )
            ) : (
                <div style={{backgroundColor: "gray"}}></div>
            )}
        </div>
    );
}

export default AlbumCard;