import logo from './logo.svg';
import './App.css';
import Header from './Main-Contents/Header/Header';
import Footer from './Main-Contents/Footer/Footer';
import PreFooter from './Main-Contents/PreFooter/PreFooter';
import Ourteam from './Main-Contents/OurTeam/Ourteam';
import OurteamCard from './Main-Contents/OurTeam/OurteamCard/OurteamCard';
import Experties from './Main-Contents/Experties/Experties';
import Blogs from './Main-Contents/Blogs/Blogs';
import BlogInside from './Main-Contents/Blog-inside/BlogInside';
import Welcome from './Main-Contents/Welcome/Welcome';
function App() {
  return (
    <div className="App">
       <Header />
       {/* <div style={{width:"100%",height:"100vh",background:"red"}}>
         Cheeck
       </div> */}
       {/* <Experties /> */}
       {/* <Blogs /> */}
       {/* <BlogInside /> */}
       <Welcome />
      <PreFooter />
      <Footer /> 
       {/* <Ourteam /> */}
      {/* <OurteamCard /> */}
    </div>
  );
}

export default App;
