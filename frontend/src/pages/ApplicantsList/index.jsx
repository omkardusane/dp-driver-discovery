import React, { useEffect, useState } from 'react';
import { fetchApplicants, contactOneApplicant } from '../../services/applicants';
import GeneralTable from '../../components/GeneralTable';
import GeneralToast from '../../components/GeneralToast';


export default () => {

    const [applicants, setApplicants] = useState([]);
    const [loading, setLoading] = useState(true);
    const [toastMessage, setToastMessage] = useState(null);

    const headers = [
        { key: 'name', label: 'Applicant Name' },
        { key: 'deu', label: 'Deutsche Sprache' },
        { key: 'eng', label: 'English Language' },
        { key: 'dl', label: 'Drivers License' },
        { key: 'workmode', label: 'Arbeitsmodell (work Mode)' },
    ]
    useEffect(() => {
        (async () => {
            try {
                const data = await fetchApplicants();
                setApplicants(data);
            } catch (err) {
                console.error('Failed to load applicants');
                setToastMessage('Failed to load applicants')
            } finally {
                setLoading(false);
            }
        })();
    }, []);

    if (loading) return <p>Loading...</p>;

    const handleAction = async (row) => {
        try {
            let contactSuccess = await contactOneApplicant(row.id);
            if (contactSuccess) {
                setToastMessage('Contact was established')
            } else {
                setToastMessage('Contact did not go through')
            }
        } catch (ContactErr) {
            setToastMessage('Contact did not go through')
            console.error('Here we would like to create a UI toast inform user of any error', ContactErr)
        }
    }

    return (
        <div className="container mx-auto py-8">
            <h1 className="text-3xl font-bold mb-4 ml-2 text-gray-800 font-mono">Applicants List {loading ? "true" : "false"}</h1>
            <div className="overflow-x-auto ml-4 mr-4 ">
                <GeneralTable headers={headers} data={applicants} onAction={handleAction} actionLabel="Contact" />
            </div>
            <GeneralToast message={toastMessage} onClose={() => setToastMessage(null)} />
        </div >
    );
}


