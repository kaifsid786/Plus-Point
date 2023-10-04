import './App.css';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from './Main-Contents/Home/Home';
import Ourteam from './Main-Contents/OurTeam/Ourteam';
import Vision from './Main-Contents/Vision/Vision';
import FAQs from './Main-Contents/FAQs/FAQs';
import Media from './Main-Contents/Media/Media';
function App() {
  return (
    <div className="App">
        <BrowserRouter>
           <Routes>
              <Route path='/' element={<Home />} />
              <Route path='/ourTeam' element={<Ourteam />} />
              <Route path='/ourVision' element={<Vision />} />
              <Route path='/media' element={<Media />} />
              <Route path='/faqs' element={<FAQs />} />
           </Routes>
        </BrowserRouter>
    </div>
  );
}

export default App;
