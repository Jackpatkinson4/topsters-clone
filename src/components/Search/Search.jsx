import React, { useState, useEffect } from 'react';
import styles from './Search.module.css'

const lastFMAPIRoot =  import.meta.env.VITE_LASTFM_API_URL;
const apiKey = import.meta.env.VITE_LASTFM_API_KEY;

function Search({selectedIndex, addAlbum, searchResults, setSearchResults, initDrag}) {
    const [searchInputValue, setSearchInputValue] = useState("");
    const [showLoading, setShowLoading] = useState("");

    const [showErrorMessage, setShowErrorMessage] = useState(
        {
            location: "",
            message: "Something went wrong. Please try again later."
        }
    );

    const handleSearch = (event) => {
        setSearchInputValue(event.target.value);
    }

    const searchAlbums = async (albumTitle) => {
        setShowLoading("search-results");
        try {
            setSearchResults(null);
            console.log("Searching...");
            const data = await fetch(`${lastFMAPIRoot}?method=album.search&album=${albumTitle}&api_key=${apiKey}&format=json`,).then(
                (response) => response.json()
            );
            if (data.results && data.results.albummatches.album.length > 0) {
                console.log("Album found!");
                setSearchResults(data.results.albummatches.album);
                console.log(data.results.albummatches.album);
                setShowLoading("");
            } else throw new Error("No results found!");
        } catch(err) {
            console.log("Error!");
            setShowLoading("");
            const errorMessage = err.toString();
            console.log(errorMessage);
            setShowErrorMessage({
                location: "search-results",
                message: `${errorMessage}`
            });
        }
    }

    return (
        <div className={styles.searchForm}>
            <div className={styles.searchBar}>
                <input
                    className={styles.searhBox}
                    id="searchBox"
                    type="text"
                    placeholder="Search..."
                    value={searchInputValue}
                    onChange={handleSearch}
                    onKeyUp={async (event) => {
                        event.key === "Enter"
                        ? searchAlbums(searchInputValue)
                        : setSearchInputValue(event.currentTarget.value)
                    }}
                />
                <button
                    className={styles.submitButton}
                    onClick={() => {
                        searchAlbums(searchInputValue)
                    }}
                >
                    🔍
                </button>
            </div>
            <div className={styles.searchResults}>
                {showLoading === "search-results" ? (
                    <div className="loading">
                        <p>Loading...</p>
                    </div>
                ) : (
                    <div className={styles.albumGrid}>
                        {Array.isArray(searchResults) ? (
                            searchResults.map((album, index) => {
                                if(album.image[1]['#text']) {
                                    return (
                                        <div
                                            className={styles.searchAlbumCard}
                                            onClick={() => {
                                                addAlbum(selectedIndex, album);
                                            }}
                                            key={index}
                                        >
                                            <img 
                                                src={`${album.image[1]['#text']}`} 
                                                alt={album.name}
                                                key={index}
                                                draggable="true"
                                                onDragStart={e => initDrag(e, album)}
                                            />
                                        </div>
                                    )
                                }
                            })
                        ) : showErrorMessage.location === "search-results" && (
                            <span>{showErrorMessage.message}</span>
                        )}
                    </div>
                )}
            </div>
        </div>
    );
};

export default Search;