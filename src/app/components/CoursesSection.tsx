import Image from 'next/image'; // Import the Next.js Image component

const CoursesSection = () => {
  return (
    <section id="courses" className="py-16 bg-gray-100">
      <div className="container mx-auto">
        {/* Core Courses */}
        <div className="mb-12">
          <h2 className="text-3xl font-semibold text-center mb-8">Core Courses Sequence</h2>
          <div className="flex flex-wrap justify-center gap-8">
            <div className="course-card text-center w-full sm:w-1/2 md:w-1/3 lg:w-1/4 xl:w-1/5">
              {/* Use Next.js Image component */}
              <Image
                src="/images/Programming Fundamentals.jpeg"
                alt="Programming Fundamentals"
                width={400} // Set width according to the image size
                height={200} // Set height according to the image size
                className="w-full h-48 object-cover rounded-lg mb-4"
              />
              <h3 className="text-lg font-medium">Programming Fundamentals</h3>
            </div>
            <div className="course-card text-center w-full sm:w-1/2 md:w-1/3 lg:w-1/4 xl:w-1/5">
              <Image
                src="/images/Web2 Using NextJS.jpeg"
                alt="Web2 Using NextJS"
                width={400}
                height={200}
                className="w-full h-48 object-cover rounded-lg mb-4"
              />
              <h3 className="text-lg font-medium">Web2 Using NextJS</h3>
            </div>
            <div className="course-card text-center w-full sm:w-1/2 md:w-1/3 lg:w-1/4 xl:w-1/5">
              <Image
                src="/images/Earn as You Learn.jpeg"
                alt="Earn as You Learn"
                width={400}
                height={200}
                className="w-full h-48 object-cover rounded-lg mb-4"
              />
              <h3 className="text-lg font-medium">Earn as You Learn</h3>
            </div>
          </div>
        </div>

        {/* Advanced Courses */}
        <div>
          <h2 className="text-3xl font-semibold text-center mb-8">Advanced Courses</h2>
          <div className="flex flex-wrap justify-center gap-8">
            <div className="course-card text-center w-full sm:w-1/2 md:w-1/3 lg:w-1/4 xl:w-1/5">
              <Image
                src="/images/Artificial Intelligence.jpeg"
                alt="Artificial Intelligence"
                width={400}
                height={200}
                className="w-full h-48 object-cover rounded-lg mb-4"
              />
              <h3 className="text-lg font-medium">Artificial Intelligence</h3>
            </div>
            <div className="course-card text-center w-full sm:w-1/2 md:w-1/3 lg:w-1/4 xl:w-1/5">
              <Image
                src="/images/Web 3 and Metaverse.jpeg"
                alt="Web 3 and Metaverse"
                width={400}
                height={200}
                className="w-full h-48 object-cover rounded-lg mb-4"
              />
              <h3 className="text-lg font-medium">Web 3 and Metaverse</h3>
            </div>
            <div className="course-card text-center w-full sm:w-1/2 md:w-1/3 lg:w-1/4 xl:w-1/5">
              <Image
                src="/images/Cloud-Native Computing.jpeg"
                alt="Cloud-Native Computing"
                width={400}
                height={200}
                className="w-full h-48 object-cover rounded-lg mb-4"
              />
              <h3 className="text-lg font-medium">Cloud-Native Computing</h3>
            </div>
            <div className="course-card text-center w-full sm:w-1/2 md:w-1/3 lg:w-1/4 xl:w-1/5">
              <Image
                src="/images/Ambient Computing and IoT.jpeg"
                alt="Ambient Computing & IoT"
                width={400}
                height={200}
                className="w-full h-48 object-cover rounded-lg mb-4"
              />
              <h3 className="text-lg font-medium">Ambient Computing & IoT</h3>
            </div>
            <div className="course-card text-center w-full sm:w-1/2 md:w-1/3 lg:w-1/4 xl:w-1/5">
              <Image
                src="/images/Genomics and Bioinformatics.jpeg"
                alt="Genomics & Bioinformatics"
                width={400}
                height={200}
                className="w-full h-48 object-cover rounded-lg mb-4"
              />
              <h3 className="text-lg font-medium">Genomics & Bioinformatics</h3>
            </div>
            <div className="course-card text-center w-full sm:w-1/2 md:w-1/3 lg:w-1/4 xl:w-1/5">
              <Image
                src="/images/Network Programmability and Automation.jpeg"
                alt="Network Automation"
                width={400}
                height={200}
                className="w-full h-48 object-cover rounded-lg mb-4"
              />
              <h3 className="text-lg font-medium">Network Automation</h3>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CoursesSection;
