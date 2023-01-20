import Header from "./components/Header/Header";
import MenuBar from "./components/MenuBar/MenuBar";
import Content from "./components/Content/Content";
import Footer from "./components/Footer/Footer";
import "./App.css";
import Star from "./components/Star/Star";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import About from "./components/About/About";
import Mywork from "./components/Mywork/Mywork";
import Mycriativity from "./components/Mycriativity/Mycriativity";

function App() {
  return (
    <BrowserRouter>
      <div className="fon">
        <Star />
        <Star />
        <div className="app">
          <Header />
          <MenuBar />
          <div className="contentt">
            <Routes>
              <Route to="/Content" path="/" element={<Content />} />
              <Route path="/mywork" element={<Mywork />} />
              <Route path="/about" element={<About />} />
              <Route path="/mycriativity" element={<Mycriativity />} />
            </Routes>
          </div>
          <Footer />
        </div>
      </div>
    </BrowserRouter>
  );
}

export default App;
