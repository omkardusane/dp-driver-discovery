import React, { useState } from 'react';
import PopupCard from '../../components/PopupCard';
import GeneralDropdown from '../../components/GeneralDropdown';
import GeneralButton from '../../components/GeneralButton';

export default ({ headers, filterChoices, onApplyFilter }) => {
    const [selectedFilters, setSelectedFilters] = useState({});

    const handleFilterChange = (key, value) => {
        console.log('selected', key, value)
        if (!value) {
            setSelectedFilters(prevFilters => {
                delete prevFilters[key];
                return prevFilters;
            });
        } else {
            setSelectedFilters(prevFilters => ({
                ...prevFilters,
                [key]: value,
            }));
        }
    };

    const applyFilters = () => {
        onApplyFilter(selectedFilters);
    };

    return (
        <PopupCard buttonLabel="Filters" cardTitle="Filter Applicants">
            <div className="grid grid-cols-2 gap-4">
                {Object.keys(filterChoices)
                    .filter(key => filterChoices[key].length > 0)
                    .map((key) => {
                        return (
                            <div key={key}>
                                <label className="block text-gray-700 text-sm font-bold mb-2">
                                    {headers.find(header => header.key === key)?.label || key}
                                </label>
                                <GeneralDropdown
                                    placeholder="All"
                                    options={filterChoices[key].map(e => ({ value: e, label: e }))}
                                    onChange={(value) => handleFilterChange(key, value)}
                                />
                            </div>);
                    })}
            </div>
            <div className="mt-6 flex justify-end">
                <GeneralButton text="Apply" onClick={applyFilters} className="mr-2" />
            </div>
        </PopupCard>);

};