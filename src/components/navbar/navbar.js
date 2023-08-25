import { useAuth0 } from "@auth0/auth0-react";
import React, {useEffect} from "react";
import { LoginButton } from "../buttons/login-button";
import { LogoutButton } from "../buttons/logout-button";
import { SignupButton } from "../buttons/signup-button";

export const Navbar = () => {
    const { isAuthenticated } = useAuth0();

    useEffect(() => {
        setTimeout(() => {
            console.log("Authentication status changed:", isAuthenticated);
        }, 2000);
        // console.log("Authentication status changed:", isAuthenticated);
    }, [isAuthenticated]);

    return (
        <div className="navbar">
            {!isAuthenticated ? (
                <>
                    {/*<SignupButton />*/}
                    {/*<LoginButton />*/}
                    signup and login
                </>
            ) : (
                // <LogoutButton />
                <>
                logout
                </>
            )}
            <SignupButton />
            <LoginButton />
            <LogoutButton />
        </div>
    )
}