import HeroSection from '../components/HeroSection';
import Navbar from '../components/Navbar'; 
import Footer from '../components/Footer';
import SalesSection from '@/components/SalesSection';

const Home: React.FC = () => (
  <div>
    <HeroSection /> 
    <Navbar />
    <SalesSection />
    <Footer />
  </div>
);

export default Home;
