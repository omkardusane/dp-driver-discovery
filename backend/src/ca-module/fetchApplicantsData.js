const CA_URL = process.env?.CA_URL?.trim();
const axios = require('axios');

module.exports = function fetchDataFromCA() {
    if (!CA_URL) {
        throw "CA_URL not present in env, ensure .env file has CA_URL"
    }
    return axios.get(CA_URL).then(resp => {
        // console.log("Response from CA_URL", resp.data.length)
        if (!resp.data) throw "Response does not have readable data"
        return resp.data
    })
}

