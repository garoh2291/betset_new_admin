import "./App.css";
import { BrowserRouter } from "react-router-dom";
import { Header } from "./Header";
import { RouteComponent } from "./Routes";
import { GameContextProvider } from "./context/providers";

function App() {
  return (
    <GameContextProvider>
      <BrowserRouter>
        <div className="App">
          <Header />
          <RouteComponent />
        </div>
      </BrowserRouter>
    </GameContextProvider>
  );
}

export default App;
