import HeroSection from '../components/HeroSection';
import Navbar from '../components/Navbar'; 
import Footer from '../components/Footer';
import SalesSection from '@/components/SalesSection';
import { CartProvider } from '../context/CartContext'; // Asegúrate de que la ruta sea correcta

const Home: React.FC = () => (
  <CartProvider>
    <div>
      <HeroSection /> 
      <Navbar />
      <SalesSection />
      <Footer />
    </div>
  </CartProvider>
);

export default Home;
