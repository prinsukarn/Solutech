import { Route, Routes } from "react-router-dom";
import Footer from "./Components/Footer";
import Header from "./Components/Header";
import Blog from "./Pages/Blog";
import Career from "./Pages/Career";
import Gallery from "./Pages/Gallery";
import Home from "./Pages/Home";
import Login from "./Pages/Login";
import Register from "./Pages/Register";
import About from "./Pages/About";
import Service from "./Pages/Service";
import PrivacyPolicy from "./Components/PrivacyPolicy";
import TermsandConditions from "./Components/Terms&Conditions";

function App() {
  return (
    <div>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} exact />
        <Route path="/login" element={<Login />} />
        <Route path="/about" element={<About />} />
        <Route path="/register" element={<Register />} />
        <Route path="/gallery" element={<Gallery />} />
        <Route path="/blog" element={<Blog />} />
        <Route path="/career" element={<Career />} />
        <Route path="/service" element={<Service />} />
        <Route path="/privacypolicy" element={<PrivacyPolicy />} />
        <Route path="/termsandconditions" element={<TermsandConditions />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
