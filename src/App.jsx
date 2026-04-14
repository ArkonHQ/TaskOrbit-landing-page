import Hero from "./sections/Hero.jsx";
import Header from "./sections/Header.jsx";
import Features from "./sections/Features.jsx";
import Flow from "./sections/Flow.jsx";
import ForWhoS from "./sections/ForWho's.jsx";
import Footer from "./sections/Footer.jsx";
import Cta from "./sections/Cta.jsx";

const App = () => {
  return (
    <main className="relative">
      <Header />
      <Hero />
      <Features />
      <Flow />
      <ForWhoS />
      <Cta />
      <Footer />
    </main>
  );
};

export default App;
