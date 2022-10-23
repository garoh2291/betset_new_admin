import "./App.css";
import { BrowserRouter } from "react-router-dom";
import { Header } from "./Header";
import { RouteComponent } from "./Routes";

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Header />
        <RouteComponent />
      </div>
    </BrowserRouter>
  );
}

export default App;
