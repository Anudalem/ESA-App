import { useState } from "react";
import Nav from "./components/Nav";
// import "./App.css";
import Sec from "./components/Sec";
import Hero from "./components/hero";
import Aboutus from "./components/Aboutus";
import Service from "./components/Service";
import Footer from "./components/FooterHome";

// import Contactus from "./components/Contactus";
function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <Nav />
      {/* <h1 className="text- ">Hello World</h1>
      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p> */}
      <Hero />
      <Aboutus />
      <Service />
      {/* <Testimonials /> */}
      <Sec />
      <Footer />
    </>
  );
}

export default App;
