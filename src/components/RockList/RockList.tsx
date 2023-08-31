import React, {useEffect, useState} from "react";
import axios from "axios";
import {useAuth0} from "@auth0/auth0-react";

interface Rock {
    id: number,
    type: string
}

export const RockList: React.FC = () => {
    const [rockList, setRockList] = useState<Rock[]>([]);


    const { user, getAccessTokenSilently } = useAuth0();

    useEffect(() => {
        const fetchRocks = async () => {
            try {
                const token = await getAccessTokenSilently();
                const response = await axios.get<Rock[]>("http://localhost:6060/getAllRocks", {
                    headers: {
                        Authorization: `Bearer ${token}`,
                    }
                });
                console.log(`response:`, response);
                setRockList(response.data);
            } catch (error) {
                console.error("error getting all rocks", error);
            }
        };

        fetchRocks();
    }, [getAccessTokenSilently]);

    if (!user) {
        return null;
    }


    return (
        <div>
            <h2>List of Rocks</h2>
            <ul>
                {rockList.map((rock) => (
                    <li key={rock.id}>{rock.type}</li>
                ))}
            </ul>
        </div>
    )
}