import { BrowserRouter } from "react-router-dom";
import "./App.css";
import Header from "./components/header/Header";
import SpotLight from "./components/spotlight/SpotLight";
import Banner from "./components/banner/Banner";
import AI from "./components/ai/AI";
import Home from "./components/home/Home";
import Location from "./components/location/Location";
import Footer from "./components/footer/Footer";
import Slider from "./components/slider/Slider";
function App() {
  return (
    <div>
      <BrowserRouter>
        <Header />
        <Home />
        <SpotLight />
        <Banner />
        <AI />
        <Slider />
        <Location />
        <Footer />
      </BrowserRouter>
    </div>
  );
}

export default App;
