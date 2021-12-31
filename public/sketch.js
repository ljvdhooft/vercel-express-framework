async function post_request_json() {
    const api_url = `/api/post_json/`;
    const body = { }
    const options = {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(body)
    };
    const response = await fetch(api_url, options);
    const json = await response.json();
    console.log(json);
}

async function post_request_text() {
    const api_url = `/api/post_text/`;
    const body = '';
    const options = {
        method: 'POST',
        body: body
    };
    const response = await fetch(api_url, options);
    const json = await response.json();
    console.log(json);
}

async function get_request() {
    const api_url = `/api/get/${''}`;
    const response = await fetch(api_url);
    const json = await response.json();
    console.log(json);

}

//post_request_text();
//post_request_json();
//get_request();