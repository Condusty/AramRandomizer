import axios from 'axios';
import { useState } from 'react';

const RiotApi = () => {
    const apiKey = "RGAPI-eccbb273-abee-43e1-a701-e246a76b4acc"
    const apiUrl = "https://euw1.api.riotgames.com/lol/platform/v3/champion-rotations?api_key=RGAPI-eccbb273-abee-43e1-a701-e246a76b4acc"
    const [response, setResponse] = useState(null);

    async function fetchData() {
        try {
            setResponse(await axios.get(apiUrl));
            //response = await axios.get(apiUrl);
            // Handle the response
            if (response != null) {
                console.log(response.status);
            }
        } catch (error) {
            // Handle the error
        }
    }

    fetchData();


    return (
        <div>
            <h1></h1>
        </div>
    );
}

export default RiotApi;