import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom'
import { CompaniesHomePage } from '../../pages/companies/home/companies-home.page'
import { CompanySignUpPage } from '../../pages/companies/sign-up/company-sign-up.page'
import { AppPath } from '../app.path'

export const CompaniesRoutes = () => {
    const { companies } = AppPath
    return (
        <BrowserRouter>
            <Routes>
                <Route
                    path="/companies"
                    element={<Navigate to={companies.home} />}
                />
                <Route path={companies.home} element={<CompaniesHomePage />} />
                <Route
                    path={companies.signUp}
                    element={<CompanySignUpPage />}
                />
            </Routes>
        </BrowserRouter>
    )
}
