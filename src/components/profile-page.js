import { useAuth0 } from "@auth0/auth0-react";
import React from "react";

export const ProfilePage = () => {
    const { user } = useAuth0();

    if (!user) {
        return null;
    }

    return (
        <div>
            <h1>Profile Page</h1>
            <h2>{user.email}</h2>
            {/*<CodeSnippet*/}
            {/*    title="Decoded ID Token"*/}
            {/*    code={JSON.stringify(user, null, 2)}*/}
            {/*/>*/}
        </div>
    )
}