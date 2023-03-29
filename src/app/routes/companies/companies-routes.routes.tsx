import { AboutPage } from 'app/pages/companies/about'
import { CompaniesHomePage } from 'app/pages/companies/home'
import { CompanyLoginPage } from 'app/pages/companies/login'
import { PositionDetailsPage } from 'app/pages/companies/position-details'
import { PositionsPage } from 'app/pages/companies/positions'
import { TraineeReviewPage } from 'app/pages/companies/trainee-review'
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom'
import { PublishJobPage } from '../../pages/companies/publish-job'
import { CompanySignUpPage } from '../../pages/companies/sign-up'
import { AppPath } from '../app.path'

export const CompaniesRoutes = () => {
    const { companies } = AppPath
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/*" element={<Navigate to={companies.home} />} />
                <Route path={companies.home} element={<CompaniesHomePage />} />
                <Route
                    path={companies.signUp}
                    element={<CompanySignUpPage />}
                />
                <Route
                    path={companies.publishJob}
                    element={<PublishJobPage />}
                />
                <Route path={companies.positions} element={<PositionsPage />} />
                <Route
                    path={companies.positions + '/:id'}
                    element={<PositionDetailsPage />}
                />
                <Route
                    path={companies.traineeReview}
                    element={<TraineeReviewPage />}
                />
                <Route
                    path={companies.signUp}
                    element={<CompanySignUpPage />}
                />
                <Route path={companies.login} element={<CompanyLoginPage />} />
                <Route path={companies.about} element={<AboutPage />} />
            </Routes>
        </BrowserRouter>
    )
}
