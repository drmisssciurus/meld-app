import { BrowserRouter, Route, Routes, useLocation } from 'react-router-dom';
import Home from './pages/Home/Home';
import Landmarks from './pages/Landmarks/Landmarks';
import Form from './pages/Form/Form';
import PrivacyPolicy from './pages/PrivacyPolicy/PrivacyPolicy';
import PageNotFound from './pages/PageNotFound/PageNotFound';
import Results from './pages/Results/Results';
import FooterCom from './components/FooterCom/FooterCom';
import FrequentlyQuestions from './pages/FrequentlyQuestions/FrequentlyQuestions';
import HowTo from './pages/HowTo/HowTo';
import { Fragment } from 'react';
import OnConstruction from './pages/OnConstruction/OnConstruction';

function LayoutWithFooter() {
  const location = useLocation();
  const hideFooter = location.pathname === '/';

  return (
    <Fragment>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/landmarks" element={<Landmarks />} />
        <Route path="/form" element={<Form />} />
        <Route path="/privacy_policy" element={<PrivacyPolicy />} />
        <Route path="/results" element={<Results />} />
        <Route path="/faq" element={<FrequentlyQuestions />} />
        <Route path="/how_to" element={<HowTo />} />
        <Route path="/construction" element={<OnConstruction />} />
        <Route path="*" element={<PageNotFound />} />
      </Routes>

      {!hideFooter && <FooterCom />}
    </Fragment>
  );
}

function App() {
  return (
    <div className="layout">
      <BrowserRouter>
        <LayoutWithFooter />
      </BrowserRouter>
    </div>
  );
}

export default App;
