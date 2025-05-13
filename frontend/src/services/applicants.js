import axios from 'axios';

const API_BASE_URL = 'http://localhost:3000';

export const fetchApplicants = async (page = 1) => {
    try {
        const response = await axios.get(`${API_BASE_URL}/applicants`, {
            params: { deu: 'Grundlegend' },
        });
        return response.data.map(e => {
            return {
                id: e.ID,
                name: e.Name,
                email: e.Email,
                workmode: extractField(e.FormInfo, 'Arbeitsmodell'),
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

function extractField(array, field) {
    for (let item of array) {
        if (item.question == field)
            return item.answers;
    }
    return "-"
}