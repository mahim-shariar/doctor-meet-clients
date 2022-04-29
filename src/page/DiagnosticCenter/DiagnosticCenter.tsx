import React from 'react';
import BookCovidTest from '../../components/DiagnosticCenterComponents/BookCovidTest/BookCovidTest';
import ChooseDiagnostics from '../../components/DiagnosticCenterComponents/ChooseDiagnostics/ChooseDiagnostics';
import CovidAwarnessBar from '../../components/DiagnosticCenterComponents/CovidAwarnessBar/CovidAwarnessBar';
import DiagnosticCenterBanner from '../../components/DiagnosticCenterComponents/DiagnosticCenterBanner/DiagnosticCenterBanner';
import DiagnosticChooseUs from '../../components/DiagnosticCenterComponents/DiagnosticChooseUs/DiagnosticChooseUs';
import DiagnosticSpecialities from '../../components/DiagnosticCenterComponents/DiagnosticSpecialities/DiagnosticSpecialities';
import OurDiagnosticServices from '../../components/DiagnosticCenterComponents/OurDiagnosticServices/OurDiagnosticServices';
import PopularTestProcedures from '../../components/DiagnosticCenterComponents/PopularTestProcuders/PopularTestProcedures';





const DiagnosticCenter = () => {
    return (
        <div>
            <h1>Hello From Diagnostic Center</h1>
            <DiagnosticCenterBanner></DiagnosticCenterBanner>
            <CovidAwarnessBar></CovidAwarnessBar>
            <PopularTestProcedures></PopularTestProcedures>
            <OurDiagnosticServices></OurDiagnosticServices>
            <DiagnosticChooseUs></DiagnosticChooseUs>
            <BookCovidTest></BookCovidTest>
            <DiagnosticSpecialities></DiagnosticSpecialities>
            <ChooseDiagnostics></ChooseDiagnostics>
        </div>
    );
};

export default DiagnosticCenter;