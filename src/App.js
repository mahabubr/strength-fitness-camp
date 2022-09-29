import { useEffect } from 'react';
import './App.css';
import Home from './components/Home/Home';
import AOS from "aos";
import "aos/dist/aos.css";
import Blog from './components/Blog/Blog';

function App() {
  
  useEffect(() => {
    AOS.init();
    AOS.refresh();
  }, []);

  return (
    <div>
      <Home />
      <Blog />
    </div>
  );
}

export default App;
