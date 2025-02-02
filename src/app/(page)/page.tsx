import Navbar from "@/components/Navbar";
import HomeContent from "@/components/HomeContent";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <div className="h-screen flex flex-col">
      <Navbar />
      <main className="flex-1 flex">
        <HomeContent />
      </main>
      <Footer />
    </div>
  );
}
