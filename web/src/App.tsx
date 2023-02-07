import "./Globalstyles.sass";
import RotaMain from "./routes";
import { ApiContextProvider } from "./context/apiContext";
import { ToastContainer} from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
function App() {
  return (
    <div className="App">
      <ApiContextProvider>
      <RotaMain />
      <ToastContainer/>
      </ApiContextProvider>
    </div>
  );
}

export default App;
