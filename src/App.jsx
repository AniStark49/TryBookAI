import Footer from "./components/Footer";
import Navbar from "./components/Navbar"
import Overview from "./components/Overview"
import Pricing from "./components/Pricing"
import Tutorial from "./components/Tutorial";
import { useState } from "react";


function App() {
  const [isDarkMode, setIsDarkMode] = useState(true);

  const toggleDarkMode = () => {
    setIsDarkMode(!isDarkMode);
    document.body.classList.toggle("dark", !isDarkMode);
  };
  return (
    
    <div className={`pb-2  ${isDarkMode ? "bg-background text-text" : "bg-text text-background"}`}>
      <Navbar isDarkMode={isDarkMode} toggleDarkMode={toggleDarkMode} />
      <div className="px-8">
      <Overview isDarkMode={isDarkMode}/>
      <Tutorial isDarkMode={isDarkMode}/>
      <Pricing isDarkMode={isDarkMode} />
      </div>
      <Footer isDarkMode={isDarkMode}/>
    </div>
  )
}

export default App
