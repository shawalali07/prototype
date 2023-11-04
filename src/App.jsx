import { Footer } from "./layout/Footer";
import { Navbar } from "./layout/Navbar";
import { MarketPlace } from "./pages/MarketPlace";

function App() {
  return (
    <div className='text-sm'>
      <Navbar />
      <MarketPlace />
      <Footer />
    </div>
  );
}

export default App;
