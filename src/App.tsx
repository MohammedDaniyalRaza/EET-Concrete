import { Suspense, lazy } from 'react';
import { AnimatePresence } from 'framer-motion';
import { Route, Routes, useLocation } from 'react-router-dom';
import { Footer } from './components/layout/Footer';
import { MobileCallBar } from './components/layout/MobileCallBar';
import { Navbar } from './components/layout/Navbar';
import { Preloader } from './components/layout/Preloader';
import { ScrollToTop } from './components/layout/ScrollToTop';
import { useLenis } from './hooks/useLenis';

const Home = lazy(() => import('./pages/Home'));
const Services = lazy(() => import('./pages/Services'));
const ServiceDetail = lazy(() => import('./pages/ServiceDetail'));
const Projects = lazy(() => import('./pages/Projects'));
const About = lazy(() => import('./pages/About'));
const Contact = lazy(() => import('./pages/Contact'));
const NotFound = lazy(() => import('./pages/NotFound'));

function RouteLoader() {
  return (
    <div className="min-h-[70vh] flex items-center justify-center bg-[#0B0D0C]">
      <div className="w-8 h-8 rounded-full border-2 border-[#7CFF3A]/25 border-t-[#7CFF3A] animate-spin" />
    </div>
  );
}

export default function App() {
  const location = useLocation();
  useLenis();

  return (
    <div className="min-h-screen w-full flex flex-col bg-[#0B0D0C] text-[#F2F5F1] overflow-x-clip">
      <Preloader />
      <ScrollToTop />
      <Navbar />

      <main className="flex-1 w-full min-w-0">
        <Suspense fallback={<RouteLoader />}>
          <AnimatePresence mode="wait">
            <Routes location={location} key={location.pathname}>
              <Route path="/" element={<Home />} />
              <Route path="/services" element={<Services />} />
              <Route path="/services/:slug" element={<ServiceDetail />} />
              <Route path="/projects" element={<Projects />} />
              <Route path="/about" element={<About />} />
              <Route path="/contact" element={<Contact />} />
              <Route path="*" element={<NotFound />} />
            </Routes>
          </AnimatePresence>
        </Suspense>
      </main>

      <Footer />
      <MobileCallBar />
    </div>
  );
}
