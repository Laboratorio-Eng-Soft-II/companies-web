import { BrowserRouter, Routes, Route } from 'react-router-dom'
import { CompaniesHomePage } from '../../pages/companies/home/companies-home.page'
import { AppPath } from '../app.path'

export const CompaniesRoutes = () => {
    const { companies } = AppPath
    return (
        <BrowserRouter>
            <Routes>
                <Route path={companies.home} element={<CompaniesHomePage />} />
            </Routes>
        </BrowserRouter>
    )
}
