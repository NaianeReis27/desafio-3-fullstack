import "./Globalstyles.sass";
import RotaMain from "./routes";
import { ApiContextProvider } from "./context/apiContext";

function App() {
  return (
    <div className="App">
      <ApiContextProvider>
      <RotaMain />
      </ApiContextProvider>
    </div>
  );
}

export default App;
