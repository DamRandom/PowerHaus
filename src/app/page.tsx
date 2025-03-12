import HeroSection from '../components/HeroSection';
import AboutUs from '../components/AboutUs';
import Products from '../components/Products';
import Services from '../components/Services';
import Team from '../components/Team';
import Contact from '../components/Contact';
import Navbar from '../components/Navbar'; 
import Footer from '../components/Footer';

const Home: React.FC = () => (
  <div>
    <HeroSection /> 
    <Navbar />
    <AboutUs />
    <Products />
    <Services />
    <Team />
    <Contact />
    <Footer />
  </div>
);

export default Home;
