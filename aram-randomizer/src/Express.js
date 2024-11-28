const express = require("express");
const axios = require("axios");
const app = express();

const apiKey = "RGAPI-eccbb273-abee-43e1-a701-e246a76b4acc";

app.get("/champion-rotations", async (req, res) => {
    consolr.log("Champion Rotations");
    try {
        const response = await axios.get(`https://euw1.api.riotgames.com/lol/platform/v3/champion-rotations?api_key=${apiKey}`);
        res.json(response.data);
    } catch (error) {
        res.status(error.response?.status || 500).send(error.message);
    }
});

app.listen(3001, () => console.log("Proxy server running on port 3001"));