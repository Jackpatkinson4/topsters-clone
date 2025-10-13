import React, { useState } from 'react';
import Search from '../Search/Search';

function Sidebar() {

    return (
        <>
            <div>
                <h1>Flopsters</h1>
                <p>A Topsters Clone</p>
            </div>
            <Search />
        </>
    );
};

export default Sidebar;