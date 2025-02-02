export default function Navbar() {
    return (
      <nav className="fixed top-0 left-0 w-full bg-[#596766] text-white p-4 flex justify-between items-center">
        <h1 className="text-xl font-bold">PowerHaus</h1>
        <ul className="flex space-x-4">
          <li><a href="#about">About</a></li>
          <li><a href="#services">Services</a></li>
          <li><a href="#team">Team</a></li>
        </ul>
      </nav>
    );
  }
  