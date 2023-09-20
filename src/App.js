import logo from './logo.svg';
import './App.css';
import Header from './Main-Contents/Header/Header';
import Footer from './Main-Contents/Footer/Footer';
import PreFooter from './Main-Contents/PreFooter/PreFooter';
import Ourteam from './Main-Contents/OurTeam/Ourteam';
import OurteamCard from './Main-Contents/OurTeam/OurteamCard/OurteamCard';
function App() {
  return (
    <div className="App">
      {/* <Header />
       <div style={{width:"100%",height:"100vh",background:"red"}}>
         Cheeck
       </div>
      <PreFooter />
      <Footer /> */}
       {/* <Ourteam /> */}
      <OurteamCard />
    </div>
  );
}

export default App;
