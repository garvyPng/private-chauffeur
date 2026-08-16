import {
    BrowserRouter,
    Navigate,
    Route,
    Routes,
    useLocation,
} from 'react-router-dom';
import { HomePage } from '../pages/Home';
import { ExperiencesPage } from '../pages/Experiences';
import AppLayout from './AppLayout';
import { useEffect } from 'react';
import { ExperienceOverviewPage } from '../pages/ExperienceOverview';
import { VehiclePage } from '../pages/Vehicle';
import { ContactPage } from '../pages/Contact';

const ScrollToTop = () => {
    const { pathname } = useLocation();

    useEffect(() => {
        window.scrollTo(0, 0);
    }, [pathname]);

    return null;
};

export default function App() {
    return (
        <BrowserRouter>
            <ScrollToTop />
            <Routes>
                <Route path='/' element={<Navigate to='/en' replace />} />

                <Route path='/:lang' element={<AppLayout />}>
                    <Route index element={<HomePage />} />
                    <Route path='experiences' element={<ExperiencesPage />} />
                    <Route
                        path='experiences/:tour'
                        element={<ExperienceOverviewPage />}
                    />
                    <Route path='vehicle' element={<VehiclePage />} />
                    <Route path='contact' element={<ContactPage />} />
                </Route>
            </Routes>
        </BrowserRouter>
    );
}
