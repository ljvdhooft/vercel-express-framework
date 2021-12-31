const express = require('express');
const fetch = require('node-fetch');
require('dotenv').config();

const app = express();
const port = process.env.PORT || 3000;

app.listen(port, () => console.log(`Server running on ${port}, http://localhost:${port}`));
app.use(express.static('public'));
app.use(express.json()); 
app.use(express.text());


app.post('/api/post_json/', async (request, response) => {
    const data = request.body;

    const ep = request.body.property_here;
    const api_url = `https://api.wheretheiss.at/v1/satellites/${ep}`;
    const fetch_response = await fetch(api_url);
    const json = await fetch_response.json();
    response.json(json);
});

app.post('/api/post_text/', async (request, response) => {
    const ep = request.body;

    const api_url = `https://api.wheretheiss.at/v1/satellites/${ep}`;
    const fetch_response = await fetch(api_url);
    const json = await fetch_response.json();
    response.json(json);
});

app.get('/api/get/:ep', async (request, response) => {
    const ep = request.params.ep;
    
    const api_url = `https://api.wheretheiss.at/v1/satellites/${ep}`;
    const fetch_response = await fetch(api_url);
    const json = await fetch_response.json();
    response.json(json);
});