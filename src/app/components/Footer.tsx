import { FaFacebook, FaTwitter, FaInstagram, FaEnvelope, FaYoutube } from 'react-icons/fa';

const Footer = () => {
  return (
    <footer className="py-16 bg-gray-200">
      <div className="container mx-auto px-8">
        <div className="flex flex-wrap justify-between items-start">
          {/* Core and Advanced Courses Section */}
          <div className="w-full sm:w-1/2 md:w-1/3 lg:w-1/4 mb-8">
            <h3 className="text-2xl font-semibold mb-4">Core Courses</h3>
            <ul>
              <li><a href="#core-courses" className="hover:text-gray-500">Programming Fundamentals</a></li>
              <li><a href="#core-courses" className="hover:text-gray-500">Web2 Using NextJS</a></li>
              <li><a href="#core-courses" className="hover:text-gray-500">Earn as You Learn</a></li>
            </ul>
          </div>

          <div className="w-full sm:w-1/2 md:w-1/3 lg:w-1/4 mb-8">
            <h3 className="text-2xl font-semibold mb-4">Advanced Courses</h3>
            <ul>
              <li><a href="#advanced-courses" className="hover:text-gray-500">Web 3 and Metaverse</a></li>
              <li><a href="#advanced-courses" className="hover:text-gray-500">Cloud-Native Computing</a></li>
              <li><a href="#advanced-courses" className="hover:text-gray-500">AI & Deep Learning</a></li>
              <li><a href="#advanced-courses" className="hover:text-gray-500">Ambient Computing & IoT</a></li>
              <li><a href="#advanced-courses" className="hover:text-gray-500">Genomics & Bioinformatics</a></li>
              <li><a href="#advanced-courses" className="hover:text-gray-500">Network Automation</a></li>
            </ul>
          </div>

          {/* Social Media Links and Email Section */}
          <div className="w-full sm:w-1/2 md:w-1/3 lg:w-1/4 mb-8 text-center">
            <h3 className="text-2xl font-semibold mb-4">Social Links</h3>
            <div className="flex justify-center space-x-4 mb-6">
              <a href="https://www.facebook.com/TeamKTessori" target="_blank" rel="noopener noreferrer">
                <FaFacebook size={30} className="text-[#1877F2]" /> {/* Facebook blue */}
              </a>
              <a href="https://twitter.com/KamranTessoriPk" target="_blank" rel="noopener noreferrer">
                <FaTwitter size={30} className="text-[#1DA1F2]" /> {/* Twitter blue */}
              </a>
              <a href="https://www.youtube.com/@KamranTessorikk" target="_blank" rel="noopener noreferrer">
                <FaYoutube size={30} className="text-[#FF0000]" /> {/* YouTube red */}
              </a>
              <a href="https://www.instagram.com/KamranTessoriPk/" target="_blank" rel="noopener noreferrer">
                <FaInstagram size={30} className="text-[#E4405F]" /> {/* Instagram gradient */}
              </a>
            </div>

            {/* Email Section */}
            <a href="mailto:education@governorsindh.com" className="flex items-center justify-center text-xl text-gray-700 hover:text-gray-900">
              <FaEnvelope size={20} className="mr-2" />
              education@governorsindh.com
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
