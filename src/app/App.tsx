import { LanguageProvider } from "./context/LanguageContext";
import { Navbar } from "./components/Navbar";
import { Hero } from "./components/Hero";
import { About } from "./components/About";
import { LocalFriend } from "./components/LocalFriend";
import { Fitness } from "./components/Fitness";
import { Services } from "./components/Services";
import { Guide } from "./components/Guide";
import { Itinerary } from "./components/Itinerary";
import { Experience } from "./components/Experience";
import { Contact } from "./components/Contact";
import { Footer } from "./components/Footer";

export default function App() {
  return (
    <LanguageProvider>
      <div style={{ background: "#0d0d0d" }}>
        <Navbar />
        <Hero />
        <About />
        <LocalFriend />
        <Fitness />
        <Services />
        <Guide />
        <Itinerary />
        <Experience />
        <Contact />
        <Footer />
      </div>
    </LanguageProvider>
  );
}