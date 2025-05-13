const fetchDataAndFilterSvc = require('./fetchDataAndFilterSvc');
const fetchDataFromCA = require('../ca-module/fetchApplicantsData')
const mockData = require('../../../docs/seed/mock-applicants-2.json')
const { formatApplicantProfile } = require('./utils');
jest.mock('./../ca-module/fetchApplicantsData');

describe('fetchDataAndFilterSvc', () => {
    it('should fetch data and filter by dl (one param)', async () => {
        fetchDataFromCA.mockResolvedValue(mockData);
        const filteredData = await fetchDataAndFilterSvc({ dl: "CE" });
        filteredData.forEach(applicantProfile => {
            expect(applicantProfile.attributes.dl).toEqual("CE");
        });
    });

    it('should fetch data and filter by deu and eng (>one param)', async () => {
        fetchDataFromCA.mockResolvedValue(mockData);
        const filteredData = await fetchDataAndFilterSvc({
            dl: "C1E",
            eng: 'Fluent',
            deu: 'Grundlegend'
        });
        filteredData.forEach(applicantProfile => {
            expect(applicantProfile.attributes.dl).toEqual("C1E");
            expect(applicantProfile.attributes.eng).toEqual("Fluent");
            expect(applicantProfile.attributes.deu).toEqual("Grundlegend");
        });
    });

    it('should fetch data and return all if no filters are provided', async () => {
        fetchDataFromCA.mockResolvedValue(mockData);
        const filteredData = await fetchDataAndFilterSvc({});
        expect((filteredData.length)).toEqual(mockData.length);

        for (let i = 0; i < filteredData.length; i++) {
            applicantProfile = filteredData[i];
            mockProfile = mockData[i];
            expect(applicantProfile.id).toEqual(mockProfile.ID);
        }
    });

    0 && it('should handle errors from fetchDataFromCA', async () => {
        fetchDataFromCA.mockRejectedValue(new Error('Failed to fetch data for some random reason'));

        await expect(fetchDataAndFilterSvc({})).rejects.toThrow('Failed to fetch data');
    });
});
