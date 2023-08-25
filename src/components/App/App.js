import React from 'react';
import './App.css';
import RockCounter from '../RockCounter/RockCounter';
import {Navbar} from "../navbar/navbar";
import {useAuth0} from "@auth0/auth0-react";

function App() {
    const { isLoading } = useAuth0();

    if (isLoading) {
        return (
            <div className="page-layout">
                <PageLoader />
            </div>
        )
    }

    return (
        <div>
            <Navbar/>
            <header>
                <h1>React Rock Pickers</h1>
                <p>
                    "You ain't ever worked a day until you worked a day picking rocks." -
                    Mike Schlangen
                </p>
            </header>
            <h2>Luke</h2>
            <RockCounter/>
            <h2>JJ</h2>
            <RockCounter/>
            <h2>Sam</h2>
            <RockCounter/>
            <h2>Pete</h2>
            <RockCounter/>
        </div>
    );
}

export default App;
