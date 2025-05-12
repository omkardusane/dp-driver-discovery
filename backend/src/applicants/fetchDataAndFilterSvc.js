const mockData = require('../../../docs/seed/mock-applicants-2.json')
module.exports = function (filters, { offset, limit }) {
    /* 
    todo: 
     - stream data from the ca-api
     - parse string chunks into JSON and emit
     - implement filters
     - maybe implement pagination limit
     - maybe impl pagination offset
     - return the list
    */
    return mockData;
};