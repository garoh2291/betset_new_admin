import "./App.css";
import { BrowserRouter } from "react-router-dom";
import { RouteComponent } from "./Routes";
import { GameContextProvider } from "./context/providers";

function App() {
  return (
    <GameContextProvider>
      <BrowserRouter>
        <div className="App">
          <RouteComponent />
        </div>
      </BrowserRouter>
    </GameContextProvider>
  );
}

export default App;
