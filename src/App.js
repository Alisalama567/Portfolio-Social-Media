import "./App.css"
import Home from "./Home/Home";
import Profile from "./components/Profile/Profile";
import Auth from "./components/Athu/Auth"; 
function App() {
  return (
    <div className="App">
        <div className="blur " style={{top: '-18%' , right:'0'}}></div>
        <div className="blur" style={{top:'36%', left:'-8rem'}}></div>
        <Home/>
        {/* <Profile/> */}
        {/* <Auth/> */}
    </div>
  );
}

export default App;
