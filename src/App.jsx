import { Routes, Route } from "react-router-dom";
import NavBar from "./components/layout/NavBar";
import Footer from "./components/layout/Footer";
import HomePage from "./pages/HomePage";
import AboutPage from "./pages/AboutPage";
import Services from "./pages/Services";
import ServiceDetail from "./pages/ServiceDetail";
import useScrollToHash from "./lib/useScrollToHash";
import PrivacyPolicy from "./pages/PrivacyPolicy.jsx";
import Accessibility from "./pages/Accessibility.jsx";
import Terms from "./pages/Terms.jsx";

export default function App() {
  useScrollToHash();

  return (
    <div className="min-h-screen bg-[#FBF8F3] font-sans antialiased">
      <NavBar />
      <main>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/about" element={<AboutPage />} />
          <Route path="/services" element={<Services />} />
          <Route path="/services/:slug" element={<ServiceDetail />} />
          <Route path="/contact" element={<HomePage />} />
          <Route path="*" element={<HomePage />} />
          <Route path="/privacy-policy" element={<PrivacyPolicy />} />
          <Route path="/accessibility" element={<Accessibility />} />
          <Route path="/terms" element={<Terms />} />
        </Routes>
      </main>
      <Footer />
    </div>
  );
}
