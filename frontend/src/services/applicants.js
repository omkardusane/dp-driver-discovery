import axios from 'axios';

const API_BASE_URL = 'http://localhost:3000'; // Change this to your backend URL

export const fetchApplicants = async (page = 1) => {
    try {
        const response = await axios.get(`${API_BASE_URL}/applicants`, {
            params: { deu: 'Grundlegend' },
        });
        return response.data.map(e => {
            return {
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

function extractField(array, field) {
    for (let item of array) {
        if (item.question == field)
            return item.answers;
    }
    return "-"
}