import {BrowserRouter,Routes,Route} from "react-router-dom";
import {registroUsuario} from "./pages/registroUsuario";

function App() {
  return (
    
    <BrowserRouter>
      <Routes>
        <Route path="/task" element={<registroUsuario />} />
    </Routes>
    </BrowserRouter>,

    
  );
}
export default App;




