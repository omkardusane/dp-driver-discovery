import React, { useEffect, useState } from 'react';
import { fetchApplicants } from '../../services/applicants';
import GeneralTable from '../../components/GeneralTable';


export default () => {

    const [applicants, setApplicants] = useState([]);
    const [loading, setLoading] = useState(true);
    const headers = [
        { key: 'name', label: 'Applicant Name' },
        { key: 'workmode', label: 'Arbeitsmodell (work Mode)' },
    ]
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

    const handleAction = async (row) => {

    }

    return (
        <div className="container mx-auto py-8">
            <h1 className="text-3xl font-bold mb-4">Applicants List</h1>
            <div className="overflow-x-auto ml-4 mr-4 ">
                <GeneralTable headers={headers} data={applicants} onAction={handleAction} actionLabel="Contact" />
            </div>
        </div>
    );
}


