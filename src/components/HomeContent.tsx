export default function HomeContent() {
    return (
      <section className="flex-1 flex items-center justify-center px-16 pt-8"
        style={{ backgroundImage: "url('/path-to-your-image.jpg')", backgroundSize: "cover", backgroundPosition: "center" }}>
        <div className="w-full max-w-6xl grid grid-cols-2 gap-12 text-[#262520]">
          
          {/* Columna izquierda con dos párrafos */}
          <div className="flex flex-col gap-8 w-full">
            {/* Quiénes somos */}
            <div className="bg-[#ABC1BB] p-6 rounded-lg">
              <h2 className="text-xl font-bold mb-2">Who We Are</h2>
              <p className="text-base leading-snug">
                At PowerHaus, we believe that the heart of every home beats with innovation. Our journey began with a simple idea: 
                to make everyday life easier, smarter, and more efficient through high-quality appliances.
              </p>
              <p className="text-base leading-snug mt-2">
                We are not just a store—we are a gateway to a home filled with comfort and cutting-edge technology.
              </p>
            </div>
  
            {/* Qué ofrecemos */}
            <div className="bg-[#AABA9A] p-6 rounded-lg">
              <h2 className="text-xl font-bold mb-2">What We Offer</h2>
              <p className="text-base leading-snug">
                Our catalog is carefully curated to provide you with the best appliances on the market. Whether you are looking 
                for energy-efficient refrigerators, powerful washing machines, or the latest in smart kitchen gadgets, we have it all.
              </p>
              <p className="text-base leading-snug mt-2">
                Quality, durability, and innovation define every product we offer.
              </p>
            </div>
          </div>
  
          {/* Columna derecha con un párrafo largo */}
          <div className="bg-[#DADCE1] p-6 rounded-lg flex items-center">
            <div>
              <h2 className="text-xl font-bold mb-2">Meet Our Team</h2>
              <p className="text-base leading-snug">
                Behind PowerHaus is a team of passionate professionals who live and breathe technology. Our experts carefully select 
                every appliance to ensure it meets the highest standards. But we don’t just sell products—we guide you to the perfect 
                solution for your home. Our commitment goes beyond transactions; we provide top-tier customer support and expert advice 
                to help you make informed decisions.
              </p>
              <p className="text-base leading-snug mt-2">
                From our customer service team to our in-house technicians, we are here to answer your questions, solve your problems, 
                and enhance your home experience. PowerHaus is not just about products; it’s about creating a seamless, hassle-free 
                lifestyle through reliable technology.
              </p>
            </div>
          </div>
  
        </div>
      </section>
    );
  }
  