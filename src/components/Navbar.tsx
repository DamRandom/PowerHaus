export default function Navbar() {
  return (
    <nav className="fixed top-0 left-0 w-full bg-[#DADCE1] text-[#262520] p-4 flex justify-between items-center shadow-md shadow-[#262520] z-10">
      {/* Business name */}
      <h1 className="text-xl font-semibold">PowerHaus</h1>

      {/* Navigation menu */}
      <ul className="flex space-x-6">
        <li><a href="#about" className="hover:text-[#ABC1BB]">About</a></li>
        <li><a href="#services" className="hover:text-[#ABC1BB]">Services</a></li>
        <li><a href="#team" className="hover:text-[#ABC1BB]">Team</a></li>
      </ul>
    </nav>
  );
}
