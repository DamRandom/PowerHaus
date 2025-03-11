import HeroSection from '../components/HeroSection';
import AboutUs from '../components/AboutUs';
import Products from '../components/Products';
import Services from '../components/Services';
import Team from '../components/Team';
import Contact from '../components/Contact';

const Home: React.FC = () => (
  <div>
    <HeroSection />
    <AboutUs />
    <Products />
    <Services />
    <Team />
    <Contact />
  </div>
);

export default Home;
