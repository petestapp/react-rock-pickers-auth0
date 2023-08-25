import React, {useEffect} from 'react';
import './App.css';
import RockCounter from '../RockCounter/RockCounter';
import {Navbar} from "../navbar/navbar";
import {useAuth0} from "@auth0/auth0-react";
import {ProfilePage} from "../profile-page";

function App() {
    const { isLoading } = useAuth0();
    const { user } = useAuth0();
    const { isAuthenticated } = useAuth0();

    useEffect(() => {
        console.log("Authentication status changed:", isAuthenticated);
    }, [isAuthenticated]);
    // if (isLoading) {
    //     return (
    //         <div className="page-layout">
    //             {/*<PageLoader />*/}
    //         </div>
    //     )
    // }

    return (
        <div>
            <Navbar/>
            <ProfilePage />
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
