import About from "./components/About";
import Contact from "./components/Contact";
import Events from "./components/Events";
import FAQ from "./components/FAQ";
import Footer from "./components/Footer";
import Header from "./components/Header";
import Hero from "./components/Hero";
import Members from "./components/Members";
import TicketsSection from "./components/Ticket";

function App() {
  return <div className="min-h-screen font-Montserrat antialiased">
    <Header />
    <main>
      <Hero/>
      <TicketsSection />
      <About />
      <Members />
      <Events />  
      <FAQ />
      <Contact />
    </main>
    <Footer />
  </div>;
}

export default App;
