import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Home from './pages/Home/Home';
import Form from './pages/Form/Form';
import PrivacyPolicy from './pages/PrivacyPolicy/PrivacyPolicy';
import PageNotFound from './pages/PageNotFound';
import Results from './pages/Results/Results';
import FooterCom from './components/FooterCom/FooterCom';

function App() {
  return (
    <div className="layout">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/form" element={<Form />} />
          <Route path="/privacy_policy" element={<PrivacyPolicy />} />
          <Route path="/results" element={<Results />} />
          <Route path="*" element={<PageNotFound />} />
        </Routes>
        <FooterCom />
      </BrowserRouter>
    </div>
  );
}

export default App;
