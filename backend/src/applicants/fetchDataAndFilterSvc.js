const mockData = require('../../../docs/seed/mock-applicants-2.json')
const axios = require('axios');
const { formatApplicantProfiles } = require('./utils');

const CA_URL = process.env?.CA_URL?.trim();
module.exports = async function (filters, { offset, limit }) {
    let response = [];
    if (!CA_URL) {
        throw "CA_URL not present in env, ensure .env file has CA_URL"
    }
    try {
        response = await axios.get(CA_URL)
            .then(resp => {
                // console.log("Response from CA_URL", resp.data.length)
                if (!resp.data) throw "Response does not have readable data"
                return resp.data.concat(mockData)
                    .map(formatApplicantProfiles)
                    .filter(profile => {
                        for (let key in filters) {
                            if (profile.attributes[key] !== filters[key]) {
                                return false;
                            }
                        }
                        return true;
                    });
            })
    } catch (err) {
        console.error("Error fetching data from CA_URL", err);
        throw err;
    }
    return response;
};



/*
todo: 
 - [ ] stream data from the ca-api <must-have improvement for 2500 applicants>
 - [ ] parse string chunks into JSON and emit
 - [ ] implement filters
 - [ ] maybe implement pagination limit
 - [ ] maybe impl pagination offset
 - return the list
*/