import React, { useState, useRef, useEffect } from 'react';
import PopupCard from '../../components/PopupCard';
import GeneralDropdown from '../../components/GeneralDropdown';
import GeneralButton from '../../components/GeneralButton';

export default ({ headers, filterChoices, onApplyFilter, initialFilterValues }) => {
    const [selectedFilters, setSelectedFilters] = useState(initialFilterValues);
    const popupCardRef = useRef(null);
    console.log('initialFilterValues', initialFilterValues)
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

    useEffect(() => {
        setSelectedFilters(initialFilterValues);
    }, [initialFilterValues]);


    const applyFilters = () => {
        onApplyFilter(selectedFilters);
        if (popupCardRef.current) {
            popupCardRef.current.close();
        }
    };
    const clearFilters = () => {
        setSelectedFilters({});
        onApplyFilter({});
        if (popupCardRef.current) {
            popupCardRef.current.close();
        }
    };

    return (
        <PopupCard ref={popupCardRef} buttonLabel="Filters" cardTitle="Filter Applicants">
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
                                    value={selectedFilters[key]}
                                    options={filterChoices[key].map(e => ({ value: e, label: e }))}
                                    onChange={(value) => handleFilterChange(key, value)}
                                />
                            </div>);
                    })}
            </div>
            <div className="mt-6 flex justify-end">
                <GeneralButton text="Apply" onClick={applyFilters} className="mr-2" />
                <GeneralButton text="Clear" onClick={clearFilters} className="mr-2" />
            </div>
        </PopupCard>);

};