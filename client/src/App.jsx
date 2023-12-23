import {BrowserRouter,Routes,Route} from "react-router-dom";
import {registroUsuario} from "./pages/registroUsuario";
import Navbar from './components/NavBar';
import BottomBar from './components/BottomBar';
import Ruleta from './components/ruleta'; // Importa el componente Ruleta






function App() {
  return (
    
    <div>
    <Navbar />
    <Carousel>
      {[...new Array(CARDS)].map((_, i) => (
        <Card title={'Card ' + (i + 1)} content='Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.'/>
      ))}
    </Carousel>
  </div>

    <BottomBar />
  </div>
    
  );
}
  

export default App; 




