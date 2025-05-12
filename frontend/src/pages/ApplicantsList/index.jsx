import React, { useEffect, useState } from 'react';
import { fetchApplicants } from '../../services/applicants';

export default () => {

    const [applicants, setApplicants] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        (async () => {
            try {
                const data = await fetchApplicants();
                setApplicants(data); // adjust based on your API response shape
            } catch (err) {
                console.error('Failed to load applicants');
            } finally {
                setLoading(false);
            }
        })();
    }, []);

    if (loading) return <p>Loading...</p>;

    return (
        <div className="container mx-auto py-8">
            <h1 className="text-3xl font-bold mb-4">Applicants List</h1>
            <div className="overflow-x-auto">
                <table className="min-w-full bg-white border border-gray-200">
                    <thead>
                        <tr>
                            <th className="px-4 py-2 border-b border-gray-200 bg-gray-50 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                                Applicant Name
                            </th>
                            <th className="px-4 py-2 border-b border-gray-200 bg-gray-50 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                                Arbeitsmodell
                            </th>
                            <th className="px-4 py-2 border-b border-gray-200 bg-gray-50 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                                Contact
                            </th>

                        </tr>
                    </thead>
                    <tbody>
                        {/* Example row - Replace with actual data */}
                        {applicants.map((applicant) => (
                            <tr className="hover:bg-gray-50">
                                {/* <td className="px-4 py-2 border-b border-gray-200">John Doe</td> */}
                                <td className="px-4 py-2 border-b border-gray-200"> {applicant.Name}</td>
                                <td className="px-4 py-2 border-b border-gray-200"> {extractField(applicant.FormInfo, 'Arbeitsmodell')} 2</td>
                            </tr>
                        ))}

                        <tr className="hover:bg-gray-50">
                            <td className="px-4 py-2 border-b border-gray-200">John Doe</td>
                            <td className="px-4 py-2 border-b border-gray-200">Data 1</td>
                            <td className="px-4 py-2 border-b border-gray-200">Data 2</td>
                        </tr>
                        <tr className="hover:bg-gray-50">
                            <td className="px-4 py-2 border-b border-gray-200">John Doe</td>
                            <td className="px-4 py-2 border-b border-gray-200">Data 1</td>
                            <td className="px-4 py-2 border-b border-gray-200">Data 2</td>
                        </tr>
                    </tbody>
                </table>
            </div>
        </div>
    );
}

function extractField(array, field) {
    for (let item of array) {
        if (item.question == field)
            return item.answer;
    }
    return "-"
}