import { Routes, Route } from "react-router";

import LandingPage from "../pages/LandingPage";
import CaseStudyPage from "../pages/CaseStudyPage";

function AppRouter() {
    return (
        <Routes>
            <Route path="/" element={<LandingPage />} />

            <Route
                path="/case-study/:slug"
                element={<CaseStudyPage />}
            />
        </Routes>
    );
}

export default AppRouter;