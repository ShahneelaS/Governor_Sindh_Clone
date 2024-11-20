import Image from 'next/image'; // Import the Image component from Next.js

const AboutSection = () => {
  return (
    <section id="about" className="py-16 bg-white text-gray-800">
      <div className="container mx-auto px-4 sm:px-8 lg:px-12 xl:px-20">
        <h3 className="text-2xl sm:text-3xl lg:text-4xl font-bold mb-8 text-center">
          Certified Cloud Applied Generative AI Engineer (GenEng) and Solopreneur Developing Billion-Dollar Valued Developers and Solopreneurs
        </h3>
        <p className="text-base sm:text-lg lg:text-xl leading-relaxed mb-12 text-center">
          The pace of technological change is accelerating, big players like Microsoft, Amazon, Google, and OpenAI are winning by providing infrastructure, large AI foundation models, frameworks, 3D Metaverse experiences, and massive distribution networks. Solopreneurs trained in this program will win by automating work typically outsourced to employees, by directly connecting to customers by eliminating the middleman, and by developing vertical metaverses, thus paving the way for the first billion-dollar valued solopreneur businesses. This program has the objective to train this new breed of billion-dollar solopreneurs. These solopreneurs will adopt the ultra-lean business model and work independently and will not need to hire employees or other team members.
        </p>

        {/* Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8 lg:gap-10">
          <div className="card bg-gray-100 p-4 sm:p-6 rounded-lg shadow-lg">
            {/* Use the Next.js Image component */}
            <Image 
              src="/images/image1.jpeg" 
              alt="Course 1" 
              width={500} 
              height={300}
              className="w-full h-48 object-cover rounded-t-lg"
            />
          </div>
          <div className="card bg-gray-100 p-4 sm:p-6 rounded-lg shadow-lg">
            <Image 
              src="/images/image2.jpeg" 
              alt="Course 2" 
              width={500} 
              height={300}
              className="w-full h-48 object-cover rounded-t-lg"
            />
          </div>
          <div className="card bg-gray-100 p-4 sm:p-6 rounded-lg shadow-lg">
            <Image 
              src="/images/image3.jpeg" 
              alt="Course 3" 
              width={500} 
              height={300}
              className="w-full h-48 object-cover rounded-t-lg"
            />
          </div>
          <div className="card bg-gray-100 p-4 sm:p-6 rounded-lg shadow-lg">
            <Image 
              src="/images/image4.jpeg" 
              alt="Course 4" 
              width={500} 
              height={300}
              className="w-full h-48 object-cover rounded-t-lg"
            />
          </div>
          <div className="card bg-gray-100 p-4 sm:p-6 rounded-lg shadow-lg">
            <Image 
              src="/images/image5.jpeg" 
              alt="Course 5" 
              width={500} 
              height={300}
              className="w-full h-48 object-cover rounded-t-lg"
            />
          </div>
          <div className="card bg-gray-100 p-4 sm:p-6 rounded-lg shadow-lg">
            <Image 
              src="/images/image6.jpeg" 
              alt="Course 6" 
              width={500} 
              height={300}
              className="w-full h-48 object-cover rounded-t-lg"
            />
          </div>
          <div className="card bg-gray-100 p-4 sm:p-6 rounded-lg shadow-lg">
            <Image 
              src="/images/image7.jpeg" 
              alt="Course 7" 
              width={500} 
              height={300}
              className="w-full h-48 object-cover rounded-t-lg"
            />
          </div>
          <div className="card bg-gray-100 p-4 sm:p-6 rounded-lg shadow-lg">
            <Image 
              src="/images/image8.jpeg" 
              alt="Course 8" 
              width={500} 
              height={300}
              className="w-full h-48 object-cover rounded-t-lg"
            />
          </div>
          <div className="card bg-gray-100 p-4 sm:p-6 rounded-lg shadow-lg">
            <Image 
              src="/images/image9.jpeg" 
              alt="Course 9" 
              width={500} 
              height={300}
              className="w-full h-48 object-cover rounded-t-lg"
            />
          </div>
          <div className="card bg-gray-100 p-4 sm:p-6 rounded-lg shadow-lg">
            <Image 
              src="/images/image10.jpeg" 
              alt="Course 10" 
              width={500} 
              height={300}
              className="w-full h-48 object-cover rounded-t-lg"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
