import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./App.css";

import Footer from "./components/Footer";
import Header from "./components/Header/Header";
import Home from "./pages/Home/Home";
import CreateDict from "./pages/CreateDict";
import LearnWords from "./pages/LearnWords/LearnWords";
import Repeat from "./pages/Repeat";
import SidePanel from "./components/SidePanel/SidePanel";
import ScrollToTop from "./utils/scrollToTop";
import List from "./pages/List/List";
import Reset from "./pages/Reset";
import Registration from "./pages/Registration/Registration";
import Authentication from "./pages/Authentication/Authentication";

import RotatingBackground from "./components/RotatingBackground";

const App = () => {
  return (
    <main className="relative flex flex-col w-full overflow-x-hidden">
      <RotatingBackground />
      <Router>
        <ScrollToTop />
        <Header />
        <SidePanel />
        <div className="flex flex-col justify-center mt-32">
          <div className="my-28 sm:mx-20 lg:mx-48 xl:mx-52 2xl:mx-56">
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/createdict" element={<CreateDict />} />
              <Route path="/university" element={<LearnWords />} />
              <Route path="/repeat" element={<Repeat />} />
              <Route path="/list" element={<List />} />
              <Route path="/reset" element={<Reset />} />
              <Route path="/Registration" element={<Registration />} />
              <Route path="/Authentication" element={<Authentication />} />
            </Routes>
          </div>
        </div>
        <Footer />
      </Router>
    </main>
  );
};


export default App;

