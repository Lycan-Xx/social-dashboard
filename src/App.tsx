import Hero from "./components/Hero";
import Instructions from "./components/Instructions";
import Share from "./components/Share";

function App() {
  return (
    <div className="min-h-screen bg-neutral-900">
      <Hero />
      <Instructions />
      <Share />
    </div>
  );
}

export default App;
