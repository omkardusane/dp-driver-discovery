import axios from 'axios';

const API_BASE_URL = 'http://localhost:3000';

export const fetchApplicants = async (page = 1) => {
    try {
        const response = await axios.get(`${API_BASE_URL}/applicants`, {
            params: {
                // deu: 'Grundlegend',
                // eng: 'Keine Englischkenntnisse',

                // for testing with empty response without validation err
                // deu: 'Fließend',
                // eng: 'Fluent',
                // dl: "B"
                // dl: "CE"
            },
        });
        return response.data.map(e => {
            return {
                ...e,
                ...e.attributes
            };
        });
    } catch (error) {
        console.error('Error fetching applicants:', error);
        throw error;
    }
};

export const contactOneApplicant = async (applicantId) => {
    try {
        const response = await axios.post(`${API_BASE_URL}/applicants/${applicantId}/contact`);
        console.log('Successfullly contacted an applicant ', response)
        return response?.data?.ok;
    } catch (error) {
        console.error('Error contacting applicant:', error);
        return false
    }
}