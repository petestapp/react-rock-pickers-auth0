import { useAuth0 } from "@auth0/auth0-react";
import React from "react";
import { LoginButton } from "../buttons/login-button";
import { LogoutButton } from "../buttons/logout-button";
import { SignupButton } from "../buttons/signup-button";

export const Navbar = () => {
    const { isAuthenticated } = useAuth0();

    return (
        <div className="navbar">
            {/*{!isAuthenticated && (*/}
            {/*    <>*/}
            {/*        <SignupButton />*/}
            {/*        <LoginButton />*/}
            {/*    </>*/}
            {/*)}*/}
            {/*{isAuthenticated && (*/}
            {/*    <>*/}
            {/*        <LogoutButton />*/}
            {/*    </>*/}
            {/*)}*/}
            <SignupButton />
            <LoginButton />
            <LogoutButton />
        </div>
    )
}