import Image from 'next/image'; // Import the Next.js Image component

const HeroSection = () => {
  return (
    <section
      className="relative bg-cover bg-center pt-36 pb-36 flex flex-col lg:flex-row items-center justify-between"
      style={{ backgroundImage: 'url(/images/Background.jpeg)' }} // Keep the background image
    >
      {/* Semi-transparent white overlay for the background */}
      <div className="absolute inset-0 bg-white opacity-80"></div>

      {/* Text content */}
      <div className="relative max-w-xl pl-8 z-10 mb-8 sm:mb-12 md:mb-60 lg:w-1/2 text-center lg:text-left">
        <h2 className="text-6xl font-bold mb-4 text-[#0b3e6f]">Governor Sindh</h2>
        <h3 className="text-4xl font-semibold mb-4 text-[#0b3e6f]">Kamran Khan Tessori</h3>
        <p className="text-4xl font-bold mb-0 text-[#3498db]">Certified Cloud </p>
        <p className="text-4xl font-bold mb-0 text-[#3498db]">Applied Generative AI</p>
        <p className="text-4xl font-bold mb-6 text-[#3498db]">Engineer (GenEng)</p>
        <p className="text-2xl font-bold mb-6 text-[#0b3e6f]">Earn up to $5,000 / month</p>
        <p className="text-2xl font-bold mb-8 text-[#0b3e6f]">Now admissions are open in Hyderabad</p>

        {/* Apply Now button and Accepted Applications aligned side by side */}
        <div className="flex items-center gap-6 mb-6 justify-center lg:justify-start">
          <button className="px-8 py-4 bg-[#0b3e6f] hover:bg-[#0d4879] text-white rounded-lg text-xl">
            Apply Now
          </button>
          <div className="text-2xl">
            <span>Accepted Applications: </span>
            <span className="font-bold">562,143</span>
          </div>
        </div>
      </div>

      {/* Hero image */}
      <div className="relative w-full max-w-2xl lg:w-1/2 sm:w-full sm:h-auto sm:mt-8 lg:block sm:mb-0 lg:mb-0">
        {/* Image positioned at the bottom on small screens */}
        <div className="relative w-full h-auto sm:mt-8 sm:mb-12 lg:mb-0">
          <Image
            src="/images/hero image.png"
            alt="Governor Sindh"
            width={800}  // Adjust width for display
            height={1000} // Adjust height to be larger and cover the bottom properly
            className="rounded-lg shadow-md object-cover w-full h-auto sm:sticky sm:bottom-0 lg:h-auto"
          />
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
