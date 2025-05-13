const mockData = require('../../../docs/seed/mock-applicants-2.json')
const { formatApplicantProfile } = require('./utils');
const fetchDataFromCA = require('../ca-module/fetchApplicantsData')

module.exports = async function (filters) {
    let response = [];
    try {
        let data = await fetchDataFromCA();
        response = data
            .concat(mockData) // appending mock data for extending test-case ability to filter
            .map(formatApplicantProfile)
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

/*
todo: 
 - [ ] stream data from the ca-api <must-have improvement for 2500 applicants>
 - [ ] parse string chunks into JSON and emit
 - [ ] implement filters
 - [ ] maybe implement pagination limit
 - [ ] maybe impl pagination offset
 - return the list
*/
