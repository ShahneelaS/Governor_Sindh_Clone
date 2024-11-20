import './globals.css';
import Header from './components/Header';
import Navbar from './components/Navbar';
import HeroSection from './components/HeroSection';
import AboutSection from './components/AboutSection';
import Footer from './components/Footer';
import CoursesSection from './components/CoursesSection';

const Home = () => {
  return (
    <div>
      <Header />
      <Navbar />
      <HeroSection />
      <AboutSection />
      <CoursesSection />
      <Footer />
    </div>
  );
};

export default Home;
