const makeTheCall = async (url, body = null, method = 'GET') => {
    try {
        let options = {
            method,
            headers: {
                'Content-Type': 'application/json',
            },
            credentials: 'include', // For including cookies in requests
        };

        // If it's a GET request and body is provided, convert it to query parameters
        if (method === 'GET' && body) {
            const queryString = new URLSearchParams(body).toString();
            url += `?${queryString}`;
        }
        else if (body) { // For POST, PUT, DELETE methods, add the body to the request options
            options.body = JSON.stringify(body);
        }

        const response = await fetch(url, options);

        if (!response.ok) {
            throw new Error(`HTTP error! Status: ${response.status}`);
        }

        return await response.json(); // Assuming the response is JSON
    } catch (error) {
        console.error('Error making the request:', error);
        throw error;
    }
};

export default makeTheCall;