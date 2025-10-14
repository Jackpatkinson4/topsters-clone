import React, { useState, useEffect } from 'react';
import styles from './Search.module.css'

const lastFMAPIRoot =  import.meta.env.VITE_LASTFM_API_URL;
const apiKey = import.meta.env.VITE_LASTFM_API_KEY;

function Search() {
    const [searchInputValue, setSearchInputValue] = useState("");
    const [showLoading, setShowLoading] = useState("");
    const [searchResults, setSearchResults] = useState(null);

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
        <div className={styles.search}>
            <h2>Add albums:</h2>
            <div className={styles.searchBar}>
                <input
                    className={styles.searhBox}
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
                    onClick={() => {searchAlbums(searchInputValue)}}
                >
                </button>
            </div>
            <div className={styles.searchResults}>
                {showLoading === "search-results" ? (
                    <div className="loading">
                        <p>Loading...</p>
                    </div>
                ) : (
                    <div className={styles.albumGrid}>
                        {searchResults ? (
                            searchResults.map((album, index) => {
                                if(album.image[1]['#text']) {
                                    return (
                                        <div className={styles.albumCard}>
                                            <img 
                                                src={`${album.image[1]['#text']}`} 
                                                alt={album.name} 
                                                draggable="true"
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
            <span>Album data credited to Last.FM</span>
        </div>
    );
};

export default Search;