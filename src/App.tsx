import Header from './components/Header/Header';
import Banner from './components/Banner/Banner';
import GifsSlider from './components/GifsSlider/GifsSlider';
import ContactUs from './components/ContactUs/ContactUs';
import Publications from './components/Publications/Publications';
import OurTeam from './components/OurTeam/OurTeam';
import Form from './components/Form/Form';
// import Form from './pages/Form/Form';
import { useRef } from 'react';
import ScrollToTopButton from './components/ScrollToTopButton/ScrollToTopButton';

function App() {
  const publicationsRef = useRef<HTMLDivElement>(null);
  const peopleRef = useRef<HTMLDivElement>(null);
  const contactRef = useRef<HTMLDivElement>(null);

  return (
    <div className="container">
      <Header
        sections={{
          publications: publicationsRef,
          people: peopleRef,
          contact: contactRef,
        }}
      />
      <Banner />
      <GifsSlider />
      <Publications sectionRef={publicationsRef} />
      <OurTeam sectionRef={peopleRef} />
      <ContactUs sectionRef={contactRef} />
      <ScrollToTopButton />
      <Form />
      {/* <Form /> */}
    </div>
  );
}

export default App;
