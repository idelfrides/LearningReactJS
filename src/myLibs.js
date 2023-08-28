function makeFetch({ endpoint, method, resourceId }) {
    let realUrl = '';
    const baseURL = 'http://localhost:7000/';
    baseURL = baseURL.concat(endpoint);
    
    const headers = {"Content-Type": "application/json"};
    const params = {
        method: method,
        headers: headers
    };
    
    if (resourceId.length > 0) {
        // realUrl = baseURL.concat(`/${resourceId}`)
        realUrl = baseURL.concat('/', `/${resourceId}`)
    }
    else{
        realUrl = baseURL
    }

    fetch(realUrl, params)
    .then((resp) => resp.json())
    .then((data) => {
        return data
    })
    .catch((err) => console.log(err));
}

export default makeFetch;