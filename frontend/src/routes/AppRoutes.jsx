import React from 'react';
import { Routes, Route } from 'react-router-dom';
import LandingPage from '../pages/LandingPage';
import ApplicantsPage from '../pages/ApplicantsList';

export default function AppRoutes() {
    return (
        <Routes>
            <Route path="/" element={<LandingPage />} />
            <Route path="/applicants" element={<ApplicantsPage />} />
        </Routes>
    );
}
