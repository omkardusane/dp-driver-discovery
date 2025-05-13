const mockData = require('../../../docs/seed/mock-applicants-2.json')
const axios = require('axios');
const { formatApplicantProfiles } = require('./utils');

const CA_URL = process.env?.CA_URL?.trim();
const fetchDataAndFilterSvc = async function (filters, { offset, limit }) {
    let response = [];
    try {
        let data = await fetchDataFromCA();
        response = data
            .concat(mockData) // appending mock data for extending test-case ability to filter
            .map(formatApplicantProfiles)
            .filter(profile => {
                for (let key in filters) {
                    if (profile.attributes[key] !== filters[key]) {
                        return false;
                    }
                }
                return true;
            });
    } catch (err) {
        console.error("Error fetching data from CA_URL", err);
        throw err;
    }
    return response;
};

function fetchDataFromCA() {
    if (!CA_URL) {
        throw "CA_URL not present in env, ensure .env file has CA_URL"
    }
    return axios.get(CA_URL).then(resp => {
        // console.log("Response from CA_URL", resp.data.length)
        if (!resp.data) throw "Response does not have readable data"
        return resp.data
    })
}


/*
todo: 
 - [ ] stream data from the ca-api <must-have improvement for 2500 applicants>
 - [ ] parse string chunks into JSON and emit
 - [ ] implement filters
 - [ ] maybe implement pagination limit
 - [ ] maybe impl pagination offset
 - return the list
*/

module.exports = {
    fetchDataFromCA,
    fetchDataAndFilterSvc
}