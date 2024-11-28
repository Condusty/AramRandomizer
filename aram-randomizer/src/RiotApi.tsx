import axios from 'axios';
import { useState } from 'react';

const RiotApi = () => {
    const apiUrl = "https://euw1.api.riotgames.com/lol/platform/v3/champion-rotations?api_key=RGAPI-eccbb273-abee-43e1-a701-e246a76b4acc"
    //const apiUrl = "http://localhost:3001/champion-rotations";
    const [response, setResponse] = useState(null);

    async function fetchData() {
        axios.get(apiUrl).then((response) => {
            const data = response.data;
            console.log(data);
            setResponse(data);
            return data;
        }).catch((error) => {
            console.error('Error:', error);
        });
    }

    fetchData();

    return (
        <div>
            <h1 className="text-green-400">Champion Rotation</h1>
            <div className="container mx-auto p-4">
                {response ? (
                    <pre className="#282c34 text-white p-4 rounded-lg shadow-md">
                        {JSON.stringify(response, null, 2)}
                    </pre>
                ) : (
                    <p>Loading...</p>
                )}
            </div>
        </div>
    );
}

export default RiotApi;