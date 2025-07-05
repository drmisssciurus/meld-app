import { useRef } from 'react';

import Header from '../../components/Header/Header';
import Banner from '../../components/Banner/Banner';
import GifsSlider from '../../components/GifsSlider/GifsSlider';
import ContactUs from '../../components/ContactUs/ContactUs';
import Publications from '../../components/Publications/Publications';
import OurTeam from '../../components/OurTeam/OurTeam';
import ScrollToTopButton from '../../components/ScrollToTopButton/ScrollToTopButton';

function Home() {
  const publicationsRef = useRef<HTMLDivElement>(null);
  const peopleRef = useRef<HTMLDivElement>(null);
  const contactRef = useRef<HTMLDivElement>(null);
  return (
    <div className="container">
      <Header
        page="home"
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
    </div>
  );
}

export default Home;
