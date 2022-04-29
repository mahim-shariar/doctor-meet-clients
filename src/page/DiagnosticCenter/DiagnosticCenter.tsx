import React from 'react';
import CovidAwarnessBar from '../../components/DiagnosticCenterComponents/CovidAwarnessBar/CovidAwarnessBar';
import DiagnosticCenterBanner from '../../components/DiagnosticCenterComponents/DiagnosticCenterBanner/DiagnosticCenterBanner';
import PopularTestProcedures from '../../components/DiagnosticCenterComponents/PopularTestProcuders/PopularTestProcedures';





const DiagnosticCenter = () => {
    return (
        <div>
            <h1>Hello From Diagnostic Center</h1>
            <DiagnosticCenterBanner></DiagnosticCenterBanner>
            <CovidAwarnessBar></CovidAwarnessBar>
            <PopularTestProcedures></PopularTestProcedures>
        </div>
    );
};

export default DiagnosticCenter;