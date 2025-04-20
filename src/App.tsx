import Header from './components/Header/Header';
import Banner from './components/Banner/Banner';
import GifsSlider from './components/GifsSlider/GifsSlider';
import ContactUs from './components/ContactUs/ContactUs';
import Publications from './components/Publications/Publications';

function App() {
  return (
    <div className="container">
      <Header />
      <Banner />
      <GifsSlider />
      <Publications />
      <ContactUs />
    </div>
  );
}

export default App;
