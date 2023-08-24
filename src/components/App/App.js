import React from 'react';
import './App.css';
import RockCounter from '../RockCounter/RockCounter';
import {Auth0Provider} from "@auth0/auth0-react";

function App() {
    return (
        // <BrowserRouter>
        <Auth0Provider domain={process.env.REACT_APP_AUTH0_DOMAIN} clientId={process.env.REACT_APP_AUTH0_CLIENT_ID}>
            <div>
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
        </Auth0Provider>
        // </BrowserRouter>
    );
}

export default App;
