import { FaInstagram, FaFacebook } from 'react-icons/fa';

export default function Footer() {
  return (
    <footer
      id='footer'
      className="w-full bg-[#DADCE1] text-[#262520] p-4 flex justify-between items-center shadow-md shadow-[#262520]">
      {/* Columna izquierda: nombre del negocio y eslogan */}
      <div className="flex flex-col space-y-1">
        <h1 className="text-xl font-semibold">PowerHaus</h1>
        <p className="text-sm">Making your home smarter, one appliance at a time.</p>
      </div>

      {/* Columna central: derechos de autor */}
      <div className="flex-1 flex justify-center">
        <p className="text-sm">&copy; {new Date().getFullYear()} PowerHaus. All rights reserved.</p>
      </div>

      {/* Columna derecha: íconos de redes sociales */}
      <div className="flex space-x-4">
        <a href="https://www.instagram.com/powerhaus" className="text-2xl hover:text-[#ABC1BB]">
          <FaInstagram />
        </a>
        <a href="https://www.facebook.com/powerhaus" className="text-2xl hover:text-[#ABC1BB]">
          <FaFacebook />
        </a>
      </div>
    </footer>
  );
}
