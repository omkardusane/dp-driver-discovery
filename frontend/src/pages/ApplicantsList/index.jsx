import React, { useEffect, useState } from 'react';
import { fetchApplicants, contactOneApplicant, fetchFilterChoices } from '../../services/applicants';
import GeneralTable from '../../components/GeneralTable';
import GeneralToast from '../../components/GeneralToast'; import GeneralButton from '../../components/GeneralButton';
import Filters from './Filters';

export default () => {

    const [applicants, setApplicants] = useState([]);
    const [loading, setLoading] = useState(true);
    const [filterValues, setFilterValues] = useState({});
    const [filterChoices, setFilterChoices] = useState({});
    const [toastMessage, setToastMessage] = useState(null);

    const headers = [
        { key: 'name', label: 'Applicant Name' },
        { key: 'email', label: 'Email' },
        { key: 'phone', label: 'Phone' },
        { key: 'deu', label: 'Deutsche Sprache' },
        { key: 'eng', label: 'English Language' },
        { key: 'dl', label: 'Drivers License' },
        { key: 'workmode', label: 'Arbeitsmodell (work Mode)' },
    ]
    useEffect(() => {
        (async () => {
            try {
                const filterChoicesResponse = await fetchFilterChoices();
                setFilterChoices(filterChoicesResponse.deOptions);
                console.log('filter choices:,', filterChoicesResponse.deOptions)

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

    const onApplyFilter = (intentedFilters) => {
        console.log('intentedFilters ', intentedFilters);
        setFilterValues(intentedFilters);
        (async () => {
            try {
                const data = await fetchApplicants(intentedFilters);
                setApplicants(data);
            } catch (filterError) {
                console.error(filterError)
                setToastMessage('Failed to load applicants after filter')
            }
        })()
    }

    return (
        <div className="containerml-4 mr-4 py-4 px-4">
            <div className="flex  mb-4 p-2 justify-between items-center mb-4">
                <h2 className="text-3xl font-bold text-gray-800 font-mono">Applicants List
                    <span className='text-gray-400 text-xl'>
                        ({loading ? "Loading..." : applicants.length})</span>
                </h2>
                <Filters initialFilterValues={filterValues} headers={headers} filterChoices={filterChoices} onApplyFilter={onApplyFilter} />
            </div>
            {!loading && <div className="overflow-x-auto  ">
                <GeneralTable headers={headers} data={applicants} onAction={handleAction} actionLabel="Contact" />
            </div>}
            <GeneralToast message={toastMessage} onClose={() => setToastMessage(null)} />
        </div >
    )
}
