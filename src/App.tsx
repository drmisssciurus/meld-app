import { BrowserRouter, Route, Routes, Navigate } from 'react-router-dom';

// import Home from './pages/Home/Home';
import Landmarks from './pages/Landmarks/Landmarks';
import Form from './pages/Form/Form';
import Results from './pages/Results/Results';

import PrivacyPolicy from './pages/PrivacyPolicy/PrivacyPolicy';
import PrivacyPolicyLandmarks from './pages/PrivacyPolicy/PrivacyPolicyLandmarks';
import TermsOfService from './pages/PrivacyPolicy/TermsOfService';

import FrequentlyQuestions from './pages/FrequentlyQuestions/FrequentlyQuestions';
import HowTo from './pages/HowTo/HowTo';
// import OnConstruction from './pages/OnConstruction/OnConstruction';
import PageNotFound from './pages/PageNotFound/PageNotFound';

import FooterCom from './components/FooterCom/FooterCom';
// import Navigation from './components/Navigation/Navigation'; // если у тебя есть общий навигатор - включи тут

function App() {
  return (
    <div className="layout">
      <BrowserRouter>
        {/* <Navigation /> */}

        <Routes>
          {/* <Route path="/" element={<Home />} /> */}

          {/* Landmarks module */}
          <Route path="/">
            <Route index element={<Landmarks />} />
            <Route path="form" element={<Form />} />
            <Route path="results" element={<Results />} />
            <Route
              path="privacy_policy_lm"
              element={<PrivacyPolicyLandmarks />}
            />

            <Route path="faq" element={<FrequentlyQuestions />} />
            <Route path="how_to" element={<HowTo />} />
            {/* <Route path="/construction" element={<OnConstruction />} /> */}
          </Route>

          {/* Global pages */}
          <Route path="/privacy_policy" element={<PrivacyPolicy />} />
          <Route path="/terms" element={<TermsOfService />} />
          <Route
            path="/faq"
            element={<Navigate to="/landmarks/faq" replace />}
          />
          <Route
            path="/how_to"
            element={<Navigate to="/landmarks/how_to" replace />}
          />
          <Route
            path="/privacy_policy_lm"
            element={<Navigate to="/landmarks/privacy_policy_lm" replace />}
          />
          <Route path="*" element={<PageNotFound />} />
        </Routes>

        <FooterCom />
      </BrowserRouter>
    </div>
  );
}

export default App;
