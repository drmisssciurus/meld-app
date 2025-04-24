import Header from './components/Header/Header';
import Banner from './components/Banner/Banner';
import GifsSlider from './components/GifsSlider/GifsSlider';
import ContactUs from './components/ContactUs/ContactUs';
import Publications from './components/Publications/Publications';
import OurTeam from './components/OurTeam/OurTeam';

function App() {
  return (
    <div className="container">
      <Header />
      <Banner />
      <GifsSlider />
      <Publications />
      <OurTeam />
      <ContactUs />
    </div>
  );
}

export default App;
