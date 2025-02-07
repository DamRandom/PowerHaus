import Link from 'next/link';

export default function HomeContent() {
  return (
    <section className="flex-1 flex items-center justify-center px-4 py-6 bg-[#DADCE1] text-[#262520] mt-8">
      <div className="w-full max-w-6xl grid grid-cols-1 md:grid-cols-2 gap-4">
        {/* Columna izquierda */}
        <div className="flex flex-col gap-4 w-full">
          {/* Quiénes somos */}
          <div className="p-4">
            <h2 className="text-2xl font-semibold mb-2">Who We Are</h2>
            <p className="text-base leading-relaxed text-justify mb-3">
              At PowerHaus, innovation is at the heart of every home. Our mission is to make life smarter and more efficient with top-tier appliances.
            </p>
            <p className="text-base leading-relaxed text-justify">
              We’re more than a store—we’re your gateway to a comfortable, tech-forward home.
            </p>
          </div>

          {/* Qué ofrecemos */}
          <div className="p-4">
            <h2 className="text-2xl font-semibold mb-2">What We Offer</h2>
            <p className="text-base leading-relaxed text-justify mb-3">
              Our carefully curated catalog brings you the best appliances. From energy-efficient refrigerators to powerful washing machines, we’ve got you covered.
            </p>
            <p className="text-base leading-relaxed text-justify mb-3">
              Innovation, quality, and durability define everything we offer.
            </p>
            {/* Botón a la tienda */}
            <Link href="/store">
              <div className="inline-block mt-2 px-6 py-2 bg-[#596766] text-white rounded-lg text-center hover:bg-[#ABC1BB]">
                Visit Our Store
              </div>
            </Link>
          </div>
        </div>

        {/* Columna derecha */}
        <div className="p-4 flex items-center">
          <div>
            <h2 className="text-2xl font-semibold mb-2">Meet Our Team</h2>
            <p className="text-base leading-relaxed mb-4 text-justify">
              Behind PowerHaus is a team of passionate professionals who live and breathe technology. Our experts carefully
              select every appliance to ensure it meets the highest standards. But we don’t just sell products—we guide you to
              the perfect solution for your home. Our commitment goes beyond transactions; we provide top-tier customer support
              and expert advice to help you make informed decisions.
            </p>
            <p className="text-base leading-relaxed text-justify">
              From our customer service team to our in-house technicians, we are here to answer your questions, solve your
              problems, and enhance your home experience. PowerHaus is not just about products; it’s about creating a seamless,
              hassle-free lifestyle through reliable technology.
            </p>
            {/* Botón a conocer al equipo */}
            <Link href="#team">
              <div className="inline-block mt-2 px-6 py-2 bg-[#596766] text-white rounded-lg text-center hover:bg-[#ABC1BB]">
                Meet Our Team
              </div>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
